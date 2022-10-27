function solve() {
   let shoppingCart = document.getElementsByClassName('shopping-cart')[0];
   let result = document.getElementsByTagName('textarea')[0];
   let totalPrice = 0;
   let list = [];

   let checkoutDone = false;

  shoppingCart.addEventListener('click', function(event){

   if(event.target.nodeName !== 'BUTTON'){
      return;
   }
   if (checkoutDone){
      return;
   }
   let btn = event.target;

   if(Array.from(btn.classList).indexOf('add-product') >= 0){
      
      let productElement = event.target.parentElement.parentElement;
 
      let name = productElement.querySelectorAll('.product-title')[0].textContent;
      let price = productElement.querySelectorAll('.product-line-price')[0].textContent;
      price = Number(price);
      totalPrice += price;
      console.log(totalPrice);
      if(!list.includes(name)){
         list.push(name);
      }
      result.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
   } else if(Array.from(btn.classList).indexOf('checkout') >= 0){
      let products = list.join(', ')
      result.textContent += `You bought ${products} for ${totalPrice.toFixed(2)}.`
      checkoutDone = true;
   }


  });
}