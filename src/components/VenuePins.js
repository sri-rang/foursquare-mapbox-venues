import React from 'react';
import { Layer, Feature } from 'react-mapbox-gl';

const VenuePins = ({ venues, on_select_venue }) => {
    if (!venues || venues.length === 0) return null;
    return <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        {venues.map(item => <Feature key={item.venue.id}
                                     coordinates={[item.venue.location.lng, item.venue.location.lat]}
                                     onClick={() => on_select_venue(item)}/>)}
    </Layer>;
};

export default VenuePins;
