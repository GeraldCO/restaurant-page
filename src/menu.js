import { createHeader } from "./website"; 
import food from './media/c3_FOOD_fluid_600x420.png';
import { createMainContainer } from "./website";

function createCard( pDescriptionText, pictureSrc, cardTitleText, buttonText){
    createHeader('Jamb Juice');
    const fluidCardRow = document.createElement('div');
    const fcsContainer = document.createElement('div');
    const cardIMage = document.createElement('div');
    const cardIMageFile = document.createElement('img');
    const cardContent = document.createElement('div');
    const cardTitle = document.createElement('div');
    const cardTitleH3 = document.createElement('h3');
    const pCardDescription = document.createElement('p');
    const btnWrapper = document.createElement('div');
    const aButtonLink = document.createElement('a');
    

    fluidCardRow.classList.add('fluid-card-row');
    fcsContainer.classList.add('fcs-container');
    cardContent.classList.add('card-content');
    cardTitle.classList.add('title');
    cardIMage.classList.add('card-image');
    

    fluidCardRow.appendChild(fcsContainer);
    fcsContainer.appendChild(cardIMage);
    cardTitle.appendChild(cardTitleH3);
    cardContent.appendChild(cardTitle);
    cardContent.appendChild(pCardDescription);
    cardContent.appendChild(btnWrapper);
    fcsContainer.appendChild(cardContent);
    cardIMage.appendChild(cardIMageFile);
    btnWrapper.appendChild(aButtonLink);

    pCardDescription.textContent= pDescriptionText;
    cardIMageFile.src = pictureSrc;
    cardTitleH3.innerHTML = cardTitleText;
    aButtonLink.innerHTML = buttonText;
    aButtonLink.href = 'www.google.com';
    return fluidCardRow;
}

function createMenu(){
    const mainContainer = createMainContainer();
    const firstCard = createCard(
        'Try our toasty, protein-packed food that will warm you up during the chillier seasons. Perfect to pair with your favorite smoothie, bowl or iced beverage!',
        food, 
        'Perfect to Pair Cozy, Warm Food',
        'ahh, try now!'
    );
    const secondCard = createCard(
        'Try our toasty, protein-packed food that will warm you up during the chillier seasons. Perfect to pair with your favorite smoothie, bowl or iced beverage!',
        food, 
        'Perfect to Pair Cozy, Warm Food',
        'ahh, try now!'
    );
    mainContainer.appendChild(firstCard);
    mainContainer.appendChild(secondCard);
    return mainContainer;
}



export default createMenu;