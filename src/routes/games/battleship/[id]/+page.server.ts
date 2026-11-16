import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { API_URL } from '#lib/server/api.js';


export const load: PageServerLoad = async ({ params, fetch }) => {
    const res = await fetch(API_URL + `/api/games/${params.id}`);
    const body = await res.json();
    if (!res.ok) error(res.status, 'Could not load game: ' + body.error);

    return { game: body };
};