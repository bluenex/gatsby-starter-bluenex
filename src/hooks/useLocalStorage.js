import { useEffect } from 'react';
import useGlobal from '../store';

function useLocalStorage(localStorageKey) {
  // define a key used to save data to localStorage
  const key = localStorageKey;

  // link with useGlobal
  const [globalState, globalActions] = useGlobal();

  // do this only once when component mounted
  useEffect(() => {
    // rehydrate when retrieving data from localStorage
    globalActions.rehydrateStore(
      JSON.parse(localStorage.getItem(key)),
    );
  }, [globalActions, key]);

  // do this when global state is updated
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(globalState));
  }, [globalState, key]);
}

export default useLocalStorage;
