Feature: General stats
	Scenario: Dashboard shows # of blocks, # of transactions, current era, current epoch and current slot
		Given I open cardanalytics
		When it finishes to load data
		Then I should see # of blocks, # of transactions, current era, current epoch and current slot