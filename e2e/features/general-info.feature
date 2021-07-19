Feature: General info
	Scenario: Dashboard shows general blockchain information
		Given I open cardanalytics
		When it finishes to load data
		Then I should see totals of blocks, transactions, assets, as well as current era, epoch and slot