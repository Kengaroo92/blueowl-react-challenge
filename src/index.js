import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './MainContainer';
import Toolbar from './Toolbar';
import SideBar from './SideBar';
import MainCards from './MainCards';
import Footer from './Footer';

const App = () => {
    return (
        <div className="ui container">
           <MainContainer>
                <Toolbar />
                <SideBar />
                <MainCards />
                <Footer />
           </MainContainer>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));