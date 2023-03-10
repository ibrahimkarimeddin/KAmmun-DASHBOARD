import { useQueryClient, useMutation } from "react-query";
import { toast } from "react-toastify";
import { useTranslation } from "utility/language";
import { useAxios } from "./useAxios";
import { validateSession } from "./validateSession";

export const useUpdatedynamik = (key, url,toastMessage=true) => {
  const axios = useAxios();
  const queryClient = useQueryClient();
  const t = useTranslation();

  return useMutation(
    async (dataToSend) => {
      const { data } = await axios.put(url+dataToSend?.id, dataToSend);
      return data;
    },
    {
      onSuccess: ({ message }) => {
        toastMessage&&toast.success(message || t("updated_successfully"));
        queryClient.invalidateQueries([key]);
      },
      onError: (err) => {
        const message =
          err?.response?.data?.message || t("failed_to_update_data");
        toast.error(message);
        validateSession(err.response);
      },
    }
  );
};