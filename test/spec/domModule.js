/**
 * Created by azu.
 * Date: 11/11/29 22:33
 * License: MIT License
 */
define(["src/domModule"], function (module) {
    // #qunit-fixture" はreset時に初期化される
    test("append", function () {
        var fixture = document.getElementById("qunit-fixture");
        var addElem = document.createElement("div");
        module.append(fixture, addElem);
        equal(fixture.firstElementChild.nodeName, "DIV");
    });
    test("append-2", function () {
        var fixture = document.getElementById("qunit-fixture");
        var addElem = document.createElement("a");
        module.append(fixture, addElem);
        equal(fixture.firstElementChild.nodeName, "A");
    });
});