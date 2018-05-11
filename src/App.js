import React from 'react';
import FullMap from './components/FullMap';
import UserPanel from './components/UserPanel';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user_location: null, };
    }

    render() {
        const { user_location } = this.state;
        const set_location = location => this.setState({ user_location: location });
        const location_control = user_location ? null : <UserPanel on_location={set_location}/>;
        return <React.Fragment>
            <FullMap latitude={user_location && user_location.coords.latitude}
                     longitude={user_location && user_location.coords.longitude}/>
            {location_control}
        </React.Fragment>;
    }
}

export default App;
