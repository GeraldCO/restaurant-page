import loadMenu from "./menu";
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

function getContentDiv(){
    const content = document.querySelector('#content');
    return content;
}

function createNav(){
    const topNav = document.createElement('nav');
    const menuButton = document.createElement('button');
    const rewardsButton = document.createElement('button');
    const contactUsButton = document.createElement('button');
    const content = getContentDiv();

    menuButton.innerHTML = 'Menu';

    rewardsButton.innerHTML = 'Rewards';
    contactUsButton.innerHTML = 'Contact Us';

    menuButton.classList.add('button-nav', 'active');

    rewardsButton.classList.add('button-nav');
    contactUsButton.classList.add('button-nav');

    menuButton.addEventListener('click', (e)=>{
        content.removeChild(content.children[1]);
        menuButton.classList.add('active');
        rewardsButton.classList.remove('active');
        contactUsButton.classList.remove('active');
        content.append(loadMenu());
    });

    rewardsButton.addEventListener('click', (e)=>{
        content.removeChild(content.children[1]);
        rewardsButton.classList.add('active');
        menuButton.classList.remove('active');
        contactUsButton.classList.remove('active');
        content.append(loadRewards());
    });

    contactUsButton.addEventListener('click', (e)=>{
        content.removeChild(content.children[1]);
        contactUsButton.classList.add('active');
        menuButton.classList.remove('active');
        rewardsButton.classList.remove('active');
        content.append(loadContact());
    });

    topNav.appendChild(menuButton);
    topNav.appendChild(rewardsButton);
    topNav.appendChild(contactUsButton);
    
    return topNav;   
}

function initializeWebsite(){
    const content = getContentDiv();
    content.appendChild(createNav());
    content.appendChild(loadMenu());

}

export default initializeWebsite;