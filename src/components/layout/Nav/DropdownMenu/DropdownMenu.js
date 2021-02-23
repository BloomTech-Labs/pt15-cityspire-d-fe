import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDetectOutsideClick } from '../../../common';

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
          <nav
            ref={dropdownRef}
            className={`menu ${isActive ? 'active' : 'inactive'}`}
          >
            <ul>
              <li>
                <Link to="#">Profile</Link>
              </li>
              <li>
                <Link to="#">Favorites</Link>
              </li>
              <li>
                <Link onClick={logout}>Logout</Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        ''
      )}
    </>
  );
}
