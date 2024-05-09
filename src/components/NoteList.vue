<script>
import { useNoteStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
import { computed } from 'vue';
export default {
  setup() {
    const NoteStore = useNoteStore();
    const CompletedNotes = computed(() => NoteStore.CompletedNotes);
    const { Notes } = storeToRefs(NoteStore);
    const {toggleCheck, deleteNote, editNote, } = NoteStore
    const saveEdit = (note) => {
      if (note.editText.trim() !== "") {
        note.item = note.editText;
        note.isEditing = false; 
        editTodo(note.id, note.item); 
      } else {
        note.editText = note.item;
        note.isEditing = false; 
      }
    };
    return { Notes, toggleCheck, deleteNote, editNote, saveEdit, CompletedNotes  };
  },
};

</script>

<template>
  <div class="container">
    <p>Catatan yang ditandai: {{ CompletedNotes }}</p>

  </div>
  <div v-for="note in Notes" :key="note.id" class="container">
    <div class="note-wrapper">
      <template v-if="!note.isEditing">
        <p :class="{ completed: note.completed }">{{ note.item }}</p>
      </template>
      <template v-else>
        <input v-model.trim="note.editText" @keyup.enter="saveEdit(note)" @blur="saveEdit(note)" class="edit-input" />
      </template>
    </div>
    <div class="button-wrapper">
      <button v-if="!note.isEditing" @click.stop="note.isEditing = true" class="check-button">Edit &#9998;</button>
      <button v-else @click.stop="saveEdit(note)" class="check-button">Save &#10004;</button>
      <button @click.stop="toggleCheck(note.id)" class="check-button">Check &#10004;</button>
      <button @click="deleteNote(note.id)" class="check-button">Delete &#10060;</button>
    </div>
  </div>
</template>

<style scoped>

.completed {
  font-weight: bolder;
  cursor: pointer;
}

.check-button{
  cursor: pointer;
}



.container{
  display: flex;
  padding: 10px;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.note-wrapper{
  padding: 10px;  
  width: 50%;
  height: 150px;
  overflow:auto;
  background-color: #2E3C7E;
  color: #F0EDCC;
  border-radius: 5px;
}
.button-wrapper{
  gap: 10px;
  display: flex;
  padding: 10px;
}

button{
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #2E3C7E;
    color: #FBEAEB;
    margin-bottom: 10px;
  }
  button:hover{
    border-radius: 3px;
    border: 1px solid black;
    background-color: transparent;
    color: #02343F;
    margin-bottom: 10px;
    transform: scale(1, 1.1);
    transition: all .3s ease-out;
  }
</style>