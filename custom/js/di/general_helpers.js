/**
 * Created by Gleb Belkin (gleb.belkin@outlook.com) on 29.07.2015.
 */



/**
 * Comment
 */
function defaultFor(arg, val) {
    return typeof arg !== 'undefined' ? arg : val;
}


function trace(message) {
    var tracePanel = $("#tracePanel");
    tracePanel.html(tracePanel.html() + message + '<br>');
    return message;
}

/**
 * Comment
 */
function traceObject(object) {
    var str = '';
    for (var prop in object) {
        str += '|' + prop + ': ' + object[prop] + '<br>';
    }
    return trace(str);
}
