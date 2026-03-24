export default function(){
    const silogNames = [
        'TapSilog',
        'PorkSilog',
        'HotSilog',
        'ChickSilog',
        'Tocilog',
    ];
    const silogDetails = {

        TapSilog: 'Savory-sweet marinated beef slices with a distinct garlicky and tangy finish.',
        PorkSilog: 'Deep-fried, juicy pork chop seasoned perfectly for a salty and satisfying crunch.',
        HotSilog: 'Classic Filipino-style red hotdogs that offer a sweet, savory, and family-favorite taste.',
        ChickSilog: 'Golden, crispy fried chicken that is well-seasoned on the outside and tender on the inside.',
        Tocilog: 'Tender, sweet-cured pork slices caramelized to perfection for a signature sweet and savory flavor.',
        
    };

    const content = document.querySelector('.content');
    const cardContainer = document.createElement('div');
    for (const silog of silogNames){
        const card = document.createElement('div');
        cardContainer.classList.add('card-container');
        card.classList.add('silog-card');

        const img = document.createElement('div');
        img.classList.add('image-placeholder');
        const silogh1 = document.createElement('h1');
        const silogP = document.createElement('p');
        silogh1.textContent = silog;
        silogP.textContent = silogDetails[silog];

        card.append(img, silogh1, silogP);
        cardContainer.appendChild(card);
        content.appendChild(cardContainer);
    }
}