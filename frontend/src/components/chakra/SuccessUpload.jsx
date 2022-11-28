import { Alert, AlertIcon, AlertTitle, AlertDescription, SlideFade } from "@chakra-ui/react"

const SuccessUpload = ({ success }) => {

  return (
    <SlideFade in={success}>
      <Alert status="success" variant="subtle" flexDirection="row" alignItems="center" justifyContent="center" textAlign="center" height="50px" className="rounded-b-lg">
        <AlertIcon />
        <AlertTitle>
          Success
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          File is being converted. Hold on tight!
        </AlertDescription>
      </Alert>
    </SlideFade>
  )
}

export default SuccessUpload
