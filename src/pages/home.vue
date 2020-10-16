<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar large :sliding="false">
      <f7-nav-left>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title sliding title="Home" :subtitle="$store.state.locations[$store.state.currentLocation].name"></f7-nav-title>
      <f7-nav-right>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
      <f7-nav-title-large>{{$store.state.locations[$store.state.currentLocation].name}}</f7-nav-title-large>
    </f7-navbar>

    <!-- Page content-->
    <f7-block-title>Important Tips</f7-block-title>
    <f7-block style="padding-left: calc(var(--f7-safe-area-left) + var(--f7-card-margin-horizontal)); padding-right: calc(var(--f7-safe-area-right) + var(--f7-card-margin-horizontal))">
      <f7-card bg-color="red" text-color="white">
        <f7-card-header><b>Aquarium 3 is low on water (40%)</b></f7-card-header>
        <f7-card-content>In order to keep the environment alive, please add approximately <b>70 liters (~2367 fl oz)</b> of tap water</f7-card-content>
      </f7-card>
      <f7-card bg-color="blue" text-color="white">
        <f7-card-header><b>Adjust your temperature a little bit for Aquarium 2</b></f7-card-header>
        <f7-card-content>Your animals are usually adjusted to 29&deg;C, while the currently it is at 26&deg;C. Adjusting the temperature is a good way to keep your animals active and healthy.</f7-card-content>
      </f7-card>
    </f7-block>
    <f7-block-title>My Environment</f7-block-title>
    <f7-block style="padding-left: calc(var(--f7-safe-area-left) + var(--f7-card-margin-horizontal)); padding-right: calc(var(--f7-safe-area-right) + var(--f7-card-margin-horizontal))">
      <f7-row no-gap>
        <f7-col width="50">
          <f7-card bg-color="deeporange" text-color="white" class="demo-card-header-pic">
            <f7-card-header
              class="no-border"
              valign="bottom"
              style="background-image: url(https://picsum.photos/200/300); height:min(40vw, 40vh)"
            ><b>Card</b></f7-card-header>
            <f7-card-content>Lorem Ipsum</f7-card-content>
          </f7-card>
        </f7-col>
        <f7-col width="50">
          <f7-card bg-color="pink" text-color="white" class="demo-card-header-pic">
            <f7-card-header
              class="no-border"
              valign="bottom"
              style="background-image: url(https://picsum.photos/200/300); height:min(40vw, 40vh)"
            ><b>Card</b></f7-card-header>
            <f7-card-content>Lorem Ipsum</f7-card-content>
          </f7-card>
        </f7-col>
        <f7-col width="50">
          <f7-card bg-color="blue" text-color="white" class="demo-card-header-pic">
            <f7-card-header
              class="no-border"
              valign="bottom"
              style="background-image: url(https://picsum.photos/200/300); height:min(40vw, 40vh)"
            ><b>Card</b></f7-card-header>
            <f7-card-content>Lorem Ipsum</f7-card-content>
          </f7-card>
        </f7-col>
        <f7-col width="50">
          <f7-card bg-color="purple" text-color="white" class="demo-card-header-pic">
            <f7-card-header
              class="no-border"
              valign="bottom"
              style="background-image: url(https://picsum.photos/200/300); height:min(40vw, 40vh)"
            ><b>Card</b></f7-card-header>
            <f7-card-content>Lorem Ipsum</f7-card-content>
          </f7-card>
        </f7-col>
        <f7-col width="50">
          <f7-card bg-color="teal" text-color="white" class="demo-card-header-pic">
            <f7-card-header
              class="no-border"
              valign="bottom"
              style="background-image: url(https://picsum.photos/200/300); height:min(40vw, 40vh)"
            ><b>Card</b></f7-card-header>
            <f7-card-content>Lorem Ipsum</f7-card-content>
          </f7-card>
        </f7-col>
      </f7-row>
    </f7-block>
    <f7-block strong>
      <p>This is an example of tabs-layout application. The main point of such tabbed layout is that each tab contains independent view with its own routing and navigation.</p>

      <p>Each tab/view may have different layout, different navbar type (dynamic, fixed or static) or without navbar like this tab.</p>
    </f7-block>
    <f7-block-title>Navigation</f7-block-title>
    <f7-list>
      <f7-list-item link="/about/" title="About"></f7-list-item>
      <f7-list-item link="/form/" title="Form"></f7-list-item>
    </f7-list>

    <f7-block-title>Modals</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col width="50">
          <f7-button fill raised popup-open="#my-popup">Popup</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button fill raised login-screen-open="#my-login-screen">Login Screen</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block-title>Panels</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col width="50">
          <f7-button fill raised panel-open="left">Left Panel</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button fill raised panel-open="right">Right Panel</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-list>
      <f7-list-item
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      ></f7-list-item>
      <f7-list-item
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
      ></f7-list-item>
      <f7-list-item
        title="Request Data & Load"
        link="/request-and-load/user/123456/"
      ></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
export default {
  data: function () {
    return {
      name: this.$store.state.name,
    };
  }
}
</script>