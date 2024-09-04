import { useEffect, useRef } from 'react';

import Tile from '../../components/Tile';

import classNames from '../../utils/classNames';

import styles from './styles.module.css';

const width = 120;
const height = 60;
const gap = 12;

function Art() {

    const containerRef = useRef();
    const planeContainerRef = useRef();

    useEffect(() => {
        const [containerWidth, containerHeight] = [containerRef.current.offsetWidth, containerRef.current.offsetHeight];

        const [noOfTilesX, noOfTilesY] = [Math.ceil(containerWidth / (width + gap)) + 1, Math.ceil(containerHeight / (height + gap)) + 1];
        const [planeWidth, planeHeight] = [noOfTilesX * (width + gap), noOfTilesY * (height + gap)];

        planeContainerRef.current.style.gridTemplateColumns = `repeat(auto-fill, ${width}px)`;

        planeContainerRef.current.style.gap = gap + 'px';
        planeContainerRef.current.style.padding = gap + 'px';

        planeContainerRef.current.style.width = planeWidth + 'px';
        planeContainerRef.current.style.height = planeHeight + 'px';

        planeContainerRef.current.style.left = '-' + ((width + gap) / 2) + 'px';
        planeContainerRef.current.style.top = '-' + ((height + gap) / 2) + 'px';

        const noOfTiles = noOfTilesX * noOfTilesY;

        const tileHTML = `<span class="${styles.plane}" style="width: ${width}px; height: ${height}px;"></span>`;

        const tilesHtml = Array(noOfTiles).fill(tileHTML).join('');

        planeContainerRef.current.innerHTML = tilesHtml;
    }, []);

    return (
        <div className={styles.tile_wrapper}>
            <Tile containerRef={containerRef} classes={styles.tile}>
                <span className={styles.sweeper} />
                <div ref={planeContainerRef} className={styles.plane_container} />
            </Tile>
        </div>
    );
}

export default Art;