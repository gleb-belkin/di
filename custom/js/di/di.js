/**
 * Created by Gleb Belkin (gleb.belkin@outlook.com) on 27.08.2015.
 */

/*
 * Execution
 */
(function (jQuery) {

    var getScript = jQuery.getScript;

    jQuery.getScript = function (resources, callback) {

        var // reference declaration & localization
            length = resources.length,
            handler = function () {
                counter++;
            },
            deferredCalls = [],
            counter = 0,
            idx = 0;

        for (; idx < length; idx++) {
            deferredCalls.push(
                getScript(resources[idx], handler)
            );
        }

        jQuery.when.apply(null, deferredCalls).then(function () {
            callback && callback();
        });
    };

})(jQuery);

var scripts = [
    "custom/js/di/config.js",
    "custom/js/di/constants.js",
    "custom/js/di/backend.js",
    "custom/js/di/backend_helpers.js",
    "custom/js/di/general_helpers.js",
    "custom/js/di/general.js"
];


jQuery.getScript(scripts, function () {
    rock();
});

/*
 * Methods
 */

/**
 * Comment
 */
function rock() {
    preInit();
    init();
}

/**
 * Comment
 */



function preInit() {
    RegExp.escape = function (s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    };
    initLockScreenPopup();
    initMessagePopup();
    lockScreen();
    //initTracePanel();
}

/**
 * Comment
 */
function init() {
    initGeneral();
    finishInit();
}

/**
 * Comment
 */
function finishInit() {
    unlockScreen();
    showGeneralLayout();
}

/**
 * Comment
 */
function showGeneralLayout() {
    $('#generalLayout').show();
}
/**
 * Comment
 */
function hideGeneralLayout() {
    $('#generalLayout').hide();
}