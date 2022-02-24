let quantity = 0

let quantityTotal = document.getElementById('quantity-number')

//Button to increase quantity
let upButton = document.getElementById('quantity-up')
upButton.addEventListener('click', function(){
    quantity = quantity + 1
    quantityTotal.textContent = quantity

})

//Button to decrease quantity
let downButton = document.getElementById('quantity-down')
downButton.addEventListener('click', function(){
    if(quantity > 0){
        quantity = quantity - 1
        quantityTotal.textContent = quantity  
    } 
})