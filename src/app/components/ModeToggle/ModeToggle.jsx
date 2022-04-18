import React from 'react';
import './ModeToggle.scss';

export const ModeToggle = ({ isNight, setIsNight }) => {
    return (
        <>
            <div class="wrapper">
                <input type="checkbox" id="hide-checkbox" onChange={() => setIsNight(!isNight)} checked={!isNight} />
                <label style={{ border: isNight ? '1px solid #23b213' : '1px solid #08C3D5' }} for="hide-checkbox" className="toggle">
                    <span class="toggle-button">
                        <span class="crater crater-1"></span>
                        <span class="crater crater-2"></span>
                        <span class="crater crater-3"></span>
                        <span class="crater crater-4"></span>
                        <span class="crater crater-5"></span>
                        <span class="crater crater-6"></span>
                    </span>
                    <span class="star star-1"></span>
                    <span class="star star-2"></span>
                    <span class="star star-3"></span>
                    <span class="star star-5"></span>
                    <div id="cloud"></div>

                </label>
            </div>
        </>
    );
};
