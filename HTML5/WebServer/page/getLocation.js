const btn = document.getElementById('btn');
btn.onclick = function (e) {
    getLocation();
}

function getLocation() {
    window.navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position)
    })
}
