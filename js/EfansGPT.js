function loadScripts() {
    // Function to create and append a script element
    function addScript(src) {
        var script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
    }

    // Add the scripts
    addScript("https://cdn.botpress.cloud/webchat/v1/inject.js");
    addScript("https://mediafiles.botpress.cloud/a4c08435-f20b-4ae0-a449-391618d35136/webchat/config.js");
}
