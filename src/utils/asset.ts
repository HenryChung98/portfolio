const images = import.meta.glob<{ default: ImageMetadata }>("../assets/**/*.webp", { eager: true });

// path is relative to src/assets, e.g. "icons/language/typescript-icon.webp"
export function asset(path: string): ImageMetadata {
  const image = images[`../assets/${path}`];
  if (!image) throw new Error(`Missing asset: src/assets/${path}`);
  return image.default;
}
