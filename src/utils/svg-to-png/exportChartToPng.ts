import downloadBlob from './downloadBlob';
import exportSvgToBlob from './exportSvgToBlob';

async function exportChartToPng(
  chartWrapper: Element,
  filename: string,
  scale = 1,
) {
  const svgElement = chartWrapper.querySelector('svg');

  if (svgElement) {
    const svg = svgElement.outerHTML;
    const width = svgElement.clientWidth * scale;
    const height = svgElement.clientHeight * scale;
    const blob = await exportSvgToBlob({ svg, width, height });

    if (blob) {
      downloadBlob(blob, filename);
    }
  }
}

export default exportChartToPng;
