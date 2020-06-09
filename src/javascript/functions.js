
export function  sanitiseHtml(s) {
    /// <summary>Removes HTML brackets from a string.</summary>
    /// <param name="s" type="Number">The string to filter.</param>
    /// <returns type="string">The string without HTML.</returns>
    return s.replace(/(&nbsp;|<([^>]+)>)/ig, "");
}