import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
    let AppComponent;
    let AppDOM;

    test('Default number of events displayed when no number is specified', ({ given, when, then }) => {
        given('user hasn’t specified a number of events', () => {
        });

        when('the user opens the app', () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
        });

        then(/^the user should see (\d+) events displayed by default$/, async (arg0) => {
            const eventList = await waitFor(() => AppDOM.querySelector('#event-list'));
            await waitFor(() => {
                const events = within(eventList).getAllByRole('listitem');
                expect(events).toHaveLength(parseInt(arg0));
            });
        });
    });

    test('User can change the number of events displayed', async ({ given, when, then }) => {
        let numberOfEventsInput;

        given('the app is open', () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
            numberOfEventsInput = AppDOM.querySelector('#numberOfEventsInput');
        });

        when('the user specifies a number of events', () => {
            userEvent.clear(numberOfEventsInput);
            userEvent.type(numberOfEventsInput, '10');
        });

        then('the user should see the specified number of events displayed', async () => {
            const eventList = await waitFor(() => AppDOM.querySelector('#event-list'));
            await waitFor(() => {
                const events = within(eventList).getAllByRole('listitem');
                expect(events).toHaveLength(10);
            });
        });
    });
});