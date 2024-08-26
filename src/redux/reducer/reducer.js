let initialState = {
  contactList: [],
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      };
    case 'SEARCH_CONTACT':
      return {
        ...state,
        contactList: state.contactList.filter(
          (item) =>
            item.name.includes(payload.keyword) ||
            item.phoneNumber.includes(payload.keyword)
        ),
      };
    default:
      return { ...state };
  }
}

export default reducer;
