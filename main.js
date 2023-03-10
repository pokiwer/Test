function render(html) {
    var add = document.querySelector('ul')
    add.innerHTML = html
}

render(`
    <li>Khóa học HTML</li>
    <li>Khóa học JS</li>
    <li>Khóa học PHP</li>
`)