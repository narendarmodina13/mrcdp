import React, { useState } from 'react';
import { Public, Search,ToggleOff,ToggleOn, Settings, Equalizer, Crop32, Autorenew, UploadFile, InsertPhoto, Summarize, VolunteerActivism } from '@mui/icons-material';
import './sidebar.css';

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <div className={`sidebar ${isSidebarOpen ? '' : 'collapsed'}`}>
      <div className="sidebarWrapper">
        <div className="toggleButton" onClick={toggleSidebar}>
          <span className="toggleIcon">{isSidebarOpen ? <ToggleOn/>: <ToggleOff/> }</span>
        </div>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Public className="sidebarIcon" />
            <span className="sidebarListItemText">Regions</span>
          </li>
          <li className="sidebarListItem">
            <Search className="sidebarIcon" />
            <span className="sidebarListItemText">Search</span>
          </li>
          <li className="sidebarListItem">
            <Settings className="sidebarIcon" />
            <span className="sidebarListItemText">Settings</span>
          </li>
          <li className="sidebarListItem">
            <Crop32 className="sidebarIcon" />
            <span className="sidebarListItemText">Change Requests</span>
          </li>
          <li className="sidebarListItem">
            <Equalizer className="sidebarIcon" />
            <span className="sidebarListItemText">Reports</span>
          </li>
          <li className="sidebarListItem">
            <Autorenew className="sidebarIcon" />
            <span className="sidebarListItemText">LCR</span>
          </li>
          <li className="sidebarListItem">
            <InsertPhoto className="sidebarIcon" />
            <span className="sidebarListItemText">Room Picture Bulk Upload</span>
          </li>
          <li className="sidebarListItem">
            <UploadFile className="sidebarIcon" />
            <span className="sidebarListItemText">Room/Asset Bulk Update</span>
          </li>
          <li className="sidebarListItem">
            <Summarize className="sidebarIcon" />
            <span className="sidebarListItemText">Documentation</span>
          </li>
          <li className="sidebarListItem">
            <VolunteerActivism className="sidebarIcon" />
            <span className="sidebarListItemText">Heartbeat Dashboard</span>
          </li>
        </ul>
        <hr className="sidebarHr" />
      </div>
    </div>
  );
}
