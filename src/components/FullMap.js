import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import config from '../config';
import get_foursquare_venues from '../actions/get_foursquare_venues';
import VenuePins from './VenuePins';
import VenuePopup from './VenuePopup';

const Map = ReactMapboxGl({ accessToken: config.mapbox.token });

class FullMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            venues: null,
            selected_venue: null,
            radius: 1000,
            zoom: [15],
        };
    }

    render() {
        const { latitude, longitude } = this.props;
        const { selected_venue, venues, zoom, radius } = this.state;
        if (latitude && longitude && venues) {
            const on_radius_change = event => this.setState({ radius: Number(event.target.value) }, this.get_venues);
            return <div className='map'>
                <Map containerStyle={{ height: '100vh', width: '100vw' }}
                     center={[longitude, latitude]}
                     style="mapbox://styles/mapbox/light-v9"
                     zoom={zoom}>
                    <VenuePins venues={venues}
                               on_select_venue={selected_venue => this.setState({ selected_venue })}/>
                    <VenuePopup selected_venue={selected_venue}/>
                </Map>
                <div className='radius_control'>
                    <input type='range'
                           min={100} max={1000} step={100}
                           defaultValue={radius}
                           onChange={on_radius_change}/>
                </div>
            </div>;
        }
        else if (latitude && longitude && !venues) {
            this.get_venues();
            return <div className='map empty_location'></div>;
        }
        else {
            return <div className='map no_location'></div>;
        }
    }

    get_venues() {
        const { radius } = this.state;
        const { latitude, longitude } = this.props;
        const { client_id, client_secret, version } = config.foursquare;
        const on_success = body => this.setState({ venues: body.response.groups[0].items });
        const on_error = error => console.error(error);
        get_foursquare_venues(latitude, longitude, radius, client_id, client_secret, version, on_success, on_error);
    }
}

export default FullMap;
