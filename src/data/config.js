import Raven from 'raven-js';

const sentry_key = '7e516768576511e88e854201c0a8d03a';
const sentry_app = 'reduxtagram';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
