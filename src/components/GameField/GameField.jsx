import './GameField.scss'
import React, { useEffect } from 'react'
import hand from '../../assets/hand.svg'
import rock from '../../assets/rock.svg'
import scissors from '../../assets/scissors.svg'

export const GameField = (props) => {
    useEffect(() => {
        const onKeypress = e => {
          if (e.key === '1') {
            props.clickPlay();
            props.changeGame("hand");
          } else if (e.key === '2') {
            props.changeGame("rock");
            props.clickPlay();
          } else if (e.key === '3') {
            props.changeGame("scissors");
            props.clickPlay();
          } else if (e.key === 'Enter') {
            props.setScore(0); localStorage.setItem('counter', 0)
          }
          
        };
      
        document.addEventListener('keypress', onKeypress);
      
        return () => {
          document.removeEventListener('keypress', onKeypress);
        };
    }, [props]);
    
    return (
        <>
            <div className="game-field">
                <div
                    className="type"
                    onClick={() => {
                        props.clickPlay();
                        props.changeGame("hand");
                    }}
                    style={{
                        borderColor: 'rgb(78, 78, 231)'
                    }}>
                    <img src={hand} alt="hand" />
                </div>

                <div
                    className="type"
                    onClick={() => {
                        props.changeGame("rock");
                        props.clickPlay();
                    }}
                    style={{
                        borderColor: 'rgb(226, 72, 97)'
                    }}>
                    <img src={rock} alt="rock" />
                </div>

                <div
                    className="type"
                    onClick={() => {
                        props.changeGame("scissors");
                        props.clickPlay();
                    }}
                    style={{
                        borderColor: 'rgb(226, 198, 72)'
                    }}>
                    <img src={scissors} alt="scissors" />
                </div>
            </div>
            <div
                className="play-button"
                onClick={() => {
                    props.setScore(0); localStorage.setItem('counter', 0)
                }}
            >
                <b>NEW GAME</b>
            </div>
        </>
    )
}
