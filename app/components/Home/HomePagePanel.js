import React, { Component } from 'react';
import ArticlePanel from 'ArticlePanel';

class HomePagePanel extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Good morning, John</h1>

        <ArticlePanel />
      </div>
    )
  };
};

export default HomePagePanel;
