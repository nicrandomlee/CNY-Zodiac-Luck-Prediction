export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Clean up the URL only for the logging or internal logic if needed
    // Fetch the asset from the bound ASSETS namespace
    let response = await env.ASSETS.fetch(request);

    // SPA support: if asset is not found (404) and it's a navigation request (usually no file extension),
    // serve index.html.
    if (response.status === 404 && !url.pathname.includes('.')) {
      const indexRequest = new Request(new URL('/index.html', request.url), request);
      response = await env.ASSETS.fetch(indexRequest);
    }

    return response;
  },
};
