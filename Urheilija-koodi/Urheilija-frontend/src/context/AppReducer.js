export default (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case "GET_URHEILIJAT":
      return {
        ...state,
        urheilijatiedot: payload,
      };
    case "GET_URHEILIJA":
      return {
        ...state,
        urheilijatiedot: payload,
      };
    case "DELETE_URHEILIJA":
      return {
        ...state,
        urheilijatiedot: state.urheilijatiedot.filter(
          (urheilijatieto) => urheilijatieto.id !== action.payload
        ),
      };
    case "ADD_URHEILIJA":
      return {
        ...state,
        urheilijatiedot: [action.payload, ...state.urheilijatiedot],
      };
    case "EDIT_URHEILIJA":
      return {
        ...state,
        urheilijatiedot: state.urheilijatiedot.map((urheilijatieto) =>
          urheilijatieto.id === action.payload.id
            ? (urheilijatieto = action.payload)
            : urheilijatieto
        ),
      };
    default:
      return state;
  }
};
