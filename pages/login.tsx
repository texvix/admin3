import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    else router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl mb-4">Texvix Login</h1>
        <input className="border p-2 w-full mb-4" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="border p-2 w-full mb-4" placeholder="Passwort" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <button className="bg-blue-500 text-white w-full py-2" onClick={handleLogin}>Einloggen</button>
      </div>
    </div>
  );
}