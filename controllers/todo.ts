interface Todo {
    id: string,
    text: string,
}

const todos : Todo[] = [];

exports.displayTodos = (req: any, res: any, next: any) => {
    try {
        res.json(todos);
    } 
    catch (error) {
        console.log(error);
        res.status(500).json({message: 'Error in displaying Todos'});
    }
}

exports.addTodos = (req: any, res: any, next: any) => {
    try {
        const { text } = req.body;
        let id : string= new Date().toISOString()
        const todo: Todo = { id, text}
        todos.push(todo);
        res.json({ id })
    } 
    catch (error) {
        console.log(error);
        res.status(500).json({message: 'Error in adding Todos'});
    }
}

exports.deleteTodos = (req: any, res: any, next: any) => {
    try {
        const id : string = req.body.id

        let index: number = -1;
        todos.forEach((todo, i) => index = todo.id === id? i : -1);

        if(index === -1) {
            return res.json({ message: "Todo not found" });
        } else {

            todos.splice(index, 1);
            return res.json({ Message: "Todo deleted" })
        }
    } 
    catch (error) {
        console.log(error);
        res.status(500).json({message: 'Error in adding Todos'});
    }
}

exports.editTodos = (req: any, res: any, next: any) => {
    try {
        const todo: Todo = req.body;

        let index: number = -1;
        todos.forEach((todo, i) => index = todo.id === todo.id? i : -1);

        if(index === -1) {
            return res.json({ message: "Todo not found" });
        } else {

            todos[index] = todo;
            return res.json({ Message: "Todo edited" })
        }
    } 
    catch (error) {
        console.log(error);
        res.status(500).json({message: 'Error in adding Todos'});
    }
}