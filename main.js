var post = 'https://jsonplaceholder.typicode.com/users'
fetch(post)
    .then(function(response)
    {
        return response.json();
    })
    .then(function(data)
    {
        var html = data.map(function(data)
        {
            return `<li>
                <h2>${data.name}</h2>
                <p>${data.email}</p>
                <p>${data.address.street}</p>
            </li>`;
        })
        html = html.join('');
        document.querySelector('#block').innerHTML = html;
    })
    .catch(function()
    {
        console.log('Error!')
    })