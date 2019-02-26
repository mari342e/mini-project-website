<template>
  <main>
    <site-title>
      <h1 slot="title"><b>The</b> brand</h1>
      <h2 slot="sub-title">Avenue Fashion</h2>
    </site-title>
    <div class="container">
      <div class="about">
        <img src="@/assets/about1.jpg" alt="woman measuring clothes" class="about__image1">
        <img src="@/assets/about2.jpg" alt="woman skeching clohtes" class="about__image2">
        <img src="@/assets/about3.jpg" alt="women looking at fabric" class="about__image3">
        <div class="about__textbox1">
          <h3>Hand designed clothing</h3>
          <h4>Established in 2013, AF is a fairly new fashion brand</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed ut perspiciatis unde omnis.
          </p>
        </div>
        <div class="about__textbox2">
          <h3>Our values, vision and strategy</h3>
          <h4>Lorem ipsum dolor sit amet</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
            ad minim veniam. Sed ut perspiciatis unde omnis. Et harum quidem rerum facilis est et expedita distinctio. Itaque earum rerum.
          </p>
        </div>
        <div class="about__textbox3">
          <h3>Ethical trading</h3>
          <h4>Lorem ipsum dolor sit amet</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Ded do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua.
          </p>
        </div>
        <div class="about__awards">
          <img src="@/assets/bfa-logo.png" alt="british fashion awards" class="awards">
          <img src="@/assets/ukft-logo.png" alt="british fashion awards" class="awards">
          <img src="@/assets/drapers-logo.png" alt="british fashion awards" class="awards">
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SiteTitle from "@/components/SiteTitle";
export default {
  components: {
    SiteTitle
  }
};
</script>

<style lang="scss">
.about {
  padding: 40px 0;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 440px 440px;
  grid-template-rows: 20% 20% 20% 20% 20%;
  grid-column-gap: 20px;
  grid-row-gap: 7px;
  grid-template-areas: 
    "i1 tb1"
    "i1 i2"
    "i3 i2"
    "i3 tb3"
    "tb2 a";

  &__textbox1, &__textbox2, &__textbox3 {
    width: 440px;
    p {
      padding: 5px 0 0;
    }
  }

  &__textbox1 {
    grid-area: tb1;
  }

  &__textbox2 {
    grid-area: tb2;
  }

  &__textbox3 {
    grid-area: tb3;
  }

  &__image1, &__image2, &__image3 {
    width: 440px;
  }

  &__image1 {
    grid-area: i1;
  }

  &__image2 {
    grid-area: i2;
  }

  &__image3 {
    grid-area: i3;
  }

  &__awards {
    grid-area: a;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .awards {
      height: 80px;
    } 
  }
}

</style>


