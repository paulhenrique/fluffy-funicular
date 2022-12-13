export interface Key {
  [key: string]: string;
}

// função que busca na string as chaves e substitui pela tradução
export const translate = (text: string, keys: Key) => {
  const regex = /\[(\w+)\]/g;
  const matches = text.match(regex);

  if (matches) {
    matches.forEach((match) => {
      const key = match.replace("[", "").replace("]", "");
      const value = keys[key];
      if (!value) {
        return text;
      }
      text = text.replace(match, value);
    });
  }
  return text;
};
