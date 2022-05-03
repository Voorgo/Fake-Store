import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  return (
    <ContactPage>
      <ContactLink href="https://github.com/Voorgo" target="_blank">
        <FontAwesomeIcon icon={faGithub} size="7x" color="black" />
      </ContactLink>
      <ContactLink href="#">
        <FontAwesomeIcon icon={faFacebook} size="7x" color="black" />
      </ContactLink>
      <ContactLink href="#">
        <FontAwesomeIcon icon={faTwitter} size="7x" color="black" />
      </ContactLink>
      <ContactLink href="#">
        <FontAwesomeIcon icon={faInstagram} size="7x" color="black" />
      </ContactLink>
    </ContactPage>
  );
};

const ContactPage = styled.div`
  height: calc(100vh - 8rem);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;

const ContactLink = styled.a`
  transition: transform 200ms ease;
  display: inline-block;
  animation: 600ms fadeIn forwards;

  &:hover {
    transform: scale(1.14);
  }
`;

export default Contact;
