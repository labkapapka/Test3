const buyTours = [{
        name: 'Mystical Bali Adventure',
        description: 'Explore the enchanting island of Bali, with its lush jungles, vibrant culture, and ancient temples. Visit the iconic Tanah Lot temple, hike to the summit of Mount Batur, and unwind on the pristine beaches of Nusa Dua.',
        price: 2000,
        duration: 7,
        imageUrl: 'img/bali.jpg',
    },
    {
        name: 'Futuristic Tokyo Odyssey',
        description: "Discover the captivating blend of tradition and innovation in Tokyo. Experience the city's bustling streets and neon-lit nights, visit ancient temples and shrines, and savor the exquisite flavors of Japanese cuisine.",
        price: 2000,
        duration: 7,
        imageUrl: 'img/tokyo.jpg',
    },
    {
        name: 'Majestic African Safari',
        description: "Embark on a thrilling journey through the African wilderness, where you'll encounter diverse wildlife, breathtaking landscapes, and vibrant cultures. Discover the untamed beauty of the African savanna.",
        price: 3000,
        duration: 10,
        imageUrl: 'img/African_safari.jpg',
    },
    {
        name: 'Vibrant Rio de Janeiro Carnival',
        description: "Experience the energy and excitement of Rio de Janeiro's world-famous Carnival, where colorful parades, pulsating samba rhythms, and lively street parties come together in a dazzling celebration of life.",
        price: 2500,
        duration: 5,
        imageUrl: 'img/Rio_Carnival.jpg',
    },
    {
        name: 'Alaskan Wilderness Expedition',
        description: 'Immerse yourself in the rugged beauty of Alaska, a land of towering mountains, pristine glaciers, and lush forests. Explore untouched wilderness, witness awe-inspiring wildlife, and experience unforgettable adventures.',
        price: 3500,
        duration: 10,
        imageUrl: 'img/Alaska.jpg',
    },
    {
        name: 'Enigmatic Egyptian Odyssey',
        description: 'Uncover the mysteries of ancient Egypt, from the iconic pyramids and Sphinx to the bustling markets and vibrant cities along the Nile River. Delve into the history, art, and culture that have captivated the world for millennia.',
        price: 1800,
        duration: 8,
        imageUrl: 'img/Egypt_pyramids.jpg',
    },
    {
        name: 'Mystical Machu Picchu Trek',
        description: "Venture deep into the heart of the Andes, where you'll uncover the ancient secrets of Machu Picchu, the lost city of the Incas. Hike through breathtaking landscapes and immerse yourself in the rich history and culture of Peru.",
        price: 2200,
        duration: 9,
        imageUrl: 'img/Machu_Picchu.jpg',
    },
    {
        name: 'Scenic New Zealand Adventure',
        description: 'Traverse the stunning landscapes of New Zealand, from the lush rainforests and pristine beaches to the dramatic mountains and glaciers. Experience the adventure and natural beauty that make this destination truly unique.',
        price: 2800,
        duration: 12,
        imageUrl: 'img/New_Zealand.jpg',
    },
];
[{
        name: 'Mystical Bali Adventure',
        description: 'Explore the enchanting island of Bali, with its lush jungles, vibrant culture, and ancient temples. Visit the iconic Tanah Lot temple, hike to the summit of Mount Batur, and unwind on the pristine beaches of Nusa Dua.',
        price: 2000,
        duration: 7,
        imageUrl: 'img/bali.jpg',
    },
    {
        name: 'Futuristic Tokyo Odyssey',
        description: "Discover the captivating blend of tradition and innovation in Tokyo. Experience the city's bustling streets and neon-lit nights, visit ancient temples and shrines, and savor the exquisite flavors of Japanese cuisine.",
        price: 2000,
        duration: 7,
        imageUrl: 'img/tokyo.jpg',
    },
    {
        name: 'Majestic African Safari',
        description: "Embark on a thrilling journey through the African wilderness, where you'll encounter diverse wildlife, breathtaking landscapes, and vibrant cultures. Discover the untamed beauty of the African savanna.",
        price: 3000,
        duration: 10,
        imageUrl: 'img/African_safari.jpg',
    },
    {
        name: 'Vibrant Rio de Janeiro Carnival',
        description: "Experience the energy and excitement of Rio de Janeiro's world-famous Carnival, where colorful parades, pulsating samba rhythms, and lively street parties come together in a dazzling celebration of life.",
        price: 2500,
        duration: 5,
        imageUrl: 'img/Rio_Carnival.jpg',
    },
    {
        name: 'Alaskan Wilderness Expedition',
        description: 'Immerse yourself in the rugged beauty of Alaska, a land of towering mountains, pristine glaciers, and lush forests. Explore untouched wilderness, witness awe-inspiring wildlife, and experience unforgettable adventures.',
        price: 3500,
        duration: 10,
        imageUrl: 'img/Alaska.jpg',
    },
    {
        name: 'Enigmatic Egyptian Odyssey',
        description: 'Uncover the mysteries of ancient Egypt, from the iconic pyramids and Sphinx to the bustling markets and vibrant cities along the Nile River. Delve into the history, art, and culture that have captivated the world for millennia.',
        price: 1800,
        duration: 8,
        imageUrl: 'img/Egypt_pyramids.jpg',
    },
    {
        name: 'Mystical Machu Picchu Trek',
        description: "Venture deep into the heart of the Andes, where you'll uncover the ancient secrets of Machu Picchu, the lost city of the Incas. Hike through breathtaking landscapes and immerse yourself in the rich history and culture of Peru.",
        price: 2200,
        duration: 9,
        imageUrl: 'img/Machu_Picchu.jpg',
    },
    {
        name: 'Scenic New Zealand Adventure',
        description: 'Traverse the stunning landscapes of New Zealand, from the lush rainforests and pristine beaches to the dramatic mountains and glaciers. Experience the adventure and natural beauty that make this destination truly unique.',
        price: 2800,
        duration: 12,
        imageUrl: 'img/New_Zealand.jpg',
    },
];


document.addEventListener("DOMContentLoaded", function() { // Додає обробник події, який виконується, коли весь HTML-документ завантажений і пройшов парсинг.
    const buyButtons = document.querySelectorAll(".tour-card__button-buy"); //Знаходить всі елементи на сторінці з класом ".tour-card__button-buy" (кнопки "Купити") і зберігає їх у змінній buyButtons.

    buyButtons.forEach((button, index) => { // Проходить по кожній кнопці "Купити" у buyButtons, передаючи поточну кнопку і її індекс в масиві.
        button.addEventListener("click", () => { //Додає обробник події "click" для кожної кнопки "Купити".
            const tour = buyTours[index]; // Знаходить відповідний тур у масиві tours, використовуючи індекс поточної кнопки.
            alert(
                `You have successfully purchased the "${tour.name}" tour!\n` +

                `Price: ${tour.price}\n` +
                `Duration: ${tour.duration} days`
            );
        });

    });

});