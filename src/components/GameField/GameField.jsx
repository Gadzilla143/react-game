import './GameField.scss'
import React from 'react'
import hand from '../../assets/hand.svg'
import rock from '../../assets/rock.svg'
import scissors from '../../assets/scissors.svg'

export const GameField = (props) => {


    return (
        <div className="game-field">
            <div
                className="type"
                onClick={() => {
                    props.changeGame("hand")
                }}
                style={{
                    borderColor: 'rgb(78, 78, 231)'
                }}>
                <img src={hand} alt="hand" />
            </div>

            <div
                className="type"
                onClick={() => props.changeGame("rock")}
                style={{
                    borderColor: 'rgb(226, 72, 97)'
                }}>
                <img src={rock} alt="rock" />
            </div>

            <div
                className="type"
                onClick={() => props.changeGame("scissors")}
                style={{
                    borderColor: 'rgb(226, 198, 72)'
                }}>
                <img src={scissors} alt="scissors" />
            </div>
        </div>
    )
}
