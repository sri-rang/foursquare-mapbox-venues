import React from 'react';
import { Popup } from 'react-mapbox-gl';

const VenuePopup = ({ selected_venue }) => {
    if (!selected_venue) return null;
    return <Popup coordinates={[selected_venue.venue.location.lng, selected_venue.venue.location.lat]}>
        <div className='selected_venue'>
            <div className='name'>{selected_venue.venue.name}</div>
            <div className='address'>{selected_venue.venue.location.formattedAddress.join(', ')}</div>
        </div>
    </Popup>;
};

export default VenuePopup;
