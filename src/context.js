import { createContext, useContext, useReducer } from "react";

const Context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIES":
      return {
        movies: {
          data: [...(state.movies.data || []), ...action.payload],
          loading: false,
          error: null,
          called: true,
        },
      };

    case "LOADING":
      return {
        movies: { ...state.movies, loading: true },
      };

    case "ADD_ERROR":
      return {
        movies: { ...state.movies, error: action.payload, loading: false },
      };
    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const initialValue = { movies: { loading: false, called: false } };
  const value = useReducer(reducer, initialValue);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

function useAppState() {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export { Provider, useAppState };
