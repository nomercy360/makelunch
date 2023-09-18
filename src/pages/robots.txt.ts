// User-agent: *
// Disallow:

export async function GET({params, request}: { params: any, request: any }) {
    return new Response(
        `User-agent: *
Allow: /`,
        {
            headers: {
                "content-type": "text/plain;charset=UTF-8",
                "cache-control": "max-age=3600"
            }
        }
    )
}