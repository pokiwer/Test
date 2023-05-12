const Form = {
    Input()
    {
        return <input />
    },
    Checkbox()
    {
        return <input type = 'checkbox'/>
    }
}

const ExtendForm = function()
{
    const type = 'Input';
    //Không thể gọi thực tiếp object[key], phải gán vào một biến khác
    const TypeComponent = Form[type]
    return(
        <TypeComponent />
    )
}

const Btn = function({title,href,onClick})
{
    let Type = 'button'
    const props = {}
    if(href){
        Type = 'a'
        props.href = href
    }
    if(onClick)
    {
        props.onClick = onClick
    }
    return(
        <Type onClick = {props.onClick} href = {props.href}>{title}</Type>
        //Hoặc dùng spread
        // <Type {...props}>{title}</Type>
    )

}
const RenderBtn = function()
{
    return(
        <Btn 
            title = "Click Me!"
            href = 'https://fullstack.edu.vn/'
            onClick = {() => console.log(Math.round(Math.random() * 10))}
        >
        </Btn>
    )
}

function List({data,children})
{
    return(
        <ul>
            {/* {data.map((data,index) => <li key = {index}>{data}</li>)} */}
            {/* Render dùng callback */}
            {/* Phải dùng spread để nhận được index trong mảng */}
            {data.map((...item) => children(...item))}
        </ul>
    )
}

function ListCar()
{
    let cars = ['Mercedes','BMW','Chevy']
    return(
        <List data = {cars}>
            {(item,index) => <li key = {index}>{item}</li>}
        </List>
    )
}

const person ={
    name: 'Long',
    age: 22,
    class: '60k3',
    major: 'IT'
}

function ObjKey({person})
{
    const arr = []
    for(var item in person)
    { 
        arr.push(item)
    }
    return(
        <ul>
            {arr.map((item) => <li key = {item}>{item}: {person[item]}</li>)}
        </ul>
    )
}

function RenderKey()
{
    return(
        <div>
            <ObjKey person = {person}/>
        </div>
    )
}
const domEvent = ReactDOM.createRoot(document.getElementById('domEvent'));
// domEvent.render(<ExtendForm/>);
// domEvent.render(<ListCar/>)
domEvent.render(<RenderKey/>)
