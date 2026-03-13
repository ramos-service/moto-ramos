    // ─── MENÚ HAMBURGER (celular) ───
    document.getElementById('menuBtn').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
    });

    // ─── SCROLL REVEAL ───
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
        e.target.classList.add('visible');
        }
    });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // ─── FORMULARIO → WHATSAPP ───
    function enviarWhatsApp() {
    const nombre   = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const moto     = document.getElementById('moto').value.trim();
    const servicio = document.getElementById('servicio').value;
    const mensaje  = document.getElementById('mensaje').value.trim();

    if (!nombre || !servicio) {
        alert('Por favor completa al menos tu nombre y el servicio.');
        return;
    }

    const texto = [
        '🏍️ Quiero reservar una cita:',
        '👤 Nombre: ' + nombre,
        '📱 Tel: ' + (telefono || 'no indicado'),
        '🏍️ Moto: ' + (moto || 'no indicado'),
        '🔧 Servicio: ' + servicio,
        '📝 Mensaje: ' + (mensaje || 'ninguno')
    ].join('\n');

    const url = 'whatsapp://send?phone=51929519634&text=' + encodeURIComponent(texto);
    const urlWeb = 'https://wa.me/51929519634?text=' + encodeURIComponent(texto);
    window.location = url;
    setTimeout(() => {
        window.open(urlWeb, '_blank');
    }, 1500);
    }
    // ─── LIGHTBOX ───
    function abrirFoto(src) {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:9999;display:flex;align-items:center;justify-content:center;cursor:zoom-out;';
    overlay.innerHTML = `<img src="${src}" style="max-width:90%;max-height:90vh;border-radius:4px;"/>`;
    overlay.onclick = () => overlay.remove();
    document.body.appendChild(overlay);
    }
