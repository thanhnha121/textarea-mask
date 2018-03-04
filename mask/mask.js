/*-----------------------------------------------*/
/*-----------------------------------------------*/
/*-----------------------------------------------*/
/*!
	Autosize 3.0.20
	license: MIT
	http://www.jacklmoore.com/autosize
*/
!function (e, t) { if ("function" == typeof define && define.amd) define(["exports", "module"], t); else if ("undefined" != typeof exports && "undefined" != typeof module) t(exports, module); else { var n = { exports: {} }; t(n.exports, n), e.autosize = n.exports } }(this, function (e, t) { "use strict"; function n(e) { function t() { var t = window.getComputedStyle(e, null); "vertical" === t.resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), s = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(s) && (s = 0), l() } function n(t) { var n = e.style.width; e.style.width = "0px", e.offsetWidth, e.style.width = n, e.style.overflowY = t } function o(e) { for (var t = []; e && e.parentNode && e.parentNode instanceof Element;)e.parentNode.scrollTop && t.push({ node: e.parentNode, scrollTop: e.parentNode.scrollTop }), e = e.parentNode; return t } function r() { var t = e.style.height, n = o(e), r = document.documentElement && document.documentElement.scrollTop; e.style.height = "auto"; var i = e.scrollHeight + s; return 0 === e.scrollHeight ? void (e.style.height = t) : (e.style.height = i + "px", u = e.clientWidth, n.forEach(function (e) { e.node.scrollTop = e.scrollTop }), void (r && (document.documentElement.scrollTop = r))) } function l() { r(); var t = Math.round(parseFloat(e.style.height)), o = window.getComputedStyle(e, null), i = Math.round(parseFloat(o.height)); if (i !== t ? "visible" !== o.overflowY && (n("visible"), r(), i = Math.round(parseFloat(window.getComputedStyle(e, null).height))) : "hidden" !== o.overflowY && (n("hidden"), r(), i = Math.round(parseFloat(window.getComputedStyle(e, null).height))), a !== i) { a = i; var l = d("autosize:resized"); try { e.dispatchEvent(l) } catch (e) { } } } if (e && e.nodeName && "TEXTAREA" === e.nodeName && !i.has(e)) { var s = null, u = e.clientWidth, a = null, p = function () { e.clientWidth !== u && l() }, c = function (t) { window.removeEventListener("resize", p, !1), e.removeEventListener("input", l, !1), e.removeEventListener("keyup", l, !1), e.removeEventListener("autosize:destroy", c, !1), e.removeEventListener("autosize:update", l, !1), Object.keys(t).forEach(function (n) { e.style[n] = t[n] }), i.delete(e) }.bind(e, { height: e.style.height, resize: e.style.resize, overflowY: e.style.overflowY, overflowX: e.style.overflowX, wordWrap: e.style.wordWrap }); e.addEventListener("autosize:destroy", c, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", l, !1), window.addEventListener("resize", p, !1), e.addEventListener("input", l, !1), e.addEventListener("autosize:update", l, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", i.set(e, { destroy: c, update: l }), t() } } function o(e) { var t = i.get(e); t && t.destroy() } function r(e) { var t = i.get(e); t && t.update() } var i = "function" == typeof Map ? new Map : function () { var e = [], t = []; return { has: function (t) { return e.indexOf(t) > -1 }, get: function (n) { return t[e.indexOf(n)] }, set: function (n, o) { e.indexOf(n) === -1 && (e.push(n), t.push(o)) }, delete: function (n) { var o = e.indexOf(n); o > -1 && (e.splice(o, 1), t.splice(o, 1)) } } }(), d = function (e) { return new Event(e, { bubbles: !0 }) }; try { new Event("test") } catch (e) { d = function (e) { var t = document.createEvent("Event"); return t.initEvent(e, !0, !1), t } } var l = null; "undefined" == typeof window || "function" != typeof window.getComputedStyle ? (l = function (e) { return e }, l.destroy = function (e) { return e }, l.update = function (e) { return e }) : (l = function (e, t) { return e && Array.prototype.forEach.call(e.length ? e : [e], function (e) { return n(e, t) }), e }, l.destroy = function (e) { return e && Array.prototype.forEach.call(e.length ? e : [e], o), e }, l.update = function (e) { return e && Array.prototype.forEach.call(e.length ? e : [e], r), e }), t.exports = l });



