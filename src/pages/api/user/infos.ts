import type { NextApiRequest, NextApiResponse } from 'next';

import { connectDatabase } from '../../../services/database';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PATCH') {
    const { username, coinUuid } = req.body as { username: string; coinUuid: string };

    const client = connectDatabase();

    const existingUser = client.findOne({ username: username });

    if (!existingUser) {
      res.status(422).json({ message: 'User is not found!' });
      return;
    }

    const result = client.toggleOne(username, coinUuid);

    if (result) {
      res.status(201).json({ message: result });
    }
  }

  if (req.method === 'GET') {
    const { username, coinUuid } = req.query as { username: string; coinUuid: string };

    const client = connectDatabase();

    const existingUser = client.findOne({ username: username });

    if (!existingUser) {
      res.status(422).json({ message: 'User is not found!' });
      return;
    }

    const result = client.isAvailableInWatchList(username, coinUuid);

    if (result) {
      res.status(200).json({ message: result });
    }
  }
}

export default handler;
