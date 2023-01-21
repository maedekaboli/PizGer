<template>
    <v-row justify="center">
        <v-col cols="md-8">
            <v-card class="mx-auto">
                <v-card-item>
                    <v-row justify="center" align="center">
                        <v-col cols="12" class="d-flex justify-center">
                            <v-img src="/empty.jpg" height="300px" contain>
                            </v-img>
                        </v-col>
                        <v-col cols="12" class="d-flex justify-center">
                            <h3>There isn't any pizger!</h3>
                        </v-col>
                        <v-col cols="12" class="d-flex justify-center">
                            <router-link to="/food">
                                <v-btn variant="outlined" rounded="pill">
                                    add pizger
                                </v-btn>
                            </router-link>
                        </v-col>
                    </v-row>
                </v-card-item>
            </v-card>
        </v-col>
    </v-row>
</template>