// loads all images from /src/Assets at build-time
export const images = import.meta.glob("/src/Assets/*", { eager: true });

// return the resolved url or null (NOT an empty string)
export function getImage(path) {
  if (!path) return null;
  // ensure we use a leading slash because import.meta.glob keys include it
  const key = path.startsWith("/") ? path : `/${path}`;
  return images[key]?.default ?? null;
}
