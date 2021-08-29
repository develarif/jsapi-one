const loadApi = async () => {
    let url = 'https://randomuser.me/api/';
    let res = await fetch(url);
    let data = await res.json();
    allUsers(data.results[0]);
}
window.onload = loadApi();

const allUsers = users => {
    let elements = document.createElement('ul');
    elements.innerHTML = `
        <img src="${users.picture.large}" />
        <li>Name: ${users.name.first} ${users.name.last}</li>
        <li>Email: ${users.email}</li>
        <li>Age: ${users.dob.age}</li>
        <li>Age: ${users.location.city}</li>
    `;
    let demo = document.getElementById('demo');

    demo.appendChild(elements);
}