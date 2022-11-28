import { Alert, AlertIcon, AlertTitle, AlertDescription, SlideFade } from "@chakra-ui/react"

const SizeError = ({ error }) => {
  return (
    <SlideFade in={error} direction="top">
      <Alert status="error" variant="subtle" flexDirection="row" alignItems="center" justifyContent="center" textAlign="center" height="50px" className="rounded-b-lg">
        <AlertIcon />
        <AlertTitle>
          Error
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Max file size is 10MB.
        </AlertDescription>
      </Alert>
    </SlideFade>
  )
}

export default SizeError
