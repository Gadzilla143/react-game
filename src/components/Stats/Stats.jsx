import './Stats.scss'
import React from 'react'

export const Stats = (props) => {
    
    return (
        <div className={props.active ? "settings active " : "settings"} onClick={() => props.setActive(false)}>
            
            <ul className={props.active ? "settings__content stats active" : "settings__content"} onClick={e => e.stopPropagation()}>
                <div className="settings__title">STATS</div>
                {props.stats.map((stat, i) => 
                    <li key={i}>
                        <div>{stat.user}</div>
                        <div>{stat.judge}</div>
                        <div>{stat.comp}</div>
                    </li>
                )}
            </ul>
        </div>
    )
}
