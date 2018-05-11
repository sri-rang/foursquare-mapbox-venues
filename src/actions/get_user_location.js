const get_user_location = (on_success, on_error_geolocation_unavailable, on_error_geolocation_denied) => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(on_success, on_error_geolocation_denied);
    }
    else {
        on_error_geolocation_unavailable();
    }
};

export default get_user_location;
