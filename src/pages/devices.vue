<template>
  <f7-page name="devices">
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title title="Devices" :subtitle="$store.state.locations[$store.state.currentLocation].name"></f7-nav-title>
      <f7-nav-right>
        <f7-link icon-ios="f7:plus_circle" icon-aurora="f7:plus_circle" icon-md="material:add_circle_outline"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <template
      v-for="(venue) in $store.state.locations[$store.state.currentLocation].venues"
    >
      <f7-block-title :key="venue.id" style="text-transform:uppercase">{{venue.name}}</f7-block-title>
      <f7-list :key="venue.id + '-title'">
        <f7-list-item
          v-for="(device) in venue.devices"
          :key="device.id + '-list'"
          :title="device.name"
          :link="`#`"
          :badge="device.reading"
          :after="device.status"
        ></f7-list-item>
      </f7-list>
    </template>
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
