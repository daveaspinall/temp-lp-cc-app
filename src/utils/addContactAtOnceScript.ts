import { addScript } from './addScript'

const scriptText = `window.lpTag=window.lpTag||{},void 0===window.lpTag._tagCount?(window.lpTag={site:"p-245",env:"uk",providerId:"245",section:lpTag.section||"",autoStart:!1!==lpTag.autoStart,ovr:lpTag.ovr||{domain:"tag.contactatonce.co.uk",tagjs:""},_v:"1.0",_tagCount:1,protocol:"https:",events:{bind:function(t,e,i){lpTag.defer(function(){lpTag.events.bind(t,e,i)},0)},trigger:function(t,e,i){lpTag.defer(function(){lpTag.events.trigger(t,e,i)},1)}},defer:function(t,e){0==e?(this._defB=this._defB||[],this._defB.push(t)):1==e?(this._defT=this._defT||[],this._defT.push(t)):(this._defL=this._defL||[],this._defL.push(t))},sdk:{exec:function(t,e){lpTag._defExec=lpTag._defExec||{},lpTag._defExec[t]=lpTag._defExec[t]||[],lpTag._defExec[t].push(e)}},load:function(t,e,i){var n=this;setTimeout(function(){n._load(t,e,i)},0)},_load:function(t,e,i){var n=t;t||(n=this.protocol+"//"+(this.ovr&&this.ovr.domain?this.ovr.domain:"tag.contactatonce.com")+"/tag/tag.js");var a=document.createElement("script");a.setAttribute("charset",e||"UTF-8"),i&&a.setAttribute("id",i),a.setAttribute("src",n),a.setAttribute("async",""),document.getElementsByTagName("head").item(0).appendChild(a)},init:function(){this._timing=this._timing||{},this._timing.start=(new Date).getTime();var t=this;window.attachEvent?window.attachEvent("onload",function(){t._domReady("domReady")}):(window.addEventListener("DOMContentLoaded",function(){t._domReady("contReady")},!1),window.addEventListener("load",function(){t._domReady("domReady")},!1)),void 0===window._caotStop&&this.load()},start:function(){this.autoStart=!0},_domReady:function(t){this.isDom||(this.isDom=!0,this.events.trigger("CAOT","DOM_READY",{t:t})),this._timing[t]=(new Date).getTime()},vars:lpTag.vars||[],dbs:lpTag.dbs||[],ctn:lpTag.ctn||[],sdes:lpTag.sdes||[],ev:lpTag.ev||[],tagletCommands:lpTag.tagletCommands||[]},lpTag.init()):window.lpTag._tagCount+=1;`

export const addContactAtOnceScript = (scriptId: string) => {
  addScript({
    id: scriptId,
    text: scriptText,
    appendTo: 'body',
    defer: true,
  })
}
