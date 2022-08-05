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

  if (finalPriceEl.value) {
    return (finalPriceEl.value =
      parseInt(totalEl.value) * parseInt(e.target.value))
  }

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

// add and remove tr
const tbodyRef = document
  .getElementById('table')
  .getElementsByTagName('tbody')[0]

let num = 2
let row = 2

const addEl = () => {
  const el = `
  <tr>
            <td>
              <span class="addIcon" onclick="remove()" id="del">-</span>
            </td>
            <td>${num}</td>

            <td>
              <div style="display: flex">
                <input
                  type="text"
                  value=""
                  style="width: 110px; padding: 4px"
                />
                <input type="button" value="search" />
              </div>

              <div style="margin-top: 7px">
                <select style="width: 178px; padding: 4px">
                  <option value="">Select Description</option>
                  <option value="2">Mulethi Powder</option>
                  Mulethi.html
                  <option value="3">Dhoob Grass Powder</option>
                  <option value="4">Khus Khus Powder</option>
                  Khus Khus Powder.html
                  <option value="5">Aloe Vera Powder</option>
                  Aloeverapowder.html
                  <option value="8">Thoodhuvalai Powder</option>
                  Thoodhuvalai Powder.html
                  <option value="9">Jamun Nut Powder</option>
                  Jamun Nut Powder.html
                  <option value="189">Anti-oxidant Tea Combo 2</option>
                </select>
              </div>
              <div style="margin-top: 3px">
                <select style="width: 178px; padding: 4px">
                  <option value="1">Madurai Region</option>
                  <option value="2">Mandla Region</option>
                  <option value="3">Delhi Region</option>
                  <option value="3">Bilasa</option>
                </select>
              </div>
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter The Weigth"
                style="width: 168px; padding: 4px; margin-bottom: 3px"
              />
              <select style="width: 180px; padding: 4px">
                <option value="">Type</option>
                <option value="1">Kg</option>
                <option value="2">Gms</option>
                <option value="3">Ltr</option>
                <option value="4">Ml</option>
              </select>
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter The Quantity"
                style="width: 180px; padding: 4px"
              />
            </td>
            <td>
              <input
                placeholder="Enter The Unit Price"
                type="text"
                style="width: 180px; padding: 4px"
              />
            </td>
            <td>
              <input
                placeholder="Enter The Discount"
                type="text"
                style="width: 180px; padding: 4px"
              />
            </td>
            <td>
              <select style="width: 192px; padding: 4px; margin-bottom: 3px">
                <option value="">Select</option>
                <option value="0">No tax</option>
                <option value="5">5 %</option>
                <option value="12">12 %</option>
                <option value="15">15 %</option>
                <option value="18">18 %</option>
                <option value="28">28 %</option>
              </select>
              <input
                placeholder="Enter The Tax 1"
                type="text"
                style="width: 180px; padding: 4px; margin-bottom: 3px"
              />
              <input
                placeholder="Enter The Tax 2"
                type="text"
                style="width: 180px; padding: 4px"
              />
            </td>

            <td class="right">
              <input
                placeholder="Enter The Amount"
                type="text"
                style="width: 180px; padding: 4px; margin-bottom: 3px"
              />
            </td>
          </tr>
  `

  var newRow = tbodyRef.insertRow(row)
  newRow.innerHTML = el
  num = num + 1
  row = row + 1

  console.log({ num })
}

const remove = () => {
  const del = document.getElementById('del').parentElement.parentElement
  del.remove()

  row = row - 1
  num = 2
  console.log({ num1: num })
}
