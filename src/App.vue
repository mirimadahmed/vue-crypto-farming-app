<template>
  <div id="app">
    <b-navbar
      fixed="top"
      :sticky="true"
      toggleable
      type="dark"
      variant="main"
      class="shadow"
    >
      <b-navbar-brand href="#"> Meta Farms </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-button
          v-if="!isAuthenticated"
          variant="success"
          class="shadow-sm"
          pill
          @click="login"
        >
          <span v-if="wrongNetwork">Wrong Network</span>
          <span v-else>Connect Wallet</span>
        </b-button>
        <b-button
          v-else
          variant="success"
          class="shadow-sm"
          pill
          @click="logout"
        >
          <span v-if="wrongNetwork">Wrong Network</span>
          <span>{{ user.get("bscAddress").substr(0, 5) }}... Logout</span>
        </b-button>
      </b-navbar-nav>
    </b-navbar>
    <Lead />
    <Farms />
    <Social />
    <FAQ />
  </div>
</template>

<script>
import MoralisFactory from "../moralis";
import Lead from "@/components/Lead.vue";
import Farms from "@/components/Farms.vue";
import Social from "@/components/Social.vue";
import FAQ from "@/components/FAQ.vue";
const moralis = MoralisFactory();

export default {
  name: "App",
  components: {
    Lead,
    Farms,
    Social,
    FAQ,
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isLoggedIn;
    },
    wrongNetwork() {
      return !["bsc", "binance", "binance smart chain", "0x38", 56].includes(
        this.currentChain
      );
    },
  },
  created() {
    moralis.enableWeb3().then(() => this.checkMetaMask());
  },
  beforeDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  },
  data() {
    return {
      user: null,
      currentChain: null,
      subscription: null,
    };
  },
  methods: {
    async checkMetaMask() {
      const res = await moralis.isMetaMaskInstalled();
      if (!res) {
        alert("Please install MetaMask!");
      } else {
        this.checkNetwork();
      }
    },
    async checkNetwork() {
      const res = await moralis.getChainId();
      this.currentChain = res;
      if (
        !["bsc", "binance", "binance smart chain", "0x38", 56].includes(res)
      ) {
        alert("Please switch network to Binance Smart Chain Mainnet!");
      }

      this.subscription = moralis.onChainChanged((chain) => {
        this.currentChain = chain;
        if (
          !["bsc", "binance", "binance smart chain", "0x38", 56].includes(chain)
        ) {
          alert("Please switch network to Binance Smart Chain Mainnet!");
        }
      });
    },
    login() {
      this.user = moralis.User.current();
      if (!this.user) {
        moralis
          .authenticate({
            signingMessage: "Log in to Meta Farms",
          })
          .then(function (user) {
            this.user = user;
            this.$store.commit("setAuthentication", user);

            console.log("logged in user:", user);
            console.log(user.get("bscAddress"));
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    logout() {
      moralis.User.logOut();
    },
  },
};
</script>

<style>
.jumbotron {
  margin: 0 !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.bg-custom {
  background-color: #ffd15b !important;
}
*,
:after,
:before {
  --tw-border-opacity: 1;
  border-color: rgba(229, 231, 235, var(--tw-border-opacity));
}
*,
:after,
:before {
  --tw-ring-inset: var(--tw-empty, /*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 transparent;
  --tw-ring-shadow: 0 0 transparent;
}
.bg-social {
  background: linear-gradient(180deg, #5ac7bd, #afe4dd);
  position: relative;
  padding: 50px 15px;
}
.bg-main {
  background: rgb(0, 91, 155) !important;
}
</style>
