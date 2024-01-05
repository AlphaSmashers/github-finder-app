import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);
  /* This 'state' is the received modified state, which we can use to display latest information.
  The 'dispatch' is used to send the data that which action is tobe performed by sending actionType string, ALONG with payload/API fetched new raw data. 
  ON THE RIGHT SIDE, we utilize useReducer() function, which will have the core reducer function containing main logic of state modification (which takes decision based on the actionType passed through dispatch()). 
  We also include an initialState as a second argument. NOWW, after this, control will move toward core reducer function, in which our useReducer itself will do things with that function and will send 2 parameters currentState and action in it, using the initialState and dispatch()'s info it received before. */

  return (
    <GithubContext.Provider
      value={{
        ...state, // These all are included in our state, except the methods.> users: state.users,loading: state.loading, user: state.user, repos: state.repos,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
