import { db } from "@/dataBase/dataBase";
import { Person } from "@/protocols/game-protocol";


async function getPerson() {
    const person = await db.query<Person>(`
    SELECT * FROM people;
    `)
    return person.rows
}

export const personRepository = {getPerson};