export const addNumber = (payload: number) => {
  return {
    type: "INCREASE_COUNT",
    payload: payload,
  };
};
