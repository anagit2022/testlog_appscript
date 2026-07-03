const scriptURL = "https://script.google.com/macros/s/AKfycbzWtIIh7R0M0Dn7DttZ6lwaoruOv-eW-Zzk4x1fYGUebBZdUcyRHV2gHN5OOM4jddet/exec";

document.getElementById("sendButton").onclick = function () {

    const now = new Date();

const data = {

    message: "Hello from GitHub!",

    date: now.toLocaleDateString(),

    time: now.toLocaleTimeString()

};
    console.log("Button clicked");
    console.log(data);

    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(result => {
        console.log("Server replied:", result);
        alert(result);
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });

};
