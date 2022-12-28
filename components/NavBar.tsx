import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {

    const handleNavToggle = () => {
        console.log('hi')
    }
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarHeading}>
                <div style={{ display: 'flex' }}>
                    <a href="#" style={{ display: 'flex', gap: '5pt' }}>
                        <Image
                            className={styles.logo}
                            src="/pen.svg"
                            alt="Yourpen Logo"
                            width={20}
                            height={37}
                            priority
                        />
                        <h1 style={{ fontFamily: 'cursive', fontWeight: '1400' }}>Yourpen.io</h1>
                    </a>
                </div>
            </div>
            <div className={styles.navbarPages}>
                <div>How to use</div>
                <div>Examples</div>
                <div>Pricing</div>
            </div>
            <div className={styles.navbarAuth}>
                <div className={styles.login}>Login</div>
                <div><button className={styles.signupButton}>Signup</button></div>
            </div>

        </nav >
    );
}

export default NavBar;