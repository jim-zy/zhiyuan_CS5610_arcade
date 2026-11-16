import type { RequestHandler } from './$types';
import { API_URL } from '#lib/server/api.js';

export const POST: RequestHandler = async ({ params, request, fetch }) => {
    const {x, y} = await request.json();
    const res = await fetch(API_URL + `/api/games/${params.id}/shots`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ x, y })
    });
    
    return Response.json(await res.json(), { status: res.status });
};