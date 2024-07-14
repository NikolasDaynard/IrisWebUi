function loadScript(url, callback) {
    const script = document.createElement('script');
    script.src = url;
    script.onload = () => callback();
    document.head.appendChild(script);
}

document.addEventListener('DOMContentLoaded', () => {
    loadScript('./src/iris.js', () => {
        // additionalFunction(); // Output: Hello from additional.js!
        run("testing");
    });
});