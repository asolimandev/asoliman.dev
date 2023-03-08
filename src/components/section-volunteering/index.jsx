import React from 'react';
import Section from '../section';
import SummaryItem from '../summary-item';
const SectionVolunteering = ({ volunteering }) => {
  if (!volunteering.length) return null;
  return (
    <Section title="Volunteering">
      {volunteering.map((volunteering) => (
        <SummaryItem
          key={volunteering.name}
          name={volunteering.name}
          description={volunteering.description}
          link={volunteering.link}
        />
      ))}
    </Section>
  );
};
export default SectionVolunteering;