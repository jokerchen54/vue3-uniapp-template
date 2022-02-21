export const getImageUrl = (name) => new URL(`/src/static/images/${name}`, import.meta.url).href;
