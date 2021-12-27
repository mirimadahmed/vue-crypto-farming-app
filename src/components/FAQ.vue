<template>
  <section
    id="faq"
    class="p-5"
  >
    <div class="row p-5">
      <div class="col-12 text-success">
        <h2>Frequently Asked Question</h2>
      </div>
      <div class="col-12 text-success">
        <span
          class="subtitle"
        >If your question is not answered here, join us on Discord</span>
      </div>

      <div
        class="accordian col-10 m-auto row p-3"
        role="tablist"
      >
        <b-button
          v-b-toggle.accordion-1
          class="mb-1 col-12 text-left p-3 bg-social"
          variant="success"
        >
          <img src="../assets/chevron.svg">Where can I buy the token ?
        </b-button>
        <b-collapse
          id="accordion-1"
          accordion="my-accordion"
          role="tabpanel"
        >
          <p>
            You can buy $MEAT on PancakeSwap by clicking
            <a
              class="link-here"
              target="_blank"
              href="https://pancakeswap.finance/swap?outputCurrency=0x0000000000000000000000000000000000000"
            >here</a>.<br><br>The contract is :
            0x0000000000000000000000000000000000000
          </p>
        </b-collapse>
        <b-button
          v-b-toggle.accordion-2
          class="mb-1 col-12 text-left p-3 bg-social"
          variant="success"
        >
          <img src="../assets/chevron.svg">What do I have to do to earn my
          lifetime passive income ?
        </b-button>
        <b-collapse
          id="accordion-2"
          accordion="my-accordion"
          role="tabpanel"
        >
          <p>
            The only thing that you have to do is to buy tokens, then launch the
            app to buy your first Meta Farm by clicking
            <a
              class="link-here"
              target="_blank"
              href="https://metafarms.finance"
            >here</a>.
          </p>
        </b-collapse>
        <b-button
          v-b-toggle.accordion-3
          class="mb-1 col-12 text-left p-3 bg-social"
          variant="success"
        >
          <img src="../assets/chevron.svg">What is the difference between the
          farms ?
        </b-button>
        <b-collapse
          id="accordion-3"
          accordion="my-accordion"
          role="tabpanel"
        >
          <p>
            Each kind of Farm generates different levels of rewards due to the
            size and how it can be upgraded in the future. Currently, there are
            five kinds of Farms :
          </p>
          <ul>
            <li>- Chicken Farm</li>
            <li>- Pig Farm</li>
            <li>- Fish Farm</li>
            <li>- Cow Farm</li>
            <li>- Horse Farm</li>
          </ul>
          <p>
            This means that you will be able to take advantage of a large
            variety of yield-generating protocols, without having to find the
            best ones yourself and conduct due-diligence, and without having to
            pay for the fees of each platform.
          </p>
        </b-collapse>
        <b-button
          v-b-toggle.accordion-4
          class="mb-1 col-12 text-left p-3 bg-social"
          variant="success"
        >
          <img src="../assets/chevron.svg">Where do the tokens go when I buy a
          Meta Farm ?
        </b-button>
        <b-collapse
          id="accordion-4"
          accordion="my-accordion"
          role="tabpanel"
        >
          <p>
            All the in-game assets are distributed this way:
            <br>
            70% are moved to the reward pool
            <br>
            10% tokens to the liquidity pool
            <br>
            (5% tokens are converted in BNB)
            <br>
            and 20% are moved to the research &amp; development/growth wallet.
          </p>
        </b-collapse>
        <b-button
          v-b-toggle.accordion-5
          class="mb-1 col-12 text-left p-3 bg-social"
          variant="success"
        >
          <img src="../assets/chevron.svg">Which blockchain is Meta Farms
          available on ?
        </b-button>
        <b-collapse
          id="accordion-5"
          accordion="my-accordion"
          role="tabpanel"
        >
          <p>
            Meta Farms is available on the Binance Smart Chain as it is fast and
            has low fees, perfect for having as many people involved as
            possible!
          </p>
        </b-collapse>
        <b-button
          v-b-toggle.accordion-6
          class="mb-1 col-12 text-left p-3 bg-social"
        >
          <img src="../assets/chevron.svg">Where are the rewards coming from ?
        </b-button>
        <b-collapse
          id="accordion-6"
          accordion="my-accordion"
          role="tabpanel"
        >
          <p>
            Meta Farms uses a reward protocol based on Axie Infinity and Olympus
            DAO.<br><br>The in-game activity fees are used to fill the
            reward pool of the game. But, as we’re seeking long-term
            sustainability, we are using the concept of Game Theory used by
            Olympus DAO.<br><br>The goal is to make the long-term and
            reinvesting strategy the most efficient way for everybody to earn
            high yields from Meta Farms.
          </p>
        </b-collapse>
        <b-button
          v-b-toggle.accordion-7
          class="mb-1 col-12 text-left p-3 bg-social"
          variant="success"
        >
          <img src="../assets/chevron.svg">Are there any fees when selling
          tokens ?
        </b-button>
        <b-collapse
          id="accordion-7"
          accordion="my-accordion"
          role="tabpanel"
        >
          <p>
            To promote the purchase of Farms and to develop the long-term vision
            of the project, a 10% fee is applied ONLY when selling $MEAT. You
            can claim and buy new Farms without any fees.
          </p>
        </b-collapse>
      </div>
    </div>
  </section>
</template>
<style scoped>
#faq {
  position: relative;
  background: linear-gradient(180deg, #fffc5b, #ffd15b);
}
.not-collapsed img {
  transform: rotate(90deg);
}
b-button {
  display: block !important;
}
</style>
