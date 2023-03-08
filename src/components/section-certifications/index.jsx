import React from 'react';
import Section from '../section';
import SummaryItem from '../summary-item';
const SectionCertifications = ({ certifications }) => {
  if (!certifications.length) return null;
  return (
    <Section title="Certifications">
      {certifications.map((certifications) => (
        <SummaryItem
          key={certifications.name}
          name={certifications.name}
          description={certifications.description}
          link={certifications.link}
        />
      ))}
    </Section>
  );
};
export default SectionCertifications;