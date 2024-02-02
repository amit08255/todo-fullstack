'use client';

import {LoginForm} from "../../components/login/LoginForm";
import {useLogin} from "../../hooks/auth/useLogin";
import {Text, Link as ChakraLink} from "@chakra-ui/react";

export default function LoginPage() {
    const {
        email, password, handleEmailChange, handlePasswordChange, handleSubmit,
    } = useLogin();

    return (
        <LoginForm
            title="Log in to your account"
            email={email}
            password={password}
            onEmailChange={handleEmailChange}
            onPasswordChange={handlePasswordChange}
            onSubmit={handleSubmit}
        >
            <Text textStyle="sm" color="fg.muted" textAlign="center">
                Need a new account? <ChakraLink href="/register">Register here</ChakraLink>
            </Text>
        </LoginForm>
    );
  }