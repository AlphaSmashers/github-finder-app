const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state /* old/current state with users ad loading variables in it. */,
        users: action.payload /** (old data), users: (), loading: ()  WILL MODIFY THE users and loading fields of Old data, and all this modified state is returned. */,
        loading: false,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };

    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      };

    case "GET_USER_AND_REPOS":
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };

    default:
      return state;
  }
};

export default githubReducer;
