var path = 'https://641bc6421f5d999a4469b0d5.mockapi.io/Students';
const catalog = document.getElementById('catalog')

function start()
{
    getStudents();
    createAdd();
} 

start();

//Hàm lấy danh sách sinh viên
function getStudents()
{
    fetch(path)
        .then(function(path)
        {
            student = path.json();
            return student;
        })
        .then(function(data)
        {
            var html = data.map(function(data)
            {
                return `<li class = 'student-${data.id}'>
            <h2>
                Name: <span>${data.Name}</span>
            </h2>
            <p>
                Age: <span>${data.Age}</span>
            </p>
            <button onclick='deleteStudent(${data.id})'>Delete</button>
            <button onclick='updateStudent(${data.id})'>Update</button>
            </li>`
            })
            html = html.join('');
            catalog.innerHTML = html;
        })
}

//Hàm tạo form thêm sinh viên
function createAdd()
{
    const btnStudent = document.getElementById('submit')
    btnStudent.onclick = function()
    {
        var name = document.querySelector('input[name="Name"]').value;
        var age = document.querySelector('input[name="Age"]').value;
        var form =
        {
            Name: name,
            Age: age
        };
        addStudent(form,function()
        {
            getStudents();
        });
    }
}

//Hàm thêm sinh viên
function addStudent(form,callback)
{
    var option = 
    {
        method : 'post',
        body : JSON.stringify(form),
        headers:{
            'content-Type': 'application/json'
        },
    }
    fetch(path,option)
        .then(function(option)
        {
            option.json();
        })
        .then(callback);
}
//Hàm xóa sinh viên
function deleteStudent(id)
{
    var option = 
    {
        method: 'delete',
        headers:
        {
            'content-Type': 'application/json'
        }
    }
    fetch(path + '/' + id,option)
        .then(function(option)
        {
            option.json();
        })
        .then(function()
        {
            var deleted = document.querySelector('.student-' + id);
            if(deleted)
            {
                deleted.remove();
            }
        })
}

//Hàm sửa thông tin sinh viên
function updateStudent(id)
{
    const btnStudent = document.getElementById('submit');
    btnStudent.textContent = 'Update';
    const name = document.querySelector('.student-' + id + '>h2>span').textContent;
    const age = document.querySelector('.student-' + id + '>p>span').textContent;
    document.querySelector('input[name="Name"]').value = name;
    document.querySelector('input[name="Age"]').value = age;
    btnStudent.onclick = function()
    {
        var form = 
        {
            Name: document.querySelector('input[name="Name"]').value,
            Age: document.querySelector('input[name="Age"]').value
        }
        update(id,form,function()
        {
            getStudents();
        })
        btnStudent.textContent = 'Create';
        document.querySelector('input[name="Age"]').value = "";
        document.querySelector('input[name="Name"]').value = "";
    }
}

//Hàm cập nhật sửa thông tin sinh viên
function update(id,form,callback)
{
    var option =
    {
        method: 'put',
        body: JSON.stringify(form),
        headers:
        {
            'content-Type': 'application/json'
        }
    }
    fetch(path + '/' + id,option)
        .then(function(option){
            option.json();
        })
        .then(callback)
}