<template>
  <div class="dropdown">
    <div class="dropdown__list1">
      <h4>Casuals</h4>
      <ul class="list">
        <li class="list__item">Jackets</li>
        <li class="list__item">Hoodies & sweatshirts</li>
        <li class="list__item">Sportswear</li>
        <li class="list__item">T-Shirts</li>
        <li class="list__item">Joggers</li>
      </ul>
    </div>
    <div class="dropdown__list2">
      <h4>Formal</h4>
      <ul class="list">
        <li class="list__item">Jackets</li>
        <li class="list__item">Shirts</li>
        <li class="list__item">Suits</li>
        <li class="list__item">Trousers</li>
      </ul>
    </div>
    <div class="dropdown__alert-msg">
      <p>
        <b>Autumn sale!</b><br>
        Up to 50% off
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.dropdown {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-areas: 
    "l1 l2"
    "am am";
  
  &__list1 {
    grid-area: l1;
  }

  &__list2 {
    grid-area: l2;
  }

  &__alert-msg {
    grid-area: am;
    font-size: 2em;
    text-transform: uppercase;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    background: $dark-bg-color;
    color: $light-accent-color;
    width: 350px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h4 {
    padding-bottom: 10px;
  }

  .list {
    list-style-type: none;
    padding: 0;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;

    li {
      padding: 5px 0;
    }
  }
}
</style>

