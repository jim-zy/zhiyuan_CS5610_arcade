import type { Actions } from './$types';
import { API_URL } from '#lib/server/api.js';
import { redirect, fail } from '@sveltejs/kit';

export const actions: Actions = {
  default: async function ({ request, fetch, cookies }) {
    const form = await request.formData();
    const res = await fetch(API_URL + '/api/auth/signup', {
    method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ 
            email: form.get('email'),
            username: form.get('username'),
            password: form.get('password') })
    });

    if (!res.ok) {
        const errorData = await res.json();
        return fail(res.status, { 
            message: errorData.error,
            email: form.get('email'),
            username: form.get('username')
        });
    }

    // call login page with same credentials
    const loginRes = await fetch(API_URL + '/api/auth/login', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email: form.get('email'), password: form.get('password') })
    });
    const { sessionId } = await loginRes.json();
    cookies.set('sid', sessionId, {
        path: '/', httpOnly: true, secure: true, sameSite: 'lax', maxAge: 604800
    });
    redirect(303, '/games/battleship');
  }
};
