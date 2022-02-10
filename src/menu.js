import { createHeader } from "./website"; 
import food from './media/c3_FOOD_fluid_600x420.png';
import jj from  './media/JJ_C4_CBGM_fluid_600x420_v2.png';
import tggLunch from './media/JJ_679077_C1_TGG_Launch FLUID CARD_V2.png';
import rewardsPic from './media/JJ_C4_ACQ_fluid_600x420.png';
import personalize from './media/c2_2_personalize_fluid_600x420.png';
import snacks from './media/c2_snacks_fluid_600x420.png';


export function createCard( pictureSrc, spamH3Text, cardTitleText, pDescriptionText, buttonText){
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
    const spamH3 = document.createElement('spam');
    

    fluidCardRow.classList.add('fluid-card-row');
    fcsContainer.classList.add('fcs-container');
    cardContent.classList.add('card-content');
    cardTitle.classList.add('title');
    cardIMage.classList.add('card-image');
    spamH3.classList.add('scrip-text');
    

    fluidCardRow.append(fcsContainer);
    fcsContainer.append(cardIMage, cardContent);
    cardTitle.append(cardTitleH3, spamH3);
    cardContent.append(cardTitle, pCardDescription, btnWrapper);

    cardIMage.append(cardIMageFile);
    btnWrapper.append(aButtonLink);

    pCardDescription.textContent= pDescriptionText;
    cardIMageFile.src = pictureSrc;
    spamH3.innerText = spamH3Text;
    cardTitleH3.innerText = cardTitleText;
    aButtonLink.innerText = buttonText;
    aButtonLink.href = '#';
    return fluidCardRow;
}



function createMenu(){
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('mainContainer');
    
    const foodCard = createCard(        
        food,
        'Perfect to Pair',
        'Cozy, Warm Food',
        'Try our toasty, protein-packed food that will warm you up during the chillier seasons. Perfect to pair with your favorite smoothie, bowl or iced beverage!',
        'ahh, try now!'
    );
    const beveragesCard = createCard(
        jj, 
        'FUEL YOUR MORNING',
        'New Iced Beverages',
        'Start your day with a bright and balanced iced gotcha matcha or icy bold ‘n cold brew topped with a dreamy house-made, plant-based sweet cloud whip.',
        'sip sip go!'
    );

    const tggLunchCard = createCard(
        tggLunch,
        'PLANT-BASED',
        'The Go Getter Smoothie',
        'Try The Go Getter smoothie for a tropical get away with delicious perks. Fruity flavors like mango with super foods like kale get together to create a lush, immunity boosting, plant-based smoothie.',
        'Order Now'
    );

    const rewardsCard = createCard(
        rewardsPic,
        'EARN REWARDS',
        'Perks are waiting!',
        "Sign up and enjoy $3 OFF your first order and $2 OFF your second order (good with orders $10+). It's easy & fast!",
        'sign up'
    );

    const personalizeCard = createCard(
        personalize,
        'CUSTOMIZE',
        'Make your own creation',
        'The sky (or Jamba menu) is the limit here at Jamba. Substitute milk, juice or fruits & veggies and add boosts.',
        'Smoo-nique Smoothie'
    );

    const snacksCard = createCard(
        snacks,
        'ADD A SNACK',
        "Grab n' go",
        'Explore healthy gluten & nut-free snacks and Organic Honest Tea(TM) or Smartwater(TM). They pair perfectly with your favorite smoothie or bowl anytime, anywhere.',
        'yessssssss!'
    );


    mainContainer.append(
        foodCard,
        beveragesCard,
        tggLunchCard, 
        rewardsCard,
        personalizeCard,
        snacksCard
        );
    return mainContainer;
}



export default createMenu;