import React from 'react';
import { render, screen } from '@testing-library/react';
import EmptyComponent from './EmptyComponent';
window.matchMedia = window.matchMedia || function () {
    return {
        matches: false,
        addListener: function () { },
        removeListener: function () { }
    };
};

test('renders EmptyComponent component', () => {
    render(<EmptyComponent />);
    const emptyComponent = screen.getByText(/No results found/i);
    expect(emptyComponent).toBeInTheDocument();
});
