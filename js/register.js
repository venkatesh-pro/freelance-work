const userName = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')

const handleSubmit = async () => {
  console.log(userName.value)
  console.log(email.value)
  console.log(password.value)

  const rawResponse = await fetch('http://localhost:5000/api/user/register', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: userName.value,
      email: email.value,
      password: password.value,
    }),
  })
  const content = await rawResponse.json()

  console.log(content)

  localStorage.setItem('user', JSON.stringify(content))

  location.assign('/')
}
