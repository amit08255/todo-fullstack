import {useAuthForm} from "./useAuthForm";

export const useRegister = () => {
    const { email, password, handleEmailChange, handlePasswordChange } = useAuthForm();

    const handleSubmit = () => {
        console.log('Email: ', email);
        console.log('Password: ', password);
    };

    return {
        email, password, handleEmailChange, handlePasswordChange, handleSubmit,
    };
};
