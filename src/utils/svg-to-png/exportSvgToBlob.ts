import { Canvg, type IOptions, presets } from 'canvg';

const preset = presets.offscreen();

interface ExportSvgToBlobData {
  width: number;
  height: number;
  svg: string;
}

async function exportSvgToBlob(data: ExportSvgToBlobData) {
  const { width, height, svg } = data;

  const canvas = new OffscreenCanvas(width, height);
  const ctx = canvas.getContext('2d');

  if (ctx) {
    const v = await Canvg.from(ctx, svg, preset as IOptions);
    await v.render();

    const blob = await canvas.convertToBlob();
    return blob;
  }

  return null;
}

export default exportSvgToBlob;
