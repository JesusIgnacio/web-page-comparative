function component() {
    const element = document.createElement('div');
    element.innerHTML = "<p>" + "Hello" + "</p>"
    return element;
}

window.onload = function () {
    document.body.appendChild(component());
}