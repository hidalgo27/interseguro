import Vue from "vue";
import * as Sentry from "@sentry/vue";
import * as Sentry2 from '@sentry/browser';
import { Integrations } from "@sentry/tracing";


Sentry.init({
  Vue,
  dsn: "https://c5b74a07811346bd86266ef3885a71c1@o462227.ingest.sentry.io/5477682",
  release: "v1",
  integrations: [new Integrations.BrowserTracing()],
  
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  tracingOptions: {
    trackComponents: true,
  },
  autoSessionTracking: false,
  /*
  ENTORNOS
  */
 environment: process.env.environment,

 /*FEEDBACK USER*/
 
  // beforeSend(event, hint) {
  //   if (event.exception) {
  //     Sentry2.showReportDialog({ eventId: event.event_id });
  //   }
  //   return event;
  // },
  
});

