/** Load some functions from the library 
 * Library located at https://script.google.com/home/projects/1AI6Lqv2gGOPDSBl2we24BbfzK0OI49-FGZAQeXUNISKuRU_hbX3vRM6l/edit
 */

/** Helper functions for checking trigger presence */
function isTriggerPresent() {
  return BCMBAERResponses.isTriggerPresent();
}
function triggerPresent() {
  BCMBAERResponses.triggerPresent()
}
function triggerNotPresent() {
  BCMBAERResponses.triggerNotPresent()
}

/**
 * The event handler triggered when installing the add-on.
 * @param {Event} e The onInstall event.
 */
function onInstall(e) {
  BCMBAERResponses.onInstall(e);
}

/**
 * Creates custom menu for user to run scripts.
 */
function onOpen() {
  BCMBAERResponses.onOpen();
}

/**
 * Installs a trigger on the Spreadsheet for when a Form response is submitted.
 */
function enableEmails() {
  BCMBAERResponses.enableEmails();
}

/**
 * Called when form is submitted, creates and sends an email
 *
 * @param {Object} event - Form submit event
 */
function onFormSubmit(e) {
  BCMBAERResponses.onFormSubmit(e);
}
