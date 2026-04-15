import React, { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Login failed');
      }

      const data = await res.json();
      alert(`Welcome back, ${data.user.email}!`);
      // Here we would normally save the token and redirect
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6] px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
        <h2 className="text-3xl font-serif font-bold text-[#4A3728] text-center mb-6">Welcome Back</h2>
        <p className="text-center text-gray-600 mb-8">Login to manage your coffee orders</p>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-semibold text-gray-700">Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A668] outline-none" 
              placeholder="email@example.com"
              required 
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-semibold text-gray-700">Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A668] outline-none" 
              placeholder="••••••••"
              required 
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button type="submit" className="w-full bg-[#4A3728] text-white py-3 rounded-lg font-bold hover:bg-[#3a2b22] transition-colors duration-300">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}