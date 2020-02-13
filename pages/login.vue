<template>
  <div class="login">
    <b-row class="justify-content-center">
      <b-col md="6" lg="6">
        <b-card-group>
          <b-card no-body class="p-4">
            <b-card-body>
              <b-form @submit.prevent="handleSubmit">
                <h1>{{ $t('login.title') }}</h1>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="text"
                                class="form-control"
                                name="email"
                                v-model="form.email"
                  />
                </b-input-group>

                <b-input-group class="mb-4">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="password"
                                class="form-control"
                                name="password"
                                v-model="form.password"
                  />
                </b-input-group>
                <b-button type="submit" size="md" variant="success" :disabled="loading">
                  {{ $t('login.send') }}
                </b-button>
              </b-form>
            </b-card-body>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { createComponent, ref } from '@vue/composition-api'

interface Form {
  email: string,
  password: string
}

export default createComponent({
  /*
  async fetch({ store }) {
    const res = await axios.get('http://my-api/stars')
    store.commit('setStars', res.data)
  }

  setup(props, { root }) {
    const store = root.$store
    const stars = ref<Star[]>(store.state.stars)

    return {
      stars
    }
  }
  */

  setup(props, { root }) {
    const form = ref({ email: '', password: '' })
    const loading = ref(false)

    // @ts-ignore
    console.log(root.$store)

    function handleSubmit(): void {
      /*
      console.log(this.form)
      // @ts-ignore
      this.$auth.loginWith('local', { data: this.form }).then((): void => {
        this.$router.push('/')
      })

       */
    }

    return { form, loading, handleSubmit }
  },
})
</script>
