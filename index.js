// Write your code here!

document.getElementById('main').remove();

const newHeader = document.createElement('h1')
newHeader.id = "victory"
newHeader.textContent = "JENNI is the champion"

// NOTE ; line 7 code can also use innerHTML but it is always better to use textContent
//.remove() is a method

// solution given in review:

// const mainElement = document.getElementById('main')
//  mainElement.remove()
//  let newHeader = document.createElement('h1')
//  newHeader.id = 'victory'
//  newHeader.textContent = "YOUR-NAME is the champion"

// .id is an attribute (.style, .className, .textContent are other attribute exmaples)

// this is hwo to add the new h1 node to the page:

// should be added to the body

document.body.appendChild(newHeader)