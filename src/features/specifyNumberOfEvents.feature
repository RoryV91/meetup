Feature: Specify Number of Events

  Scenario: Default number of events displayed when no number is specified
    Given user hasn’t specified a number of events
    When the user opens the app
    Then the user should see 32 events displayed by default

  Scenario: User can change the number of events displayed
    Given the app is open
    When the user specifies a number of events
    Then the user should see the specified number of events displayed