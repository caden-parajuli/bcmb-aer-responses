# BCMB AER Responses Script

This is a Google Apps Script for automatically sending email responses to Boston College Marching Band Instructors and Section Leaders based on the selections in an AER form.

## Installation

I was able to package my code into a library, making installation a little easier and any future updates **much** easier. To install, follow these steps closely:

1. Ensure that you are signed out of all Google accounts except the EBoard account that owns the AER form. Otherwise the Google Apps Scripts page sometimes refuses to load (don't worry this is only for when you install it).
2. Open the Google Sheet that receives the AER Form data. To make sure you get the right Sheet, you can go to the AER form on Google Forms, click the `Responses` tab, and click `View in Sheets`.
3. Click the `Extensions` menu and click Apps Script. This should create a new Apps Script project and bind it to the Sheet, giving you a page like this:

   ![Google Scripts Screenshot](/readme_assets/scripts_screenshot.png)

4. Click the plus button next to the `Libraries` list on the left sidebar. Paste in the following Script ID and press the `Look up` button: `1AI6Lqv2gGOPDSBl2we24BbfzK0OI49-FGZAQeXUNISKuRU_hbX3vRM6l`
5. In the version dropdown, select the highest number (right now it's 4). Ensure that the `Identifier` is `BCMBAERResponses`, which should be the default. Click the `Add` button.
6. Delete the placeholder code that was placed automatically in the `Code.gs` file, and replace it with the entire contents of the `Code.gs` file from this repository. Save the project. Now is also a good time to give the project a better name than "Untitled project."
7. Go back to the Google Sheet that receives form responses and refresh the page. After a few seconds you should see a new `BCMB AER Responses` dropdown in the toolbar (this might take a few seconds after the Sheet loads). Click `Enable AER Response Emails` in the dropdown. It will ask for authorization, and may show a warning that "Google has not authorized this app", which you can get past by clicking `Advanced` and then `Go to <project name> (unsafe)`. Then click `Allow`.
8. Click `AER Responses` again, and click `Send AER Response Emails` again (you have to do it twice because the first time just asks for authorization).
9. Done! AERs should now automatically send out responses!

## Updating

If I deploy a new update (I'll let you know), just go to the Google Script Project and click `BCMBAERresponses` under the `Libraries` list. Click the `Version` dropdown and select the new version. Click `Save` and you're done.

## Caveats

If you ever change the format of the AER Google Form, I'll have to update the library, which would be quick and easy but would need to be done or the email responses would stop working.