import React, { Component } from 'react'
import styles from '../Body.module.css'

class Events extends Component {
    render() {
        return (
            <div>
                <div style={{color: "#000030", margin:"0cm 4vw"}}>
                    <hr style={{backgroundColor:"#000030",height: "1px"}}></hr>
                    <h3 className="text-center">EVENTS</h3>
                    <hr style={{backgroundColor:"#000030", height: "2.5px"}}></hr>
                </div>
                <div style={{height:"3mm"}}></div>
                {/*<h4 className={styles.head}>EVENTS</h4>*/}
                <div className="row mx-2 mx-md-5 my-3 text-white">
                    <div className="col-12 col-md-4 text-center p-2 bg-primary" style={{border: '#eee 3px solid', borderRadius: '2mm', backgroundColor: 'rgb(9, 26, 172)'}}>
                        <div className={styles.promoItem}>
                                <div className={styles.subHeadContainer}>
                                <h3 className={styles.subHead}>Coders</h3>
                                </div>
                                <p>ACES Coders is a twelve hours coding competition which
                                    presents
                                    multiple problems to be solved using programming and mathematical knowledge. A number of
                                    institutions around the country take part in this event every year. It is a
                                    limited-time,
                                    rapid-coding competition which would improve the efficiency and accuracy of the
                                    participants.</p>
                                <br />

                                <p><a href="https://aces.ce.pdn.ac.lk/aces-coders/" target="_blank" rel="noreferrer" className="text-white" style={{textDecoration: 'none'}}>more <i
                                            className="fas fa-chevron-circle-right fa-sm"></i></a></p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 bg-info text-center p-2" style={{border: '#eee 3px solid', borderRadius: '2mm'}}>
                    <div className={styles.promoItem}>
                            <div className={styles.subHeadContainer}>
                            <h3 className={styles.subHead}>Hackathon</h3>
                            </div>
                            <p>Aces Hackathon is one of the signature events that is
                                organised
                                annually by the Association of Computer Engineering Students. This event provides a
                                platform
                                for the competitors to come up with innovative ideas for a new product or to give a
                                solution
                                to a problem. This is one of the best opportunities the participants get to publicise
                                their
                                new ideas , to get an insight into the business world as well as to get an industrial
                                exposure.</p>
                            <br />

                            <p><a href="https://aces.ce.pdn.ac.lk/aces-hackathon/" target="_blank" rel="noreferrer" className="text-white" style={{textDecoration: 'none'}}>more <i
                                        className="fas fa-chevron-circle-right fa-sm"></i></a></p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 text-center p-2 bg-primary" style={{border: '#eee 3px solid', borderRadius: '2mm', backgroundColor: 'rgb(9, 26, 172)'}}>
                    <div className={styles.promoItem}>
                            <div className={styles.subHeadContainer}>
                            <h3 className={styles.subHead}>Spark</h3>
                            </div>
                            <p>Inter School Quiz Competition is organized to provide
                                experience
                                and knowledge to the school community on computer engineering aspects. From 2015 it is
                                named &apos;Spark&apos;, while taking this event to a new level.
                            </p>
                            <br />
                            <p>
                                <a href="https://aces.ce.pdn.ac.lk/aces-spark/" target="_blank" rel="noreferrer" className="text-white" style={{textDecoration: 'none'}}>
                                    more <i className="fas fa-chevron-circle-right fa-sm"></i>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Events
