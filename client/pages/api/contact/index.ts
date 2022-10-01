import type { NextApiRequest, NextApiResponse } from 'next'
import {contacts} from '../../../data/contacts'

type Data = {
    name: string
  }

export default (req: NextApiRequest, res: NextApiResponse<Data>
    ) => {
  
        const contact = req.body.data

        
        const newContact={
            id:Date.now(),
            name:contact.name,
            email:contact.email,
            message:contact.message,
        }
        // contacts.push(newContact)
        res.status(201).json(newContact)
        
  
}