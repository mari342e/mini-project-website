<template>
  <div class="dropdown">
    <div class="dropdown__list1">
      <h4>Casuals</h4>
      <ul class="list">
        <li class="list__item"><a href="#">Jackets</a></li>
        <li class="list__item"><a href="#">Hoodies & sweatshirts</a></li>
        <li class="list__item"><a href="#">Sportswear</a></li>
        <li class="list__item"><a href="#">T-Shirts</a></li>
        <li class="list__item"><a href="#">Joggers</a></li>
      </ul>
    </div>
    <div class="dropdown__list2">
      <h4>Formal</h4>
      <ul class="list">
        <li class="list__item"><a href="#">Jackets</a></li>
        <li class="list__item"><a href="#">Shirts</a></li>
        <li class="list__item"><a href="#">Suits</a></li>
        <li class="list__item"><a href="#">Trousers</a></li>
      </ul>
    </div>
    <div class="dropdown__alert-msg dark">
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
    @include flexbox (center, center, row);
    grid-area: am;
    font-size: 2em;
    text-transform: uppercase;
    text-align: center;
    font-weight: 400;
    width: 350px;
    height: 150px;
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

      a {
        color: $text-color;
        text-transform: none;
      }
    }
  }
}
</style>

