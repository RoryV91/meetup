import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
    let AppComponent;
    let AppDOM;
    let EventDOM;

    test('An event element is collapsed by default', ({ given, then }) => {


        given('an event is displayed on the app', async () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
            await waitFor(() => AppDOM.querySelector('.event'));
        });

        then('the event details should be collapsed by default', () => {
            const eventDetails = AppDOM.querySelector('.event-details');
            expect(eventDetails).toBeNull();
        });
    });

    test('User can expand an event to see details', ({ given, when, then }) => {
        given('an event is displayed on the app', async () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
            EventDOM = await waitFor(() => AppDOM.querySelector('.details-btn'));
        });

        when('the user clicks on the event', async () => {
            userEvent.click(EventDOM);
        });

        then('the user should see the details of the event expanded', async () => {
            const eventDetails = AppDOM.querySelector('.event-details');
            expect(eventDetails).toBeDefined();
        });
    });
    
    test('User can collapse an event to hide details', ({ given, when, then }) => {
        given('an event with expanded details is displayed on the app', async () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
            EventDOM = await waitFor(() => AppDOM.querySelector('.event'));
            userEvent.click(EventDOM);
        });

        when('the user clicks on the event again', () => {
            userEvent.click(EventDOM);
        });

        then('the user should see the details of the event collapsed', () => {
            const eventDetails = AppDOM.querySelector('.event-details');
            expect(eventDetails).toBeNull();
        });
    });
});