import { Form, Formik } from 'formik';
import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useTranslation } from 'utility/language';
import ModelForm from './ModelForm';
import { LoadingButton } from 'components/input';

const AddModel = ({
  Name,
  UpdateMutation,
  AddMutation,
  ModelData,
  getDataToSend,
  getInitialValues,
  getValidationSchema,
  objectToEdit,
  isOpen,
  setisOpen
}) => {
  const t = useTranslation();
  const handleSubmit = (values) => {
    console.log(values);


    if (objectToEdit?.length !== 0) {
      UpdateMutation?.mutate(getDataToSend(values));
    } else {

      AddMutation.mutate(getDataToSend(values));
    }
  };
  const handleCloseModal = () => setisOpen(false);
  if(AddMutation?.isSuccess || UpdateMutation?.isSuccess){
  }
  return (
    <Modal isOpen={isOpen} centered size='lg'>
      <ModalHeader toggle={handleCloseModal}>
        {(objectToEdit?.length !== 0) ? t(`edit `) + t(`${Name}`): t(`add_new `) +t(`${Name}`)}
      </ModalHeader>
      <Formik
        onSubmit={(values)=>handleSubmit(values)}
        initialValues={getInitialValues(objectToEdit)}
        validationSchema={getValidationSchema()}
      >
        {(formik) => (
          <Form>
            <ModalBody>
              <ModelForm ModelData={ModelData} Option={Option} />
            </ModalBody>
            <ModalFooter>
              <Button disabled={AddMutation?.isLoading || UpdateMutation?.isLoading} onClick={handleCloseModal} color='danger'>
                {t('cancel')}
              </Button>
              <LoadingButton type='submit' color='primary' isLoading={AddMutation?.isLoading || UpdateMutation?.isLoading}>
                {t('submit')}
              </LoadingButton>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default AddModel;