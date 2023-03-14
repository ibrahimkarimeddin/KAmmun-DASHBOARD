import { LoadingButton } from 'components/input';
import { Form, Formik } from 'formik';
import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader,Button } from 'reactstrap'
import { useTranslation } from 'utility/language';
import Banner_Model_Body from './ModelForm';
  import { getInitialValues, getValidationSchema } from './formUtils'
import { useAddDelivery_method, useUpdateDelivery_method } from 'api/delivery_method';

const AddModel = ({isOpen ,setIsopen , objectToEdit=null}) => {
  const t = useTranslation();
  const {mutate,isLoading , isSuccess:Success} = useAddDelivery_method()
  const {mutate:update,isLoading:Loading, isSuccess} = useUpdateDelivery_method(objectToEdit?.id)
  const handleSubmit = (values) =>{
    if(objectToEdit){
      update(values)
    }
   else{
    mutate(values)

   }
  
}   
React.useEffect(()=>{
if(isSuccess || Success){
 setIsopen(v =>!v) 
}
},[isSuccess , Success])
  return (
    <Modal isOpen={isOpen} centered size='lg'>
      <ModalHeader toggle={() => setIsopen((v) => !v)}>
        {!objectToEdit?t("add_delivery_method"):t("edit_delivery_method")}
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
                disabled={isLoading}
                onClick={() => setIsopen(false)}
                color="danger"
              >
                {t("cancel")}
              </Button>
              <LoadingButton
                type="submit"
                color="primary"
                isLoading={isLoading ||Loading}
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