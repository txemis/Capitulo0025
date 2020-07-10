export function hola3() {

    var a;
    hola()
    
    function hola(){
        console.log('Aqui en hola3!');
        //alert('Aqui en hola!');
        a = 100;
    }

    return ({
        play: function() {                
            var devuelve = a;
        },
        publica: "Estoy aqui adentro en hola3!",
        cogeValor: function() {
            return a;
        }
    })
}

