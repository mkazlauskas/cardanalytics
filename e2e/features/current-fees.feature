Feature: Current fees
	Scenario: Dashboard shows current Cardano fees aggregate
		Given I open cardanalytics
		When it finishes to load data
		Then I should see current fees aggregate: max, min and average amount