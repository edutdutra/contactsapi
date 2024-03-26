import {z} from "zod";
import {hash, compare} from "bcryptjs";
import {USER} from "../schemas/UserSchema";
import {FastifyReply, FastifyRequest} from 'fastify'

export async function register(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
    })

    const {name, email, password} = registerBodySchema.parse(request.body)
    const password_hash = await hash(password, 6)

    await USER.create({name, email, password_hash})

    return reply.status(201).send()
}

export async function login(request: FastifyRequest, reply: FastifyReply) {
    const loginBodySchema = z.object({
        email: z.string().email(),
        password: z.string(),
    })

    const {email, password} = loginBodySchema.parse(request.body)
    const user = await USER.findOne({email})

    if (!user) {
        return reply.status(404).send()
    }

    const isValid = await compare(password, user.password_hash)

    if (!isValid) {
        return reply.status(400).send()
    }

    const token = await reply.jwtSign({}, {
        sign: {
            sub: user.id
        }
    })

    return reply.status(200).send({token, user})
}
