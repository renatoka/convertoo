import { Alert, AlertIcon, AlertTitle, AlertDescription, SlideFade, CloseButton } from "@chakra-ui/react"

const FormatError = ({ error }) => {
  return (
    <SlideFade in={error}>
      <Alert status="error" variant="subtle" flexDirection="row" alignItems="center" justifyContent="center" textAlign="center" height="50px">
        <AlertIcon />
        <AlertTitle>
          Error
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          File format is not supported.
        </AlertDescription>
      </Alert>
    </SlideFade>
  )
}

export default FormatError
