import React, { useState } from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    const setCurrentNOE = jest.fn();
    const currentNOE = '32';

    beforeAll(() => {
        NumberOfEventsComponent = render(<NumberOfEvents currentNOE={currentNOE} setCurrentNOE={setCurrentNOE} />);
    });

    test('render textbox element', () => {
        const { getByLabelText } = render(<NumberOfEvents currentNOE={currentNOE} setCurrentNOE={setCurrentNOE} />);
        const textbox = getByLabelText('Number of Events:');
        expect(textbox).toBeInTheDocument();
    });

    test('default value of textbox is 32', () => {
        const { getByLabelText } = render(<NumberOfEvents currentNOE={currentNOE} setCurrentNOE={setCurrentNOE} />);
        const textbox = getByLabelText('Number of Events:');
        expect(textbox.value).toBe('32');
    });

    test('change value of textbox when user types in it', () => {
        const setCurrentNOE = jest.fn();
        const { getByLabelText } = render(<NumberOfEvents currentNOE='32' setCurrentNOE={setCurrentNOE} />);
        const textbox = getByLabelText('Number of Events:');

        // Set the value to '' and check value
        fireEvent.change(textbox, { target: { value: '' } });
        expect(setCurrentNOE).toHaveBeenLastCalledWith('');

        // Set the value to '1' and check value
        fireEvent.change(textbox, { target: { value: '1' } });
        expect(setCurrentNOE).toHaveBeenLastCalledWith('1');

        // Set the value to '10' and check value
        fireEvent.change(textbox, { target: { value: '10' } });
        expect(setCurrentNOE).toHaveBeenLastCalledWith('10');
    });
});