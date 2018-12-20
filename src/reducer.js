const initialState = {
  user: null,
  loggedIn: false,
  authenticatingUser: false,
  selectedJournal: null,
  selectedEntry: null,
  showForm: false,
  showEntry: true,
  showEntryEditForm: false
}

function reducer(state = initialState, action){

  switch (action.type) {
    case "SELECT_JOURNAL":
        return {...state, selectedJournal: action.payload, selectedEntry: null, showForm: false}
    case "SELECT_ENTRY":
      return {...state, selectedEntry: action.payload, showEntry: true}
    case "SHOW_FORM":
      return {...state, showForm: action.payload}
    case "LOGIN_USER":
      return {...state, user: action.payload, loggedIn: true, authenticatingUser: false}
    case "UPDATE_USER":
      return {...state, user: action.payload}
    case "SHOW_ENTRY_EDIT_FORM":
      return {...state, showEntry: !state.showEntry, showEntryEditForm: !state.showEntryEditForm}
    case "DELETED_ENTRY":
      return {...state, selectedEntry: null, showEntryEditForm: false}
    case "DELETED_JOURNAL":
      return {...state, selectedJournal: null}
    case "AUTHENTICATING_USER":
    return {...state, authenticatingUser: true}
    default:
      return state
  }
}


export default reducer
