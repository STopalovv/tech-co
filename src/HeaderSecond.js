import React from 'react'
import './HeaderSecond.css'
import HeadsetMicOutlinedIcon from '@material-ui/icons/HeadsetMicOutlined';

function HeaderSecond() {
    return (
        <nav className="headerSecond">
            <div className="headerSecond__option">
                <span>Categories</span>
            </div>
            <div className="headerSecond__option">
                <span>Offer of the Day</span>
            </div>
            <div className="headerSecond__option">
                <HeadsetMicOutlinedIcon />
                <span>Tech-Co info</span>
            </div>
        </nav>
    )
}

export default HeaderSecond
