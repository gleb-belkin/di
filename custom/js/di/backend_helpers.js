/**
 * Created by Gleb Belkin (gleb.belkin@outlook.com) on 29.07.2015.
 */


/**
 * Replaces single quote with double quote in the backend response.
 * @param {string} responseString - raw response string.
 */
function processBackendQuotes(responseString) {
    return responseString.replace(new RegExp(RegExp.escape('\''), 'g'), '"');
}