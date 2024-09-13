export const createSVGMask = (width: number, height: number, rx: number) => {
  const svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="${width - 1}" height="${height - 1}" fill="none" stroke="black" stroke-width="1" rx="${rx}"/>
  </svg>`;

  return 'data:image/svg+xml,' + encodeURIComponent(svg);
};
