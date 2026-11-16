import { fail, redirect} from '@sveltejs/kit';
import { API_URL } from '#lib/server/api.js';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async function ({ request, fetch, cookies }) {
    const form = await request.formData();
    const res = await fetch(API_URL + '/api/auth/login', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email: form.get('email'), password: form.get('password') })
    });
    if (!res.ok) return fail(res.status, { 
        message: 'Invalid email or password',
        email: form.get('email')
    });

    const { sessionId } = await res.json();
    cookies.set('sid', sessionId, {
        path: '/', httpOnly: true, secure: true, sameSite: 'lax', maxAge: 604800
    });

    redirect(303, '/games/battleship');
  }
};