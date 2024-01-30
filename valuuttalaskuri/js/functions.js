const button = document.querySelector('button')
const input = document.querySelector('input')
const output = document.querySelector('output')

button.addEventListener('click',() => {
    //console.log('test')
    //alert('test')
    const crowns = input.value
    const euros = crowns * 0.089
    output.innerHTML = euros.toFixed(2)
})