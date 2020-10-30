import React from 'react';
import { Router } from 'react-router';
import SearchPage from './SearchPage';
import { createBrowserHistory } from 'history';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import useEdsIcons from 'hooks/general/useEdsIcons';

const history = createBrowserHistory();

beforeAll(() => {
    useEdsIcons();
});

test('Renders the headline on page visit', () => {
    render(
        <Router history={history}>
            <SearchPage />
        </Router>,
    );
    const text = screen.getByTestId(`h1`).innerHTML;
    expect(text).toBe('');
});
