import axios from "axios";

import urls from "../Config/Urls";

import useHandleErrors from "./useHandleErrors";

import { getDecryptedData } from "../Utils/store";

import useApp from "./useApp";

import useHandleSuccess from "./useHandleSuccess";

const baseUrl = "http://74.208.75.170/api";

const useAxios = () => {
  const error = useHandleErrors();

  const { setIsLoading } = useApp();

  const token = getDecryptedData("token");

  const showSuccess = useHandleSuccess();

  const request = async ({
    req = {},
    headers = {},
    data = {},
    params = {},
    custom_token = null,
    show_error = true,
    show_loading = true,
    show_success = false,
    success_message = "",
  }) => {
    try {
      if (show_loading) {
        setIsLoading(true);
      }

      if (!req.method || !req.url) {
        throw { custom: true, message: "Internal Error. Client" };
      }

      const res = await axios({
        headers: {
          Authorization: `Bearer ${custom_token || token}`,
          ...headers,
        },
        method: req.method,
        url: `${baseUrl}/${req.url}`,
        data: data,
        params: params,
      });

      if (show_success) showSuccess(success_message);

      return res.data;
    } catch (e) {
      if (show_error) {
        error(e);
      }
      return "error";
    } finally {
      setIsLoading(false);
    }
  };

  return {
    request,
    urls,
  };
};

export default useAxios;
