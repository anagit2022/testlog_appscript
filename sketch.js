const scriptURL = "https://script.google.com/macros/s/AKfycbxDUp5CjhXYGUNRNk3YQf8XTVNkOfQ_rX3TZCgrHtC_B-XjJd_VzlexZ7acZRc_K78P/exec";

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
