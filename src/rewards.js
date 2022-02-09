function loadMenu(){
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('mainContainer');
    mainContainer.append('this is rewards container');

    const heroCardFrameDiv = document.createElement('div');
    const cardTitleDiv = document.createElement('div');
    const cardTitleText = document.createElement('span');
    const cardTitleTextSpan = document.createElement('span');
    const cardContentDiv = document.createElement('div');
    const cardContentP = document.createElement('p');
    const downloadButton = document.createElement('a');
    const signUpButton = document.createElement('a');

    heroCardFrameDiv.classList.add('hero-card-frame');
    
    heroCardFrameDiv.append(cardTitleDiv, cardContentDiv);
    cardTitleDiv.append(cardTitleText, cardTitleTextSpan);
    cardContentDiv.append(cardContentP, downloadButton, signUpButton);
    mainContainer.append(heroCardFrameDiv);

    cardTitleText.innerText = 'MY JAMBA';
    cardTitleTextSpan.innerText = 'rewards';
    cardContentP.innerText = 'Signing up is easy and fast. You can download our easy to use app or join online.';
    downloadButton.textContent = 'download app';
    signUpButton.textContent='sign up online';

    return mainContainer;
}

export default loadMenu;