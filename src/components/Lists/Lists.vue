<template>
    <v-navigation-drawer permanent style="width: 100%">
        <v-toolbar color="blue" dark>
            <v-toolbar-title v-if="!DISPLAY_SEARCH_LIST">Your lists</v-toolbar-title>
            <SearchBar v-if="DISPLAY_SEARCH_LIST" />
            <v-spacer></v-spacer>
            <v-btn icon @click.prevent="toggleSearchList()">
                <v-icon>search</v-icon>
            </v-btn>
        </v-toolbar>
        <v-list>
            <v-list-item color="blue" @click.prevent="openNewListForm()" v-if="!isOpen">
                <v-list-item-content>
                    <v-list-item-title>Create a new list</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-list-item-title>
                        <v-icon>add</v-icon>
                    </v-list-item-title>
                </v-list-item-action>
            </v-list-item>
            <v-list-item v-if="openNewListFormValue">
                <NewList />
            </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list style="height: calc(100% - 128px); overflow-y: scroll">
            <v-list-item
                :to="{ name: 'tasks', params: { id: list.id } }"
                v-for="(list, key) in lists"
                v-bind:key="key"
            >
                <v-list-item-content>{{ list.title }}</v-list-item-content>
                <v-list-item-action>
                    <v-list-item-title>{{ list.tasks }}</v-list-item-title>
                </v-list-item-action>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
<style>
    .v-navigation-drawer__content {
        overflow: hidden;
    }
</style>
<script>
    import SearchBar from '../SearchBar'
    import { mapGetters } from 'vuex'
    import NewList from './NewList'
    export default {
        name: 'lists',
        components: { SearchBar, NewList },
        data: () => ({
            isOpen: false,
            lists: [
                {
                    id: 1,
                    title: "List",
                    tasks: 12
                },
                {
                    id: 2,
                    title: "List",
                    tasks: 45
                },
                {
                    id: 3,
                    title: "List",
                    tasks: 57
                },
                {
                    id: 4,
                    title: "List",
                    tasks: 90
                },
                {
                    id: 5,
                    title: "List",
                    tasks: 12
                },
                {
                    id: 6,
                    title: "List",
                    tasks: 45
                },
                {
                    id: 7,
                    title: "List",
                    tasks: 57
                },
                {
                    id: 8,
                    title: "List",
                    tasks: 90
                },
                {
                    id: 9,
                    title: "List",
                    tasks: 12
                },
                {
                    id: 10,
                    title: "List",
                    tasks: 45
                },
                {
                    id: 11,
                    title: "List",
                    tasks: 57
                },
                {
                    id: 12,
                    title: "List",
                    tasks: 90
                },
                {
                    id: 13,
                    title: "List",
                    tasks: 12
                },
                {
                    id: 14,
                    title: "List",
                    tasks: 45
                },
                {
                    id: 15,
                    title: "List",
                    tasks: 57
                },
                {
                    id: 16,
                    title: "List",
                    tasks: 90
                },
                {
                    id: 17,
                    title: "List",
                    tasks: 12
                },
                {
                    id: 18,
                    title: "List",
                    tasks: 45
                },
                {
                    id: 19,
                    title: "List",
                    tasks: 57
                },
                {
                    id: 20,
                    title: "List",
                    tasks: 90
                },
                {
                    id: 21,
                    title: "List",
                    tasks: 12
                },
                {
                    id: 22,
                    title: "List",
                    tasks: 45
                },
                {
                    id: 23,
                    title: "List",
                    tasks: 57
                },
                {
                    id: 24,
                    title: "List",
                    tasks: 90
                },
                {
                    id: 25,
                    title: "List",
                    tasks: 12
                },
                {
                    id: 26,
                    title: "List",
                    tasks: 45
                },
                {
                    id: 27,
                    title: "List",
                    tasks: 57
                },
                {
                    id: 28,
                    title: "List",
                    tasks: 90
                },
                {
                    id: 29,
                    title: "List",
                    tasks: 12
                },
                {
                    id: 30,
                    title: "List",
                    tasks: 45
                },
                {
                    id: 31,
                    title: "List",
                    tasks: 57
                },
                {
                    id: 32,
                    title: "List",
                    tasks: 90
                }
            ]
        }),
        computed: {
            ...mapGetters(['DISPLAY_SEARCH_LIST']),
            openNewListFormValue: {
                get () {
                    return this.$store.getters.NEW_LIST_FORM;
                },
                set (value) {
                    this.$store.commit("SET_NEW_LIST_FORM", value);
                }
            }
        },
        methods: {
            toggleSearchList () {
                this.$store.commit("SET_DISPLAY_SEARCH_LIST", !this.DISPLAY_SEARCH_LIST);
            },
            openNewListForm() {
                this.$store.commit("SET_NEW_LIST_FORM", true);
            }
        }
    }
</script>