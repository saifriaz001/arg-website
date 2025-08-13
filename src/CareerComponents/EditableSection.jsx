import React, { useState } from "react";
import { ErrorMessage, FieldArray } from "formik";

// This is a "smart" component that manages its own state for editing.
const EditableSection = ({
  fieldName,
  sectionTitle,
  formik,
  validationSchema,
  FormComponent,
  DisplayComponent,
  newEntry,
}) => {
  // State is now isolated inside this component, preventing bugs.
  const [editingIndex, setEditingIndex] = useState(null);
  const [originalData, setOriginalData] = useState(null);

  // All logic for saving is now contained here.
  const handleSave = async (index) => {
    try {
      await validationSchema.validate(formik.values[fieldName][index], {
        abortEarly: false,
      });
      setEditingIndex(null);
      setOriginalData(null); // Clean up backup state
    } catch (err) {
      const errors = {};
      err.inner.forEach((error) => {
        errors[error.path] = error.message;
      });
      const newErrors = { ...formik.errors };
      if (!newErrors[fieldName]) newErrors[fieldName] = [];
      newErrors[fieldName][index] = errors;
      formik.setErrors(newErrors);
    }
  };

  // All logic for canceling is also contained here.
  const handleCancel = (index, remove) => {
    if (originalData) {
      // If a backup exists, it was an existing entry. Revert it.
      formik.setFieldValue(`${fieldName}.${index}`, originalData);
    } else {
      // If no backup exists, it was a new entry. Remove it.
      remove(index);
    }
    setEditingIndex(null);
    setOriginalData(null); // Always clean up state
  };

  const fieldError = formik.errors[fieldName];
  return (
    <div className="form-section">
      <h3 className="section-heading">{sectionTitle}</h3>
      <FieldArray name={fieldName}>
        {({ remove, push }) => (
          <div>
            {formik.values[fieldName].map((item, index) =>
              editingIndex === index ? (
                <FormComponent
                  key={item.id}
                  index={index}
                  formik={formik} // Pass formik down for field access
                  onSave={() => handleSave(index)}
                  onCancel={() => handleCancel(index, remove)}
                />
              ) : (
                <DisplayComponent
                  key={item.id}
                  item={item}
                  onEdit={() => {
                    setOriginalData(formik.values[fieldName][index]);
                    setEditingIndex(index);
                  }}
                  onDelete={() => remove(index)}
                />
              )
            )}
            {editingIndex === null && (
              <button
                type="button"
                onClick={() => {
                  const itemWithId = {
                    ...newEntry,
                    id: self.crypto.randomUUID(),
                  };
                  const newIndex = formik.values[fieldName].length;
                  push(itemWithId);
                  setEditingIndex(newIndex);
                }}
                className="color-btn"
              >
                Add {sectionTitle}
              </button>
            )}
          </div>
        )}
      </FieldArray>
      {typeof fieldError === "string" && (
        <ErrorMessage name={fieldName} component="div" className="form-error" />
      )}
    </div>
  );
};

export default EditableSection;
