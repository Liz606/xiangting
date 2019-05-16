webpackJsonp([0],[
/* 0 */
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(/*! ../css/base */ 2);
	__webpack_require__(/*! ../css/index */ 6);
	__webpack_require__(/*! ../css/header */ 8);
	__webpack_require__(/*! ../css/home */ 10);
	__webpack_require__(/*! ../css/about */ 12);
	__webpack_require__(/*! ../css/news */ 14);
	__webpack_require__(/*! ../css/lookbook */ 16);
	__webpack_require__(/*! ../css/brand */ 18);
	__webpack_require__(/*! ../css/contact */ 20);
	__webpack_require__(/*! ../css/changePage */ 22);
	__webpack_require__(/*! ../js/base */ 24);
	__webpack_require__(/*! ../js/homeFull */ 25);
	__webpack_require__(/*! ../js/jquery.headroom.min */ 26);
	__webpack_require__(/*! ../js/headroom.min */ 27);
	__webpack_require__(/*! ../js/slider */ 28);
	__webpack_require__(/*! ../js/lookbookSlider */ 29);
	__webpack_require__(/*! ../js/jquery.mousewheel */ 30);
	__webpack_require__(/*! ../js/scorll */ 31);
	__webpack_require__(/*! ../js/productSlider */ 32);
	
	/* ------------------------------------------------------------
	 * 切换导航栏
	 * ------------------------------------------------------------ */
	
	$('#logoMenu').headroom({
	    offset: 500,
	    onTop: function () {
	        $('#header').fadeIn("slow");
	        $('#logoMenu').fadeOut("slow");
	    },
	    onNotTop: function () {
	        $('#header').fadeOut("slow");
	        $('#logoMenu').fadeIn("slow");
	    }
	});
	$('#logoMenu>.menu').click(function () {
	    $('#logoMenu').fadeOut("fast");
	    $('#header').fadeIn("slow");
	});
	$('#header>.nav>.navList>li').click(function () {
	    if ($(this).hasClass('go-home') && $('#home').offset().top <= 500) {
	        return;
	    };
	    $('#logoMenu').fadeIn("fast");
	    $('#header').fadeOut("slow");
	});
	
	/* ------------------------------------------------------------
	 * 主页全屏切换
	 * ------------------------------------------------------------ */
	$("#home>.banner-list").homeFull();
	
	/* ------------------------------------------------------------
	 * 滚动到指定位置
	 * ------------------------------------------------------------ */
	smoothScroll('.go-home', '#home');
	smoothScroll('.go-about', '#about');
	smoothScroll('.go-news', '#news');
	smoothScroll('.go-lookbook', '#lookbook');
	smoothScroll('.go-brand', '#brand');
	smoothScroll('.go-contact', '#contact');
	
	function smoothScroll(btn, target) {
	    var animationTime = 500;
	    $(document).on('click', btn, function () {
	        var position = $(target).offset().top;
	        if (target == "#home") {
	            position -= 60;
	        };
	        $('html, body').animate({ scrollTop: position }, animationTime);
	    });
	}
	
	/* ------------------------------------------------------------
	 * 新闻滚动及新闻关闭按钮
	 * ------------------------------------------------------------ */
	
	$('#sliderBox').sliderFunc();
	
	$("#maskXNew").click(function () {
	    $("#blackMaskNew").removeClass('block').addClass('none');
	    $.maskBool = false;
	});
	
	/* ------------------------------------------------------------
	 * brand切换
	 * ------------------------------------------------------------ */
	
	$('.loadBrands>li').click(function () {
	    var index = $(this).attr('index');
	    $('.brandTitle').filter('.block').removeClass('block').addClass('none');
	    $('.transparentBgBox .brandText').filter('.block').removeClass('block').addClass('none');
	    $('.transparentBgBox .brandText').eq(index).removeClass('none').addClass('block');
	    $('.brandTitle').eq(index).removeClass('none').addClass('block');
	});
	
	/* ------------------------------------------------------------
	 * product切换
	 * ------------------------------------------------------------ */
	
	$('.productList').productSliderFunc();
	$("#maskXProduct").click(function () {
	    $("#blackMaskProduct").removeClass('block').addClass('none');
	    $.maskBool = false;
	});
	/* ------------------------------------------------------------
	 * lookbook轮播及关闭按钮
	 * ------------------------------------------------------------ */
	$("#lookbookSlider").lookbookSlider();
	
	$("#maskXLookbook").click(function () {
	    $("#blackMaskLookbook").removeClass('block').addClass('none');
	    $.maskBool = false;
	});
	
	$('.Liz-scroll').mouseenter(function () {
	    $.mousBool = true;
	});
	
	$('.Liz-scroll').mouseleave(function () {
	    $.mousBool = false;
	});
	//基于mousewheel 子元素滚动 父元素不跟随
	$.fn.scrollUnique = function () {
	    return $(this).each(function () {
	        var eventType = 'mousewheel';
	        if (document.mozHidden !== undefined) {
	            eventType = 'DOMMouseScroll';
	        }
	        $(this).on(eventType, function (event) {
	            // 一些数据
	            var scrollTop = this.scrollTop,
	                scrollHeight = this.scrollHeight,
	                height = this.clientHeight;
	
	            var delta = event.originalEvent.wheelDelta ? event.originalEvent.wheelDelta : -(event.originalEvent.detail || 0);
	
	            if (delta > 0 && scrollTop <= delta || delta < 0 && scrollHeight - height - scrollTop <= -1 * delta) {
	                // IE浏览器下滚动会跨越边界直接影响父级滚动，因此，临界时候手动边界滚动定位
	                this.scrollTop = delta > 0 ? 0 : scrollHeight;
	                // 向上滚 || 向下滚
	                event.preventDefault();
	            }
	        });
	    });
	};
	
	$('.Liz-scroll').scrollUnique();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 1 */,
/* 2 */
/*!**************************!*\
  !*** ./src/css/base.css ***!
  \**************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 7 */,
/* 8 */
/*!****************************!*\
  !*** ./src/css/header.css ***!
  \****************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */,
/* 10 */
/*!**************************!*\
  !*** ./src/css/home.css ***!
  \**************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 11 */,
/* 12 */
/*!***************************!*\
  !*** ./src/css/about.css ***!
  \***************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 13 */,
/* 14 */
/*!**************************!*\
  !*** ./src/css/news.css ***!
  \**************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 15 */,
/* 16 */
/*!******************************!*\
  !*** ./src/css/lookbook.css ***!
  \******************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 17 */,
/* 18 */
/*!***************************!*\
  !*** ./src/css/brand.css ***!
  \***************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 19 */,
/* 20 */
/*!*****************************!*\
  !*** ./src/css/contact.css ***!
  \*****************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 21 */,
/* 22 */
/*!********************************!*\
  !*** ./src/css/changePage.css ***!
  \********************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 23 */,
/* 24 */
/*!************************!*\
  !*** ./src/js/base.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {//拓展$.prototype
	$.fn.extend({
		LizToggleOne: function (str1, str2) {
			if ($(this).hasClass(str1)) {
				$(this).removeClass(str1).addClass(str2);
			} else if ($(this).hasClass(str2)) {
				$(this).removeClass(str2).addClass(str1);
			}
		},
		hasNoClass: function (str) {
			var $this = $(this);
			var $that;
			$this.each(function () {
				if (!$(this).hasClass(str)) {
					$that = $(this);
				};
			});
			return $that;
		}
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 25 */
/*!****************************!*\
  !*** ./src/js/homeFull.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {$.fn.homeFull = function () {
		var $this = $(this),
		    _children = $this.children(),
		    _len = _children.length;
		setInterval(nextFunc, 5000);
		function nextFunc() {
			var _current = _children.hasNoClass('changeScale');
			var _next;
			if (_current.attr('index') == _children.eq(_children.length - 1).attr('index')) {
				_next = _children.eq(0);
			} else {
				_next = _current.next();
			}
			_current.addClass('changeScale');
			_next.removeClass('changeScale');
		}
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 26 */
/*!***************************************!*\
  !*** ./src/js/jquery.headroom.min.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {!function (a) {
	  a && (a.fn.headroom = function (b) {
	    return this.each(function () {
	      var c = a(this),
	          d = c.data("headroom"),
	          e = "object" == typeof b && b;e = a.extend(!0, {}, Headroom.options, e), d || (d = new Headroom(this, e), d.init(), c.data("headroom", d)), "string" == typeof b && d[b]();
	    });
	  }, a("[data-headroom]").each(function () {
	    var b = a(this);b.headroom(b.data());
	  }));
	}(window.Zepto || __webpack_provided_window_dot_jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 27 */
/*!********************************!*\
  !*** ./src/js/headroom.min.js ***!
  \********************************/
/***/ function(module, exports) {

	/*!
	 * headroom.js v0.7.0 - Give your page some headroom. Hide your header until you need it
	 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/headroom.js
	 * License: MIT
	 */
	!function (a, b) {
	  "use strict";
	  function c(a) {
	    this.callback = a, this.ticking = !1;
	  }function d(b) {
	    return b && "undefined" != typeof a && (b === a || b.nodeType);
	  }function e(a) {
	    if (arguments.length <= 0) throw new Error("Missing arguments in extend function");var b,
	        c,
	        f = a || {};for (c = 1; c < arguments.length; c++) {
	      var g = arguments[c] || {};for (b in g) f[b] = "object" != typeof f[b] || d(f[b]) ? f[b] || g[b] : e(f[b], g[b]);
	    }return f;
	  }function f(a) {
	    return a === Object(a) ? a : { down: a, up: a };
	  }function g(a, b) {
	    b = e(b, g.options), this.lastKnownScrollY = 0, this.elem = a, this.debouncer = new c(this.update.bind(this)), this.tolerance = f(b.tolerance), this.classes = b.classes, this.offset = b.offset, this.scroller = b.scroller, this.initialised = !1, this.onPin = b.onPin, this.onUnpin = b.onUnpin, this.onTop = b.onTop, this.onNotTop = b.onNotTop;
	  }var h = { bind: !!function () {}.bind, classList: "classList" in b.documentElement, rAF: !!(a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame) };a.requestAnimationFrame = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame, c.prototype = { constructor: c, update: function () {
	      this.callback && this.callback(), this.ticking = !1;
	    }, requestTick: function () {
	      this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0);
	    }, handleEvent: function () {
	      this.requestTick();
	    } }, g.prototype = { constructor: g, init: function () {
	      return g.cutsTheMustard ? (this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this) : void 0;
	    }, destroy: function () {
	      var a = this.classes;this.initialised = !1, this.elem.classList.remove(a.unpinned, a.pinned, a.top, a.initial), this.scroller.removeEventListener("scroll", this.debouncer, !1);
	    }, attachEvent: function () {
	      this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent());
	    }, unpin: function () {
	      var a = this.elem.classList,
	          b = this.classes;(a.contains(b.pinned) || !a.contains(b.unpinned)) && (a.add(b.unpinned), a.remove(b.pinned), this.onUnpin && this.onUnpin.call(this));
	    }, pin: function () {
	      var a = this.elem.classList,
	          b = this.classes;a.contains(b.unpinned) && (a.remove(b.unpinned), a.add(b.pinned), this.onPin && this.onPin.call(this));
	    }, top: function () {
	      var a = this.elem.classList,
	          b = this.classes;a.contains(b.top) || (a.add(b.top), a.remove(b.notTop), this.onTop && this.onTop.call(this));
	    }, notTop: function () {
	      var a = this.elem.classList,
	          b = this.classes;a.contains(b.notTop) || (a.add(b.notTop), a.remove(b.top), this.onNotTop && this.onNotTop.call(this));
	    }, getScrollY: function () {
	      return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (b.documentElement || b.body.parentNode || b.body).scrollTop;
	    }, getViewportHeight: function () {
	      return a.innerHeight || b.documentElement.clientHeight || b.body.clientHeight;
	    }, getDocumentHeight: function () {
	      var a = b.body,
	          c = b.documentElement;return Math.max(a.scrollHeight, c.scrollHeight, a.offsetHeight, c.offsetHeight, a.clientHeight, c.clientHeight);
	    }, getElementHeight: function (a) {
	      return Math.max(a.scrollHeight, a.offsetHeight, a.clientHeight);
	    }, getScrollerHeight: function () {
	      return this.scroller === a || this.scroller === b.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller);
	    }, isOutOfBounds: function (a) {
	      var b = 0 > a,
	          c = a + this.getViewportHeight() > this.getScrollerHeight();return b || c;
	    }, toleranceExceeded: function (a, b) {
	      return Math.abs(a - this.lastKnownScrollY) >= this.tolerance[b];
	    }, shouldUnpin: function (a, b) {
	      var c = a > this.lastKnownScrollY,
	          d = a >= this.offset;return c && d && b;
	    }, shouldPin: function (a, b) {
	      var c = a < this.lastKnownScrollY,
	          d = a <= this.offset;return c && b || d;
	    }, update: function () {
	      var a = this.getScrollY(),
	          b = a > this.lastKnownScrollY ? "down" : "up",
	          c = this.toleranceExceeded(a, b);this.isOutOfBounds(a) || (a <= this.offset ? this.top() : this.notTop(), this.shouldUnpin(a, c) ? this.unpin() : this.shouldPin(a, c) && this.pin(), this.lastKnownScrollY = a);
	    } }, g.options = { tolerance: { up: 0, down: 0 }, offset: 0, scroller: a, classes: { pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", initial: "headroom" } }, g.cutsTheMustard = "undefined" != typeof h && h.rAF && h.bind && h.classList, a.Headroom = g;
	}(window, document);

/***/ },
/* 28 */
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {$.fn.sliderFunc = function () {
	    var _super = this;
	    _super.animated = false, _W = parseInt($(window).width(), 10);
	    var _const = _super.children().length;
	    $(_super).css('width', _W * _const);
	    var timer;
	    var index = 0; //记录点击
	    _super.sliderWidth = _W;
	
	    var Children = $(_super).children();
	    var p = 1; //错位个数
	    var start = {},
	        current = {};
	    var arrLeft = $(".newsArr>.dg-nextArr");
	    var arrRight = $(".newsArr>.dg-prevArr");
	    var arrLeftOn = $("#blackMaskNew>.btnBox>.dg-nextArr");
	    var arrRightOn = $("#blackMaskNew>.btnBox>.dg-prevArr");
	    var thisSrc;
	    //动态设置滚动元素的宽度，width和index编号
	    $.each(Children, function (i) {
	        $(this).attr({ 'index': i });
	        $(this).css({ 'width': _W, 'left': i * _W });
	    });
	    init();
	    function init() {
	        var $this = $(this);
	        $this.bind('Arrow_right', '', function () {
	            Arrow_r();
	        });
	        $this.bind('Arrow_left', '', function () {
	            Arrow_l();
	        });
	        arrLeft.click(function () {
	            Arrow_l();
	        });
	        arrRight.click(function () {
	            Arrow_r();
	        });
	        arrLeftOn.click(function () {
	            Arrow_lOn();
	        });
	        arrRightOn.click(function () {
	            Arrow_rOn();
	        });
	        return $this;
	    }
	    var contentTextChildren = $('.newContentTitle');
	    contentTextChildren.each(function () {
	        $(this).click(function () {
	            var $this = $(this);
	            $("#blackMaskNew").removeClass('none').addClass('block');
	            $("#sliderBox>li").each(function () {
	                $(this).removeClass('currentNew');
	            });
	            var thisSrc = $this.attr("data-url");
	            $this.addClass('currentNew');
	            $.ajax({
	                type: "GET",
	                url: thisSrc,
	                dataType: "json",
	                success: function (data) {
	                    console.log("Data Saved: " + data);
	                    $('#lookOnlyNew>.newTitleOpen').text(data.title);
	                    $('#lookOnlyNew').next().text(data.title);
	                    $('#lookOnlyNew>.newDataOpen').text(data.date);
	                    $('#lookOnlyNew>.boxScorll').html(unescape(data.content));
	                },
	                error: function () {
	                    console.log("出错啦~~~~");
	                }
	            });
	        });
	    });
	    //向左滚动一页
	    function Arrow_r() {
	        if (!_super.animated) {
	            index++;
	            if (index == _const) {
	                index = _const - 1;
	                return;
	            }
	            Children.filter('.currentNew').removeClass('currentNew');
	            Children.eq(index).addClass('currentNew');
	            thisSrc = Children.eq(index).attr("data-url");
	            animate(-_super.sliderWidth);
	        }
	    }
	    //向右滚动一页
	    function Arrow_l() {
	        if (!_super.animated) {
	            index--;
	            if (index == -1) {
	                index = 0;
	                return;
	            }
	            Children.filter('.currentNew').removeClass('currentNew');
	            Children.eq(index).addClass('currentNew');
	            thisSrc = Children.eq(index).attr("data-url");
	            animate(_super.sliderWidth);
	        }
	    }
	    //向左滚动一页
	    function Arrow_rOn() {
	        if (!_super.animated) {
	            index++;
	            if (index == _const) {
	                index = _const - 1;
	                return;
	            }
	            Children.filter('.currentNew').removeClass('currentNew');
	            Children.eq(index).addClass('currentNew');
	            thisSrc = Children.eq(index).children().children().children().filter('.newContentTitle').attr("data-url");
	            ajaxGetNews(thisSrc);
	            animate(-_super.sliderWidth);
	        }
	    }
	    //向右滚动一页
	    function Arrow_lOn() {
	        if (!_super.animated) {
	            index--;
	            if (index == -1) {
	                index = 0;
	                return;
	            }
	            Children.filter('.currentNew').removeClass('currentNew');
	            Children.eq(index).addClass('currentNew');
	            thisSrc = Children.eq(index).children().children().children().filter('.newContentTitle').attr("data-url");
	            ajaxGetNews(thisSrc);
	            animate(_super.sliderWidth);
	        }
	    }
	
	    //滚动函数
	    function animate(wid, num) {
	        //wid是绝对偏移量，带符号
	        _super.animated = true;
	        if (wid == 0) {
	            return;
	        };
	        var time = _super.sliderWidth / 1000; //滚动时间
	        var left; //目的偏移量
	        var leftCorrt; //当前偏移量
	        var stat = 0; //记录动画次数
	        if (left == 0) {
	            $(this).css('z-index', '999');
	        };
	        if (wid > 0) {
	            if (leftCorrt == 0 && left == -_super.sliderWidth) {
	                $(this).css('z-index', '888');
	            }
	        } else {
	            if (leftCorrt == 0 && left == _super.sliderWidth) {
	                $(this).css('z-index', '888');
	            }
	        }
	
	        $.each(Children, function () {
	            leftCorrt = parseInt($(this).css('left'), 10);
	            left = leftCorrt + wid;
	            //移动
	            $(this).animate({ left: left }, { quequ: false, complete: function () {
	                    stat++;
	                    if (stat == _const) {
	                        //监听移动次数以便允许用户其他操作
	                        _super.animated = false;
	                        $.each(Children, function () {
	                            $(this).css('z-index', '0');
	                        });
	                    };
	                } });
	        });
	    }
	
	    function ajaxGetNews(srcStr) {
	        $.ajax({
	            type: "GET",
	            url: srcStr,
	            dataType: "json",
	            success: function (data) {
	                console.log("Data Saved: " + data);
	                $('#lookOnlyNew>.newTitleOpen').text(data.title);
	                $('#lookOnlyNew').next().text(data.title);
	                $('#lookOnlyNew>.newDataOpen').text(data.date);
	                $('#lookOnlyNew>.boxScorll').html(unescape(data.content));
	            },
	            error: function () {
	                console.log("出错啦~~~~");
	            }
	        });
	    }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 29 */
/*!**********************************!*\
  !*** ./src/js/lookbookSlider.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {$.fn.lookbookSlider = function (obj) {
	    var _super = this;
	    _super.animated = false, _W = parseInt($(_super).parent().width(), 10);
	    var _const = _super.children().length;
	    $(_super).css('width', _W * _const);
	    var timer;
	    var _point = 'point';
	    var index = 0; //记录点击
	    _super.sliderWidth = _W;
	    var _stat = false;
	
	    var Children = $(_super).children();
	    var p = 1; //错位个数
	    var start = {},
	        current = {};
	    var arrLeft = $(".lookbookArr>.dg-nextArr");
	    var arrRight = $(".lookbookArr>.dg-prevArr");
	    var arrLeftOn = $("#blackMaskLookbook>.btnBox>.dg-nextArr");
	    var arrRightOn = $("#blackMaskLookbook>.btnBox>.dg-prevArr");
	    var bannerList = Children.children();
	    var windowWidth = $(window).width();
	    var thisSrc;
	    //动态设置滚动元素的宽度，left和index编号
	    $.each(Children, function (i) {
	        $(this).attr({ 'index': i });
	        $(this).css({ 'width': _super.sliderWidth + 'px', 'left': $(this).attr('index') * _super.sliderWidth + 'px' });
	        $(this).attr({ 'index': i });
	    });
	    Children.children().each(function () {
	        $(this).click(function () {
	            var $this = $(this);
	            $("#blackMaskLookbook").removeClass('none').addClass('block');
	            Children.children().filter('.currentLookbook').removeClass('currentLookbook');
	            var thisSrc = $this.attr("data-url");
	            $this.addClass('currentLookbook');
	            $.ajax({
	                type: "GET",
	                url: thisSrc,
	                dataType: "json",
	                success: function (data) {
	                    console.log("Data Saved: " + data);
	                    $('#lookOnlyLookbook>.LookbookTitleOpen').text(data.title);
	                    $('#lookOnlyLookbook').next().text(data.title);
	                    $('#lookOnlyLookbook>.LookbookDataOpen').text(data.date);
	                    $('#lookOnlyLookbook>.boxScorll').html(unescape(data.content));
	                },
	                error: function (data) {
	                    console.log("出错啦~~~~" + data.status);
	                }
	            });
	        });
	    });
	    $(_super).on('touchstart', '', pageStart);
	    $(_super).on('touchmove', '', pageMove);
	    $(_super).on('touchend', '', pageEnd);
	    arrLeft.on('click', '', Arrow_l);
	    arrRight.on('click', '', Arrow_r);
	    arrLeftOn.on('click', '', Arrow_lOn);
	    arrRightOn.on('click', '', Arrow_rOn);
	    function Arrow_lOn() {
	        console.log("click");
	        var pre = bannerList.filter('.currentLookbook');
	        if (pre.attr('index') == 0) {
	            return;
	        };
	        if (pre.attr('index') == pre.parent().children().first().attr('index')) {
	            Arrow_l();
	            pre.removeClass('currentLookbook');
	            var next = pre.parent().prev().children().last();
	            next.addClass('currentLookbook');
	            thisSrc = next.attr('data-url');
	            ajaxGetLookbooks(thisSrc);
	        } else {
	            pre.removeClass('currentLookbook');
	            var next = pre.prev();
	            next.addClass('currentLookbook');
	            thisSrc = next.attr('data-url');
	            ajaxGetLookbooks(thisSrc);
	        }
	    }
	    function Arrow_rOn() {
	        console.log("click");
	        var pre = bannerList.filter('.currentLookbook');
	        if (pre.attr('index') == bannerList.length - 1) {
	            return;
	        };
	        if (pre.attr('index') == pre.parent().children().last().attr('index')) {
	            Arrow_r();
	            pre.removeClass('currentLookbook');
	            var next = pre.parent().next().children().first();
	            next.addClass('currentLookbook');
	            thisSrc = next.attr('data-url');
	            ajaxGetLookbooks(thisSrc);
	        } else {
	            pre.removeClass('currentLookbook');
	            var next = pre.next();
	            next.addClass('currentLookbook');
	            thisSrc = next.attr('data-url');
	            ajaxGetLookbooks(thisSrc);
	        }
	    }
	    // pageClick
	    function pageClick(num) {
	        if (!_super.animated) {
	            var from = 0;
	            var sw;
	            to = num;
	            $.each(Children, function () {
	                if (parseInt(this.style.left) == 0) {
	                    from = parseInt($(this).attr('index'));
	                };
	            });
	            console.log('from:' + from + '     to:' + to);
	
	            if (from == to) {
	                return;
	            } else {
	                sw = (from - to) * _super.sliderWidth;
	            }
	            index = to - 1;
	            animate(sw, to);
	        }
	    }
	    //pageMove
	    function pageMove(e) {}
	    //e.preventDefault();
	
	    //pageStart
	    function pageStart(e) {
	        if (start.active) return;
	        if (e.originalEvent.touches.length < 2) {
	            start.x = e.originalEvent.touches[0].pageX;
	            start.when = new Date().getTime();
	            start.active = true;
	        }
	    }
	    //pageEnd
	    function pageEnd(e) {
	        current.x = e.originalEvent.changedTouches[0].pageX;
	        start.active = false;
	        if (isSwipe(e)) {
	            if (current.x - start.x < 0) {
	                Arrow_r(_super.sliderWidth);
	            } else {
	                Arrow_l(_super.sliderWidth);
	            }
	        }
	    }
	    //是否到达滑动的条件
	    function isSwipe(e) {
	        var duration = new Date().getTime() - start.when;
	        var xdist;
	        xdist = current.x - start.x;
	        return duration < 500 && 100 < Math.abs(xdist);
	    }
	    //向左滚动一页
	    function Arrow_r() {
	        if (!_super.animated) {
	            if (index == _const - 1) {
	                return;
	            }
	            index++;
	            animate(-_super.sliderWidth, index + 1);
	        }
	    }
	    //向右滚动一页
	    function Arrow_l() {
	        if (!_super.animated) {
	            if (index == 0) {
	                return;
	            }
	            index--;
	            animate(_super.sliderWidth, index + 1);
	        }
	    }
	    //自动向左滚动
	    function autoPlay() {
	        timer = setInterval(function () {
	            Arrow_r();
	        }, 5000);
	    }
	    //停止自动滚动
	    function stopAuto() {
	        clearInterval(timer);
	    }
	
	    //滚动函数
	    function animate(wid, num) {
	        //wid是绝对偏移量，带符号
	        _super.animated = true;
	        if (wid == 0) {
	            return;
	        };
	        var time = _super.sliderWidth / 1000; //滚动时间
	        var left; //目的偏移量
	        var leftCorrt; //当前偏移量
	        var stat = 0; //记录动画次数
	
	        $.each(Children, function () {
	            leftCorrt = parseInt(this.style.left);
	            left = leftCorrt + wid;
	            if (left == 0) {
	                $(this).css('z-index', '999');
	            };
	            if (wid > 0) {
	                if (leftCorrt == 0 && left == -_super.sliderWidth) {
	                    $(this).css('z-index', '888');
	                }
	            } else {
	                if (leftCorrt == 0 && left == _super.sliderWidth) {
	                    $(this).css('z-index', '888');
	                }
	            }
	            //移动
	            $(this).animate({ left: left }, { quequ: false, complete: function () {
	                    stat++;
	                    if (stat == _const) {
	                        //监听移动次数以便允许用户其他操作
	                        _super.animated = false;
	                        $.each(Children, function () {
	                            $(this).css('z-index', '0');
	                        });
	                    };
	                } });
	        });
	    }
	
	    function ajaxGetLookbooks(srcStr) {
	        $.ajax({
	            type: "GET",
	            url: srcStr,
	            dataType: "json",
	            success: function (data) {
	                console.log("Data Saved: " + data);
	                $('#lookOnlyLookbook>.LookbookTitleOpen').text(data.title);
	                $('#lookOnlyLookbook').next().text(data.title);
	                $('#lookOnlyLookbook>.LookbookDataOpen').text(data.date);
	                $('#lookOnlyLookbook>.boxScorll').html(unescape(data.content));
	            },
	            err: function () {
	                console.log("出错啦~~~~");
	            }
	        });
	    }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 30 */
/*!*************************************!*\
  !*** ./src/js/jquery.mousewheel.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
	 * Licensed under the MIT License (LICENSE.txt).
	 *
	 * Version: 3.1.9
	 *
	 * Requires: jQuery 1.2.2+
	 */
	
	(function (factory) {
	    if (true) {
	        // AMD. Register as an anonymous module.
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ 1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        // Node/CommonJS style for Browserify
	        module.exports = factory;
	    } else {
	        // Browser globals
	        factory(jQuery);
	    }
	})(function ($) {
	
	    var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
	        toBind = 'onwheel' in document || document.documentMode >= 9 ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
	        slice = Array.prototype.slice,
	        nullLowestDeltaTimeout,
	        lowestDelta;
	
	    if ($.event.fixHooks) {
	        for (var i = toFix.length; i;) {
	            $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
	        }
	    }
	
	    var special = $.event.special.mousewheel = {
	        version: '3.1.9',
	
	        setup: function () {
	            if (this.addEventListener) {
	                for (var i = toBind.length; i;) {
	                    this.addEventListener(toBind[--i], handler, false);
	                }
	            } else {
	                this.onmousewheel = handler;
	            }
	            // Store the line height and page height for this particular element
	            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
	            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
	        },
	
	        teardown: function () {
	            if (this.removeEventListener) {
	                for (var i = toBind.length; i;) {
	                    this.removeEventListener(toBind[--i], handler, false);
	                }
	            } else {
	                this.onmousewheel = null;
	            }
	        },
	
	        getLineHeight: function (elem) {
	            return parseInt($(elem)['offsetParent' in $.fn ? 'offsetParent' : 'parent']().css('fontSize'), 10);
	        },
	
	        getPageHeight: function (elem) {
	            return $(elem).height();
	        },
	
	        settings: {
	            adjustOldDeltas: true
	        }
	    };
	
	    $.fn.extend({
	        mousewheel: function (fn) {
	            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
	        },
	
	        unmousewheel: function (fn) {
	            return this.unbind('mousewheel', fn);
	        }
	    });
	
	    function handler(event) {
	        var orgEvent = event || window.event,
	            args = slice.call(arguments, 1),
	            delta = 0,
	            deltaX = 0,
	            deltaY = 0,
	            absDelta = 0;
	        event = $.event.fix(orgEvent);
	        event.type = 'mousewheel';
	
	        // Old school scrollwheel delta
	        if ('detail' in orgEvent) {
	            deltaY = orgEvent.detail * -1;
	        }
	        if ('wheelDelta' in orgEvent) {
	            deltaY = orgEvent.wheelDelta;
	        }
	        if ('wheelDeltaY' in orgEvent) {
	            deltaY = orgEvent.wheelDeltaY;
	        }
	        if ('wheelDeltaX' in orgEvent) {
	            deltaX = orgEvent.wheelDeltaX * -1;
	        }
	
	        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
	        if ('axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
	            deltaX = deltaY * -1;
	            deltaY = 0;
	        }
	
	        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
	        delta = deltaY === 0 ? deltaX : deltaY;
	
	        // New school wheel delta (wheel event)
	        if ('deltaY' in orgEvent) {
	            deltaY = orgEvent.deltaY * -1;
	            delta = deltaY;
	        }
	        if ('deltaX' in orgEvent) {
	            deltaX = orgEvent.deltaX;
	            if (deltaY === 0) {
	                delta = deltaX * -1;
	            }
	        }
	
	        // No change actually happened, no reason to go any further
	        if (deltaY === 0 && deltaX === 0) {
	            return;
	        }
	
	        // Need to convert lines and pages to pixels if we aren't already in pixels
	        // There are three delta modes:
	        //   * deltaMode 0 is by pixels, nothing to do
	        //   * deltaMode 1 is by lines
	        //   * deltaMode 2 is by pages
	        if (orgEvent.deltaMode === 1) {
	            var lineHeight = $.data(this, 'mousewheel-line-height');
	            delta *= lineHeight;
	            deltaY *= lineHeight;
	            deltaX *= lineHeight;
	        } else if (orgEvent.deltaMode === 2) {
	            var pageHeight = $.data(this, 'mousewheel-page-height');
	            delta *= pageHeight;
	            deltaY *= pageHeight;
	            deltaX *= pageHeight;
	        }
	
	        // Store lowest absolute delta to normalize the delta values
	        absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));
	
	        if (!lowestDelta || absDelta < lowestDelta) {
	            lowestDelta = absDelta;
	
	            // Adjust older deltas if necessary
	            if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
	                lowestDelta /= 40;
	            }
	        }
	
	        // Adjust older deltas if necessary
	        if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
	            // Divide all the things by 40!
	            delta /= 40;
	            deltaX /= 40;
	            deltaY /= 40;
	        }
	
	        // Get a whole, normalized value for the deltas
	        delta = Math[delta >= 1 ? 'floor' : 'ceil'](delta / lowestDelta);
	        deltaX = Math[deltaX >= 1 ? 'floor' : 'ceil'](deltaX / lowestDelta);
	        deltaY = Math[deltaY >= 1 ? 'floor' : 'ceil'](deltaY / lowestDelta);
	
	        // Add information to the event object
	        event.deltaX = deltaX;
	        event.deltaY = deltaY;
	        event.deltaFactor = lowestDelta;
	        // Go ahead and set deltaMode to 0 since we converted to pixels
	        // Although this is a little odd since we overwrite the deltaX/Y
	        // properties with normalized deltas.
	        event.deltaMode = 0;
	
	        // Add event and delta to the front of the arguments
	        args.unshift(event, delta, deltaX, deltaY);
	
	        // Clearout lowestDelta after sometime to better
	        // handle multiple device types that give different
	        // a different lowestDelta
	        // Ex: trackpad = 3 and mouse wheel = 120
	        if (nullLowestDeltaTimeout) {
	            clearTimeout(nullLowestDeltaTimeout);
	        }
	        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);
	
	        return ($.event.dispatch || $.event.handle).apply(this, args);
	    }
	
	    function nullLowestDelta() {
	        lowestDelta = null;
	    }
	
	    function shouldAdjustOldDeltas(orgEvent, absDelta) {
	        // If this is an older event and the delta is divisable by 120,
	        // then we are assuming that the browser is treating this as an
	        // older mouse wheel event and that we should divide the deltas
	        // by 40 to try and get a more usable deltaFactor.
	        // Side note, this actually impacts the reported scroll distance
	        // in older browsers and can cause scrolling to be slower than native.
	        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
	        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
	    }
	});

