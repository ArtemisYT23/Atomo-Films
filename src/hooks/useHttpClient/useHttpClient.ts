import { useState } from 'react';
import { isTmdbApi, ENGINES } from '@/api/clients';

const useApi = () => {
  const [api] = useState({
    engine: ENGINES.TMDBCLIENT,
    client: isTmdbApi,
  });

  return {
    api,
  };
};

export default useApi;