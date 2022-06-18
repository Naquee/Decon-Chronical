import React from 'react';
import styles from '../Homepage/Home.module.css';
import { useEffect, useState } from 'react';

const Column = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            let res = await fetch("http://localhost:8080/column")
            let data = await res.json();
            setNews(data);
        };
        fetchNews();
    }, []);


    return (
        <div>
            <div className={styles.column}>
                <div className={styles.rightDiv}>
                    <h5 className={styles.heading}>COLUMNS</h5>
                </div>
                {news.map((N) => (
                    <div className={styles.columnDiv}>
                        <div className={styles.columnInnerDiv1}>
                            <div>
                                <h6>{N.title}</h6>
                            </div>
                            <div>
                                <img src={N.image} alt=''/>
                            </div>
                        </div>
                        <div className={styles.columnInnerDiv2}>
                            <p className={styles.auther}>{N.auther}</p>
                            <p>{N.discription}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Column;