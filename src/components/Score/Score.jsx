import React from 'react'
import './Score.scss'
export const Score = (props) => {
    return (
        <div className="container Container" style={{
            width: '600px',
        }}>
            <div><b>ROCK<br /> PAPPER<br /> SCISSORS</b></div>

            <div className="Score">
                <div style={{
                    color: 'blue',
                }}>SCORE</div>
                <div style={{
                    color: 'gray',
                    fontSize: '32pt'
                }}><b>{props.score}</b></div>
            </div>
        </div>
    )
}
