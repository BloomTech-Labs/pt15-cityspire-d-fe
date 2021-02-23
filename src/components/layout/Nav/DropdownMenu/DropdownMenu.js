import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDetectOutsideClick } from '../../../common';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faSignOutAlt,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

import './DropdownMenu.css';

export default function DropdownMenu({ authState, userInfo, userPic, logout }) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <>
      {userInfo ? (
        <div className="menu-container">
          <button onClick={onClick} className="menu-trigger">
            <span>{userInfo.name}</span>

            <img src={userPic} alt="user pic" className="user-pic" />
          </button>
          <div
            ref={dropdownRef}
            className={`menu ${isActive ? 'active' : 'inactive'}`}
          >
            <ul>
              <li>
                <Link to="#">
                  <FontAwesomeIcon icon={faUserCircle} />
                  &nbsp;&nbsp; Profile
                </Link>
              </li>
              <li>
                <Link to="#">
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
