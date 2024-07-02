"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Metadata } from 'next';
import GrupoSurLogo from '../../ui/gruposur-logo';
import LoginForm from '@/app/ui/loginForm/loginForm';
import { Box } from '@mui/material';

/*
export const metadata: Metadata = {
  title: 'LogIn',
};*/
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
          <Box sx={{boxShadow:'0px 7px 30px 0px rgba(8, 94, 162, 0.9)', margin:0.5, backgroundColor:'#1a97f5',borderRadius: '7px', padding:'10%' }}>
            <GrupoSurLogo />
          </Box>
        <LoginForm/>
      </div>
    </main>
  );
}
/*
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const response = await fetch('http://localhost:8080/api/v1/auth/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      router.push('/reservas');
    } else {
      alert('Usuario o contraseña incorrecta');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;*/
