/**
 * Created by Gleb Belkin (gleb.belkin@outlook.com) on 29.07.2015.
 */

var lockScreenPopup, messagePopup;

var backendLogId = '';

var messagePopupOkButtonData, messagePopupCancelButtonData;
var traceOnce = 0;

/**
 * Comment
 */
function initGeneral() {
    $(document).prop('title', languageConstants.general.pageTitle);
    var inputFields = $("#dateInputBlock").find("input");
    var date1Input = inputFields.eq(0);
    date1Input.datepicker({
        constrainInput: true,
        dateFormat: "dd/mm/yy"        
    });
    var date = new Date();
    date = new Date(date.getTime()-millisecondsInADay);
    date1Input.datepicker("setDate", date);
    date1Input.parent().before($("<div></div>").addClass("label").html(languageConstants.general.date1Prefix));
    var date2Input = inputFields.eq(1);
    date2Input.datepicker({
        constrainInput: true,
        dateFormat: "dd/mm/yy"        
    });
    date2Input.parent().before($("<div></div>").addClass("label").html(languageConstants.general.date2Prefix));
    $("#dateInputBlock").find("button").button({
        label: languageConstants.general.buttonLabel,
        icons: {
            secondary: "ui-icon-arrowthickstop-1-s"
        }
    }).click(function (e) {
        if(!inputIsValid())
        {
            return;
        }
        DIBackendService.getFile(date1Input.val(), date2Input.val(),
            function (url) {
                showMessage(languageConstants.general.messagePopup.getFile.success);
            },
            function (html, url) {
                showMessage(languageConstants.general.messagePopup.getFile.error.general, true);
            })
    });
}



/**
 * Comment
 */
function inputIsValid() {
    var inputFields = $("#dateInputBlock").find("input");    
    return inputFields.eq(0).val().length != 0 && inputFields.eq(1).val().length != 0;
}
/**
 * Comment
 */
function initTracePanel() {
    $("#clearTracePanelButtonContainer").find("button").button().click(function () {
        $('#tracePanel').html('');
    });
    $('#tracePanelContainer').show();
}
/**
 * Comment
 */
function initTemplates() {

}
/**
 * Comment
 */
function initLockScreenPopup() {
    var lockScreenMessageBlock = $("#lockScreenMessage");
    lockScreenMessageBlock.append($("<img>").prop("src", lockMessagePopupImagePath));
    lockScreenPopup = $("#lockScreenMessage").dialog({
        autoOpen: false,
        modal: true,
        draggable: false,
        resizable: false,
        dialogClass: "no-close",
        minWidth: 30,
        minHeight: 30,
        width: 60,
        height: 55
    });
    lockScreenPopup.show();
}


function initMessagePopupButtons() {
    messagePopupOkButtonData = {
        text: languageConstants.general.messagePopup.okButtonLabel
    };
    messagePopupCancelButtonData = {
        text: languageConstants.general.messagePopup.cancelButtonLabel,
        click: function () {
            $(this).dialog("close");
        }
    };
}
/**
 * Comment
 */
function initMessagePopup() {
    initMessagePopupButtons();
    messagePopup = $("#messagePopup").dialog({
        autoOpen: false,
        modal: false,
        draggable: false,
        resizable: false,
        dialogClass: "no-close",
        minWidth: 200,
        minHeight: 60/*,
         buttons: [
         {
         text: "Ok",
         click: function () {
         $(this).dialog("close");
         }
         }
         ]*/
    });
}
/**
 * Comment
 */
function showMessage(message, isModal, isCancelAvailable, okButtonCallback) {
    message = defaultFor(message, '');
    isModal = defaultFor(isModal, false);
    isCancelAvailable = defaultFor(isCancelAvailable, false);
    okButtonCallback = defaultFor(okButtonCallback, undefined);
    $('p', messagePopup).html(message);
    var popupButtonsArray = [messagePopupOkButtonData];
    if (isCancelAvailable) {
        popupButtonsArray.push(messagePopupCancelButtonData);
    }
    if (typeof okButtonCallback !== 'undefined') {
        messagePopupOkButtonData.click = function () {
            $(this).dialog("close");
            okButtonCallback();
        };
    } else {
        messagePopupOkButtonData.click = function () {
            $(this).dialog("close");
        };
    }
    messagePopup.dialog('option', 'buttons', popupButtonsArray);
    messagePopup.dialog('option', 'modal', isModal).dialog('open');
}


/**
 * Locks screen.
 */
function lockScreen() {
    $('body').css('cursor', 'progress');
    lockScreenPopup.dialog('open');
    lockScreenPopup.dialog('moveToTop');
}

/**
 * Unlocks screen.
 */
function unlockScreen() {
    $('body').css('cursor', 'default');
    lockScreenPopup.dialog('close');
}