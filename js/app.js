const cartItems = [
  {
    quantity: 1,
    product: {
      name: "Burger", //string
      img: "burger.png", //string
      price: 8.5, //number
    },
  },
  {
    quantity: 1,
    product: {
      name: "French Fries", //string
      img: "french-fries.png", //string
      price: 5.5, //number
    },
  },
  {
    quantity: 1,
    product: {
      name: "Kebab", //string
      img: "kebab.png", //string
      price: 7, //number
    },
  },
  {
    quantity: 1,
    product: {
      name: "Pizza", //string
      img: "pizza.png", //string
      price: 10, //number
    },
  },
];

const qItems = document.getElementById("q-items");
qItems.textContent = cartItems.length + " items";

//evochiamo la funzione per creare le righe della tabella
render(cartItems);




const addItems = document.querySelectorAll(".plus");
console.log(addItems)

const minusItems = document.querySelectorAll(".minus");
console.log(minusItems)

const inputQuantity = document.querySelectorAll(".quantity-counter");

for(let i = 0; i < addItems.length; i++){

  const addItem = addItems[i];
  addItem.addEventListener("click", function(){
    
  inputQuantity[i].value++;
    
    console.log(cartItems[i].product.name);
    console.log(inputQuantity[i].value);
  
  })
  const minusItem = minusItems[i];
  minusItem.addEventListener("click", function(){
    if(inputQuantity[i].value > 1){
      inputQuantity[i].value--; 
      console.log(inputQuantity[i].value)
    }else if(inputQuantity[i].value === 1){
      minusItem.classList.add("stop")
    }
    console.log(cartItems[i].product.name);
 
  })

}

//for(let i = 0; i < minusItems.length; i++){
//  const minusItem = minusItems[i];
//
//  minusItem.addEventListener("click", function(){
//    console.log(cartItems[i].product.name)
//    inputQuantity.value = parseInt(inputQuantity.value) - 1;
//  })
//}
//
//FUNZIONI
//

function render (items) {

  //recuperiamo dal dom elemento table
  const tableElement = document.querySelector(".tabella");
  //console.log(tableElement);
  
  //ciclo for in cui cicliamo item e lo aggiungiamo alla tabella in html
  for (let i = 0; i < items.length; i++) {
    tableElement.innerHTML += `
    <tr>
      <td class="product-cell">                        
        <img src="./img/${items[i].product.img}" alt="">
        <div class="product-cell-name-wrapper">
            <p>${items[i].product.name}
            </p>
            <a href="#">Remove</a>

          </div>
      </td>
      <td>
        <a href="#" class="quantity-button minus">-</a>
        <input type="text" id="counter "class="quantity-counter" disabled value="${items[i].quantity}">
        <a href="#" class="quantity-button plus">+</a>
      </td>
      <td>${items[i].product.price.toFixed(2)}€</td>
      <td>${totalPrice (items[i].product.price, items[i].quantity)}€</td>
    </tr>
    `
    // console.log(items[i].product.img)
  }
  
}

function totalPrice(price, quantity){
  const molt = (price * quantity).toFixed(2); 
  return molt
}

console.log(totalPrice(5, 10))