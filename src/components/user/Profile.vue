<template>
    <v-container fluid class="wrapper">
        <v-layout column>
            <v-card class="card pt-0">
                <v-card-text align="center">
                    <v-flex class="mb-4">
                        <v-avatar size="190" class="mr-4">
                            <img src="https://i.guim.co.uk/img/media/dd3882c4ad0fd11a14cffc7e5edaabe5ce8a8b53/0_85_1077_646/master/1077.jpg?width=700&quality=85&auto=format&fit=max&s=c906598d7b435814a7e49a5ee4779c2f" alt="Avatar">
                        </v-avatar>
                    </v-flex>
                    <v-text-field
                        class="pt-0"
                        v-model="form.imgUrl"
                        label="Avatar"></v-text-field>
                    <v-btn >Change Avatar</v-btn>
                    <v-text-field
                        v-model="form.firstName"
                        label="Name"></v-text-field>
                    <v-text-field
                        v-model="form.contactEmail"
                        label="Email Address"></v-text-field>
                  <v-col class="pt-0">
                  <v-autocomplete
                    :items="['Action', 'Fantasy', 'Comedy', 'Adventure']"
                    label="Add Interests"
                    multiple
                  ></v-autocomplete>
                </v-col>
                </v-card-text>
                <v-card-actions class="pt-0">
                    <v-btn color="primary" :loading="loading" @click.native="update">
                        <v-icon left dark>check</v-icon>
                        Save Changes
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                loading: false,
                form: {
                    firstName: 'John',
                    imgUrl: "",
                    contactEmail: 'john@doe.com',
                    avatar: 'MALE_CAUCASIAN_BLOND_BEARD'
                },
                showAvatarPicker: false
            }
        },
        methods: {
            openAvatarPicker () {
                this.showAvatarPicker = true
            },
            selectAvatar (avatar) {
                this.form.avatar = avatar
            }
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