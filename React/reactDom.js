
//Cú pháp tạo element với reactjs 
//React.createElement(type,props,children,n)
//Type là thẻ html 
//props để chứa các thuộc tính của element trong một object
//Từ sau props là các children để thêm các thành phần trong element
const h1 = React.createElement('h1',{
    title: 'Hello guy',
    className: 'heading'
},'Ngọc')

const arr = []

const postItem = React.createElement(
    'div',
    {
        className: 'post-item'
    },
    React.createElement(
        'h2',
        {
            title: 'Học React tại F8',
            style:{
                color: '#0033ff85'
            }
        },
        'Học lập trình web cơ bản'
    ),
    React.createElement(
        'p',
        {},
        'Học ReactJS từ cơ bản đến nâng cao'
    )
)

arr.push(postItem)
//Get element root
const rootElement = document.getElementById('root');

const exercise = React.createElement(
    React.Fragment,
    null,
    React.createElement(
        'h1',
        { title: 'Hello', 
        className: 'heading',
        style: {
            color: 'red'
        }
        },
        'Hello Guys!'
    ),
    React.createElement(
        'ul',
        {},
        React.createElement('li', null, 'JavaScript'),
        React.createElement('li', null,  'ReactJS')
    )
)
arr.push(exercise)
//Cách để render nhiều reactDOM element vào cùng một container
//Tạo fragment bao ngoài reactDom element
const container = React.createElement(React.Fragment,null,arr)
//Dùng reactDom để render UI
const root = ReactDOM.createRoot(rootElement)
root.render(container)
console.log(arr)



