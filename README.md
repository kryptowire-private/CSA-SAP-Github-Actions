# CSA Safe App Portal API Submission Action

This action takes the file path, app category & API key as input and submits the app file to Safe App Portal for analysis

## Prerequisite

### Set API Key

- Go to **Settings**
- Select **Secrets** under left column
- Click on **New Secret**
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

UUID of the submitted app for analysis.

## Example usage

steps:

    - uses: actions/download-artifact@v2
        with:
            name: app # Name of artifact holding the app file
            path: path/to/artifact

    - name: Kryptowire Analysis Submission
        id: appSubmission
        uses: pkumar001/kryptowire-analysis-action@master
        with:
            path-to-file: path/to/artifact/app-prod-debug.apk
            platform: "android"
            apiKey: ${{ secrets.KRYPTOWIRE_API_KEY }}
