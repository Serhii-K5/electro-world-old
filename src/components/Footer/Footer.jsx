import { useState } from "react";
import { useSelector } from 'react-redux';
import { selectLanguages } from 'redux/selectors';
import Logo from 'components/Logo/Logo';
import MessageModule from "components/MessageModule/MessageModule";
import AdressBar from 'components/AdressBar/AdressBar';
import {
  Container,
  Section,
  NavLinkStyle,
  Span
} from "./Footer.styled";

import lang from "assets/json/language.json";


const Footer = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  
  const onOpenModal = () => {
    setIsModalShown(true);
  };
  
  const onCloseModal = () => {
    setIsModalShown(false);
  }
  const languages = useSelector(selectLanguages);
  return (
    <footer  style={{ marginTop: '25px', backgroundColor: 'var(--text-color-primary-black)' }}>
      <Container style={{ color: 'var(--text-color-white)' }} >
        <Section>
          <div style={{maxWidth: '490px', padding: '0 16px' }}>
            <div style={{ width: '167px' }}>
              <Logo/>
            </div>
            <p style={{paddingTop: '16px'}}>
              {lang[languages].footer_p}
            </p>
            <p style={{paddingTop: '16px'}} > © 2024 Electro world. Всі права захищені</p>
          </div>
          <div style={{padding: '16px'}}>
            <p>
              <b>{lang[languages].footer_mainBar}</b>
            </p>
            <hr />
            <NavLinkStyle to="/">
              <sup>{lang[languages].NavLinkBar_home.toUpperCase()}</sup>
            </NavLinkStyle>
            {/* <NavLinkStyle to="/catalog">
              <sup>{lang[languages].NavLinkBar_catalog.toUpperCase()}</sup>
            </NavLinkStyle> */}
            <NavLinkStyle to="/orders">
              <sup>{lang[languages].NavLinkBar_orders.toUpperCase()}</sup>
            </NavLinkStyle>
            <NavLinkStyle to="/help">
              <sup>{lang[languages].NavLinkBar_help.toUpperCase()}</sup>
            </NavLinkStyle>  
            <NavLinkStyle to="/about_us">
              <sup>{lang[languages].NavLinkBar_aboutUs.toUpperCase()}</sup>
            </NavLinkStyle>
            <NavLinkStyle to="/delivery">
              <sup>{lang[languages].NavLinkBar_delivery.toUpperCase()}</sup>
            </NavLinkStyle>
            <Span onClick={onOpenModal}>
              <sup>{lang[languages].NavLinkBar_message.toUpperCase()}</sup>
            </Span>
          </div>
          <div style={{padding: '16px'}}>
            <p>
              <b>{lang[languages].footer_contacts}</b>
            </p>
            <hr style={{ color: '#FFF' }} />
            <AdressBar />
            <p style={{paddingTop: '16px'}}>{lang[languages].footer_schedule}</p>
            <p style={{paddingLeft: '16px'}}>Пн-Чт:	8:30 - 18:00</p>
            <p style={{paddingLeft: '16px'}}>Пт:	8:30 - 17:00</p>
            <p style={{paddingLeft: '16px'}}>Сб:	Вихідний</p>
            <p style={{paddingLeft: '16px'}}>{lang[languages].footer_Sunday}	9:00 - 17:00</p>
            <p style={{paddingTop: '16px'}}>{lang[languages].footer_comments}</p>
            <p style={{paddingLeft: '16px'}}>Пн-Пт:	10:00 - 12:00</p>
            <p style={{paddingTop: '16px'}}>{lang[languages].footer_address}</p>
          </div>
          <div style={{padding: '16px'}}>
            <p>{lang[languages].footer_account}</p>
            <hr style={{ color: '#FFF' }} />
            <p>{lang[languages].footer_authorization}</p>
          </div>        
        </Section>
      </Container>
      {isModalShown && <MessageModule onClose={onCloseModal} />}
    </footer>
  )
};

export default Footer;