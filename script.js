function flextoggle() {
    let nav = document.querySelector("#Flex-nav")
    nav.classList.toggle ("flexToggle")

    let links = document.querySelectorAll (".link")
    links.forEach(link => link.classList.toggle("linkToggle"))

}