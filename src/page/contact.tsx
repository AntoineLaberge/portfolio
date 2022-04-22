import React from 'react';
import styled from '@emotion/styled';
import ContactCard from '../component/contact-card';
import ProfessionnalLinksCard from '../component/professionnal-links-card';

const Container = styled.div`
  text-align: center;
`;

const Contact: React.FC = () => {
  return (
    <Container>
      <ContactCard />
      <ProfessionnalLinksCard />
    </Container>
  );
};

export default Contact;
