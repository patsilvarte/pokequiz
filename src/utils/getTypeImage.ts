declare const require: {
  context: (
    path: string,
    deep?: boolean,
    filter?: RegExp
  ) => {
    keys: () => string[];
    (key: string): string;
  };
};

const images = require.context("../assets/types", false, /\.png$/);

export const getTypeImage = (name: string): string => {
  try {
    return images(`./${name.toLowerCase()}.png`);
  } catch (e) {
    console.warn(`No image found for ${name} type`);
    return "";
  }
};
