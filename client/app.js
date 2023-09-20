const btn = document.getElementById('btn');
const admBtn = document.getElementById('admBtn');

admBtn.addEventListener('click', createSearchCookie);

function createSearchCookie() {
    let input = document.getElementById('s');
    console.log(input.value);
    document.cookie = 'search=' + input.value;
}