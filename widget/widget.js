window.addEventListener('onEventReceived', function (obj) {
    const listener = obj.detail.listener;
    document.getElementById('text-custom').innerHTML = listener;
});
