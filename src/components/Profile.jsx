import React from "react";
import profileImg from "../assets/profile.png"; // Cambia por tu imagen

const Profile = () => (
  <div className="profile-card">
    <img src={profileImg} alt="Foto de perfil" className="profile-img" />
    <div>
      <h2>Jose Garcia</h2>
      <p>Web Developer<br />Venezuela</p>
    </div>
  </div>
);

export default Profile;