import ReactGA from 'react-ga';

export const pageViewGA = () => {
  const gaTrackingId = import.meta.env.GA_TRACKING_ID;
  if (!gaTrackingId) return;
  ReactGA.initialize(gaTrackingId, { debug: true });
  ReactGA.pageview(window.location.pathname);
};
