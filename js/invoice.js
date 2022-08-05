const customername = document.getElementById('customername')
const customernamebutton = document.getElementById('customernamebutton')
const customernameselect = document.getElementById('customernameselect')
const submitBtn = document.getElementById('submitBtn')
customernamebutton.addEventListener('click', () => {
  fetch(`http://localhost:5000/api/user/users/${customername.value}`, {
    method: 'GET',
  })
    .then(async (res) => {
      const content = await res.json()
      console.log(content)
      console.log(customernameselect)
      content.map((c) => {
        const option = document.createElement('option')
        option.text = c.name
        option.value = c.name
        // console.log(c)
        customernameselect.appendChild(option)
      })
    })
    .catch((err) => {
      console.log(err)
    })
})
const weightEl = document.getElementById('weightEl')
const weightSelect = document.getElementById('weightSelect')
const quantityEl = document.getElementById('quantityEl')
const priceEl = document.getElementById('priceEl')
const amountEl = document.getElementById('amountEl')
const totalEl = document.getElementById('totalEl')
const discountEl = document.getElementById('discountEl')
const taxEl = document.getElementById('taxEl')
const paymentInfoEl = document.getElementsByName('payment')
const finalPriceEl = document.getElementById('finalPriceEl')

priceEl.addEventListener('input', (e) => {
  if (discountEl.value) {
    amountEl.value = e.target.value - (e.target.value * discountEl.value) / 100
    totalEl.value = e.target.value - (e.target.value * discountEl.value) / 100
    finalPriceEl.value =
      e.target.value - (e.target.value * discountEl.value) / 100
  } else {
    amountEl.value = e.target.value
    totalEl.value = e.target.value
    finalPriceEl.value = e.target.value
  }

  if (quantityEl.value) {
    finalPriceEl.value =
      parseInt(finalPriceEl.value) * parseInt(quantityEl.value)
  }
})
discountEl.addEventListener('input', (e) => {
  // original_price - (original_price * discount) / 100
  if (amountEl.value) {
    amountEl.value = priceEl.value - (priceEl.value * e.target.value) / 100
    totalEl.value = priceEl.value - (priceEl.value * e.target.value) / 100
    finalPriceEl.value = priceEl.value - (priceEl.value * e.target.value) / 100
  }
  if (quantityEl.value) {
    finalPriceEl.value =
      parseInt(finalPriceEl.value) * parseInt(quantityEl.value)
  }
})

quantityEl.addEventListener('input', (e) => {
  // original_price - (original_price * discount) / 100
  // if (amountEl.value) {
  //   amountEl.value = priceEl.value - (priceEl.value * e.target.value) / 100
  //   totalEl.value = priceEl.value - (priceEl.value * e.target.value) / 100
  //   finalPriceEl.value = priceEl.value - (priceEl.value * e.target.value) / 100
  // }
  if (finalPriceEl.value) {
    finalPriceEl.value = parseInt(finalPriceEl.value) * parseInt(e.target.value)
  }

  console.log(e.target.value)
})
submitBtn.addEventListener('click', () => {
  let paymentVal = ''
  for (i = 0; i < paymentInfoEl.length; i++) {
    if (paymentInfoEl[i].checked) paymentVal = paymentInfoEl[i].value
  }

  fetch(`http://localhost:5000/api/product/createproduct`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      weight: {
        value: weightEl.value,
        unit: weightSelect.value,
      },
      quantity: quantityEl.value,
      price: priceEl.value,
      discount: discountEl.value,
      tax: taxEl.value,
      finalPrice: finalPriceEl.value,
      paymentInfo: paymentVal,
    }),
  })
    .then(async (res) => {
      const content = await res.json()
      console.log(content)
      console.log(customernameselect)
      content.map((c) => {
        const option = document.createElement('option')
        option.text = c.name
        option.value = c.name
        // console.log(c)
        customernameselect.appendChild(option)
      })
    })
    .catch((err) => {
      console.log(err)
    })
})
