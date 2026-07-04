const scriptURL = "YOUR_WEB_APP_URL";

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
