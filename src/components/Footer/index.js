import React from 'react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.css';

import { animeScroll as scroll } from 'react-scroll';
import { SiTiktok } from 'react-icons/si';
import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIconLink,
  SocialIcons,
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle> About Us</FooterLinkTitle>
                <FooterLink to="/signin">About Us</FooterLink>
                <FooterLink to="/signin">How it Works</FooterLink>
                {/* <FooterLink to="/signin">Testemonial</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink> */}
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle> Social Media</FooterLinkTitle>
                <a
                  className="aref"
                  href="https://www.instagram.com/woodlandkb.co.uk/?hl=en"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
                <FooterLink to="/signin">How it Works</FooterLink>
                {/* <FooterLink to="/signin">Testemonial</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink> */}
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle> About Us</FooterLinkTitle>
                <FooterLink to="/signin">About Us</FooterLink>
                <FooterLink to="/signin">The process</FooterLink>
                {/* <FooterLink to="/signin">Testemonial</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink> */}
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle> We Are Hiring!</FooterLinkTitle>
                <FooterLink to="/signin">Email Us</FooterLink>
                <FooterLink to="/signin">How it Works</FooterLink>
                {/* <FooterLink to="/signin">Testemonial</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink> */}
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                Woodland{' '}
              </SocialLogo>
              <WebsiteRights>
                Woodland ©{new Date().getFullYear()}
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href="https://www.instagram.com/woodlandkb.co.uk/?hl=en"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                {/* <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Tik-Tok">
                  <SiTiktok />
                </SocialIconLink> */}
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
