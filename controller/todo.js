let todos = ['makan', 'tidur', 'laporan praktikum']

const getTodo = (req, res) => {
    let jumlah_data = todos.length
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
    res.send("Ini halaman update !" + req.params.id)
}

const deleteTodo = (req, res) => {
    res.send("Ini halaman delete !")
}

module.exports = { getTodo, createTodo, updateTodo, deleteTodo }