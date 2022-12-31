import React, { useEffect } from 'react';
import GenerateContentForm from './GenerateContentForm';
import styles from '../styles/Hero.module.css';

const Hero = () => {

    return (
        <div style={{ display: 'flex', height: '100vmax', backgroundColor: 'white' }}>
            <div className={styles.headingContainer}>
                <div className={styles.heading}>Generate Authentic Content</div>
            </div>
            <GenerateContentForm />
        </div>
    );
}

export default Hero;