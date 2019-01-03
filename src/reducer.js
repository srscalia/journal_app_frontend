const initialState = {
  user: null,
  loggedIn: false,
  authenticatingUser: false,
  selectedJournal: null,
  selectedEntry: null,
  showForm: false,
  showEntry: true,
  showEntryEditForm: false,
  allEntries: false,
  showPhotos: false,
  editJournal: false
}

function reducer(state = initialState, action){

  switch (action.type) {
    case "SELECT_JOURNAL":
        return {...state, selectedJournal: action.payload, selectedEntry: null, showForm: false, allEntries: false, showPhotos: false, editJournal: false}
    case "SELECT_ENTRY":
      return {...state, selectedEntry: action.payload, showEntry: true, showPhotos: false}
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
    case "SHOW_ALL_ENTRIES":
      return {...state, allEntries: true, selectedJournal: null, selectedEntry: null, showPhotos: false}
    case "SELECT_ENTRY_ALL_ENTRIES":
      return {...state, selectedJournal: action.payload.journal_id, selectedEntry: action.payload.id, showEntry: true, showPhotos: false}
    case "SHOW_PHOTOS":
        return {...state, showEntry: false, showPhotos: true, selectedEntry: null}
    case "SHOW_ALL_PHOTOS_UNSELECT_JOURNAL":
        return {...state, showEntry: false, showPhotos: true, selectedEntry: null, selectedJournal: null}
    case "SHOW_ALL_PHOTOS_UPON_LOGIN":
        return {...state, allEntries: true, selectedJournal: null, selectedEntry: null, showPhotos: true, showEntry: false}
    case "CHANGE_EDIT_JOURNAL":
      return {...state, editJournal: !state.editJournal, selectedJournal: action.payload, selectedEntry: null, allEntries: false, showPhotos: false}

    default:
      return state
  }
}


export default reducer
