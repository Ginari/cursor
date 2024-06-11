if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then((registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, (error) => {
            console.log('ServiceWorker registration failed: ', error);
        });
    });
}

// Handle terminal input
document.querySelector('.input-cursor').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const input = event.target;
        const output = document.querySelector('.output');
        const inputValue = input.value;

        if (inputValue) {
            output.innerHTML += `<div><span class="prompt">$</span> ${inputValue}</div>`;
            input.value = '';
            output.scrollTop = output.scrollHeight;
        }
    }
});
