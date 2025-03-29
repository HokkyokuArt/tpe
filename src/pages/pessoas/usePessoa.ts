import useLocalStorage, { LocalStorageKeys } from "../../hooks/useLocalStorage";

export type Publicador = {
  descritivo: string;
  nome: string;
  firstNome: string;
  numero: string;
  numeroLink: string;
};

const usePessoa = () => {
  const { get } = useLocalStorage();

  const getNome = (nomePessoa: string) => {
    const firstName = nomePessoa.trim().split(" ")[0];
    return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  };

  const getNomeDescritivo = (nome: string) => {
    const semIdade = nome.split("(")[0].trim();
    const split = semIdade.split(" ");
    return `${split[0]} ${split[split.length - 1]}`;
  };

  const getNumero = (nome: string) => {
    const numerosPlanilha = get<string>(LocalStorageKeys.PESSOAS);
    const linhas = numerosPlanilha?.split("\n") ?? [];
    const linha = linhas.find((l) => l.trim().startsWith(nome));
    if (!linha) throw "Linha não encontrada! Atualize a lista.";

    const toReturn = linha.split("\t")[2];
    if (!toReturn || toReturn === "TRF") throw "Número inválido";
    return toReturn;
  };

  const formatTelefone = (telefone: string) => {
    const cleanedNumber = telefone.replace(/[()\-\s]/g, "");
    return cleanedNumber ? "https://wa.me/550" + cleanedNumber : "-----";
  };

  const dadosPublicador = (nome: string): Publicador => {
    return {
      descritivo: getNomeDescritivo(nome),
      nome: nome,
      firstNome: getNome(nome),
      numero: getNumero(nome),
      numeroLink: formatTelefone(getNumero(nome)),
    };
  };
  return {
    getNomeDescritivo,
    getNumero,
    formatTelefone,
    dadosPublicador,
  };
};

export default usePessoa;
