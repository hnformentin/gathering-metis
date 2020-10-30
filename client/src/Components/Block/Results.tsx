import React, { useEffect } from 'react';

import { Entity } from '_types/entities';
import SearchResult from 'Components/View/SearchResult';
import styles from './Results.module.scss';

interface Props {
    query: string;
}

const Results: React.FC<Props> = (props: Props) => {
    useEffect(() => {
        console.log('New query', props.query);
    }, [props.query]);

    return (
        <div className={styles.Results}>
            <SearchResult id="1" type={Entity.DEPARTMENT} title="Software Innovation Trondheim"></SearchResult>
            <SearchResult id="1" type={Entity.PERSON} title="Jan Kondula"></SearchResult>
            <SearchResult id="1" type={Entity.PROJECT} title="Echo Project"></SearchResult>
            <SearchResult id="1" type={Entity.INTEREST} title="Baking"></SearchResult>
            <SearchResult id="1" type={Entity.TEAM} title="Echo team" style={{ border: 'none' }}></SearchResult>
        </div>
    );
};

export default Results;
