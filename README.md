# Recent Entry Level Data Scientist Jobs Chrome Extension

This Chrome Extension displays recent entry-level data scientist jobs fetched from an API. The job listings are retrieved from LinkedIn via an API call, and displayed directly within the extension.

## Features
- **Fetch and display jobs**: The extension fetches recent entry-level Data Scientist job listings from LinkedIn for the United States.
- **API-based**: It uses the LinkedIn Data Scraper API to get the latest job postings.
- **User-friendly display**: Jobs are displayed in a list format with direct links to the job postings.

## Files

### 1. `manifest.json`
Defines the extension's metadata including the name, version, and the default popup HTML.

### 2. `popup.html`
The HTML file which serves as the UI for the extension popup. It contains a simple structure to display job listings fetched from the API.

### 3. `popup.js`
The JavaScript file responsible for fetching job data from the API and dynamically displaying it in the popup. It sends a `GET` request to the LinkedIn Data Scraper API and updates the HTML content with the results.

## Installation

1. Clone or download this repository to your local machine.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" using the toggle switch at the top right of the page.
4. Click "Load unpacked" and select the project directory.
5. The extension will now be available in your browser, and you can click the icon to see recent entry-level Data Scientist job listings.

## Usage

- Once the extension is installed, click the extension icon in your browser to open the popup.
- The popup will display a list of the most recent entry-level Data Scientist jobs in the United States, with clickable links to each job posting.

## API Key

This project uses the RapidAPI LinkedIn Data Scraper. Replace `'YOUR_API_KEY_HERE'` in the `popup.js` file with your actual API key.
