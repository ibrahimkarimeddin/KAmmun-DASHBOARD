import {useSyncSubWarehousesToAdmin } from 'api/admin'
import { LoadingButton } from 'components/input'
import { Form, Formik } from 'formik'
import React from 'react'
import { useEffect } from 'react'
import { Button,  Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { useTranslation } from 'utility/language'
import AddSubWareHouseToAdminForm from './AddSubWareHouseToAdminForm'
import { change_string_shape, getInitialValues, getValidationSchema } from './formUtils'

function AddSubWareHouseToAdmin({isOpen ,setIsopen , object}) {
    const t = useTranslation()
    const {mutate , isSuccess, isLoading  } = useSyncSubWarehousesToAdmin(object?.id)
    useEffect(()=>{
      if(isSuccess){
        setIsopen((v) => !v)
      }
    },[isSuccess])



    const handleSubmit = (values) =>{
        values['sub_warehouse_ids']=change_string_shape(values['sub_warehouse_ids'].toString(';'))

        mutate(values)
    }
  return (
    <Modal isOpen={isOpen} centered size='lg'>
      <ModalHeader toggle={() => setIsopen((v) => !v)}>
        {t("sub_warehouse")}
      </ModalHeader>
      <Formik
        onSubmit={handleSubmit}
        initialValues={getInitialValues(object)}
        validationSchema={getValidationSchema()}
      >
        {(formik) => (
          <Form>
            <ModalBody>
                <AddSubWareHouseToAdminForm /> 
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
                isLoading={isLoading}
              >
                {t("add")}
              </LoadingButton>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}

export default AddSubWareHouseToAdmin