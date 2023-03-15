var hello = document.querySelector('div');
hello.onclick = (e) =>
{
    console.log('Hello!');
}

var bye = document.querySelector('button');
bye.onclick = (e) => 
{
    //Ngăn nổi bọt
    e.stopPropagation();
    console.log('Good Bye!');
}