const scriptURL = "https://script.google.com/macros/s/AKfycbyOsCSjnGlPaoUiZ9Ggx3mknN2g5wMCO3k6KqBF-3j2CFmZoyXllcijm9SciTEVg8eQ/exec";

document.getElementById("sendButton").onclick = function () {

    const data = {
        message: "Hello from GitHub!"
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
