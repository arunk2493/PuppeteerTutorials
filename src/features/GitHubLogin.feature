Feature: Git Hub Login
  @sample
  Scenario: Login with Valid credentials
    Given the puppeteer settings are configured
    Then   I launch the URL
    Then  I give the valid username and password
    Then  I click on the signin button
    Then  I validate the user profile
    Then I close the browser
  @SmokeTest
  Scenario: Login with Valid credentials
    Given the puppeteer settings are configured
    Then   I launch the URL
    Then  I give the valid username and password
    Then  I click on the signin button
    Then  I validate the user profile
    Then I close the browser

