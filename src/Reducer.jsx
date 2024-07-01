export const initialState = {
  notes: JSON.parse(localStorage.getItem('notes')) || [],
  allRead: JSON.parse(localStorage.getItem('allRead')) || false,
  originalNotes: JSON.parse(localStorage.getItem('originalNotes')) || []
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NOTES':
      // eslint-disable-next-line no-case-declarations
      const updatedNotes = action.payload;
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      localStorage.setItem('originalNotes', JSON.stringify(updatedNotes));
      return {
        ...state,
        notes: updatedNotes,
        originalNotes: updatedNotes
      };
    case 'MARK_ALL_READ':
      // eslint-disable-next-line no-case-declarations
      const allReadNotes = state.notes.map(note => ({ ...note, read: true }));
      localStorage.setItem('notes', JSON.stringify(allReadNotes));
      localStorage.setItem('allRead', JSON.stringify(true));
      return {
        ...state,
        notes: allReadNotes,
        allRead: true,
      };
    case 'UNDO_MARK_ALL_READ':
      // eslint-disable-next-line no-case-declarations
      const originalNotes = state.originalNotes;
      localStorage.setItem('notes', JSON.stringify(originalNotes));
      localStorage.setItem('allRead', JSON.stringify(false));
      return {
        ...state,
        notes: originalNotes,
        allRead: false,
      };
    default:
      return state;
  }
};

  