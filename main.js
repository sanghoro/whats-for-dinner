// query selector variables
var letsCookButton = document.querySelector('.letsCookButton')
var crockPotImg = document.querySelector('.crockPot')
var foodDisplay = document.querySelector('.you-should-make')
var clearButton = document.querySelector('.clearButton')
var whiteBoxTwo = document.querySelector('.image-box')

var sideButton = document.querySelector('.side-button')
var mainDishButton = document.querySelector('.mainDish-button')
var dessertButton = document.querySelector('.dessert-button')
var entireMealButton = document.querySelector('.entireMeal-button')


// event handlers
letsCookButton.addEventListener('click', function(event){
    event.preventDefault();
    displayFood()
})

sideButton.addEventListener('click', function(){
    mainDishButton.checked = false;
    dessertButton.checked = false;
    entireMealButton.checked = false;
})
mainDishButton.addEventListener('click', function(){
    sideButton.checked = false;
    dessertButton.checked = false;
    entireMealButton.checked = false;
})
dessertButton.addEventListener('click',function(){
    entireMealButton.checked = false;
    sideButton.checked = false;
    mainDishButton.checked = false;
})
entireMealButton.addEventListener('click', function(){
    sideButton.checked = false;
    mainDishButton.checked = false;
    dessertButton.checked = false;
})

// variables
var sides = [
    "Miso Glazed Carrots",
    "Coleslaw",
    "Garden Salad",
    "Crispy Potatoes",
    "Sweet Potato Tots",
    'Coconut Rice',
    'Caeser Salad',
    'Shrimp Summer Roll',
    'Garlic Butter Mushrooms',
    'Hush Puppies'
]
var mains = [
    'Spaghetti and Meatballs',
    'Pineapple Chicken',
    'Shakshuka',
    'Thai Yellow Curry',
    'Bibimbap',
    'Chicken Parmesean',
    'Butternut Squash Soup',
    'BBQ Chicken Burgers',
    'Ramen',
    'Empanadas',
    'Chicken Fried Rice',
    'Sheet Pan Fajitas',
    'Margarita Pizza'
]
var desserts = [
    'Apple Pie',
    'Lemon Meringue Pie',
    'Black Forest Cake',
    'Banana Bread',
    'Peach Cobbler',
    'Cheesecake',
    'Funfetti Cake',
    'Baklava',
    'Flan',
    'Macarons',
    'Macaroons',
    'Chocolate Cupcakes',
    'Pavlova',
    'Pumpkin Pie',
    'Key Lime Pie',
    'Tart Tatin',
    'Croissants',
    'Eclairs',
]


// functions
function getRandomSides(sides){
    var randomIndex = Math.floor(Math.random() * sides.length);
    return sides[randomIndex]
}
function getRandomMains(mains){
    var randomIndex = Math.floor(Math.random() * mains.length);
    return mains[randomIndex]
}
function getRandomDesserts(desserts){
    var randomIndex = Math.floor(Math.random() * desserts.length);
    return desserts[randomIndex]
}

function displayFood(){
    var randomSide = getRandomSides(sides)
    var randomMains = getRandomMains(mains)
    var randomDesserts = getRandomDesserts(desserts)

    if (sideButton.checked) {
        displayRecipe(randomSide);
    } else if (mainDishButton.checked) {
        displayRecipe(randomMains);
    } else if (dessertButton.checked) {
        displayRecipe(randomDesserts)
    } 
}

function displayRecipe(text) {
    whiteBoxTwo.innerHTML = '';
    whiteBoxTwo.innerHTML += '<div>' +
    '<p class="you-should-make">You should make:</p>' +
    '<p class="new-make">' + text + '</p>' +
    '<button class="clearButton" id="clear-button">CLEAR</button>' +
    '</div>';
}
