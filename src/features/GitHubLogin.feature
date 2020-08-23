Feature: Git Hub Login

  Scenario: Login with Valid credentials
    Given the puppeteer settings are configured
    Then   I launch the URL
    Then  I give the valid username and password
    Then  I click on the signin button
    Then  I validate the user profile
