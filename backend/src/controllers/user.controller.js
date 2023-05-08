import { findUsers, createUser } from "../services/UserServices.js";

export const getUsers = async (req, res) => {
    try {
        const users = await findUsers()
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const postUser = async (req, res) => {
    try {
        const { nombre, email, password } = req.body
        //const {first_name, last_name, email, age, password} = req.body
        const newUser = createUser({ nombre, email, password })
        //const newUser = createUser({ nombre, apellido, email, age, password })
        res.status(200).send(newUser)
    } catch (error) {
        res.status(500).send('Ocurrio un error en postUser', error)
    }
}

/* CODIGO DEL ANTERIOR EJERCICIO
import { getManagerUsers } from "../dao/daoManager.js";
import { createHash } from "../utils/bcrypt.js";

const data = await getManagerUsers()
export const managerUser = new data.ManagerUserMongoDB

export const createUser = (req, res) => {
    res.send({ status: "success", message: "User created " })
}

export const getUserById = async (req, res) => {
    const { id } = req.params
    try {
        const user = await managerUser.getElementById(id)
        if (user) {
            return res.status(200).json({
                message: user
            })
        }
        return res.status(200).json({
            message: "Usuario no encontrado"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const getUserByEmail = async (email) => {
    try {
        const user = await managerUser.getElementByEmail(email)
        if (user) {
            return user
        }
        return "Usuario no encontrado"

    } catch (error) {
        return error
    }
}
*/
