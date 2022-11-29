import { Alert, AlertIcon, AlertTitle, AlertDescription, SlideFade, CloseButton } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"

const FormatError = ({ error }) => {

  const { t } = useTranslation()

  return (
    <SlideFade in={error}>
      <Alert status="error" variant="subtle" flexDirection="row" alignItems="center" justifyContent="center" textAlign="center" height="50px" className="rounded-b-lg">
        <AlertIcon />
        <AlertTitle>
          {t('error')}
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          {t('format-error')}
        </AlertDescription>
      </Alert>
    </SlideFade>
  )
}

export default FormatError
