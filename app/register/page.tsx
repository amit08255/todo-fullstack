'use client';

import {LoginForm} from "../../components/login/LoginForm";
import {useLogin} from "../../hooks/auth/useLogin";
import {Text, Link as ChakraLink} from "@chakra-ui/react";

export default function RegisterPage() {
    const {
        email, password, handleEmailChange, handlePasswordChange, handleSubmit,
    } = useLogin();

    return (
        <LoginForm
            title="Create an account"
            email={email}
            password={password}
            onEmailChange={handleEmailChange}
            onPasswordChange={handlePasswordChange}
            onSubmit={handleSubmit}
        >
            <Text textStyle="sm" color="fg.muted" textAlign="center">
                Already have an account? <ChakraLink href="/login">Login here</ChakraLink>
            </Text>
        </LoginForm>
    );
  }