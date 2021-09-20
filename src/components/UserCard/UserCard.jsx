import React from "react";
import { FaPlus } from "react-icons/fa";

export const UserCard = ({ user }) => {
  return (
    <div className="card-vertical default-container flex-items shadow-box">
      <div className="img-container">
        <img
          loading="lazy"
          className="img-res card-img product-card-img"
          src={user.avatar}
          alt={user.last_name}
        />
      </div>
      <div className="text-container">
        <div className="text-container-title">
          <h4>{`${user.first_name} ${user.last_name}`}</h4>
        </div>
        <div className="text-container-desc">
          <p>{user.email}</p>
        </div>
        <div className="cta-container">
          <button className="btn btn-icon btn-primary flex-items">
            <FaPlus alt="cta-img" />
            <span>Follow</span>
          </button>
        </div>
      </div>
    </div>
  );
};
