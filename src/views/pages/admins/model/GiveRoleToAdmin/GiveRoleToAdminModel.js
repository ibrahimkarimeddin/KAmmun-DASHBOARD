import {useGiveRoleToAdmin } from 'api/admin'
import { LoadingButton } from 'components/input'
import { Form, Formik } from 'formik'
import React from 'react'
import { useEffect } from 'react'
import { Button,  Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { useTranslation } from 'utility/language'
import { getInitialValues, getValidationSchema } from './formUtils'
import GiveRoleToAdminForm from './GiveRoleToAdminForm'

function GiveRoleToAdminModel({isOpen ,setIsopen , object}) {
    const t = useTranslation()
    const {mutate , isSuccess, isLoading  } = useGiveRoleToAdmin(object?.id)
    useEffect(()=>{
      if(isSuccess){
        setIsopen((v) => !v)
      }
    },[isSuccess])

    const handleSubmit = (values) =>{
        values['role_id']= values['role']
        mutate(values)
    }   
  return (
    <Modal isOpen={isOpen} centered size='lg'>
      <ModalHeader toggle={() => setIsopen((v) => !v)}>
        {t("give_role_to_admin")}
      </ModalHeader>
      <Formik
        onSubmit={handleSubmit}
        initialValues={getInitialValues(object)}
        validationSchema={getValidationSchema()}
      >
        {(formik) => (
          <Form>
            <ModalBody>
                <GiveRoleToAdminForm /> 
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

export default GiveRoleToAdminModel