
/**
 * Format a given color name (string) to be more URL-friendly.
 *
 * Specifics: lowercase the color name and remove all spaces (if any).
 *
 * Return the formatted color name (string).
 */
function formatUrlColorName(color) {
    return color.toLowerCase().replace(" ", "");
}


export default formatUrlColorName;