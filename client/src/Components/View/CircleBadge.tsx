import { folder, group, person, star_outlined, widgets } from '@equinor/eds-icons';

import { Entity } from '_types/entities';
import { Icon } from '@equinor/eds-core-react';
import React from 'react';
import cx from 'classnames';
import styles from './CircleBadge.module.scss';

interface Props {
    type: Entity;
    style?: { [key: string]: string };
}

const CircleBadge: React.FC<Props> = (props: Props) => {
    Icon.add({ widgets, person, folder, star_outlined, group });
    return (
        <div className={styles.CircleBadge} style={props.style}>
            <div className={cx(styles.circle, styles[props.type])}>
                {props.type === Entity.DEPARTMENT && <Icon name="widgets"></Icon>}
                {props.type === Entity.PERSON && <Icon name="person"></Icon>}
                {props.type === Entity.PROJECT && <Icon name="folder"></Icon>}
                {props.type === Entity.INTEREST && <Icon name="star_outlined"></Icon>}
                {props.type === Entity.TEAM && <Icon name="group"></Icon>}
            </div>
        </div>
    );
};

export default CircleBadge;
