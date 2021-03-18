console.log("from foreground")

function createButton() {
    const first = document.createElement('button');
    first.innerText = "Send code";
    first.id = "sendCodeButton"

    first.addEventListener('click', () => {
        let questionTitle = document.querySelector('.css-v3d350').innerText;
        let code = document.getElementsByClassName("CodeMirror cm-s-textmate CodeMirror-wrap")[0].innerText.replace(/[0-9]+\n/g, '');
        let location = window.location.href;
        popupWindow(questionTitle, code, location, "800px", "600px");
    });

    return first;
}

setTimeout(function() {
    if (!document.querySelector('#sendCodeButton')) {
        document.querySelector('.container__2zYY').appendChild(createButton()); 
    }
},2000)


chrome.storage.sync.get("destination", function (data) {
    console.log(data.destination)
    data1 = data.destination;
    return data1
})

function popupWindow(questionTitle, code, w, h) {
    console.log(location)
    console.log(code)

    url = `https://mail.google.com/mail/u/0/?view=cm&ui=2&tf=0&fs=1&to=${data1}&su=` + questionTitle + "&body=" + encodeURIComponent(location + '\r\n\r\n'+ code)
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    var win = window.open(url, 'Title', 'toolbar = no, location = no, directories = no, status = no, menubar = no, scrollbars = no, resizable = no, copyhistory = no, width = ' + w + ', height = ' + h + ', top = ' + top + ', left = ' + left);
    win.focus();
}


