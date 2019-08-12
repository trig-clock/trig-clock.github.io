/* start module: pyjamas.ui.UIObject */
$pyjs['loaded_modules']['pyjamas.ui.UIObject'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.UIObject']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.UIObject'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.UIObject'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.UIObject>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.UIObject';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['pyjamas.ui']['UIObject'] = $pyjs['loaded_modules']['pyjamas.ui.UIObject'];
	try {
		$m.__track_lines__[1] = 'pyjamas.ui.UIObject.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
		$m.__track_lines__[15] = 'pyjamas.ui.UIObject.py, line 15:\n    from pyjamas import DOM';
		$m.__track_lines__[16] = 'pyjamas.ui.UIObject.py, line 16:\n    from pyjamas import Factory';
		$m.__track_lines__[17] = 'pyjamas.ui.UIObject.py, line 17:\n    from pyjamas import Window';
		$m.__track_lines__[18] = 'pyjamas.ui.UIObject.py, line 18:\n    from pyjamas.ui import Applier';
		$m.__track_lines__[20] = 'pyjamas.ui.UIObject.py, line 20:\n    def findStyleName(element, style):';
		$m.__track_lines__[22] = 'pyjamas.ui.UIObject.py, line 22:\n    oldStyle = DOM.getAttribute(element, "className")';
		$m.__track_lines__[23] = 'pyjamas.ui.UIObject.py, line 23:\n    if oldStyle is None:';
		$m.__track_lines__[24] = 'pyjamas.ui.UIObject.py, line 24:\n    return -1';
		$m.__track_lines__[25] = 'pyjamas.ui.UIObject.py, line 25:\n    idx = oldStyle.find(style)';
		$m.__track_lines__[28] = 'pyjamas.ui.UIObject.py, line 28:\n    lastPos = len(oldStyle)';
		$m.__track_lines__[29] = 'pyjamas.ui.UIObject.py, line 29:\n    while idx != -1:';
		$m.__track_lines__[30] = 'pyjamas.ui.UIObject.py, line 30:\n    if idx == 0 or (oldStyle[idx - 1] == " "):';
		$m.__track_lines__[31] = 'pyjamas.ui.UIObject.py, line 31:\n    last = idx + len(style)';
		$m.__track_lines__[32] = 'pyjamas.ui.UIObject.py, line 32:\n    if (last == lastPos) or ((last < lastPos) and \\';
		$m.__track_lines__[34] = 'pyjamas.ui.UIObject.py, line 34:\n    break';
		$m.__track_lines__[35] = 'pyjamas.ui.UIObject.py, line 35:\n    idx = oldStyle.find(style, idx + 1)';
		$m.__track_lines__[37] = 'pyjamas.ui.UIObject.py, line 37:\n    return idx';
		$m.__track_lines__[39] = 'pyjamas.ui.UIObject.py, line 39:\n    def setStyleName(element, style, add):';
		$m.__track_lines__[41] = 'pyjamas.ui.UIObject.py, line 41:\n    oldStyle = DOM.getAttribute(element, "className")';
		$m.__track_lines__[42] = 'pyjamas.ui.UIObject.py, line 42:\n    if oldStyle is None:';
		$m.__track_lines__[43] = 'pyjamas.ui.UIObject.py, line 43:\n    oldStyle = ""';
		$m.__track_lines__[45] = 'pyjamas.ui.UIObject.py, line 45:\n    idx = findStyleName(element, style)';
		$m.__track_lines__[47] = 'pyjamas.ui.UIObject.py, line 47:\n    if add:';
		$m.__track_lines__[48] = 'pyjamas.ui.UIObject.py, line 48:\n    if idx == -1:';
		$m.__track_lines__[49] = 'pyjamas.ui.UIObject.py, line 49:\n    DOM.setAttribute(element, "className", oldStyle + " " + style)';
		$m.__track_lines__[50] = 'pyjamas.ui.UIObject.py, line 50:\n    return';
		$m.__track_lines__[52] = 'pyjamas.ui.UIObject.py, line 52:\n    if idx == -1:';
		$m.__track_lines__[53] = 'pyjamas.ui.UIObject.py, line 53:\n    return';
		$m.__track_lines__[55] = 'pyjamas.ui.UIObject.py, line 55:\n    if idx == 0:';
		$m.__track_lines__[56] = "pyjamas.ui.UIObject.py, line 56:\n    begin = ''";
		$m.__track_lines__[58] = 'pyjamas.ui.UIObject.py, line 58:\n    begin = oldStyle[:idx-1]';
		$m.__track_lines__[60] = 'pyjamas.ui.UIObject.py, line 60:\n    end = oldStyle[idx + len(style):]';
		$m.__track_lines__[61] = 'pyjamas.ui.UIObject.py, line 61:\n    DOM.setAttribute(element, "className", begin + end)';
		$m.__track_lines__[63] = 'pyjamas.ui.UIObject.py, line 63:\n    class UIObject(Applier):';
		$m.__track_lines__[65] = 'pyjamas.ui.UIObject.py, line 65:\n    _props = [ ("visible", "Visibility", "Visible", None),';
		$m.__track_lines__[76] = 'pyjamas.ui.UIObject.py, line 75:\n    @classmethod ... def _getProps(self):';
		$m.__track_lines__[77] = 'pyjamas.ui.UIObject.py, line 77:\n    return Applier._getProps() + self._props';
		$m.__track_lines__[79] = 'pyjamas.ui.UIObject.py, line 79:\n    def __init__(self, **kwargs):';
		$m.__track_lines__[84] = 'pyjamas.ui.UIObject.py, line 84:\n    Applier.__init__(self, **kwargs)';
		$m.__track_lines__[86] = 'pyjamas.ui.UIObject.py, line 86:\n    def getAbsoluteLeft(self):';
		$m.__track_lines__[87] = 'pyjamas.ui.UIObject.py, line 87:\n    return DOM.getAbsoluteLeft(self.getElement())';
		$m.__track_lines__[89] = 'pyjamas.ui.UIObject.py, line 89:\n    def getAbsoluteTop(self):';
		$m.__track_lines__[90] = 'pyjamas.ui.UIObject.py, line 90:\n    return DOM.getAbsoluteTop(self.getElement())';
		$m.__track_lines__[92] = 'pyjamas.ui.UIObject.py, line 92:\n    def getClientHeight(self):';
		$m.__track_lines__[93] = 'pyjamas.ui.UIObject.py, line 93:\n    return DOM.getIntAttribute(self.getElement(), "clientHeight")';
		$m.__track_lines__[95] = 'pyjamas.ui.UIObject.py, line 95:\n    def getClientWidth(self):';
		$m.__track_lines__[96] = 'pyjamas.ui.UIObject.py, line 96:\n    return DOM.getIntAttribute(self.getElement(), "clientWidth")';
		$m.__track_lines__[98] = 'pyjamas.ui.UIObject.py, line 98:\n    def getElement(self):';
		$m.__track_lines__[100] = 'pyjamas.ui.UIObject.py, line 100:\n    return self.element';
		$m.__track_lines__[102] = 'pyjamas.ui.UIObject.py, line 102:\n    def getOffsetHeight(self):';
		$m.__track_lines__[103] = 'pyjamas.ui.UIObject.py, line 103:\n    return DOM.getIntAttribute(self.element, "offsetHeight")';
		$m.__track_lines__[105] = 'pyjamas.ui.UIObject.py, line 105:\n    def getOffsetWidth(self):';
		$m.__track_lines__[106] = 'pyjamas.ui.UIObject.py, line 106:\n    return DOM.getIntAttribute(self.element, "offsetWidth")';
		$m.__track_lines__[108] = 'pyjamas.ui.UIObject.py, line 108:\n    def getStyleName(self):';
		$m.__track_lines__[109] = 'pyjamas.ui.UIObject.py, line 109:\n    return DOM.getAttribute(self.element, "className")';
		$m.__track_lines__[111] = 'pyjamas.ui.UIObject.py, line 111:\n    def getStylePrimaryName(self):';
		$m.__track_lines__[113] = 'pyjamas.ui.UIObject.py, line 113:\n    fullClassName = self.getStyleName()';
		$m.__track_lines__[114] = 'pyjamas.ui.UIObject.py, line 114:\n    if fullClassName: return fullClassName.split()[0]';
		$m.__track_lines__[116] = 'pyjamas.ui.UIObject.py, line 116:\n    def getStyleAttribute(self, attribute):';
		$m.__track_lines__[121] = 'pyjamas.ui.UIObject.py, line 121:\n    if isinstance(attribute, basestring):';
		$m.__track_lines__[122] = 'pyjamas.ui.UIObject.py, line 122:\n    return DOM.getStyleAttribute(self.getElement(), attribute)';
		$m.__track_lines__[125] = 'pyjamas.ui.UIObject.py, line 125:\n    el = self.getElement()';
		$m.__track_lines__[126] = 'pyjamas.ui.UIObject.py, line 126:\n    result = {}';
		$m.__track_lines__[127] = 'pyjamas.ui.UIObject.py, line 127:\n    for attr in attribute:';
		$m.__track_lines__[128] = 'pyjamas.ui.UIObject.py, line 128:\n    result[attr] = DOM.getStyleAttribute(el,attr)';
		$m.__track_lines__[129] = 'pyjamas.ui.UIObject.py, line 129:\n    return result';
		$m.__track_lines__[131] = 'pyjamas.ui.UIObject.py, line 131:\n    def getTitle(self):';
		$m.__track_lines__[132] = 'pyjamas.ui.UIObject.py, line 132:\n    return DOM.getAttribute(self.element, "title")';
		$m.__track_lines__[134] = 'pyjamas.ui.UIObject.py, line 134:\n    def setElement(self, element):';
		$m.__track_lines__[136] = 'pyjamas.ui.UIObject.py, line 136:\n    self.element = element';
		$m.__track_lines__[138] = 'pyjamas.ui.UIObject.py, line 138:\n    def setHeight(self, height):';
		$m.__track_lines__[142] = 'pyjamas.ui.UIObject.py, line 142:\n    if height is None:';
		$m.__track_lines__[143] = 'pyjamas.ui.UIObject.py, line 143:\n    height = ""';
		$m.__track_lines__[144] = 'pyjamas.ui.UIObject.py, line 144:\n    DOM.setStyleAttribute(self.element, "height", str(height))';
		$m.__track_lines__[146] = 'pyjamas.ui.UIObject.py, line 146:\n    def getHeight(self):';
		$m.__track_lines__[147] = 'pyjamas.ui.UIObject.py, line 147:\n    return DOM.getStyleAttribute(self.element, "height")';
		$m.__track_lines__[149] = 'pyjamas.ui.UIObject.py, line 149:\n    def setPixelSize(self, width, height):';
		$m.__track_lines__[153] = 'pyjamas.ui.UIObject.py, line 153:\n    if width >= 0:';
		$m.__track_lines__[154] = 'pyjamas.ui.UIObject.py, line 154:\n    self.setWidth("%dpx" % width)';
		$m.__track_lines__[155] = 'pyjamas.ui.UIObject.py, line 155:\n    if height >= 0:';
		$m.__track_lines__[156] = 'pyjamas.ui.UIObject.py, line 156:\n    self.setHeight("%dpx" % height)';
		$m.__track_lines__[158] = 'pyjamas.ui.UIObject.py, line 158:\n    def setSize(self, width, height):';
		$m.__track_lines__[163] = 'pyjamas.ui.UIObject.py, line 163:\n    self.setWidth(width)';
		$m.__track_lines__[164] = 'pyjamas.ui.UIObject.py, line 164:\n    self.setHeight(height)';
		$m.__track_lines__[166] = 'pyjamas.ui.UIObject.py, line 166:\n    def addStyleName(self, style):';
		$m.__track_lines__[171] = 'pyjamas.ui.UIObject.py, line 171:\n    self.setStyleName(self.element, style, True)';
		$m.__track_lines__[173] = 'pyjamas.ui.UIObject.py, line 173:\n    def addStyleDependentName(self, styleSuffix):';
		$m.__track_lines__[179] = 'pyjamas.ui.UIObject.py, line 179:\n    self.addStyleName(self.getStylePrimaryName()+"-"+styleSuffix)';
		$m.__track_lines__[181] = 'pyjamas.ui.UIObject.py, line 181:\n    def removeStyleName(self, style):';
		$m.__track_lines__[184] = 'pyjamas.ui.UIObject.py, line 184:\n    self.setStyleName(self.element, style, False)';
		$m.__track_lines__[186] = 'pyjamas.ui.UIObject.py, line 186:\n    def removeStyleDependentName(self, styleSuffix):';
		$m.__track_lines__[189] = 'pyjamas.ui.UIObject.py, line 189:\n    self.removeStyleName(self.getStylePrimaryName()+"-"+styleSuffix)';
		$m.__track_lines__[192] = 'pyjamas.ui.UIObject.py, line 192:\n    def setStyleName(self, element, style=None, add=True):';
		$m.__track_lines__[199] = 'pyjamas.ui.UIObject.py, line 199:\n    if style is not None:';
		$m.__track_lines__[200] = 'pyjamas.ui.UIObject.py, line 200:\n    setStyleName(element, style, add)';
		$m.__track_lines__[201] = 'pyjamas.ui.UIObject.py, line 201:\n    return';
		$m.__track_lines__[202] = 'pyjamas.ui.UIObject.py, line 202:\n    style = element';
		$m.__track_lines__[203] = 'pyjamas.ui.UIObject.py, line 203:\n    DOM.setAttribute(self.element, "className", style)';
		$m.__track_lines__[205] = 'pyjamas.ui.UIObject.py, line 205:\n    def setStyleAttribute(self, attribute, value=None):';
		$m.__track_lines__[210] = 'pyjamas.ui.UIObject.py, line 210:\n    if value is not None:   # assume single attr form';
		$m.__track_lines__[211] = 'pyjamas.ui.UIObject.py, line 211:\n    DOM.setStyleAttribute(self.getElement(), attribute, value)';
		$m.__track_lines__[212] = 'pyjamas.ui.UIObject.py, line 212:\n    return';
		$m.__track_lines__[214] = 'pyjamas.ui.UIObject.py, line 214:\n    el = self.getElement()';
		$m.__track_lines__[215] = 'pyjamas.ui.UIObject.py, line 215:\n    for attr, val in attribute.items():';
		$m.__track_lines__[216] = 'pyjamas.ui.UIObject.py, line 216:\n    DOM.setStyleAttribute(el, attr, val)';
		$m.__track_lines__[218] = 'pyjamas.ui.UIObject.py, line 218:\n    def setTitle(self, title):';
		$m.__track_lines__[219] = 'pyjamas.ui.UIObject.py, line 219:\n    DOM.setAttribute(self.element, "title", title)';
		$m.__track_lines__[221] = 'pyjamas.ui.UIObject.py, line 221:\n    def setWidth(self, width):';
		$m.__track_lines__[225] = 'pyjamas.ui.UIObject.py, line 225:\n    if width is None:';
		$m.__track_lines__[226] = 'pyjamas.ui.UIObject.py, line 226:\n    width = ""';
		$m.__track_lines__[227] = 'pyjamas.ui.UIObject.py, line 227:\n    DOM.setStyleAttribute(self.element, "width", str(width))';
		$m.__track_lines__[229] = 'pyjamas.ui.UIObject.py, line 229:\n    def getWidth(self):';
		$m.__track_lines__[230] = 'pyjamas.ui.UIObject.py, line 230:\n    return DOM.getStyleAttribute(self.element, "width")';
		$m.__track_lines__[232] = 'pyjamas.ui.UIObject.py, line 232:\n    def sinkEvents(self, eventBitsToAdd):';
		$m.__track_lines__[239] = 'pyjamas.ui.UIObject.py, line 239:\n    if self.element:';
		$m.__track_lines__[240] = 'pyjamas.ui.UIObject.py, line 240:\n    DOM.sinkEvents(self.getElement(),';
		$m.__track_lines__[243] = 'pyjamas.ui.UIObject.py, line 243:\n    def setzIndex(self, index):';
		$m.__track_lines__[244] = 'pyjamas.ui.UIObject.py, line 244:\n    DOM.setIntStyleAttribute(self.element, "zIndex", index)';
		$m.__track_lines__[246] = 'pyjamas.ui.UIObject.py, line 246:\n    def isVisible(self, element=None):';
		$m.__track_lines__[249] = 'pyjamas.ui.UIObject.py, line 249:\n    return self.getVisible(element)';
		$m.__track_lines__[251] = 'pyjamas.ui.UIObject.py, line 251:\n    def getVisible(self, element=None):';
		$m.__track_lines__[255] = 'pyjamas.ui.UIObject.py, line 255:\n    if not element:';
		$m.__track_lines__[256] = 'pyjamas.ui.UIObject.py, line 256:\n    element = self.element';
		$m.__track_lines__[257] = 'pyjamas.ui.UIObject.py, line 257:\n    try: # yuk!';
		$m.__track_lines__[258] = 'pyjamas.ui.UIObject.py, line 258:\n    return element.style.display != "none"';
		$m.__track_lines__[260] = 'pyjamas.ui.UIObject.py, line 260:\n    return True';
		$m.__track_lines__[263] = 'pyjamas.ui.UIObject.py, line 263:\n    def setVisible(self, element, visible=None):';
		$m.__track_lines__[269] = 'pyjamas.ui.UIObject.py, line 269:\n    if visible is None:';
		$m.__track_lines__[270] = 'pyjamas.ui.UIObject.py, line 270:\n    visible = element';
		$m.__track_lines__[271] = 'pyjamas.ui.UIObject.py, line 271:\n    element = self.element';
		$m.__track_lines__[273] = 'pyjamas.ui.UIObject.py, line 273:\n    if visible:';
		$m.__track_lines__[274] = 'pyjamas.ui.UIObject.py, line 274:\n    DOM.setStyleAttribute(element, \'display\', "")';
		$m.__track_lines__[276] = 'pyjamas.ui.UIObject.py, line 276:\n    DOM.setStyleAttribute(element, \'display\', "none")';
		$m.__track_lines__[278] = 'pyjamas.ui.UIObject.py, line 278:\n    def unsinkEvents(self, eventBitsToRemove):';
		$m.__track_lines__[281] = 'pyjamas.ui.UIObject.py, line 281:\n    DOM.sinkEvents(self.getElement(),';
		$m.__track_lines__[284] = "pyjamas.ui.UIObject.py, line 284:\n    Factory.registerClass('pyjamas.ui.UIObject', 'UIObject', UIObject)";

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		$pyjs['track']['module']='pyjamas.ui.UIObject';
		$pyjs['track']['lineno']=1;
		$pyjs['track']['lineno']=15;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=16;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=17;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=18;
		$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
		$m['Applier'] = $p['___import___']('pyjamas.ui.Applier', 'pyjamas.ui', null, false);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['lineno']=20;
		$m['findStyleName'] = function(element, style) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $or4,$or1,last,idx,$or2,lastPos,oldStyle,$add2,$add3,$add1,$add4,$and1,$or3,$sub2,$sub1,$and2;
			$pyjs['track']={'module':'pyjamas.ui.UIObject','lineno':20};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjamas.ui.UIObject';
			$pyjs['track']['lineno']=20;
			$pyjs['track']['lineno']=22;
			oldStyle = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['DOM']['getAttribute'](element, 'className');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
			$pyjs['track']['lineno']=23;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_is'](oldStyle, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) {
				$pyjs['track']['lineno']=24;
				$pyjs['track']['lineno']=24;
				var $pyjs__ret = (typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=25;
			idx = (function(){try{try{$pyjs['in_try_except'] += 1;
			return oldStyle['find'](style);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=28;
			lastPos = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](oldStyle);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=29;
			while ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['op_eq'](idx, (typeof ($usub2=$constant_int_1)=='number'?
				-$usub2:
				$p['op_usub']($usub2))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()) {
				$pyjs['track']['lineno']=30;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($or1=$p['op_eq'](idx, $constant_int_0))?$or1:$p['op_eq'](oldStyle['__getitem__']($p['__op_sub']($sub1=idx,$sub2=$constant_int_1)), ' ')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
					$pyjs['track']['lineno']=31;
					last = $p['__op_add']($add1=idx,$add2=(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len'](style);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})());
					$pyjs['track']['lineno']=32;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($or3=$p['op_eq'](last, lastPos))?$or3:($p['bool']($and1=($p['cmp'](last, lastPos) == -1))?$p['op_eq'](oldStyle['__getitem__'](last), ' '):$and1)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()) {
						$pyjs['track']['lineno']=34;
						break;
					}
				}
				$pyjs['track']['lineno']=35;
				idx = (function(){try{try{$pyjs['in_try_except'] += 1;
				return oldStyle['find'](style, $p['__op_add']($add3=idx,$add4=$constant_int_1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			}
			$pyjs['track']['lineno']=37;
			$pyjs['track']['lineno']=37;
			var $pyjs__ret = idx;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		$m['findStyleName']['__name__'] = 'findStyleName';

		$m['findStyleName']['__bind_type__'] = 0;
		$m['findStyleName']['__args__'] = [null,null,['element'],['style']];
		$pyjs['track']['lineno']=39;
		$m['setStyleName'] = function(element, style, add) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
			var end,idx,oldStyle,begin,$add6,$add7,$add12,$add5,$sub3,$add10,$add8,$add9,$add11,$sub4;
			$pyjs['track']={'module':'pyjamas.ui.UIObject','lineno':39};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='pyjamas.ui.UIObject';
			$pyjs['track']['lineno']=39;
			$pyjs['track']['lineno']=41;
			oldStyle = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['DOM']['getAttribute'](element, 'className');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs['track']['lineno']=42;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_is'](oldStyle, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()) {
				$pyjs['track']['lineno']=43;
				oldStyle = '';
			}
			$pyjs['track']['lineno']=45;
			idx = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['findStyleName'](element, style);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			$pyjs['track']['lineno']=47;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](add);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()) {
				$pyjs['track']['lineno']=48;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](idx, (typeof ($usub3=$constant_int_1)=='number'?
					-$usub3:
					$p['op_usub']($usub3))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()) {
					$pyjs['track']['lineno']=49;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['DOM']['setAttribute'](element, 'className', $p['__op_add']($add7=$p['__op_add']($add5=oldStyle,$add6=' '),$add8=style));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
				}
				$pyjs['track']['lineno']=50;
				$pyjs['track']['lineno']=50;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=52;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](idx, (typeof ($usub4=$constant_int_1)=='number'?
				-$usub4:
				$p['op_usub']($usub4))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()) {
				$pyjs['track']['lineno']=53;
				$pyjs['track']['lineno']=53;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=55;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](idx, $constant_int_0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()) {
				$pyjs['track']['lineno']=56;
				begin = '';
			}
			else {
				$pyjs['track']['lineno']=58;
				begin = $p['__getslice'](oldStyle, 0, $p['__op_sub']($sub3=idx,$sub4=$constant_int_1));
			}
			$pyjs['track']['lineno']=60;
			end = $p['__getslice'](oldStyle, $p['__op_add']($add9=idx,$add10=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](style);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()), null);
			$pyjs['track']['lineno']=61;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['DOM']['setAttribute'](element, 'className', $p['__op_add']($add11=begin,$add12=end));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		};
		$m['setStyleName']['__name__'] = 'setStyleName';

		$m['setStyleName']['__bind_type__'] = 0;
		$m['setStyleName']['__args__'] = [null,null,['element'],['style'],['add']];
		$pyjs['track']['lineno']=63;
		$m['UIObject'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pyjamas.ui.UIObject';
			$cls_definition['__md5__'] = '9eb02efacc625532927595eecf725546';
			$pyjs['track']['lineno']=65;
			$cls_definition['_props'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple'](['visible', 'Visibility', 'Visible', null]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple'](['element', 'Element', 'Element', null]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple'](['stylename', 'Style name', 'StyleName', null]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple'](['width', 'Width', 'Width', null]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple'](['height', 'Height', 'Height', null]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple'](['size', 'Size', 'Size', null]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple'](['title', 'Title', 'Title', null]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple'](['zindex', 'Z Index', 'zIndex', null]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
			$pyjs['track']['lineno']=76;
			$method = $pyjs__bind_method2('_getProps', function() {
    if ($pyjs['options']['arg_is_instance'] && this['__is_instance__'] !== true && this['__is_instance__'] !== false) $pyjs__exception_func_class_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__']);
    if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 0, arguments['length']);
    var self = this['prototype'];
				var $add14,$add13;
				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':76};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=76;
				$pyjs['track']['lineno']=77;
				$pyjs['track']['lineno']=77;
				var $pyjs__ret = $p['__op_add']($add13=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Applier']['_getProps']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})(),$add14=$p['getattr'](self, '_props'));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 2, [null,null,['self']]);
			$cls_definition['_getProps'] = $method;
			$pyjs['track']['lineno']=79;
			$method = $pyjs__bind_method2('__init__', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[1];
						}
					} else {
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':79};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=79;
				$pyjs['track']['lineno']=84;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['Applier'], '__init__', null, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,['kwargs'],['self']]);
			$cls_definition['__init__'] = $method;
			$pyjs['track']['lineno']=86;
			$method = $pyjs__bind_method2('getAbsoluteLeft', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':86};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=86;
				$pyjs['track']['lineno']=87;
				$pyjs['track']['lineno']=87;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['getAbsoluteLeft']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getAbsoluteLeft'] = $method;
			$pyjs['track']['lineno']=89;
			$method = $pyjs__bind_method2('getAbsoluteTop', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':89};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=89;
				$pyjs['track']['lineno']=90;
				$pyjs['track']['lineno']=90;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['getAbsoluteTop']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getAbsoluteTop'] = $method;
			$pyjs['track']['lineno']=92;
			$method = $pyjs__bind_method2('getClientHeight', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':92};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=92;
				$pyjs['track']['lineno']=93;
				$pyjs['track']['lineno']=93;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['getIntAttribute']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})(), 'clientHeight');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getClientHeight'] = $method;
			$pyjs['track']['lineno']=95;
			$method = $pyjs__bind_method2('getClientWidth', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':95};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=95;
				$pyjs['track']['lineno']=96;
				$pyjs['track']['lineno']=96;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['getIntAttribute']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})(), 'clientWidth');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getClientWidth'] = $method;
			$pyjs['track']['lineno']=98;
			$method = $pyjs__bind_method2('getElement', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':98};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=98;
				$pyjs['track']['lineno']=100;
				$pyjs['track']['lineno']=100;
				var $pyjs__ret = $p['getattr'](self, 'element');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getElement'] = $method;
			$pyjs['track']['lineno']=102;
			$method = $pyjs__bind_method2('getOffsetHeight', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':102};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=102;
				$pyjs['track']['lineno']=103;
				$pyjs['track']['lineno']=103;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['getIntAttribute']($p['getattr'](self, 'element'), 'offsetHeight');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getOffsetHeight'] = $method;
			$pyjs['track']['lineno']=105;
			$method = $pyjs__bind_method2('getOffsetWidth', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':105};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=105;
				$pyjs['track']['lineno']=106;
				$pyjs['track']['lineno']=106;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['getIntAttribute']($p['getattr'](self, 'element'), 'offsetWidth');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getOffsetWidth'] = $method;
			$pyjs['track']['lineno']=108;
			$method = $pyjs__bind_method2('getStyleName', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':108};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=108;
				$pyjs['track']['lineno']=109;
				$pyjs['track']['lineno']=109;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['getAttribute']($p['getattr'](self, 'element'), 'className');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getStyleName'] = $method;
			$pyjs['track']['lineno']=111;
			$method = $pyjs__bind_method2('getStylePrimaryName', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var fullClassName;
				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':111};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=111;
				$pyjs['track']['lineno']=113;
				fullClassName = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getStyleName']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
				$pyjs['track']['lineno']=114;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](fullClassName);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})()) {
					$pyjs['track']['lineno']=114;
					$pyjs['track']['lineno']=114;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return fullClassName['$$split']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})()['__getitem__']($constant_int_0);
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getStylePrimaryName'] = $method;
			$pyjs['track']['lineno']=116;
			$method = $pyjs__bind_method2('getStyleAttribute', function(attribute) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					attribute = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var el,$iter1_nextval,$iter1_type,$iter1_idx,$pyjs__trackstack_size_1,$iter1_iter,result,attr,$iter1_array;
				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':116};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=116;
				$pyjs['track']['lineno']=121;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](attribute, $p['basestring']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})()) {
					$pyjs['track']['lineno']=122;
					$pyjs['track']['lineno']=122;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['DOM']['getStyleAttribute']((function(){try{try{$pyjs['in_try_except'] += 1;
					return self['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})(), attribute);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=125;
				el = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
				$pyjs['track']['lineno']=126;
				result = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
				$pyjs['track']['lineno']=127;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return attribute;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					attr = $iter1_nextval['$nextval'];
					$pyjs['track']['lineno']=128;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return result['__setitem__'](attr, (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['DOM']['getStyleAttribute'](el, attr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=129;
				$pyjs['track']['lineno']=129;
				var $pyjs__ret = result;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['attribute']]);
			$cls_definition['getStyleAttribute'] = $method;
			$pyjs['track']['lineno']=131;
			$method = $pyjs__bind_method2('getTitle', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':131};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=131;
				$pyjs['track']['lineno']=132;
				$pyjs['track']['lineno']=132;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['getAttribute']($p['getattr'](self, 'element'), 'title');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getTitle'] = $method;
			$pyjs['track']['lineno']=134;
			$method = $pyjs__bind_method2('setElement', function(element) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					element = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':134};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=134;
				$pyjs['track']['lineno']=136;
				self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('element', element) : $p['setattr'](self, 'element', element); 
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['element']]);
			$cls_definition['setElement'] = $method;
			$pyjs['track']['lineno']=138;
			$method = $pyjs__bind_method2('setHeight', function(height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					height = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':138};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=138;
				$pyjs['track']['lineno']=142;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_is'](height, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})()) {
					$pyjs['track']['lineno']=143;
					height = '';
				}
				$pyjs['track']['lineno']=144;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['setStyleAttribute']($p['getattr'](self, 'element'), 'height', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str'](height);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['height']]);
			$cls_definition['setHeight'] = $method;
			$pyjs['track']['lineno']=146;
			$method = $pyjs__bind_method2('getHeight', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':146};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=146;
				$pyjs['track']['lineno']=147;
				$pyjs['track']['lineno']=147;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['getStyleAttribute']($p['getattr'](self, 'element'), 'height');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getHeight'] = $method;
			$pyjs['track']['lineno']=149;
			$method = $pyjs__bind_method2('setPixelSize', function(width, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					height = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':149};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=149;
				$pyjs['track']['lineno']=153;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](((($p['cmp'](width, $constant_int_0))|1) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})()) {
					$pyjs['track']['lineno']=154;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['setWidth']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('%dpx', width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
				}
				$pyjs['track']['lineno']=155;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](((($p['cmp'](height, $constant_int_0))|1) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})()) {
					$pyjs['track']['lineno']=156;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['setHeight']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('%dpx', height);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width'],['height']]);
			$cls_definition['setPixelSize'] = $method;
			$pyjs['track']['lineno']=158;
			$method = $pyjs__bind_method2('setSize', function(width, height) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					height = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':158};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=158;
				$pyjs['track']['lineno']=163;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setWidth'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
				$pyjs['track']['lineno']=164;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setHeight'](height);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width'],['height']]);
			$cls_definition['setSize'] = $method;
			$pyjs['track']['lineno']=166;
			$method = $pyjs__bind_method2('addStyleName', function(style) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					style = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':166};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=166;
				$pyjs['track']['lineno']=171;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setStyleName']($p['getattr'](self, 'element'), style, true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['style']]);
			$cls_definition['addStyleName'] = $method;
			$pyjs['track']['lineno']=173;
			$method = $pyjs__bind_method2('addStyleDependentName', function(styleSuffix) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					styleSuffix = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add15,$add16,$add17,$add18;
				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':173};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=173;
				$pyjs['track']['lineno']=179;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['addStyleName']($p['__op_add']($add17=$p['__op_add']($add15=(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getStylePrimaryName']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})(),$add16='-'),$add18=styleSuffix));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['styleSuffix']]);
			$cls_definition['addStyleDependentName'] = $method;
			$pyjs['track']['lineno']=181;
			$method = $pyjs__bind_method2('removeStyleName', function(style) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					style = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':181};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=181;
				$pyjs['track']['lineno']=184;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setStyleName']($p['getattr'](self, 'element'), style, false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['style']]);
			$cls_definition['removeStyleName'] = $method;
			$pyjs['track']['lineno']=186;
			$method = $pyjs__bind_method2('removeStyleDependentName', function(styleSuffix) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					styleSuffix = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				var $add21,$add20,$add22,$add19;
				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':186};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=186;
				$pyjs['track']['lineno']=189;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['removeStyleName']($p['__op_add']($add21=$p['__op_add']($add19=(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getStylePrimaryName']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})(),$add20='-'),$add22=styleSuffix));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['styleSuffix']]);
			$cls_definition['removeStyleDependentName'] = $method;
			$pyjs['track']['lineno']=192;
			$method = $pyjs__bind_method2('setStyleName', function(element, style, add) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']+1);
				} else {
					var self = arguments[0];
					element = arguments[1];
					style = arguments[2];
					add = arguments[3];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 4)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 4, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof style == 'undefined') style=arguments['callee']['__args__'][4][1];
				if (typeof add == 'undefined') add=arguments['callee']['__args__'][5][1];

				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':192};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=192;
				$pyjs['track']['lineno']=199;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['op_is'](style, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})()) {
					$pyjs['track']['lineno']=200;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['setStyleName'](element, style, add);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
					$pyjs['track']['lineno']=201;
					$pyjs['track']['lineno']=201;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=202;
				style = element;
				$pyjs['track']['lineno']=203;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['setAttribute']($p['getattr'](self, 'element'), 'className', style);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['element'],['style', null],['add', true]]);
			$cls_definition['setStyleName'] = $method;
			$pyjs['track']['lineno']=205;
			$method = $pyjs__bind_method2('setStyleAttribute', function(attribute, value) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					attribute = arguments[1];
					value = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof value == 'undefined') value=arguments['callee']['__args__'][4][1];
				var el,$iter2_nextval,$iter2_type,attr,$iter2_iter,$iter2_idx,val,$pyjs__trackstack_size_1,$iter2_array;
				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':205};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=205;
				$pyjs['track']['lineno']=210;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['op_is'](value, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})()) {
					$pyjs['track']['lineno']=211;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['DOM']['setStyleAttribute']((function(){try{try{$pyjs['in_try_except'] += 1;
					return self['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})(), attribute, value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})();
					$pyjs['track']['lineno']=212;
					$pyjs['track']['lineno']=212;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=214;
				el = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
				$pyjs['track']['lineno']=215;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return attribute['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
					attr = $tupleassign1[0];
					val = $tupleassign1[1];
					$pyjs['track']['lineno']=216;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['DOM']['setStyleAttribute'](el, attr, val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['attribute'],['value', null]]);
			$cls_definition['setStyleAttribute'] = $method;
			$pyjs['track']['lineno']=218;
			$method = $pyjs__bind_method2('setTitle', function(title) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					title = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':218};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=218;
				$pyjs['track']['lineno']=219;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['setAttribute']($p['getattr'](self, 'element'), 'title', title);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['title']]);
			$cls_definition['setTitle'] = $method;
			$pyjs['track']['lineno']=221;
			$method = $pyjs__bind_method2('setWidth', function(width) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					width = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':221};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=221;
				$pyjs['track']['lineno']=225;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_is'](width, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})()) {
					$pyjs['track']['lineno']=226;
					width = '';
				}
				$pyjs['track']['lineno']=227;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['setStyleAttribute']($p['getattr'](self, 'element'), 'width', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str'](width);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['width']]);
			$cls_definition['setWidth'] = $method;
			$pyjs['track']['lineno']=229;
			$method = $pyjs__bind_method2('getWidth', function() {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']+1);
				} else {
					var self = arguments[0];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':229};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=229;
				$pyjs['track']['lineno']=230;
				$pyjs['track']['lineno']=230;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['getStyleAttribute']($p['getattr'](self, 'element'), 'width');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self']]);
			$cls_definition['getWidth'] = $method;
			$pyjs['track']['lineno']=232;
			$method = $pyjs__bind_method2('sinkEvents', function(eventBitsToAdd) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					eventBitsToAdd = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':232};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=232;
				$pyjs['track']['lineno']=239;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'element'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})()) {
					$pyjs['track']['lineno']=240;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['DOM']['sinkEvents']((function(){try{try{$pyjs['in_try_except'] += 1;
					return self['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})(), $p['op_bitor2'](eventBitsToAdd, (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['DOM']['getEventsSunk']((function(){try{try{$pyjs['in_try_except'] += 1;
					return self['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['eventBitsToAdd']]);
			$cls_definition['sinkEvents'] = $method;
			$pyjs['track']['lineno']=243;
			$method = $pyjs__bind_method2('setzIndex', function(index) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					index = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':243};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=243;
				$pyjs['track']['lineno']=244;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['setIntStyleAttribute']($p['getattr'](self, 'element'), 'zIndex', index);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['index']]);
			$cls_definition['setzIndex'] = $method;
			$pyjs['track']['lineno']=246;
			$method = $pyjs__bind_method2('isVisible', function(element) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					element = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof element == 'undefined') element=arguments['callee']['__args__'][3][1];

				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':246};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=246;
				$pyjs['track']['lineno']=249;
				$pyjs['track']['lineno']=249;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getVisible'](element);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
	, 1, [null,null,['self'],['element', null]]);
			$cls_definition['isVisible'] = $method;
			$pyjs['track']['lineno']=251;
			$method = $pyjs__bind_method2('getVisible', function(element) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 0 || arguments['length'] > 1)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					element = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof element == 'undefined') element=arguments['callee']['__args__'][3][1];
				var $pyjs_try_err;
				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':251};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=251;
				$pyjs['track']['lineno']=255;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool'](element));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})()) {
					$pyjs['track']['lineno']=256;
					element = $p['getattr'](self, 'element');
				}
				$pyjs['track']['lineno']=257;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=258;
						$pyjs['track']['lineno']=258;
						var $pyjs__ret = !$p['op_eq']($p['getattr']($p['getattr'](element, 'style'), 'display'), 'none');
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					} finally { $pyjs['in_try_except'] -= 1; }
				} catch($pyjs_try_err) {
					$pyjs['__last_exception_stack__'] = sys['save_exception_stack']($pyjs__trackstack_size_1 - 1);
					$pyjs['__active_exception_stack__'] = null;
					$pyjs_try_err = $p['_errorMapping']($pyjs_try_err);
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='pyjamas.ui.UIObject';
					if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
						$pyjs['track']['lineno']=260;
						$pyjs['track']['lineno']=260;
						var $pyjs__ret = true;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['element', null]]);
			$cls_definition['getVisible'] = $method;
			$pyjs['track']['lineno']=263;
			$method = $pyjs__bind_method2('setVisible', function(element, visible) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']+1);
				} else {
					var self = arguments[0];
					element = arguments[1];
					visible = arguments[2];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && (arguments['length'] < 2 || arguments['length'] > 3)) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 3, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof visible == 'undefined') visible=arguments['callee']['__args__'][4][1];

				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':263};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=263;
				$pyjs['track']['lineno']=269;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_is'](visible, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})()) {
					$pyjs['track']['lineno']=270;
					visible = element;
					$pyjs['track']['lineno']=271;
					element = $p['getattr'](self, 'element');
				}
				$pyjs['track']['lineno']=273;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](visible);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})()) {
					$pyjs['track']['lineno']=274;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['DOM']['setStyleAttribute'](element, 'display', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=276;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['DOM']['setStyleAttribute'](element, 'display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
				}
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['element'],['visible', null]]);
			$cls_definition['setVisible'] = $method;
			$pyjs['track']['lineno']=278;
			$method = $pyjs__bind_method2('unsinkEvents', function(eventBitsToRemove) {
				if (this['__is_instance__'] === true) {
					var self = this;
					if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']+1);
				} else {
					var self = arguments[0];
					eventBitsToRemove = arguments[1];
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '9eb02efacc625532927595eecf725546') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}

				$pyjs['track']={'module':'pyjamas.ui.UIObject', 'lineno':278};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='pyjamas.ui.UIObject';
				$pyjs['track']['lineno']=278;
				$pyjs['track']['lineno']=281;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['sinkEvents']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})(), $p['op_bitand2']($p['op_invert'](eventBitsToRemove), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['DOM']['getEventsSunk']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getElement']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return null;
			}
	, 1, [null,null,['self'],['eventBitsToRemove']]);
			$cls_definition['unsinkEvents'] = $method;
			$pyjs['track']['lineno']=63;
			var $bases = new Array($m['Applier']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('UIObject', $p['tuple']($bases), $data);
		})();
		$pyjs['track']['lineno']=284;
		(function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['Factory']['registerClass']('pyjamas.ui.UIObject', 'UIObject', $m['UIObject']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjamas.ui.UIObject */


/* end module: pyjamas.ui.UIObject */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.Window', 'pyjamas.ui.Applier', 'pyjamas.ui']
*/
