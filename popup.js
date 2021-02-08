const destination = document.querySelector("#emailSubmission")

let email =""
destination.addEventListener("submit", (e) => {
    e.preventDefault()
    email = document.querySelector("input").value
    console.log(email)
    chrome.storage.sync.set ({"destination": email}, function () {
        const alert = document.createElement ("b")
        alert.append("Success! Now refresh the page to start sharing.")
        document.querySelector("body").append(alert)
        alert.style.color = "rbg(7,7,6)"
        // alert ("Success! Please refresh the page to start sharing.")
    })

})

// var port = chrome.extension.connect({
//     name: "Sample Communication"
// });

// port.postMessage(email);
// port.onMessage.addListener(function(msg) {
//     console.log("message recieved" + msg);
// });