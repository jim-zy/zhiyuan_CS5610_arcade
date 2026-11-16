import type { Actions } from './$types';
import { API_URL } from '#lib/server/api.js';
import { redirect } from '@sveltejs/kit';

export const actions: Actions = {
    default: async function ({ fetch, cookies }) {
        await fetch(API_URL + '/api/auth/logout', { method: 'POST' });
        cookies.delete('sid', { path: '/' });
        redirect(303, '/login');
    }
};