import {FastifyReply, FastifyRequest} from "fastify";
import {CONTACT} from "../schemas/ContactSchema";
import {z} from "zod";

export async function getContacts(request: FastifyRequest, reply: FastifyReply) {
    await request.jwtVerify()

    try {
        const contacts = await CONTACT.find({user: request.user.sub})

        return reply.status(200).send({contacts})
    } catch (error) {
        return reply.status(400).send()
    }
}

export async function getContact(request: FastifyRequest, reply: FastifyReply) {
    await request.jwtVerify()

    try {
        const getContactParamsSchema = z.object({
            id: z.string(),
        })

        const {id} = getContactParamsSchema.parse(request.params)

        const contact = await CONTACT.findOne({user: request.user.sub, _id: id})

        return reply.status(200).send({contact})
    } catch (error) {
        return reply.status(400).send()
    }
}

export async function editContact(request: FastifyRequest, reply: FastifyReply) {
    await request.jwtVerify()

    try {
        const editContactParamsSchema = z.object({
            id: z.string(),
        })

        const editContactBodySchema = z.object({
            name: z.string(),
            last_name: z.string(),
            phone: z.string(),
            email: z.string(),
            address: z.string(),
            birth_date: z.string(),
        })

        const {id} = editContactParamsSchema.parse(request.params)
        const contact = editContactBodySchema.parse(request.body)

        await CONTACT.updateOne({user: request.user.sub, _id: id}, contact)

        return reply.status(200).send()
    } catch (error) {
        return reply.status(400).send()
    }
}

export async function deleteContact(request: FastifyRequest, reply: FastifyReply) {
    await request.jwtVerify()

    try {
        const deleteContactBodySchema = z.object({
            id: z.string(),
        })

        const {id} = deleteContactBodySchema.parse(request.params)

        await CONTACT.deleteOne({user: request.user.sub, _id: id})

        return reply.status(200).send()
    } catch (error) {
        return reply.status(400).send()
    }
}

export async function createContact(request: FastifyRequest, reply: FastifyReply) {
    await request.jwtVerify()

    try {
        const createContactBodySchema = z.object({
            name: z.string(),
            last_name: z.string(),
            phone: z.string(),
            email: z.string(),
            address: z.string(),
            birth_date: z.string(),
        })

        const newContact = createContactBodySchema.parse(request.body)

        await CONTACT.create({...newContact, user: request.user.sub})

        return reply.status(201).send()
    } catch (error) {
        console.log(error)
        return reply.status(400).send()
    }
}
