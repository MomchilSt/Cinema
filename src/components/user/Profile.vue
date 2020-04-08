<template>
    <v-container fluid class="wrapper">
        <v-layout column>
            <v-card class="card pt-0">
                <v-card-text align="center">
                    <v-flex class="mb-4">
                        <v-avatar size="190" class="mr-4">
                            <img src="https://www.computerhope.com/jargon/g/guest-user.jpg" alt="Avatar">
                        </v-avatar>
                    </v-flex>
                    <v-card-text><h2>Hello</h2></v-card-text>
                    <v-form @submit.prevent="updateUser" ref="updateUserForm" v-model="valid">
                        <v-row>
                            <v-card-text><h4>Name: {{userInfo.name}}</h4></v-card-text>
                            <v-card-text><h4>Email: {{userInfo.email}}</h4></v-card-text>
                        </v-row>
                        <v-text-field
                        v-model="newName"
                        :rules="newNameRules"
                        required
                        label="Change Name"></v-text-field>
                        <v-text-field
                            v-model="newEmail"
                            :rules="newEmailRules"
                            required
                            label="Change Email Address"></v-text-field>
                        <v-col class="pt-0">
                        </v-col>

                        <v-btn 
                        align="center"
                        :disabled="!valid"
                        color="primary" 
                        type="submit">
                            <v-icon left dark>check</v-icon>
                            Save Changes
                        </v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { updateUserInfo } from '../../services/userService'
    export default {
        data () {
            return {
                valid: true,
                newName: "",
                newNameRules: [
                  v => !!v || "Name is required",
                  v => (v && v.length >= 3) || "Minimum of 3 characters"
                ],
                newEmail: "",
                newEmailRules: [
                  v => !!v || "E-mail is required",
                  v => /.+@.+\..+/.test(v) || "E-mail must be valid"
                ],
            }
        },
        computed: {
            ...mapGetters('userService', ['userInfo']),
        },
        methods: {
            ...mapActions('userService', [updateUserInfo]),
            updateUser() {
            this.user = {
                name: this.newName,
                email: this.newEmail,
                role: this.userInfo.role,
                username: this.userInfo.username
            }
            try {
                this[updateUserInfo](this.user)
            } catch (err) {
                console.log(err)
            }
        },
    }
}
</script>
<style scoped>
.v-text-field {
  width: 65%;
}
.wrraper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card {
  margin-left: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80%;
  border-radius: 0.5em;
  box-shadow: 0 0 1em white;
  padding: 40px 50px;
  margin-top: 20px;
}
</style>