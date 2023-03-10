import { useAddBanner, useUpdateBanner } from 'api/Banner';
import { LoadingButton } from 'components/input';
import { Form, Formik, useFormikContext } from 'formik';
import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader,Button } from 'reactstrap'
import { useTranslation } from 'utility/language';
import Banner_Model_Body from './ModelForm';
  import { getDataToSend, getInitialValues, getValidationSchema } from './formUtils'

const AddModel = ({isOpen ,setIsopen , objectToEdit=null}) => {
  const t = useTranslation();
  const formik = useFormikContext();
  const {mutate,isLoading ,isSuccess} = useAddBanner()
  const {mutate:update,isLoading:Loading , isSuccess:Success} = useUpdateBanner(objectToEdit?.id)
  const handleSubmit = (values) =>{
    if(objectToEdit){

      console.log(values);
      update(getDataToSend(values))
    
    }
   else{
    mutate(getDataToSend(values))
   }
  
}   

if(Success || isSuccess){
  setIsopen(false)
}
  return (
    <Modal isOpen={isOpen} centered size='lg'>
      <ModalHeader toggle={() => setIsopen((v) => !v)}>
        {!(objectToEdit?.title)?t("add_new_banner"):t("edit_banner")}
      </ModalHeader >
      <Formik
        onSubmit={handleSubmit}
        initialValues={getInitialValues(objectToEdit)}
        validationSchema={getValidationSchema()}
      >
        {(formik) => (
          <Form>
            <ModalBody>
                <Banner_Model_Body /> 
            </ModalBody>
            <ModalFooter>
              <Button
                disabled={isLoading ||Loading}
                onClick={() => setIsopen(false)}
                color="danger"
              >
                {t("cancel")}
              </Button>
              <LoadingButton
                type="submit"
                color="primary"
                isLoading={isLoading||Loading}
              >
                {t("submit")}
              </LoadingButton>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}

export default AddModel