export const initialTemplate = `<div class="list">
  <ItemComp v-for="item in list" class="list-item">
    <h1 slot="title"></h1>
      <div>{{ msg }}</div>
    <footer></footer>
  </ItemComp>
</div>`