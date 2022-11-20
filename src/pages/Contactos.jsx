import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { ContactForm } from "../components/contact/ContactForm";
import { Preguntas } from "../components/contact/Preguntas";

import { Footer } from "../components/footer/Footer";
import { Navbar3 } from "../components/Navbar/Navbar3";

export const Contactos = () => {
  return (
    <>
      <Navbar3 />
      <ContactForm />
      <Preguntas />
      <Footer />
    </>
  );
};
