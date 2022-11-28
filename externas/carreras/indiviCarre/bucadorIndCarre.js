document.addEventListener('keyup', e => {
    if (e.target.matches('#buscador')) {
      document.querySelectorAll('.column').forEach(fruta => {
        fruta.textContent.toLowerCase().includes(e.target.value) ? 
        fruta.classList.remove('filtro')
        : fruta.classList.add('filtro')
      })
    }
  })
  
