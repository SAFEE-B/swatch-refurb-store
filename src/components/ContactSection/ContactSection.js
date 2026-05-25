import React, {useRef} from 'react';
import { motion } from 'framer-motion';
import { ContactWrapper, ContactContent, ContactInfo } from './ContactSection.styles';
import { titleVariants, itemVariants } from '../../styles/animations';import { useInView } from 'framer-motion';


const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  return (
    <ContactWrapper id="contact" ref={ref}>
      <ContactContent>
         <motion.h2 variants={titleVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>Get In Touch</motion.h2>
         <motion.p variants={itemVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>Have questions? We'd love to hear from you!</motion.p>
         {/* Add Form or Contact Details Here */}
         <ContactInfo variants={itemVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <p>Email: info@reswatch.com</p>
            <p>Follow us: [Social Media Links]</p>
         </ContactInfo>
      </ContactContent>
    </ContactWrapper>
  );
};
export default ContactSection;