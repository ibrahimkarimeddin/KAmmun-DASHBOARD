import React, { useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Button } from "reactstrap";
import { useTranslation } from "utility/language";
import { LoadingButton } from "components/input/LoadingButton";
import { Formik, Form } from "formik";
import { AddSecondToValue, getInitialValues,  getValidationSchema,} from "./formUtils";
import { useAddWareHouse, useUpdateWareHouse } from "api/warehouse";
import ModelForm from "./ModelForm";
import ModelEditForm from "./ModelEditForm";

const EditModal = ({ isOpen, setIsOpen, objectToEdit }) => {
  const t = useTranslation();
  const { mutate:update, isLoading, isSuccess } = useUpdateWareHouse(objectToEdit?.id);
  const { mutate  , isSuccess:Success} = useAddWareHouse();

  const handleSubmit = (values) => {
    
    if(objectToEdit){
      const new_value = {
        description:values?.description,
      name:values?.name,
      number_of_workers:values?.number_of_workers,
      is_active:values?.is_active,
      }
      update(new_value)

    }
   else{
    const new_value = {
      work_end_time:AddSecondToValue(values?.work_end_time),
      work_start_time:AddSecondToValue(values?.work_start_time),
      friday_start_time:AddSecondToValue(values?.friday_start_time),
      friday_end_time:AddSecondToValue(values?.friday_end_time),
      description:values?.description,
      name:values?.name,
      number_of_workers:values?.number_of_workers,
      is_active:values?.is_active
        }
    mutate(new_value)

   }
  };
  useEffect(()=>{
 if(isSuccess ||Success){
    setIsOpen(v=>!v)
  }
  },[isSuccess , Success])
 
  return (
    <Modal centered isOpen={isOpen} size="lg">
      <ModalHeader toggle={() => setIsOpen((v) => !v)}>
        {objectToEdit?t("edit_warehouse") :t("add_warehouse") }
      </ModalHeader>
      {(
        <Formik
          onSubmit={handleSubmit}
          initialValues={getInitialValues(objectToEdit)}
          validationSchema={getValidationSchema(true)}
        >
          {(formik) => (
            <Form>
              <ModalBody>
                {
                  objectToEdit ? <ModelEditForm/>:<ModelForm/>
                }
              </ModalBody>
              <ModalFooter>
                <Button
                  disabled={isLoading}
                  onClick={() => setIsOpen(false)}
                  color="danger"
                >
                  {t("cancel")}
                </Button>
                <LoadingButton
                  type="submit"
                  color="primary"
                  isLoading={isLoading}
                >
                  {t("save")}
                </LoadingButton>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      )}
    </Modal>
  );
};

export default EditModal;
