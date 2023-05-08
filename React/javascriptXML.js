const course =
[
    {
        name: 'Flutter'
    },
    {
        name: 'Dart'
    }
    ,{
        name: 'C Sharp'
    }
]



const ul =  
(<ul>
    {
        course.map((course,index) =>
            <li key = {index}>{course.name}</li>
        )
    }
</ul>
)

//Cách để render nhiều hơn một reactDOM mà không cần thêm div
//Bao các reactDOM bằng Fragment
const heading =
(
    <React.Fragment>
        <h1>Heading1</h1>
        <h2>Heading2</h2>
    </React.Fragment>
)

const jsx = document.getElementById('jsx');
const wrap = ReactDOM.createRoot(jsx);
wrap.render(ul);

const frag = ReactDOM.createRoot(document.getElementById('fragment'));
frag.render(heading)