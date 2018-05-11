const get_foursquare_venues = (latitude, longitude, radius, client_id, client_secret, version, on_success, on_error) => {
    fetch(`https://api.foursquare.com/v2/venues/explore?v=${version}&client_id=${client_id}&client_secret=${client_secret}&ll=${latitude},${longitude}&radius=${radius}`)
        .then(res => res.json())
        .then(body => on_success(body))
        .catch(error => on_error(error));
};

export default get_foursquare_venues;
