<template>
  <div class="container">
    <div class="heading-form">
      <h2>My Notes</h2>
    </div>
    <form action="" @submit.prevent="addItemAndClear(note)">
      <div class="form-wrapper">
        <label for="">What is in your mind? 
        </label>
        <textarea rows="10" cols="70" type="text" v-model="note" maxlength="500"> </textarea>
        <button>Add</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useNoteStore } from '@/stores/counter';
export default{
  setup(){
    const note = ref("")
    const noteStore = useNoteStore()
    const addItemAndClear = (item) => {
      if (item.length === 0) {
        return
      }
      noteStore.addNote(item)
      note.value = ''
    }
    return {note, addItemAndClear};
  }
}
</script>

<style scoped>
  *{
    box-sizing: border-box;
  }
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 50px;
  }
  .form-wrapper{
    display: flex;
    flex-direction: column;
  }
  .heading-form{
    padding: 5px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  label{
    font-size: .8rem;
    color: #888;
    margin-bottom: 3px;
  }
  textarea{
    border: 1px solid #02343F;
    border-radius: 6px;
    color: #02343F;
    margin-bottom: 10px;
    background-color: transparent;
  }
  button{
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #2E3C7E;
    color: #F0EDCC;
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