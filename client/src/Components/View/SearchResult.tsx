import { Icon, Typography } from '@equinor/eds-core-react';
import { folder, group, person, star_outlined, widgets } from '@equinor/eds-icons';

import CircleBadge from './CircleBadge';
import { Entity } from '_types/entities';
import { Link } from 'react-router-dom';
import React from 'react';
import styles from './SearchResult.module.scss';

interface Props {
    id: string;
    title: string;
    type: Entity;
    style?: { [key: string]: string };
}

const SearchResult: React.FC<Props> = (props: Props) => {
    Icon.add({ widgets, person, folder, star_outlined, group });
    return (
        <Link to={'/card/' + props.id}>
            <div className={styles.SearchResult} style={props.style}>
                <CircleBadge type={props.type}></CircleBadge>
                <Typography variant="h4">{props.title}</Typography>
            </div>
        </Link>
    );
};

export default SearchResult;
