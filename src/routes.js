crossroads.addRoute('/', () => render("HOME"))

crossroads.addRoute('/products', () => render("PRODUCTS"))

crossroads.addRoute('/contact-us', () => render("CONTACT-US"))



const parseHash = (newHash, oldHash) => {
    crossroads.parse(newHash)
}



const render = (id) => {
    resetPages()
    document.getElementById(id).style.display = 'block'
}

const resetPages = () => {
    var pages = document.querySelectorAll('.page')

    var pageArr = []
    pageArr.forEach.call(pages, (page) => page.style.display = 'none')
}



hasher.initialized.add(parseHash)
hasher.changed.add(parseHash)
hasher.init()