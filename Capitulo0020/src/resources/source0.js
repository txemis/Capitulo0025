export function check(){
    if ('serial' in navigator) {
        const notSupported = document.getElementById('notSupported');
        //notSupported.classList.add('hidden');
        console.log('No soportado',notSupported);
        notSupported.style('display', 'block');
}
}