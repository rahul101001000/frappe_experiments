/*
// useless code that turns a div into a textbox
const target = document.getElementById('input-1')
const observer = new MutationObserver(() => {
    document.getElementById('output-1').textContent = target.innerText
})
observer.observe(target, {
    attributes:    true,
    childList:     true,
    characterData: true
})
*/

// Trying to get rid of the bhoot Text below input box
document.getElementById('input-2').innerHTML = ''

// redirects to the create article page on clicking the button
const redirect = () => window.location.href = '/pages/create'


// updates output2 based on input 2 value
const update_output2 = () => document.getElementById('output-2').textContent = document.getElementById('input-2').value
