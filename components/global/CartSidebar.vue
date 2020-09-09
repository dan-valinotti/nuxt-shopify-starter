<template>
  <section>
    <b-sidebar
      type="is-light"
      :open="open"
      :fullheight="true"
      :fullwidth="false"
      :overlay="true"
      :right="right"
      @close="handleClose"
    >
      <div class="p-4">
        <h2 class="font-bold text-2xl mb-4 pb-2 border-b-2 border-gray-400">
          Your Cart
        </h2>
        <b-menu>
          <b-menu-list label="Menu">
            <b-menu-item icon="information-outline" label="Info" />
            <b-menu-item icon="settings">
              <template slot="label" slot-scope="props">
                Administrator
                <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'" />
              </template>
              <b-menu-item icon="account" label="Users" />
              <b-menu-item icon="cellphone-link">
                <template slot="label">
                  Devices
                  <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
                    <b-icon slot="trigger" icon="dots-vertical" />
                    <b-dropdown-item aria-role="listitem">
                      Action
                    </b-dropdown-item>
                    <b-dropdown-item aria-role="listitem">
                      Another action
                    </b-dropdown-item>
                    <b-dropdown-item aria-role="listitem">
                      Something else
                    </b-dropdown-item>
                  </b-dropdown>
                </template>
              </b-menu-item>
              <b-menu-item icon="cash-multiple" label="Payments" disabled />
            </b-menu-item>
            <b-menu-item icon="account" label="My Account">
              <b-menu-item label="Account data" />
              <b-menu-item label="Addresses" />
            </b-menu-item>
          </b-menu-list>
          <b-menu-list label="Actions">
            <b-menu-item label="Logout" />
          </b-menu-list>
        </b-menu>
      </div>
    </b-sidebar>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  props: {
    right: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapState({
      open: state => state.cart.sidebarOpen,
    }),
  },
  methods: {
    ...mapMutations({
      setOpen: 'cart/setSidebarOpen',
    }),
    handleClose() {
      this.setOpen(false);
    },
  },
};
</script>
