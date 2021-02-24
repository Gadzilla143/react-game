import './Settings.scss'
import React, { useState } from 'react'
//import useSound from 'use-sound';

//import PlayButton from 'react-play-button'
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import AddIcon from '@material-ui/icons/Add';
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';
import RemoveIcon from '@material-ui/icons/Remove';

export const Settings = ({active, setActive, mute, setMute, volume, setVolume, stop}) => {
    const [sound, setSound] = useState(true)
    

    return (
        <div className={active ? "settings active " : "settings"} onClick={() => setActive(false)}>
            <div className={active ? "settings__content active" : "settings__content"} onClick={e => e.stopPropagation()}>
                <div className="btn">
                    Sound FX
                    {sound ? <VolumeDownIcon onClick={() => {setMute(!mute); setSound(!sound)}}/> : <VolumeOffIcon onClick={() => {setMute(!mute); setSound(!sound)}} />}
                    <AddIcon onClick={() => {if (volume < 1) {setVolume(Math.round((volume + 0.1)*10)/10)}}}/>
                    {volume}
                    <RemoveIcon onClick={() => {if (volume > 0.1)setVolume(Math.round((volume - 0.1)*10)/10)}}/>
                </div>
                <div>
                    Play Music 
                    <SlowMotionVideoIcon onClick={() => stop()}/>
                </div>
            </div>
        </div>
    )
}

