import React from 'react';
import get_user_location from '../actions/get_user_location';

class UserPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            try_again: false,
        };
    }

    render() {
        const { loading, try_again } = this.state;

        const label_loading = 'Loading..';
        const label_try_again = 'Geolocation unavailable, try again?';
        const label_share_location = 'Share my location';

        let label;
        if (loading) label = label_loading;
        else if (try_again) label = label_try_again;
        else label = label_share_location;

        return <div className='user_panel'>
            <button disabled={loading}
                    onClick={() => this.action_get_user_location()}>
                {label}
            </button>
        </div>;
    }

    action_get_user_location() {
        this.setState({ loading: true });
        const on_success = user_location => {
            this.setState({ loading: false });
            this.props.on_location(user_location);
        };
        const on_error_geolocation_unavailable = () => this.setState({ loading: false, try_again: true });
        const on_error_geolocation_denied = () => this.setState({ loading: false, try_again: true });
        get_user_location(on_success, on_error_geolocation_unavailable, on_error_geolocation_denied);
    }
}

export default UserPanel;
