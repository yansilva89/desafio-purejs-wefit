// Menu - Vertical -> Horizontal
const menuLandscape = document.querySelector('.btn-group-vertical')
menuLandscape.classList.remove('btn-group-vertical')
menuLandscape.classList.add('btn-group-horizontal')

// Header - Colors - Alignments
const headerChanges = document.querySelector('.jumbotron')
headerChanges.classList.add('bg-secondary', 'text-white', 'text-right')
const headerBtnChanges = headerChanges.querySelector('a.btn')
headerBtnChanges.classList.remove('btn-primary')
headerBtnChanges.classList.add('btn-success')

// Cards
// Order
const cardChanges = document.querySelectorAll('.col-lg-3')
cardChanges[0].classList.add('order-2')
cardChanges[1].classList.add('order-4')
cardChanges[2].classList.add('order-3')
cardChanges[3].classList.add('order-1')
// Btn Color
const cardAnimal = cardChanges[0].querySelector('a.btn')
cardAnimal.classList.remove('btn-primary')
cardAnimal.classList.add('btn-success')

// Lista
const list = document.querySelector('.list-group')
//
const fourthItem = document.createElement('li')
fourthItem.classList.add('list-group-item', 'active')
fourthItem.innerText = 'Quarto item'
//
const fifthItem = document.createElement('li')
fifthItem.classList.add('list-group-item')
fifthItem.innerText = 'Quinto item'
//
const firstItem = document.querySelector('.list-group-item.active')
firstItem.classList.remove('active')
//
list.appendChild(fourthItem)
list.appendChild(fifthItem)
