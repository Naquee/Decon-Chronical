import React from 'react';
import styles from '../Homepage/Home.module.css';
import { useEffect, useState } from 'react';

const Trending = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            let res = await fetch("http://localhost:8080/trending")
            let data = await res.json();
            setNews(data);
        };
        fetchNews();
    }, []);

    return (
        <div>
            <div className={styles.rightDiv}>
                <h5 className={styles.heading}>TOP STORIES</h5>
            </div>
            {news.map((N) => (
                <div className={styles.leftDiv}>
                    <div>
                        <img src={N.image} alt='' />
                    </div>
                    <div className={styles.leftInnerDiv2}>
                        <h4>{N.title}</h4>
                        <p>{N.discription}</p>
                    </div>
                </div>
            ))}
            <p className={styles.adv}>Advertisement</p>
        </div>
    )
}

export default Trending;