/*-----------------------------------------------*/
/*-----------------------------------------------*/
/*-----------------------------------------------*/
/* GET CARET POSITION */
jQuery.fn.caret = function (e) { var t = this[0], n = t && "true" === t.contentEditable; if (0 != arguments.length) return t && (-1 == e && (e = this[n ? "text" : "val"]().length), window.getSelection ? n ? (t.focus(), window.getSelection().collapse(t.firstChild, e)) : t.setSelectionRange(e, e) : document.body.createTextRange && (n ? ((a = document.body.createTextRange()).moveToElementText(t), a.moveStart("character", e), a.collapse(!0), a.select()) : ((a = t.createTextRange()).move("character", e), a.select())), n || t.focus()), this; if (t) { if (window.getSelection) return n ? (t.focus(), (c = (o = window.getSelection().getRangeAt(0)).cloneRange()).selectNodeContents(t), c.setEnd(o.endContainer, o.endOffset), c.toString().length) : t.selectionStart; if (document.selection) { if (t.focus(), n) { var o = document.selection.createRange(); return (c = document.body.createTextRange()).moveToElementText(t), c.setEndPoint("EndToEnd", o), c.text.length } e = 0; var c, a = t.createTextRange(), r = (c = document.selection.createRange().duplicate()).getBookmark(); for (a.moveToBookmark(r); 0 !== a.moveStart("character", -1);)e++; return e } if (t.selectionStart) return t.selectionStart } };
/* END GET CARET POSITION */



/*-----------------------------------------------*/
/*-----------------------------------------------*/
/*-----------------------------------------------*/
/* MAIN */
// {}
var pattern1SU = /\{\{[\w\sẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]+\}\}/g;
var pattern1U = /\{\{[\wẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]+\}\}/g;
var pattern1S = /\{\{[\w\s]+\}\}/g;
var pattern1 = /\{\{[\w]+\}\}/g;
// []
var pattern2SU = /\[\[[\w\sẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]+\]\]/g;
var pattern2U = /\[\[[\wẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]+\]\]/g;
var pattern2S = /\[\[[\w\s]+\]\]/g;
var pattern2 = /\[\[[\w]+\]\]/g;
// ()
var pattern4SU = /\(\([\w\sẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]+\)\)/g;
var pattern4U = /\(\([\wẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]+\)\)/g;
var pattern4S = /\(\([\w\s]+\)\)/g;
var pattern4 = /\(\([\w]+\)\)/g;

// {}
var maskMatchL1SU = /\{\{([\w\sẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]+)?((?!\}).)*$/g;
var maskMatchL1U = /\{\{([\wẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]+)?((?!\}).)*$/g;
var maskMatchL1S = /\{\{([\w\s]+)?((?!\}).)*$/g;
var maskMatchL1 = /\{\{([\w]+)?((?!\}).)*$/g;
// []
var maskMatchL2SU = /\[\[([\w\sẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]+)?((?!\]).)*$/g;
var maskMatchL2U = /\[\[([\wẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]+)?((?!\]).)*$/g;
var maskMatchL2S = /\[\[([\w\s]+)?((?!\]).)*$/g;
var maskMatchL2 = /\[\[([\w]+)?((?!\]).)*$/g;
// ()
var maskMatchL4SU = /\(\(([\w\sẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]+)?((?!\)).)*$/g;
var maskMatchL4U = /\(\(([\wẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]+)?((?!\)).)*$/g;
var maskMatchL4S = /\(\(([\w\s]+)?((?!\)).)*$/g;
var maskMatchL4 = /\(\(([\w]+)?((?!\)).)*$/g;

// {}
var maskMatchR1SU = /^((?!\{))([\w\sẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]+)?\}\}/g;
var maskMatchR1U = /^((?!\{))([\wẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]+)?\}\}/g;
var maskMatchR1S = /^((?!\{))([\w\s]+)?\}\}/g;
var maskMatchR1 = /^((?!\{))([\w\s]+)?\}\}/g;
// []
var maskMatchR2SU = /^((?!\[))([\w\sẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]+)?\]\]/g;
var maskMatchR2U = /^((?!\[))([\wẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]+)?\]\]/g;
var maskMatchR2S = /^((?!\[))([\w\s]+)?\]\]/g;
var maskMatchR2 = /^((?!\[))([\w\s]+)?\]\]/g;
// ()
var maskMatchR4SU = /^((?!\())([\w\sẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]+)?\)\)/g;
var maskMatchR4U = /^((?!\())([\wẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]+)?\)\)/g;
var maskMatchR4S = /^((?!\())([\w\s]+)?\)\)/g;
var maskMatchR4 = /^((?!\())([\w\s]+)?\)\)/g;

