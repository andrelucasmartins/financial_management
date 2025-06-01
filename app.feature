Feature: Financial Records Management
  # As a system user
  # I want to manage my financial records
  # So I can control my personal finances

  Scenario: View financial records listing
    Given I'm on the application's homepage
    When the system loads the financial records
    Then I should see a list of all registered records
    And I should see the total income calculated correctly
    And I should see the total expenses calculated correctly
    And I should see the total balance calculated as (income - expenses)

  Scenario: Add new financial record
    Given I'm on the homepage
    When I click the "Add Record" button
    And I fill the form with type "income", amount "100.00" and description "Salary"
    And I confirm the registration
    Then the new record should appear in the listing
    And the income and balance totals should update in real-time

  Scenario: View mobile version
    Given I access the application on a mobile device
    Then the interface should adapt to the screen size
    And all elements should be easily tappable
    And the layout should follow mobile design best practices

  Scenario: In-memory persistence
    Given I've added new financial records
    When I refresh the page
    Then the records don't need to persist (optional persistence)
    But the structure should use an array of objects for temporary storage