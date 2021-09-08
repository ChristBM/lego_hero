const loaderTemplate = () => {
    const view = `
        <section class="loader" aria-hidden="true" tabindex="-1">
            <div></div>
            <div></div>
            <div></div>
        </section>
    `
    return view
}

export default loaderTemplate