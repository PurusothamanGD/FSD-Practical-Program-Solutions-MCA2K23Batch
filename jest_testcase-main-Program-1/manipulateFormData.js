// manipulateFormData.js

// Adding a new field
function addNewField(formData, fieldName, fieldValue) {
    return {
      ...formData,
      [fieldName]: fieldValue,
    };
  }
  
  // Removing a field
  function removeField(formData, fieldName) {
    const { [fieldName]: removedField, ...remainingFormData } = formData;
    return remainingFormData;
  }
  
  // Updating a field
  function updateField(formData, fieldName, fieldValue) {
    return {
      ...formData,
      [fieldName]: fieldValue,
    };
  }
  
  // Exporting all functions
  module.exports = {
    addNewField,
    removeField,
    updateField,
  };
  