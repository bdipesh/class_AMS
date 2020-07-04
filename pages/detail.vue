<template>
  <div class="columns is-centered is-multiline">
    <div class="column is-12">
      <figure class="image image is-3by1">
        <img src="/blood1.jpg"/>
        <div class="columns is-multiline ma-9 is-vcentered  is-overlay">
          <div class="column  is-2"></div>
          <div class="column  is-narrow  ">
            <div class="white mb-2 has-bold-text is-size-5 is-narrow column">
              Blood Training
            </div>
            <div class="columns is-multiline">
              <div class="column is-narrow">
                <div class="button is-warning white--text">Enquiry Now</div>
              </div>
              <div class="column is-narrow">
                <div class="button is-outlined is-warning">Enroll Now</div>
              </div>
            </div>
          </div>
        </div>
      </figure>
    </div>
    <div class="column mt-n12 is-multiline card is-10">
      <div class="column is-12">
        <div class="columns">
          <div class="column">
            <div class="columns">
              <div class="column is-narrow">
                <v-icon v-text="'mdi-calendar-month'"></v-icon>
              </div>
              <div class="column is-narrow">
                <div>Date:</div>
                <div>28th 38 December</div>
                <div>12:00 - 3:00</div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="columns">
              <div class="column is-narrow">
                <v-icon v-text="'mdi-calendar-month'"></v-icon>
              </div>
              <div class="column is-narrow">
                <div>Date:</div>
                <div>28th 38 December</div>
                <div>12:00 - 3:00</div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="columns">
              <div class="column is-narrow">
                <v-icon v-text="'mdi-calendar-month'"></v-icon>
              </div>
              <div class="column is-narrow">
                <div>Date:</div>
                <div>28th 38 December</div>
                <div>12:00 - 3:00</div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          Some sub description.
        </div>
        <hr/>
        <div class="column">
          Background
        </div>
        <div class="column">
          THis is dummy background.
        </div>
      </div>
    </div>
    <div class="column is-12">
      <div class="is-size-5">Enquiry Now</div>
      <div class="columns is-vcentered">
        <div class="column is-3">
          <figure
            class="image is-4by5"
          >
            <img src="/blood1.jpg" alt="imag">
          </figure>
        </div>
        <div class="column is-4 pa-6 card">
          <div class="is-size-5">Haste Dhakal</div>
          <div class="is-size-6">Customer Service Executive</div>
          <div class="columns">
            <div class="column is-narrow">
            <v-icon v-text="'mdi-cellphone'"></v-icon>
            </div>
            <div class="column">
              <div class="">Phone</div>
              <div class="">98708733978</div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-narrow">
              <v-icon v-text="'mdi-cellphone'"></v-icon>
            </div>
            <div class="column">
              <div class="">Email</div>
              <div class="">bdipwhs)8@gmail.com"</div>
            </div>
          </div>
        </div>
        <div class="column is-4 card">
          <div class="is-size-5">Haste Dhakal</div>
          <div class="is-size-6">Customer Service Executive</div>
          <div class="columns">
            <div class="column is-narrow">
              <v-icon v-text="'mdi-cellphone'"></v-icon>
            </div>
            <div class="column">
              <div class="">Phone</div>
              <div class="">98708733978</div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-narrow">
              <v-icon v-text="'mdi-cellphone'"></v-icon>
            </div>
            <div class="column">
              <div class="">Email</div>
              <div class="">bdipwhs)8@gmail.com"</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-12 is-mobile">
      <div class="columns">
        <div class="column is-size-5 is-narrow">
          Similar Trainings
        </div>
      </div>
      <div class="columns is-multiline  is-mobile">
        <div v-for="index in 4" :key="index" class="column pa-2 is-3 card">
          <div class="card-image">
            <figure
              class="image image is-4by3"
            >
              <img src="/blood1.jpg" />
            </figure>
          </div>
          <div class="card-content">
            <div>Training Name</div>
            <div>NRs 2139</div>
            <div>2018-19 - 2019-21</div>
            <div>2 Months</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
