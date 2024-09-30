"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import Swal from 'sweetalert2';

const Auth: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true); // true: login, false: register
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [errorFields, setErrorFields] = useState<string[]>([]);
    const router = useRouter();

    const toggleForm = () => {
        setIsLogin(!isLogin);
        clearForm();
        setErrorFields([]);
    };

    const clearForm = () => {
        setUsername('');
        setEmail('');
        setPassword('');
        setRePassword('');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const errors: string[] = []; 

        if (username === '') errors.push('username');
        if (!isLogin && email === '') errors.push('email');
        if (password === '') errors.push('password');
        if (!isLogin && password !== rePassword) {
            errors.push('rePassword');
            Swal.fire('Error', 'Passwords do not match.', 'error');
            return;
        }

        if (errors.length > 0) {
            setErrorFields(errors);
            Swal.fire('Error', 'Please fill in all required fields.', 'error');
            return;
        }

        Swal.fire(isLogin ? 'Login successful' : 'Registration successful', '', 'success');
        router.push('/');
    };

    return (
        <AuthContainer>
            <AuthForm onSubmit={handleSubmit}>
                <AuthTitle>{isLogin ? 'Sign In' : 'Sign Up'}</AuthTitle>

                <AuthField hasError={errorFields.includes('username')}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </AuthField>

                {!isLogin && (
                    <AuthField hasError={errorFields.includes('email')}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </AuthField>
                )}

                <AuthField hasError={errorFields.includes('password')}>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </AuthField>

                {!isLogin && (
                    <AuthField hasError={errorFields.includes('rePassword')}>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={rePassword}
                            onChange={(e) => setRePassword(e.target.value)}
                        />
                    </AuthField>
                )}

                <AuthButton type="submit">{isLogin ? 'Sign In' : 'Sign Up'}</AuthButton>

                <AuthSwitch onClick={toggleForm}>
                    {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
                </AuthSwitch>
            </AuthForm>
        </AuthContainer>
    );
};

export default Auth;

// Styled Components
const AuthContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden; 
    position: relative; 
    background: url('/images/background.jpg') no-repeat center center/cover;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.5); 
        filter: blur(5px); 
        z-index: 1; 
    }
`;

const AuthForm = styled.form`
    background: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    width: 100%;
    text-align: center;
    position: relative; 
    z-index: 2; 
`;

const AuthTitle = styled.h2`
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
`;

interface AuthFieldProps {
    hasError: boolean;
}

const AuthField = styled.div<AuthFieldProps>`
    margin-bottom: 15px;
    input {
        width: 100%;
        padding: 10px;
        border: 1px solid ${({ hasError }) => (hasError ? 'red' : '#ccc')};
        border-radius: 5px;
        background-color: ${({ hasError }) => (hasError ? '#ffe6e6' : 'white')}; 
    }
`;

const AuthButton = styled.button`
    background: #a0a16a;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
`;

const AuthSwitch = styled.p`
    margin-top: 20px;
    color: #a0a16a;
    cursor: pointer;
    text-decoration: underline;
`;