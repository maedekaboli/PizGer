<template>
    <v-row justify="center">
        <v-col cols="md-10">
            <v-card class="mx-auto">
                <v-card-item>
                    <v-row justify="center" align="center">
                        <v-col cols="md-4">
                            <v-img src="/not-found-burger.jpg" cover>
                            </v-img>
                        </v-col>
                        <v-col cols="md-4" sm="6">
                            <v-row>
                                <v-col cols="12" class="d-flex justify-center">
                                    <h3> {{ $t('notFound.msg') }} </h3>
                                </v-col>
                                <v-col cols="12" class="d-flex justify-center">
                                    <router-link to="/">
                                        <v-btn variant="outlined" rounded="pill">
                                            {{ $t('notFound.btn') }}
                                        </v-btn>
                                    </router-link>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="md-4">
                            <v-img src="/not-found-pizza.jpg" cover>
                            </v-img>
                        </v-col>
                    </v-row>
                </v-card-item>
            </v-card>
        </v-col>
    </v-row>
</template>