javascript: (function () {
	if (!window.location.hash.startsWith("#party/index/")) {
		alert('Please go to a GBF Party screen');
		return
	}
	let obj = {
		p: parseInt(window.Game.view.deck_model.attributes.deck.pc.job.master.id, 10),
		ps: [],  // Skills
		c: [], //characters
		cl: [],  // Level
		cs: [],  // Stars
		cp: [],  // Pluses
		cwr: [], // Waifu ring
		s: [], // summons
		sl: [],  // Level
		ss: [],  // Stars
		sp: [],  // Pluses
		w: [], // weapons
		wl: [],  // Skill level
		wsn: [], // Skill names
		wll: [], // Level
		wp: [],  // Pluses
		v: 6
	};

	for (let i = 0; i < 4 - window.Game.view.deck_model.attributes.deck.pc.set_action.length; i++) {
		obj.ps.push(null)
	}
	Object.values(window.Game.view.deck_model.attributes.deck.pc.set_action).forEach(e => {
		obj.ps.push(e.name ? e.name.trim() : null)
	});

	Object.values(window.Game.view.deck_model.attributes.deck.npc).forEach(e => {
		obj.c.push(e.master ? parseInt(e.master.id.slice(0, -3), 10) : null);
		obj.cl.push(e.param ? parseInt(e.param.level, 10) : null);
		obj.cs.push(e.param ? parseInt(e.param.evolution, 10) : null);
		obj.cp.push(e.param ? parseInt(e.param.quality, 10) : null);
		obj.cwr.push(e.param ? e.param.has_npcaugment_constant : null);
	});

	Object.values(window.Game.view.deck_model.attributes.deck.pc.summons).forEach(e => {
		obj.s.push(e.master ? parseInt(e.master.id.slice(0, -3), 10) : null);
		obj.sl.push(e.param ? parseInt(e.param.level, 10) : null);
		obj.ss.push(e.param ? parseInt(e.param.evolution, 10) : null);
		obj.sp.push(e.param ? parseInt(e.param.quality, 10) : null)
	});
	obj.s.push(null);
	obj.sl.push(null);
	obj.ss.push(null);
	obj.sp.push(null);
	Object.values(window.Game.view.deck_model.attributes.deck.pc.sub_summons).forEach(e => {
		obj.s.push(e.master ? parseInt(e.master.id.slice(0, -3), 10) : null);
		obj.sl.push(e.param ? parseInt(e.param.level, 10) : null);
		obj.ss.push(e.param ? parseInt(e.param.evolution, 10) : null);
		obj.sp.push(e.param ? parseInt(e.param.quality, 10) : null)
	});

	Object.values(window.Game.view.deck_model.attributes.deck.pc.weapons).forEach(e => {
		obj.w.push(e.master ? parseInt(e.master.id.slice(0, -2), 10) : null);
		obj.wl.push(e.param ? parseInt(e.param.skill_level, 10) : null);
		obj.wsn.push(e.param ? [
			e.skill1 ? e.skill1.name : null,
			e.skill2 ? e.skill2.name : null,
			e.skill3 ? e.skill3.name : null
		] : null);
		obj.wll.push(e.param ? parseInt(e.param.level, 10) : null);
		obj.wp.push(e.param ? parseInt(e.param.quality, 10) : null)
	});
	copy(JSON.stringify(obj))
	navigator.clipboard.writeText(JSON.stringify(obj))
	//alert(JSON.stringify(obj));
	// window.open('https://www.granblue.party/builder?l=' + encodeURIComponent(JSON.stringify(obj)), '_newtab');
}())


