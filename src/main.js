document.addEventListener('DOMContentLoaded', () => {
    let countEl = document.getElementById('count-el');
    const incrementBtn = document.getElementById('increment-btn');
    const saveBtn = document.getElementById('save-btn');
    let saveEl = document.getElementById('save-el');

    let count = 0

    incrementBtn.addEventListener('click', () => {
        count++
        countEl.innerText = count
        countEl.classList.add('increment')
        setTimeout(() => countEl.classList.remove('increment'), 200)
    })

    saveBtn.addEventListener('click', () =>{
        saveEl.innerText += ' ' + count + ', '
        console.log(`Total number of students: ${count} student(s)`)
        count = 0
        countEl.innerText = count
    })
})