/**
 * Created by azu.
 * Date: 11/11/29 11:57
 * License: MIT License
 */

define(function () {
    var module = {};
    module.getCharacterAt = function (str, pos) {
        return str.substr(pos - 1, 1);
    }
    return module;
});