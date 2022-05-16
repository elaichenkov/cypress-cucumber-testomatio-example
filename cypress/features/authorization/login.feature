Feature: Authorization flow

  Scenario: Verify that user is able to log in with valid credentianals
    Given I am on the login page
    When I enter my valid username and password
    And I click on the login button
    Then I should be logged in

  Scenario: Verify that user is NOT able to log in with INVALID credentianals
    Given I am on the login page
    When I enter my invalid username and password
    And I click on the login button
    Then I shouldn't be logged in