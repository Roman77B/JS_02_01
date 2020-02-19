// БД
const products = [
  {id: 1, title: "Ноутбук", price: 2000},
  {id: 2, title: "Монитор", price: 200},
  {id: 3, title: "Процессор", price: 800},
  {id: 4, title: "Принтер", price: 300},
  {id: 5, title: "Клавиатура", price: 100},
  {id: 6, title: "Мышь", price: 10},
  {id: 7, title: "Колонки", price: 20},
  {id: 8, title: "Gamepad", price: 30}
]

// Функция верстки товаров в каталоге
const renderCatalog = () => {
  let domString = ""
  products.forEach (el => { // по каждому эл. массива products
    //console.log (el) // отладка
    domString += 
    `
    <div class="catalog-item-wrp" data-id="${el.id}">
      <img class="catalog-item-pic" src="https://placehold.it/200x150" alt="${el.title}" width="200" height="150">
      <h3 class="catalog-item-h3">${el.title}</h3>
      <span class="catalog-item-price">${el.price}</span>
      <button class="catalog-item-button"
      data-id="${el.id}"
      data-name="${el.title}"
      data-price="${el.price}"> 
        Купить
      </button>
    </div>
    `    
  })
  document.querySelector ('.catalog').innerHTML = domString
}

renderCatalog ()