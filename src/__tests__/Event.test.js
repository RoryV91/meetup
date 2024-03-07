import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Event from "../components/Event";
import mockData from "../mock-data";

describe("<Event />", () => {
	let EventComponent, detailsButton;
	const event = mockData[0];

	beforeEach(() => {
		EventComponent = render(<Event event={event} />);
		detailsButton = EventComponent.getByText("Show Details");
	});

	test("displays the event summary", () => {
		expect(EventComponent.getByText(event.summary)).toBeInTheDocument();
	});

	test("displays the event creation time", () => {
		expect(
			EventComponent.getByText(new Date(event.created).toString())
		).toBeInTheDocument();
	});

	test("displays the event location", () => {
		expect(EventComponent.getByText(event.location)).toBeInTheDocument();
	});

	test("has a show details button", () => {
		expect(detailsButton).toBeInTheDocument();
	});

	test("expands to show details when clicked", async () => {
		await userEvent.click(detailsButton);
	});

	test("collapses to hide details when clicked again", async () => {
		await userEvent.click(detailsButton);
		await userEvent.click(detailsButton);
	});
});
