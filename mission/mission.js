const themeSelector = document.querySelector('select');
const blueLogo = document.getElementById('blueLogo');
const whiteLogo = document.getElementById('whiteLogo');
const body = document.body; 


function changeTheme() {
   
    const selectedTheme = themeSelector.value;

 
    if (selectedTheme === 'dark') {
        body.classList.add('dark'); 
        logo.src = 'white-logo.png';
    } else {
        body.classList.remove('dark'); 
        logo.src = 'blue-logo.png'; 
    }
}


themeSelector.addEventListener('change', changeTheme);