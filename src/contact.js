import onlineService from './media/online_ordering.fca6de0a.svg';
import deliveryService from  './media/delivery.beb01933.svg';
import rewardsService from './media/rewards.b84a197e.svg';
import giftCardsServices from './media/gift_cards.ca7bd098.svg';

function loadContact(){
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('mainContainer');

    //hero row container 
    const heroRowContainer = document.createElement('div');
    const heroImage = document.createElement('div');
    const heroRow = document.createElement('div');
    const heroContent = document.createElement('div');

    heroRowContainer.append(heroRow);
    heroRow.append(heroImage, heroContent);

    const locationName = document.createElement('h1');
    
    
    locationName.classList.add('location-name');
    const heroBrand = document.createElement('p');

    heroBrand.innerText = 'jamba';
    heroBrand.classList.add('hero-brand');
    locationName.append(heroBrand, 'ausburn');
    const heroOpen = document.createElement('div');
    heroOpen.innerText = 'open now ';
    heroOpen.classList.add('hero-open');
    const heroOpenSpan = document.createElement('span');
    heroOpenSpan.innerText = '- closes at 8:00 pm';
    heroOpenSpan.classList.add('hero-open-span');
    const herobuttonsDiv = document.createElement('div');
    const orderOnlineButton = document.createElement('a');
    orderOnlineButton.classList.add('button', 'button--primary');
    orderOnlineButton.innerText = 'order online';
    const orderCatering = document.createElement('a');
    orderCatering.classList.add('button', 'button--primary');
    orderCatering.innerText = 'order catering';

    
    heroOpen.append(heroOpenSpan);
    herobuttonsDiv.append(orderOnlineButton, orderCatering);
    heroContent.append(locationName, heroOpen, herobuttonsDiv);



    //contact div html elements creation
    const coreRow = document.createElement('div');
    coreRow.classList.add('core-row');
    const coreInfo = document.createElement('div');
    coreInfo.classList.add('core-info');
    const coreInfoContent = document.createElement('div');
    coreInfoContent.classList.add('core-info-content');
    const getDirectionsLink = document.createElement('a');
    getDirectionsLink.classList.add('link', 'link--primary');
    
    
    coreInfo.append(coreInfoContent);

    //core contact elements
    const coreContactDiv = document.createElement('div'); 
    coreContactDiv.classList.add('core-contact-div');
    const coreContactTitle = document.createElement('h2');
    coreContactTitle.classList.add('core-contact-title');
    const corePhoneDiv = document.createElement('div');
    const coreAddressDiv = document.createElement('div');

    coreContactTitle.textContent = 'Contact';
    corePhoneDiv.textContent = '(334) 246-2388';
    coreAddressDiv.textContent = '316 West Magnolia Ave Auburn, AL 36832';
    getDirectionsLink.append('get directions');

    coreContactDiv.append(coreContactTitle, corePhoneDiv, coreAddressDiv, getDirectionsLink);

    //core hours elements
    const coreHoursDiv = document.createElement('div');
    const coreHoursTitle = document.createElement('h2');
    coreHoursTitle.innerText = 'hours';
    const cHours = document.createElement('div');

    //table hours construction
    const table = document.createElement('table');
    const tbody =document.createElement('tbody');
    
    //adding table to the chours div
    cHours.append(table);

    const row_1 = document.createElement('tr');
    const row_1_data_1 = document.createElement('td');
    const row_1_data_2 = document.createElement('td');
    row_1_data_1.innerText = 'sunday';
    row_1_data_2.innerText = '10:00 AM - 6:00 PM';
    row_1.append(row_1_data_1, row_1_data_2);

    const row_2 = document.createElement('tr');
    const row_2_data_1 = document.createElement('td');
    const row_2_data_2 = document.createElement('td');
    row_2_data_1.innerText = 'monday';
    row_2_data_2.innerText = '8:00 AM - 8:00 PM';
    row_2.append(row_2_data_1, row_2_data_2);

    const row_3 = document.createElement('tr');
    const row_3_data_1 = document.createElement('td');
    const row_3_data_2 = document.createElement('td');
    row_3_data_1.innerText = 'tuesday';
    row_3_data_2.innerText = '8:00 AM - 8:00 PM';
    row_3.append(row_3_data_1, row_3_data_2);


    const row_4 = document.createElement('tr');
    const row_4_data_1 = document.createElement('td');
    const row_4_data_2 = document.createElement('td');
    row_4_data_1.innerText = 'wednesday';
    row_4_data_2.innerText = '8:00 AM - 8:00 PM';
    row_4.append(row_4_data_1, row_4_data_2);

    const row_5 = document.createElement('tr');
    const row_5_data_1 = document.createElement('td');
    const row_5_data_2 = document.createElement('td');
    row_5_data_1.innerText = 'thursday';
    row_5_data_2.innerText = '8:00 AM - 8:00 PM';
    row_5.append(row_5_data_1, row_5_data_2);

    const row_6 = document.createElement('tr');
    const row_6_data_1 = document.createElement('td');
    const row_6_data_2 = document.createElement('td');
    row_6_data_1.innerText = 'friday';
    row_6_data_2.innerText = '8:00 AM - 8:00 PM';
    row_6.append(row_6_data_1, row_6_data_2);

    const row_7 = document.createElement('tr');
    const row_7_data_1 = document.createElement('td');
    const row_7_data_2 = document.createElement('td');
    row_7_data_1.innerText = 'saturday';
    row_7_data_2.innerText = '9:00 AM - 9:00 PM';
    row_7.append(row_7_data_1, row_7_data_2);

    tbody.append(row_1, row_2, row_3, row_4, row_5, row_6, row_7);
    
    //adding table body to the hoursTable
    table.append(tbody);

    //adding core contact div and core hours div to core info content div 
    coreInfoContent.append(coreContactDiv, coreHoursDiv);

    coreHoursDiv.append(coreHoursTitle, cHours);

    //core about elements
    const coreDetails = document.createElement('div');
    const coreAbout = document.createElement('div');
    const coreTitle = document.createElement('h2');
    const coreDescription = document.createElement('div');

    coreAbout.classList.add('core-about');
    coreTitle.classList.add('core-title');
    coreDescription.classList.add('core-description');

    
    coreTitle.innerText = 'welcome to jamba ausburn';
    coreDescription.innerText = "We're committed to making eating better easier and more fun. Try our plant-based smoothies, delicious bowls with fresh fruit toppings, to protein-packed food and on-the-go snacks. Come visit us at 316 West Magnolia Ave in Auburn.";

    coreAbout.append(coreTitle, coreDescription);
    coreDetails.append(coreAbout);
    
    //appending coreInfo and coreDetail divs to coreRow
    coreRow.append(coreInfo, coreDetails);
    
    //core services elements
    const coreServices = document.createElement('div');
    const coreServicesTitle = document.createElement('h2');
    const coreServicesList = document.createElement('div');

    coreServices.classList.add('Core-services');
    coreServicesTitle.classList.add('Core-services-title');
    coreServicesList.classList.add('core-services-list');    
    
    coreServicesTitle.innerText = 'services';    

    const coreService1 = document.createElement('div');
    coreService1.classList.add('Core-service');
    const coreService1Image = document.createElement('img');
    coreService1Image.classList.add('Core-service-image');
    coreService1Image.src = onlineService;
    const coreService1Span = document.createElement('span');
    coreService1Span.classList.add('Core-service-text');
    coreService1Span.innerText = 'ONLINE ORDERING';
    coreService1.append(coreService1Image, coreService1Span);

    const coreService2 = document.createElement('div');
    coreService2.classList.add('Core-service');
    const coreService2Image = document.createElement('img');
    coreService2Image.classList.add('Core-service-image');
    coreService2Image.src = deliveryService;
    const coreService2Span = document.createElement('span');
    coreService2Span.classList.add('Core-service-text');
    coreService2Span.innerText = 'DELIVERY';
    coreService2.append(coreService2Image, coreService2Span);

    const coreService3 = document.createElement('div');
    coreService3.classList.add('Core-service');
    const coreService3Image = document.createElement('img');
    coreService3Image.src = rewardsService;
    coreService3Image.classList.add('Core-service-image');
    const coreService3Span = document.createElement('span');
    coreService3Span.classList.add('Core-service-text');
    coreService3Span.innerText = 'REWARDS';
    coreService3.append(coreService3Image, coreService3Span);

    const coreService4 = document.createElement('div');
    coreService4.classList.add('Core-service');
    const coreService4Image = document.createElement('img');
    coreService4Image.src = giftCardsServices;
    coreService4Image.classList.add('Core-service-image');
    const coreService4Span = document.createElement('span');
    coreService4Span.classList.add('Core-service-text');
    coreService4Span.innerText = 'GIFT CARDS';
    coreService4.append(coreService4Image, coreService4Span);

    coreServicesList.append(coreService1, coreService2, coreService3, coreService4);
    coreServices.append(coreServicesTitle, coreServicesList);


        
    //core search
    const coreSearch = document.createElement('div');
    const coreSearchTitle= document.createElement('h3');
    const searchBarContainer = document.createElement('div');
    const searchBarForm = document.createElement('form');
    const searchLabel = document.createElement('input');
    const searchInput = document.createElement('button');

    searchLabel.classList.add('seach-bar-label');
    searchInput.classList.add('search-bar-input');
    searchBarForm.classList.add('search-bar-form');
    searchBarContainer.classList.add('search-bar-container');
    coreSearchTitle.classList.add('core-search-title');
    coreSearch.classList.add('core-search');

    searchInput.innerText = 'submit';

    searchBarForm.append(searchLabel, searchInput);
    coreSearchTitle.append('have a question? ask us today!');
    searchBarForm.append(searchLabel, searchInput);
    searchBarContainer.append(searchBarForm);
    coreSearch.append(coreSearchTitle, searchBarContainer);




    coreDetails.append(coreAbout, coreServices, coreSearch);
    mainContainer.append(heroRow,coreRow);
    return mainContainer;
}

export default loadContact;