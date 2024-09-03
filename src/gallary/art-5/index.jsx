import { useRef } from 'react';

import Tile from '../../components/Tile';

import classNames from '../../utils/classNames';

import styles from './styles.module.css';

function Art() {

    const textBorderRef = useRef();
    const textBorderLeftRef = useRef();
    const textBorderRightRef = useRef();
    const p1Ref = useRef();
    const p2Ref = useRef();
    const p3Ref = useRef();

    const animationTimoutRef = useRef();

    const animation = {
        start() {
            const self = this;
            self.stop();
            clearTimeout(animationTimoutRef.current);
            textBorderRef.current.classList.add(styles.text_border);
            textBorderLeftRef.current.classList.add(styles.text_border_left);
            textBorderRightRef.current.classList.add(styles.text_border_right);
            p1Ref.current.classList.add(styles.p1);
            p2Ref.current.innerHTML = 'moments';
            p2Ref.current.classList.add(styles.p2);
            p2Ref.current.classList.remove(styles.click_me);
            p3Ref.current.classList.add(styles.p3);
            animationTimoutRef.current = setTimeout(function () {
                self.stop();
            }, 10000);
        },
        stop() {
            textBorderRef.current.classList.remove(styles.text_border);
            textBorderLeftRef.current.classList.remove(styles.text_border_left);
            textBorderRightRef.current.classList.remove(styles.text_border_right);
            p1Ref.current.classList.remove(styles.p1);
            p2Ref.current.innerHTML = 'click me!';
            p2Ref.current.classList.remove(styles.p2);
            p2Ref.current.classList.add(styles.click_me);
            p3Ref.current.classList.remove(styles.p3);
        }
    };

    const onAnimate = () => {
        if (p2Ref.current.classList.contains(styles.click_me)) {
            animation.start();
        }
    }

    return (
        <Tile classes={styles.tile}>
            <div classes={styles.container} style={{ '--delay-offset': 1.5 }}>
                <div ref={textBorderRef} className={styles.text_border_noAnime}>
                    <span ref={textBorderLeftRef} className={styles.text_border_left_noAnime} />
                    <span ref={textBorderRightRef} className={styles.text_border_right_noAnime} />
                </div>
                <p ref={p1Ref} className={styles.p1_noAnime}>collect</p>
                <p
                    ref={p2Ref}
                    className={classNames(styles.p2_instruct, styles.click_me)}
                    onClick={onAnimate}
                >
                    click me!
                </p>
                <p ref={p3Ref} className={styles.p3_noAnime}>not things</p>
            </div>
        </Tile>
    );
}

export default Art;