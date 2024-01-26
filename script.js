function agregarTooltip(elementoId, textoTooltip) {
  const contenedor = document.getElementById(elementoId);

  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.innerText = textoTooltip;
  document.body.appendChild(tooltip);

  contenedor.addEventListener('mousemove', (event) => {
    tooltip.style.display = 'block';
    tooltip.style.left = event.pageX + 10 + 'px';
    tooltip.style.top = event.pageY + 10 + 'px';
  });

  contenedor.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
  });
}

agregarTooltip('elemento1', 'Ver información del conductor');
agregarTooltip('elemento2', 'Eliminar conductor');