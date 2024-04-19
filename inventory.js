const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];
/* Must use jQuery with the data below to populate the DOM
Must be able to toggle dark mode on and off
Products that are not in stock should not be displayed
Must look like the images
Project is pushed up to github
Turn in github repository link */

let inventoryMessage = '';
let notinstock;
let instock;

$.each(storeItems, function (index, value){
  if (value.inStock){
    inventoryMessage += ('<tbody><tr class="selector"><td>' + value.price + '</td><td>' + value.name + '</td><td>'+ value.details + '</td></tr></tbody>');
  }
});
$('table#productTable').append(inventoryMessage);

//Add Dark Mode 
/*
$('body').addClass('darkMode');
$('body').children.addClass('darkMode');
$('table').children.addClass('darkMode');
$('.darkMode').toggleClass('darkMode');
*/

//Dark Mode Toggle
$('#darkModeButton').click(function() {
    $('.selector').toggleClass('darkMode');
    
  })