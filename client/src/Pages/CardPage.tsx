import React, { useEffect } from 'react';

import Header from 'Components/Layout/Header';
import InteractiveGraph from 'Components/Block/InteractiveGraph';
import Relations from 'Components/Block/Relations';
import SingleCard from 'Components/Block/SingleCard';
import styles from './CardPage.module.scss';
import { useParams } from 'react-router-dom';

const CardPage: React.FC = () => {
    const { query } = useParams<{ query: string }>();

    useEffect(() => {
        console.log('Params', query);
    }, [query]);

    return (
        <div className={styles.CardPage}>
            <Header></Header>
            <InteractiveGraph></InteractiveGraph>
            <SingleCard></SingleCard>
            <Relations></Relations>
        </div>
    );
};

export default CardPage;
