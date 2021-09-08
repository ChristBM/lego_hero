import spiderman1 from '@images/spiderman/spiderman1.png'
import spiderman2 from '@images/spiderman/spiderman2.png'
import spiderman3 from '@images/spiderman/spiderman3.png'
import robin1 from '@images/robin/robin1.png'
import robin2 from '@images/robin/robin2.png'
import robin3 from '@images/robin/robin3.png'
import batman1 from '@images/batman/batman1.png'
import batman2 from '@images/batman/batman2.png'
import batman3 from '@images/batman/batman3.png'

const spiderman = [ spiderman1, spiderman2, spiderman3 ]
const robin = [ robin1, robin2, robin3 ]
const batman = [ batman1, batman2, batman3 ]

const arrayImgs = [
                    {
                        'hero': 'spiderman',
                        'images': spiderman
                    },
                    {
                        'hero': 'robin',
                        'images': robin
                    },
                    {
                        'hero': 'batman',
                        'images': batman
                    }
                ]

const modalTemplate = (name) => {
    let view = ''
    arrayImgs.forEach( element => {
        if( element.hero === name )
        {
            view = `
                <div class="modal__container" tabindex="0" aria-live="assertive" aria-label="En este modal te mostramos los diferentes trajes para ${name}.">
                    <button class="modal__btnclose" aria-label="Botón para cerrar el modal.">
                        <span class="modal__btnclose-x">X</span>
                    </button>
                    <div class="modal__slider">
                        <input class="modal__slider_input-a" type="radio" name="slide-1" id="radio-a" checked>
                        <input class="modal__slider_input-b" type="radio" name="slide-1" id="radio-b">
                        <input class="modal__slider_input-c" type="radio" name="slide-1" id="radio-c">
                        <div class="modal__slider_container" tabindex="0" aria-label="Slide con fotos de trajes para ${name}.">
                            <label class="modal__slider_imglabel-a" for="radio-a" tabindex="0">
                                <img class="modal__slider_img" src="${element.images[0]}" alt="Primera imagen del traje de ${name}">
                            </label>
                            <label class="modal__slider_imglabel-b" for="radio-b" tabindex="0">
                                <img class="modal__slider_img" src="${element.images[1]}" alt="Segunda imagen del traje de ${name}">
                            </label>
                            <label class="modal__slider_imglabel-c" for="radio-c" tabindex="0">
                                <img class="modal__slider_img" src="${element.images[2]}" alt="Tercera imagen del traje de ${name}">
                            </label>
                        </div>
                    </div>
                    <button class="modal__btnbuy" aria-label="Botón para comprar los diseños.">Lo Quiero!</button>
                </div>
            `
        }
    })
    return view
}

export default modalTemplate