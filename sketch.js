const scriptURL = "https://script.google.com/macros/s/AKfycbxDUp5CjhXYGUNRNk3YQf8XTVNkOfQ_rX3TZCgrHtC_B-XjJd_VzlexZ7acZRc_K78P/exec";

document.getElementById("sendButton").onclick = async function () {

    const now = new Date();

    let country = "Unknown";

    try {

        const response = await fetch("https://ipapi.co/json/");

        const location = await response.json();

        country = location.country_name;

    }
    catch(error){

        console.log("Couldn't get country");

    }

    const data = {

        message: "Hello from GitHub!",

        date: now.toLocaleDateString(),

        time: now.toLocaleTimeString(),

        country: country

    };

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
