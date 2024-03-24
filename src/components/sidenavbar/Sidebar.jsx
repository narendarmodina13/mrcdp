/* eslint-disable jsx-a11y/img-redundant-alt */
// App.js
import React, { useState, useRef, useEffect } from 'react';
import {
  Public,
  Search,
  ToggleOff,
  ToggleOn,
  Settings,
  Equalizer,
  Crop32,
  Autorenew,
  UploadFile,
  InsertPhoto,
  Summarize,
  VolunteerActivism
} from '@mui/icons-material';
import './sidebar.css';

const menuItems = [
  { icon: <Public />, text: 'Regions', hasChildren: false },
  { icon: <Search />, text: 'Search', hasChildren: false },
  { icon: <Settings />, text: 'Settings', hasChildren: true, children: ['Profile Settings', 'Change Requests'] },
  { icon: <Crop32 />, text: 'Change Requests', hasChildren: false },
  { icon: <Equalizer />, text: 'Reports', hasChildren: true, children: ['Executive Reports', 'Room Technologies', 'Targeted Skype Enabled', 'Engineering', 'Room Details'] },
  { icon: <Autorenew />, text: 'LCR', hasChildren: false },
  { icon: <InsertPhoto />, text: 'Room Picture Bulk Upload', hasChildren: false },
  { icon: <UploadFile />, text: 'Room/Asset Bulk Update', hasChildren: false },
  { icon: <Summarize />, text: 'Documentation', hasChildren: true, children: ['MRCDP', 'LCR'] },
  { icon: <VolunteerActivism />, text: 'Heartbeat Dashboard', hasChildren: false }
];

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [openSubMenuIndices, setOpenSubMenuIndices] = useState([]);
  const [showImage, setShowImage] = useState(false);
  const searchRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSubMenu = (index) => {
    if (openSubMenuIndices.includes(index)) {
      setOpenSubMenuIndices(openSubMenuIndices.filter((i) => i !== index));
    } else {
      setOpenSubMenuIndices([...openSubMenuIndices, index]);
    }
  };

  const handleRegionClick = () => {
    setShowImage(true);
  };

  useEffect(() => {
    // Focus on the search input when the component mounts
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, []);

  return (
    <div>
      <div className={`sidebar ${isSidebarOpen ? '' : 'collapsed'}`}>
        <div className="sidebarWrapper">
          <div className="toggleButton" onClick={toggleSidebar}>
            <span className="toggleIcon">{isSidebarOpen ? <ToggleOn /> : <ToggleOff />}</span>
          </div>
          <ul className="sidebarList">
            {menuItems.map((menuItem, index) => (
              <MenuItem
                key={index}
                menuItem={menuItem}
                isOpen={openSubMenuIndices.includes(index)}
                toggleSubMenu={() => toggleSubMenu(index)}
                isSidebarOpen={isSidebarOpen}
                index={index}
                handleRegionClick={handleRegionClick}
              />
            ))}
          </ul>
          <hr className="sidebarHr" />
        </div>
      </div>
      {showImage && <div className="imageContainer"><img src="/assets/Regions.png" alt="Your Image" /></div>}
    </div>
  );
}

function MenuItem({ menuItem, isOpen, toggleSubMenu, isSidebarOpen, index, handleRegionClick }) {
  return (
    <li className="sidebarListItem">
      <div onClick={() => {
        if (menuItem.text === 'Regions') {
          handleRegionClick();
        }
        isSidebarOpen && menuItem.hasChildren && toggleSubMenu();
      }}>
        <span className="sidebarListItemIcon">{menuItem.icon}</span>
        <span className="sidebarListItemText">{menuItem.text}</span>
        {isSidebarOpen && menuItem.hasChildren && (
          <span className={`chevronIcon ${isOpen ? 'open' : 'closed'}`}></span>
        )}
      </div>
      {isSidebarOpen && isOpen && menuItem.hasChildren && (
        <ul className="nestedList">
          {menuItem.children.map((child, idx) => (
            <li key={idx} className="sidebarListItem">
              <span className="nestedListItemText">{child}</span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
