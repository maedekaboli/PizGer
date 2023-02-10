<script setup lang="ts">
</script>

<template>
    <v-navigation-drawer absolute floating width="200" color="#3949AB">
        <v-list class="pt-8 pr-0" density="compact" nav>
            <RouterLink to="/">
                <div class="fancy-sidebar-item mb-9">
                    <b></b>
                    <b></b>
                    <v-list-item prepend-icon="mdi-home" class="text-h6" title="Home" value="home"></v-list-item>
                </div>
            </RouterLink>
            <RouterLink to="/404">
                <div class="fancy-sidebar-item mb-9">
                    <b></b>
                    <b></b>
                    <v-list-item prepend-icon="mdi-plus-circle-outline" class="text-h6" title="Add PizGer" value="home"></v-list-item>
                </div>
            </RouterLink>
            <RouterLink to="/chart">
                <div class="fancy-sidebar-item mb-9">
                    <b></b>
                    <b></b>
                    <v-list-item prepend-icon="mdi-chart-pie" class="text-h6" title="Statistics" value="home"></v-list-item>
                </div>
            </RouterLink>
        </v-list>
    </v-navigation-drawer>
</template>

<style lang="scss">
.v-navigation-drawer {
    .v-navigation-drawer__content {
        position: sticky;
        top: 0;
        height: 100vh;

        .v-list {
            .v-list-item__overlay {
                display: none;
            }

            .v-list-item {
                background: none;
                color: white;
            }

            .v-list-item--rounded {
                border-radius: 20px 0 0 20px;
            }

        }

        a:active {
            color: inherit;
        }

        .router-link-exact-active {
            .fancy-sidebar-item {
                position: relative;


                .v-list-item__overlay {
                    display: none;
                }

                .v-list-item {
                    border-radius: 20px 0 0 20px;
                    background: #edeff3;
                    color: #1a237e;
                }

                .v-list-item--active {
                    background-color: #edeff3 !important;
                }

                b {
                    &:nth-child(1) {
                        position: absolute;
                        top: -20px;
                        height: 20px;
                        width: 100%;
                        background-color: #edeff3;

                        &::before {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            border-bottom-right-radius: 20px;
                            background-color: #3949AB;

                        }
                    }

                    &:nth-child(2) {
                        position: absolute;
                        bottom: -20px;
                        height: 20px;
                        width: 100%;
                        background-color: #edeff3;

                        &::before {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            border-top-right-radius: 20px;
                            background-color: #3949AB;

                        }
                    }
                }
            }
        }
    }
}
</style>