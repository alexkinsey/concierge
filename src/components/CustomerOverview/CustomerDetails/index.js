import { Container } from '../../../styles/Layout.styles';
import { Heading } from '../../../styles/Text.styles';
import { TextButton } from '../../../styles/Button.styles';
import { HeadingAligner } from './index.styles';

export const CustomerDetails = ({ customer }) => {
  return (
    <Container>
      <HeadingAligner>
        <Heading>Customer details</Heading>
        <TextButton>Edit &gt;</TextButton>
      </HeadingAligner>
    </Container>
  );
};
