<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar large :sliding="false">
      <f7-nav-left>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title sliding title="Home" :subtitle="$store.state.locations[$store.state.currentLocation].name"></f7-nav-title>
      <!-- <f7-nav-right>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right> -->
      <f7-nav-title-large>{{$store.state.locations[$store.state.currentLocation].name}}</f7-nav-title-large>
    </f7-navbar>

    <!-- Page content-->
    <f7-block-title>Important Tips</f7-block-title>
    <f7-block style="padding-left: calc(var(--f7-safe-area-left) + var(--f7-card-margin-horizontal)); padding-right: calc(var(--f7-safe-area-right) + var(--f7-card-margin-horizontal))">
      <f7-card bg-color="red" text-color="white" style="margin-left: var(--f7-card-margin-horizontal); margin-right: var(--f7-card-margin-horizontal)">
        <f7-card-header><b>Aquarium 3 is low on water (40%)</b></f7-card-header>
        <f7-card-content>In order to keep the environment alive, please add approximately <b>70 liters (~2367 fl oz)</b> of tap water.</f7-card-content>
      </f7-card>
      <f7-card bg-color="yellow" text-color="black" style="margin-left: var(--f7-card-margin-horizontal); margin-right: var(--f7-card-margin-horizontal)">
        <f7-card-header><b>Large Pond is slightly acidic (pH 6.7)</b></f7-card-header>
        <f7-card-content>Make sure that you have filtered or changed the water regularly.</f7-card-content>
      </f7-card>
      <f7-card bg-color="blue" text-color="white" style="margin-left: var(--f7-card-margin-horizontal); margin-right: var(--f7-card-margin-horizontal)">
        <f7-card-header><b>Adjust your temperature a little bit for Aquarium 2</b></f7-card-header>
        <f7-card-content>Your animals are usually adjusted to 29&deg;C, while the currently it is at 26&deg;C. Adjusting the temperature is a good way to keep your animals active and healthy.</f7-card-content>
      </f7-card>
    </f7-block>
    <f7-block-title>My Environment</f7-block-title>
    <f7-block style="padding-left: calc(var(--f7-safe-area-left) + var(--f7-card-margin-horizontal)); padding-right: calc(var(--f7-safe-area-right) + var(--f7-card-margin-horizontal))">
      <f7-row no-gap>
        <f7-col width="50" medium="33" large="20">
          <f7-card bg-color="blue" text-color="white" style="margin-left: var(--f7-card-margin-horizontal); margin-right: var(--f7-card-margin-horizontal)">
            <f7-card-header><b>Water Quality</b></f7-card-header>
            <f7-card-content>
              <h1 class="no-margin">95%</h1>
              <f7-badge color="white" text-color="blue"><b>EXCELLENT</b></f7-badge>
              <p>
                <b>TDS:</b> 70 ppm<br>
                <b>Nat. Waste:</b> 50 ppm<br>
                <b>Chlorine:</b> 2.1 ppm<br>
                <b>Bromine:</b> 0.8 ppm
              </p>
            </f7-card-content>
          </f7-card>
        </f7-col>
        <f7-col width="50" medium="33" large="20">
          <f7-card bg-color="yellow" text-color="black" style="margin-left: var(--f7-card-margin-horizontal); margin-right: var(--f7-card-margin-horizontal)">
            <f7-card-header><b>Temperature</b></f7-card-header>
            <f7-card-content>
              <h1 class="no-margin">32&deg;</h1>
              <f7-badge color="white" text-color="red"><b>WARNING</b></f7-badge>
              <h3 class="no-margin">Indoor: 25&deg;</h3>
              <p>High temperatures on outdoors could lead into huge water loss.</p>
            </f7-card-content>
          </f7-card>
        </f7-col>
        <f7-col width="50" medium="33" large="20">
          <f7-card bg-color="green" text-color="black" style="margin-left: var(--f7-card-margin-horizontal); margin-right: var(--f7-card-margin-horizontal)">
            <f7-card-header><b>Oxygen Levels</b></f7-card-header>
            <f7-card-content>
              <h1 class="no-margin">20 mg/L</h1>
              <f7-badge color="white" text-color="teal"><b>GOOD</b></f7-badge>
              <p>
                <b>Aquarium 1:</b> 21 mg/L<br>
                <b>Aquarium 2:</b> 18 mg/L<br>
                <b>Aquarium 3:</b> 20 mg/L<br>
                <b>Large Pond:</b> 21 mg/L
              </p>
            </f7-card-content>
          </f7-card>
        </f7-col>
        <f7-col width="50" medium="33" large="20">
          <f7-card bg-color="lightblue" text-color="black" style="margin-left: var(--f7-card-margin-horizontal); margin-right: var(--f7-card-margin-horizontal)">
            <f7-card-header><b>Water Volume</b></f7-card-header>
            <f7-card-content>
              <h1 class="no-margin">3438 L</h1>
              <f7-badge color="white" text-color="deeporange"><b>FAIR</b></f7-badge>
              <p>
                <b>Aquarium 1:</b> 224 L<br>
                <b>Aquarium 2:</b> 51 L<br>
                <b>Aquarium 3:</b> 105 L<br>
                <b>Large Pond:</b> 3058 L
              </p>
            </f7-card-content>
          </f7-card>
        </f7-col>
        <f7-col width="50" medium="33" large="20">
          <f7-card bg-color="purple" text-color="white" style="margin-left: var(--f7-card-margin-horizontal); margin-right: var(--f7-card-margin-horizontal)">
            <f7-card-header><b>pH Levels</b></f7-card-header>
            <f7-card-content>
              <h1 class="no-margin">6.8</h1>
              <f7-badge color="white" text-color="deeporange"><b>FAIR</b></f7-badge>
              <p>
                <b>Aquarium 1:</b> 7.1<br>
                <b>Aquarium 2:</b> 7.2<br>
                <b>Aquarium 3:</b> 7.0<br>
                <b>Large Pond:</b> 6.7
              </p>
            </f7-card-content>
          </f7-card>
        </f7-col>
        <f7-col width="50" medium="33" large="20">
          <f7-card bg-color="gray" text-color="white" style="margin-left: var(--f7-card-margin-horizontal); margin-right: var(--f7-card-margin-horizontal)">
            <f7-card-header><b>Active Devices</b></f7-card-header>
            <f7-card-content>
              <h1 class="no-margin">14/16</h1>
              <f7-badge color="white" text-color="teal"><b>GOOD</b></f7-badge>
              <p>
                The <b>Aquarium Filter</b> on <b>Aquarium 1</b> will need to be replaced by next month.
              </p>
            </f7-card-content>
          </f7-card>
        </f7-col>
        <f7-col width="50" medium="33" large="20">
          <f7-card style="margin-left: var(--f7-card-margin-horizontal); margin-right: var(--f7-card-margin-horizontal)">
              <f7-card-header><b>Add Apps</b></f7-card-header>
              <f7-card-content class="text-align-center">
              <h1 class="no-margin">
                <f7-icon style="font-size: 1.5em" ios="f7:app_badge" aurora="f7:app_badge" md="material:widgets"></f7-icon>
                <f7-icon style="font-size: 1.5em" ios="f7:chart_bar_square" aurora="f7:chart_bar_square" md="material:insert_chart"></f7-icon>
                <f7-icon style="font-size: 1.5em" ios="f7:play_circle" aurora="f7:play_circle" md="material:play_circle_outline"></f7-icon>
              </h1>
              <p>
                You can now add and integrate new apps to Aqualife Dashboard
              </p>
            </f7-card-content>
            <f7-card-footer>
              <f7-link>ADD</f7-link>
            </f7-card-footer>
          </f7-card>
        </f7-col>
      </f7-row>
    </f7-block>
    <!-- <f7-block strong>
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
    </f7-list> -->
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