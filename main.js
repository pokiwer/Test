var btn = document.querySelectorAll('button')
for(var i = 0; i < btn.length; i++)
{
    btn[i].onclick = function(e)
{
    e.target.style.color = '#fff'
}
}
