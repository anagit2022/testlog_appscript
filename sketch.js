const scriptURL = "YOUR_SCRIPT_URL";

document.getElementById("sendButton").onclick = function () {

    const data = {
        message: "Hello from GitHub!"
    };

    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(result => {
        alert(result);
    })
    .catch(error => {
        console.error(error);
    });

};
