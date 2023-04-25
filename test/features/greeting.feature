Feature: Greeting
  Scenario: Say hello
    When the greeter says abc
    Then I should have heard "abc"
