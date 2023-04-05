const {Chores} = require('../db')



const errMessage = (error) => {
    const message = {
        err: 'Algo ha salido mal favor de intentar de nuevo',
        details: error
    }
    return  message
}

async function getAllChores(req, res) {
    try {
        const allchores = await Chores.findAll()
        res.status(200).send(allchores)
    } catch (error) {
        res.status(500).send(errMessage(error))
    }
}
async function createChore(req, res) {
    let {title, description} = req.body
    try {
        await Chores.create({
           
                title,
                description
            
        })
        res.status(201).json({
            msg: 'tarea creada con éxito'
        })
    } catch (error) {
        res.status(500).send(errMessage(error))
    }
}

async function toggleComplete(req, res) {
    let {chore } = req.query
    
try {
    const queryChore = await Chores.findOne({
        where: {
            id: chore
        }
    })

    queryChore.isCompleted = !queryChore.isCompleted

    await queryChore.save()
    res.status(200).send('realizado')
} catch (error) {
    res.status(500).send(errMessage(error))
}
}

async function updateChore(req, res) {
    let { chore } = req.query
    let {title, description} = req.body

    try {
        const queryChore = await Chores.findOne({
            where: {
                id: chore
            }
        })

        queryChore.title = title
        queryChore.description = description

        await queryChore.save()
        res.status(200).send('realizado')
    } catch (error) {
        res.status(500).send(errMessage(error))
    }
}

async function deleteChore(req, res) {
    let { chore } = req.query
    try {
        const queryChore = await Chores.findOne({
            where: {
                id: chore
            }
        })
        await queryChore.destroy()
        res.status(200).send('logrado')
    } catch (error) {
         res.status(500).send(errMessage(error))
    }
}

module.exports = {
    getAllChores,
    createChore,
    toggleComplete,
    deleteChore,
    updateChore
}