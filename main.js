var post = 'http://localhost:3000/student';

var block = document.querySelector('#block');

//Hàm chạy khi bắt đầu
function app()
{
    getStudents(function(students)
    {
        render(students);
    });
    createForm();
}

app();

//Hàm lấy danh sách sinh viên
function getStudents(callback)
{
    fetch(post)
        .then(function(post)
        {
            return post.json();
        })
        .then(callback)
}
//Hàm render lên trình duyệt
function render(student)
{
    var html = student.map(function(data)
    {
        return `<li class = 'student-${data.id}'>
            <h2>${data.firstName}</h2>
            <p>
                ${data.lastName}
            </p>
            <button onclick='deleteStudent(${data.id})'>Delete</button>
        </li>`
    })
    html = html.join('');
    block.innerHTML = html;
}

//Hàm lấy thông tin sinh viên cần thêm
function createForm()
{
    var createBtn = document.querySelector('#create');
    createBtn.onclick = function()
    {
        var firstName = document.querySelector('input[name="firstName"]').value;
        var lastName = document.querySelector('input[name="lastName"]').value;
        
        var form = {
            firstName : firstName,
            lastName: lastName
        }
        createData(form,function()
        {
            getStudents(render)
        })
    }
}

//hàm thêm sinh viên
function createData(data,callback)
{
    var option = 
    {
        method : 'post',
        body : JSON.stringify(data),
        headers:{
            'content-Type': 'application/json'
        },
    }
    fetch(post,option)
        .then(function(reponse)
        {
            reponse.json();
        })
        .then(callback)
}

//hàm xóa sinh viên
function deleteStudent(id)
{
    var option =
    {
        method: 'delete',
        headers: {
        'content-Type':'application/json'
        }
    }
    fetch(post + '/' + id,option)
        .then(function(reponse)
        {
            reponse.json();
        })
        .then(function()
        {
            var studentItem = document.querySelector('.student-' + id);
        if(studentItem)
        {
            studentItem.remove();
        }
        })
}