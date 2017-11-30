import React, { Component, PropTypes } from 'react';

class Navigation extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  render() {
    return (
      <div className="navigation">


        <img src="/images/Logo.png"></img>

        <div className="menu-items">
          <span onClick={() => {
            this.context.router.push('/home');
          }}><i className="ion-ios-home icon"></i></span>

          <div className="dropdown">
            <span><i className="ion-android-person icon"></i></span>
            <div className="dropdown-content">
              <a onClick={() => {
                this.context.router.push('/profile');
              }}>Profile</a>
              <a onClick={() => {
                this.context.router.push('/');
              }}>Logout</a>
            </div>
          </div>
          {/* <span onClick={() => {
            this.context.router.push('/profile');
          }}><i className="ion-android-person icon"></i></span> */}

          <span onClick={() => {
            this.context.router.push('/bookmark');
          }}><i className="ion-android-bookmark icon"></i></span>
          <span onClick={() => {
            var txt;
            var pResponse = prompt("Search for articles:", "Blood Pressure");
            if (pResponse == null || pResponse == "") {
                txt = "User cancelled the prompt.";
            } else {
                txt = "Searching for " + pResponse;
            }
            this.context.router.push('/search');
          }}><i className="ion-search icon"></i></span>
          <span onClick={() => {
            window.location.href = '/camera.html';
          }}><i className="ion-camera icon"></i></span>
        </div>

        <div className="navigation-text">
          <span id="home-text">Home</span>
          <span id="profile-text">Profile</span>
          <span id="bookmark-text">Bookmarks</span>
          <span id="search-text">Search</span>
          <span id="upload-text">Upload</span>
        </div>

      </div>
    )
  };
};

export default Navigation;
