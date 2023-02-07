<template>
    <v-navigation-drawer border="0" class="bg-deep-purple">
        <v-list class="pt-8 pr-0" density="compact" nav>
            <RouterLink to="/" exact>
                <div class="fancy-sidebar-item mb-9">
                    <b></b>
                    <b></b>
                    <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
                </div>
            </RouterLink>
            <RouterLink to="/404">
                <div class="fancy-sidebar-item mb-9">
                    <b></b>
                    <b></b>
                    <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
                </div>
            </RouterLink>
        </v-list>
    </v-navigation-drawer>
</template>

<style lang="scss">
.v-navigation-drawer {
    .router-link-active {
        .fancy-sidebar-item {
            position: relative;

            .v-list-item__overlay {
                display: none;
            }

            .v-list-item {
                border-radius: 20px 0 0 20px;
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
                        background-color: #673ab7;

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
                        background-color: #673ab7;

                    }
                }
            }
        }
    }

}
</style>