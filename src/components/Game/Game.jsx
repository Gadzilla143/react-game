import React, { useState } from 'react'
import './Game.scss'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import hand from '../../assets/hand.svg';
import rock from '../../assets/rock.svg';
import scissors from '../../assets/scissors.svg';

export const Game = (props) => {
    const [path, setPath] = useState('')

    const [color, setColor] = useState('rgb(226, 72, 97)')
    const changePath = (src) => {
        switch (src) {
            case "hand":
                setColor('rgb(78, 78, 231)')
                setPath(hand);
                break;
            case "scissors":
                setColor('rgb(226, 198, 72)')
                setPath(scissors);
                break;
            case "rock":
                setColor('rgb(226, 72, 97)')
                setPath(rock);
                break;
            default:
                setPath(hand);
        }

    }

    return (
        <div className="game">
            {props.time
                ?
                (
                    <CountdownCircleTimer
                        onComplete={() => {
                            props.timer()
                            changePath(props.choose)
                            return [false, 1000] // repeat animation in 1.5 seconds
                        }}
                        isPlaying
                        duration={3}
                        colors={[
                            ['#004799', 0.33],
                            ['#F7B801', 0.33],
                            ['#A31000', 0.33],
                        ]}
                    >{({ remainingTime }) => remainingTime}</CountdownCircleTimer>
                )
                :
                (
                    <div className="result" onClick={() => { props.changeGame("start"); props.timer() }}>
                        <div className="battle">
                            <div className="choice">
                                You picked {props.choose}
                                <div
                                    className="type"
                                    style={{
                                        borderColor: color
                                    }}
                                >
                                    <img src={path} />
                                </div>
                            </div>
                            <div className="choice">
                                Computer picked smth
                                <div
                                    className="type"
                                    style={{
                                        borderColor: color
                                    }}
                                >
                                    <img src={path} />
                                </div>
                            </div>
                        </div>


                        <div onClick={() => { props.changeGame("start"); props.timer() }} className="play-button"><b>PLAY AGAIN</b></div>

                    </div>
                )
            }

        </div>
    )
}
