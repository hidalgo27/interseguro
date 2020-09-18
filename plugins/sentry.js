import Vue from "vue";
import * as Sentry from "@sentry/browser";
import { Vue as VueIntegration } from "@sentry/integrations";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "https://a5b642cd267d4d1093e685e79369113b@o449106.ingest.sentry.io/5431501",
  integrations: [
    new VueIntegration({
      Vue,
      tracing: true,
    }),
    new Integrations.BrowserTracing(),
  ],
  tracesSampleRate: 1,
});