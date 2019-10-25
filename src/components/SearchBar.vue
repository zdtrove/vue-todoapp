<template>
    <input 
        type="text"
        placeholder="Search..."
        v-model.trim="input"
        v-on:input="search()"
        ref="input"
        @blur="closeSearchBar()"
    />
</template>

<script>
    export default {
        // name: 'searchBar',
        data: () => ({
            input: ''
        }),
        methods: {
            search() {
                // eslint-disable-next-line no-console
                console.log(this.input);
            },
            closeSearchBar() {
                this.$store.commit("SET_DISPLAY_SEARCH_LIST", false);
            }
        }
    }
</script>