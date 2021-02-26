import './Footer.scss'
import React from 'react'
import SettingsIcon from '@material-ui/icons/Settings';
import gitHub from '../../assets/gitHub1.png'


export const Footer = (props) => {
    return (
        <div className="footer">
            <a className='footer__link' href='https://github.com/Gadzilla143'><img src={gitHub} alt='git hub'/></a>
            Rolling Scopes, Gadzilla143. 2021
            <SettingsIcon
                className="setting"
                onClick={() => { props.setActive(true); props.clickPlay() }}
            />
        </div>
    )
}
