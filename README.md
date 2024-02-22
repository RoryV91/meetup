# meetup

## Table of Contents

- [Description](#description)
- [Serverless Functions](#serverless-functions)
- [Key Features](#key-features)
- [User Stories](#user-stories)
- [Scenarios](#scenarios)
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

"meetup" is a progressive web app designed to help users discover and organize events in their preferred cities. With features such as filtering events by city, toggling event details, specifying the number of events to display, and offline capability, "Meetup" offers a seamless and customizable event browsing experience. Users can easily add shortcuts to the app on their home screens for quick access and visualize event data through interactive charts. Whether users are planning their social gatherings or professional networking events, "Meetup" provides the tools they need to make informed decisions and stay connected with their communities.

## Serverless Functions

In the meetup app, serverless functions hosted on AWS Lambda play a crucial role in facilitating user authentication and interaction with the Google Calendar API. These functions initiate the OAuth consent flow, handle authentication callbacks, and orchestrate requests to the Google Calendar API on behalf of the user. By utilizing serverless architecture, the meetup ensures efficient scalability, cost optimization, and seamless integration with external services, guaranteeing a secure and responsive user experience throughout.

## Key Features

- Filter Events by City.
- Show/Hide Event Details.
- Specify Number of Events.
- Use the App When Offline.
- Add an App Shortcut to the Home Screen.
- Display Charts Visualizing Event Details.

## User Stories

| Feature                               | User Story                                                                                                                                                  |
|---------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Filter Events By City                | As a user, I want to filter events by city so that I can easily find events in my preferred location.                                                     |
| Show/Hide Event Details              | As a user, I want to be able to show or hide event details so that I can focus on relevant information and manage the display of event information efficiently. |
| Specify Number of Events             | As a user, I want to specify the number of events displayed so that I can control the amount of information shown on the screen based on my preference or device constraints. |
| Use the App When Offline             | As a user, I want to be able to use the app when offline so that I can access event information even when I don't have an internet connection, ensuring uninterrupted access to essential features. |
| Add an App Shortcut to the Home Screen | As a user, I want to be able to add a shortcut to the app on my device's home screen so that I can quickly access the app without navigating through a browser or app store, enhancing convenience and accessibility. |
| Display Charts Visualizing Event Details | As a user, I want to view charts visualizing event details so that I can easily understand and analyze event data for better decision-making or planning, enhancing the comprehensibility and usability of event information. |


## Scenarios

### Filter Events by City
```gherkin
  Scenario: Showing upcoming events from all cities when no city is searched
    Given user hasn’t searched for a city
    When the user opens the app
    Then the user should see a list of upcoming events from all cities

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
  Scenario: An event element is collapsed by default
    Given an event is displayed on the app
    Then the event details should be collapsed by default

  Scenario: User can expand an event to see details
    Given an event is displayed on the app
    When the user clicks on the event
    Then the user should see the details of the event expanded

  Scenario: User can collapse an event to hide details
    Given an event with expanded details is displayed on the app
    When the user clicks on the event again
    Then the user should see the details of the event collapsed
```
### Specify Number of Events
```gherkin
  Scenario: Default number of events displayed when no number is specified
    Given user hasn’t specified a number of events
    When the user opens the app
    Then the user should see 32 events displayed by default

  Scenario: User can change the number of events displayed
    Given the app is open
    When the user specifies a number of events
    Then the user should see the specified number of events displayed
```
### Use the App When Offline
```gherkin
  Scenario: Show cached data when there’s no internet connection
    Given the user has previously accessed the app and data has been cached
    When the user opens the app without internet connection
    Then the user should see cached data

  Scenario: Show error when user changes search settings (city, number of events)
    Given the app is open
    When the user tries to change search settings (city, number of events) without internet connection
    Then the user should see an error message indicating the action cannot be performed offline
```
### Add an App Shortcut to the Home Screen
```gherkin
  Scenario: User can install the Meet app as a shortcut on their device home screen
    Given the user is accessing the Meet app on their mobile device
    When the user adds the app to the home screen
    Then the Meet app shortcut should be installed on the device's home screen
```
### Display Charts Visualizing Event Details
```gherkin
  Scenario: Show a chart with the number of upcoming events in each city
    Given the user is viewing the event details page
    When the user navigates to the event details section
    Then the user should see a chart displaying the number of upcoming events in each city
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
