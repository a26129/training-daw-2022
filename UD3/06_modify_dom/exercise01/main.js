window.onload = function(e) {
    console.log('documento cargado')
        //Cambiar el título del segundo h2
    document.getElementsByTagName('h2')[1].innerHTML = "Texto modificado"
        //Seleccionar el elemento con id == username
    console.log(document.getElementById('username'))
        //Cambiar el color de todos los .first que estén dentro de un artículo
    console.log(document.querySelectorAll('article'))
    document.querySelectorAll('article>.first').forEach(first => first.style.color = "green")
        //Seleccionar todos lo elementos li con class == item
    console.log(document.querySelectorAll('li.item'))
        //Seleccionar todos lo buttons dentro de class == buttons
    console.log(document.querySelectorAll('.buttons>button'))
        //Cambiar el código de fondo del primer párrafo
    var p1 = document.getElementsByTagName('p')[0]
    p1.style.backgroundColor = "blue"
        //Cambiar el color de frente (forecolor) de los elementos buttons dentro de class == buttons
    document.querySelectorAll('.buttons>button').forEach(buttons => buttons.style.color = "blue")
        // document.getElementsByTagName('h1')[0].innerText = 'Changed from JS!!'
}