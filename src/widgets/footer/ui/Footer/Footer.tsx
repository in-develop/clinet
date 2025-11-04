import { Contacts } from "../Contacts";
import { FooterBottom } from "../FooterBottom";
import { Navigation } from "../Navigation";
import { Newsletter } from "../Newsletter";

const Footer = () => {
  return (
    <footer>
      <Contacts />
      <Newsletter />
      <Navigation />
      <FooterBottom />
    </footer>
  );
};

export { Footer };
