
/**
 * Format a given color name (string) to be usable in CSS and links.
 *
 * Specifics: lowercase the color name and remove all spaces (if any).
 *
 * Return the formatted color name (string).
 */
function formatCssColorName(color) {
    return color.toLowerCase().replace(" ", "");
}


export default formatCssColorName;
