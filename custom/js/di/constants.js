/**
 * Created by Gleb Belkin (gleb.belkin@outlook.com) on 27.08.2015.
 */
var languageConstants = {
    general: {
        pageTitle: 'AMA file control interface',
        buttonLabel: 'Get my data',
        date1Prefix: 'От',
        date2Prefix: 'до',
        messagePopup: {
            okButtonLabel: 'Ok',
            cancelButtonLabel: 'Отмена',
            general: {
                wrongResponseFormat: 'Неверный формат ответа сервера.'
            },
            getFile: {
                success: 'Данные успешно выгружены.',
                error: {
                    general: 'Ошибка при выгрузке данных.'
                }
            }
        }
    }
};

var lockMessagePopupImagePath = "custom/img/general/ajax-loader.gif";
var millisecondsInADay = 1000*60*60*24;