<template>
    <v-layout row justify-center>
        <v-dialog v-model="open" max-width="60%" scrollable="">
            <v-card>
                <v-card-title>
                    <span class="headline">Task title</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-form>
                            <v-textarea
                                outline
                                v-model="note"
                                label="Note"
                                placeholder="Start writing your note here"
                            >
                            </v-textarea>
                            <v-btn color="success">Save</v-btn>
                        </v-form>
                    </v-container>
                    <v-list three-line subheader>
                        <v-subheader>Notes</v-subheader>
                        <v-list-item 
                            v-for="(note, key) in notes"
                            v-bind:key="key"
                        >
                            <v-list-item-content>
                                <v-list-item-title>{{ note.note }}</v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-btn icon>
                                    <v-icon color="red">delete</v-icon>
                                </v-btn>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                </v-card-text>
                <v-card-actions>
                    <v-btn text color="primary">Close</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn text color="red" dark>Remove Task</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
    export default {
        name: "notesModal",
        data: () => ({
            note: '',
            open: true,
            notes: [
                {
                    id: 1,
                    note: 'Some random note'
                },
                {
                    id: 2,
                    note: 'Some random note'
                },
                {
                    id: 3,
                    note: 'Some random note'
                },
                {
                    id: 4,
                    note: 'Some random note'
                },
                {
                    id: 5,
                    note: 'Some random note'
                },
                {
                    id: 1,
                    note: 'Some random note'
                },
                {
                    id: 2,
                    note: 'Some random note'
                },
                {
                    id: 3,
                    note: 'Some random note'
                },
                {
                    id: 4,
                    note: 'Some random note'
                },
                {
                    id: 5,
                    note: 'Some random note'
                },
                {
                    id: 1,
                    note: 'Some random note'
                },
                {
                    id: 2,
                    note: 'Some random note'
                },
                {
                    id: 3,
                    note: 'Some random note'
                },
                {
                    id: 4,
                    note: 'Some random note'
                },
                {
                    id: 5,
                    note: 'Some random note'
                }
            ]
        })
    }
</script>