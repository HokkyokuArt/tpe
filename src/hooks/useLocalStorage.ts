const useLocalStorage = () => {
  return {
    get: <T>(key: string): T | null => {
      const crudState = window.localStorage.getItem(key);
      if (crudState) {
        try {
          return JSON.parse(crudState) as T;
        } catch (error) {
          return crudState as T;
        }
      }
      return null;
    },
    put: (key: string, value: unknown) => {
      let toPut: string;
      try {
        toPut = JSON.stringify(value);
      } catch (error) {
        toPut = "" + value;
      }

      window.localStorage.setItem(key, toPut);
    },
    clear: (key?: string) => {
      if (!key) {
        return window.localStorage.clear();
      }
      window.localStorage.removeItem(key);
    },
  };
};

export default useLocalStorage;
