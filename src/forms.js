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
  const section = form.addSectionHeaderItem();
  section.setTitle(rubric.name);

  const { questions } = rubric;
  questions.forEach(function(q) {
    const { name, description, goal } = q;
    form.addParagraphTextItem()
      .setTitle(name)
      .setHelpText(`Description: ${description} Goal: ${goal}`);
  });

  return section;
}

function populateFeedbackForm(formId, formTitle) {
  const form = FormApp.openById(formId);

  // clear any default items
  form.getItems().forEach(function(e) { form.deleteItem(e) });

  // set the form title
  form.setTitle(formTitle);
  
  createRubric(form, rubric);
}
