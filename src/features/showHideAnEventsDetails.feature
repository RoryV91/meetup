Feature: Show/Hide Event Details

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