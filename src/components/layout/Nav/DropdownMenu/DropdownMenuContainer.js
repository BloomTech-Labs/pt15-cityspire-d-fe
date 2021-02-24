import React, { useRef } from 'react';

import RenderDropdownMenu from './RenderDropdownMenu';
import { useDetectOutsideClick } from '../../../common';

import './DropdownMenu.css';

export default function DropdownMenuContainer({
  authState,
  userInfo,
  userPic,
  logout,
}) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const activeClick = () => setIsActive(!isActive);

  return (
    <>
      <RenderDropdownMenu
        authState={authState}
        userInfo={userInfo}
        userPic={userPic}
        logout={logout}
        activeClick={activeClick}
        dropdownRef={dropdownRef}
        isActive={isActive}
      />
    </>
  );
}
