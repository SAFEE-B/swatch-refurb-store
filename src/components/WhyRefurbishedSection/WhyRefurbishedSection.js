// src/components/WhyRefurbishedSection/WhyRefurbishedSection.js
import React from 'react';
import { SectionWrapper, ContentWrapper, SectionTitle, PointsGrid, PointItem, PointTitle, PointText } from './WhyRefurbishedSection.styles';
import { sectionVariants, titleVariants, itemVariants } from '../../styles/animations';
// You might want icons from react-icons here
import { FaRecycle, FaGem, FaWrench, FaTags } from 'react-icons/fa';
import { motion } from 'framer-motion';
const points = [
    { icon: <FaRecycle size={30}/>, title: "Sustainable Style", text: "Give iconic designs a second life and make an eco-conscious choice. Less waste, more wrist-candy!" },
    { icon: <FaGem size={30}/>, title: "Rare & Vintage", text: "Discover discontinued models and unique gems from the past that you won't find new." },
    { icon: <FaWrench size={30}/>, title: "Expertly Restored", text: "Each watch is meticulously inspected, cleaned, and repaired by specialists to ensure full functionality." },
    { icon: <FaTags size={30}/>, title: "Affordable Cool", text: "Get that sought-after Swatch look and quality craftsmanship at a fraction of the original or collector's price." },
];

const WhyRefurbishedSection = () => {
  return (
    <SectionWrapper
         variants={sectionVariants}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.3 }}
    >
      <ContentWrapper>
        <SectionTitle variants={titleVariants}>Why Choose Refurbished?</SectionTitle>
        <PointsGrid>
            {points.map((point, index) => (
                <PointItem key={index} variants={itemVariants}>
                     <motion.div style={{ marginBottom: '1rem', color: 'var(--theme-colors-accent, #FFC300)' }} variants={itemVariants}>{point.icon}</motion.div>
                     <PointTitle variants={itemVariants}>{point.title}</PointTitle>
                     <PointText variants={itemVariants}>{point.text}</PointText>
                </PointItem>
            ))}
        </PointsGrid>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default WhyRefurbishedSection;