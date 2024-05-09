<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import TodoForm from '../components/NoteForm.vue'
import TodoList from '../components/NoteList.vue'
import NoteList from '@/components/NoteList.vue';
import NoteForm from '../components/NoteForm.vue';
</script>

<template>
  <main>
    <div class="all-container">
      <div class="form-wrap">
        <NoteForm />
      </div>
      <div class="list-wrap">
        <NoteList />
      </div>
    </div>
  </main>
</template>

<style >
  main{
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-content: flex-start;
    background-color: #FBEAEB;
  }
  .all-container{
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  .form-wrap{
    position: sticky;
  }
</style>
