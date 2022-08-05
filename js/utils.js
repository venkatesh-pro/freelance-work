const handleLogout = () => {
  localStorage.removeItem('user')
  location.assign('/')
}
const modal = document.getElementById('modal')
const container1 = document.getElementById('container1')
const openModal = () => {
  console.log('hi')
  modal.style.display = 'block'
  container1.style.display = 'none'
  document.body.style.background = 'rgba(0, 0, 0, 0.4)'
}
const closeModal = () => {
  modal.style.display = 'none'
  container1.style.display = 'block'
  document.body.style.background = 'white'
}
