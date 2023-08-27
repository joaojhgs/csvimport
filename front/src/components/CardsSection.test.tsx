import React from 'react';
import { render, screen } from '@testing-library/react';
import CardsSection from './CardsSection';
window.matchMedia = window.matchMedia || function () {
    return {
        matches: false,
        addListener: function () { },
        removeListener: function () { }
    };
};

test('renders CardsSection component', () => {
    render(<CardsSection  filteredCards={[{
        city: 'New York',
        country: 'USA',
        favorite_sport: 'Basketball',
        name: "Thommas"
    }]}/>);
    const cardItem = screen.getByText(/Thommas/i);
    expect(cardItem).toBeInTheDocument();
});
