Feature: Page load
	Scenario: Loader animation
		Given I open cardanalytics
		When it's still loading
		Then I should see preloader animation
	Scenario: App loaded
		Given I open cardanalytics
		When it finishes to load data
		Then I should see the app