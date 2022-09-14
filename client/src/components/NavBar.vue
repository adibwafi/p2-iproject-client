<script>
import { mapActions } from 'pinia';
import { mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    computed: {
        ...mapState(useCounterStore, ['isLogin'])
    },
    methods: {
        ...mapActions(useCounterStore, ['handleLogout', 'isLoggedin']),
        logout () {
            this.handleLogout()
            
            this.$router.push('/login')
        }
    },
    created() {
        if (localStorage.getItem("access_token")) {
            this.isLoggedin()
        }
    }
}
</script>

<template>
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top header-inner-pages">
        <div class="container d-flex align-items-center justify-content-between">
            <!-- Uncomment below if you prefer to use an text logo -->
            <h1>
                <RouterLink to="/">sewakamera</RouterLink>
            </h1>
            <nav id="navbar" class="navbar">
                <ul>
                    <li class="dropdown"><a><span>Product</span> <i class="bi bi-chevron-down"></i></a>
                        <ul>
                            <li><a href="#">Camera</a></li>
                            <li><a href="#">Lens</a></li>
                        </ul>
                    </li>
                    <li v-if="!isLogin"><a class="nav-link scrollto">
                            <RouterLink to="/login">Login</RouterLink>
                        </a></li>
                    <li v-if="!isLogin"><a class="nav-link scrollto">
                            <RouterLink to="/register">Register</RouterLink>
                        </a></li>
                    <li v-if="isLogin"><a @click.prevent="logout" class="nav-link scrollto">Logout</a></li>
                </ul>
                <i class="bi bi-list mobile-nav-toggle"></i>
            </nav><!-- .navbar -->
        </div>
    </header><!-- End Header -->
</template>