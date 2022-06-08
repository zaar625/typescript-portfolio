import React from 'react';
// import { Link } from 'react-router-dom'
import './profile.scss';
import profileImage from '../../assets/images/me.jpg';

const Profile = () => {
  return (
    <div className="profile col-4 col-sm-12 cardstyle">
      <div className="profile__info">
        <div className="profile__info__image">
          <img src={profileImage} alt="profile" />
        </div>
        <div className="profile__info__des">
          <h3 className="title">Lee sang yoon</h3>
          <div className="profile__info__des__link">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/zaar625"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.notion.so/6ee88740c71e4074937a7f49c43540c2?v=1d3ae83fd37948268377f9852ad19a50"
            >
              <i className="bx bx-book-content"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="profile__character">
        <span>#에너제릭한</span>
        <span>#배움을 즐기는</span>
        <span>#호기심많은</span>
      </div>
    </div>
  );
};

export default Profile;
