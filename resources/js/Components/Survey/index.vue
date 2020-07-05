<template>
    <v-app>
        <v-container
        id="container"
        :fluid="$vuetify.breakpoint.sm ? true : false"
        >
        <!--Header -->
            <v-row>
                <v-col
                id="header"
                class="ma-0 pa-0"
                cols="12"
                >
                    <v-card
                    class="rounded-0"
                    height="100%"
                    color="#D60000"
                    >
                        <p
                        id = "title"
                        class="text-sm-h1 text-xl-h3"
                        >Anketa o spletnih straneh, ki prodajajo avtomobile</p>
                    </v-card>
                </v-col>
            </v-row>

            <v-row>
                <v-col
                cols="12"
                class="ma-0 pa-0">
                    <v-stepper
                    id="stepper"
                    class="rounded-0"
                    >
                        <v-stepper-header>
                            <v-stepper-step step="1" color="white"></v-stepper-step>

                            <v-divider class="divider"></v-divider>

                            <v-stepper-step step="2" color="white"></v-stepper-step>

                            <v-divider class="divider"></v-divider>

                            <v-stepper-step step="3" color="white"></v-stepper-step>

                            <v-divider class="divider"></v-divider>

                            <v-stepper-step step="4" color="white"></v-stepper-step>

                            <v-divider class="divider"></v-divider>

                            <v-stepper-step step="5" color="white"></v-stepper-step>
                        </v-stepper-header>
                        <!-- Content area -->
                        <v-stepper-items>
                            <v-stepper-content
                            id="stepperContent"
                            >

                            </v-stepper-content>
                        </v-stepper-items>
                    </v-stepper>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>


<style scoped>
    #header{
        height: 150px;
    }
    #stepper{
        background-color: #9C0000;
    }
    #stepperContent{
        background-color: #F5F5F6;
        display: block !important;
        height: 74vh;
    }
    #title{
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: bold;
        color: white;
    }
    .divider{
        display: none;
    }
    @media only screen and (max-width: 959px){
        #container{
            position: relative;
            bottom: 12px;
        }
    }
</style>
