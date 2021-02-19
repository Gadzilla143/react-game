import React, { useState } from 'react'
import './Game.scss'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import hand from '../../assets/hand.svg';
import rock from '../../assets/rock.svg';
import scissors from '../../assets/scissors.svg';
import { judge } from '../../servieces/judge';

export const Game = (props) => {
    const computerChoice = [
        {
            name: 'hand',
            src: hand,
            color: 'rgb(78, 78, 231)'
        },
        {
            name: 'scissors',
            src: scissors,
            color: 'rgb(226, 198, 72)'
        },
        {
            name: 'rock',
            src: rock,
            color: 'rgb(226, 72, 97)'
        }
    ]
    const [path, setPath] = useState('')
    const [color, setColor] = useState('rgb(226, 72, 97)')
    const [comp, setComp] = useState(0)

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
                            setComp(Math.floor(Math.random() * (2 - 0)) + 0)

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
                    <div className="result" >
                        <div className="judge">
                            <b>{judge(props.choose, computerChoice[comp].name)}</b>
                        </div>
                        <div className="battle">
                            <div className="choice">
                                You picked {props.choose}
                                <div
                                    className="type"
                                    style={{
                                        borderColor: color
                                    }}
                                >
                                    <img src={path} alt={props.choose}/>
                                </div>
                            </div>
                            <div className="choice">
                                Computer picked {computerChoice[comp].name}
                                <div
                                    className="type"
                                    style={{
                                        borderColor: computerChoice[comp].color
                                    }}
                                >
                                    <img src={computerChoice[comp].src} alt={computerChoice[comp].name}/>
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
