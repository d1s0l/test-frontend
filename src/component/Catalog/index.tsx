'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Catalog.module.css';

export default function Catalog() {
    return (  
        <main className={styles.Catalog}>   
            <div className={styles.name}>
                <div className={styles.stroke}>
                    <p>Каталог</p>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.iteam1}>

                    </div>
                    <div className={styles.iteam2}>

                    </div>
                    <div className={styles.iteam3}>

                    </div>
                    <div className={styles.iteam4}>

                    </div>
                    <div className={styles.iteam5}>

                    </div>
                    <div className={styles.iteam6}>

                    </div>
                    <div className={styles.iteam7}>

                    </div>
                    <div className={styles.iteam8}>

                    </div>
                    <div className={styles.iteam9}>

                    </div>
                    <div className={styles.iteam10}>

                    </div>
                    <div className={styles.iteam11}>

                    </div>
                </div>
            </div>
        </main>
    );
 }