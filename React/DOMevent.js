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

const domEvent = ReactDOM.createRoot(document.getElementById('domEvent'));
domEvent.render(<ExtendForm/>);