/***/ },
/* 31 */
/*!**************************!*\
  !*** ./src/js/scorll.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var mousNow = 0;
	var st;
	
	function clearAnm() {
	    $(".box-cont").eq(mousNow).removeClass("anim");
	    $(".box-cont").eq(mousNow).removeClass("enterAnm");
	};
	$.extend.mousBool = false;
	var scrollBool = false;
	$.extend.maskBool = false;
	
	$(window).mousewheel(function (event, delta, deltaX, deltaY) {
	    if (!$.maskBool) {
	        if (!$.mousBool) {
	            event.preventDefault();
	
	            var he = $(".box").height();
	            var len = $(".box").length;
	
	            if (delta > 0) {
	                if (mousNow - 1 < 0) {
	                    return;
	                } else mousNow--;
	            } else {
	                if (mousNow + 1 > len - 1) {
	                    return;
	                } else mousNow++;
	            }
	
	            mousAn(mousNow);
	        }
	    } else {
	        event.preventDefault();
	    }
	});
	
	function mousAn(mousNow) {
	    var he = $(".box").height();
	
	    if (he * mousNow != $(window).scrollTop() && !$.mousBool) {
	        $.mousBool = true;
	
	        var browser = navigator.appName;
	        var b_version = navigator.appVersion;
	        var version = b_version.split(";");
	        if (version[1]) {
	            var trim_Version = version[1].replace(/[ ]/g, "");
	            if (!(browser == "Microsoft Internet Explorer" && (trim_Version == "MSIE6.0" || trim_Version == "MSIE7.0" || trim_Version == "MSIE8.0" || trim_Version == "MSIE9.0"))) {
	                clearAnm();
	                setTimeout(function () {
	                    $(".box-cont").eq(mousNow).addClass("enterAnm");
	                    $(".box-cont").eq(mousNow).addClass("anim");
	                }, 10);
	            }
	        } else {
	            clearAnm();
	            setTimeout(function () {
	                $(".box-cont").eq(mousNow).addClass("enterAnm");
	                $(".box-cont").eq(mousNow).addClass("anim");
	            }, 10);
	        }
	
	        $("body,html").stop(true, false).animate({ scrollTop: he * mousNow }, 1000, function () {
	            $.mousBool = false;
	        });
	    }
	};
	
	$(window).scroll(function () {
	    if (!$.mousBool) {
	        clearInterval(st);
	        var winTop = $(window).scrollTop();
	
	        $(".box").each(function (i, va) {
	            if ($(this).offset().top - $(window).height() / 2 <= winTop) {
	                mousNow = i;
	            } else {
	                return false;
	            }
	        });
	
	        st = setTimeout(function () {
	            var he = $(".box").height();
	            if (he * mousNow != $(window).scrollTop() && !$.mousBool) {
	                var he = $(".box").height();
	                $.mousBool = true;
	                $("body,html").stop(true, false).animate({ scrollTop: he * mousNow }, 1000, function () {
	
	                    $.mousBool = false;
	                });
	            }
	        }, 1500);
	    }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 32 */
