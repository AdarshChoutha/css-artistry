import Tile from '../../components/Tile';
import classNames from '../../utils/classNames';

import styles from './styles.module.css';

function Art() {

    return (
        <Tile classes={styles.tile}>
            <div className={styles.face}>
                <div className={styles.ear_container}>
                    <div className={classNames(styles.ear, styles.ear_left)}></div>
                    <div className={classNames(styles.ear, styles.ear_right)}></div>
                </div>
                <div className={styles.eye_container}>
                    <div className={classNames(styles.eye, styles.eye_left)}>
                        <div className={styles.eye_dot}></div>
                    </div>
                    <div className={classNames(styles.eye, styles.eye_right)}>
                        <div className={styles.eye_dot}></div>
                    </div>
                </div>
                <div className={styles.mouth}>
                    <div className={styles.mouth_dot}></div>
                    <div className={styles.mouth_dot}></div>
                </div>
            </div>
        </Tile>
    );
}

export default Art;