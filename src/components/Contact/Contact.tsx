import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>If you want to talk to me, don't hesitate to call me or send me a message.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="kyadarishivareddy1430@gmail.com">kyadarishivareddy1430@gmail</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Phone No" />
          <a href="tel:+91 9642755812">(+91) 9642755812</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}