import React from 'react';
import User from './User';
import Palette from './Palette.js';
const Profile = () => {
    return (
        <div className="container profile">
            <User
                src="https://pbs.twimg.com/media/Cp_J8RVXgAAv_nS.jpg"
                alt="Man"
                name="elvis_presley"/>

            <Palette/>

        </div>
    )
}

export default Profile;