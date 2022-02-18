import type { NextApiRequest, NextApiResponse } from 'next';

import { connectDatabase } from '../../../services/database';
import { hashPassword } from '../../../helper';
import { validatePassword, validateUserName } from '../../../helper/auth';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return;
  }

  const { username, password } = req.body;

  if (!validateUserName(username)) {
    res.status(422).json({
      message: 'User name is lowercase text only, 6-12 characters',
    });
    return;
  }

  if (!validatePassword(password)) {
    res.status(422).json({
      message: 'Password is lowercase, uppercase, number, 8-12 characters',
    });
    return;
  }

  const client = connectDatabase();

  const existingUser = client.findOne({ username: username });

  if (existingUser) {
    res.status(422).json({ message: 'User name exists already!' });
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = client.insertOne(username, hashedPassword);

  if (result) {
    res.status(201).json({ message: 'Created user!' });
  }
}

export default handler;
