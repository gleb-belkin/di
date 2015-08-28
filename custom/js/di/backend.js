/**
 * Created by Gleb Belkin (gleb.belkin@outlook.com) on 20.08.2015.
 */

function DIBackendService() {

}
/**
 * Get file from server.
 * @param {object} ruleType - Rule type: rule or draft.
 */
//todo: add parameters and success callback
DIBackendService.getFile = function (date1, date2, successCallback, failCallback) {
    $.fileDownload(backendUrl, {
        httpMethod: "POST",
        successCallback: successCallback,
        failCallback: failCallback,
        data: {date1: date1, date2: date2},
        //need to define right cookie path, cookie is not removed on the next call
        cookiePath: fileMethodCookiePath
    });
}