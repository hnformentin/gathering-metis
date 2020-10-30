import { Icon, Typography } from '@equinor/eds-core-react';
import React, { useEffect, useState } from 'react';

import Header from 'Components/Layout/Header';
import Results from 'Components/Block/Results';
import cx from 'classnames';
import { search } from '@equinor/eds-icons';
import styles from './SearchPage.module.scss';

const names = ['people', 'departments', 'projects', 'interests', 'technologies'];

const SearchPage: React.FC = (): JSX.Element => {
    const [highlight, setHighlight] = useState<string>('');
    const [query, setQuery] = useState<string>('');

    useEffect(() => {
        function addLetter(wordPosition: number, letterPosition: number): void {
            setTimeout(() => {
                setHighlight(names[wordPosition].substr(0, letterPosition));
                if (letterPosition !== names[wordPosition].length) {
                    addLetter(wordPosition, ++letterPosition);
                } else {
                    setTimeout(() => {
                        if (wordPosition + 1 !== names.length) {
                            addLetter(++wordPosition, 0);
                        } else {
                            addLetter(0, 0);
                        }
                    }, 1000);
                }
            }, 100);
        }
        addLetter(0, 0);
    }, []);

    Icon.add({ search });
    return (
        <div className={styles.SearchPage}>
            <Header></Header>
            <div className={cx(styles.MainContainer, query !== '' ? styles.extended : '')}>
                {query === '' && (
                    <Typography variant="h1">
                        Search for
                        <span className={styles.highlight} data-testid={`h1`}>
                            {highlight}
                        </span>
                    </Typography>
                )}
                <div className={styles.search}>
                    <Icon name="search"></Icon>
                    <input
                        type="text"
                        value={query}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                            setQuery(e.target.value);
                        }}
                    ></input>
                </div>
                {query !== '' && <Results query={query}></Results>}
            </div>
        </div>
    );
};

export default SearchPage;
