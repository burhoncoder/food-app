const initState = {
  isLoading: false,
  top: [],
  menu: [],
  slider: [],
  comments: [],
  currentFood: [],
  error: null,
};

export const handleApi = (state = initState, { type, payload }) => {
  if (type.includes("/TRIGGER")) {
    return { ...state, isLoading: true };
  } else if (type.includes("/SUCCESS")) {
    return { ...state, isLoading: false, [payload.dataField]: payload.data };
  } else if (type.includes("/FAILURE"))
    return { ...state, isLoading: false, error: payload };
  else return { ...state };
};
