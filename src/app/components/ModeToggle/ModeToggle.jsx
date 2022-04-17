import React from 'react';
import './ModeToggle.scss';

export const ModeToggle = ({ isNight, setIsNight }) => {
    return (
        <>
            <div class="wrapper">
                <input type="checkbox" id="hide-checkbox" onChange={() => setIsNight(!isNight)} checked={!isNight} />
                <label for="hide-checkbox" class="toggle">
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
