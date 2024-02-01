import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import {PasswordField} from "./PasswordField";
import {ChangeEvent, ReactNode} from "react";

type Props = {
    title: string;
    email: string;
    password: string;
    onEmailChange: (e:ChangeEvent) => void;
    onPasswordChange: (e:ChangeEvent) => void;
    onSubmit: () => void;
    isDisabled: boolean;
    children?: ReactNode,
};

export const LoginForm = ({
    title,
    email,
    password,
    onEmailChange,
    onPasswordChange,
    onSubmit,
    isDisabled,
    children,
}:Props) => (
  <Box
      h="100vh"
      bgGradient={{ sm: 'linear(to-r, blue.600, blue.400)' }}
      py={{ base: '12', md: '24' }}
  >
    <Container
      maxW="md"
      py={{ base: '0', sm: '8' }}
      px={{ base: '4', sm: '10' }}
      bg={{ base: 'transparent', sm: 'bg.surface' }}
      boxShadow={{ base: 'none', sm: 'xl' }}
      borderRadius={{ base: 'none', sm: 'xl' }}
    >
      <Stack spacing="8">
        <Stack spacing="6" align="center">
          <Stack spacing="3" textAlign="center">
            <Heading size="xs">{title}</Heading>
            <Text color="fg.muted">Start getting things done faster</Text>
          </Stack>
        </Stack>
        <Stack spacing="6">
          <Stack spacing="4">
            <Input type="email" value={email} placeholder="Enter your email" onChange={onEmailChange} />
            <PasswordField value={password} onChange={onPasswordChange} />
            <Button onClick={onSubmit} isDisabled={isDisabled}>Continue with email</Button>
          </Stack>
        </Stack>
        {children}
      </Stack>
    </Container>
  </Box>
);

LoginForm.displayName = 'LoginForm';

LoginForm.defaultProps = {
    children: null,
};


