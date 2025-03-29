import useLocalStorage, { LocalStorageKeys } from "../../hooks/useLocalStorage";
import { getCell, getRows } from "../../utils/utils";

const usePonto = () => {
  const { get } = useLocalStorage();

  const getPonto = (ponto: string) => {
    const pontos = get<string>(LocalStorageKeys.PONTOS);
    const rows = getRows(pontos);
    for (let r of rows) {
      const row = getCell(r);
      if (row[0] === ponto) {
        return row[1];
      }
    }
  };

  return { getPonto };
};

export default usePonto;
