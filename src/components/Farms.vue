<template>
  <b-jumbotron class="bg-main">
    <div class="row px-5">
      <div class="col-lg-12 m-auto px-5">
        <div class="row px-5">
          <div class="col-lg-12 row my-3 px-3 py-2">
            <div class="col text-left">
              My Farms <b-button
                pill
                variant="success"
              >
                Refresh
              </b-button>
            </div>
            <div class="col text-right">
              Need more $MEAT tokens? <b-button
                pill
                variant="success"
              >
                Buy on PancakeSwap
              </b-button>
            </div>
          </div>
          <div
            v-for="farm in farms"
            :key="farm.price"
            class="row col-lg-12 bg-custom px-3 py-2 my-3 rounded shadow"
          >
            <div class="col-lg-2 text-left">
              <img
                :src="require(`../assets/${farm.img}`)"
                :alt="farm.name"
                class="w-100"
              >
            </div>
            <div class="col-lg-3 p-0 m-0 text-left align-self-center">
              <h4>My {{ farm.name }}s</h4>
            </div>
            <div class="col-lg-5 text-center align-self-center">
              <p>Buy one to start earning {{ farm.lead }} in rewards!</p>
            </div>
            <div class="col-lg-2 text-right align-self-center">
              <b-button
                pill
                size="sm"
                variant="success"
              >
                Create Farm
              </b-button>
            </div>
          </div>
          <div class="row col-lg-12 my-2">
            <div class="col text-right">
              <b-button
                pill
                variant="success"
              >
                Claim all rewards
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-jumbotron>
</template>

<script>
export default {
  name: 'Farms',
  data () {
    return {
      farms: [
        {
          name: 'Chicken Farm',
          img: '1.png',
          price: '5 MEAT',
          apy: '2300% APY',
          lead: '0.31 $MEAT/DAY'
        },
        {
          name: 'Pig Farm',
          img: '2.png',
          price: '20 MEAT',
          apy: '2400% APY',
          lead: '1.31 $MEAT/DAY'
        },
        {
          name: 'Fish Farm',
          img: '3.png',
          price: '50 MEAT',
          apy: '2500% APY',
          lead: '3.42 $MEAT/DAY'
        },
        {
          name: 'Cow Farm',
          img: '4.png',
          price: '70 MEAT',
          apy: '2600% APY',
          lead: '4.98 $MEAT/DAY'
        },
        {
          name: 'Horse Farm',
          img: '5.png',
          price: '100 MEAT',
          apy: '2700% APY',
          lead: '7.4 $MEAT/DAY'
        }
      ]
    }
  }
}
</script>
