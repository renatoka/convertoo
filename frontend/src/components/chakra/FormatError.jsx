import { Alert, AlertIcon, AlertTitle, AlertDescription, SlideFade, CloseButton } from "@chakra-ui/react"
import { useState } from "react"

const FormatError = ({ error }) => {
  return (
    <SlideFade in={error} offsetY="20px">
      <Alert status="error" variant="subtle" flexDirection="row" alignItems="center" justifyContent="center" textAlign="center" height="50px">
        <AlertIcon />
        <AlertTitle>
          Error
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          File format is not supported
        </AlertDescription>
      </Alert>
    </SlideFade>
  )
}

export default FormatError
