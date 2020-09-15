import React, { Component } from "react";
import Typography from "./Typography";
import Button from "./Button";

export default class PopUp extends Component {

  render() {
    const project = this.props.info[this.props.showId-1];
    console.log(this.props, 'link')
    return (
      <div className="popup">
          <div className="popup__left">
            <span className="popup__close" onClick={this.props.handleClose}>
                &times;
            </span>
            <Typography variant="h2" className="u-margin-bottom--small">{project.title}</Typography>
            <Typography variant="p" >{project.description}</Typography>
            <Button className="btn--animated btn--green" variant="cool" color="white" animated popUpAnimation href={project.link}>View</Button>
          </div>
        <div className={`popup__right popup__picture popup__picture--${this.props.showId}`}></div>
      </div>
    );
  }
}
