import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faSignOutAlt,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

function RenderDropdownMenu({
  userInfo,
  userPic,
  logout,
  activeClick,
  isActive,
  dropdownRef,
}) {
  return (
    <>
      {userInfo ? (
        <div className="menu-container">
          <button onClick={activeClick} className="menu-trigger">
            <span>{userInfo.name}</span>
            <img src={userPic} alt="user pic" className="user-pic" />
          </button>
          <div
            ref={dropdownRef}
            className={`menu ${isActive ? 'active' : 'inactive'}`}
          >
            <ul>
              <li>
                <Link to="/home" onClick={activeClick}>
                  <FontAwesomeIcon icon={faUserCircle} />
                  &nbsp;&nbsp; Profile
                </Link>
              </li>
              <li>
                <Link to="/favorites" onClick={activeClick}>
                  <FontAwesomeIcon icon={faHeart} />
                  &nbsp;&nbsp; Favorites
                </Link>
              </li>
              <li>
                <Link onClick={logout}>
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  &nbsp;&nbsp; Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
}

export default RenderDropdownMenu;
