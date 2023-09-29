const initialCount = {
  count: 0,
};

export const increaseCountReducer = (state = initialCount, action: any) => {
  switch (action.type) {
    case "INCREASE_COUNT":
      return {
        ...state,
        count: action.payload,
      };

    default:
      return state;
  }
};
