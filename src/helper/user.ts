/**
 * Toggle in watch list
 */
export async function toggleWatchList(username: string, coinUuid: string) {
  const response = await fetch('/api/user/infos', {
    method: 'PATCH',
    body: JSON.stringify({ username, coinUuid }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data.message;
}

/**
 * Get coin's active status in watch list
 */
export async function getActiveStatus(username: string, coinUuid: string) {
  const response = await fetch(`/api/user/infos?username=${username}&coinUuid=${coinUuid}`, {
    method: 'GET',
  });
  const data = await response.json();

  return data.message;
}

/**
 * Get user's watch list
 */
export async function getWatchList(username: string) {
  const response = await fetch(`/api/user/watch-list?username=${username}`, {
    method: 'GET',
  });

  if (response.status !== 200) {
    return [];
  }

  const data = await response.json();
  return data.watchList ?? [];
}
