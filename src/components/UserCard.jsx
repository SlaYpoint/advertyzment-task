import React, { useState } from "react";
import { FaPlus, FaCheck } from "react-icons/fa";

export const UserCard = ({ user }) => {
  const [follow, setFollow] = useState(false);

  return (
    <div
      className="card-vertical default-container flex-items shadow-box"
      style={{ maxWidth: "14rem" }}
    >
      <div className="img-container">
        <img
          loading="lazy"
          className="img-res card-img product-card-img"
          src={user.avatar}
          alt={user.last_name}
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div className="text-container">
        <div className="text-container-title">
          <h4>{`${user.first_name} ${user.last_name}`}</h4>
        </div>
        <div className="text-container-desc">
          <p className="sub-text">{user.email}</p>
        </div>
        <div className="cta-container">
          <button
            className="btn btn-icon btn-primary flex-items"
            onClick={() => setFollow(true)}
          >
            {follow ? <FaCheck alt="cta-img" /> : <FaPlus alt="cta-img" />}
            <span>{follow ? "Following" : "Follow"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