function setSelectionRange(input, selectionStart, selectionEnd) {
  if (input.setSelectionRange) {
    input.focus();
    input.setSelectionRange(selectionStart, selectionEnd);
  }
  else if (input.createTextRange) {
    var range = input.createTextRange();
    range.collapse(true);
    range.moveEnd('character', selectionEnd);
    range.moveStart('character', selectionStart);
    range.select();
  }
}

function setCaretToPos(input, pos) {
  setSelectionRange(input, pos, pos);
}

$(document).ready(function () {
  initMask(
    $('#mask'),
    ['animal', 'color', 'bike', 'cat', 'dog', 'car', 'school', 'name', 'staff', 'art', 'whatever']
  );
  initMask(
    $('#mask2'),
    ['animal', 'color', 'bike', 'cat', 'dog', 'car', 'school', 'name', 'staff', 'art', 'whatever']
  );
});

function initMask(selector, array = undefined, config = undefined) {
  if (selector === undefined || selector === null) {
    console.log('Selector was not undefined!');
    return;
  }
  if (array === null || array === undefined) {
    console.log('Tag Array Required!');
    return;
  }
  if (config === undefined || config === null) {
    config = {
      patern: '{}',
      unicode: false,
      color: 'steelblue'
    }
  } else if (config.patern === undefined || config.patern === null || typeof config.append !== 'string') {
    config.patern = '{}';
  } else if (config.unicode === undefined || config.unicode === null || typeof config.append !== 'boolean') {
    config.unicode = false;
  } else if (config.color === undefined || config.color === null || typeof config.append !== 'string') {
    config.color = 'steelblue';
  }

  selector.attr({
    'style': 'position: relative; display: inline-block;'
  });
  selector.find('textarea').attr({
    'style': 'position: relative; z-index: 1; border-radius: 5px; caret-color: red; overflow: hidden; resize: none; outline: none; border: 1px solid rgba(0,0,0,.2); color: transparent; background: transparent; font-family: inherit; line-height: 1.5; padding: 5px;'
  });

  autosize(selector.find('textarea'));
  selector.append(`
      <div class="content-mask" style="color: #fff; border-radius: 20px; padding-bottom: 2px; box-shadow: 1px 1px 5px rgba(0,0,0,.2);"></div>
    `);
  selector.find('.content-mask').attr({
    'style': 'position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: auto; z-index: 0; border: 1px solid transparent; border-radius: 5px; font-family: inherit; line-height: 1.5; padding: 5px; word-break: break-word; white-space: pre-wrap;' 
  });

  buildMaskArray(selector, config, array);

  var patern = configMask(selector, config);
  maskActionCatching(selector, config, patern);
}

function buildMaskArray(selector, config, array) {
  var color = (config && config.color) ? config.color : '#906d60';
  var patern = (config && config.patern) ? config.patern : '{}';
  selector.append(`
      <div class="mask-array" style="position: absolute; padding: 10px; border: 1px solid rgba(0,0,0,.2); background: #fff; box-shadow: 2px 2px 10px rgba(0, 0, 0, .1); display: none; z-index: 1;"><ul style="list-style: none; padding: 0; margin: 0; max-height: 300px; min-width: 180px; overflow: auto;"></ul></div>
    `);

  if (array) {
    array.forEach((item, index) => {
      selector.find('.mask-array ul').append(
        `
          <li onclick="maskArrayItemClick('` + patern.charAt(0) + patern.charAt(0) + item + patern.charAt(1) + patern.charAt(1) + `')" 
            onmouseover="liMaskItemHover(this)"
            onmouseleave="liMaskItemMouseLeave(this)"
            style="margin: 0; height: 20px; padding: 5px; cursor: pointer;"><span style="background: ` + color + `; color: #fff; border-radius: 20px; padding: 0px 3px 2px 3px; box-shadow: 1px 1px 5px rgba(0,0,0,.2);">` + patern.charAt(0) + patern.charAt(0) + ' ' + item + ' ' + patern.charAt(1) + patern.charAt(1) + `</span>
          </li>
        `
      );
    });
  }
}

function liMaskItemHover(li) {
  li.style.background = '#eee';
}

function liMaskItemMouseLeave(li) {
  li.style.background = '#fff';
}

