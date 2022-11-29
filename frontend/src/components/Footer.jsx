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
    // <footer className="bg-gray-100">
    //   <div className="max-w-6xl mx-auto px-4 sm:px-6">
    //     <div className="flex flex-wrap items-center md:justify-between justify-between py-6 md:py-12">
    //       <div className="w-full md:w-4/12 px-4 text-center">
    //         <div className="text-base text-gray-600">
    //           © {new Date().getFullYear()} {t('footer')}
    //           <span className="text-blue-600">
    //             <a href="https://www.linkedin.com/in/renato-kauric" target={'__blank'}>Renato</a>
    //           </span>
    //         </div>
    //       </div>
    //       <div className="w-full md:w-8/12 px-4">
    //         <ul className="flex flex-wrap list-none md:justify-end justify-center gap-3">
    //           <li>
    //             <a href="https://github.com/renatoka" target={'__blank'}>
    //               <FaGithub className="text-gray-600 hover:text-gray-900 text-lg leading-lg" />
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Stack spacing="8" direction={{ base: "column", md: "row", }} py={{ base: "12", md: "16", }}>
          <Stack direction={{ base: "column-reverse", md: "row" }} spacing={{ base: "12", md: "8", }} justifyContent="space-between" width={'100%'}>
            <Stack direction="row" spacing="8">
              <Stack spacing="3" minW="36" flex="1">
                <Text fontSize="md" fontWeight={600} color="subtle">
                  Product
                </Text>
                <Stack spacing="3" shouldWrapChildren>
                  <Button variant="link" fontWeight={400}>How it works</Button>
                  <Button variant="link" fontWeight={400}>Pricing</Button>
                  <Button variant="link" fontWeight={400}>Use Cases</Button>
                </Stack>
              </Stack>
              <Stack spacing="3" minW="36" flex="1" textAlign={{ base: "right", md: "left" }}>
                <Text fontSize="md" fontWeight={600} color="subtle">
                  Legal
                </Text>
                <Stack spacing="3" shouldWrapChildren>
                  <Button variant="link" fontWeight={400}>Privacy</Button>
                  <Button variant="link" fontWeight={400}>Terms</Button>
                  <Button variant="link" fontWeight={400}>License</Button>
                </Stack>
              </Stack>
            </Stack>
            <Stack spacing="4">
              <Text fontSize="md" color="subtle" fontWeight={600}>Stay up to date</Text>
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
            &copy; {new Date().getFullYear()} Convertoo - All Rights Reserved.
          </Text>
          <ButtonGroup variant="ghost">
            <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin fontSize="1.25rem" />} />
            <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
          </ButtonGroup>
        </Stack>
      </div>
    </div>
  );
};

export default Footer;
