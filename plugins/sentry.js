import Vue from "vue";
import * as Sentry from "@sentry/browser";
import { Vue as VueIntegration } from "@sentry/integrations";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "https://c5b74a07811346bd86266ef3885a71c1@o462227.ingest.sentry.io/5477682",
  environment: "production",
  integrations: [
    new VueIntegration({
      Vue,
      tracing: true,
    }),
    new Integrations.BrowserTracing(),
  ],
  tracesSampleRate: 1,
});