function configMask(selector, config) {
  var width = (config && config.width) ? config.width : 300;
  var height = (config && config.height) ? config.height : 110;
  var fontSize = (config && config.fontSize) ? config.fontSize : '15';

  selector.find('textarea').css("min-width", width + 'px');
  selector.find('textarea').css("min-height", height + 'px');
  selector.find('textarea').css("font-size", fontSize + 'px');

  selector.find('.content-mask').css("font-size", fontSize + 'px');
  var maskPatern;
  switch (config.patern) {
    case '{}':
      switch (config.unicode) {
        case true:
          switch (config.spacing) {
            case true:
              maskPatern = pattern1SU;
              config.maskMatchL = maskMatchL1SU;
              config.maskMatchR = maskMatchR1SU;
              break;
            case false:
              maskPatern = pattern1S;
              config.maskMatchL = maskMatchL1S;
              config.maskMatchR = maskMatchR1S;
              break;
            default:
              maskPatern = pattern1SU;
              config.maskMatchL = maskMatchL1SU;
              config.maskMatchR = maskMatchR1SU;
          }
        case false:
          switch (config.spacing) {
            case true:
              maskPatern = pattern1U;
              config.maskMatchL = maskMatchL1U;
              config.maskMatchR = maskMatchR1U;
              break;
            case false:
              maskPatern = pattern1;
              config.maskMatchL = maskMatchL1;
              config.maskMatchR = maskMatchR1;
              break;
            default:
              maskPatern = pattern1U;
              config.maskMatchL = maskMatchL1U;
              config.maskMatchR = maskMatchR1U;
          }
      }
      break;
    case '[]':
      switch (config.unicode) {
        case true:
          switch (config.spacing) {
            case true:
              maskPatern = pattern2SU;
              config.maskMatchL = maskMatchL2SU;
              config.maskMatchR = maskMatchR2SU;
              break;
            case false:
              maskPatern = pattern2S;
              config.maskMatchL = maskMatchL2S;
              config.maskMatchR = maskMatchR2S;
              break;
            default:
              maskPatern = pattern2SU;
              config.maskMatchL = maskMatchL2SU;
              config.maskMatchR = maskMatchR2SU;
          }
        case false:
          switch (config.spacing) {
            case true:
              maskPatern = pattern2U;
              config.maskMatchL = maskMatchL2U;
              config.maskMatchR = maskMatchR2U;
              break;
            case false:
              maskPatern = pattern2;
              config.maskMatchL = maskMatchL2;
              config.maskMatchR = maskMatchR2;
              break;
            default:
              maskPatern = pattern2U;
              config.maskMatchL = maskMatchL2U;
              config.maskMatchR = maskMatchR2U;
          }
      }
      break;
    case '()':
      switch (config.unicode) {
        case true:
          switch (config.spacing) {
            case true:
              maskPatern = pattern4SU;
              config.maskMatchL = maskMatchL4SU;
              config.maskMatchR = maskMatchR4SU;
              break;
            case false:
              maskPatern = pattern4S;
              config.maskMatchL = maskMatchL4S;
              config.maskMatchR = maskMatchR4S;
              break;
            default:
              maskPatern = pattern4SU;
              config.maskMatchL = maskMatchL4SU;
              config.maskMatchR = maskMatchR4SU;
          }
        case false:
          switch (config.spacing) {
            case true:
              maskPatern = pattern4U;
              config.maskMatchL = maskMatchL4U;
              config.maskMatchR = maskMatchR4U;
              break;
            case false:
              maskPatern = pattern4;
              config.maskMatchL = maskMatchL4;
              config.maskMatchR = maskMatchR4;
              break;
            default:
              maskPatern = pattern4U;
              config.maskMatchL = maskMatchL4U;
              config.maskMatchR = maskMatchR4U;
          }
      }
      break;
    default:
      console.log('Not supported patern, must be {} / [] / ()');
  }
  return maskPatern;
}

function maskActionCatching(selector, config, patern) {
  selector.keydown(function (event) {
    if (event.which === 27) {
      selector.find('.mask-array').hide();
    } else {
      maskEventHandler(selector, config, event, patern);
    }
    curMask = selector;
  }).click(function (event) {
    maskEventHandler(selector, config, event, patern);
    curMask = selector;
  });
}

function maskEventHandler(selector, config, e, patern) {
  setTimeout(() => {
    doMask(selector, config, patern, e);
  }, 1);
}

var maskMatchL;
var maskMatchR;

