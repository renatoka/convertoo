import { Alert, AlertIcon, AlertTitle, AlertDescription, SlideFade } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"

const SuccessUpload = ({ success }) => {

  const { t } = useTranslation()

  return (
    <SlideFade in={success}>
      <Alert status="success" variant="subtle" flexDirection="row" alignItems="center" justifyContent="center" textAlign="center" height="50px" className="rounded-b-lg">
        <AlertIcon />
        <AlertTitle>
          {t('success')}
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          {t('success-subheading')}
        </AlertDescription>
      </Alert>
    </SlideFade>
  )
}

export default SuccessUpload
