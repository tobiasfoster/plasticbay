

(function() {
    console.log(navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
    }));

})();