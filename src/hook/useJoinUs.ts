const JOIN_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeckE6-2KAqW2-zqUMMOlN1LhGTMPIFmPWRTUZk4GKKis-hgg/viewform?usp=sf_link';

export const useJoinUs = () => {
  const handleJoinUs = () => {
    window.open(JOIN_FORM_URL);
  };

  return { handleJoinUs };
};
