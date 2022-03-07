import { Actions } from "../action";

type InitState = {
  user: null | {
    firstName: string
    lastName: string
  }
}

const initialState: InitState = {
  user: null,
};

const user = (state = initialState, action: Actions) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default user;
