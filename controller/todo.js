let todos = ['makan', 'tidur', 'laporan praktikum']

const getTodo = (req, res) => {
    let jumlah_data = todos.length;
    res.json({
        data: todos,
        length: jumlah_data
    })
}

const createTodo = (req, res) => {
    const { todo } = req.body
    
    if (!todo) {
        res.status(400).json("Gagal create todo, payload tidak valid !")
        return;
    }

    todos.push(todo)
    res.status(201).json("Berhasil create todo !")
}

const updateTodo = (req, res) => {
    const { value } = req.params
    const { todo } = req.body
    let index = todos.findIndex((t) => t == value)
    todos[index] = todo
    res.status(200).json({ msg: "Berhasil update todo !" })
}

const deleteTodo = (req, res) => {
    const { value } = req.params
    let index = todos.findIndex((t) => t == value)
    todos.splice(index, 1)
    res.status(200).json({ msg: "Berhasil delete todo !" })
}

module.exports = { getTodo, createTodo, updateTodo, deleteTodo }