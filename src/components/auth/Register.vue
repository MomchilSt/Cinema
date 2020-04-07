<template>
  <div class="wrraper">
    <v-row align="center" class="card">
      <h2>Register From</h2>
      <v-form @submit.prevent="register" ref="registerForm" v-model="valid">
        <v-container class="d-flex justify-space-between">
          <v-container>
            <v-text-field 
            v-model="username"
             :rules="usernameRules"
              label="Username"
               required></v-text-field>
            <v-text-field
              v-model="password"
              name="password"
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[passwordRulse.required, passwordRulse.min]"
              :type="showPass ? 'text' : 'password'"
              label="Password"
              class="input-group--focused"
              @click:append="showPass = !showPass"
            ></v-text-field>

            <v-text-field
              v-model="rePassword"
              name="password"
              :append-icon="showRepeatPass ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[passwordRulse.required, passwordRulse.min]"
              :type="showRepeatPass ? 'text' : 'password'"
              label="Repeat Password"
              class="input-group--focused"
              @click:append="showRepeatPass = !showRepeatPass"
            ></v-text-field>
          </v-container>

          <v-container class="left">
            <v-text-field v-model="name" :rules="nameRules" label="Name" required></v-text-field>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            <v-select
              v-model="select"
              :items="roles"
              :rules="[v => !!v || 'Role is required']"
              label="Role"
              required
            ></v-select>
          </v-container>
        </v-container>

        <v-container class="d-flex justify-space-between actions">
          <v-btn
            type="submit"
            :disabled="!valid"
            color="success"
            class="mr-4"
            width="300"
          >Register</v-btn>
          <v-btn color="error" class="mr-4" @click="reset" width="100">Reset</v-btn>
        </v-container>
        <v-divider></v-divider>
      </v-form>
      <span class="text">
        Already have an account?
        <router-link to="/login">Login</router-link>
      </span>
    </v-row>
  </div>
</template>

<script>
import { register } from '../../services/authService.js';
import { mapActions } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      valid: true,
      checkbox: false,
      showRepeatPass: false,
      showPass: false,
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length >= 3) || "Minimum of 3 characters"
      ],
      password: "",
      rePassword: "",
      passwordRulse: {
        required: v => !!v || "Password is required.",
        min: v => (v && v.length >= 6) || "Minimum of 6 characters"
      },
      username: "",
      usernameRules: [
        v => !!v || "Username is required",
        v => (v && v.length <= 10) || "Username must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      select: "",
      roles: ["User", "Administrator"]
    };
  },
  methods: {
    ...mapActions([register]),
    async register(ev) {
      ev.preventDefault();
      try{
        await this[register]({
          username: this.username,
          name: this.name,
          email: this.email,
          password: this.password,
          role: this.select
        });
        this.$router.push({ path: '/login' })
        this.$toast.success('Successfully Registered!');
      } catch (err) {
          this.$toast.error(`Error occurred! ${err}`);
          this.$refs.registerForm.reset();
      }
    },
    reset() {
      this.$refs.registerForm.reset();
    }
  }
}
</script>

<style scoped>
.actions {
  margin-bottom: 15px;
}
.text {
  margin-top: 20px;
}
.left {
  margin-left: 20px;
}
.wrraper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  border-radius: 0.5em;
  box-shadow: 0 0 1em white;
  padding: 40px 50px;
  margin-top: 20px;
}
h2 {
  margin-bottom: 40px;
}
</style>

 // register() {
    //   let username = this.username;
    //   let password = this.password;
    //   let name = this.name;
    //   let email = this.email;
    //   let role = this.select;
    //   try {
    //   http.post('', { username, password, name, email, role });
    //   this.$toast.success('Successfully Registered!');
    //   this.$route.push("/");
    // } catch (err) {
    //   this.$toast.error(`Something went wrong! ${err}`);}
