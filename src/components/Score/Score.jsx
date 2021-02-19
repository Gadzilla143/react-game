import React from 'react'
import './Score.scss'
export const Score = () => {
    return (
        <div className="container Container" style={{
            width: '600px',
        }}>
            <div><b>ROCK<br/> PAPPER<br/> SCISSORS</b></div>
            
            <diV className="Score">
                <div style={{
                    color: 'blue',
                }}>SCORE</div>
                <div style={{
                    color: 'gray',
                    fontSize: '32pt'
                }}><b>0</b></div>
            </diV>
        </div>
    )
}
