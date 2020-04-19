import React, { Component } from "react";
import '../styles/SidebarButton.css';

class SidebarButton extends Component {
    render() {
        return (
            <button className="btn" onMouseUp={this.props.handleMouseUp}>
                <div className="nav-icon">
                    <div></div>
                </div>
            </button>
        );
    }
}

export default SidebarButton;