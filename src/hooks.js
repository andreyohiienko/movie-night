import { useState, useEffect } from "react";
import { api } from "api";
import { useAppState } from "context";

const useAxiosGet = (url) => {
  const [state, dispatch] = useAppState();
  const { called } = state.movies;

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      dispatch({ type: "LOADING" });
      try {
        const { data } = await api.get(url, {
          signal: controller.signal,
        });
        dispatch({ type: "ADD_MOVIES", payload: data.results });
      } catch (e) {
        dispatch({ type: "ADD_ERROR", payload: e.message });
      }
    };

    if (!called) {
      fetchData();
    }

    return () => {
      controller.abort();
    };
  }, [url, dispatch, called]);

  return state.movies;
};

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
};

export { useAxiosGet, useLocalStorage };
