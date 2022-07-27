// STYLES
import { Container, Aligner } from './index.styles';
import { TextLarger } from '../../../styles/Text.styles';

const InfoWarningCard = ({ type, message }) => {
  return (
    <>
      {type === 'info' ? (
        <Container info>
          <Aligner>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="var(--infoDark)" viewBox="0 0 16 16">
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
            <TextLarger noSpace>{message}</TextLarger>
          </Aligner>
        </Container>
      ) : (
        type === 'warning' && (
          <Container warning>
            <Aligner>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="var(--warningDark)"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
              <TextLarger noSpace>{message}</TextLarger>
            </Aligner>
          </Container>
        )
      )}
    </>
  );
};

export default InfoWarningCard;
