export const getRows = (data?: string | null): string[] => {
  return data?.split("\n") ?? [];
};

export const getCell = (row: string): string[] => {
  return row.split(`\t`);
};
