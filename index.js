/** 
 * This package is for managing system color scheme (Light / Dark)
 * System can be the operating system or browser settings
 */



/**
 * Return the system color scheme
 * Note that the system color scheme can be different from page color scheme
 * @returns {string} returns true if the system color scheme is dark, false otherwise
 */
const isDark = () => {
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? true : false;
}



/**
 * Set callback function for system color scheme change
 * When the function is called, the parameter is set to true when the system is dark, false otherwise
 * @param {function} callback Callback function called when the system color scheme change
 */
const addEventListenerOnChange = (callback) => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
        // The system color scheme has changed, run the callback function
        callback(event.matches);
    });
}


/**
 * Get the current system color scheme
 * @returns {string} return the current system color scheme [ "light" | "dark"]
 */
const get = () => {
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
}



// Export the module
const systemColorScheme = {
    get,
    isDark,
    addEventListenerOnChange
}
export default systemColorScheme;