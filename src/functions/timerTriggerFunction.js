const { app } = require('@azure/functions');

app.timer('timerTriggerFunction', {
    schedule: '*/10 * * * * *',
    handler: (myTimer, context) => {
        context.log('Timer function processed request.');
    }
});
