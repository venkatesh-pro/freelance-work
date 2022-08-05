const email = document.getElementById('email')
const password = document.getElementById('password')

const handleSubmit = async () => {
  console.log(email.value)
  console.log(password.value)

  fetch('http://localhost:5000/api/user/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  })
    .then(async (res) => {
      const content = await res.json()
      if (content.error) {
        return console.log(content.error)
      }
      localStorage.setItem('user', JSON.stringify(content))
      location.assign('/')
    })
    .catch((err) => {
      console.log(err)
    })

  // location.assign('/')
}
