// спосіб вибору елементів
//  .getElementId
//  .getElementByName
//  .getElementByTagName  
//  .getElementByClassName     (CSS)
//  .querySelector (CSS)

// вибрати всы елементи за id
let sect = document.getElementById("section1");

function getElements (/*ids....*/) {
    let elements = {};
    for (let i =0; i < arguments.length; i++)
    {
        let id = arguments[i];
        let elt = document.getElementById(id);
    }
    return elements;
}

// вибір за CSS Class
let testElement = document.getElementsByClassName('test');
let testDivs = Array.prototype.filter.call(testElement, function (testElement) {
    return testElement.nodeName === 'DIV';
})

// document.querySelector повертає перший елемент  документа
let el = document.querySelector(".user-panel");

// document.QuerySelectorAll повертає статичний (не динамічний) NodeList, що міститть усі знайдені елементи документа,
// які відпвідають зазначеному селектору.

let matches = document.querySelectorAll(".tour-card_button-info");

// HTML атрибути. їх можна отримувати з HTML розмітки
elem.hasAttribute(name) // - перевіряє наявність
elem.getAttribute(name) // - отримує значення
elem.SetAttribute(name, value) // - назначає значення
elem.removeAttribute(name) // - видаляє атрибут
elem.attributes // - колекція об"єктв, що належить до вбудованого класу Attr, з властивостями імені та значення

// щоб створити HTML елемент 
// document.createElement()
let div = document.createElement('div');

// створює текстовий вузол
let textNode = document.createTextNode('Here I am');

// inner HTML . Щоб створити розмітку без використання HTML а за допомогою JS
Element.innerHTML

// Отримати вміст HTML id = "myP":
let html = document.getElementById("myP").innerHTML;

// змінити вміст HTML елемента за допомогою id = "demo":
document.getElementById("demo").innerHTML = "I have changed!";

// textContent
let note = document.getElementById('note');
note.textContent = 'This is a note';

modalTitle.textContent = tour.name; //додавання даниз з ключів об"єктів

// методи вставки в батьківський елемент 
parentElem.appendChild(node);
let p = document.createElement("p");
document.body.appendChild(p);


// Події
// Mouse events
//  click - коли мишка клікає по елементу
// contextmenu - при натисканні правою кнопкою мишки 
// mouseover / mouseout - коли курсор миші на елементі/залишає елемент.
//  mousedown / mouseup - при натисканні/відпусканні кнопки миші над елементом.
// mousemove - при переміщенні миші


// події Форми
// submit - коли користквач відправляє <form>
// focus - коли користувач фокусується на елементі наприклад на <input>







