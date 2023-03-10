import useLanguageSelector from "./useLanguageSelector";

export const useLanguageCode = () => {
  const { activeLanguage } = useLanguageSelector();

  if (activeLanguage === "ar-SY") return "ar";
  return activeLanguage;
};

export const useBackendLanguageCode = () => {
  const { activeLanguage } = useLanguageSelector();

  if (activeLanguage === "en") return 1;
  if (activeLanguage === "ar-SY") return 2;
  return 3;
};
