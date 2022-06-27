import React, { Component } from 'react'
import styles from '../Body.module.css'

class About extends Component {
    render() {
        return (
            <div>
                <div style={{color: "#000030", margin:"0cm 4vw"}}>
                    <hr style={{backgroundColor:"#000030", height: "1px"}}></hr>
                    <h3 className="text-center">ABOUT</h3>
                    <hr style={{backgroundColor:"#000030", height: "2.5px"}}></hr>
                </div>
                <div style={{height:"6.5mm"}}></div>
               {/*<h4 className={styles.head}>ABOUT</h4>*/}
               <div className={styles.AboutBg}>
                <p className={styles.paraText}>
                    The Department of Computer Engineering was first established in the year 1985 
                    in the Faculty of Engineering in University of Peradeniya as the oldest 
                    Computer Engineering Department in the University system of the country. 
                    The Computer Engineering stream was introduced as a separate discipline to the 
                    Faculty of Engineering in 2000. Since then, the Department of Computer Engineering 
                    has been targeting at producing fully qualified Computer Engineering undergraduates 
                    well equipped with knowledge, skills and attitudes required for the global industry, 
                    highly technical researches as well as for the field of academia. The department 
                    focuses on leveling up the competency levels of their undergraduates by providing 
                    them with deep insights about computational systems and related disciplines so that 
                    they would be able to build their own personal brand in the highly competitive field of 
                    Computer Engineering.
                </p>
                <p className={styles.paraText}>
                    On par with Department’s vision which is &quot;To be a competitive entity in teaching and 
                    research in Computer Engineering in the country and the region and to produce graduates 
                    with international recognition for their knowledge and skills, capable of taking leadership 
                    positions in the science and technology of design, construction, implementation, and 
                    maintenance of software and hardware components of modern computing systems and computer-controlled 
                    equipment that constitute the discipline of Computer Engineering&quot;, The Association of 
                    Computer Engineering Students (ACES) was formed in August, 2001 as the students’ body of 
                    Computer Engineering undergraduates of the Faculty of Engineering with the aim of 
                    maximising students’ potential by organizing different activities and events that would 
                    bring out the best within themselves and make them prepared for the next technological revolution.
                </p>
                </div>
            </div>
        )
    }
}

export default About
