import type { NextApiRequest, NextApiResponse } from 'next';

import { connectDatabase } from '../../../services/database';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { username } = req.query as { username: string; coinUuid: string };

    const client = connectDatabase();

    const existingUser = client.findOne({ username: username });

    if (!existingUser) {
      res.status(422).json({ message: 'User is not found!' });
      return;
    }

    const result = client.getWatchList(username);

    if (result) {
      res.status(200).json({ watchList: result });
    }
  }
}

export default handler;
