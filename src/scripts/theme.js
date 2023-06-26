/* Desenvolva sua lógica aqui ... */
const darkMode = () => {
    const darkModeButton = document.querySelector('.darkModeButton');
    const body = document.querySelector('body');
    const Buttons = document.querySelectorAll('button')
    const cards = document.querySelectorAll('.card');
    let theme ='dark-mode';
    
    darkModeButton.addEventListener('click', () => {
        body.classList.toggle(theme);
        Buttons.forEach((button) => {
            button.classList.toggle(theme);
        });
        cards.forEach((card) => {
           card.classList.toggle(theme);
        });

    if (body.classList.contains(theme)) {
        localStorage.setItem("@openMusic:darkMode", "true");
        darkModeButton.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    } else {
        localStorage.setItem("@openMusic:darkMode", "false");
        darkModeButton.innerHTML =`<i class="fa-solid fa-moon"></i>`;
    }
    });

    const localStorageItem = JSON.parse(localStorage.getItem("@openMusic:darkMode"));
    console.log(localStorageItem);

    if (localStorageItem) { 
        body.classList.add(theme);
        darkModeButton.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    } else {
        body.classList.remove(theme);
    }

}
darkMode();