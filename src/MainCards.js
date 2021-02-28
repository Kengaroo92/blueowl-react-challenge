import React from 'react';

const MainCards = (props) => {
    return (
        <div className="ui card">
            <div className="card">
                <div className="content">
                    <div className="removebutton">
                        <i className="remove icon"></i>
                    </div>
                    <div className="number"></div>
                </div>
            </div>
        </div>
    );
};

export default MainCards;