// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector('.price span').textContent)
  const quantity = Number(product.querySelector('.quantity input').value)

  const result = price * quantity

  const subtotalResult = product.querySelector('.subtotal span')
  subtotalResult.textContent = result

  return result
}

function calculateAll() { 
  const productList = document.querySelectorAll('.product')
  
  let total = 0

  productList.forEach(oneProduct => {
    total += updateSubtotal(oneProduct)
  })

  const totalProducts = document.querySelector('#total-value span')
  totalProducts.textContent = total
}

// ITERATION 4

function removeProduct(event) {
  document.querySelectorAll('.btn-remove').forEach(button => {
    button.addEventListener('click', removeProduct)
  })

  const target = event.currentTarget
  console.log('The target in remove is:', target.parentNode.parentNode.parentNode)
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode)
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
