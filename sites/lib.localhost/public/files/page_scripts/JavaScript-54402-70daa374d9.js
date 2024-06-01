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


// redirects to the create article page on clicking the button
const redirect = () => window.location.href = '/pages/create'
