const light = {
    base_color: {
        /*
        Most products need one color to use for primary actions and as a way to let the brand be present in the interface.
        We’ll typically need at least 8-10 shades of our primary color.
        Ultra-light shades can be useful as a tinted background for things like alerts,
        darker shades work great for text,
            -Important Actions
            -Buttons
            -Links
            -Active States
        */
        primary: '',
        primary_vibrant_dark: '',
        primary_vibrant_light: '',
        /*
        A secondary color provides more ways to accent and distinguish your product.
        Having a secondary color is optional, and should be applied sparingly to accent select parts of your UI.
            -Floating action buttons
            -Selection controls, like sliders and switches
            -Highlighting selected text
            -Progress bars
            -Links and headlines
        */
        secondary: '',
        secondary_vibrant_dark: '',
        secondary_vibrant_light: '',
        /*
        Surface colors affect surfaces of components, such as cards, sheets, and menus.
        Background color appears behind scrollable content. 
        Error color indicates errors in components, such as invalid text in a text field.
        */
        background: '',
        surface: '',
        error: '',
        /*
        On Colors are usually placed on top of key surfaces that use the primary, secondary, background, or error color.
            -text
            -icons
            -strokes
        */
        on_primary: '',
        on_secondary: '',
        on_background: '',
        on_surface: '',
        /*
        Semantic messages like errors, successes, or warnings. In these cases, we’ll need to use colors like red, green, and yellow 
        In less critical places, sometimes we just need a simple accent color to contrast with our primary color.
        We could get away with 5-10 of them.
        */
        accent: '',

        /*
        We’ll typically need around 8-10 shades of grey.
        */
        grey: '',
    },
    font: {},
    size: {},
    breakpoint: {},
}


export default light
export const {color, font, size, breakpoint} = light