import { getNumero } from "./Numeros";
import { PontosTPE } from "./PontosTpe";

const getNome = (nomePessoa: string) => {
  const firstName = nomePessoa.trim().split(" ")[0];
  return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
};

const getNomeDescritivo = (nome: string) => {
  const semIdade = nome.split("(")[0].trim();
  const split = semIdade.split(" ");
  return `${split[0]} ${split[split.length - 1]}`;
};

const getData = (data: string) => {
  const split = data.split("/");
  return {
    dia: split[0],
    mes: split[1],
    ano: split[2],
    anoSimples: split[2].substring(2),
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

const formatTelefone = (telefone: string) => {
  const cleanedNumber = telefone.replace(/[()\-\s]/g, "");
  return cleanedNumber ? "https://wa.me/550" + cleanedNumber : "-----";
};

export const getRows = (planilha?: string | null) => {
  const rows = planilha?.split("\n") ?? [];
  return rows.map((row) => {
    const cell = row.split(`\t`);
    const dataDescritivo = cell[4];
    const dataFatiada = getData(dataDescritivo);

    return {
      ponto: PontosTPE[cell[0].trim() as keyof typeof PontosTPE],
      pub1: {
        descritivo: getNomeDescritivo(cell[1]),
        nome: cell[1],
        firstNome: getNome(cell[1]),
        numero: getNumero(cell[1]),
        numeroLink: formatTelefone(getNumero(cell[1])),
      },
      pub2: {
        descritivo: getNomeDescritivo(cell[2]),
        nome: cell[2],
        firstNome: getNome(cell[2]),
        numero: getNumero(cell[2]),
        numeroLink: formatTelefone(getNumero(cell[2])),
      },
      retiradaEntrega: PontosTPE[cell[3].trim() as keyof typeof PontosTPE],
      data: {
        descritivo: dataDescritivo,
        ...dataFatiada,
      },
      horario: getHorario(cell[5]),
    };
  });
};
