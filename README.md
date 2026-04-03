# CSA Safe App Portal API Submission Action

This action takes the file path, app category & API key as input and submits the app file to Safe App Portal for analysis

## Prerequisite

### Set API Key

- Go to **Settings**
- Select **Secrets and variables** under left column, and then select the **Actions** subheading
- In the **Repository Secrets** section click on **New repository secret**
- Provide **Name: SAP_API_KEY** & **Value** as your own Safe App Portal API Key
- Click on **Add Secret**

## Inputs

### `pathToFile`

**Required** The path to the artifact file.

### `category`

**Required** The Category of the app from the following list: ALL, ART_AND_DESIGN, AUTO_AND_VEHICLES, BEAUTY, BOOKS_AND_REFERENCE, BUSINESS, COMICS, COMMUNICATION, DATING, EDUCATION, ENTERTAINMENT, EVENTS, FINANCE, FOOD_AND_DRINK, GAME_ACTION, GAME_ADVENTURE, GAME_ARCADE, GAME_BOARD, GAME_CARD, GAME_CASINO, GAME_CASUAL, GAME_EDUCATIONAL, GAME_MUSIC, GAME_PUZZLE, GAME_RACING, GAME_ROLE_PLAYING, GAME_SIMULATION, GAME_SPORTS, GAME_STRATEGY, GAME_TRIVIA, GAME_WORD, HEALTH_AND_FITNESS, HOUSE_AND_HOME, LIBRARIES_AND_DEMO, LIFESTYLE, MAPS_AND_NAVIGATION, MEDICAL, MUSIC_AND_AUDIO, NEWS_AND_MAGAZINES, PARENTING, PERSONALIZATION, PHOTOGRAPHY, PRODUCTIVITY, SHOPPING, SOCIAL, SPORTS, TOOLS, TRAVEL_AND_LOCAL, VIDEO_PLAYERS, WEATHER

### `apiKey`

**Required** API key of the user.
**Default** \${{ secrets.SAP_API_KEY }}

## Outputs

### `Quokka UUID`

**Safe App Portal Results URL**:  the URL where you can access the scan progress and results.

## Example usage

** Note: ** the example assumes you have an environmental variable called env.path-to-file which you previously set to the binary you wish to submit for analysis. (i.e. app-release.apk)

jobs:

	safe_app_portal_analysis_job:
		runs-on: ubuntu-latest
		name: Submit app to Safe App Portal
		steps:
			- name: CSA Safe App Portal Analysis Submission
			uses: ./ # Uses an action in the root directory
			id: appSubmit
			with:
				path-to-file: ${{ env.path-to-file }}
				category: "PRODUCTIVITY" 
				apiKey: ${{ secrets.SAP_API_KEY }}
