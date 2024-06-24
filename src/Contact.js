import React from 'react';
import './Contact.css';
import { FcPhone } from "react-icons/fc";
import { FcAddressBook } from "react-icons/fc";

function Contact() {
  return (
    <form class="form">
  <h2>CONTÁCTENOS</h2>
  <p type="Nombre:"><input placeholder="ingrese su nombre.."></input></p>
  <p type="Email:"><input placeholder="por favor ingrese su email.."></input></p>
  <p type="Mensaje:"><input placeholder="escriba su consulta.."></input></p>
  <button>enviar</button>
  <div class="c1" >
    <span class="fa fa-phone"></span><FcPhone /> +569 92930308:
    <span class="fa fa-envelope-o"></span> <FcAddressBook />  dppjtoledo@gmail.com
  </div>
</form>
  );
}

export default Contact;
