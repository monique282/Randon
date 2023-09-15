import { Person } from "@/protocols/game-protocol";
import { personRepository } from "@/repositories/personRepository";

function drawNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


async function getPerson(): Promise<Person> {
    const person = await personRepository.getPerson();

    // para fazer o sorteiro primeiro vamos ver quantas posições tem o person
    const quant: number = person.length;
    const drawnNumber: number = drawNumber(0, quant - 1);

    const respose: Person = person[drawnNumber]

    return respose;
}

export const personService = { getPerson }
