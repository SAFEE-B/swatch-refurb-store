import React, {useRef} from 'react';
import { AboutWrapper, AboutContent, AboutTitle, AboutText } from './AboutSection.styles';
import { titleVariants, itemVariants } from '../../styles/animations';import { useInView } from 'framer-motion';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <AboutWrapper id="about" ref={ref}>
      <AboutContent>
        <AboutTitle variants={titleVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          About ReSwatch
        </AboutTitle>
        <AboutText variants={itemVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          We are passionate collectors and skilled technicians dedicated to giving classic Swatch watches a second life. Each watch undergoes a meticulous refurbishment process, ensuring authenticity, functionality, and the vibrant style Swatch is known for. We believe in sustainability and the enduring appeal of these iconic timepieces.
        </AboutText>
        {/* Add more content, maybe images of the process */}
      </AboutContent>
    </AboutWrapper>
  );
};
export default AboutSection;