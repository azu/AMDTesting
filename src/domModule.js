/**
 * Created by azu.
 * Date: 11/11/29 22:32
 * License: MIT License
 */
    // どうでもいいappendメソッド
define(function () {
    var module = {};
    module.append = function (parentNode, elem) {
        if (elem.nodeType === 1) {
            parentNode.appendChild(elem);
        }
    }
    return module;
});