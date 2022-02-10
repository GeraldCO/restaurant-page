import offer from './media/c4_1_3x2Offer_Icon_728x477.png';
import points from './media/c4_1_1pt_Icon_728x477.png';
import bDayIcon from './media/c4_1_B Day_Icon_728x477.png';
import customize from './media/c4_1_Customize_Icon_728x477.png';
import downloadAPp from './media/c4_1_Download App_Icon_728x477.png';
import faves from './media/c4_1_Faves_Icon_728x477.png';
import { createCard } from './menu';
import rewardsPic from './media/JJ_C4_ACQ_fluid_600x420.png';


function loadMenu(){
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('mainContainer');

    const heroCardFrameDiv = document.createElement('div');
    const cardTitleDiv = document.createElement('div');
    const cardTitleText = document.createElement('span');
    const cardTitleTextSpan = document.createElement('span');
    const cardContentDiv = document.createElement('div');
    const cardContentP = document.createElement('p');
    const downloadButton = document.createElement('a');
    const signUpButton = document.createElement('a');

    heroCardFrameDiv.classList.add('hero-card-frame');
    downloadButton.classList.add('button', 'button--primary');
    signUpButton.classList.add('button', 'button--primary');
    cardTitleTextSpan.classList.add('script-text');
    cardContentDiv.classList.add('card-content');
    
    heroCardFrameDiv.append(cardTitleDiv, cardContentDiv);
    cardTitleDiv.append(cardTitleText, cardTitleTextSpan);
    cardContentDiv.append(cardContentP, downloadButton, signUpButton);
    

    cardTitleText.innerText = 'MY JAMBA';
    cardTitleTextSpan.innerText = 'rewards';
    cardContentP.innerText = 'Signing up is easy and fast. You can download our easy to use app or join online.';
    downloadButton.textContent = 'download app';
    signUpButton.textContent='sign up online';

    const column =document.createElement('div');
    const row1 = document.createElement('div');
    const row2 = document.createElement('div');
    const row3 = document.createElement('div');
    const row4 = document.createElement('div');

    row1.append(
        createCell(offer, "1st order = $3 OFF <br> 2nd order = $2 OFF <br> $10+ orders) <br> limited time"), 
        createCell(points, '$1 = 1pt ;) earn in-store or online with pick-up and delivery')
    );

    row2.append(
        createCell(bDayIcon, 'celebratory birthday smoothie on us (15pt min to qualify)'),
        createCell(customize, 'customize & save faves + get insider exclusives')
    );

    row3.append(
        createCell(downloadAPp, 'download app. sign-up. order faster.'),
        createCell(faves, 'earn points & save on faves')
        );
    
    //row4elements
    row4.append(createCard(
        rewardsPic,
        'EARN REWARDS',
        'Perks are waiting!',
        "Sign up and enjoy $3 OFF your first order and $2 OFF your second order (good with orders $10+). It's easy & fast!",
        'sign up'
    ), downloadButton, signUpButton);

    

    column.append(row1, row2, row3, row4);

    mainContainer.append(heroCardFrameDiv, column);
    return mainContainer;
}

function createCell(pictureSrc, description){
    const cell = document.createElement('div');
    const divImage = document.createElement('img');
    const descriptionP = document.createElement('div');

    divImage.classList.add('icon-card-picture');
    descriptionP.classList.add('description');

    divImage.src = pictureSrc;
    descriptionP.innerHTML = description;

    cell.append(divImage, descriptionP);
    return cell;
}


export default loadMenu;