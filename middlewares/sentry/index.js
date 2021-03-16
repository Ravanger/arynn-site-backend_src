const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");

Sentry.init({
  dsn:
    "https://22b6cc02e1d144998b2d69808fb04f5a@o553036.ingest.sentry.io/5679710",
  integrations: [new Tracing.Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
  environment: strapi.config.environment,
});

myUndefinedFunction();

module.exports = (strapi) => {
  return {
    initialize() {
      strapi.app.use(async (ctx, next) => {
        try {
          await next();
        } catch (error) {
          Sentry.captureException(error);
          throw error;
        }
      });
    },
  };
};
