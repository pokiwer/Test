const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const btnPlay = $('.btn-toggle-play')
var playList = $('.playlist')
const heading = $('header > h2');
const thumbnail = $('.cd-thumb');
const audio = $('#audio');
const cd = $('.cd');
const player = $('.player')
const progress = $('#progress')
const next = $('.btn-next')
const prev = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const selectSong = $('.song.active')

const app =
{
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs:
        [
            {
                name: 'Cheri Lady',
                singer: 'Melodi',
                path: 'asset/music/song1.mp3',
                image: 'asset/image/image1.jpg'
            },
            {
                name: 'Forever',
                singer: 'Martin Garrix',
                path: 'asset/music/song2.mp3',
                image: 'asset/image/image2.jpg'
            },
            {
                name: 'Lion in the wild',
                singer: 'Third Party',
                path: 'asset/music/song3.mp3',
                image: 'asset/image/image3.jpg'
            },
            {
                name: 'Beautiful now',
                singer: 'Zedd',
                path: 'asset/music/song4.mp3',
                image: 'asset/image/image4.jpg'
            },
            {
                name: 'Let me love you',
                singer: 'Justin Bieber',
                path: 'asset/music/song5.mp3',
                image: 'asset/image/image5.jpg'
            },
            {
                name: 'AOV Lunar',
                singer: 'Arena of valor',
                path: 'asset/music/song6.mp3',
                image: 'asset/image/image6.jpg'
            },
            {
                name: 'AOV soundtrack',
                singer: 'Arena of valor',
                path: 'asset/music/song7.mp3',
                image: 'asset/image/image7.jpg'
            }
        ],
    render: function () {
        var htmls = this.songs.map((song, index) => {
            return `
            <div class="song ${index === app.currentIndex ? 'active' : ''}" data-index = "${index}">
            <div class="thumb" style="background-image: url(${song.image})">
            </div>
            <div class="body">
              <h3 class="title">${song.name}</h3>
              <p class="author">${song.singer}</p>
            </div>
            <div class="option">
              <i class="fas fa-ellipsis-h"></i>
            </div>
          </div>
            `
        })
        playList.innerHTML = htmls.join('')

    },
    handelEvent: function () {

        var cdWidth = cd.offsetWidth;
        //Xử lí cuộn trang
        document.onscroll = function () {
            const winTop = window.scrollY;
            const newcdWidth = cdWidth - winTop;
            cd.style.width = newcdWidth > 0 ? newcdWidth + 'px' : 0;
            cd.style.opacity = newcdWidth / cdWidth;
        }

        //Xử lí đĩa cd quay/dừng
        const cdAnimate = cd.animate([
            { transform: 'rotate(360deg)' }
        ],
            {
                duration: 10000,
                iterations: Infinity
            }
        )
        cdAnimate.pause();
        //Xử lí khi bấm nút play
        btnPlay.onclick = function () {
            if (app.isPlaying) {
                audio.pause();
            }
            else {
                audio.play();
            }
        }

        //Khi bài hát đang chạy
        audio.onplay = function () {
            app.isPlaying = true;
            player.classList.add('playing')
            cdAnimate.play();
        }

        //Khi bài hát bị dừng    
        audio.onpause = function () {
            app.isPlaying = false;
            player.classList.remove('playing')
            cdAnimate.pause();
        }    

        //Khi bài hát hết
        audio.onended = function()
        {
            if(app.isRepeat == true)
            {
                btnPlay.click();
            }
            else{
                next.click();
            }
            
        }

        //Seek bài hát
        audio.ontimeupdate = function () {
            if (audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
                progress.value = progressPercent;
                
            }
        }

        //Xử lí tua bài hát
        progress.onchange = function (e) {
            const seekTime = audio.duration * e.target.value / 100;
            audio.currentTime = seekTime;
        }

        //Chuyển bài hát tiếp theo
        next.onclick = function()
        {
            if(app.isRandom == true)
            {
                app.randomSong();
            }
            else
            {
                app.nextSong();
            }
            audio.play();
            app.render();
        }

        //Chuyển bài hát trước đó
        prev.onclick = function()
        {
            if(app.isRandom == true)
            {
                app.randomSong();
            }
            else
            {
                app.prevSong();
            }
            audio.play();
            app.render();
        }

        //Bât tắt phát ngẫu nhiên bài hát
        randomBtn.onclick = function()
        {
            app.isRandom = !app.isRandom;
            randomBtn.classList.toggle('active',app.isRandom)
        }

        //Bài hát được tua lại
        repeatBtn.onclick = function()
        {
            app.isRepeat = !app.isRepeat;
            this.classList.toggle('active',app.isRepeat);
        }
 
        //Bài hát được chọn
        playList.onclick = function(e)
        {
            const selectIndex = e.target.closest('.song:not(.active)');
            if(selectIndex || e.target.closest('.option'))
            {
                if(selectIndex)
                {
                    app.currentIndex = Number(selectIndex.dataset.index);
                    app.loadCurrentSong();
                    app.render();
                    audio.play();
                }
            }
        }

    },
    defineProperties: function () {
        //Hàm object.defineproperty dùng để định nghĩa 
        //thuộc tính cho một đối tượng
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndex];
            }
        })
    },
    loadCurrentSong: function () {

        heading.textContent = this.currentSong.name;
        thumbnail.style.background = `url(${this.currentSong.image})`;
        audio.src = this.currentSong.path;
    },
    nextSong: function()
    {
        this.currentIndex ++;
        if(this.currentIndex > this.songs.length - 1)
        {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },
    prevSong: function()
    {
        this.currentIndex--;
        if(this.currentIndex < 0)
        {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },
    randomSong: function()
    {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * app.songs.length)
        } while (newIndex === app.currentIndex);
        app.currentIndex = newIndex;
        app.loadCurrentSong();
    },
    start: function () {
        this.defineProperties();
        this.handelEvent();
        this.loadCurrentSong();
        this.render();
    }
}

app.start();