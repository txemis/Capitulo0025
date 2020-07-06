

    var a;

    function hola(){
        console.log('Aqui en hola!');
        //alert('Aqui en hola!');
        a = 80;
    }

    export default {
        publica() {
            console.log('Estoy aqui adentro en hola2!')
        },       
        cogeValor() {
            return a;
        }
    }

