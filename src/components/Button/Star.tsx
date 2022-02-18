import { FC, useState, useEffect } from 'react';
import { Session } from 'next-auth';
import Router from 'next/router';
import { useSession } from 'next-auth/react';
import { IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import { toggleWatchList, getActiveStatus } from '../../helper';

interface Props {
  uuid: string;
}

export const Star: FC<Props> = ({ uuid }) => {
  const [isActive, setIsActive] = useState(false);
  const { data: session } = useSession();

  const handleActive = (message: string | undefined) => {
    if (message === 'active') {
      setIsActive(true);
    }
    if (message === 'unActive') {
      setIsActive(false);
    }
  };

  useEffect(() => {
    const getStatus = async (username: string, uuid: string) => {
      const message = await getActiveStatus(username, uuid);
      handleActive(message);
    };

    const username = session?.user?.name;

    if (username) {
      getStatus(username, uuid);
    }
  }, [session?.user?.name, uuid]);

  const handleToggleWatchList = async () => {
    if (!session) {
      Router.push('/auth');
    } else {
      const username = session?.user?.name;
      if (username) {
        const message = await toggleWatchList(username, uuid);
        handleActive(message);
      }
    }
  };

  return (
    <IconButton onClick={handleToggleWatchList} color={isActive ? 'warning' : 'default'}>
      <StarBorderIcon />
    </IconButton>
  );
};
