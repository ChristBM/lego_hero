import loaderTemplate from "@templates/loaderTemplate.js"
import headerTemplate from "@templates/headerTemplate.js"
import asideTemplate from "@templates/asideTemplate.js"
import mainTemplate from "@templates/mainTemplate.js"
import footerTemplate from "@templates/footerTemplate.js"

const landingHero = () => {
    const view = `${loaderTemplate()}${headerTemplate()}${asideTemplate()}${mainTemplate()}${footerTemplate()}`
    return view
}

export default landingHero