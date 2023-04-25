Feature: Api Test
  Scenario: Get Hello World
    When I retrieve hello world
    Then I get a "200" response
    And the response is:
      """
      Hello, world (again)!
      """