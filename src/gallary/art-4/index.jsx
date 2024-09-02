import { useEffect, useRef } from 'react';

import Tile from '../../components/Tile';

import styles from './styles.module.css';

function Art() {

    const foodListRef = useRef();

    useEffect(() => {
        let htmlContent = '';
        for (let i = 0; i < 5; i++) {
            htmlContent += `<div class="${styles.food}" style="--found-count: 5; --food-index:${i};"></div>`;
        }
        foodListRef.current.innerHTML = htmlContent;
    }, []);

    return (
        <Tile classes={styles.tile}>
            <div className={styles.pacman}>
                <div className={styles.pacman_eye}></div>
                <div className={styles.pacman_body}></div>
            </div>
            <span ref={foodListRef} />
        </Tile>
    );
}

export default Art;