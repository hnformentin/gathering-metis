import CircleBadge from 'Components/View/CircleBadge';
import { Entity } from '_types/entities';
import React from 'react';
import { Typography } from '@equinor/eds-core-react';
import styles from './SingleCard.module.scss';

const SingleCard: React.FC = (): JSX.Element => {
    return (
        <div className={styles.SingleCard}>
            <div
                className={styles.image}
                style={{
                    backgroundImage:
                        'url("https://www.thelocal.no/userdata/images/article/f12d21b1285cbece5df84581d98852395b2fff1936ed4796d7cb53511b98fdca.jpg")',
                }}
            ></div>
            <div className={styles.heading}>
                <CircleBadge type={Entity.DEPARTMENT}></CircleBadge>
                <Typography variant="h2">Software Innovation Trondheim</Typography>
            </div>
            <Typography variant="body_short">
                Description of the selected element. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse tempus nunc eget vehicula cursus. Fusce consequat viverra mauris sit amet sollicitudin.
                Nullam rutrum ipsum augue. Proin porta, libero sed fermentum cursus, sem velit tristique quam.
            </Typography>
        </div>
    );
};

export default SingleCard;
