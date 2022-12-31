import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/NavBar.module.css';
import { useSession, signIn, signOut } from 'next-auth/react';

const NavBar = () => {

    const { data: session } = useSession();

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
                            height={60}
                            priority
                        />
                        <h1 style={{ fontFamily: 'cursive', fontWeight: '1400' }}>ContentCoverter <span style={{ fontFamily: 'Times', color: 'red', fontWeight: 'bold' }}>BETA</span></h1>
                    </a>
                </div>
            </div>
            <div className={styles.navbarPages}>
                <div>How to use</div>
                <div>Examples</div>
                <div>Pricing</div>
            </div>
            <div className={styles.navbarAuth}>
                {session ? <><div className={styles.login}>You are signed in</div>
                    <div><button className={styles.signupButton} onClick={() => signOut()}>Sign out</button></div></> : <>
                    <div className={styles.login}>Log in</div>
                    <div><button className={styles.signupButton} onClick={() => signIn('google')}>Sign up</button></div></>}
            </div>

        </nav >
    );
}

export default NavBar;