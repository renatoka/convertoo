import { Alert, AlertIcon, AlertTitle, AlertDescription, SlideFade } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import React from "react";

export const UploadPopup = ({ error }) => {
  const { t } = useTranslation()

  return (
    error === "type" ? (
      <SlideFade in={error === "type"}>
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
    ) : error === "size" ? (
      <SlideFade in={error === "size"}>
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
      : error === "success" ? (
        <SlideFade in={error === "success"}>
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
      ) : null
  )
}