import React from 'react';
import styles from '../Homepage/Home.module.css';
import { useEffect, useState } from 'react';

const Popular = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            let res = await fetch("http://localhost:8080/popular")
            let data = await res.json();
            setNews(data);
        };
        fetchNews();
    }, []);

    return (
        <div>
            <div className={styles.rightDiv}>
                <h5 className={styles.heading}>MOST POPULAR</h5>
            </div>
            {news.map((N) => (
                <div className={styles.rightDiv}>
                    <div>
                        <p>{N.title}</p>
                    </div>
                    <div>
                        <img src={N.image} alt='' />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Popular;