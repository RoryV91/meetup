import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeAll(() => {
        NumberOfEventsComponent = render(<NumberOfEvents />);
    });

    test('render textbox element', () => {
        const { getByLabelText } = render(<NumberOfEvents />);
        const textbox = getByLabelText('Number of Events:');
        expect(textbox).toBeInTheDocument();
    });

    test('default value of textbox is 32', () => {
        const { getByLabelText } = render(<NumberOfEvents />);
        const textbox = getByLabelText('Number of Events:');
        expect(textbox.value).toBe('32');
    });

    test('change value of textbox when user types in it', async () => {
        const { getByLabelText } = render(<NumberOfEvents />);
        const textbox = getByLabelText('Number of Events:');
        await userEvent.type(textbox, '{backspace}{backspace}10');
        expect(textbox.value).toBe('10');
    });
});