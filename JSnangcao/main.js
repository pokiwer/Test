//IIFE: hàm gọi ngay lập tức
(function (message){
    console.log('Hello',message)
})('Long')

//Closure
function createList()
{
    const Student = [];
    return {
        Add(data) {
            Student.push(data);
        },
        Edit(data,change) {
            
            const index = Student.findIndex(function(item)
            {
                return item === data;
            })
            if(index < 0)
            {
                console.log('Không tìm thấy sinh viên');
            }
            else{
                Student[index] = change;
            }
            
        },
        Delete(data) {
            const index = Student.findIndex(
                function(item)
                {
                    return item === data;  
                }
            )
            Student.splice(index,1);
        },
        Show()
        {
            console.log(Student);
            
        }
    }
    
}

function Edit()
{
    const data = document.getElementById('Index').value;
    console.log(data)
    const change = document.getElementById('Change').value;
    Student.Edit(data,change)
}
//Chạy hàm trong createList và lưu vào một biến toàn cục Student
const Student = createList();
Student.Add('Long');
Student.Add('Quốc');
Student.Show()



