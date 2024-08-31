import { useRef } from 'react';

import Tile from '../../components/Tile';

import styles from './styles.module.css';

function Art() {

    const iconRef = useRef();

    const onToggleMenu = () => {
        iconRef.current.classList.toggle(styles.icon_cross);
    }

    return (
        <Tile>
            <i ref={iconRef} className={styles.icon} onClick={onToggleMenu}>
                <span className={styles.bar1}></span>
                <span className={styles.bar2}></span>
                <span className={styles.bar3}></span>
            </i>
        </Tile>
    );
}

export default Art;