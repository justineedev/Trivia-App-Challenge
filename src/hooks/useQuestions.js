import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useQuestions() {
  // local states
  const [questions, setQuestions] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  // fetch the questions from an API
  // and store it in a state
  useEffect(() => {
    setIsFetching(true);

    axios
      .get('?limit=10&type=boolean')
      .then(({ data }) => !!data && setQuestions(data))
      .catch(({ response }) => setError(response.data.error))
      .finally(() => setIsFetching(false));
  }, []);

  //return the local states
  return { questions, isFetching, error };
}