/*!*********************************!*\
  !*** ./src/js/productSlider.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {$.fn.productSliderFunc = function () {
	    var _super = this;
	    _super.animated = false, _W = parseInt($(window).width(), 10);
	    var _const = _super.children().length;
	    $(_super).css('width', _W * _const);
	    var timer;
	    var index = 0; //记录点击
	    _super.sliderWidth = _W;
	
	    var Children = $(_super).children();
	    var p = 1; //错位个数
	    var start = {},
	        current = {};
	    var arrLeft = $(".aboutBox .dg-nextArr");
	    var arrRight = $(".aboutBox .dg-prevArr");
	    var arrLeftOn = $("#blackMaskProduct .btnBox>.dg-nextArr");
	    var arrRightOn = $("#blackMaskProduct .btnBox>.dg-prevArr");
	    var bannerList = $(".product");
	    var thisSrc;
	    //动态设置滚动元素的宽度，width和index编号
	    $.each(Children, function (i) {
	        $(this).attr({ 'index': i });
	        $(this).css({ 'width': _W, 'left': i * _W });
	    });
	    init();
	    function init() {
	        var $this = $(this);
	        $this.bind('Arrow_right', '', function () {
	            Arrow_r();
	        });
	        $this.bind('Arrow_left', '', function () {
	            Arrow_l();
	        });
	        arrLeft.on('click', '', Arrow_l);
	        arrRight.on('click', '', Arrow_r);
	        arrLeftOn.on('click', '', Arrow_lOn);
	        arrRightOn.on('click', '', Arrow_rOn);
	        return $this;
	    }
	    function Arrow_lOn() {
	        console.log("click");
	        var pre = bannerList.filter('.currentProduct');
	        if (pre.attr('index') == 0) {
	            return;
	        };
	        if (pre.attr('index') == pre.parent().children().first().attr('index')) {
	            Arrow_l();
	            pre.removeClass('currentProduct');
	            var next = pre.parent().parent().prev().children().first().children().last();
	            next.addClass('currentProduct');
	            thisSrc = next.attr('data-url');
	            ajaxGetProducts(thisSrc);
	        } else {
	            pre.removeClass('currentProduct');
	            var next = pre.prev();
	            next.addClass('currentProduct');
	            thisSrc = next.attr('data-url');
	            ajaxGetProducts(thisSrc);
	        }
	    }
	    function Arrow_rOn() {
	        console.log("click");
	        var pre = bannerList.filter('.currentProduct');
	        if (pre.attr('index') == bannerList.length - 1) {
	            return;
	        };
	        if (pre.attr('index') == pre.parent().children().last().attr('index')) {
	            Arrow_r();
	            pre.removeClass('currentProduct');
	            var next = pre.parent().parent().next().children().first().children().first();
	            next.addClass('currentProduct');
	            thisSrc = next.attr('data-url');
	            ajaxGetProducts(thisSrc);
	        } else {
	            pre.removeClass('currentProduct');
	            var next = pre.next();
	            next.addClass('currentProduct');
	            thisSrc = next.attr('data-url');
	            ajaxGetProducts(thisSrc);
	        }
	    }
	    var productChildren = $(".productList>.productBox").children().children().filter('.product');
	    productChildren.each(function () {
	        $(this).click(function () {
	            var $this = $(this);
	            $("#blackMaskProduct").removeClass('none').addClass('block');
	            productChildren.each(function () {
	                $(this).removeClass('currentProduct');
	            });
	            var thisSrc = $this.attr("data-url");
	            $this.addClass('currentProduct');
	            $.ajax({
	                type: "GET",
	                url: thisSrc,
	                dataType: "json",
	                success: function (data) {
	                    console.log("Data Saved: " + data);
	                    $('#lookOnlyProduct>.ProductTitleOpen').text(data.title);
	                    $('#lookOnlyProduct').next().text(data.title);
	                    $('#lookOnlyProduct>.ProductDataOpen').text(data.date);
	                    $('#lookOnlyProduct>.boxScorll').html(unescape(data.content));
	                },
	                error: function () {
	                    console.log("出错啦~~~~");
	                }
	            });
	        });
	    });
	    //向左滚动一页
	    function Arrow_r() {
	        if (!_super.animated) {
	            if (index == _const - 1) {
	                return;
	            }
	            index++;
	            Children.filter('.currentNew').removeClass('currentNew');
	            Children.eq(index).addClass('currentNew');
	            animate(-_super.sliderWidth);
	        }
	    }
	    //向右滚动一页
	    function Arrow_l() {
	        if (!_super.animated) {
	            if (index == 0) {
	                return;
	            }
	            index--;
	            Children.filter('.currentNew').removeClass('currentNew');
	            Children.eq(index - 1).addClass('currentNew');
	            animate(_super.sliderWidth);
	        }
	    }
	    //滚动函数
	    function animate(wid, num) {
	        //wid是绝对偏移量，带符号
	        _super.animated = true;
	        if (wid == 0) {
	            return;
	        };
	        var time = _super.sliderWidth / 1000; //滚动时间
	        var left; //目的偏移量
	        var leftCorrt; //当前偏移量
	        var stat = 0; //记录动画次数
	        if (left == 0) {
	            $(this).css('z-index', '999');
	        };
	        if (wid > 0) {
	            if (leftCorrt == 0 && left == -_super.sliderWidth) {
	                $(this).css('z-index', '888');
	            }
	        } else {
	            if (leftCorrt == 0 && left == _super.sliderWidth) {
	                $(this).css('z-index', '888');
	            }
	        }
	
	        $.each(Children, function () {
	            leftCorrt = parseInt($(this).css('left'), 10);
	            left = leftCorrt + wid;
	            //移动
	            $(this).animate({ left: left }, { quequ: false, complete: function () {
	                    stat++;
	                    if (stat == _const) {
	                        //监听移动次数以便允许用户其他操作
	                        _super.animated = false;
	                        $.each(Children, function () {
	                            $(this).css('z-index', '0');
	                        });
	                    };
	                } });
	        });
	    }
	    function ajaxGetProducts(srcStr) {
	        $.ajax({
	            type: "GET",
	            url: srcStr,
	            dataType: "json",
	            success: function (data) {
	                console.log("Data Saved: " + data);
	                $('#lookOnlyProduct>.ProductTitleOpen').text(data.title);
	                $('#lookOnlyProduct').next().text(data.title);
	                $('#lookOnlyProduct>.ProductDataOpen').text(data.date);
	                $('#lookOnlyProduct>.boxScorll').html(unescape(data.content));
	            },
	            error: function () {
	                console.log("出错啦~~~~");
	            }
	        });
	    }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ }
]);
//# sourceMappingURL=index.bundle.js.map