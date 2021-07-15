import React from 'react'
import { withRouter } from 'react-router';
import AuthenticationContext, { Authentication } from '../shared/AuthenticationContext';

const ProfileCard = (props) => {
    return (
        <Authentication.Consumer>
            {value => {
                const pathUsername = props.match.params.username;
                const loggedInUsername = value.state.username;
                let message = "We cannot edit";
                if (pathUsername === loggedInUsername) {
                    message = "We can edit";
                }
                return (
                    <div>
                        {message}
                    </div>
                );
            }}
        </Authentication.Consumer>
    );
};


export default withRouter(ProfileCard);
