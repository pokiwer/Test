//IIFE: hàm gọi ngay lập tức
//Hàm được bắt đầu bằng dấu ()
(function (message){
    console.log('Hello',message)
//Dùng dấu () cuối hàm để gọi hàm ngay lập tức
})('Long')

//Closure
function createList()
{
    //Biến Student sẽ không thể truy cập từ bên ngoài
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



function a(x) {
    x++;
    return function () {
        console.log(++x);
    };
}

let x = a(1);
x();
x();
x();


var tip = 100;

(function () {
  console.log("I have $" + husband());

  function wife() {
    return tip * 2;
  }

  function husband() {
    return wife() / 2;
  }

  var tip = 10;
})();
//output = I have NAN vì biến var khai báo tip = 10 hoisting sẽ có giá trị undefined
//Khai báo bằng let, const sẽ không được khởi tạo giá trị

//Biến global
this.name = 'Long';
const person = 
{
    name: 'Đặng',
    getName(){
        return `${this.name}`
    }
}

//Person2 sẽ tham chiếu đến ô nhớ chứa hàm getName
//persơn2 sẽ là một hàm
const person2 = person.getName;
//Case 1
//getName được gọi từ person
console.log(person.getName()) // Output = Đặng
//Case 2
//getName được gọi từ global
console.log(person2()); // Output = Long



