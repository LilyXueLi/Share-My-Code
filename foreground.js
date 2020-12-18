console.log("from foreground")

function createButton() {
    const first = document.createElement('button');
    first.innerText = "Send code";
    first.id = "sendCodeButton"

    first.addEventListener('click', () => {
        let questionTitle = document.querySelector('.css-v3d350').innerText;
        let code = document.getElementsByClassName("CodeMirror cm-s-textmate CodeMirror-wrap")[0].innerText.replace(/[0-9]+\n/g, '');
        popupWindow(questionTitle, code, "800px", "600px");
    });

    return first;
}


// # means id
// . means class
if (!document.querySelector('#sendCodeButton')) {
    document.querySelector('.container__2zYY').appendChild(createButton());
}

function popupWindow(questionTitle, code, w, h) {
    console.log(code)
    // url = "mailto:lilydenris@gmail.com?subject=" + questionTitle + "&body=" + code;  
    url = "https://mail.google.com/mail/u/0/?view=cm&ui=2&tf=0&fs=1&to=lilydenris@gmail.com&su=" + questionTitle + "&body=" + encodeURIComponent(code)
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    var win = window.open(url, 'Title', 'toolbar = no, location = no, directories = no, status = no, menubar = no, scrollbars = no, resizable = no, copyhistory = no, width = ' + w + ', height = ' + h + ', top = ' + top + ', left = ' + left);
    win.focus();
}