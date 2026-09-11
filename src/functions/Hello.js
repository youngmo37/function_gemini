const { app } = require('@azure/functions');

app.http('Hello', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'this update is from branch feature/hello-update, and this is pr 2nd test';

        return { body: `Hello, ${name}!` };
    }
});
