<template>
  <vuestic-navbar>
    <header-selector slot="selector" :isOpen.sync="valueProxy"/>
    <span slot="logo" class="logo-text">
      Vue
    </span>
    <notification-dropdown class="col nav-item"/>
    <profile-dropdown class="col nav-item">
      <img src="../../../assets/images/01.jpg"/>
    </profile-dropdown>
  </vuestic-navbar>

</template>

<script>

import VuesticNavbar
  from '../../../vuestic-theme/vuestic-components/vuestic-navbar/VuesticNavbar'
import HeaderSelector from './components/HeaderSelector'
import ProfileDropdown from './components/dropdowns/ProfileDropdown'
import NotificationDropdown from './components/dropdowns/NotificationDropdown'

export default {
  name: 'app-navbar',

  components: {
    VuesticNavbar,
    HeaderSelector,
    NotificationDropdown,
    ProfileDropdown,
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    valueProxy: {
      get () {
        return this.isOpen
      },
      set (opened) {
        this.$emit('toggle-menu', opened)
      },
    },
  },
}
</script>

<style scoped>
  .logo-text{
    font-size: 40px;
    letter-spacing: 2px;
    font-weight: 700;
  }
</style>

