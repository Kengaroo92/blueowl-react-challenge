import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './MainContainer';
import Toolbar from './Toolbar';
import SideBar from './SideBar';
import MainCards from './MainCards';
import Footer from './Footer';
import "./styles.css";

export default function App() {
    return (
      <div>
        <div className="rowA col-md-4">
          <div>A</div>
          <div>B</div>
        </div>
        <div className="rowA clom-md-4">
          <div>C</div>
          <div>D</div>
        </div>
        <div className="rowA">
          <div>E</div>
          <div>F</div>
        </div>
      </div>
    );
  }

ReactDOM.render(<App />, document.querySelector('#root'));