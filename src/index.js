import loaderTemplate from "@templates/loaderTemplate.js"
import headerTemplate from "@templates/headerTemplate.js"
import asideTemplate from "@templates/asideTemplate.js"
import mainTemplate from "@templates/mainTemplate.js"
import footerTemplate from "@templates/footerTemplate.js"
import modalTemplate from "@templates/modalTemplate.js"

import '@styles/sass/styles.scss'

function landingLoad() {
    const page = document.querySelector('.page')
    page.innerHTML = `${loaderTemplate()}${headerTemplate()}${asideTemplate()}${mainTemplate()}${footerTemplate()}`
    console.log('ready')
    landingReady(page)
}
window.addEventListener( 'load', landingLoad )


function landingReady (page)
{
        const pageReady = page
        const footer = document.querySelector('.footer')
        const nodeList_img_footer = footer.querySelectorAll('.menu_designs__image')
        const arrayFooter_img = [...nodeList_img_footer]

        const openModal = (ev) => {

                const modal = document.createElement('section')
                modal.className = 'modal'
                modal.innerHTML = modalTemplate(ev.target.dataset.set)
                pageReady.append(modal)

                /* Navegación por teclado dentro del modal (Accesibilidad) */
                const labels_modal = modal.querySelectorAll('label')
                const array_labels = [...labels_modal]
                array_labels.forEach( element => {
                    element.addEventListener('focus', ev => {

                        const inputs_modal = modal.querySelectorAll('input')
                        const array_inputs = [...inputs_modal]
                        array_inputs.forEach( element => {
                            if( element.id === ev.path[0].htmlFor )
                            {
                                element.checked = true
                            }
                        })

                    })
                } )

                /* Ponerle el foco al modal cuando se abre */
                modal.querySelector('.modal__container').focus()

                /* Eliminar el modal */
                const closeModal = () => {
                    modal.remove()
                    footer.querySelector(`.${ev.target.className}`).focus()
                }

                /* Eventos para eliminar el modal, boton ESC, Click fuera del modal, click en botón cerrar y
                botón shift para evitar que valla atrás sin cerrar el modal*/
                const btn_cerrar_modal = modal.querySelector('.modal__btnclose')
                btn_cerrar_modal.addEventListener( 'click', closeModal )
                btn_cerrar_modal.addEventListener( 'keydown', ev => {
                    if( ev.keyCode !== 9 && ev.keyCode !== 16 )/* Tab or Shift */
                    {
                        closeModal()
                    }
                } )
                modal.addEventListener('click', ev => {
                    if(ev.target.className === 'modal')
                    {
                        closeModal()
                    }
                })
                let shift_apretado = 0
                modal.addEventListener('keydown', ev => {
                    if(ev.keyCode === 16)
                    {
                        shift_apretado = 1
                    }
                })
                modal.addEventListener('keyup', ev => {
                    if(ev.keyCode === 16)
                    {
                        shift_apretado = 0
                    }
                })
                modal.addEventListener( 'keydown', ev => {
                    if( ev.keyCode === 27 )/* ESC */
                    {
                        closeModal()
                    }
                    if( ev.keyCode === 16 && ev.target.className === 'modal__container' )
                    {
                        closeModal()
                    }
                    if( ev.keyCode === 9 && shift_apretado === 1 && ev.target.className === 'modal__container' )
                    {
                        closeModal()
                    }
                })

        }

        arrayFooter_img.forEach( element => {
            element.addEventListener( 'click', openModal )
            element.addEventListener( 'keydown', (ev) => {
                if(ev.keyCode === 32 || ev.keyCode === 13 ) {
                    openModal(ev)
                }
            } )
        })
}
