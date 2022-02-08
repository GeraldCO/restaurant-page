import createCard from "./menu";
import loadRewards from './rewards';
import loadContact from "./contact";

export function createHeader(title){
    const mainContainerHeader = document.createElement('header');
    mainContainerHeader.classList.add('main-continer-header');
    
    const headerH1 = document.createElement('h1');
    headerH1.textContent = title;

    mainContainerHeader.appendChild(headerH1);
    
    return mainContainerHeader;
}

function createNav(){
    const topNav = document.createElement('nav');
    const menuButton = document.createElement('button');
    const rewardsButton = document.createElement('button');
    const contactUsButton = document.createElement('button');

    menuButton.innerHTML = 'Menu';

    rewardsButton.innerHTML = 'Rewards';
    contactUsButton.innerHTML = 'Contact Us';

    menuButton.classList.add('button-nav');
    menuButton.classList.add('active');

    rewardsButton.classList.add('button-nav');
    contactUsButton.classList.add('button-nav');

    menuButton.addEventListener('click', (e)=>{
        createCard();
    });

    rewardsButton.addEventListener('click', (e)=>{
        loadRewards();
    });

    contactUsButton.addEventListener('click', (e)=>{
        loadContact();
    });

    topNav.appendChild(menuButton);
    topNav.appendChild(rewardsButton);
    topNav.appendChild(contactUsButton);
    
    return topNav;   
}

function initializeWebsite(){
    const content = document.querySelector('#content');
    content.appendChild(createNav());
    content.appendChild(createCard());

}

export function createMainContainer(){
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('mainContainer');
    
    return mainContainer;
}
export default initializeWebsite;