# BCMB AER Responses Script

This is a Google Apps Script for automatically sending email responses to Boston College Marching Band Instructors and Section Leaders based on the selected people in an AER form.

## Installation

I was able to package my code into a library, making installation a little easier and any future updates **much** easier. To install, follow the steps closely:

1. Ensure that you are signed out of all Google accounts except the EBoard account that owns the AER form. Otherwise the Google Apps Scripts page sometimes refuses to load (don't worry this is only for when you install it).
2. Open the Google Sheet that receives the AER Form data. To make sure you get the right Sheet, you can go to the AER form on Google Forms, click the `Responses` tab, and click `View in Sheets`.
3. Click the `Extensions` menu and click Apps Script. This should create a new Apps Script project and bind it to the Sheet, giving you a page like this:

   ![Tux, the Linux mascot](/readme_assets/scripts_screenshot.png)

4. Click the plus button next to the `Libraries` list on the left sidebar. Paste in the following Script ID and press the `Look up` button: `1AI6Lqv2gGOPDSBl2we24BbfzK0OI49-FGZAQeXUNISKuRU_hbX3vRM6l`
5. In the version dropdown, select the highest number (right now it's 3). Ensure that the `Identifier` is `BCMBAERResponses`, which should be the default. Click the `Add` button.
6. Delete the placeholder code that was placed in the `Code.gs` file automatically, and replace it with the entire contents of the `Code.gs` file from this repository. Save the project. Now is also a good time to give the project a better name than "Untitled project."
7. Go back to the Google Sheet that receives form responses and refresh the page. After a few seconds you should see a new `BCMB AER Responses` dropdown in the toolbar (this might take a few seconds after the Sheet loads). Click `Enable AER Response Emails` in the dropdown. It will ask for authorization, and may show a warning that "Google has not authorized this app", which you can get past by clicking `Advanced` and then `Go to <project name> (unsafe)`. Then click `Allow`.
8. Click `BCMB AER Responses` again, and click `Enable AER Response Emails` again (you have to do it twice because the first time just asks for authorization.
9. Done! AERs should now automatically send out responses!