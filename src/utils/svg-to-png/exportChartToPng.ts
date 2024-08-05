import downloadBlob from './downloadBlob';
import exportSvgToBlob from './exportSvgToBlob';

async function exportChartToPng(chartWrapper: Element, filename: string) {
  const svgElement = chartWrapper.querySelector('svg');
  const svg = svgElement?.outerHTML;
  const width = chartWrapper.clientWidth;
  const height = chartWrapper.clientHeight;

  if (svg) {
    const blob = await exportSvgToBlob({ svg, width, height });

    if (blob) {
      downloadBlob(blob, filename);
    }
  }
}

export default exportChartToPng;
