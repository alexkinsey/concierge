import React from 'react';
import { PrimaryButton } from '../../../styles/Button.styles';
import { Field, FieldGroup, Form, Label } from '../../../styles/Form.styles';
import { TwoColumn, Container, Separator } from '../../../styles/Layout.styles';
import { Heading, Text, TextLarger, Title, TextAccent } from '../../../styles/Text.styles';

const MockLogin = () => {
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    window.location.href = '/';
  };
  return (
    <TwoColumn large>
      <Title style={{ gridColumnStart: '1', gridColumnEnd: '3' }}>Banking Group employee login</Title>

      <Container
        style={{
          background: 'linear-gradient(-45deg, rgb(180, 30, 30) 0%, rgba(237,130,133,1) 150%)',
          height: '88%',
        }}
      >
        <Title style={{ color: 'var(--white)', margin: 'auto', fontSize: '80px' }}>Welcome back!</Title>

        <Separator
          style={{ color: 'var(--white)', margin: '-100px auto auto auto', width: '15%', borderBottom: '8px solid' }}
        />

        <TextLarger style={{ color: 'var(--white)', margin: '-90px auto auto auto' }}>
          This is a working prototype of Concierge.
        </TextLarger>
        <Text style={{ color: 'var(--white)', margin: '-115px auto auto auto' }}>
          Not all features are implemented and finalised. Please report any issues to IT@BG.
        </Text>
        <Text style={{ color: 'var(--white)' }}>V0.12.8</Text>
      </Container>

      <Container gap={1}>
        <Heading>Please use your details to log in</Heading>

        <Form onSubmit={handleLoginSubmit}>
          <FieldGroup>
            <Label>Username</Label>
            <Field type="email" placeholder="Your employee email address" required />
          </FieldGroup>
          <FieldGroup>
            <Label>Password</Label>
            <div>
              <Field style={{ width: '252px' }} type="password" placeholder="Please enter your password" required />
              <Field style={{ width: '40px', textAlign: 'center' }} placeholder="show" disabled />
            </div>
          </FieldGroup>
          <PrimaryButton>Log in</PrimaryButton>
        </Form>
        <Separator />
        <div>
          <TextLarger>Need Help?</TextLarger>
          <Text>
            If you're having trouble logging in, please call on <TextAccent>0300 111 2222</TextAccent>. Lines are open
            Monday to Friday, 9am - 6pm.
          </Text>
          <p></p>
          <Text>
            You can also raise an issues at <TextAccent>IT@BG</TextAccent>.
          </Text>
        </div>
      </Container>
    </TwoColumn>
  );
};

export default MockLogin;
