const { createApp } = Vue;

createApp({
    data() {
        return {
            todos: [],
            enteredTodo: ""
        }
    },
    methods: {
        addTodo() {
            if(this.enteredTodo != "") {
                var newTodo = {
                    completed: false,
                    content: this.enteredTodo
                };

                this.todos.push(newTodo);

                this.enteredTodo = "";
            } else {
                alert("Please enter a task");
            }
        },
        toggleCompleted(index) {
            console.log("Is now checked");
            this.todos[index].completed = !this.todos[index].completed;
            console.log(this.todos[index].completed);
        },
        removeTodo(index) {

            // set the completed status to false
            // before removing it
            //this.todos[index].completed = false;

            // Remove the element at the index, only one from left to right
            // which ends up removing just the todo with that index
            this.todos.splice(index, 1);

            console.log(this.todos);
        }
    }
}).mount("#app");