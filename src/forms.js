/**
 * Forms API for ASFP
 */

function createFormInFolder(folderId, formName) {
  const resource = {
    title: formName,
    mimeType: MimeType.GOOGLE_FORMS,
    parents: [{ id: folderId }]
  }

  // Insert the form resource object into specified Drive folder, retrieve id
  const form = Drive.Files.insert(resource);
  Logger.log('Form created named ' + formName + ' in folder with id: ' + folderId);

  // Return form id
  return form.id;
}

function createRubric(form, rubric) {
  const page = form.addPageBreakItem();
  page.setTitle('Rubric ' + rubric.name);

  const questions = rubric.questions;
  questions.forEach(function(q) {
    form.addParagraphTextItem()
      .setTitle(q)
  });

  return page;
  /*buildRubric(form);
  const completeA = form.addMultipleChoiceItem();
  completeA.setTitle('Ready to submit?')
    .setRequired(true)
    .setChoices([
      completeA.createChoice('Yes', FormApp.PageNavigationType.SUBMIT),
      completeA.createChoice('No', rubricA)
    ]);*/
}

function populateFeedbackForm(formId, formTitle) {
  const form = FormApp.openById(formId);

  // clear any default items
  form.getItems().forEach(function(e) { form.deleteItem(e) });

  // set the form title
  form.setTitle(formTitle);
  
  createRubric(form, rubrics[0]);
}
