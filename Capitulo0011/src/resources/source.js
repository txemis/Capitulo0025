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
conexion:  async function() {
/*    const inputField = document.getElementById("input");
    inputField.disabled = false;
    inputField.focus();
    inputField.select();
    document.getElementById("sendButton").disabled = false;
    document.getElementById("connect").disabled = true;
*/

    var sensors = {
        temp: {current: 0, high: 0, low: 100 },
        humidity: {current: 0, high: 0, low: 100},
        light: {current: 0, high: 0, low: 10}
    }

    //PaDonut("datos iniciales", sensors);
    console.log("datos iniciales:", sensors);




    let port = await navigator.serial.requestPort();
    // - Wait for the port to open.
    //await port.open({ baudrate: 115200 });
    await port.open({ baudrate: 9600 });
    console.log('Open', port);



    let decoder = new TextDecoderStream();
    let inputDone = port.readable.pipeTo(decoder.writable);
    let inputStream = decoder.readable;

/*    const encoder = new TextEncoderStream();
    outputDone = encoder.readable.pipeTo(port.writable);
    outputStream = encoder.writable;

*/


    let reader = inputStream.getReader();
    readLoop();


    async function readLoop() {
        console.log('Readloop');

        while (true) {
            const { value, done } = await reader.read();
            console.log('value', value);
            console.log('done', done);


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
        }
    }



    function datosPaDonut(valor) {

        //var cadena;
        //cadena += valor;
        //console.log('cadena:', cadena)
        //datos = datos.replace(/(\r\n|\n|\r)/gm,"");
        valor = valor.replace(/(\r\n|\n|\r)/gm,"");
        var dataArray = valor.split(',');
        //console.log('Hola desde datosPaDonut, valor=', valor);
        //console.log('Hola desde datosPaDonut, dataArray=', dataArray);

        var hasChanged = updateValues(dataArray);
        if (hasChanged >0){
            //PaDonut("datos", sensors);
            console.log("datos:", sensors);
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
                //changed = 1;
            }
            if(tempSensor.low > newData ){
                sensors[key].low = data[index];
            }
        });
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