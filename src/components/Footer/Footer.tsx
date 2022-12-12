import { Container } from "./styles";

import reactIcon from "../../assets/react-icon.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>shiva Reddy Kyadari</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          <span>❤️</span>
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/shiva-kumar-reddy-kyadari-9814a7213/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a href="https://github.com/viswa84/" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=+919642755812&text=Hello+Shiva"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a href="https://t.me/Kyadarishivareddy"target="_blank" rel="noreferrer">
          <img src={telegram} alt="telegram" />
        </a>
      </div>
    </Container>
  );
}
