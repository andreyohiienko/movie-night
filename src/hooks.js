import { useState, useEffect } from "react";
import { api } from "./api";

const useAxiosGet = (url, timeout) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await api.get(url, {
          signal: controller.signal,
          timeout: timeout,
        });

        setData(res.data);
        setLoading(false);
      } catch (e) {
        setError(true);
        setErrorMessage(e.message);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url, timeout]);

  return { data, loading, error, errorMessage };
};

export { useAxiosGet };
