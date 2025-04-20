function navi() {
    fetch('navigate.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header_nav').innerHTML = data;
        })
        .catch(error => console.error('Error loading navigation:', error));
}

function footer() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}