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