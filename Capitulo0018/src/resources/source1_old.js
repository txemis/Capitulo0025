export function conexion( abiertoYa) {
/*    const inputField = document.getElementById("input");
    inputField.disabled = false;
    inputField.focus();
    inputField.select();
    document.getElementById("sendButton").disabled = false;
    document.getElementById("connect").disabled = true;
*/
    //this.conexion = 'Hola desde conexion!'
    var temperatura; //valor de retorno, variable global
    //var temperatura = 100; //valor de retorno, variable global

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
    if (abiertoYa){
        console.log('abierto ya')
    
        var port;
        navigator.serial.requestPort()
    //        .then(resut => {port.open({ baudrate: 9600 })});
            .then(port => {
                            port.open({ baudrate: 9600 })
                            .then(() => {
                                        console.log('Puerto=', port);
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
    }


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
            PaGraficoDonut(sensors);
            //PaGraficoDonut("datos", sensors);
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

    function PaGraficoDonut(valorSensors){
        //temperatura = valorSensors.temp.current;
        temperatura = 150;
        console.log('temperatura actual=', temperatura)
    }

return({
    //temperatura: temperatura,
    temperatura: function() {
        console.log('temperatura actual2=', temperatura); 
        return temperatura
    }
})


/*
*/
}