<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="blue">
                        <v-toolbar-title>
                            Signup form
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-alert dark
                                :value="true"
                                color="error"
                                icon="warning"
                            >
                                This user already exists, try a different set of data.
                            </v-alert>
                            <v-text-field
                                prepend-icon="person"
                                name="login"
                                label="Login"
                                :rules="[rules.required]"
                            >
                            </v-text-field>
                            <v-text-field
                                prepend-icon="email"
                                name="email"
                                label="Email"
                                :rules="[rules.required, rules.email]"
                            >
                            </v-text-field>
                            <v-text-field
                                prepend-icon="lock"
                                name="password"
                                label="Password"
                                :rules="[rules.required]"
                                type="password"
                                v-model="password"
                            >
                            </v-text-field>
                            <v-text-field
                                prepend-icon="lock"
                                name="password"
                                label="Confirm Password"
                                :rules="[rules.required]"
                                type="password"
                                v-model="confirm_password"
                                :error="!valid()"
                            >
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-divider light></v-divider>
                    <v-card-actions>
                        <v-btn to="/login" rounded color="black" dark>Login</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn rounded color="success" @click.prevent="register()">
                            Register
                            <v-icon>keyboard_arrow_up</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'signup',
        data: () => ({
            password: '',
            confirm_password: '',
            rules: {
                required: value => !!value || "Required",
                email: value => {
                    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    return pattern.test(value) || "Invalid e-mail."
                }
            }
        }),
        methods: {
            register() {
                this.$router.push('/login')
            },
            valid() {
                return this.password === this.confirm_password;
            }
        }
    }
</script>