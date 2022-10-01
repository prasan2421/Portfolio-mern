import { NextApiRequest, NextApiResponse } from 'next'
import {personalDetails} from "../../../data/PersonalDetails"

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(personalDetails)
}