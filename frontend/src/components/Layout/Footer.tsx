import {
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  Input,
  Stack,
  Text,
  Image
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Stack spacing="8" direction={{ base: "column", md: "row", }} py={{ base: "12", md: "16", }}>
          <Stack direction={{ base: "column-reverse", md: "row" }} spacing={{ base: "12", md: "8", }} justifyContent="space-between" width={'100%'}>
            <Stack direction="row" spacing="8">
              <Stack spacing="3" minW="36" flex="1">
                <Text fontSize="md" fontWeight={600} color="subtle">
                  {t('product')}
                </Text>
                <Stack spacing="3" shouldWrapChildren>
                  <Button variant="link" fontWeight={400}>{t('how-it-works')}</Button>
                  <Button variant="link" fontWeight={400}>{t('pricing')}</Button>
                  <Button variant="link" fontWeight={400}>{t('use-cases')}</Button>
                </Stack>
              </Stack>
              <Stack spacing="3" minW="36" flex="1" textAlign={{ base: "right", md: "left" }}>
                <Text fontSize="md" fontWeight={600} color="subtle">
                  {t('legal')}
                </Text>
                <Stack spacing="3" shouldWrapChildren>
                  <Button variant="link" fontWeight={400}>{t('privacy')}</Button>
                  <Button variant="link" fontWeight={400}>{t('terms')}</Button>
                  <Button variant="link" fontWeight={400}>{t('license')}</Button>
                </Stack>
              </Stack>
            </Stack>
            <Stack spacing="4">
              <Text fontSize="md" color="subtle" fontWeight={600}>{t('newsletter')}</Text>
              <Stack spacing="4" direction={{ base: "column", sm: "row" }} maxW={{ lg: "360px", }}>
                <Input placeholder="Enter your email" type="email" required />
                <Button type="submit" flexShrink={0} fontWeight={500} colorScheme='blue'>
                  Subscribe
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Divider />
        <Stack pt="8" pb="12" justify="space-between" direction={{ base: "column-reverse", md: "row", }} align="center">
          <Text fontSize="sm" color="subtle">
            &copy; {new Date().getFullYear()} {t('copyright')}
          </Text>
          <ButtonGroup variant="ghost">
            <IconButton as="a" href="https://www.linkedin.com/in/renato-kauric" aria-label="LinkedIn" target={'_blank'} icon={<FaLinkedin fontSize="1.25rem" />} />
            <IconButton as="a" href="https://github.com/renatoka/convertoo" aria-label="GitHub" target={'_blank'} icon={<FaGithub fontSize="1.25rem" />} />
          </ButtonGroup>
        </Stack>
      </div>
    </div>
  );
};

export default Footer;
