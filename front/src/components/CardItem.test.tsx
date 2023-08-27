import React from 'react';
import { render, screen } from '@testing-library/react';
import CardItem from './CardItem';
window.matchMedia = window.matchMedia || function () {
    return {
        matches: false,
        addListener: function () { },
        removeListener: function () { }
    };
};

test('renders CardItem component', () => {
    render(<CardItem item={{
        city: 'New York',
        country: 'USA',
        favorite_sport: 'Basketball',
        name: "Thommas"
    }}/>);
    const cardItem = screen.getByText(/Thommas/i);
    expect(cardItem).toBeInTheDocument();
});
