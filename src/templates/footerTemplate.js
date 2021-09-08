import spiderman from '@images/spiderman.png'
import robin from '@images/robin.png'
import batman from '@images/batman.webp'

const footerTemplate = () => {
    const view = `
    <footer class="footer">
            <nav class="footer__menu">
                <ul class="menu menu_designs">
                    <li class="menu_designs__li">
                        <img class="menu_designs__image" data-set="spiderman" src="${spiderman}" tabindex="0" alt="Imagen de Spiderman Lego" aria-label="Imagen del Spiderman Lego, presione para abrir el modal donde se muestran los diseños de Spiderman.">
                    </li>
                    <li class="menu_designs__li">
                        <img class="menu_designs__image" data-set="robin" src="${robin}" tabindex="0" alt="Imagen de Robin Lego" aria-label="Imagen del Robin Lego, presione para abrir el modal donde se muestran los diseños de Robin.">
                    </li>
                    <li class="menu_designs__li">
                        <img class="menu_designs__image" data-set="batman" src="${batman}" tabindex="0" alt="Imagen de Batman Lego" aria-label="Imagen del Batman Lego, presione para abrir el modal donde se muestran los diseños de Batman.">
                    </li>
                </ul>
            </nav>
        </footer>
    `
    return view
}

export default footerTemplate