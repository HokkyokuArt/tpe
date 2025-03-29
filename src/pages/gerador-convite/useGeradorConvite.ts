import { getCell, getRows } from "../../utils/utils";
import usePessoa, { Publicador } from "../pessoas/usePessoa";
import usePonto from "../pontos/usePonto";

enum ColumnsIndex {
  PONTO = 0,
  PUB1 = 1,
  PUB2 = 3,
  RETIRADA_ENTREGA = 5,
  DATA = 6,
  HORA = 7,
}

export type GeradorData = {
  ponto: string;
  pub1: Publicador;
  pub2: Publicador;
  retiradaEntrega: string;
  data: any;
  horario: any;
};

const useGeradorConvite = () => {
  const { dadosPublicador } = usePessoa();
  const { getPonto } = usePonto();

  const getDate = (data: string) => {
    const split = data.split("/");
    const dia = split[0].padStart(2, "0");
    const mes = split[1].padStart(2, "0");
    const ano = split[2];
    return {
      dia,
      mes,
      ano,
      anoSimples: ano.substring(2),
      descritivo: `${dia}/${mes}/${ano}`,
    };
  };

  const getHorario = (horario: string) => {
    const split = horario.split(" - ");
    return {
      inicio: split[0],
      inicioSimples: split[0].substring(0, 2),
      fim: split[1],
      fimSimples: split[1].substring(0, 2),
    };
  };

  const getData = (planilha?: string | null): GeradorData[] => {
    return getRows(planilha).map((row) => {
      const cell = getCell(row);

      return {
        ponto: getPonto(cell[ColumnsIndex.PONTO])!,
        pub1: dadosPublicador(cell[ColumnsIndex.PUB1]),
        pub2: dadosPublicador(cell[ColumnsIndex.PUB2]),
        retiradaEntrega: getPonto(cell[ColumnsIndex.RETIRADA_ENTREGA])!,
        data: getDate(cell[ColumnsIndex.DATA]),
        horario: getHorario(cell[ColumnsIndex.HORA]),
      };
    });
  };

  return {
    getData,
  };
};

export default useGeradorConvite;
