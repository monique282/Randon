

import { personService } from "@/services/personServices";
import { Request, Response } from "express";

export async function getPerson(req: Request, res: Response) {
    const person =  await personService.getPerson();
    res.send(person);
  }

  