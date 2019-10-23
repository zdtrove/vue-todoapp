<template>
    <v-card style="height: 100%; overflow: hidden">
        <v-toolbar color="blue" dark>
            <v-toolbar-title>Title of the list</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
        </v-toolbar>
        <v-list two-line style="height: calc(100% - 128px); overflow-y: scroll">
            <template
                v-for="(task, key) in tasks"
            >
                <Task v-bind:key="key" :task="task" :index="key" />
            </template>
        </v-list>
        <v-divider></v-divider>
        <v-card-actions>
            <v-layout>
                <v-flex>
                    <NewTask />
                </v-flex>
            </v-layout>
        </v-card-actions>
    </v-card>
</template>

<script>
    import Task from './Task'
    import NewTask from './NewTask'
    export default {
        name: 'tasks',
        components: { Task, NewTask },
        data: () => ({
            tasks: [
                {
                    id: 1,
                    title: 'Task title',
                    sub_title: 'This task contain 8 notes',
                    isComplete: true
                },
                {
                    id: 2,
                    title: 'Task title',
                    sub_title: 'This task contain 8 notes',
                    isComplete: true
                },
                {
                    id: 3,
                    title: 'Task title',
                    sub_title: 'This task contain 8 notes',
                    isComplete: true
                },
                {
                    id: 4,
                    title: 'Task title',
                    sub_title: 'This task contain 8 notes',
                    isComplete: false
                },
                {
                    id: 5,
                    title: 'Task title',
                    sub_title: 'This task contain 8 notes',
                    isComplete: true
                },
                {
                    id: 6,
                    title: 'Task title',
                    sub_title: 'This task contain 8 notes',
                    isComplete: false
                },
                {
                    id: 7,
                    title: 'Task title',
                    sub_title: 'This task contain 8 notes',
                    isComplete: true
                },
                {
                    id: 8,
                    title: 'Task title',
                    sub_title: 'This task contain 8 notes',
                    isComplete: true
                },
                {
                    id: 9,
                    title: 'Task title',
                    sub_title: 'This task contain 8 notes',
                    isComplete: true
                },
                {
                    id: 10,
                    title: 'Task title',
                    sub_title: 'This task contain 8 notes',
                    isComplete: true
                },
                {
                    id: 11,
                    title: 'Task title',
                    sub_title: 'This task contain 8 notes',
                    isComplete: false
                },
                {
                    id: 12,
                    title: 'Task title',
                    sub_title: 'This task contain 8 notes',
                    isComplete: true
                },
                {
                    id: 13,
                    title: 'Task title',
                    sub_title: 'This task contain 8 notes',
                    isComplete: false
                },
                {
                    id: 14,
                    title: 'Task title',
                    sub_title: 'This task contain 8 notes',
                    isComplete: true
                },
                {
                    id: 15,
                    title: 'Task title',
                    sub_title: 'This task contain 8 notes',
                    isComplete: true
                },
                {
                    id: 16,
                    title: 'Task title',
                    sub_title: 'This task contain 8 notes',
                    isComplete: true
                },
                {
                    id: 17,
                    title: 'Task title',
                    sub_title: 'This task contain 8 notes',
                    isComplete: true
                },
                {
                    id: 18,
                    title: 'Task title',
                    sub_title: 'This task contain 8 notes',
                    isComplete: false
                },
                {
                    id: 19,
                    title: 'Task title',
                    sub_title: 'This task contain 8 notes',
                    isComplete: true
                },
                {
                    id: 20,
                    title: 'Task title',
                    sub_title: 'This task contain 8 notes',
                    isComplete: false
                },
                {
                    id: 21,
                    title: 'Task title',
                    sub_title: 'This task contain 8 notes',
                    isComplete: true
                }
            ]
        })
    }
</script>