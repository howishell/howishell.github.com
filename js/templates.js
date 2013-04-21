(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['advisors.hb'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <div class=\"advisor\" data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" >\n    <div class=\"row\"><img draggable='false' src=\"img/avatar_";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ".png\" /></div>\n    <div class=\"row\" title=\"";
  if (stack1 = helpers.specialty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.specialty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n  </div>\n  ";
  return buffer;
  }

  buffer += "\n<div style=\"text-align: center\">\n  ";
  stack1 = helpers.each.call(depth0, depth0.advisors, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  \n</div>";
  return buffer;
  });
templates['area.hb'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"span3 center\">\n      <strong>Rock</strong>\n      <br>\n      <input class=\"knob\" data-step=\"0.1\" data-min=\"0\" data-max=\"1\"\n        data-skin=\"tron\" data-readOnly=\"true\" data-thickness=\".2\"\n        data-width=\"75\" data-height=\"75\"\n        data-displayPrevious=true value=\"";
  if (stack1 = helpers.rock) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rock; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    </div>\n    <div class=\"span3 center\">\n      <strong>Alumina</strong>\n      <br>\n      <input class=\"knob\" data-step=\"0.1\" data-min=\"0\" data-max=\"1\"\n        data-skin=\"tron\" data-readOnly=\"true\" data-thickness=\".2\"\n        data-width=\"75\" data-height=\"75\"\n        data-displayPrevious=true value=\"";
  if (stack1 = helpers.alumina) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.alumina; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    </div>\n    <div class=\"span3 center\">\n      <strong>Silica</strong>\n      <br>\n      <input class=\"knob\" data-step=\"0.1\" data-min=\"0\" data-max=\"1\"\n        data-skin=\"tron\" data-readOnly=\"true\" data-thickness=\".2\"\n        data-width=\"75\" data-height=\"75\"\n        data-displayPrevious=true value=\"";
  if (stack1 = helpers.silica) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.silica; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    </div>\n    <div class=\"span3 center\">\n      <strong><sup>3</sup>He</strong>\n      <br>\n      <input class=\"knob\" data-step=\"0.1\" data-min=\"0\" data-max=\"1\"\n        data-skin=\"tron\" data-readOnly=\"true\" data-thickness=\".2\"\n        data-width=\"75\" data-height=\"75\"\n        data-displayPrevious=true value=\"";
  if (stack1 = helpers.he3) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.he3; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    </div>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <h4>Available to place</h4>\n    <div class=\"row-fluid\">\n      ";
  stack1 = helpers.each.call(depth0, depth0.placeable, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        <div class=\"span3 well center placeable pointer\" data-id=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.thing),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"\n          data-quantity=\"";
  if (stack2 = helpers.quantity) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.quantity; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n          <i class=\"icon "
    + escapeExpression(((stack1 = ((stack1 = depth0.thing),stack1 == null || stack1 === false ? stack1 : stack1.image_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></i>\n          <strong>"
    + escapeExpression(((stack1 = ((stack1 = depth0.thing),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong>\n          <br>\n          <strong>x ";
  if (stack2 = helpers.quantity) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.quantity; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</strong>\n        </div>\n      ";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return "\n  <h4 class=\"center\">Buildings</h4>\n";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    ";
  stack2 = helpers['with'].call(depth0, ((stack1 = depth0.area),stack1 == null || stack1 === false ? stack1 : stack1.thing), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  ";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <div class=\"row-fluid\">\n        <div class=\"span4 center\">\n          <i class=\"icon icon-4x ";
  if (stack1 = helpers.image_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></i>\n          <br>\n          <strong>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</strong>\n          <br>\n          ";
  stack1 = helpers['if'].call(depth0, depth0.maintenance, {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <div class=\"span4\">\n          ";
  stack1 = helpers['if'].call(depth0, depth0.maintenance, {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n        <div class=\"span4\">\n          ";
  stack1 = helpers['if'].call(depth0, depth0.generator, {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n      </div>\n    ";
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div id=\"power\" class=\"switch\" data-on=\"success\" data-off=\"danger\">\n              <input type=\"checkbox\"\n                ";
  stack1 = helpers['if'].call(depth0, depth0.working, {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "/>\n            </div>\n            <br>\n            <br>\n          ";
  return buffer;
  }
function program11(depth0,data) {
  
  
  return "\n                  checked\n                ";
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <strong>Maintenance:</strong>\n            <br>\n            ";
  stack1 = helpers['with'].call(depth0, depth0.maintenance, {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n              <span class=\"label label-warning\">";
  if (stack1 = helpers.energy) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.energy; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " mW</span>\n              <span class=\"label label-warning\">";
  if (stack1 = helpers.robots) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.robots; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " SCV</span>\n              <span class=\"label label-warning\">";
  if (stack1 = helpers.he3) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.he3; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " <sup>3</sup>He</span>\n            ";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <strong>Generation:</strong>\n            <br>\n            ";
  stack1 = helpers['with'].call(depth0, depth0.generator, {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n              <span class=\"label label-success\">";
  if (stack1 = helpers.energy) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.energy; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " mW</span>\n              <span class=\"label label-success\">";
  if (stack1 = helpers.bricks) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.bricks; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Bricks</span>\n              <span class=\"label label-success\">";
  if (stack1 = helpers.aluminum) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.aluminum; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Al</span>\n              <span class=\"label label-success\">";
  if (stack1 = helpers.silicon) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.silicon; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Si</span>\n              <span class=\"label label-success\">";
  if (stack1 = helpers.he3) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.he3; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " <sup>3</sup>He</span>\n              <span class=\"label label-success\">";
  if (stack1 = helpers.storage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.storage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " kg</span>\n            ";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = helpers.each.call(depth0, depth0.buildings, {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program20(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <div class=\"row-fluid building pointer\" data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"span12 well building-span\">\n          <div class=\"row-fluid\">\n            <div class=\"span3 center\">\n              <i class=\"icon icon-4x ";
  if (stack1 = helpers.image_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></i>\n              <br>\n              <strong>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</strong>\n            </div>\n            <div class=\"span3\">\n              <strong>Cost:</strong>\n              <br>\n              ";
  stack1 = helpers['if'].call(depth0, depth0.build, {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n            <div class=\"span3\">\n              ";
  stack1 = helpers['if'].call(depth0, depth0.maintenance, {hash:{},inverse:self.noop,fn:self.program(24, program24, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n            <div class=\"span3\">\n              ";
  stack1 = helpers['if'].call(depth0, depth0.generator, {hash:{},inverse:self.noop,fn:self.program(27, program27, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n          </div>\n        </div>\n      </div>\n    ";
  return buffer;
  }
function program21(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                ";
  stack1 = helpers['with'].call(depth0, depth0.build, {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              ";
  return buffer;
  }
function program22(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                  <span class=\"label label-important\">$ ";
  if (stack1 = helpers.costs) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.costs; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n                  <span class=\"label label-important\">";
  if (stack1 = helpers.robots) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.robots; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " SCV</span>\n                  <span class=\"label label-important\">";
  if (stack1 = helpers.turns) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.turns; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Turns</span>\n                  <span class=\"label label-important\">";
  if (stack1 = helpers.bricks) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.bricks; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " kg</span>\n                  <span class=\"label label-important\">";
  if (stack1 = helpers.aluminum) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.aluminum; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Al</span>\n                  <span class=\"label label-important\">";
  if (stack1 = helpers.silicon) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.silicon; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Si</span>\n                ";
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <strong>Maintenance:</strong>\n                <br>\n                ";
  stack1 = helpers['with'].call(depth0, depth0.maintenance, {hash:{},inverse:self.noop,fn:self.program(25, program25, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              ";
  return buffer;
  }
function program25(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                  <span class=\"label label-warning\">";
  if (stack1 = helpers.energy) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.energy; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " mW</span>\n                  <span class=\"label label-warning\">";
  if (stack1 = helpers.robots) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.robots; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " SCV</span>\n                  <span class=\"label label-warning\">";
  if (stack1 = helpers.he3) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.he3; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " <sup>3</sup>He</span>\n                ";
  return buffer;
  }

function program27(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <strong>Generation:</strong>\n                <br>\n                ";
  stack1 = helpers['with'].call(depth0, depth0.generator, {hash:{},inverse:self.noop,fn:self.program(28, program28, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              ";
  return buffer;
  }
function program28(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                  <span class=\"label label-success\">";
  if (stack1 = helpers.energy) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.energy; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " mW</span>\n                  <span class=\"label label-success\">";
  if (stack1 = helpers.bricks) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.bricks; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Bricks</span>\n                  <span class=\"label label-success\">";
  if (stack1 = helpers.aluminum) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.aluminum; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Al</span>\n                  <span class=\"label label-success\">";
  if (stack1 = helpers.silicon) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.silicon; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " Si</span>\n                  <span class=\"label label-success\">";
  if (stack1 = helpers.he3) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.he3; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " <sup>3</sup>He</span>\n                  <span class=\"label label-success\">";
  if (stack1 = helpers.storage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.storage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " kg</span>\n                ";
  return buffer;
  }

  buffer += "<div class=\"modal-header center\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n  <h3>Area ";
  if (stack1 = helpers['i']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['i']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (stack1 = helpers['j']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['j']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n  <br>\n  <div class=\"row-fluid\">\n    ";
  stack2 = helpers['with'].call(depth0, ((stack1 = depth0.area),stack1 == null || stack1 === false ? stack1 : stack1.resourceDensity), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  </div>\n  ";
  stack2 = helpers.unless.call(depth0, ((stack1 = depth0.area),stack1 == null || stack1 === false ? stack1 : stack1.thing), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</div>\n";
  stack2 = helpers.unless.call(depth0, ((stack1 = depth0.area),stack1 == null || stack1 === false ? stack1 : stack1.thing), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n<div class=\"modal-body\">\n  ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.area),stack1 == null || stack1 === false ? stack1 : stack1.thing), {hash:{},inverse:self.program(19, program19, data),fn:self.program(8, program8, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</div>\n<div class=\"modal-footer\">\n</div>";
  return buffer;
  });
templates['areaStats.hb'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <strong>Rock</strong>\n    <br>\n    <input class=\"knob\" data-step=\"0.1\" data-min=\"0\" data-max=\"1\"\n      data-skin=\"tron\" data-readOnly=\"true\" data-thickness=\".2\"\n      data-width=\"95\" data-height=\"95\"\n      data-displayPrevious=true value=\"";
  if (stack1 = helpers.rock) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rock; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <br>\n    <br>\n    <strong>Alumina</strong>\n    <br>\n    <input class=\"knob\" data-step=\"0.1\" data-min=\"0\" data-max=\"1\"\n      data-skin=\"tron\" data-readOnly=\"true\" data-thickness=\".2\"\n      data-width=\"95\" data-height=\"95\"\n      data-displayPrevious=true value=\"";
  if (stack1 = helpers.alumina) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.alumina; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <br>\n    <br>\n    <strong>Silica</strong>\n    <br>\n    <input class=\"knob\" data-step=\"0.1\" data-min=\"0\" data-max=\"1\"\n      data-skin=\"tron\" data-readOnly=\"true\" data-thickness=\".2\"\n      data-width=\"95\" data-height=\"95\"\n      data-displayPrevious=true value=\"";
  if (stack1 = helpers.silica) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.silica; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <br>\n    <br>\n    <strong><sup>3</sup>He</strong>\n    <br>\n    <input class=\"knob\" data-step=\"0.1\" data-min=\"0\" data-max=\"1\"\n      data-skin=\"tron\" data-readOnly=\"true\" data-thickness=\".2\"\n      data-width=\"95\" data-height=\"95\"\n      data-displayPrevious=true value=\"";
  if (stack1 = helpers.he3) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.he3; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n  ";
  return buffer;
  }

  buffer += "<h3 class=\"center\">Area ";
  if (stack1 = helpers['i']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['i']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (stack1 = helpers['j']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['j']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n<div class=\"center\">\n  ";
  stack2 = helpers['with'].call(depth0, ((stack1 = depth0.area),stack1 == null || stack1 === false ? stack1 : stack1.resourceDensity), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</div>";
  return buffer;
  });
templates['budget-table.hb'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <tr>\n      <td colspan=\"2\">\n        <strong>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</strong>\n      </td>\n      <td>";
  if (stack1 = helpers.value) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.value; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n      <td></td>\n      <td></td>\n    </tr>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <tr class=\"deliverable\" data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n      <td>\n        <strong>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</strong>\n      </td>\n      <td class=\"amount\">0</td>\n      <td>"
    + escapeExpression(((stack1 = ((stack1 = depth0.delivery),stack1 == null || stack1 === false ? stack1 : stack1.costs)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n      <td class=\"total-cost\">0</td>\n      <td>\n        <a href=\"#\" class=\"btn add\">\n          <i class=\"icon icon-plus\"></i>\n        </a>\n        <a href=\"#\" class=\"btn remove\">\n          <i class=\"icon icon-minus\"\"></i>\n        </a>\n      </td>\n    </tr>\n    ";
  return buffer;
  }

  buffer += "<img src=\"img/NASA_logo.svg\" class=\"span2\">\n<table class=\"table table-striped table-hover\">\n  <thead>\n    <tr>\n      <th>Item</th>\n      <th>Amount</th>\n      <th>Cost</th>\n      <th></th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    ";
  stack1 = helpers.each.call(depth0, depth0.specials, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    ";
  stack1 = helpers.each.call(depth0, depth0.deliverables, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <tr>\n    <td colspan=\"3\"><span class=\"pull-right\" >TOTAL</span></td>\n    <td colspan=\"2\" class=\"total\">";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n  </tbody>\n</table>";
  return buffer;
  });
templates['dialog.hb'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row next well\">\n  <div class=\"advisor span2 offset4\">\n    <div class=\"row\"><i class=\"icon icon-user\"></i></div>\n    <div class=\"row\" title=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.advisor),stack1 == null || stack1 === false ? stack1 : stack1.specialty)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.advisor),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n  </div>\n    <div class=\"span5\">\n        ";
  if (stack2 = helpers.message) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.message; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n    </div>\n</div>";
  return buffer;
  });
templates['globalStats.hb'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n\n        <div class=\"center\" title=\"Energy\">\n            <i class=\"icon icon-bolt\"></i>\n            <span class=\"label label-inverse\">\n                "
    + escapeExpression(((stack1 = ((stack1 = depth0.energy),stack1 == null || stack1 === false ? stack1 : stack1.output)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = ((stack1 = depth0.energy),stack1 == null || stack1 === false ? stack1 : stack1.input)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " mW\n            </span>\n        </div>\n        <br>\n        <br>\n        ";
  stack2 = helpers['with'].call(depth0, depth0.bricks, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        <br>\n        <br>\n        ";
  stack2 = helpers['with'].call(depth0, depth0.aluminum, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        <br>\n        <br>\n        ";
  stack2 = helpers['with'].call(depth0, depth0.silicon, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        <br>\n        <br>\n        ";
  stack2 = helpers['with'].call(depth0, depth0.he3, {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"center\" title=\"Bricks\">\n            <i class=\"resource icon icon-hdd\"></i>\n            <span class=\"label label-inverse\">\n             ";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " kg  (+";
  if (stack1 = helpers.input) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.input; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/-";
  if (stack1 = helpers.output) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.output; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ")\n            </span>\n        </div>\n        ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"center\" title=\"Aluminum\">\n            <strong class=\"resource\">Al</strong>\n            <span class=\"label label-inverse\">\n                ";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " kg\n                (+";
  if (stack1 = helpers.input) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.input; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/-";
  if (stack1 = helpers.output) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.output; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ")\n            </span>\n        </div>\n        ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"center\" title=\"Silicone\">\n            <strong class=\"resource\">Si</strong>\n            <span class=\"label label-inverse\">\n            ";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " kg\n            (+";
  if (stack1 = helpers.input) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.input; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/-";
  if (stack1 = helpers.output) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.output; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ")\n            </span>\n        </div>\n        ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"center\" title=\"Helium-3\">\n            <strong class=\"resource\"><sup>3</sup>He</strong>\n            <span class=\"label label-inverse\">\n                ";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " kg\n            (+";
  if (stack1 = helpers.input) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.input; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/-";
  if (stack1 = helpers.output) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.output; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ")\n            </span>\n        </div>\n        ";
  return buffer;
  }

  buffer += "<h3 class=\"center\">Resources</h3>\n<div id=\"resource-status\" class=\"center\" >\n    ";
  stack1 = helpers['with'].call(depth0, depth0.resources, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <br>\n    <br>\n    <div class=\"center\" tilte=\"Budget\">\n        <strong class=\"resource\"><i class=\"icon icon-globe\"></i>$</strong>\n        <span class=\"label label-inverse\">\n            "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.state),stack1 == null || stack1 === false ? stack1 : stack1.resources)),stack1 == null || stack1 === false ? stack1 : stack1.money)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "M\n        </span>\n    </div>\n\n</div>";
  return buffer;
  });
templates['header.hb'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n\n        <div class=\"span2 center\" title=\"Energy\">\n            <i class=\"icon icon-bolt\"></i>\n            <span class=\"label label-inverse\">\n                "
    + escapeExpression(((stack1 = ((stack1 = depth0.energy),stack1 == null || stack1 === false ? stack1 : stack1.output)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = ((stack1 = depth0.energy),stack1 == null || stack1 === false ? stack1 : stack1.input)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " mW\n            </span>\n        </div>\n\n        ";
  stack2 = helpers['with'].call(depth0, depth0.bricks, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n        ";
  stack2 = helpers['with'].call(depth0, depth0.aluminum, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n        ";
  stack2 = helpers['with'].call(depth0, depth0.silicon, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n        ";
  stack2 = helpers['with'].call(depth0, depth0.he3, {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"span2 center\" title=\"Bricks\">\n            <i class=\"resource icon icon-hdd\"></i>\n            <span class=\"label label-inverse\">\n             ";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " kg  (+";
  if (stack1 = helpers.input) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.input; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/-";
  if (stack1 = helpers.output) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.output; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ")\n            </span>\n        </div>\n        ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"span2 center\" title=\"Aluminum\">\n            <strong class=\"resource\">Al</strong>\n            <span class=\"label label-inverse\">\n                ";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " kg\n                (+";
  if (stack1 = helpers.input) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.input; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/-";
  if (stack1 = helpers.output) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.output; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ")\n            </span>\n        </div>\n        ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"span2 center\" title=\"Silicone\">\n            <strong class=\"resource\">Si</strong>\n            <span class=\"label label-inverse\">\n            ";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " kg\n            (+";
  if (stack1 = helpers.input) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.input; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/-";
  if (stack1 = helpers.output) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.output; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ")\n            </span>\n        </div>\n        ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"span2 center\" title=\"Helium-3\">\n            <strong class=\"resource\"><sup>3</sup>He</strong>\n            <span class=\"label label-inverse\">\n                ";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " kg\n            (+";
  if (stack1 = helpers.input) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.input; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/-";
  if (stack1 = helpers.output) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.output; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ")\n            </span>\n        </div>\n        ";
  return buffer;
  }

  buffer += "<div class=\"row\">\n    <div class=\"span2 pull-left\">\n        <strong>Turn: </strong>\n        <span class=\"badge badge-info\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.state),stack1 == null || stack1 === false ? stack1 : stack1.turn)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n    </div>\n\n    <div class=\"span2 pull-right\">\n    <a href=\"#\" class=\"btn next-btn pull-right\"> Next <i class=\"icon icon-large icon-arrow-right\"></i></a></div>\n\n</div>\n<div id=\"resource-status\" class=\"row\" >\n    ";
  stack2 = helpers['with'].call(depth0, depth0.resources, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n    <div class=\"span2 center\" tilte=\"Budget\">\n        <strong class=\"resource\"><i class=\"icon icon-globe\"></i>$</strong>\n        <span class=\"label label-inverse\">\n            "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.state),stack1 == null || stack1 === false ? stack1 : stack1.resources)),stack1 == null || stack1 === false ? stack1 : stack1.money)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "M\n        </span>\n    </div>\n\n</div>";
  return buffer;
  });
templates['main.hb'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"entry\">\n  <h1>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n  <div class=\"body\">\n    ";
  if (stack1 = helpers.body) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.body; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  </div>\n</div>\n";
  return buffer;
  });
templates['moon.hb'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\n    <div class=\"area-column\">\n      "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\n    </div>\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <div class=\"row\">\n    <div class=\"area-row\">\n      <span class=\"row-number\">\n        ";
  if (stack1 = helpers.rowNumber) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rowNumber; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n      </span>\n    </div>\n    ";
  stack1 = helpers.each.call(depth0, depth0.cells, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n      <div class=\"area center\" data-i=\"";
  if (stack1 = helpers['i']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['i']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-j=\"";
  if (stack1 = helpers['j']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['j']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.area),stack1 == null || stack1 === false ? stack1 : stack1.thing), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n      </div>\n    ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <i class=\"icon icon-4x "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.area),stack1 == null || stack1 === false ? stack1 : stack1.thing)),stack1 == null || stack1 === false ? stack1 : stack1.image_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></i>\n        ";
  return buffer;
  }

  buffer += "<div class=\"row\">\n  <div class=\"area-corner\"></div>\n  ";
  stack1 = helpers.each.call(depth0, depth0.colNumber, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  stack1 = helpers.each.call(depth0, depth0.rows, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });
})();