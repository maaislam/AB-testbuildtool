export const wordingBubble = [{
        productTitle: 'Füßlinge Damen & Herren aus Bio-Baumwolle',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'Low Cut Füßlinge aus Bio-Baumwolle',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'Fluffy Füßlinge für Herren & Damen',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'Sneaker Socken für Herren & Damen aus Bio-Baumwolle',
        text: 'Packs',
        count: '11%',
    },
    {
        productTitle: 'Kinder Sneaker Socken aus Bio-Baumwolle',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'Retro Sneaker Socken mit Streifen aus Bio-Baumwolle',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'Laufsocken Herren & Damen',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'Mittelhohe Laufsocken Herren & Damen',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'Hohe Laufsocken',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'Hohe Sportsocken mit Streifen aus Bio-Baumwolle',
        text: 'Packs',
        count: '19%',
    },
    {
        productTitle: 'Tennissocken aus Bio-Baumwolle',
        text: 'Packs',
        count: '19%',
    },
    {
        productTitle: 'Business Socken aus Bio-Baumwolle',
        text: 'Packs',
        count: '19%',
    },
    {
        productTitle: 'Anti-Rutsch Socken aus Bio-Baumwolle',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'Arbeitssocken aus Bio-Baumwolle',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'Norweger Socken',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'Wollsocken',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'Skisocken',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'Wandersocken',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'Sport Kompressionssocken',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'Tangas aus Bio-Baumwolle',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'Tangas mit Spitze aus Bio-Baumwolle',
        text: 'Packs',
        count: '16%',
    },
    {
        productTitle: 'Brazilian Slips aus Bio-Baumwolle',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'Brazilian Slips mit Spitze aus Bio-Baumwolle',
        text: 'Packs',
        count: '16%',
    },
    {
        productTitle: 'Brazilian Slips mit Gummibund aus Bio-Baumwolle',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'Hipster Panties aus Bio-Baumwolle',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'Hipster Panties mit Spitze aus Bio-Baumwolle',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'Damenslips aus Bio-Baumwolle',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'Soft BH aus Bio-Baumwolle',
        text: 'Stück',
        count: '17%',
    },
    {
        productTitle: 'Boxershorts aus Bio-Baumwolle',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'Boxershorts ohne Logo aus Bio-Baumwolle',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'Boxershorts mit farbigem Bund aus Bio-Baumwolle',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'Modal Boxershorts',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'American Boxershorts aus Bio-Baumwolle',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'Herrenslips',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'T Shirt mit V-Ausschnitt aus Bio-Baumwolle',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'Rundhals T-Shirt extra lang aus Bio-Baumwolle',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'Feinripp Tank Top ohne Ärmel aus Bio-Baumwolle',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'Damen Tank Tops aus Bio-Baumwolle',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'Damen Spaghetti Tops aus Bio-Baumwolle',
        text: 'Packs',
        count: '17%',
    },
    {
        productTitle: 'Jogginghose',
        text: 'Stück',
        count: '17%',
    },
    {
        productTitle: 'High Waist Shorts',
        text: 'Stück',
        count: '17%',
    },
    {
        productTitle: 'High Waist Leggings',
        text: 'Stück',
        count: '17%',
    },
    {
        productTitle: 'Thermo Set',
        text: 'Sets',
        count: '17%',
    },
    {
        productTitle: 'Beanie',
        text: 'Stück',
        count: '17%',
    },
]

export const getProductTitle = () => {
    const title = document.querySelector(`.CartItem__Title.Heading`).innerText;
    return title;
}

export const matchTitle = () => {
    const matchedObj = wordingBubble.find(product => product.productTitle === document.querySelector(`.CartItem__Title.Heading`).innerText);
    console.log(matchedObj.text);
    return matchedObj.text;
}