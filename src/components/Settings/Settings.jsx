import './Settings.scss'
import React, { useState } from 'react'
//import useSound from 'use-sound';

//import PlayButton from 'react-play-button'
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import AddIcon from '@material-ui/icons/Add';
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';
import RemoveIcon from '@material-ui/icons/Remove';

export const Settings = ({
    active, 
    setActive, 
    mute, 
    setMute, 
    volume, 
    setVolume, 
    stop, 
    setLoopVolume, 
    loopVolume, 
    setDuration, 
    duration, 
    color, 
    setColor,
    size,
    setSize
    }) => {

    const [sound, setSound] = useState(true)
    

    return (
        <div className={active ? "settings active " : "settings"} onClick={() => setActive(false)}>
            <div className={active ? "settings__content active" : "settings__content"} onClick={e => e.stopPropagation()}>
                <div className="settings__fx">
                    Sound FX
                    {sound ? <VolumeDownIcon onClick={() => {setMute(!mute); setSound(!sound)}}/> : <VolumeOffIcon onClick={() => {setMute(!mute); setSound(!sound)}} />}
                    <div className="settings__cntrl">
                        <AddIcon onClick={() => {if (volume < 1) {setVolume(Math.round((volume + 0.1)*10)/10)}}}/>
                        {volume}
                        <RemoveIcon onClick={() => {if (volume > 0.1)setVolume(Math.round((volume - 0.1)*10)/10)}}/>
                    </div>
                </div>
                <div className="settings__fx">
                    Play Music 
                    <SlowMotionVideoIcon onClick={() => stop()}/>
                    <div className="settings__cntrl">
                        <AddIcon onClick={() => {if (loopVolume < 1) {setLoopVolume(Math.round((loopVolume + 0.1)*10)/10)}}}/>
                        {loopVolume}
                        <RemoveIcon onClick={() => {if (loopVolume > 0.1)setLoopVolume(Math.round((loopVolume - 0.1)*10)/10)}}/>
                    </div>
                </div>
                <div className="settings__fx">
                    Timer Duration
                    <div className="settings__cntrl">
                        <AddIcon onClick={() => setDuration(duration + 1)}/>
                        {duration}
                        <RemoveIcon onClick={() => {if (duration > 1) {setDuration(duration - 1)}}}/>
                    </div>
                </div>
                <div className="settings__fx">
                    Set Background color
                    <input
                        className="settings__cntrl"
                        type="color"
                        id="head"
                        name="head"
                        value={color}
                        onChange={e => setColor(e.target.value)} 
                    />
                </div>
                <div className="settings__fx">
                    Set Score-Board size
                    <input 
                        className="settings__cntrl"
                        type="range" 
                        min="450" 
                        max="800" 
                        step="1"
                        value={size}
                        onChange={e => setSize(e.target.value)}
                    />
                </div>
                

            </div>
        </div>
    )
}

