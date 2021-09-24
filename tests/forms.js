const testFolderId = '1i0rABJEc-PGdV32RnVIckSaPFR3IrvRa';

function makeFeedbackForm() {
  const formId = createFormInFolder(testFolderId, "Test Form");
  Logger.log("Form ID: " + formId);

  populateFeedbackForm(formId, "Test Populated Feedback Form");
}
