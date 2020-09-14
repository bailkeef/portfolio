import React, { Component } from "react";

export default class PopUp extends Component {

  render() {
    console.log(this.props, 'props of the popup')
    return (
      <div className="popup--container">
        <div className="popup--img">
          <span className="close" onClick={this.props.handleClose}>
            &times;
          </span>
          <form>
            <h3>Register!</h3>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}
