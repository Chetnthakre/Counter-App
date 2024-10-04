const count = document.querySelector('.count')

const minusBtn = document.querySelector('.minus-Btn')
const plusBtn = document.querySelector('.plus-Btn')

const changeBy = document.querySelector('.changeBy')

const resetbtn = document.querySelector('.reset-btn')



minusBtn.addEventListener('click', () => {
    const countValue = parseInt(count.innerText)
    const changeByValue = parseInt(changeBy.value)
    count.innerText = countValue - changeByValue
    
})




plusBtn.addEventListener('click', () => {
    const countValue = parseInt(count.innerText)
    const changeByValue = parseInt(changeBy.value)
   count.innerText = countValue + changeByValue
})

resetbtn.addEventListener('click', () => {
    count.innerText = 0
})