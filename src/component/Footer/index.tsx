'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.allleft}>
                    <img className={styles.logo} src="/image/logo.png" alt="logo" />
                    <p className={styles.politictxt}>Политика конфенедциальности</p>
                </div>
                <div className={styles.about}>
                    <div className={styles.aboutleft}>
                        <a className={styles.iteamup} href="#">Промокоды</a>
                        <a className={styles.iteamcenter} href="#">Скидки</a>
                        <a className={styles.iteamdown} href="#">Помощь</a>
                    </div>
                    <div className={styles.aboutright}>
                        <a className={styles.iteamup} href="#">О нас</a>
                        <a className={styles.iteamcenter} href="#">Контакты</a>
                    </div>
                </div>
                <div className={styles.line}>
                        <svg width="6" height="400" viewBox="0 0 6 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.50002 395L0.113266 400L5.88677 400L3.50002 395L2.50002 395ZM3.49998 5L5.88673 -1.26184e-07L0.113225 1.26184e-07L2.49998 5L3.49998 5ZM3.50002 395.5L3.49998 4.5L2.49998 4.5L2.50002 395.5L3.50002 395.5Z" fill="#524336"/>
                        </svg>
                </div>
                <div className={styles.linephone}></div>
                <div className={styles.allright}>
                    <div className={styles.rightup}>
                        <div className={styles.phone}>
                            <img className={styles.phoneicon} src="/image/Call.png" alt="phone" />
                            <a className={styles.phonetxt} href="#">8 800 600-61-91</a>
                        </div>
                        <div className={styles.icon}>
                            <img className={styles.Telegram} src="/image/Telegram.png" alt="Telegram" />
                            <img className={styles.Viber} src="/image/Viber.png" alt="Viber" />
                            <img  className={styles.whatsapp} src="/image/whatsapp.png" alt="whatsapp" />
                        </div>
                    </div>
                    <div className={styles.time}>
                        <p>Время работы: с 9:00 до 20:00 по мск</p>
                    </div>
                    <div className={styles.rightdown}>
                        <img className={styles.mailicon} src="/image/mail.png" alt="mail" />
                        <a className={styles.mailtxt} href="#">Mr.Driskell@mail.ru</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}