import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'

const Header = () => {

  const { t, i18n } = useTranslation()
  const [top, setTop] = useState(true);
  const [language, setLanguage] = useState("🇺🇸 EN");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng === "en" ? "🇺🇸 EN" : null || lng === "es" ? "🇪🇸 ES" : null || lng == "fr" ? "🇫🇷 FR" : null || lng == "de" ? "🇩🇪 DE" : null)
  }

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <a href="/" className="flex flex-row-reverse gap-2 items-center" aria-label="Cruip">
              <p className="text-lg md:text-xl ld:text-2xl font-bold text-gray-800">Convertoo</p>
              <img src='https://i.ibb.co/V28qr6j/logo-d7f62097.png' width='32' height='32' alt="logo" />
            </a>
          </div>
          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <a href='https://www.buymeacoffee.com/renatok' target="_blank" rel='noreferrer' className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3 p-3 rounded-lg">
                  <span>{t('beer')}</span>
                </a>
              </li>
            </ul>
          </nav>
          <Menu>
            <MenuButton className="btn-sm ml-3 p-3 rounded-lg">
              <span>{language}</span>
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => changeLanguage("en")}>🇺🇸 English</MenuItem>
              <MenuItem onClick={() => changeLanguage("es")}>🇪🇸 Español</MenuItem>
              <MenuItem onClick={() => changeLanguage("fr")}>🇫🇷 Français</MenuItem>
              <MenuItem onClick={() => changeLanguage("de")}>🇩🇪 Deutsch</MenuItem>
            </MenuList>
          </Menu>
          {/* <div className="flex items-center md:order-2">
            <button type="button" data-dropdown-toggle="language-dropdown-menu" className="inline-flex items-center justify-center p-2 text-sm text-gray-500 rounded cursor-pointer ml-2" id="lng-btn">
              {'🇺🇸'} EN
            </button>
            <div className="z-50 my-4 hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow" id="language-dropdown-menu">
              <ul className="py-1" role="none">
                <li>
                  <div className="block px-4 py-2 text-sm text-gray-700" role="menuitem" onClick={() => changeLanguage('en')}>
                    {'🇺🇸'} EN
                  </div>
                </li>
                <li>
                  <div className="block px-4 py-2 text-sm text-gray-700" role="menuitem" onClick={() => changeLanguage('de')}>
                    {'🇩🇪'} DE
                  </div>
                </li>
                <li>
                  <div className="block px-4 py-2 text-sm text-gray-700" role="menuitem" onClick={() => changeLanguage('fr')}>
                    {'🇫🇷'} FR
                  </div>
                </li>
                <li>
                  <div className="block px-4 py-2 text-sm text-gray-700" role="menuitem" onClick={() => changeLanguage('es')}>
                    {'🇪🇸'} ES
                  </div>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </header>
  )
}

export default Header