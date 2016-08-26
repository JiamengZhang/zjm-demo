/**
 * 提醒提示信息
 * @param {Object} cont:内容
 */
function alertprompt(cont) {
    appcan.window.alert({
        title : "提醒",
        content : cont,
        buttons : '确定',
        callback : function(err, data, dataType, optId) {
            console.log(err, data, dataType, optId);
        }
    });
}

/**
 * 等待提示信息
 * @param {Object} str：内容, time：时间
 */
function toast(str, time) {
    if (!time) {
        time = "1000"
    }
    uexWindow.toast('0', '5', str, time);
}



/**
 * 保存数据、获取数据、清除数据
 * @param objName储存名   objValue储存值
 */
function setstorage(objName, objValue) {
    var sto = window.localStorage;
    if (sto)
        sto.setItem(objName, objValue);
}

function getstorage(objName) {
    var ret = '';
    var sto = window.localStorage;
    if (sto)
        ret = sto.getItem(objName);
    return ret;
}

function clearstorage(objName) {
    var sto = window.localStorage;
    if (sto) {
        if (objName)
            sto.removeItem(objName);
        else
            storage.clear();
    }
}

/**
 * id
 * num数字为一则隐藏为0则显示
 */
function display(id, num) {
    if (num == 1) {
        $$(id).style.display = 'none';
    }
    if (num == 0) {
        $$(id).style.display = 'block';
    }
}

/**
 * 获取元素id
 * @param {Object} id
 */
function $$(id) {
    return document.getElementById(id);
}