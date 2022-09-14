import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = "http://localhost:3000";

export const useCounterStore = defineStore("counterstore", {
  state() {
    return {
      isLogin: false,
      items: [],
    };
  },
  actions: {
    async isLoggedin() {
      try {
        this.isLogin = true;
      } catch {
        console.log(err);
      }
    },

    async handlelogin(email, password) {
      try {
        const response = await axios.post(`${baseUrl}/login`, {
          email,
          password,
        });
        localStorage.setItem("access_token", response.data.access_token);
        this.isLogin = true;

        this.$swal({
          icon: "success",
          title: `Successfully logged in`,
        });

        this.router.push("/");
      } catch (err) {
        console.log(err);
        this.$swal({
          icon: "error",
          title: "Error",
          text: `${err.toString()}`,
        });
      }
    },

    async getItems() {
      try {
        const response = await axios.get(`${baseUrl}/items`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.items = response.data.items;
        // console.log("++++++++++++++++++", response.data.items)
      } catch (err) {
        console.log(err);
      }
    },

    async handleLogout() {
      try {
        localStorage.clear();
        this.$swal({
          icon: "success",
          title: `Successfully logout`,
        });
        this.isLogin = false;
      } catch (err) {
        throw err;
      }
    },
  },
});
