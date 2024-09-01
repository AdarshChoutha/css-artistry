import { useEffect, useRef } from 'react';

import Tile from '../../components/Tile';

import styles from './styles.module.css';

function Art() {

    const tileRef = useRef();

    useEffect(() => {
        let htmlContent = '';
        for (let i = 1; i <= 12; i++) {
            htmlContent += `<div class="${styles.square}" style="--square-count:6; --square-index:${i};"></div>`;
        }
        tileRef.current.innerHTML = htmlContent;
    }, []);

    return (
        <Tile containerRef={tileRef} classes={styles.tile} />
    );
}

export default Art;