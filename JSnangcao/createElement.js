//Cú pháp tạo element với DOM
const root = document.querySelector('.root');
//Hàm tạo một element trong dom
const element = document.createElement('div');
element.innerHTML = `Long`;
element.title = 'Hello guy';
//Hàm thêm một element con vào element cha
root.appendChild(element);
console.log(element);
