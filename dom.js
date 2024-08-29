// // Examine the document object 

// // console.dir(document) 
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)

// // document.title 
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])
// console.log(document.images)

// getElement by id 

// console.log(document.getElementById('header-title')) 
// var headerTitle = document.getElementById('header-title')
// console.log(headerTitle)
// headerTitle.innerHTML = '<h3>HELLO</h3>'
// header.style.borderBootom = 'solid 3px #000' 

// getelement by class

// var items = document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[1])
// items[1].textContent = 'hello 2'
// items[1].style.background = 'yellow'

// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4'
// }


// querry selector 

//  var heder = document.querySelector('#main-header')
//  header.style.borderBootom = 'solid 4px #ccc' 

// var titles = document.querySelector('.title')

// console.log (titles)

// Traversing the dom 

// var itemList = document.querySelector('#items') 

// parentNode 
// console.log(itemList.parentNode)
// itemList.parentNode.style.background = '#f4f4f4'
// console.log(itemList.parentNode.parentNode.parentNode)

// parent element 
// console.log(itemList.parentElement)
// itemList.parentElement.style.background = '#f4f4f4'
// console.log(itemList.parentElement.parentElement.parentElement)

// // chile node 

// console.log(itemList.children)
// console.log(itemList.children[1])
// itemList.children[1].style.background = 'yellow'

// // first child 
// console.log(itemList.firstChild)

// // last child 
// console.log(itemList.lastChild)

// // next sibling 
// console.log(itemList.nextSibling)

// create element 

// create div 
// newDiv = document.createElement('div')

// // add class
// newDiv.className = 'hello'

// // add id 
// newDiv.id = 'hello1'

// // add attr 
// newDiv.setAttribute('title', 'hello div')

// var container = document.querySelector('header .container')
// var h1 = document.querySelector('header h1')

// console.log(newDiv)

// newDiv.style.fontsize = '30px'

// container.insertBefore(newDiv, h1)

// Events 

// var button = document.getElementById('button').addEventListener('click', buttonClick)

// function buttonClick(e) {

//     console.log(e)

//     console.log(e.target)
//     console.log(e.target.id)
//     console.log(e.target.clasName)
//     console.log(e.target.classList)
//     console.log(e.type)

//     console.log(e.clientX)
//     console.log(e.clientY)
// }

var button = document.getElementById('button')
var box = document.getElementById('box')

// button.addEventListener('click', runEvent)
// button.addEventListener('click', runEvent)
// button.addEventListener('mousedown', runEvent)

box.addEventListener('mouseenter', runEvent)
box.addEventListener('mouseover', runEvent)

function runEvent(e) {
    console.log('EVENT TYPE: '+e.type)

    // document.body.style.background = 'rgb('+e.offsetX+','+e.offsetY+',40'

    box.style.background = 'rgb('+e.offsetX+','+e.offsetY+',40'
}



