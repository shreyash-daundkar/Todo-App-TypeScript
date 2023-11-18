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