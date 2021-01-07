<template>
  <f7-page name="explore">
    <!-- Top Navbar -->
    <f7-navbar title="Explore">
    </f7-navbar>
    <f7-card expandable>
      <f7-card-content :padding="false">
        <div class="bg-color-red" :style="{height: '300px'}">
          <f7-card-header text-color="white" class="display-block">
            Lorem Ipsum
            <br />
            <small :style="{opacity: 0.7}">Aqualife</small>
          </f7-card-header>
          <f7-link card-close color="white" class="card-opened-fade-in" :style="{position: 'absolute', right: '15px', top: '15px'}" icon-f7="xmark_circle_fill"></f7-link>
        </div>
        <div class="card-content-padding">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, voluptatem ipsa? Error dolor repellendus repellat quia facere mollitia aliquam molestiae unde tempore, rem magnam, suscipit impedit, iure quisquam deleniti cum!</p>
        </div>
      </f7-card-content>
    </f7-card>

    <f7-card expandable>
      <f7-card-content :padding="false">
        <div class="bg-color-yellow" :style="{height: '300px'}">
          <f7-card-header text-color="black" class="display-block">
            Lorem Ipsum
            <br/>
            <small :style="{opacity: 0.7}">Aqualife</small>
          </f7-card-header>
          <f7-link card-close color="black" class="card-opened-fade-in" :style="{position: 'absolute', right: '15px', top: '15px'}" icon-f7="xmark_circle_fill"></f7-link>
        </div>
        <div class="card-content-padding">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, voluptatem ipsa? Error dolor repellendus repellat quia facere mollitia aliquam molestiae unde tempore, rem magnam, suscipit impedit, iure quisquam deleniti cum!</p>
        </div>
      </f7-card-content>
    </f7-card>
  </f7-page>
</template>
<script>
  export default {
    data: function () {
      return {
        products: this.$f7.data.products,
      };
    }
  };
</script>

<style scoped>
@media (max-width: 767px){
  .card-expandable.card-opened .card-content .card-header {
    padding-top: calc(var(--f7-card-header-padding-vertical) + var(--f7-safe-area-top));
  }
  .card-expandable.card-opened .card-content .card-close {
    top: calc(15px + var(--f7-safe-area-top)) !important;
  }
  .card-expandable.card-opening .card-content .card-header {
    padding-top: calc(var(--f7-card-header-padding-vertical) + var(--f7-safe-area-top));
    transform: scale(1);
    transition: 0.5s all ease;
  }
  .card-expandable.card-opening .card-content .card-close {
    top: calc(15px + var(--f7-safe-area-top)) !important;
    transform: scale(1);
    transition: 0.5s all ease;
  }
  .card-expandable.card-closing .card-content .card-header {
    transform: scale(1);
    transition: 0.5s all ease;
  }
}

@media (max-height: 669px){
  .card-expandable.card-opened .card-content .card-header {
    padding-top: calc(var(--f7-card-header-padding-vertical) + var(--f7-safe-area-top));
  }
  .card-expandable.card-opened .card-content .card-close {
    top: calc(15px + var(--f7-safe-area-top)) !important;
  }
  .card-expandable.card-opening .card-content .card-header {
    padding-top: calc(var(--f7-card-header-padding-vertical) + var(--f7-safe-area-top));
    transform: scale(1);
    transition: 0.5s all ease;
  }
  .card-expandable.card-opening .card-content .card-close {
    top: calc(15px + var(--f7-safe-area-top)) !important;
    transform: scale(1);
    transition: 0.5s all ease;
  }
  .card-expandable.card-closing .card-content .card-header {
    transform: scale(1);
    transition: 0.5s all ease;
  }
}
</style>