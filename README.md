# meetup

## Table of Contents

- [Description](#description)
- [Key Features](#key-features)
- [Gherkin Scenarios](#gherkin-scenarios)
  - [Filter Events by City](#filter-events-by-city)
  - [Show/Hide Event Details](#showhide-event-details)
  - [Specify Number of Events](#specify-number-of-events)
  - [Use the App When Offline](#use-the-app-when-offline)
  - [Add an App Shortcut to the Home Screen](#add-an-app-shortcut-to-the-home-screen)
  - [Display Charts Visualizing Event Details](#display-charts-visualizing-event-details)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)

## Description

"Meetup" is a progressive web app designed to help users discover and organize events in their preferred cities. With features such as filtering events by city, toggling event details, specifying the number of events to display, and offline capability, "Meetup" offers a seamless and customizable event browsing experience. Users can easily add shortcuts to the app on their home screens for quick access and visualize event data through interactive charts. Whether users are planning their social gatherings or professional networking events, "Meetup" provides the tools they need to make informed decisions and stay connected with their communities.

## Key Features

- Filter Events by City.
- Show/Hide Event Details.
- Specify Number of Events.
- Use the App When Offline.
- Add an App Shortcut to the Home Screen.
- Display Charts Visualizing Event Details.

## Gherkin Scenarios

### Filter Events by City
```gherkin
Feature: Filtering Events by City

  As a user
  I want to filter events by city
  So that I can find events in my preferred location easily

  Scenario: Showing upcoming events from all cities when no city is searched
    Given user hasn’t searched for any city
    When the user opens the app
    Then the user should see a list of upcoming events

  Scenario: Displaying suggestions when searching for a city
    Given the main page is open
    When user starts typing in the city textbox
    Then the user should receive a list of cities (suggestions) that match what they’ve typed

  Scenario: Selecting a city from the suggested list
    Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing
    When the user selects a city (e.g., “Berlin, Germany”) from the list
    Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city

```
### Show/Hide Event Details
```gherkin
  As a user
  I want to show or hide event details
  So that I can focus on the information relevant to me without distractions

  Scenario: Showing event details
    Given I am viewing an event on the meetup app
    When I click on the event card
    Then I should see the details of the event expanded

  Scenario: Hiding event details
    Given I am viewing an event with expanded details on the meetup app
    When I click on the event card again
    Then I should see the details of the event collapsed
```
### Specify Number of Events
```gherkin
  As a user
  I want to specify the number of events to display
  So that I can control the amount of information shown on the screen based on my preference or device constraints

  Scenario: Specifying number of events
    Given I am on the meetup app homepage
    When I enter a specific number in the "Number of Events" input field
    And I click on the "Apply" button
    Then I should see the specified number of events displayed on the screen
```
### Use the App When Offline
```gherkin
  As a user
  I want to use the app when offline
  So that I can access event information even when I don't have an internet connection

  Scenario: Accessing the app offline
    Given I have previously visited the meetup app
    When I lose internet connection
    Then I should still be able to access previously viewed event information
```
### Add an App Shortcut to the Home Screen
```gherkin
  As a user
  I want to add a shortcut to the app on my device's home screen
  So that I can quickly access the app without having to navigate through a browser or app store

  Scenario: Adding an app shortcut to the home screen
    Given I am using the meetup app on my mobile device
    When I access the browser menu
    And I select "Add to Home Screen"
    Then I should see a shortcut to the meetup app added to my device's home screen
```
### Display Charts Visualizing Event Details
```gherkin
  As a user
  I want to view charts visualizing event details
  So that I can easily understand and analyze event data for better decision-making or planning

  Scenario: Viewing charts visualizing event details
    Given I am viewing event details on the meetup app
    When I scroll down to the "Event Statistics" section
    Then I should see interactive charts displaying event data
```

## Installation

[Instructions for installing and running the Meetup app locally or on a server go here.]

## Usage

[Instructions for using the Meetup app, including any configuration or setup needed, go here.]

## Contributing

[Guidelines for contributing to the Meetup app project go here.]

## License

[GNU General Public License](LICENSE)

## Credits

[Optional section for giving credit to contributors, libraries, or other resources used in the project.]
