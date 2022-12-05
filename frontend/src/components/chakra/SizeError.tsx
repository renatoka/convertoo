import { Alert, AlertIcon, AlertTitle, AlertDescription, SlideFade } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import React from "react"

const SizeError = ({ error }) => {

  const { t } = useTranslation()

  return (
    <SlideFade in={error}>
      <Alert status="error" variant="subtle" flexDirection="row" alignItems="center" justifyContent="center" textAlign="center" height="50px" className="rounded-b-lg">
        <AlertIcon />
        <AlertTitle>
          {t('error')}
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          {t('size-error')}
        </AlertDescription>
      </Alert>
    </SlideFade>
  )
}

export default SizeError
