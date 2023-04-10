export const parseDate = (data: string) => {
  const date = new Date(data);
  return date.toDateString();
};
