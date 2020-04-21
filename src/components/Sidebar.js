import React, { Component } from "react";
import "../styles/Sidebar.css";

// credit https://www.kirupa.com/react/smooth_sliding_menu_react_motion.htm

class Sidebar extends Component {
    render() {
        let visibility = "hide";

        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return (
            <div
                 id="flyoutMenu"
                 onMouseUp={this.props.handleMouseUp}
                 className={visibility}
            >
                <div className="pages-container">
                    <h3><a href="/eatsbydrei">Home</a></h3>
                    <h3><a href="/eatsbydrei/about">About</a></h3>
                    <h3><a href="/eatsbydrei/my-food">My food</a></h3>
                    <h3><a href="/eatsbydrei/contact">Contact Me</a></h3>
                </div>
            </div>
        );
    }
}

export default Sidebar;