["0","1","2","3","window","self","document","name","location","customElements","history","navigation","locationbar","menubar","personalbar","scrollbars","statusbar","toolbar","status","closed","frames","length","top","opener","parent","frameElement","navigator","origin","external","screen","innerWidth","innerHeight","scrollX","pageXOffset","scrollY","pageYOffset","visualViewport","screenX","screenY","outerWidth","outerHeight","devicePixelRatio","clientInformation","screenLeft","screenTop","styleMedia","onsearch","isSecureContext","trustedTypes","performance","onappinstalled","onbeforeinstallprompt","crypto","indexedDB","sessionStorage","localStorage","onbeforexrselect","onabort","onbeforeinput","onbeforetoggle","onblur","oncancel","oncanplay","oncanplaythrough","onchange","onclick","onclose","oncontextlost","oncontextmenu","oncontextrestored","oncuechange","ondblclick","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","ondurationchange","onemptied","onended","onerror","onfocus","onformdata","oninput","oninvalid","onkeydown","onkeypress","onkeyup","onload","onloadeddata","onloadedmetadata","onloadstart","onmousedown","onmouseenter","onmouseleave","onmousemove","onmouseout","onmouseover","onmouseup","onmousewheel","onpause","onplay","onplaying","onprogress","onratechange","onreset","onresize","onscroll","onsecuritypolicyviolation","onseeked","onseeking","onselect","onslotchange","onstalled","onsubmit","onsuspend","ontimeupdate","ontoggle","onvolumechange","onwaiting","onwebkitanimationend","onwebkitanimationiteration","onwebkitanimationstart","onwebkittransitionend","onwheel","onauxclick","ongotpointercapture","onlostpointercapture","onpointerdown","onpointermove","onpointerrawupdate","onpointerup","onpointercancel","onpointerover","onpointerout","onpointerenter","onpointerleave","onselectstart","onselectionchange","onanimationend","onanimationiteration","onanimationstart","ontransitionrun","ontransitionstart","ontransitionend","ontransitioncancel","onafterprint","onbeforeprint","onbeforeunload","onhashchange","onlanguagechange","onmessage","onmessageerror","onoffline","ononline","onpagehide","onpageshow","onpopstate","onrejectionhandled","onstorage","onunhandledrejection","onunload","crossOriginIsolated","scheduler","alert","atob","blur","btoa","cancelAnimationFrame","cancelIdleCallback","captureEvents","clearInterval","clearTimeout","close","confirm","createImageBitmap","fetch","find","focus","getComputedStyle","getSelection","matchMedia","moveBy","moveTo","open","postMessage","print","prompt","queueMicrotask","releaseEvents","reportError","requestAnimationFrame","requestIdleCallback","resizeBy","resizeTo","scroll","scrollBy","scrollTo","setInterval","setTimeout","stop","structuredClone","webkitCancelAnimationFrame","webkitRequestAnimationFrame","chrome","fence","caches","cookieStore","ondevicemotion","ondeviceorientation","ondeviceorientationabsolute","launchQueue","sharedStorage","documentPictureInPicture","onbeforematch","getScreenDetails","queryLocalFonts","showDirectoryPicker","showOpenFilePicker","showSaveFilePicker","originAgentCluster","credentialless","speechSynthesis","oncontentvisibilityautostatechange","onscrollend","webkitRequestFileSystem","webkitResolveLocalFileSystemURL","clearImmediate","setImmediate","displayInitialize","Game","startDisplayInitialize","requirejs","require","define","reportInterval","previousTime","requirejs_createNode","clientData","loadCreateJS","LoadManager","$","jQuery","_","Backbone","lmlib","Pex","Zlib","UAParser","deviceRatio","createjs","patchWithCJSScale","IScroll","loadingSoundPlayer","readySoundPlayer","images","lib","UriTemplate","mobage","play_down_se","ignoreSkipAttackFrame","auto_flag","stage","walkTheObject"]
["1","2","3","clearImmediate","setImmediate","displayInitialize","Game","startDisplayInitialize","requirejs","require","define","reportInterval","previousTime","requirejs_createNode","clientData","loadCreateJS","LoadManager","$","jQuery","_","Backbone","lmlib","Pex","Zlib","UAParser","deviceRatio","createjs","patchWithCJSScale","IScroll","loadingSoundPlayer","readySoundPlayer","images","lib","UriTemplate","mobage","play_down_se","ignoreSkipAttackFrame","auto_flag","stage","walkTheObject"]