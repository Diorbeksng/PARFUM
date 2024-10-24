
const header = document.querySelector('._header')
const back = document.querySelectorAll('.back')
const a = document.querySelector('.opisanye')
        
window.addEventListener('scroll', () => {
  if (window.scrollY > 1) {
    // Пример порога прокрутки
    header.classList.add('active')
    for(let i = 0; i < back.length; i++){
        back[i].classList.add('backk')
    }



  } else {
    header.classList.remove('active')
    for(let i = 0; i < back.length; i++){
        back[i].classList.remove('backk')
    }
  }
})