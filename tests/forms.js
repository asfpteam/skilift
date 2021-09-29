const TEST_FOLDER_ID = '1i0rABJEc-PGdV32RnVIckSaPFR3IrvRa';

function test_createFormInFolder() {
  const formId = createFormInFolder(TEST_FOLDER_ID, "Test Form");
  Logger.log("Test form created with ID: " + formId);
}

function test_populateFeedbackForm() {
  const formId = createFormInFolder(TEST_FOLDER_ID, "Test Form");
  populateFeedbackForm(formId, "Test Populated Feedback Form");
  Logger.log("Test form created with ID: " + formId);
}
