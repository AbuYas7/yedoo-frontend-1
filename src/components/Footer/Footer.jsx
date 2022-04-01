import React from 'react';
import styles from './Footer.module.css'
import Arrow from '../../assets/Arrow.png'

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.Content}>
                <div className={styles.FooterInfo}>
                    <div className={styles.FooterLogo}><h2>YEDOO</h2></div>
                    <div>© ООО СК «АПШЕРОН» <br /> Все права защищены. 2010-2020</div>
                    <button>Пользователькое соглашение</button>
                    <button>Карта сайта</button>
                    <button>Политика конфиденциальности</button>
                </div>
                <div className={styles.FooterMenu}>
                    <button>О ресторане</button>
                    <button>Условаия доставки</button>
                    <button>Возврат товара</button>
                    <button>Акции</button>
                </div>
                <div className={styles.ScrollArrow}>
                    <div className={styles.Ellipse}><img className={styles.Arrow} src={Arrow} alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;