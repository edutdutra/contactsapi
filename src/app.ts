import fastify from 'fastify'
import {config} from 'dotenv'
import fastifyJwt from "@fastify/jwt";
import {login, register} from "./routes/auth";
import {createContact, deleteContact, editContact, getContact, getContacts} from "./routes/contacts";

config()


export const app = fastify()

app.register(fastifyJwt, {
    secret: process.env.JWT_SECRET
})

app.post('/auth/register', register)
app.post('/auth/login', login)


app.post('/contacts', createContact)
app.get('/contacts', getContacts)
app.get('/contacts/:id', getContact)
app.put('/contacts/:id', editContact)
app.delete('/contacts/:id', deleteContact)


