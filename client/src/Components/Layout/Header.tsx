import { Link } from 'react-router-dom';
import React from 'react';
import SVGLogo from 'Components/SVG/SVGLogo';
import styles from './Header.module.scss';

const Header: React.FC = (): JSX.Element => {
    return (
        <Link to="/">
            <div className={styles.Header}>
                <SVGLogo></SVGLogo>
            </div>
        </Link>
    );
};

export default Header;
