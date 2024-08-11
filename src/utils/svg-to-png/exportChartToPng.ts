import { toBlob } from 'html-to-image';

import downloadBlob from './downloadBlob';

async function exportChartToPng(
  chartWrapper: Element,
  filename: string,
  scale = 1,
) {
  const svgElement = chartWrapper.querySelector('svg:not(.lucide)');

  if (svgElement) {
    const blob = await toBlob(svgElement as unknown as HTMLElement, {
      pixelRatio: scale,
    });

    if (blob) {
      downloadBlob(blob, filename);
    }
  }
}

export default exportChartToPng;
