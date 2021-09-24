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

  // Return form object
  return form;
}

function clearFormItems(form) {
  var items = form.getItems();
  items.forEach(function(e) { form.deleteItem(e) });
  return form;
}
