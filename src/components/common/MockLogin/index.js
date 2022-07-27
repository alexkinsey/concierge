import React from 'react';
import { PrimaryButton } from '../../../styles/Button.styles';
import { Field, FieldGroup, Form, Label } from '../../../styles/Form.styles';
import { TwoColumnBS, Container, Separator } from '../../../styles/Layout.styles';
import { Heading, Text, TextLarger, Title, TextAccent } from '../../../styles/Text.styles';

const MockLogin = () => {
  return (
    <TwoColumnBS>
      <Title style={{ gridColumnStart: '1', gridColumnEnd: '3' }}>Employee Log in</Title>

      <Container gap={1}>
        <Heading>Please use your details to log in</Heading>

        <Form>
          <FieldGroup>
            <Label>Username</Label>
            <Field type="email" placeholder="Your employee email address" />
          </FieldGroup>
          <FieldGroup>
            <Label>Password</Label>
            <Field type="password" placeholder="Please enter your password" />
          </FieldGroup>
          <PrimaryButton>Log in</PrimaryButton>
        </Form>
        <Separator />
        <div>
          <TextLarger>Need Help?</TextLarger>
          <Text>
            If you're having trouble logging in, please call on 0300 111 2222. Lines are open Monday to Friday, 9am-5pm.
          </Text>
          <p></p>
          <Text>
            You can also raise an issues at <TextAccent>IT@BG</TextAccent>.
          </Text>
        </div>
      </Container>
    </TwoColumnBS>
  );
};

export default MockLogin;
