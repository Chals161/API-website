document.addEventListener('mousemove', (e) => {
    const halo = document.createElement('div');
    halo.classList.add('halo');
    halo.style.left = `${e.pageX}px`;
    halo.style.top = `${e.pageY}px`;
    document.getElementById('haloContainer').appendChild(halo);
  
    setTimeout(() => {
      halo.remove();
    }, 1500); // Remove halo after 1.5 seconds
  });
  