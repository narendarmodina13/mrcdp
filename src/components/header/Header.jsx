import React from 'react';
import './header.css'; // Import CSS file for styling
import { Search } from '@mui/icons-material';

export default function Header() {
  return (
    <div className='headerContainer'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 headerLeft">
            <span>
              <img src="/Microsoft.png" alt="Logo" className="logoImage" />
            </span>
            <span className="logo">Meeting Room & Connected Devices</span>
          </div>
          <div className="col-md-4 headerCenter">
            <div className=" col-md-10 searchBar">
              <Search className='searchIcon'/>
              <input placeholder='Search For Building or Room' className='searchInput'/>
            </div>
          </div>
          <div className="col-md-4 headerRight">
            <div className="headerLinks"> 
              <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR3Z70D5R-0BDhL2JfBxTeeRUQzc4TlFQSEJQUUlYR1BRS05DSFJRQTFKRS4u" className="headerLink">Survey</a>
              <a href="https://privacy.microsoft.com/en-us/privacystatement" className="headerLink">Privacy</a>
            </div>
            <div className="headerIcons">        
              <span className='headerUserName'>v-mnarendar@microsoft.com</span>
              <img src="/assets/UserImage.png" alt="" className="headerUserImage"/>
            </div>        
          </div>
        </div>
      </div>
    </div>
  );
}
