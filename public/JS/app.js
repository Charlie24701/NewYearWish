const addItems = document.querySelector('.mandarine')
const ListItems = document.querySelector('.mand')
const DelItems = document.querySelector('.Delete')
const items = JSON.parse(localStorage.getItem('items')) || [];
const yes = document.getElementById('yep')

function addItem(e) {
    e.preventDefault();
    const text = e.target.item.value;
    const item = {
        text: text,
        checked: false
    }
    items.push(item)
    localStorage.setItem('items', JSON.stringify(items))
    DisplayItems(items, ListItems);
    this.reset()
}

function DisplayItems(ing, List) {
    console.log(ing, List)
    console.log(ing)
    List.innerHTML = ing.map((ingr, index) => {
        return `<li>${ingr.text}</li>`;
    }).join('')
}

addItems.addEventListener('submit', addItem)
DelItems.addEventListener('submit', () => {console.log('OK'); localStorage.removeItem('items'); location.reload()} )

yes.addEventListener('mouseover', (e) => {
    e.preventDefault();
    console.log(e)
    e.target.setAttribute('src', 'Pics/yes.png')
})
yes.addEventListener('mouseout', (e) => {
    e.preventDefault();
    console.log(e)
    e.target.setAttribute('src', 'Pics/no.png')
})
DisplayItems(items, ListItems)