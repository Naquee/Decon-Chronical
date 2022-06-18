import React from 'react';
import styles from '../Homepage/Home.module.css';
import { useEffect, useState } from 'react';

const TopNews = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            let res = await fetch("http://localhost:8080/topNews")
            let data = await res.json();
            setNews(data);
        };
        fetchNews();
    }, []);

    return (
        <div>
            <div className={styles.center}>
                {news.map((N) => (
                    <div className={styles.centerDiv}>
                        <div>
                            <img src={N.image} alt='' />
                        </div>
                        <div>
                            <p>{N.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopNews;