
// NotificationAndProfile.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';

const NotificationAndProfile = () => {
  return (
    <div className="notification-profile">
      <div className="notification">
        <FontAwesomeIcon icon={faBell} size="lg" />
      </div>
      <div className="profile">
        <img
          src="userPhoto.jpg"
          alt="User Profile"
          className="profile-image"
        />
        <FontAwesomeIcon icon={faUser} size="lg" />
      </div>
    </div>
  );
};

export default NotificationAndProfile;
