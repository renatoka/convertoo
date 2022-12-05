import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Spinner } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import React from "react"

export const PDFModal = ({ isOpen, onClose, pdf }) => {
  const { t } = useTranslation()
  const [loading, setLoading] = React.useState(true)

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>PDF to DOCX?</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {loading && <Spinner />}
          <iframe src={pdf} style={{ width: '100%', height: '100%' }} onLoad={() => setLoading(false)} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}