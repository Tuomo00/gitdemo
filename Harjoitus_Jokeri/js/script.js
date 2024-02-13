const button = document.querySelector('button')
const table = document.querySelector('table')

const addTableRow = () => {
    const tr = table.insertRow()
    
    for(let i=0; i<7; i++) {
        const td = tr.insertCell(i);
        const RandomNumber = Math.floor(Math.random() * 10)
        td.innerHTML = RandomNumber
    }


}

button.addEventListener('click',() => {
    addTableRow()
    

})