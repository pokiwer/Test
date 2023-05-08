//postItem.js
//Nhận đối số bằng props

function PostItem(props)
{
    return(
        <div className = 'post-item'>
            <img src = {props.image} alt = {props.title}/>
            <h2 className = 'post-title'>{props.title}</h2>
            <p className = 'post-desc'>{props.description}</p>
            <p className = 'post-published'>{props.publish}</p>
        </div>
    )
}

//Page.js
//Tái sử dụng component, truyền các tham số tự đặt tên
function Page()
{
    return (
        <div>
            <PostItem
                image = 'https://200lab-blog.imgix.net/2021/07/1_h5UGPzaL1E4dIy_JWDrsAw.png'
                title = 'Xây dựng Website với ReactJS'
                description = 'Props là gì? Dùng props khi nào?'
                publish = 'Một ngày trước'
            />
            <PostItem
                image = 'https://www.freecodecamp.org/news/content/images/2023/04/JavaScript-Blog-Cover.png'
                title = 'Học JavaSript cơ bản'
                description = 'Tìm hiểu về Callback'
                publish = 'Hai ngày trước'
            />
            <PostItem
                image = 'https://www.freecodecamp.org/news/content/images/2023/04/JavaScript-Blog-Cover.png'
                title = 'Học JavaScript nâng cao'
                description = 'Làm quen với ES6'
                publish = '5 phút trước'
            />
        </div>
    )
}

//index.js
const wrapper = ReactDOM.createRoot(document.getElementById('props'));
wrapper.render(<Page/>)

const course =
[
    {
      "id": 15,
      "title": "HTML CSS Pro",
      "slug": "htmlcss",
      "description": "Từ cơ bản tới chuyên sâu, thực hành 8 dự án, hàng trăm bài tập, trang hỏi đáp riêng, cấp chứng chỉ sau khóa học và mua một lần học mãi mãi.",
      "image": "courses/15/62f13d2424a47.png",
      "icon": "courses/15/62385d6c63dfa.png",
      "video_type": "upload",
      "video": null,
      "old_price": 2499000,
      "price": 1299000,
      "pre_order_price": 699000,
      "students_count": 2208,
      "is_pro": true,
      "is_coming_soon": false,
      "is_selling": true,
      "published_at": "2022-08-18T17:00:00.000000Z",
      "is_registered": false,
      "user_progress": 0,
      "last_completed_at": null,
      "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png",
      "icon_url": "https://files.fullstack.edu.vn/f8-prod/courses/15/62385d6c63dfa.png",
      "video_url": "",
      "landing_page_url": "/landing/htmlcss",
      "is_pre_order": false,
      "is_published": true
    },
    {
      "id": 19,
      "title": "JavaScript Pro",
      "slug": "javascript-pro",
      "description": "Khóa học JavaScript Pro",
      "image": "courses/19/62f13cb607b4b.png",
      "icon": "courses/19/62f13cb685c81.png",
      "video_type": "upload",
      "video": null,
      "old_price": 0,
      "price": 0,
      "pre_order_price": 0,
      "students_count": 0,
      "is_pro": true,
      "is_coming_soon": true,
      "is_selling": false,
      "published_at": "2023-04-30T17:00:00.000000Z",
      "is_registered": false,
      "user_progress": 0,
      "last_completed_at": null,
      "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb607b4b.png",
      "icon_url": "https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb685c81.png",
      "video_url": "",
      "landing_page_url": "/landing/javascript-pro",
      "is_pre_order": false,
      "is_published": true
    },
    {
      "id": 20,
      "title": "ReactJS Pro",
      "slug": "reactjs-pro",
      "description": "Khóa học ReactJS Pro",
      "image": "courses/20/62f13dded314e.png",
      "icon": "courses/20/62f13ddf5e7f9.png",
      "video_type": "upload",
      "video": null,
      "old_price": 0,
      "price": 0,
      "pre_order_price": 0,
      "students_count": 0,
      "is_pro": true,
      "is_coming_soon": true,
      "is_selling": false,
      "published_at": "2023-07-31T17:00:00.000000Z",
      "is_registered": false,
      "user_progress": 0,
      "last_completed_at": null,
      "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/20/62f13dded314e.png",
      "icon_url": "https://files.fullstack.edu.vn/f8-prod/courses/20/62f13ddf5e7f9.png",
      "video_url": "",
      "landing_page_url": "/landing/reactjs-pro",
      "is_pre_order": false,
      "is_published": false
    }
]

function CourseItem({props,onclick})
{
    return(
        <React.Fragment>
            <img src = {props.image_url} alt = {props.title}/>
            {/* Cách 1: Khi không dùng bind hoặc arrow function thì không được truyền tham số trực tiếp */}
            {/* <h1 onClick = {showName}>{props.title}</h1> */}
            <h1 onClick = {() =>onclick(props.title)}>{props.title}</h1>
            <p>{props.description}</p>
            <p>Số lượng học viên: {props.students_count}</p>
        </React.Fragment>
    )
    // Cách 2: Gọi hàm khi không dùng truyền tham số trực tiếp
    // function showName()
    // {
    //     alert(props.title)
    // }    
}
//Gọi hàm truyền tham số trực tiếp
// function showName(name)
// {
//     alert(name)
// }
//Component course
function Course()
{
    function showName(name)
    {
        alert(name)
    }   
    return course.map(course => {
        return(
            <div>
                <CourseItem 
                    key = {course.id}
                    props = {course}
                    // Cách 3: truyền hàm trong props
                    onclick = {showName}
                />
            </div>
        )
    })
}


const renderCourse = ReactDOM.createRoot(document.getElementById('course'));
renderCourse.render(<Course/>)