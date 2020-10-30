import CircleBadge from 'Components/View/CircleBadge';
import { Entity } from '_types/entities';
import { Link } from 'react-router-dom';
import React from 'react';
import { Typography } from '@equinor/eds-core-react';
import styles from './Relations.module.scss';

const Relations: React.FC = () => {
    return (
        <div className={styles.Relations}>
            <div className={styles.category}>
                <div className={styles.heading}>
                    <CircleBadge type={Entity.PROJECT}></CircleBadge>
                    <Typography variant="h3">Projects</Typography>
                </div>
                <ul>
                    <Link to="/">
                        <li>Project 1 Echo</li>
                    </Link>
                    <Link to="/">
                        <li>Project 2</li>
                    </Link>
                    <Link to="/">
                        <li>Project 3</li>
                    </Link>
                </ul>
            </div>
            <div className={styles.category}>
                <div className={styles.heading}>
                    <CircleBadge type={Entity.TEAM}></CircleBadge>
                    <Typography variant="h3">Teams</Typography>
                </div>
                <ul>
                    <Link to="/">
                        <li>Tean 1 Echo</li>
                    </Link>
                    <Link to="/">
                        <li>Tean 2</li>
                    </Link>
                    <Link to="/">
                        <li>Team 3</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Relations;
