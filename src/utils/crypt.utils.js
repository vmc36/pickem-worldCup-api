import bcrypt from 'bcrypt'

export async function hashPassword(password) {
    const saltRounds = 10
    return bcrypt.hash(password, saltRounds)
}

export function comparePassword(password, hash) {
    return bcrypt.compare(password, hash)
}