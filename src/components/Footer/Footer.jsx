import './Footer.scss'
import React from 'react'
import SettingsIcon from '@material-ui/icons/Settings';

import EqualizerIcon from '@material-ui/icons/Equalizer';


export const Footer = (props) => {
    return (
        <div className="footer">
            <EqualizerIcon
                className="setting"
                onClick={() => { props.statsActive(true); props.clickPlay() }}
            />
            Rolling Scopes, Gadzilla143. 2021
            <SettingsIcon
                className="setting"
                onClick={() => { props.setActive(true); props.clickPlay() }}
            />
        </div>
    )
}
