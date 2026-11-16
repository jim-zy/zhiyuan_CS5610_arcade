import { API_URL } from '#lib/server/api.js';
import type { Handle, HandleFetch } from '@sveltejs/kit/hooks';

export const handle: Handle = async ({ event, resolve }) => {
    event.locals.user = null; // logout user by default
    if (event.cookies.get('sid')) {
        const res = await event.fetch(API_URL + '/api/auth/me');
        if (res.ok) event.locals.user = (await res.json()).user;
        if (res.status === 401) event.cookies.delete('sid', { path: '/' }); // delete stale sid
    }

    return await resolve(event);
};

export const handleFetch: HandleFetch = async ({ event, request, fetch }) => {
    const sid = event.cookies.get('sid');
    if (sid && request.url.startsWith(API_URL)) {
        request.headers.set('Authorization', 'Bearer ' + sid);
    };
    return fetch(request);
}
