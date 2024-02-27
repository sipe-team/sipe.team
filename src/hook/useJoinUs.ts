const JOIN_FORM_URL =
  //2기모집 폼 : 'https://docs.google.com/forms/d/e/1FAIpQLSeckE6-2KAqW2-zqUMMOlN1LhGTMPIFmPWRTUZk4GKKis-hgg/viewform?usp=sf_link';
  //3기 정보수집 폼
  'https://forms.gle/K2DiBkmJbhSM7MAx9';

export const useJoinUs = () => {
  const handleJoinUs = () => {
    window.open(JOIN_FORM_URL);
  };

  return { handleJoinUs };
};
