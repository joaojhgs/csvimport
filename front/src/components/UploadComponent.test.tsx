import React from 'react';
import { render, screen } from '@testing-library/react';
import UploadComponent from './UploadComponent';
window.matchMedia = window.matchMedia || function () {
    return {
        matches: false,
        addListener: function () { },
        removeListener: function () { }
    };
};

test('renders CardsSection component', () => {
    render(<UploadComponent getUserData={jest.fn()}/>);
    const cardItem = screen.getByText(/Upload/i);
    expect(cardItem).toBeInTheDocument();
});
