(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{f7VO:function(e,t,o){"use strict";o.r(t),o.d(t,"MiscDirectivesModule",function(){return N});var c=o("ofXK"),n=o("tyNb"),r=o("6G0F"),s=o("fXoL"),i=o("mqlY"),b=o("gS+c"),a=o("mL5k"),d=o("3Pt+"),l=o("JmxP");let p=(()=>{class e{constructor(){this.stopPropagation=!0}logKeyPress(e){alertify.log(`'${e}' pressed`)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Db({type:e,selectors:[["rt-demo-stop-events"]],decls:5,vars:2,consts:[[3,"keypress"],[1,"checkbox-inline"],["type","checkbox",3,"ngModel","ngModelChange"],["type","text",1,"form-control",3,"rtStopEvents"]],template:function(e,t){1&e&&(s.Ob(0,"div",0),s.Vb("keypress",function(e){return t.logKeyPress(e.key)}),s.Ob(1,"label",1),s.Ob(2,"input",2),s.Vb("ngModelChange",function(e){return t.stopPropagation=e}),s.Nb(),s.oc(3,"stop keypress events propagation "),s.Nb(),s.Kb(4,"input",3),s.Nb()),2&e&&(s.zb(2),s.dc("ngModel",t.stopPropagation),s.zb(2),s.dc("rtStopEvents",t.stopPropagation?"keypress":null))},directives:[d.a,d.d,d.g,l.C],encapsulation:2,changeDetection:0}),e})(),u=(()=>{class e{constructor(){this.preventDefaults=!0}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Db({type:e,selectors:[["rt-demo-prevent-defaults"]],decls:7,vars:3,consts:[[1,"checkbox-inline"],["type","checkbox",3,"ngModel","ngModelChange"],["target","_blank","href","https://github.com/eastbanctechru/right-angled",3,"rtPreventDefaults"]],template:function(e,t){1&e&&(s.Ob(0,"div"),s.Ob(1,"label",0),s.Ob(2,"input",1),s.Vb("ngModelChange",function(e){return t.preventDefaults=e}),s.Nb(),s.oc(3,"I want to break link "),s.Nb(),s.Kb(4,"br"),s.Ob(5,"a",2),s.oc(6),s.Nb(),s.Nb()),2&e&&(s.zb(2),s.dc("ngModel",t.preventDefaults),s.zb(3),s.dc("rtPreventDefaults",t.preventDefaults?"click":null),s.zb(1),s.pc(t.preventDefaults?"link is broken":"link is fixed"))},directives:[d.a,d.d,d.g,l.i],encapsulation:2,changeDetection:0}),e})(),m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Db({type:e,selectors:[["rt-demo-select-on-focus"]],decls:1,vars:0,consts:[["type","text","rtSelectOnFocus","","value","focus me",1,"form-control"]],template:function(e,t){1&e&&s.Kb(0,"input",0)},directives:[l.r],encapsulation:2,changeDetection:0}),e})();function h(e,t){1&e&&s.Kb(0,"input",3)}let f=(()=>{class e{constructor(){this.renderInput=!1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Db({type:e,selectors:[["rt-demo-focus-on-render"]],decls:5,vars:2,consts:[[1,"checkbox-inline"],["type","checkbox",3,"ngModel","ngModelChange"],["class","form-control","type","text","rtFocusOnRender","",4,"ngIf"],["type","text","rtFocusOnRender","",1,"form-control"]],template:function(e,t){1&e&&(s.Ob(0,"div"),s.Ob(1,"label",0),s.Ob(2,"input",1),s.Vb("ngModelChange",function(e){return t.renderInput=e}),s.Nb(),s.oc(3,"render text input and focus on it "),s.Nb(),s.mc(4,h,1,0,"input",2),s.Nb()),2&e&&(s.zb(2),s.dc("ngModel",t.renderInput),s.zb(2),s.dc("ngIf",t.renderInput))},directives:[d.a,d.d,d.g,c.l,l.b],encapsulation:2,changeDetection:0}),e})();const v=function(){return["/persistence"]},O=[{component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Db({type:e,selectors:[["ng-component"]],decls:179,vars:2,consts:[[1,"agenda"],["href","misc-directives#common-idea"],["href","misc-directives#bootstrap"],["href","misc-directives#stop-events"],["href","misc-directives#prevent-defaults"],["href","misc-directives#select-on-focus"],["href","misc-directives#focus-on-render"],["id","common-idea"],["id","bootstrap"],["title","app.module.ts","url","misc-directives/bootstrap/app.module.tsfake"],["id","stop-events"],["target","_blank","href","https://developer.mozilla.org/ru/docs/Web/API/Event/stopPropagation"],["url","misc-directives/stop-events/stop-events.component.html"],["url","misc-directives/stop-events/stop-events.component.ts"],["id","prevent-defaults"],["target","_blank","href","https://developer.mozilla.org/ru/docs/Web/API/Event/preventDefault"],["url","misc-directives/prevent-defaults/prevent-defaults.component.html"],["url","misc-directives/prevent-defaults/prevent-defaults.component.ts"],["id","select-on-focus"],["url","misc-directives/select-on-focus/select-on-focus.component.html"],["url","misc-directives/select-on-focus/select-on-focus.component.ts"],["id","focus-on-render"],["target","_blank","href","http://www.w3schools.com/tags/att_input_autofocus.asp"],["url","misc-directives/focus-on-render/focus-on-render.component.html"],["url","misc-directives/focus-on-render/focus-on-render.component.ts"],[1,"text-center","clearfix"],["href","#",1,"btn","btn-primary","docs-link","pull-left",3,"routerLink"]],template:function(e,t){1&e&&(s.Ob(0,"h2"),s.oc(1,"Misc Directives"),s.Nb(),s.Ob(2,"h3"),s.oc(3,"Contents"),s.Nb(),s.Ob(4,"ul",0),s.Ob(5,"li"),s.Ob(6,"a",1),s.oc(7,"General idea"),s.Nb(),s.Nb(),s.Ob(8,"li"),s.Ob(9,"a",2),s.oc(10,"How to bootstrap"),s.Nb(),s.Nb(),s.Ob(11,"li"),s.Ob(12,"a",3),s.Ob(13,"code"),s.oc(14,"rtStopEvents"),s.Nb(),s.oc(15," directive"),s.Nb(),s.Nb(),s.Ob(16,"li"),s.Ob(17,"a",4),s.Ob(18,"code"),s.oc(19,"rtPreventDefaults"),s.Nb(),s.oc(20," directive"),s.Nb(),s.Nb(),s.Ob(21,"li"),s.Ob(22,"a",5),s.Ob(23,"code"),s.oc(24,"rtSelectOnFocus"),s.Nb(),s.oc(25," directive"),s.Nb(),s.Nb(),s.Ob(26,"li"),s.Ob(27,"a",6),s.Ob(28,"code"),s.oc(29,"rtFocusOnRender"),s.Nb(),s.oc(30," directive"),s.Nb(),s.Nb(),s.Nb(),s.Ob(31,"section",7),s.Ob(32,"h3"),s.oc(33,"General idea"),s.Nb(),s.Ob(34,"p"),s.oc(35," The directives from this section work directly with the native "),s.Ob(36,"code"),s.oc(37,"HTML"),s.Nb(),s.oc(38," elements and browser events. They implement useful features not related directly to the "),s.Ob(39,"code"),s.oc(40,"right-angled"),s.Nb(),s.oc(41," library. For example, you can use "),s.Ob(42,"code"),s.oc(43,"rtStopEvents"),s.Nb(),s.oc(44," directive for preventing event bubbling on any element. "),s.Nb(),s.Nb(),s.Ob(45,"section",8),s.Ob(46,"h3"),s.oc(47,"How to bootstrap"),s.Nb(),s.Ob(48,"p"),s.oc(49," To work with these directives you should import the "),s.Ob(50,"code"),s.oc(51,"RTMiscModule"),s.Nb(),s.oc(52," module from "),s.Ob(53,"code"),s.oc(54,"right-angled"),s.Nb(),s.oc(55," library and add it into your "),s.Ob(56,"code"),s.oc(57,"AppModule"),s.Nb(),s.oc(58," imports array. You can also use "),s.Ob(59,"code"),s.oc(60,"RTModule"),s.Nb(),s.oc(61," module which includes the functionality of the entire library. "),s.Nb(),s.Ob(62,"rt-demo-tab-section"),s.Kb(63,"rt-demo-code-tab",9),s.Nb(),s.Nb(),s.Ob(64,"section",10),s.Ob(65,"h3"),s.Ob(66,"code"),s.oc(67,"rtStopEvents"),s.Nb(),s.oc(68," directive"),s.Nb(),s.Ob(69,"p"),s.oc(70," This directive gets a "),s.Ob(71,"code"),s.oc(72,"string"),s.Nb(),s.oc(73," or array of "),s.Ob(74,"code"),s.oc(75,"string"),s.Nb(),s.oc(76," with the event names as a parameter. "),s.Nb(),s.Ob(77,"p"),s.oc(78," The directive will subscribe to the specified events of the element and will call the event "),s.Ob(79,"a",11),s.oc(80,"stopPropagation"),s.Nb(),s.oc(81," method in the event handler to prevent further event propagation. "),s.Nb(),s.Ob(82,"p"),s.oc(83," In the example below you can see, how the "),s.Ob(84,"code"),s.oc(85,"input"),s.Nb(),s.oc(86," element, marked by this directive, stops the "),s.Ob(87,"code"),s.oc(88,"keypress"),s.Nb(),s.oc(89,' event propagation if the "stop keypress events propagation" checkbox is checked and does not allow the parent '),s.Ob(90,"code"),s.oc(91,"div"),s.Nb(),s.oc(92,' element to process this event. If you uncheck "stop keypress events propagation" checkbox, '),s.Ob(93,"code"),s.oc(94,"keypress"),s.Nb(),s.oc(95," event handler of the "),s.Ob(96,"code"),s.oc(97,"div"),s.Nb(),s.oc(98," element begins to log every key that has been pressed. "),s.Nb(),s.Ob(99,"rt-demo-tab-section"),s.Ob(100,"rt-demo-sample-tab"),s.Kb(101,"rt-demo-stop-events"),s.Nb(),s.Kb(102,"rt-demo-code-tab",12),s.Kb(103,"rt-demo-code-tab",13),s.Nb(),s.Nb(),s.Ob(104,"section",14),s.Ob(105,"h3"),s.Ob(106,"code"),s.oc(107,"rtPreventDefaults"),s.Nb(),s.oc(108," directive"),s.Nb(),s.Ob(109,"p"),s.oc(110," This directive gets a "),s.Ob(111,"code"),s.oc(112,"string"),s.Nb(),s.oc(113," or array of "),s.Ob(114,"code"),s.oc(115,"string"),s.Nb(),s.oc(116," with the event names as a parameter. "),s.Nb(),s.Ob(117,"p"),s.oc(118," The directive will subscribe to the specified events of the element and will call the event "),s.Ob(119,"a",15),s.oc(120,"preventDefault"),s.Nb(),s.oc(121," method in the handler, preventing performing the default actions for the event. "),s.Nb(),s.Ob(122,"p"),s.oc(123," In the example below you can see the link, which does not open page on click since "),s.Ob(124,"code"),s.oc(125,"rtPreventDefaults"),s.Nb(),s.oc(126," directive configured to prevent default action execution for "),s.Ob(127,"code"),s.oc(128,"click"),s.Nb(),s.oc(129," event. "),s.Nb(),s.Ob(130,"rt-demo-tab-section"),s.Ob(131,"rt-demo-sample-tab"),s.Kb(132,"rt-demo-prevent-defaults"),s.Nb(),s.Kb(133,"rt-demo-code-tab",16),s.Kb(134,"rt-demo-code-tab",17),s.Nb(),s.Nb(),s.Ob(135,"section",18),s.Ob(136,"h3"),s.Ob(137,"code"),s.oc(138,"rtSelectOnFocus"),s.Nb(),s.oc(139," directive"),s.Nb(),s.Ob(140,"p"),s.oc(141," This directive is used with the "),s.Ob(142,"code"),s.oc(143,"input"),s.Nb(),s.oc(144," elements and selects all input text when element gets focused. "),s.Nb(),s.Ob(145,"rt-demo-tab-section"),s.Ob(146,"rt-demo-sample-tab"),s.Kb(147,"rt-demo-select-on-focus"),s.Nb(),s.Kb(148,"rt-demo-code-tab",19),s.Kb(149,"rt-demo-code-tab",20),s.Nb(),s.Nb(),s.Ob(150,"section",21),s.Ob(151,"h3"),s.Ob(152,"code"),s.oc(153,"rtFocusOnRender"),s.Nb(),s.oc(154," directive"),s.Nb(),s.Ob(155,"p"),s.oc(156," This directive is some kind of replacement for "),s.Ob(157,"code"),s.oc(158,"HTML"),s.Nb(),s.Ob(159,"a",22),s.oc(160,"autofocus"),s.Nb(),s.oc(161," attribute, but it works with the dynamic rendering. "),s.Nb(),s.Ob(162,"p"),s.oc(163," The "),s.Ob(164,"code"),s.oc(165,"input"),s.Nb(),s.oc(166," element marked by this directive will be focused automatically right after being rendered. "),s.Nb(),s.Ob(167,"rt-demo-tab-section"),s.Ob(168,"rt-demo-sample-tab"),s.Kb(169,"rt-demo-focus-on-render"),s.Nb(),s.Kb(170,"rt-demo-code-tab",23),s.Kb(171,"rt-demo-code-tab",24),s.Nb(),s.Nb(),s.Ob(172,"section"),s.Ob(173,"aside"),s.Ob(174,"h4"),s.oc(175,"Related sections"),s.Nb(),s.Ob(176,"p",25),s.Ob(177,"a",26),s.oc(178,"\u2190 Persist lists state"),s.Nb(),s.Nb(),s.Nb(),s.Nb()),2&e&&(s.zb(177),s.dc("routerLink",s.ec(1,v)))},directives:[i.a,b.a,a.a,p,u,m,f,n.f],encapsulation:2,changeDetection:0}),e})(),path:""}];let N=(()=>{class e{}return e.\u0275mod=s.Hb({type:e}),e.\u0275inj=s.Gb({factory:function(t){return new(t||e)},imports:[[c.c,r.a,n.g.forChild(O)]]}),e})()}}]);