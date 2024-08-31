import classNames from '../../utils/classNames';

import styles from './styles.module.css';

function Tile({
    children,
    classes,
}) {
    return (
        <div className={classNames(styles.tile, classes)}>
            {children}
        </div>
    );
}

export default Tile;