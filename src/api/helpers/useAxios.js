import { baseURL } from "api/config";
import axios from "axios";
import { useAuth } from "redux/hooks/auth";
import useLanguageSelector from "utility/language/useLanguageSelector";
import languageConfig from "configs/languageConfig";
export const useAxios = () => {
  const { isAuthenticated, token } = useAuth();
  const { activeLanguage } = useLanguageSelector();
  const languageCode = languageConfig[activeLanguage].headerCode;
  if (isAuthenticated) {
    var axsio= axios.create({
      headers: {
        referrerPolicy: 'no-referrer-when-downgrade',
        language: languageCode,
        Authorization: `Bearer amin_admin`,
        common:{
          
        }
      },

      baseURL,
      referrerPolicy: 'no-referrer-when-downgrade'
    });
    axsio.defaults.headers.common['Referrer-Policy'] = 'strict-origin-when-cross-origin';
    return axsio
  }
  return axios.create({
    headers: {
      
      language: languageCode
    },
    baseURL,
  });
};
