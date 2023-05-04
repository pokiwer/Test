
//Cú pháp tạo element với reactjs 
//React.createElement(type,props,children,n)
//Type là thẻ html 
//props để chứa các thuộc tính của element trong một object
//Từ sau props là các children để thêm các thành phần trong element
const h1 = React.createElement('h1',{
    title: 'Hello guy',
    className: 'heading'
},'Ngọc')

const postItem = React.createElement(
    'div',
    {
        className: 'post-item'
    },
    React.createElement(
        'h2',
        {
            title: 'Học React tại F8'
        },
        'Học lập trình web cơ bản'
    ),
    React.createElement(
        'p',
        {},
        'Học ReactJS từ cơ bản đến nâng cao'
    )
)
//Get element root
const rootElement = document.getElementById('root');

const exercise = React.createElement(
    'div',
    {},
    React.createElement(
        'h1',
        { title: 'Hello', className: 'heading' },
        'Hello Guys!'
    ),
    React.createElement(
        'ul',
        {},
        React.createElement('li', {}, 'JavaScript'),
        React.createElement('li', {}, 'ReactJS')
    )
)
//Cách để render nhiều reactDOM element vào cùng một container
//Tạo createElement bao ngoài reactDom element
const container = React.createElement('div',{},postItem,exercise)
//Dùng reactDom để render UI
//ReactDom.render nhận 3 đối số: reactDom element, Container và callback
ReactDOM.render(container,rootElement)

