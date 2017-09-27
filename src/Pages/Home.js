import React, { Component } from 'react';
// import ReactDOM from 'react-dom';


class Home extends Component {
	aboutClick(){
		alert('Clicked')
	}
  render() {
    return (
      <div>
        <h3>Home page</h3>
        <div onClick={this.aboutClick.bind(this)}><h4>About US</h4></div>
      </div>
    );
  }
}

export default Home;
