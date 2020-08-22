import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/featuresActions";

export const initialState = {
  features: [],
  featuresPrice: 0,
};

export const featuresReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_FEATURE:
      return { ...state, features: [...state.features, payload], featuresPrice: state.featuresPrice + payload.price };
    case REMOVE_FEATURE:
      return {
        ...state,
        features: state.features.filter((feature) => feature.id !== payload.id),
        featuresPrice: state.featuresPrice - payload.price,
      };
    default:
      return state;
  }
};
