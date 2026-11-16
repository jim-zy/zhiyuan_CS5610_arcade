import type { Actions, PageServerLoad } from './$types';
import { API_URL } from '#lib/server/api.js';
import { redirect, fail, error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals, fetch }) => {
    if (!locals.user) redirect(303, '/login');

    const res = await fetch(API_URL + '/api/games');

    if (!res.ok) {
        const errorData = await res.json();
        error(res.status, 'Could not load games: ' + errorData.error);
    };

    const body = await res.json();
    return {
        waiting: body.waiting,
        mine: body.mine
    };
}

export const actions: Actions = {
    create: async function ({ fetch }) {
        const res = await fetch(API_URL + '/api/games', {
            method: 'POST',
            headers: { 'content-type': 'application/json' }
        });

        if (!res.ok) {
            const errorData = await res.json();
            return fail(res.status, { 
                message: 'Could not create game: ' + errorData.error
            });
        };

        const { id } = await res.json();
        redirect(303, '/games/battleship/' + id);
    },

    join: async function ({ request, fetch }) {
        const form = await request.formData();
        const res = await fetch(
            API_URL + `/api/games/${form.get("id")}/players`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' }
            }
        );

        if (!res.ok) {
            const errorData = await res.json();
            return fail(res.status, { 
                message: 'Could not join game: ' + errorData.error
            });
        };

        redirect(303, `/games/battleship/${form.get('id')}`);
    }
};