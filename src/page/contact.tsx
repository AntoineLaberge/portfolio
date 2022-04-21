import React from 'react';
import styled from '@emotion/styled';
import ContactCard from '../component/contact-card';

const Container = styled.div`
  text-align: center;
`;

const Contact: React.FC = () => {
  return (
    <Container>
      <ContactCard />
    </Container>
  );
};

export default Contact;
