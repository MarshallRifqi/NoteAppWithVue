// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNoteStore = defineStore('Notes', {
  state: () => ({
    Notes: [],
    id: 0,
  }),
  actions: {
    addNote(item){
      this.Notes.push({item, id: this.id++, completed: false})
    },
    deleteNote(itemID){
      this.Notes = this.Notes.filter((note) => {
        return note.completed === true || note.id !== itemID;
      });
    },
    toggleCheck(idToFind) {
      const note = this.Notes.find((obj) => obj.id === idToFind);
      if (note) {
        note.completed = !note.completed;
      }
    },
    editNote(itemId, newText) {
      const note = this.Notes.find((note) => note.id === itemId);
      if (note) {
        note.item = newText;
      }
    },
  }, 
  getters: {
    CompletedNotes: (state) => {
      return state.Notes.filter((note) => note.completed).length ;
    }, 
  }
})
