import React, { Component } from 'react'
import styles from '../Body.module.css'

function Card (props) {
    
        return (
            <div className={styles.CardItem}>
            <b><a href={props.link} style={{textDecoration: 'none',fontSize:'20px'}}>
            <div className='m-2 bg-secondary'>
                <div className={styles.Card}>
                    
                    <div className={styles.Circle}>
                        
                        <i className="fas fa-book-open"></i>
                        {/* <i class="far fa-bookmark"></i> */}
                        
                    </div>
                    
                <div className={styles.CardImage}><img src={`${process.env.NEXT_PUBLIC_MAINPATH}${props.image}`}></img></div>
                <div className={styles.CardDesc}>{props.desc}</div>
                </div>
            </div>
            </a>
            </b>
            </div>
        )
    
}

export default Card
