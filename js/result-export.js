// Export the rendered result section, including SVG charts and canvas artwork.
window.saveResultPage = async function ({ root, filename, button, ready }) {
  const previousLabel = button.textContent;
  button.disabled = true;
  button.textContent = '正在生成完整结果…';
  try {
    await document.fonts.ready;
    await ready();
    await Promise.all(Array.from(root.querySelectorAll('img')).map(img => img.decode()));
    const width = Math.ceil(root.getBoundingClientRect().width);
    const clone = root.cloneNode(true);
    const sources = [root, ...root.querySelectorAll('*')];
    const copies = [clone, ...clone.querySelectorAll('*')];
    for (let i = 0; i < sources.length; i++) {
      const source = sources[i], copy = copies[i], style = getComputedStyle(source);
      for (const property of style) copy.style.setProperty(property, style.getPropertyValue(property));
      copy.style.setProperty('animation', 'none', 'important');
      copy.style.setProperty('transition', 'none', 'important');
      copy.style.setProperty('transform', 'none', 'important');
      copy.style.setProperty('clip-path', 'none', 'important');
      if (source.matches('canvas')) {
        const img = document.createElement('img');
        img.src = source.toDataURL('image/png');
        img.style.cssText = copy.style.cssText;
        img.width = source.width;
        img.height = source.height;
        copy.replaceWith(img);
      } else if (source.matches('img')) {
        const raster = document.createElement('canvas');
        raster.width = source.naturalWidth;
        raster.height = source.naturalHeight;
        raster.getContext('2d').drawImage(source, 0, 0);
        copy.src = raster.toDataURL('image/png');
        copy.removeAttribute('srcset');
      }
      if (source.matches('[data-result-hex]')) {
        const swatch = document.createElement('i');
        swatch.style.cssText = 'display:inline-block;width:14px;height:14px;margin-left:10px;vertical-align:middle;background:' + style.getPropertyValue('--result-swatch');
        copy.appendChild(swatch);
      }
    }
    clone.querySelectorAll('button,.share-actions,.share-area>p').forEach(node => node.remove());
    clone.style.cssText += ';margin:0!important;width:' + width + 'px!important;max-width:none!important;height:auto!important;box-shadow:none!important;position:relative!important;';
    // Measure the copy after removing controls without affecting the visible page.
    const holder = document.createElement('div');
    holder.style.cssText = 'position:fixed;left:-100000px;top:0;pointer-events:none;width:' + width + 'px';
    holder.appendChild(clone);
    document.body.appendChild(holder);
    let height, markup;
    try {
      height = Math.ceil(clone.getBoundingClientRect().height);
      markup = new XMLSerializer().serializeToString(clone);
    } finally { holder.remove(); }
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" style="background:#eeece3;width:' + width + 'px;height:' + height + 'px">' + markup + '</div></foreignObject></svg>';
    const image = new Image();
    image.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    await image.decode();
    const scale = Math.min(2, 14000 / height, Math.sqrt(24000000 / (width * height)));
    const output = document.createElement('canvas');
    output.width = Math.ceil(width * scale);
    output.height = Math.ceil(height * scale);
    const context = output.getContext('2d');
    context.fillStyle = '#eeece3';
    context.fillRect(0, 0, output.width, output.height);
    context.drawImage(image, 0, 0, output.width, output.height);
    const blob = await new Promise(resolve => output.toBlob(resolve, 'image/png'));
    if (!blob) throw new Error('无法生成图片');
    const url = URL.createObjectURL(blob), link = document.createElement('a');
    link.download = filename;
    link.href = url;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 60000);
  } finally {
    button.disabled = false;
    button.textContent = previousLabel;
  }
};
