import { TextButton } from '../../styles/Button.styles';
import { TwoColumnBS, Container } from '../../styles/Layout.styles';
import { Heading, Title, Text, TextAccent } from '../../styles/Text.styles';

const PageNotFound = () => {
  const handleBackToCustomerSearch = () => {
    window.location.href = '/';
  };

  return (
    <TwoColumnBS>
      <Title style={{ gridColumnStart: '1', gridColumnEnd: '3' }}>404 Page not found</Title>
      <Container gap="2">
        <Heading>The page you are looking for does not exist.</Heading>
        <Text>Check the address is typed correctly or navigate back to Customer search.</Text>
        <Text>If this issues persists, please raise an issues at <TextAccent>IT@LBG</TextAccent>.</Text>
        <TextButton onClick={handleBackToCustomerSearch}>{'<'} Back to Customer search</TextButton>
      </Container>
    </TwoColumnBS>
  );
};

export default PageNotFound;