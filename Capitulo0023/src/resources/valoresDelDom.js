(function () {
setInterval(() => {
    var valores = document.getElementById("log").textContent;
    //valores = valores.height;
    //var datos = valores.getAttribute("textContent");
    console.log('valores=',valores)
    console.log('primer carácter =',valores[0])
    //console.log('datos=',datos)
},3000)
}());
