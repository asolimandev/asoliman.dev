import React from 'react';
import Section from '../section';
import SummaryItem from '../summary-item';
const SectionAwards= ({ awards }) => {
  if (!awards.length) return null;
  return (
    <Section title="Awards and Honors">
      {awards.map((awards) => (
        <SummaryItem
          key={awards.name}
          name={awards.name}
          description={awards.description}
          link={awards.link}
        />
      ))}
    </Section>
  );
};
export default SectionAwards;