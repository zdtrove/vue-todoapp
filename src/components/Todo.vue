<template>
    <div>
        <v-container fluid pl-0 pr-0 pb-0 pt-0>
            <v-layout row align-space-between justify-space-between>
                <v-flex lg3 pl-2 pr-2 style="max-height: 96.3vh">
                    <Lists />
                </v-flex>
                <v-flex lg6 pr-2 pl-2 style="max-height: 96.3vh">
                    <Tasks />
                </v-flex>
                <v-flex lg3 pl-2>
                    <OptionsBar />
                </v-flex>
            </v-layout>
        </v-container>
        <v-footer height="auto" color="indigo">
            <v-layout justify-center>
                <v-flex indigo white--text text-center>
                    &copy;2019
                    <strong>Overseas Media</strong>
                </v-flex>
            </v-layout>
        </v-footer>
    </div>
</template>

<script>
    import Lists from './Lists'
    import Tasks from './Tasks'
    import OptionsBar from './OptionsBar'
    export default {
        name: 'todo',
        components: { Lists, Tasks, OptionsBar }
    }
</script>