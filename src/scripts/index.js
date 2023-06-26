/* Desenvolva sua lógica aqui ... */
import {products, categories} from './productsData.js'

function createCard(product){
    const card = document.createElement("li")
    card.classList.add('card');
    /* Trabalhe sua lógica aqui */
    const image = document.createElement('img');
    image.src = product.img 

    const divCard = document.createElement('div');
    divCard.classList.add('textBoxCard');

    const yearAndName = document.createElement('p');
    yearAndName.innerHTML = `${product.band}  ${product.year}`;

    const albums = document.createElement('h2');
    albums.innerHTML = `${product.title}`;

    const buySpan = document.createElement('span');
    buySpan.classList.add('buySpan');

    const price = document.createElement('p');
    price.classList.add('price');
    price.innerHTML = `R$ ${product.price}.00`;

    const buyButton = document.createElement('button');
    buyButton.classList.add('buyButton');
    buyButton.innerText = "Comprar";
    
    card.append(image, yearAndName, albums, buySpan, divCard);
    buySpan.append(price, buyButton);
    divCard.append(yearAndName, albums, buySpan);
    
    return card
}

const renderCategoryButtons = (categories) => {
    const listButton = document.querySelector('.listButton__container ul');   
    
    categories.forEach((category) => {
        const list = document.createElement('li');
        const categoryButton =document.createElement('button');
        categoryButton.innerHTML = `${category}`;
        categoryButton.classList.add('button-filter')
        
        listButton.appendChild(list);
        list.appendChild(categoryButton);
    });
}
renderCategoryButtons(categories);

const renderCards = (products) => {
    const cardContainer = document.querySelector('.card__container ul');
    cardContainer.innerHTML = "";
    const inputRange = document.querySelector('input');
    const TextPrice = document.querySelector('p');
    TextPrice.innerHTML = `Até R$ ${inputRange.value}`;

    products.forEach((product) => {
        const card = createCard(product);
        cardContainer.appendChild(card);
    })
}
renderCards(products);

const eventElements = (categories, products) => {
    const buttons = document.querySelectorAll('.button-filter');
    const inputRange = document.querySelector('input');
    const TextPrice = document.querySelector('p');
    
    let categoryIndex = 0;
    
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            categoryIndex = categories.findIndex(category => category === button.innerHTML);
            
            if (categoryIndex == 0) {  
                renderCards(products);
            } else {
                const filteredArray = products.filter(product => product.category == categoryIndex);
                renderCards(filteredArray);
            }
        });
    });
    
    inputRange.addEventListener('input', () => {
        TextPrice.innerHTML = `Até R$ ${inputRange.value}`;
        
        if (categoryIndex == 0) {  
            const filteredArray = products.filter(product => product.price <= inputRange.value);
            renderCards(filteredArray);
        } else {
            const filteredArray = products.filter(product => product.price <= inputRange.value && product.category == categoryIndex);
            renderCards(filteredArray);
        }
    })
}
eventElements(categories, products);