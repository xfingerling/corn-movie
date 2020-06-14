import React from "react";
import PropTypes from "prop-types";

const UserProfile = ({ user, onLogOut }) => {
  return (
    <div>
      <p>User Profile</p>
      <button onClick={onLogOut}>Log Out</button>
    </div>
  );
};

UserProfile.propTypes = {
  // user: PropTypes.object,
  onLogOut: PropTypes.func,
};

export default UserProfile;
