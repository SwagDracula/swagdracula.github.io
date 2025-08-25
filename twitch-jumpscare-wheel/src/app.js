import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import SpinWheel from './components/wheel/SpinWheel';
import TokenDisplay from './components/user/TokenDisplay';
import UserProfile from './components/user/UserProfile';
import JumpscareOverlay from './components/jumpscares/JumpscareOverlay';
import './styles/main.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <TokenDisplay />
                <UserProfile />
                <SpinWheel />
                <JumpscareOverlay />
                <Footer />
            </div>
        </Router>
    );
}

export default App;