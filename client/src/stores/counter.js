import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = "http://localhost:3000";

export const useCounterStore = defineStore("counterstore", {
  state() {
    return {
      isLogin: false,
      items: [],
      currentItem: {},
      rentitems: []
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

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully logged in",
          showConfirmButton: false,
          timer: 1500,
        });

      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: 'error',
          text: `${err.toString()}`,
        })
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
        Swal.fire({
          icon: 'error',
          text: `${err.toString()}`,
        })
      }
    },

    async getItemById(id) {
      try {
        // console.log(id, "===========")
        const response = await axios.get(`${baseUrl}/items/${id}`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        // console.log(response)
        this.currentItem = response.data.currentItem
        // console.log("======================");
      } catch (err) {
          console.log(err)
          Swal.fire({
            icon: 'error',
            text: `${err.toString()}`,
          })
      }
    },

    async getRentItems() {
      try {
        const response = await axios.get(`${baseUrl}/rentitems`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          }
        })
        this.rentitems = response.data.rentitems
      }
      catch (err) {
        console.log(err)
      }
    },

    async addRentItems(newItem) {
      try {
        this.rentitems.push(newItem)
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully added rent items",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      catch (err) {
        console.log(err)
        Swal.fire({
          icon: 'error',
          text: `${err.toString()}`,
        })
      }
    },

    async handleLogout() {
      try {
        localStorage.clear();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You have been logged out",
          showConfirmButton: false,
          timer: 1500,
        });
        this.isLogin = false;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
