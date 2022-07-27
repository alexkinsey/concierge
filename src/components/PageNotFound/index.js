// STYLES
import { TextButton } from '../../styles/Button.styles';
import { TwoColumn, Container } from '../../styles/Layout.styles';
import { Heading, Title, Text, TextAccent } from '../../styles/Text.styles';

const PageNotFound = () => {
  const handleBackToCustomerSearch = () => {
    window.location.href = '/';
  };

  return (
    <TwoColumn large>
      <Title style={{ gridColumnStart: '1', gridColumnEnd: '3' }}>404 Page not found</Title>
      <Container gap="2">
        <Heading>Sorry, the page you are looking for could not be found</Heading>
        <div>
          <Text>Check the address is typed correctly or navigate back to Customer search.</Text>
          <Text>
            If this issues persists, please raise an issues at <TextAccent>IT@BG</TextAccent>.
          </Text>
        </div>

        <TextButton onClick={handleBackToCustomerSearch}>{'<'} Back to Customer search</TextButton>
      </Container>
    </TwoColumn>
  );
};

export default PageNotFound;
