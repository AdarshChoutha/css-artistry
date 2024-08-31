import Gallary from './gallary';

import styles from './styles.module.css';

function App() {
    return (
        <div className={styles.gallary}>
            {Gallary.map((Art, artIdx) =>
                <Art key={artIdx} />
            )}
        </div>
    );
}

export default App;