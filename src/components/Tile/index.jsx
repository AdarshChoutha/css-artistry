import classNames from '../../utils/classNames';

import styles from './styles.module.css';

function Tile({
    children,
    classes,
    containerRef,
    ...props
}) {
    return (
        <div
            ref={containerRef}
            className={classNames(styles.tile, classes)}
            {...props}
        >
            {children}
        </div>
    );
}

export default Tile;