function doMask(selector, config, patern, e) {
  var val = selector.find('textarea').val();
  if (val === '') {
    selector.find('.content-mask').html(val);
    return;
  }
  var cursor = $(e.target).caret();
  var matchForSuggestL = val.substring(0, cursor).match(config.maskMatchL);
  var matchForSuggestR = val.substring(cursor, val.length).match(config.maskMatchR);

  if (matchForSuggestL && matchForSuggestL.length > 0
    && matchForSuggestR && matchForSuggestR.length > 0) {

    var list = selector.find('.content-mask > span');
    for (var l = 0; l < list.length; l++) {
      if (list.eq(l).attr('id').endsWith('-' + (cursor + matchForSuggestR[0].length))) {
        var position = list.eq(l).position();
        var top = position.top;
        var left = position.left;
        selector.find('.mask-array').css({
          'top': (top + 25) + 'px',
          'left': left + 'px'
        });
        curMaskRange = {
          left: list.eq(l).attr('id').split('-')[2],
          right: list.eq(l).attr('id').split('-')[3]
        };
        curMaskCursor = cursor;
        curMaskConfig = config;
        selector.find('.mask-array').show();
        setTimeout(() => {
          updateMaskDisplayArrayItem();
        }, 1);
        break;
      }
    }
  } else {
    selector.find('.mask-array').hide();
  }

  val = val.replace(/(?:\r\n|\r|\n)/g, '<br />');

  var matches = val.match(patern);
  if (!matches) {
    selector.find('.content-mask').html(val);
  } else {
    for (var i = 0; i < matches.length - 1; i++) {
      for (var j = i + 1; j < matches.length; j++) {
        if (matches[i] === matches[j]) {
          matches.splice(j, 1);
          j--;
        }
      }
    }
    var color = (config && config.color) ? config.color : '#906d60';
    for (var k = 0; k < matches.length; k++) {
      val = val.replaceAllParam(matches[k], color);
    }
    selector.find('.content-mask').html(val);
    selector.attr({ 'data-marked': matches.maskJoin() });
  }
}

Array.prototype.maskJoin = function maskJoin() {
  var rs = '';
  for (var i = 0; i < this.length; i++) {
    rs += this[i].substring(2, this[i].length - 2)
    if (i < this.length - 1) {
      rs += ',';
    }
  }
  return rs;
};

String.prototype.replaceAllParam = function (input, color) {
  var split = this.split(input);

  var result = '';
  for (var i = 0; i <= split.length - 2; i++) {

    result += (split[i]
      + `<span style="background: ` + color
      + `; color: #fff; border-radius: 20px; padding-bottom: 2px; box-shadow: 1px 1px 5px rgba(0,0,0,.2);" id="mask-item-` + extractContent(result + split[i]).length + '-' + (extractContent(result) + extractContent(split[i]) + input).length + `">` + input
      + `</span>`);
  }
  result += split[split.length - 1];
  return result;
};

function extractContent(s) {
  var div = document.createElement('div');
  div.innerHTML = s;
  return div.innerText;
}

var curMask;
var curMaskRange;
var curMaskCursor;
var curMaskConfig;
function maskArrayItemClick(item) {
  var val = curMask.find('textarea').val();
  val = val.substring(0, curMaskRange.left) + item + val.substring(curMaskRange.right, val.length);
  curMask.find('textarea').val(val);
}

function updateMaskDisplayArrayItem() {
  var val = curMask.find('textarea').val();
  var filter = val.substring((curMaskRange.left - 0) + 2, curMaskCursor);

  var list = curMask.find('.mask-array > ul li span');
  var patern = (curMaskConfig && curMaskConfig.patern) ? curMaskConfig.patern : '{}';

  var count = 0;
  for (var i = 0; i < list.length; i++) {
    if (!(list.eq(i).text().toLowerCase().replace(patern.charAt(0) + patern.charAt(0), '')
      .replace(patern.charAt(1) + patern.charAt(1), '').trim().includes(filter.toLowerCase()))) {
      list.eq(i).parent('li').hide();
      count++;
    } else {
      list.eq(i).parent('li').show();
    }
  }
  if (count === list.length) {
    curMask.find('.mask-array > ul li#empty-li').remove();
    curMask.find('.mask-array > ul').append("<li id='empty-li'><i>Empty!</i></li>");
  } else {
    curMask.find('.mask-array > ul li#empty-li').remove();
  }
}

function getMaskMarked(selector) {
  if (selector === undefined || selector === null) {
    console.log('Selector was undefined!');
    return undefined;
  } else {
    return selector.attr('data-marked').split(',');
  }
}