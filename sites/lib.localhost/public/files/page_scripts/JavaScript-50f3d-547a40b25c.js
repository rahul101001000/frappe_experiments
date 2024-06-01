const createArticle = () => {
    const articlename = document.getElementById("name-input").value
    const author = document.getElementById("author-input").value
    const desc = document.getElementById("desc-input").value
 
    console.log(JSON.stringify({ articlename, author, desc }))
    
    fetch("/api/method/create-article", {
        method: "POST",
        headers: {'Content-Type':'application/json',"X-Frappe-CSRF-Token": frappe.csrf_token},
        body: JSON.stringify({ articlename, author, desc }),
    }).then((response) => response.json())
    .then(console.log).catch(console.error)
    .then(window.location.href = '/pages/home')
}
