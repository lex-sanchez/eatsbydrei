import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Landing from './components/Landing';
import './App.css';
import SidebarButton from "./components/SidebarButton";
import Sidebar from "./components/Sidebar";

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: false
        };

        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleMouseUp(e) {
        this.toggleMenu();

        console.log('clicked');
        e.stopPropagation();
    }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
    return (
        <div className="App">
            <SidebarButton handleMouseUp={this.handleMouseUp}/>
            <Sidebar
                handleMouseUp={this.handleMouseUp}
                menuVisibility={this.state.visible}
            />
            <Router>
              <Switch>
                <Route exact path="/" render={() => <Landing handleMouseUp={this.handleMouseUp}/>} />
                <Route exact path="/about" render={() => <button onClick={() => console.log('Dumbass')}>About me</button>} />
              </Switch>
            </Router>
        </div>
    )
    }
    }

export default App;
