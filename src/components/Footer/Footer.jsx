import './Footer.scss'
import React from 'react'
import SettingsIcon from '@material-ui/icons/Settings';


export const Footer = (props) => {
    return (
        <div className="footer">
            <div>
                <input
                    type="color"
                    id="head"
                    name="head"
                    value={props.color}
                    onClick={() => props.clickPlay()}
                    onChange={e => props.setColor(e.target.value)} 
                />
            </div>
            Rolling Scopes, Gadzilla143. 2021
            <SettingsIcon
                className="setting"
                onClick={() => { props.setActive(true); props.clickPlay() }}
            />
        </div>
    )
}
