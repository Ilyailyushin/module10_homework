const wsUri = 'wss://echo-ws-service.herokuapp.com';
const btnSend = document.querySelector('.button-send');
const btnGeo = document.querySelector('.button-geo');
const input = document.querySelector('#input');
const dialog = document.querySelector('#output');
const mapLink = document.querySelector('#map-link');

const websocket = new WebSocket(wsUri);

websocket.onopen = function () {
    console.log("CONNECTED");
};

websocket.onclose = function () {
    console.log("DISCONNECTED");
};    

websocket.onmessage = function (evt) {
    dialog.innerHTML += '<p class="message-server">' + evt.data+'</p>'
};

websocket.onerror = function (evt) {
    console.log(evt.data);
};
btnSend.addEventListener('click', () => {
    const message = input.value;
    dialog.innerHTML += '<p class="message-client">' + message+'</p>'
    websocket.send(message);
  });

btnGeo.addEventListener('click', () => {
    const message = "Геолокация";
    dialog.innerHTML += '<p class="message-client">'+message+'</p>';
  
    if (!navigator.geolocation) {
        dialog.innerHTML += '<p class="message-server">Geolocation не поддерживается вашим браузером</p>';
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
});
  
const success = (position) => {
  //console.log('position', position);
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    dialog.innerHTML += `<a id="map-link" href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}" target="_blank">Ссылка на карту</a>`;
}
const error = () => {
    dialog.innerHTML += '<p class="message-server">Невозможно получить ваше местоположение</p>';
}