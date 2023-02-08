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