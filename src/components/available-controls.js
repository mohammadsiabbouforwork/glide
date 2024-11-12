export default (Components, Glide) => {
    const fullLength = Components.Run.length + 1
    const perView = Glide.settings.perView
    const hasLessTotalSlidesThanPerView = fullLength < perView

    return {
        fullLength,
        perView,
        hasLessTotalSlidesThanPerView
    }
}
