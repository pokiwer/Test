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

//Để gọi từ hàm person2 mà vẫn ràng buộc với đối tượng person => dùng Bind
//Ở đây phương thức getName bị ràng buộc với đối tượng person => this = person
//Bind sẽ tạo ra một hàm mới nhưng vẫn nhận đối số như hàm ban đầu
const person3 = person.getName.bind(person);
console.log(person3())//Output Đặng

const teacher =
{
    firstName : 'Minh',
    lastName : 'Thu'
}

const me =
{
    firstName: 'Long',
    lastName: 'Đặng',
    showFullName()
    {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

const he =
{
    firstName: 'Long',
    lastName: 'Đặng',
    showFullName(first,last)
    {
        console.log(`${first}: ${this.firstName} ${last}: ${this.lastName}`)
    }
}
//Hàm call kết hợp vừa gọi hàm vừa dùng hàm bind để ràng buộc this
//Sự khác nhau là hàm bind sẽ tạo ra một hàm mới còn hàm call sẽ sử dùng hàm của đối tượng gọi nó
//Đối tượng gọi nó là me nhưng vẫn tạo được ràng buộc với teach và sử dụng chính hàm của me
me.showFullName.call(teacher)//output Minh Thu


he.showFullName.call(teacher,'Họ','Tên') //output Họ: Minh Tên: Thu
//Hàm apply hoạt động tương tự hàm call nhưng các đối số truyền dưới dạng mảng
he.showFullName.apply(teacher,['Họ','Tên']) //output Họ: Minh Tên: Thu

