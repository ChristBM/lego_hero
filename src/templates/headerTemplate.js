import lego from '@images/lego.webp'

const headerTemplate = () => {
    const view = `
        <header class="header">
                <img class="header__logo" src="${lego}" alt="Logo de la marca Lego." aria-label="Logo de la marca de juguetes Lego.">
                <nav class="header__menu" aria-label="Menú de navegación de la página.">
                    <ul class="menu menu_lego">
                        <li class="menu_lego__li">
                            <a class="menu_lego__link" href="#" aria-label="Ir a la página de articulos exclusivos.">Exclusivos</a>
                        </li>
                        <li class="menu_lego__li">
                            <a class="menu_lego__link" href="#" aria-label="Ir a la página de articulos nuevos.">Nuevos</a>
                        </li>
                        <li class="menu_lego__li">
                            <a class="menu_lego__link" href="#" aria-label="Ir a la página de tarjetas de regalo.">Tarjetas</a>
                        </li>
                        <li class="menu_lego__li">
                            <a class="menu_lego__link" href="#" aria-label="Ir a la página que muestra otras tiendas donde puedo comprar.">Tiendas</a>
                        </li>
                    </ul>
                </nav>
        </header>
    `
    return view
}

export default headerTemplate