<script>
import { mapActions } from 'pinia';
import { mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    computed: {
        ...mapState(useCounterStore, [""])
    },
    methods: {
        ...mapActions(useCounterStore, ['handlelogin']),
        async loginLocal(email, password) {
            try {
                await this.handlelogin(email, password)

                this.$router.push('/')
            }
            catch(err) {
                console.log(err)
            }
        }
    },
    data() {
        return {
            email: "",
            password: "",
        }
    }
}
</script>

<template>
    <!-- Login -->
    <div class="container-fluid d-flex justify-content-center align-items-center"
        style=" height: 100vh">
        <div class="border w-75 p-5 my-5 bg-white rounded-3 shadow">
            <div class="row">
                <div class="col-6">
                    <img src="./assets/undraw_Online_learning_re_qw08.png" alt="login-img" width="100%" />
                </div>
                <div class="col-6 align-self-center">
                    <form @submit.prevent="loginLocal(email, password)">
                        <div class="mb-3">
                            <img src=""
                                alt="logo-h8" class="mb-4" width="200px" />
                            <h5 class="mb-4">Sign in to your account</h5>
                            <label for="email" class="form-label">Email address</label>
                            <input v-model="email" type="email" class="form-control" id="email" autocomplete="off" />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input v-model="password" type="password" class="form-control" id="password" />
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- End Login -->
</template>