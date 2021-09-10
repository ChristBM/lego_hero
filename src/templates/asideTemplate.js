import superman from '@images/super-man.webp'

const asideTemplate = () => {
    const view = `
        <aside class="aside">
            <p class="aside__name" aria-hidden="true">Superman</p>
            <img class="aside__img" src="${superman}" alt="Superman Lego" aria-label="Imagen del Superman Lego, con su capa roja y mirada desafiante.">
            <div class="aside__back"></div>
        </aside>
    `
    return view
}

export default asideTemplate