var audioService = (function() {

    //var a;

    function hola(){
        console.log('Aqui en hola!');
        //alert('Aqui en hola!');
        var a = 80;
        return {
            play: function() {                
                var devuelve = a;
            },
            publica: "Estoy aqui adentro!",
            cogeValor: function() {
                return a;
            }
        }


    }
})();

