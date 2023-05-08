//Cú pháp khai báo một function component
//Phải viết hoa chữ cái đầu nếu có nhiều kí tự
//Để thêm một component trong component => truyền component dạng đối số và gọi phương thức children
function Header(content)
{
    return (
        <div className = 'header'>
            Header ngoài
            {content.children}
        </div>
    )
}

function Content()
{
    return(
        <div className = 'content'>Content trong</div>
    )
}

function Footer()
{
    return (
        <div className = 'footer'>Footer</div>
    )
}
//Thêm vào như một tag html
const app =
(
    <div className = 'wrapper'>
        <Header>
            <Content/>
        </Header>    
        <Footer></Footer>
    </div>
)

const wrap = ReactDOM.createRoot(document.getElementById('app'));
wrap.render(app);
