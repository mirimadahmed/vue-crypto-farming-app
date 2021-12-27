<template>
  <b-jumbotron
    class="bg-custom"
    header="Welcome to Meta Farms"
    lead="From this app, you can view & manage your farms and, most importantly, claim your rewards!"
  >
    <div class="row p-5">
      <div class="col-md-12 px-5">
        <div class="row px-5">
          <div class="col-md-4 p-3 m-0">
            <div class="bg-light p-3 bg-social">
              My farms
            </div>
          </div>
          <div class="col-md-4 p-3 m-0">
            <div class="bg-light p-3 bg-social">
              All farms
            </div>
          </div>
          <div class="col-md-4 p-3 m-0">
            <div class="bg-light p-3 bg-social">
              $MEAT Rewards
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-jumbotron>
</template>

<script>
export default {
  name: 'Lead'
}
</script>
