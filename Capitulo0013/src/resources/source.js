module.exports = {

/*Pendiente implementar la advertencia!!!*/


    /*
if ('serial' in navigator) {
    const notSupported = document.getElementById('notSupported');
    notSupported.classList.add('hidden');
}
*/

//const log = document.getElementById("log")

hola: function(){
    console.log('Aqui en sources!');
    alert('Aqui en sources!'); 
},

check: function(){
    if ('serial' in navigator) {
        const notSupported = document.getElementById('notSupported');
        //notSupported.classList.add('hidden');
        console.log('No soportado',notSupported);
        notSupported.style('display', 'block');
}

},

/*


function send() {
    const toSend = document.getElementById("input").value
    writeToStream(toSend)
    document.getElementById("input").value = ""

}

function handle(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        send();
    }
}
*/
//conexion:  async function() {
conexion:  function() {
/*    const inputField = document.getElementById("input");
    inputField.disabled = false;
    inputField.focus();
    inputField.select();
    document.getElementById("sendButton").disabled = false;
    document.getElementById("connect").disabled = true;
*/

    //var sensors;
    var sensors = {
        temp: {current: 0, high: 0, low: 100 },
        humidity: {current: 0, high: 0, low: 100},
        light: {current: 0, high: 0, low: 10}
    }

    //PaDonut("datos iniciales", sensors);
    console.log("datos iniciales:", sensors);



/*
    let port = await navigator.serial.requestPort();
    // - Wait for the port to open.
    //await port.open({ baudrate: 115200 });
    await port.open({ baudrate: 9600 });
    console.log('Open', port);
*/
    var port;
    navigator.serial.requestPort()
//        .then(resut => {port.open({ baudrate: 9600 })});
        .then(port => {
                        port.open({ baudrate: 9600 })
                        .then(() => {
                                    console.log(port);
                                    let decoder = new TextDecoderStream();
                                    port.readable.pipeTo(decoder.writable);
                                    //.then(() =>   {
                                                        let inputStream = decoder.readable;
                                                        let reader = inputStream.getReader();
                                                         //inputStream.getReader()
                                                        //.then(reader => {
                                                                            console.log(reader);
                                                                            readLoop(reader);
                                                                          //})
                                                        //console.log(reader);
                                                        //readLoop();
                                    //                })



                                    })
                        //console.log(port);
                        
                        

                        //var portread = port.readable
                        //.then(res => {console.log(res)})
                        //console.log(portread);
                        
                        //port.readable.pipeTo(decoder.writable)

                        /*
                        let inputStream = decoder.readable;

                        let reader = inputStream.getReader();
                        readLoop();
                        */

                    })
        .catch(err => {console.log(err);});
    //console.log('Open', port);


/*
    let decoder = new TextDecoderStream();
    let inputDone = port.readable.pipeTo(decoder.writable);
    let inputStream = decoder.readable;
*/

/*    const encoder = new TextEncoderStream();
    outputDone = encoder.readable.pipeTo(port.writable);
    outputStream = encoder.writable;

*/

/*
    let reader = inputStream.getReader();
    readLoop();
*/

//    async function readLoop() {
    function readLoop(reader) {
        console.log('Readloop');
        console.log(reader);

        leer()
        .then(resultado => {
            console.log(resultado);
        })
        .catch(err => {console.log(err)})


        function leer() {
            return reader.read()
            .then(value => {
                console.log('value', value.value);
                console.log('done', value.done);

                if (value.value) {
                    log.textContent += value.value;
                    log.scrollTop = log.scrollHeight;
                    datosPaDonut(value.value);
                    return leer();
                } else {
                    return value.done;
                }



            })
        }




/*

        let continuar = true;
        while (continuar) {
            continuar = false;        
//        while (true) {
            //const { value, done } = await reader.read();
            //const { value, done };
            //console.log(reader.read());
            reader.read()
            .then(value  => {
//            .then((value, done) => {

            continuar = true;
            console.log('value', value.value);
            console.log('done', value.done);
            

            if (value.value) {
                log.textContent += value.value;
                log.scrollTop = log.scrollHeight;
                

//                datosPaDonut(value);
            }

/*            //Para salir del bucle:
            if (value.done) {
                console.log('[readLoop] DONE', value.done);
                reader.releaseLock();
                break;
            }
*/



/*            })

//            console.log('value', value);
//            console.log('done', done);


/*            
            if (value) {
                log.textContent += value;
                log.scrollTop = log.scrollHeight;
                datosPaDonut(value);
            }
            if (done) {
                console.log('[readLoop] DONE', done);
                reader.releaseLock();
                break;
            }
*/            
/*        }

*/

    }



    function datosPaDonut(valor) {
        var cadena = [];
        var arrastre = [];
        var terna = [];
        var pasaterna = [];

        valor = valor.replace(/(\r\n|\n|\r)/gm,"");
        var dataArray = valor.split(',');   //Ojo hay un problema q junta la última cifra de una cadena con la primera
        var dataArray = dataArray.filter(function(value) {
            return value !== "";
        });
        //Hacer paquetes de 3:
        cadena = arrastre.concat(dataArray);
        if( cadena.length == 3){
            terna = cadena;
            arrastre = [];
        }
        else if( cadena.length > 3){
            terna = cadena.slice(0, 4);
            arrastre = cadena.slice(4);
        }
        else if( cadena.length < 3){
            arrastre = cadena;
            terna = [];  //da problemas con valores bajos
        }


        console.log('Hola desde datosPaDonut, dataArray=', dataArray);

        if(terna.length == 3){
            console.log('terna=', terna);
            pasaterna = terna;    
        }


        
        var hasChanged = updateValues(pasaterna);
        if (hasChanged >0){
            PaGraficoDonut("datos", sensors);
//            console.log("datos:", sensors);
        }


    }

    function updateValues(data){
        var changed = 0;
        var keyArray = ["temp", "humidity", "light"];

        keyArray.forEach(function(key, index){
            var tempSensor = sensors[key];
            var newData = data[index];
            if(tempSensor.current !== newData){
                sensors[key].current = data[index];
                changed = 1;
            }
            if(tempSensor.high < newData){
                sensors[key].high = data[index];
                changed = 1;
            }
            if(tempSensor.low > newData ){
                sensors[key].low = data[index];
            }
        });
        console.log("datos:", sensors);
        return changed;
    }



/*
*/
},
/*
function writeToStream(line) {
    const writer = outputStream.getWriter();
    console.log('[SEND]', line);
    writer.write(line + '\r');
    writer.releaseLock();
}

*/
/*
async function readLoop() {
    console.log('Readloop');

    while (true) {
        const { value, done } = await reader.read();
        console.log('value', value);
        console.log('done', done);


        if (value) {
            log.textContent += value;
            log.scrollTop = log.scrollHeight;
        }
        if (done) {
            console.log('[readLoop] DONE', done);
            reader.releaseLock();
            break;
        }
    }
}
*/
/*

*/

}