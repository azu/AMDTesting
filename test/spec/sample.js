/**
 * Created by azu.
 * Date: 11/11/29 18:41
 * License: MIT License
 */
    // テスト対象をsrcから読み込んでテストコードを書く
define(["src/sample"], function (module) {
    test("getCharacterAt", function () {
        var str = "STRING";
        equal(module.getCharacterAt(str, 1), "S");
        equal(module.getCharacterAt("STRING", 3), "R");
        equal(module.getCharacterAt(str, str.length), "G");
    });
});