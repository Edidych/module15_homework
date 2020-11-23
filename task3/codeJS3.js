const wsUri = "wss://echo.websocket.org/";

function pageLoaded(){
    const infoOutput = document.querySelector(".info_output");
    const chatOutput = document.querySelector(".chat_output");
    const chatInput = document.querySelector(".chat_input");
    const input = document.querySelector("input");
    const btn = document.querySelector(".btn_send");

    let socket = new WebSocket(wsUri);

    socket.onopen = () => {
        infoOutput.innerText = "Соединение установлено";
    }

    socket.onmessage = (event) => {
        writeToChat(event.data, true);
    }

    socket.onerror = () => {
        infoOutput.innerText = "При передаче данных произошла ошибка";
    }

    function writeToChat(message, IsReceived){
        let messageHtml = `<div class = ${IsReceived ? "recieved" : "sent"}>${message}</div>`;
        chatOutput.innerHTML += messageHtml;
    }

    btn.addEventListener("click", sendMessage)

    function sendMessage(){
        if(!input.value) return;
        socket.send(input.value)
        writeToChat(input.value, false);
        input.value = "";
    }

}

document.addEventListener("DOMContentLoaded", pageLoaded);