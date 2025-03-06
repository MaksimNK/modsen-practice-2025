export const lightedHex = (hex: string, ratio: number) => {
  hex = hex.replace('#', '');
  if (hex.length === 3)
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const newR = Math.round(r + (255 - r) * ratio);
  const newG = Math.round(g + (255 - g) * ratio);
  const newB = Math.round(b + (255 - b) * ratio);

  const newhex =
    '#' +
    (newR < 16 ? '0' : '') +
    newR.toString(16) +
    (newG < 16 ? '0' : '') +
    newG.toString(16) +
    (newB < 16 ? '0' : '') +
    newB.toString(16);
  return newhex;
};
