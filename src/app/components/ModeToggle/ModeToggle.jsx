import React from 'react';
import './ModeToggle.scss';

export const ModeToggle = ({ isNight, setIsNight }) => {
    return (
        <>
            <div className="wrapper">
                <input type="checkbox" id="hide-checkbox" onChange={() => setIsNight(!isNight)} checked={!isNight} />
                <label style={{ border: isNight ? '1px solid #23b213' : '1px solid #08C3D5' }} htmlFor="hide-checkbox" className="toggle">
                    <span className="toggle-button">
                        <span className="crater crater-1"></span>
                        <span className="crater crater-2"></span>
                        <span className="crater crater-3"></span>
                        <span className="crater crater-4"></span>
                        <span className="crater crater-5"></span>
                        <span className="crater crater-6"></span>
                    </span>
                    <span className="star star-1"></span>
                    <span className="star star-2"></span>
                    <span className="star star-3"></span>
                    <span className="star star-5"></span>
                    <div id="cloud"></div>

                </label>
            </div>
        </>
    );
};
