Feature: General stats
	Scenario: Dashboard shows general blockchain stats
		Given I open cardanalytics
		When it finishes to load data
		Then I should see totals of blocks, transactions, stake pools, ADA stake amount, assets, as well as current era, epoch and slot