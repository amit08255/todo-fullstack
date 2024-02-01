'use client';

import {LoginForm} from "../../components/login/LoginForm";
import {useLogin} from "../../hooks/auth/useLogin";
import Link from "next/link";
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
                Already have an account? <ChakraLink><Link href="/login">Login here</Link></ChakraLink>
            </Text>
        </LoginForm>
    );
  }