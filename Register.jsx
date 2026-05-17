import React, { useState } from 'react';

const Register = () => {
    const [form, setForm] = useState({ username: '', first_name: '', last_name: '', email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/djangoapp/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Nom d'utilisateur" onChange={e => setForm({...form, username: e.target.value})} />
            <input placeholder="Prénom" onChange={e => setForm({...form, first_name: e.target.value})} />
            <input placeholder="Nom" onChange={e => setForm({...form, last_name: e.target.value})} />
            <input placeholder="Email" type="email" onChange={e => setForm({...form, email: e.target.value})} />
            <input placeholder="Mot de passe" type="password" onChange={e => setForm({...form, password: e.target.value})} />
            <button type="submit">S'inscrire</button>
        </form>
    );
};

export default Register;
