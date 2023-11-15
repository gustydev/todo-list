(() => {
  "use strict";
  const t = class {
      constructor(t, e, n, r, a) {
        (this.title = t),
          (this.desc = e),
          (this.dueDate = n),
          (this.priority = r),
          (this.checklist = a);
      }
    },
    e = class {
      constructor(t, e) {
        (this.name = t), (this.items = e);
      }
      add(t) {
        this.items.push(t);
      }
      remove(t) {
        this.items = this.items.filter((e) => e != t);
      }
    };
  function n(t) {
    return (
      (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      n(t)
    );
  }
  function r(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function a(t, e) {
    var n =
      ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
    if (!n) {
      if (
        Array.isArray(t) ||
        (n = (function (t, e) {
          if (t) {
            if ("string" == typeof t) return r(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === n && t.constructor && (n = t.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(t)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? r(t, e)
                : void 0
            );
          }
        })(t)) ||
        (e && t && "number" == typeof t.length)
      ) {
        n && (t = n);
        var a = 0,
          i = function () {};
        return {
          s: i,
          n: function () {
            return a >= t.length ? { done: !0 } : { done: !1, value: t[a++] };
          },
          e: function (t) {
            throw t;
          },
          f: i,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    }
    var o,
      u = !0,
      c = !1;
    return {
      s: function () {
        n = n.call(t);
      },
      n: function () {
        var t = n.next();
        return (u = t.done), t;
      },
      e: function (t) {
        (c = !0), (o = t);
      },
      f: function () {
        try {
          u || null == n.return || n.return();
        } finally {
          if (c) throw o;
        }
      },
    };
  }
  var i = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  };
  function o(t) {
    return function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = e.width ? String(e.width) : t.defaultWidth;
      return t.formats[n] || t.formats[t.defaultWidth];
    };
  }
  var u,
    c = {
      date: o({
        formats: {
          full: "EEEE, MMMM do, y",
          long: "MMMM do, y",
          medium: "MMM d, y",
          short: "MM/dd/yyyy",
        },
        defaultWidth: "full",
      }),
      time: o({
        formats: {
          full: "h:mm:ss a zzzz",
          long: "h:mm:ss a z",
          medium: "h:mm:ss a",
          short: "h:mm a",
        },
        defaultWidth: "full",
      }),
      dateTime: o({
        formats: {
          full: "{{date}} 'at' {{time}}",
          long: "{{date}} 'at' {{time}}",
          medium: "{{date}}, {{time}}",
          short: "{{date}}, {{time}}",
        },
        defaultWidth: "full",
      }),
    },
    s = {
      lastWeek: "'last' eeee 'at' p",
      yesterday: "'yesterday at' p",
      today: "'today at' p",
      tomorrow: "'tomorrow at' p",
      nextWeek: "eeee 'at' p",
      other: "P",
    };
  function l(t) {
    return function (e, n) {
      var r;
      if (
        "formatting" ===
          (null != n && n.context ? String(n.context) : "standalone") &&
        t.formattingValues
      ) {
        var a = t.defaultFormattingWidth || t.defaultWidth,
          i = null != n && n.width ? String(n.width) : a;
        r = t.formattingValues[i] || t.formattingValues[a];
      } else {
        var o = t.defaultWidth,
          u = null != n && n.width ? String(n.width) : t.defaultWidth;
        r = t.values[u] || t.values[o];
      }
      return r[t.argumentCallback ? t.argumentCallback(e) : e];
    };
  }
  function d(t) {
    return function (e) {
      var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = n.width,
        a = (r && t.matchPatterns[r]) || t.matchPatterns[t.defaultMatchWidth],
        i = e.match(a);
      if (!i) return null;
      var o,
        u = i[0],
        c = (r && t.parsePatterns[r]) || t.parsePatterns[t.defaultParseWidth],
        s = Array.isArray(c)
          ? (function (t, e) {
              for (var n = 0; n < t.length; n++) if (t[n].test(u)) return n;
            })(c)
          : (function (t, e) {
              for (var n in t)
                if (t.hasOwnProperty(n) && t[n].test(u)) return n;
            })(c);
      return (
        (o = t.valueCallback ? t.valueCallback(s) : s),
        {
          value: (o = n.valueCallback ? n.valueCallback(o) : o),
          rest: e.slice(u.length),
        }
      );
    };
  }
  const f = {
    code: "en-US",
    formatDistance: function (t, e, n) {
      var r,
        a = i[t];
      return (
        (r =
          "string" == typeof a
            ? a
            : 1 === e
            ? a.one
            : a.other.replace("{{count}}", e.toString())),
        null != n && n.addSuffix
          ? n.comparison && n.comparison > 0
            ? "in " + r
            : r + " ago"
          : r
      );
    },
    formatLong: c,
    formatRelative: function (t, e, n, r) {
      return s[t];
    },
    localize: {
      ordinalNumber: function (t, e) {
        var n = Number(t),
          r = n % 100;
        if (r > 20 || r < 10)
          switch (r % 10) {
            case 1:
              return n + "st";
            case 2:
              return n + "nd";
            case 3:
              return n + "rd";
          }
        return n + "th";
      },
      era: l({
        values: {
          narrow: ["B", "A"],
          abbreviated: ["BC", "AD"],
          wide: ["Before Christ", "Anno Domini"],
        },
        defaultWidth: "wide",
      }),
      quarter: l({
        values: {
          narrow: ["1", "2", "3", "4"],
          abbreviated: ["Q1", "Q2", "Q3", "Q4"],
          wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
        },
        defaultWidth: "wide",
        argumentCallback: function (t) {
          return t - 1;
        },
      }),
      month: l({
        values: {
          narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          abbreviated: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          wide: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        },
        defaultWidth: "wide",
      }),
      day: l({
        values: {
          narrow: ["S", "M", "T", "W", "T", "F", "S"],
          short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          wide: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
        },
        defaultWidth: "wide",
      }),
      dayPeriod: l({
        values: {
          narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
          },
          abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
          },
          wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
          },
        },
        defaultWidth: "wide",
        formattingValues: {
          narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
          },
          abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
          },
          wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
          },
        },
        defaultFormattingWidth: "wide",
      }),
    },
    match: {
      ordinalNumber:
        ((u = {
          matchPattern: /^(\d+)(th|st|nd|rd)?/i,
          parsePattern: /\d+/i,
          valueCallback: function (t) {
            return parseInt(t, 10);
          },
        }),
        function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = t.match(u.matchPattern);
          if (!n) return null;
          var r = n[0],
            a = t.match(u.parsePattern);
          if (!a) return null;
          var i = u.valueCallback ? u.valueCallback(a[0]) : a[0];
          return {
            value: (i = e.valueCallback ? e.valueCallback(i) : i),
            rest: t.slice(r.length),
          };
        }),
      era: d({
        matchPatterns: {
          narrow: /^(b|a)/i,
          abbreviated:
            /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
          wide: /^(before christ|before common era|anno domini|common era)/i,
        },
        defaultMatchWidth: "wide",
        parsePatterns: { any: [/^b/i, /^(a|c)/i] },
        defaultParseWidth: "any",
      }),
      quarter: d({
        matchPatterns: {
          narrow: /^[1234]/i,
          abbreviated: /^q[1234]/i,
          wide: /^[1234](th|st|nd|rd)? quarter/i,
        },
        defaultMatchWidth: "wide",
        parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
        defaultParseWidth: "any",
        valueCallback: function (t) {
          return t + 1;
        },
      }),
      month: d({
        matchPatterns: {
          narrow: /^[jfmasond]/i,
          abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
          wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
        },
        defaultMatchWidth: "wide",
        parsePatterns: {
          narrow: [
            /^j/i,
            /^f/i,
            /^m/i,
            /^a/i,
            /^m/i,
            /^j/i,
            /^j/i,
            /^a/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
          ],
          any: [
            /^ja/i,
            /^f/i,
            /^mar/i,
            /^ap/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^au/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
          ],
        },
        defaultParseWidth: "any",
      }),
      day: d({
        matchPatterns: {
          narrow: /^[smtwf]/i,
          short: /^(su|mo|tu|we|th|fr|sa)/i,
          abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
          wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
        },
        defaultMatchWidth: "wide",
        parsePatterns: {
          narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
          any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
        },
        defaultParseWidth: "any",
      }),
      dayPeriod: d({
        matchPatterns: {
          narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
          any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
        },
        defaultMatchWidth: "any",
        parsePatterns: {
          any: {
            am: /^a/i,
            pm: /^p/i,
            midnight: /^mi/i,
            noon: /^no/i,
            morning: /morning/i,
            afternoon: /afternoon/i,
            evening: /evening/i,
            night: /night/i,
          },
        },
        defaultParseWidth: "any",
      }),
    },
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
  function h(t) {
    if (null === t || !0 === t || !1 === t) return NaN;
    var e = Number(t);
    return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
  }
  function v(t, e) {
    if (e.length < t)
      throw new TypeError(
        t +
          " argument" +
          (t > 1 ? "s" : "") +
          " required, but only " +
          e.length +
          " present",
      );
  }
  function m(t) {
    v(1, arguments);
    var e = Object.prototype.toString.call(t);
    return t instanceof Date || ("object" === n(t) && "[object Date]" === e)
      ? new Date(t.getTime())
      : "number" == typeof t || "[object Number]" === e
      ? new Date(t)
      : (("string" != typeof t && "[object String]" !== e) ||
          "undefined" == typeof console ||
          (console.warn(
            "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments",
          ),
          console.warn(new Error().stack)),
        new Date(NaN));
  }
  function y(t, e) {
    return (
      v(2, arguments),
      (function (t, e) {
        v(2, arguments);
        var n = m(t).getTime(),
          r = h(e);
        return new Date(n + r);
      })(t, -h(e))
    );
  }
  function w(t, e) {
    if (null == t)
      throw new TypeError(
        "assign requires that input parameter not be null or undefined",
      );
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t;
  }
  var g = function (t, e) {
      switch (t) {
        case "P":
          return e.date({ width: "short" });
        case "PP":
          return e.date({ width: "medium" });
        case "PPP":
          return e.date({ width: "long" });
        default:
          return e.date({ width: "full" });
      }
    },
    p = function (t, e) {
      switch (t) {
        case "p":
          return e.time({ width: "short" });
        case "pp":
          return e.time({ width: "medium" });
        case "ppp":
          return e.time({ width: "long" });
        default:
          return e.time({ width: "full" });
      }
    },
    b = {
      p,
      P: function (t, e) {
        var n,
          r = t.match(/(P+)(p+)?/) || [],
          a = r[1],
          i = r[2];
        if (!i) return g(t, e);
        switch (a) {
          case "P":
            n = e.dateTime({ width: "short" });
            break;
          case "PP":
            n = e.dateTime({ width: "medium" });
            break;
          case "PPP":
            n = e.dateTime({ width: "long" });
            break;
          default:
            n = e.dateTime({ width: "full" });
        }
        return n.replace("{{date}}", g(a, e)).replace("{{time}}", p(i, e));
      },
    };
  const T = b;
  function k(t) {
    var e = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds(),
      ),
    );
    return e.setUTCFullYear(t.getFullYear()), t.getTime() - e.getTime();
  }
  var C = ["D", "DD"],
    x = ["YY", "YYYY"];
  function D(t) {
    return -1 !== C.indexOf(t);
  }
  function M(t) {
    return -1 !== x.indexOf(t);
  }
  function U(t, e, n) {
    if ("YYYY" === t)
      throw new RangeError(
        "Use `yyyy` instead of `YYYY` (in `"
          .concat(e, "`) for formatting years to the input `")
          .concat(
            n,
            "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md",
          ),
      );
    if ("YY" === t)
      throw new RangeError(
        "Use `yy` instead of `YY` (in `"
          .concat(e, "`) for formatting years to the input `")
          .concat(
            n,
            "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md",
          ),
      );
    if ("D" === t)
      throw new RangeError(
        "Use `d` instead of `D` (in `"
          .concat(e, "`) for formatting days of the month to the input `")
          .concat(
            n,
            "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md",
          ),
      );
    if ("DD" === t)
      throw new RangeError(
        "Use `dd` instead of `DD` (in `"
          .concat(e, "`) for formatting days of the month to the input `")
          .concat(
            n,
            "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md",
          ),
      );
  }
  function E(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return t;
  }
  function S(t, e) {
    return (
      (S = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          }),
      S(t, e)
    );
  }
  function P(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError("Super expression must either be null or a function");
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      e && S(t, e);
  }
  function q(t) {
    return (
      (q = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }),
      q(t)
    );
  }
  function N(t) {
    var e = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var r,
        a = q(t);
      if (e) {
        var i = q(this).constructor;
        r = Reflect.construct(a, arguments, i);
      } else r = a.apply(this, arguments);
      return (function (t, e) {
        if (e && ("object" === n(e) || "function" == typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            "Derived constructors may only return object or undefined",
          );
        return E(t);
      })(this, r);
    };
  }
  function Y(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function O(t) {
    var e = (function (t, e) {
      if ("object" !== n(t) || null === t) return t;
      var r = t[Symbol.toPrimitive];
      if (void 0 !== r) {
        var a = r.call(t, "string");
        if ("object" !== n(a)) return a;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(t);
    })(t);
    return "symbol" === n(e) ? e : String(e);
  }
  function L(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(t, O(r.key), r);
    }
  }
  function A(t, e, n) {
    return (
      e && L(t.prototype, e),
      n && L(t, n),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      t
    );
  }
  function H(t, e, n) {
    return (
      (e = O(e)) in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  var j = (function () {
      function t() {
        Y(this, t), H(this, "priority", void 0), H(this, "subPriority", 0);
      }
      return (
        A(t, [
          {
            key: "validate",
            value: function (t, e) {
              return !0;
            },
          },
        ]),
        t
      );
    })(),
    W = (function (t) {
      P(n, t);
      var e = N(n);
      function n(t, r, a, i, o) {
        var u;
        return (
          Y(this, n),
          ((u = e.call(this)).value = t),
          (u.validateValue = r),
          (u.setValue = a),
          (u.priority = i),
          o && (u.subPriority = o),
          u
        );
      }
      return (
        A(n, [
          {
            key: "validate",
            value: function (t, e) {
              return this.validateValue(t, this.value, e);
            },
          },
          {
            key: "set",
            value: function (t, e, n) {
              return this.setValue(t, e, this.value, n);
            },
          },
        ]),
        n
      );
    })(j),
    I = (function (t) {
      P(n, t);
      var e = N(n);
      function n() {
        var t;
        Y(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 10),
          H(E(t), "subPriority", -1),
          t
        );
      }
      return (
        A(n, [
          {
            key: "set",
            value: function (t, e) {
              if (e.timestampIsSet) return t;
              var n = new Date(0);
              return (
                n.setFullYear(
                  t.getUTCFullYear(),
                  t.getUTCMonth(),
                  t.getUTCDate(),
                ),
                n.setHours(
                  t.getUTCHours(),
                  t.getUTCMinutes(),
                  t.getUTCSeconds(),
                  t.getUTCMilliseconds(),
                ),
                n
              );
            },
          },
        ]),
        n
      );
    })(j),
    Q = (function () {
      function t() {
        Y(this, t),
          H(this, "incompatibleTokens", void 0),
          H(this, "priority", void 0),
          H(this, "subPriority", void 0);
      }
      return (
        A(t, [
          {
            key: "run",
            value: function (t, e, n, r) {
              var a = this.parse(t, e, n, r);
              return a
                ? {
                    setter: new W(
                      a.value,
                      this.validate,
                      this.set,
                      this.priority,
                      this.subPriority,
                    ),
                    rest: a.rest,
                  }
                : null;
            },
          },
          {
            key: "validate",
            value: function (t, e, n) {
              return !0;
            },
          },
        ]),
        t
      );
    })(),
    R = (function (t) {
      P(n, t);
      var e = N(n);
      function n() {
        var t;
        Y(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 140),
          H(E(t), "incompatibleTokens", ["R", "u", "t", "T"]),
          t
        );
      }
      return (
        A(n, [
          {
            key: "parse",
            value: function (t, e, n) {
              switch (e) {
                case "G":
                case "GG":
                case "GGG":
                  return (
                    n.era(t, { width: "abbreviated" }) ||
                    n.era(t, { width: "narrow" })
                  );
                case "GGGGG":
                  return n.era(t, { width: "narrow" });
                default:
                  return (
                    n.era(t, { width: "wide" }) ||
                    n.era(t, { width: "abbreviated" }) ||
                    n.era(t, { width: "narrow" })
                  );
              }
            },
          },
          {
            key: "set",
            value: function (t, e, n) {
              return (
                (e.era = n),
                t.setUTCFullYear(n, 0, 1),
                t.setUTCHours(0, 0, 0, 0),
                t
              );
            },
          },
        ]),
        n
      );
    })(Q),
    F = (Math.pow(10, 8), /^(1[0-2]|0?\d)/),
    B = /^(3[0-1]|[0-2]?\d)/,
    G = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    X = /^(5[0-3]|[0-4]?\d)/,
    z = /^(2[0-3]|[0-1]?\d)/,
    $ = /^(2[0-4]|[0-1]?\d)/,
    J = /^(1[0-1]|0?\d)/,
    _ = /^(1[0-2]|0?\d)/,
    K = /^[0-5]?\d/,
    V = /^[0-5]?\d/,
    Z = /^\d/,
    tt = /^\d{1,2}/,
    et = /^\d{1,3}/,
    nt = /^\d{1,4}/,
    rt = /^-?\d+/,
    at = /^-?\d/,
    it = /^-?\d{1,2}/,
    ot = /^-?\d{1,3}/,
    ut = /^-?\d{1,4}/,
    ct = /^([+-])(\d{2})(\d{2})?|Z/,
    st = /^([+-])(\d{2})(\d{2})|Z/,
    lt = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    dt = /^([+-])(\d{2}):(\d{2})|Z/,
    ft = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;
  function ht(t, e) {
    return t ? { value: e(t.value), rest: t.rest } : t;
  }
  function vt(t, e) {
    var n = e.match(t);
    return n ? { value: parseInt(n[0], 10), rest: e.slice(n[0].length) } : null;
  }
  function mt(t, e) {
    var n = e.match(t);
    return n
      ? "Z" === n[0]
        ? { value: 0, rest: e.slice(1) }
        : {
            value:
              ("+" === n[1] ? 1 : -1) *
              (36e5 * (n[2] ? parseInt(n[2], 10) : 0) +
                6e4 * (n[3] ? parseInt(n[3], 10) : 0) +
                1e3 * (n[5] ? parseInt(n[5], 10) : 0)),
            rest: e.slice(n[0].length),
          }
      : null;
  }
  function yt(t) {
    return vt(rt, t);
  }
  function wt(t, e) {
    switch (t) {
      case 1:
        return vt(Z, e);
      case 2:
        return vt(tt, e);
      case 3:
        return vt(et, e);
      case 4:
        return vt(nt, e);
      default:
        return vt(new RegExp("^\\d{1," + t + "}"), e);
    }
  }
  function gt(t, e) {
    switch (t) {
      case 1:
        return vt(at, e);
      case 2:
        return vt(it, e);
      case 3:
        return vt(ot, e);
      case 4:
        return vt(ut, e);
      default:
        return vt(new RegExp("^-?\\d{1," + t + "}"), e);
    }
  }
  function pt(t) {
    switch (t) {
      case "morning":
        return 4;
      case "evening":
        return 17;
      case "pm":
      case "noon":
      case "afternoon":
        return 12;
      default:
        return 0;
    }
  }
  function bt(t, e) {
    var n,
      r = e > 0,
      a = r ? e : 1 - e;
    if (a <= 50) n = t || 100;
    else {
      var i = a + 50;
      n = t + 100 * Math.floor(i / 100) - (t >= i % 100 ? 100 : 0);
    }
    return r ? n : 1 - n;
  }
  function Tt(t) {
    return t % 400 == 0 || (t % 4 == 0 && t % 100 != 0);
  }
  var kt = (function (t) {
      P(n, t);
      var e = N(n);
      function n() {
        var t;
        Y(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 130),
          H(E(t), "incompatibleTokens", [
            "Y",
            "R",
            "u",
            "w",
            "I",
            "i",
            "e",
            "c",
            "t",
            "T",
          ]),
          t
        );
      }
      return (
        A(n, [
          {
            key: "parse",
            value: function (t, e, n) {
              var r = function (t) {
                return { year: t, isTwoDigitYear: "yy" === e };
              };
              switch (e) {
                case "y":
                  return ht(wt(4, t), r);
                case "yo":
                  return ht(n.ordinalNumber(t, { unit: "year" }), r);
                default:
                  return ht(wt(e.length, t), r);
              }
            },
          },
          {
            key: "validate",
            value: function (t, e) {
              return e.isTwoDigitYear || e.year > 0;
            },
          },
          {
            key: "set",
            value: function (t, e, n) {
              var r = t.getUTCFullYear();
              if (n.isTwoDigitYear) {
                var a = bt(n.year, r);
                return t.setUTCFullYear(a, 0, 1), t.setUTCHours(0, 0, 0, 0), t;
              }
              var i = "era" in e && 1 !== e.era ? 1 - n.year : n.year;
              return t.setUTCFullYear(i, 0, 1), t.setUTCHours(0, 0, 0, 0), t;
            },
          },
        ]),
        n
      );
    })(Q),
    Ct = {};
  function xt() {
    return Ct;
  }
  function Dt(t, e) {
    var n, r, a, i, o, u, c, s;
    v(1, arguments);
    var l = xt(),
      d = h(
        null !==
          (n =
            null !==
              (r =
                null !==
                  (a =
                    null !== (i = null == e ? void 0 : e.weekStartsOn) &&
                    void 0 !== i
                      ? i
                      : null == e ||
                        null === (o = e.locale) ||
                        void 0 === o ||
                        null === (u = o.options) ||
                        void 0 === u
                      ? void 0
                      : u.weekStartsOn) && void 0 !== a
                  ? a
                  : l.weekStartsOn) && void 0 !== r
              ? r
              : null === (c = l.locale) ||
                void 0 === c ||
                null === (s = c.options) ||
                void 0 === s
              ? void 0
              : s.weekStartsOn) && void 0 !== n
          ? n
          : 0,
      );
    if (!(d >= 0 && d <= 6))
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var f = m(t),
      y = f.getUTCDay(),
      w = (y < d ? 7 : 0) + y - d;
    return f.setUTCDate(f.getUTCDate() - w), f.setUTCHours(0, 0, 0, 0), f;
  }
  function Mt(t, e) {
    var n, r, a, i, o, u, c, s;
    v(1, arguments);
    var l = m(t),
      d = l.getUTCFullYear(),
      f = xt(),
      y = h(
        null !==
          (n =
            null !==
              (r =
                null !==
                  (a =
                    null !==
                      (i = null == e ? void 0 : e.firstWeekContainsDate) &&
                    void 0 !== i
                      ? i
                      : null == e ||
                        null === (o = e.locale) ||
                        void 0 === o ||
                        null === (u = o.options) ||
                        void 0 === u
                      ? void 0
                      : u.firstWeekContainsDate) && void 0 !== a
                  ? a
                  : f.firstWeekContainsDate) && void 0 !== r
              ? r
              : null === (c = f.locale) ||
                void 0 === c ||
                null === (s = c.options) ||
                void 0 === s
              ? void 0
              : s.firstWeekContainsDate) && void 0 !== n
          ? n
          : 1,
      );
    if (!(y >= 1 && y <= 7))
      throw new RangeError(
        "firstWeekContainsDate must be between 1 and 7 inclusively",
      );
    var w = new Date(0);
    w.setUTCFullYear(d + 1, 0, y), w.setUTCHours(0, 0, 0, 0);
    var g = Dt(w, e),
      p = new Date(0);
    p.setUTCFullYear(d, 0, y), p.setUTCHours(0, 0, 0, 0);
    var b = Dt(p, e);
    return l.getTime() >= g.getTime()
      ? d + 1
      : l.getTime() >= b.getTime()
      ? d
      : d - 1;
  }
  var Ut = (function (t) {
    P(n, t);
    var e = N(n);
    function n() {
      var t;
      Y(this, n);
      for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
        a[i] = arguments[i];
      return (
        H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 130),
        H(E(t), "incompatibleTokens", [
          "y",
          "R",
          "u",
          "Q",
          "q",
          "M",
          "L",
          "I",
          "d",
          "D",
          "i",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      A(n, [
        {
          key: "parse",
          value: function (t, e, n) {
            var r = function (t) {
              return { year: t, isTwoDigitYear: "YY" === e };
            };
            switch (e) {
              case "Y":
                return ht(wt(4, t), r);
              case "Yo":
                return ht(n.ordinalNumber(t, { unit: "year" }), r);
              default:
                return ht(wt(e.length, t), r);
            }
          },
        },
        {
          key: "validate",
          value: function (t, e) {
            return e.isTwoDigitYear || e.year > 0;
          },
        },
        {
          key: "set",
          value: function (t, e, n, r) {
            var a = Mt(t, r);
            if (n.isTwoDigitYear) {
              var i = bt(n.year, a);
              return (
                t.setUTCFullYear(i, 0, r.firstWeekContainsDate),
                t.setUTCHours(0, 0, 0, 0),
                Dt(t, r)
              );
            }
            var o = "era" in e && 1 !== e.era ? 1 - n.year : n.year;
            return (
              t.setUTCFullYear(o, 0, r.firstWeekContainsDate),
              t.setUTCHours(0, 0, 0, 0),
              Dt(t, r)
            );
          },
        },
      ]),
      n
    );
  })(Q);
  function Et(t) {
    v(1, arguments);
    var e = m(t),
      n = e.getUTCDay(),
      r = (n < 1 ? 7 : 0) + n - 1;
    return e.setUTCDate(e.getUTCDate() - r), e.setUTCHours(0, 0, 0, 0), e;
  }
  var St = (function (t) {
      P(n, t);
      var e = N(n);
      function n() {
        var t;
        Y(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 130),
          H(E(t), "incompatibleTokens", [
            "G",
            "y",
            "Y",
            "u",
            "Q",
            "q",
            "M",
            "L",
            "w",
            "d",
            "D",
            "e",
            "c",
            "t",
            "T",
          ]),
          t
        );
      }
      return (
        A(n, [
          {
            key: "parse",
            value: function (t, e) {
              return gt("R" === e ? 4 : e.length, t);
            },
          },
          {
            key: "set",
            value: function (t, e, n) {
              var r = new Date(0);
              return (
                r.setUTCFullYear(n, 0, 4), r.setUTCHours(0, 0, 0, 0), Et(r)
              );
            },
          },
        ]),
        n
      );
    })(Q),
    Pt = (function (t) {
      P(n, t);
      var e = N(n);
      function n() {
        var t;
        Y(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 130),
          H(E(t), "incompatibleTokens", [
            "G",
            "y",
            "Y",
            "R",
            "w",
            "I",
            "i",
            "e",
            "c",
            "t",
            "T",
          ]),
          t
        );
      }
      return (
        A(n, [
          {
            key: "parse",
            value: function (t, e) {
              return gt("u" === e ? 4 : e.length, t);
            },
          },
          {
            key: "set",
            value: function (t, e, n) {
              return t.setUTCFullYear(n, 0, 1), t.setUTCHours(0, 0, 0, 0), t;
            },
          },
        ]),
        n
      );
    })(Q),
    qt = (function (t) {
      P(n, t);
      var e = N(n);
      function n() {
        var t;
        Y(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 120),
          H(E(t), "incompatibleTokens", [
            "Y",
            "R",
            "q",
            "M",
            "L",
            "w",
            "I",
            "d",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T",
          ]),
          t
        );
      }
      return (
        A(n, [
          {
            key: "parse",
            value: function (t, e, n) {
              switch (e) {
                case "Q":
                case "QQ":
                  return wt(e.length, t);
                case "Qo":
                  return n.ordinalNumber(t, { unit: "quarter" });
                case "QQQ":
                  return (
                    n.quarter(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    n.quarter(t, { width: "narrow", context: "formatting" })
                  );
                case "QQQQQ":
                  return n.quarter(t, {
                    width: "narrow",
                    context: "formatting",
                  });
                default:
                  return (
                    n.quarter(t, { width: "wide", context: "formatting" }) ||
                    n.quarter(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    n.quarter(t, { width: "narrow", context: "formatting" })
                  );
              }
            },
          },
          {
            key: "validate",
            value: function (t, e) {
              return e >= 1 && e <= 4;
            },
          },
          {
            key: "set",
            value: function (t, e, n) {
              return (
                t.setUTCMonth(3 * (n - 1), 1), t.setUTCHours(0, 0, 0, 0), t
              );
            },
          },
        ]),
        n
      );
    })(Q),
    Nt = (function (t) {
      P(n, t);
      var e = N(n);
      function n() {
        var t;
        Y(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 120),
          H(E(t), "incompatibleTokens", [
            "Y",
            "R",
            "Q",
            "M",
            "L",
            "w",
            "I",
            "d",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T",
          ]),
          t
        );
      }
      return (
        A(n, [
          {
            key: "parse",
            value: function (t, e, n) {
              switch (e) {
                case "q":
                case "qq":
                  return wt(e.length, t);
                case "qo":
                  return n.ordinalNumber(t, { unit: "quarter" });
                case "qqq":
                  return (
                    n.quarter(t, {
                      width: "abbreviated",
                      context: "standalone",
                    }) ||
                    n.quarter(t, { width: "narrow", context: "standalone" })
                  );
                case "qqqqq":
                  return n.quarter(t, {
                    width: "narrow",
                    context: "standalone",
                  });
                default:
                  return (
                    n.quarter(t, { width: "wide", context: "standalone" }) ||
                    n.quarter(t, {
                      width: "abbreviated",
                      context: "standalone",
                    }) ||
                    n.quarter(t, { width: "narrow", context: "standalone" })
                  );
              }
            },
          },
          {
            key: "validate",
            value: function (t, e) {
              return e >= 1 && e <= 4;
            },
          },
          {
            key: "set",
            value: function (t, e, n) {
              return (
                t.setUTCMonth(3 * (n - 1), 1), t.setUTCHours(0, 0, 0, 0), t
              );
            },
          },
        ]),
        n
      );
    })(Q),
    Yt = (function (t) {
      P(n, t);
      var e = N(n);
      function n() {
        var t;
        Y(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          H(E((t = e.call.apply(e, [this].concat(a)))), "incompatibleTokens", [
            "Y",
            "R",
            "q",
            "Q",
            "L",
            "w",
            "I",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T",
          ]),
          H(E(t), "priority", 110),
          t
        );
      }
      return (
        A(n, [
          {
            key: "parse",
            value: function (t, e, n) {
              var r = function (t) {
                return t - 1;
              };
              switch (e) {
                case "M":
                  return ht(vt(F, t), r);
                case "MM":
                  return ht(wt(2, t), r);
                case "Mo":
                  return ht(n.ordinalNumber(t, { unit: "month" }), r);
                case "MMM":
                  return (
                    n.month(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) || n.month(t, { width: "narrow", context: "formatting" })
                  );
                case "MMMMM":
                  return n.month(t, { width: "narrow", context: "formatting" });
                default:
                  return (
                    n.month(t, { width: "wide", context: "formatting" }) ||
                    n.month(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    n.month(t, { width: "narrow", context: "formatting" })
                  );
              }
            },
          },
          {
            key: "validate",
            value: function (t, e) {
              return e >= 0 && e <= 11;
            },
          },
          {
            key: "set",
            value: function (t, e, n) {
              return t.setUTCMonth(n, 1), t.setUTCHours(0, 0, 0, 0), t;
            },
          },
        ]),
        n
      );
    })(Q),
    Ot = (function (t) {
      P(n, t);
      var e = N(n);
      function n() {
        var t;
        Y(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 110),
          H(E(t), "incompatibleTokens", [
            "Y",
            "R",
            "q",
            "Q",
            "M",
            "w",
            "I",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T",
          ]),
          t
        );
      }
      return (
        A(n, [
          {
            key: "parse",
            value: function (t, e, n) {
              var r = function (t) {
                return t - 1;
              };
              switch (e) {
                case "L":
                  return ht(vt(F, t), r);
                case "LL":
                  return ht(wt(2, t), r);
                case "Lo":
                  return ht(n.ordinalNumber(t, { unit: "month" }), r);
                case "LLL":
                  return (
                    n.month(t, {
                      width: "abbreviated",
                      context: "standalone",
                    }) || n.month(t, { width: "narrow", context: "standalone" })
                  );
                case "LLLLL":
                  return n.month(t, { width: "narrow", context: "standalone" });
                default:
                  return (
                    n.month(t, { width: "wide", context: "standalone" }) ||
                    n.month(t, {
                      width: "abbreviated",
                      context: "standalone",
                    }) ||
                    n.month(t, { width: "narrow", context: "standalone" })
                  );
              }
            },
          },
          {
            key: "validate",
            value: function (t, e) {
              return e >= 0 && e <= 11;
            },
          },
          {
            key: "set",
            value: function (t, e, n) {
              return t.setUTCMonth(n, 1), t.setUTCHours(0, 0, 0, 0), t;
            },
          },
        ]),
        n
      );
    })(Q);
  function Lt(t, e) {
    v(1, arguments);
    var n = m(t),
      r =
        Dt(n, e).getTime() -
        (function (t, e) {
          var n, r, a, i, o, u, c, s;
          v(1, arguments);
          var l = xt(),
            d = h(
              null !==
                (n =
                  null !==
                    (r =
                      null !==
                        (a =
                          null !==
                            (i =
                              null == e ? void 0 : e.firstWeekContainsDate) &&
                          void 0 !== i
                            ? i
                            : null == e ||
                              null === (o = e.locale) ||
                              void 0 === o ||
                              null === (u = o.options) ||
                              void 0 === u
                            ? void 0
                            : u.firstWeekContainsDate) && void 0 !== a
                        ? a
                        : l.firstWeekContainsDate) && void 0 !== r
                    ? r
                    : null === (c = l.locale) ||
                      void 0 === c ||
                      null === (s = c.options) ||
                      void 0 === s
                    ? void 0
                    : s.firstWeekContainsDate) && void 0 !== n
                ? n
                : 1,
            ),
            f = Mt(t, e),
            m = new Date(0);
          return m.setUTCFullYear(f, 0, d), m.setUTCHours(0, 0, 0, 0), Dt(m, e);
        })(n, e).getTime();
    return Math.round(r / 6048e5) + 1;
  }
  var At = (function (t) {
    P(n, t);
    var e = N(n);
    function n() {
      var t;
      Y(this, n);
      for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
        a[i] = arguments[i];
      return (
        H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 100),
        H(E(t), "incompatibleTokens", [
          "y",
          "R",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "I",
          "d",
          "D",
          "i",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      A(n, [
        {
          key: "parse",
          value: function (t, e, n) {
            switch (e) {
              case "w":
                return vt(X, t);
              case "wo":
                return n.ordinalNumber(t, { unit: "week" });
              default:
                return wt(e.length, t);
            }
          },
        },
        {
          key: "validate",
          value: function (t, e) {
            return e >= 1 && e <= 53;
          },
        },
        {
          key: "set",
          value: function (t, e, n, r) {
            return Dt(
              (function (t, e, n) {
                v(2, arguments);
                var r = m(t),
                  a = h(e),
                  i = Lt(r, n) - a;
                return r.setUTCDate(r.getUTCDate() - 7 * i), r;
              })(t, n, r),
              r,
            );
          },
        },
      ]),
      n
    );
  })(Q);
  function Ht(t) {
    v(1, arguments);
    var e = m(t),
      n = e.getUTCFullYear(),
      r = new Date(0);
    r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
    var a = Et(r),
      i = new Date(0);
    i.setUTCFullYear(n, 0, 4), i.setUTCHours(0, 0, 0, 0);
    var o = Et(i);
    return e.getTime() >= a.getTime()
      ? n + 1
      : e.getTime() >= o.getTime()
      ? n
      : n - 1;
  }
  function jt(t) {
    v(1, arguments);
    var e = m(t),
      n =
        Et(e).getTime() -
        (function (t) {
          v(1, arguments);
          var e = Ht(t),
            n = new Date(0);
          return n.setUTCFullYear(e, 0, 4), n.setUTCHours(0, 0, 0, 0), Et(n);
        })(e).getTime();
    return Math.round(n / 6048e5) + 1;
  }
  var Wt = (function (t) {
      P(n, t);
      var e = N(n);
      function n() {
        var t;
        Y(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 100),
          H(E(t), "incompatibleTokens", [
            "y",
            "Y",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "w",
            "d",
            "D",
            "e",
            "c",
            "t",
            "T",
          ]),
          t
        );
      }
      return (
        A(n, [
          {
            key: "parse",
            value: function (t, e, n) {
              switch (e) {
                case "I":
                  return vt(X, t);
                case "Io":
                  return n.ordinalNumber(t, { unit: "week" });
                default:
                  return wt(e.length, t);
              }
            },
          },
          {
            key: "validate",
            value: function (t, e) {
              return e >= 1 && e <= 53;
            },
          },
          {
            key: "set",
            value: function (t, e, n) {
              return Et(
                (function (t, e) {
                  v(2, arguments);
                  var n = m(t),
                    r = h(e),
                    a = jt(n) - r;
                  return n.setUTCDate(n.getUTCDate() - 7 * a), n;
                })(t, n),
              );
            },
          },
        ]),
        n
      );
    })(Q),
    It = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    Qt = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    Rt = (function (t) {
      P(n, t);
      var e = N(n);
      function n() {
        var t;
        Y(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 90),
          H(E(t), "subPriority", 1),
          H(E(t), "incompatibleTokens", [
            "Y",
            "R",
            "q",
            "Q",
            "w",
            "I",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T",
          ]),
          t
        );
      }
      return (
        A(n, [
          {
            key: "parse",
            value: function (t, e, n) {
              switch (e) {
                case "d":
                  return vt(B, t);
                case "do":
                  return n.ordinalNumber(t, { unit: "date" });
                default:
                  return wt(e.length, t);
              }
            },
          },
          {
            key: "validate",
            value: function (t, e) {
              var n = Tt(t.getUTCFullYear()),
                r = t.getUTCMonth();
              return n ? e >= 1 && e <= Qt[r] : e >= 1 && e <= It[r];
            },
          },
          {
            key: "set",
            value: function (t, e, n) {
              return t.setUTCDate(n), t.setUTCHours(0, 0, 0, 0), t;
            },
          },
        ]),
        n
      );
    })(Q),
    Ft = (function (t) {
      P(n, t);
      var e = N(n);
      function n() {
        var t;
        Y(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 90),
          H(E(t), "subpriority", 1),
          H(E(t), "incompatibleTokens", [
            "Y",
            "R",
            "q",
            "Q",
            "M",
            "L",
            "w",
            "I",
            "d",
            "E",
            "i",
            "e",
            "c",
            "t",
            "T",
          ]),
          t
        );
      }
      return (
        A(n, [
          {
            key: "parse",
            value: function (t, e, n) {
              switch (e) {
                case "D":
                case "DD":
                  return vt(G, t);
                case "Do":
                  return n.ordinalNumber(t, { unit: "date" });
                default:
                  return wt(e.length, t);
              }
            },
          },
          {
            key: "validate",
            value: function (t, e) {
              return Tt(t.getUTCFullYear())
                ? e >= 1 && e <= 366
                : e >= 1 && e <= 365;
            },
          },
          {
            key: "set",
            value: function (t, e, n) {
              return t.setUTCMonth(0, n), t.setUTCHours(0, 0, 0, 0), t;
            },
          },
        ]),
        n
      );
    })(Q);
  function Bt(t, e, n) {
    var r, a, i, o, u, c, s, l;
    v(2, arguments);
    var d = xt(),
      f = h(
        null !==
          (r =
            null !==
              (a =
                null !==
                  (i =
                    null !== (o = null == n ? void 0 : n.weekStartsOn) &&
                    void 0 !== o
                      ? o
                      : null == n ||
                        null === (u = n.locale) ||
                        void 0 === u ||
                        null === (c = u.options) ||
                        void 0 === c
                      ? void 0
                      : c.weekStartsOn) && void 0 !== i
                  ? i
                  : d.weekStartsOn) && void 0 !== a
              ? a
              : null === (s = d.locale) ||
                void 0 === s ||
                null === (l = s.options) ||
                void 0 === l
              ? void 0
              : l.weekStartsOn) && void 0 !== r
          ? r
          : 0,
      );
    if (!(f >= 0 && f <= 6))
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var y = m(t),
      w = h(e),
      g = (((w % 7) + 7) % 7 < f ? 7 : 0) + w - y.getUTCDay();
    return y.setUTCDate(y.getUTCDate() + g), y;
  }
  var Gt = (function (t) {
      P(n, t);
      var e = N(n);
      function n() {
        var t;
        Y(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 90),
          H(E(t), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]),
          t
        );
      }
      return (
        A(n, [
          {
            key: "parse",
            value: function (t, e, n) {
              switch (e) {
                case "E":
                case "EE":
                case "EEE":
                  return (
                    n.day(t, { width: "abbreviated", context: "formatting" }) ||
                    n.day(t, { width: "short", context: "formatting" }) ||
                    n.day(t, { width: "narrow", context: "formatting" })
                  );
                case "EEEEE":
                  return n.day(t, { width: "narrow", context: "formatting" });
                case "EEEEEE":
                  return (
                    n.day(t, { width: "short", context: "formatting" }) ||
                    n.day(t, { width: "narrow", context: "formatting" })
                  );
                default:
                  return (
                    n.day(t, { width: "wide", context: "formatting" }) ||
                    n.day(t, { width: "abbreviated", context: "formatting" }) ||
                    n.day(t, { width: "short", context: "formatting" }) ||
                    n.day(t, { width: "narrow", context: "formatting" })
                  );
              }
            },
          },
          {
            key: "validate",
            value: function (t, e) {
              return e >= 0 && e <= 6;
            },
          },
          {
            key: "set",
            value: function (t, e, n, r) {
              return (t = Bt(t, n, r)).setUTCHours(0, 0, 0, 0), t;
            },
          },
        ]),
        n
      );
    })(Q),
    Xt = (function (t) {
      P(n, t);
      var e = N(n);
      function n() {
        var t;
        Y(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 90),
          H(E(t), "incompatibleTokens", [
            "y",
            "R",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "E",
            "i",
            "c",
            "t",
            "T",
          ]),
          t
        );
      }
      return (
        A(n, [
          {
            key: "parse",
            value: function (t, e, n, r) {
              var a = function (t) {
                var e = 7 * Math.floor((t - 1) / 7);
                return ((t + r.weekStartsOn + 6) % 7) + e;
              };
              switch (e) {
                case "e":
                case "ee":
                  return ht(wt(e.length, t), a);
                case "eo":
                  return ht(n.ordinalNumber(t, { unit: "day" }), a);
                case "eee":
                  return (
                    n.day(t, { width: "abbreviated", context: "formatting" }) ||
                    n.day(t, { width: "short", context: "formatting" }) ||
                    n.day(t, { width: "narrow", context: "formatting" })
                  );
                case "eeeee":
                  return n.day(t, { width: "narrow", context: "formatting" });
                case "eeeeee":
                  return (
                    n.day(t, { width: "short", context: "formatting" }) ||
                    n.day(t, { width: "narrow", context: "formatting" })
                  );
                default:
                  return (
                    n.day(t, { width: "wide", context: "formatting" }) ||
                    n.day(t, { width: "abbreviated", context: "formatting" }) ||
                    n.day(t, { width: "short", context: "formatting" }) ||
                    n.day(t, { width: "narrow", context: "formatting" })
                  );
              }
            },
          },
          {
            key: "validate",
            value: function (t, e) {
              return e >= 0 && e <= 6;
            },
          },
          {
            key: "set",
            value: function (t, e, n, r) {
              return (t = Bt(t, n, r)).setUTCHours(0, 0, 0, 0), t;
            },
          },
        ]),
        n
      );
    })(Q),
    zt = (function (t) {
      P(n, t);
      var e = N(n);
      function n() {
        var t;
        Y(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 90),
          H(E(t), "incompatibleTokens", [
            "y",
            "R",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "E",
            "i",
            "e",
            "t",
            "T",
          ]),
          t
        );
      }
      return (
        A(n, [
          {
            key: "parse",
            value: function (t, e, n, r) {
              var a = function (t) {
                var e = 7 * Math.floor((t - 1) / 7);
                return ((t + r.weekStartsOn + 6) % 7) + e;
              };
              switch (e) {
                case "c":
                case "cc":
                  return ht(wt(e.length, t), a);
                case "co":
                  return ht(n.ordinalNumber(t, { unit: "day" }), a);
                case "ccc":
                  return (
                    n.day(t, { width: "abbreviated", context: "standalone" }) ||
                    n.day(t, { width: "short", context: "standalone" }) ||
                    n.day(t, { width: "narrow", context: "standalone" })
                  );
                case "ccccc":
                  return n.day(t, { width: "narrow", context: "standalone" });
                case "cccccc":
                  return (
                    n.day(t, { width: "short", context: "standalone" }) ||
                    n.day(t, { width: "narrow", context: "standalone" })
                  );
                default:
                  return (
                    n.day(t, { width: "wide", context: "standalone" }) ||
                    n.day(t, { width: "abbreviated", context: "standalone" }) ||
                    n.day(t, { width: "short", context: "standalone" }) ||
                    n.day(t, { width: "narrow", context: "standalone" })
                  );
              }
            },
          },
          {
            key: "validate",
            value: function (t, e) {
              return e >= 0 && e <= 6;
            },
          },
          {
            key: "set",
            value: function (t, e, n, r) {
              return (t = Bt(t, n, r)).setUTCHours(0, 0, 0, 0), t;
            },
          },
        ]),
        n
      );
    })(Q),
    $t = (function (t) {
      P(n, t);
      var e = N(n);
      function n() {
        var t;
        Y(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 90),
          H(E(t), "incompatibleTokens", [
            "y",
            "Y",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "w",
            "d",
            "D",
            "E",
            "e",
            "c",
            "t",
            "T",
          ]),
          t
        );
      }
      return (
        A(n, [
          {
            key: "parse",
            value: function (t, e, n) {
              var r = function (t) {
                return 0 === t ? 7 : t;
              };
              switch (e) {
                case "i":
                case "ii":
                  return wt(e.length, t);
                case "io":
                  return n.ordinalNumber(t, { unit: "day" });
                case "iii":
                  return ht(
                    n.day(t, { width: "abbreviated", context: "formatting" }) ||
                      n.day(t, { width: "short", context: "formatting" }) ||
                      n.day(t, { width: "narrow", context: "formatting" }),
                    r,
                  );
                case "iiiii":
                  return ht(
                    n.day(t, { width: "narrow", context: "formatting" }),
                    r,
                  );
                case "iiiiii":
                  return ht(
                    n.day(t, { width: "short", context: "formatting" }) ||
                      n.day(t, { width: "narrow", context: "formatting" }),
                    r,
                  );
                default:
                  return ht(
                    n.day(t, { width: "wide", context: "formatting" }) ||
                      n.day(t, {
                        width: "abbreviated",
                        context: "formatting",
                      }) ||
                      n.day(t, { width: "short", context: "formatting" }) ||
                      n.day(t, { width: "narrow", context: "formatting" }),
                    r,
                  );
              }
            },
          },
          {
            key: "validate",
            value: function (t, e) {
              return e >= 1 && e <= 7;
            },
          },
          {
            key: "set",
            value: function (t, e, n) {
              return (
                (t = (function (t, e) {
                  v(2, arguments);
                  var n = h(e);
                  n % 7 == 0 && (n -= 7);
                  var r = m(t),
                    a = (((n % 7) + 7) % 7 < 1 ? 7 : 0) + n - r.getUTCDay();
                  return r.setUTCDate(r.getUTCDate() + a), r;
                })(t, n)),
                t.setUTCHours(0, 0, 0, 0),
                t
              );
            },
          },
        ]),
        n
      );
    })(Q),
    Jt = (function (t) {
      P(n, t);
      var e = N(n);
      function n() {
        var t;
        Y(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 80),
          H(E(t), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]),
          t
        );
      }
      return (
        A(n, [
          {
            key: "parse",
            value: function (t, e, n) {
              switch (e) {
                case "a":
                case "aa":
                case "aaa":
                  return (
                    n.dayPeriod(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    n.dayPeriod(t, { width: "narrow", context: "formatting" })
                  );
                case "aaaaa":
                  return n.dayPeriod(t, {
                    width: "narrow",
                    context: "formatting",
                  });
                default:
                  return (
                    n.dayPeriod(t, { width: "wide", context: "formatting" }) ||
                    n.dayPeriod(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    n.dayPeriod(t, { width: "narrow", context: "formatting" })
                  );
              }
            },
          },
          {
            key: "set",
            value: function (t, e, n) {
              return t.setUTCHours(pt(n), 0, 0, 0), t;
            },
          },
        ]),
        n
      );
    })(Q),
    _t = (function (t) {
      P(n, t);
      var e = N(n);
      function n() {
        var t;
        Y(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 80),
          H(E(t), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]),
          t
        );
      }
      return (
        A(n, [
          {
            key: "parse",
            value: function (t, e, n) {
              switch (e) {
                case "b":
                case "bb":
                case "bbb":
                  return (
                    n.dayPeriod(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    n.dayPeriod(t, { width: "narrow", context: "formatting" })
                  );
                case "bbbbb":
                  return n.dayPeriod(t, {
                    width: "narrow",
                    context: "formatting",
                  });
                default:
                  return (
                    n.dayPeriod(t, { width: "wide", context: "formatting" }) ||
                    n.dayPeriod(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    n.dayPeriod(t, { width: "narrow", context: "formatting" })
                  );
              }
            },
          },
          {
            key: "set",
            value: function (t, e, n) {
              return t.setUTCHours(pt(n), 0, 0, 0), t;
            },
          },
        ]),
        n
      );
    })(Q),
    Kt = (function (t) {
      P(n, t);
      var e = N(n);
      function n() {
        var t;
        Y(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 80),
          H(E(t), "incompatibleTokens", ["a", "b", "t", "T"]),
          t
        );
      }
      return (
        A(n, [
          {
            key: "parse",
            value: function (t, e, n) {
              switch (e) {
                case "B":
                case "BB":
                case "BBB":
                  return (
                    n.dayPeriod(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    n.dayPeriod(t, { width: "narrow", context: "formatting" })
                  );
                case "BBBBB":
                  return n.dayPeriod(t, {
                    width: "narrow",
                    context: "formatting",
                  });
                default:
                  return (
                    n.dayPeriod(t, { width: "wide", context: "formatting" }) ||
                    n.dayPeriod(t, {
                      width: "abbreviated",
                      context: "formatting",
                    }) ||
                    n.dayPeriod(t, { width: "narrow", context: "formatting" })
                  );
              }
            },
          },
          {
            key: "set",
            value: function (t, e, n) {
              return t.setUTCHours(pt(n), 0, 0, 0), t;
            },
          },
        ]),
        n
      );
    })(Q),
    Vt = (function (t) {
      P(n, t);
      var e = N(n);
      function n() {
        var t;
        Y(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 70),
          H(E(t), "incompatibleTokens", ["H", "K", "k", "t", "T"]),
          t
        );
      }
      return (
        A(n, [
          {
            key: "parse",
            value: function (t, e, n) {
              switch (e) {
                case "h":
                  return vt(_, t);
                case "ho":
                  return n.ordinalNumber(t, { unit: "hour" });
                default:
                  return wt(e.length, t);
              }
            },
          },
          {
            key: "validate",
            value: function (t, e) {
              return e >= 1 && e <= 12;
            },
          },
          {
            key: "set",
            value: function (t, e, n) {
              var r = t.getUTCHours() >= 12;
              return (
                r && n < 12
                  ? t.setUTCHours(n + 12, 0, 0, 0)
                  : r || 12 !== n
                  ? t.setUTCHours(n, 0, 0, 0)
                  : t.setUTCHours(0, 0, 0, 0),
                t
              );
            },
          },
        ]),
        n
      );
    })(Q),
    Zt = (function (t) {
      P(n, t);
      var e = N(n);
      function n() {
        var t;
        Y(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 70),
          H(E(t), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]),
          t
        );
      }
      return (
        A(n, [
          {
            key: "parse",
            value: function (t, e, n) {
              switch (e) {
                case "H":
                  return vt(z, t);
                case "Ho":
                  return n.ordinalNumber(t, { unit: "hour" });
                default:
                  return wt(e.length, t);
              }
            },
          },
          {
            key: "validate",
            value: function (t, e) {
              return e >= 0 && e <= 23;
            },
          },
          {
            key: "set",
            value: function (t, e, n) {
              return t.setUTCHours(n, 0, 0, 0), t;
            },
          },
        ]),
        n
      );
    })(Q),
    te = (function (t) {
      P(n, t);
      var e = N(n);
      function n() {
        var t;
        Y(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 70),
          H(E(t), "incompatibleTokens", ["h", "H", "k", "t", "T"]),
          t
        );
      }
      return (
        A(n, [
          {
            key: "parse",
            value: function (t, e, n) {
              switch (e) {
                case "K":
                  return vt(J, t);
                case "Ko":
                  return n.ordinalNumber(t, { unit: "hour" });
                default:
                  return wt(e.length, t);
              }
            },
          },
          {
            key: "validate",
            value: function (t, e) {
              return e >= 0 && e <= 11;
            },
          },
          {
            key: "set",
            value: function (t, e, n) {
              return (
                t.getUTCHours() >= 12 && n < 12
                  ? t.setUTCHours(n + 12, 0, 0, 0)
                  : t.setUTCHours(n, 0, 0, 0),
                t
              );
            },
          },
        ]),
        n
      );
    })(Q),
    ee = (function (t) {
      P(n, t);
      var e = N(n);
      function n() {
        var t;
        Y(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 70),
          H(E(t), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]),
          t
        );
      }
      return (
        A(n, [
          {
            key: "parse",
            value: function (t, e, n) {
              switch (e) {
                case "k":
                  return vt($, t);
                case "ko":
                  return n.ordinalNumber(t, { unit: "hour" });
                default:
                  return wt(e.length, t);
              }
            },
          },
          {
            key: "validate",
            value: function (t, e) {
              return e >= 1 && e <= 24;
            },
          },
          {
            key: "set",
            value: function (t, e, n) {
              var r = n <= 24 ? n % 24 : n;
              return t.setUTCHours(r, 0, 0, 0), t;
            },
          },
        ]),
        n
      );
    })(Q),
    ne = (function (t) {
      P(n, t);
      var e = N(n);
      function n() {
        var t;
        Y(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 60),
          H(E(t), "incompatibleTokens", ["t", "T"]),
          t
        );
      }
      return (
        A(n, [
          {
            key: "parse",
            value: function (t, e, n) {
              switch (e) {
                case "m":
                  return vt(K, t);
                case "mo":
                  return n.ordinalNumber(t, { unit: "minute" });
                default:
                  return wt(e.length, t);
              }
            },
          },
          {
            key: "validate",
            value: function (t, e) {
              return e >= 0 && e <= 59;
            },
          },
          {
            key: "set",
            value: function (t, e, n) {
              return t.setUTCMinutes(n, 0, 0), t;
            },
          },
        ]),
        n
      );
    })(Q),
    re = (function (t) {
      P(n, t);
      var e = N(n);
      function n() {
        var t;
        Y(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 50),
          H(E(t), "incompatibleTokens", ["t", "T"]),
          t
        );
      }
      return (
        A(n, [
          {
            key: "parse",
            value: function (t, e, n) {
              switch (e) {
                case "s":
                  return vt(V, t);
                case "so":
                  return n.ordinalNumber(t, { unit: "second" });
                default:
                  return wt(e.length, t);
              }
            },
          },
          {
            key: "validate",
            value: function (t, e) {
              return e >= 0 && e <= 59;
            },
          },
          {
            key: "set",
            value: function (t, e, n) {
              return t.setUTCSeconds(n, 0), t;
            },
          },
        ]),
        n
      );
    })(Q),
    ae = (function (t) {
      P(n, t);
      var e = N(n);
      function n() {
        var t;
        Y(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 30),
          H(E(t), "incompatibleTokens", ["t", "T"]),
          t
        );
      }
      return (
        A(n, [
          {
            key: "parse",
            value: function (t, e) {
              return ht(wt(e.length, t), function (t) {
                return Math.floor(t * Math.pow(10, 3 - e.length));
              });
            },
          },
          {
            key: "set",
            value: function (t, e, n) {
              return t.setUTCMilliseconds(n), t;
            },
          },
        ]),
        n
      );
    })(Q),
    ie = (function (t) {
      P(n, t);
      var e = N(n);
      function n() {
        var t;
        Y(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 10),
          H(E(t), "incompatibleTokens", ["t", "T", "x"]),
          t
        );
      }
      return (
        A(n, [
          {
            key: "parse",
            value: function (t, e) {
              switch (e) {
                case "X":
                  return mt(ct, t);
                case "XX":
                  return mt(st, t);
                case "XXXX":
                  return mt(lt, t);
                case "XXXXX":
                  return mt(ft, t);
                default:
                  return mt(dt, t);
              }
            },
          },
          {
            key: "set",
            value: function (t, e, n) {
              return e.timestampIsSet ? t : new Date(t.getTime() - n);
            },
          },
        ]),
        n
      );
    })(Q),
    oe = (function (t) {
      P(n, t);
      var e = N(n);
      function n() {
        var t;
        Y(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 10),
          H(E(t), "incompatibleTokens", ["t", "T", "X"]),
          t
        );
      }
      return (
        A(n, [
          {
            key: "parse",
            value: function (t, e) {
              switch (e) {
                case "x":
                  return mt(ct, t);
                case "xx":
                  return mt(st, t);
                case "xxxx":
                  return mt(lt, t);
                case "xxxxx":
                  return mt(ft, t);
                default:
                  return mt(dt, t);
              }
            },
          },
          {
            key: "set",
            value: function (t, e, n) {
              return e.timestampIsSet ? t : new Date(t.getTime() - n);
            },
          },
        ]),
        n
      );
    })(Q),
    ue = (function (t) {
      P(n, t);
      var e = N(n);
      function n() {
        var t;
        Y(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 40),
          H(E(t), "incompatibleTokens", "*"),
          t
        );
      }
      return (
        A(n, [
          {
            key: "parse",
            value: function (t) {
              return yt(t);
            },
          },
          {
            key: "set",
            value: function (t, e, n) {
              return [new Date(1e3 * n), { timestampIsSet: !0 }];
            },
          },
        ]),
        n
      );
    })(Q),
    ce = (function (t) {
      P(n, t);
      var e = N(n);
      function n() {
        var t;
        Y(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        return (
          H(E((t = e.call.apply(e, [this].concat(a)))), "priority", 20),
          H(E(t), "incompatibleTokens", "*"),
          t
        );
      }
      return (
        A(n, [
          {
            key: "parse",
            value: function (t) {
              return yt(t);
            },
          },
          {
            key: "set",
            value: function (t, e, n) {
              return [new Date(n), { timestampIsSet: !0 }];
            },
          },
        ]),
        n
      );
    })(Q),
    se = {
      G: new R(),
      y: new kt(),
      Y: new Ut(),
      R: new St(),
      u: new Pt(),
      Q: new qt(),
      q: new Nt(),
      M: new Yt(),
      L: new Ot(),
      w: new At(),
      I: new Wt(),
      d: new Rt(),
      D: new Ft(),
      E: new Gt(),
      e: new Xt(),
      c: new zt(),
      i: new $t(),
      a: new Jt(),
      b: new _t(),
      B: new Kt(),
      h: new Vt(),
      H: new Zt(),
      K: new te(),
      k: new ee(),
      m: new ne(),
      s: new re(),
      S: new ae(),
      X: new ie(),
      x: new oe(),
      t: new ue(),
      T: new ce(),
    },
    le = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    de = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    fe = /^'([^]*?)'?$/,
    he = /''/g,
    ve = /\S/,
    me = /[a-zA-Z]/;
  function ye(t, e, r, i) {
    var o, u, c, s, l, d, g, p, b, C, x, E, S, P, q, N, Y, O;
    v(3, arguments);
    var L = String(t),
      A = String(e),
      H = xt(),
      j =
        null !==
          (o =
            null !== (u = null == i ? void 0 : i.locale) && void 0 !== u
              ? u
              : H.locale) && void 0 !== o
          ? o
          : f;
    if (!j.match) throw new RangeError("locale must contain match property");
    var W = h(
      null !==
        (c =
          null !==
            (s =
              null !==
                (l =
                  null !== (d = null == i ? void 0 : i.firstWeekContainsDate) &&
                  void 0 !== d
                    ? d
                    : null == i ||
                      null === (g = i.locale) ||
                      void 0 === g ||
                      null === (p = g.options) ||
                      void 0 === p
                    ? void 0
                    : p.firstWeekContainsDate) && void 0 !== l
                ? l
                : H.firstWeekContainsDate) && void 0 !== s
            ? s
            : null === (b = H.locale) ||
              void 0 === b ||
              null === (C = b.options) ||
              void 0 === C
            ? void 0
            : C.firstWeekContainsDate) && void 0 !== c
        ? c
        : 1,
    );
    if (!(W >= 1 && W <= 7))
      throw new RangeError(
        "firstWeekContainsDate must be between 1 and 7 inclusively",
      );
    var Q = h(
      null !==
        (x =
          null !==
            (E =
              null !==
                (S =
                  null !== (P = null == i ? void 0 : i.weekStartsOn) &&
                  void 0 !== P
                    ? P
                    : null == i ||
                      null === (q = i.locale) ||
                      void 0 === q ||
                      null === (N = q.options) ||
                      void 0 === N
                    ? void 0
                    : N.weekStartsOn) && void 0 !== S
                ? S
                : H.weekStartsOn) && void 0 !== E
            ? E
            : null === (Y = H.locale) ||
              void 0 === Y ||
              null === (O = Y.options) ||
              void 0 === O
            ? void 0
            : O.weekStartsOn) && void 0 !== x
        ? x
        : 0,
    );
    if (!(Q >= 0 && Q <= 6))
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if ("" === A) return "" === L ? m(r) : new Date(NaN);
    var R,
      F = { firstWeekContainsDate: W, weekStartsOn: Q, locale: j },
      B = [new I()],
      G = A.match(de)
        .map(function (t) {
          var e = t[0];
          return e in T ? (0, T[e])(t, j.formatLong) : t;
        })
        .join("")
        .match(le),
      X = [],
      z = a(G);
    try {
      var $ = function () {
        var e = R.value;
        (null != i && i.useAdditionalWeekYearTokens) || !M(e) || U(e, A, t),
          (null != i && i.useAdditionalDayOfYearTokens) || !D(e) || U(e, A, t);
        var n = e[0],
          r = se[n];
        if (r) {
          var a = r.incompatibleTokens;
          if (Array.isArray(a)) {
            var o = X.find(function (t) {
              return a.includes(t.token) || t.token === n;
            });
            if (o)
              throw new RangeError(
                "The format string mustn't contain `"
                  .concat(o.fullToken, "` and `")
                  .concat(e, "` at the same time"),
              );
          } else if ("*" === r.incompatibleTokens && X.length > 0)
            throw new RangeError(
              "The format string mustn't contain `".concat(
                e,
                "` and any other token at the same time",
              ),
            );
          X.push({ token: n, fullToken: e });
          var u = r.run(L, e, j.match, F);
          if (!u) return { v: new Date(NaN) };
          B.push(u.setter), (L = u.rest);
        } else {
          if (n.match(me))
            throw new RangeError(
              "Format string contains an unescaped latin alphabet character `" +
                n +
                "`",
            );
          if (
            ("''" === e
              ? (e = "'")
              : "'" === n && (e = e.match(fe)[1].replace(he, "'")),
            0 !== L.indexOf(e))
          )
            return { v: new Date(NaN) };
          L = L.slice(e.length);
        }
      };
      for (z.s(); !(R = z.n()).done; ) {
        var J = $();
        if ("object" === n(J)) return J.v;
      }
    } catch (t) {
      z.e(t);
    } finally {
      z.f();
    }
    if (L.length > 0 && ve.test(L)) return new Date(NaN);
    var _ = B.map(function (t) {
        return t.priority;
      })
        .sort(function (t, e) {
          return e - t;
        })
        .filter(function (t, e, n) {
          return n.indexOf(t) === e;
        })
        .map(function (t) {
          return B.filter(function (e) {
            return e.priority === t;
          }).sort(function (t, e) {
            return e.subPriority - t.subPriority;
          });
        })
        .map(function (t) {
          return t[0];
        }),
      K = m(r);
    if (isNaN(K.getTime())) return new Date(NaN);
    var V,
      Z = y(K, k(K)),
      tt = {},
      et = a(_);
    try {
      for (et.s(); !(V = et.n()).done; ) {
        var nt = V.value;
        if (!nt.validate(Z, F)) return new Date(NaN);
        var rt = nt.set(Z, tt, F);
        Array.isArray(rt) ? ((Z = rt[0]), w(tt, rt[1])) : (Z = rt);
      }
    } catch (t) {
      et.e(t);
    } finally {
      et.f();
    }
    return Z;
  }
  function we(t, e) {
    for (var n = t < 0 ? "-" : "", r = Math.abs(t).toString(); r.length < e; )
      r = "0" + r;
    return n + r;
  }
  const ge = function (t, e) {
      var n = t.getUTCFullYear(),
        r = n > 0 ? n : 1 - n;
      return we("yy" === e ? r % 100 : r, e.length);
    },
    pe = function (t, e) {
      var n = t.getUTCMonth();
      return "M" === e ? String(n + 1) : we(n + 1, 2);
    },
    be = function (t, e) {
      return we(t.getUTCDate(), e.length);
    },
    Te = function (t, e) {
      return we(t.getUTCHours() % 12 || 12, e.length);
    },
    ke = function (t, e) {
      return we(t.getUTCHours(), e.length);
    },
    Ce = function (t, e) {
      return we(t.getUTCMinutes(), e.length);
    },
    xe = function (t, e) {
      return we(t.getUTCSeconds(), e.length);
    },
    De = function (t, e) {
      var n = e.length,
        r = t.getUTCMilliseconds();
      return we(Math.floor(r * Math.pow(10, n - 3)), e.length);
    };
  function Me(t, e) {
    var n = t > 0 ? "-" : "+",
      r = Math.abs(t),
      a = Math.floor(r / 60),
      i = r % 60;
    if (0 === i) return n + String(a);
    var o = e || "";
    return n + String(a) + o + we(i, 2);
  }
  function Ue(t, e) {
    return t % 60 == 0
      ? (t > 0 ? "-" : "+") + we(Math.abs(t) / 60, 2)
      : Ee(t, e);
  }
  function Ee(t, e) {
    var n = e || "",
      r = t > 0 ? "-" : "+",
      a = Math.abs(t);
    return r + we(Math.floor(a / 60), 2) + n + we(a % 60, 2);
  }
  const Se = {
    G: function (t, e, n) {
      var r = t.getUTCFullYear() > 0 ? 1 : 0;
      switch (e) {
        case "G":
        case "GG":
        case "GGG":
          return n.era(r, { width: "abbreviated" });
        case "GGGGG":
          return n.era(r, { width: "narrow" });
        default:
          return n.era(r, { width: "wide" });
      }
    },
    y: function (t, e, n) {
      if ("yo" === e) {
        var r = t.getUTCFullYear(),
          a = r > 0 ? r : 1 - r;
        return n.ordinalNumber(a, { unit: "year" });
      }
      return ge(t, e);
    },
    Y: function (t, e, n, r) {
      var a = Mt(t, r),
        i = a > 0 ? a : 1 - a;
      return "YY" === e
        ? we(i % 100, 2)
        : "Yo" === e
        ? n.ordinalNumber(i, { unit: "year" })
        : we(i, e.length);
    },
    R: function (t, e) {
      return we(Ht(t), e.length);
    },
    u: function (t, e) {
      return we(t.getUTCFullYear(), e.length);
    },
    Q: function (t, e, n) {
      var r = Math.ceil((t.getUTCMonth() + 1) / 3);
      switch (e) {
        case "Q":
          return String(r);
        case "QQ":
          return we(r, 2);
        case "Qo":
          return n.ordinalNumber(r, { unit: "quarter" });
        case "QQQ":
          return n.quarter(r, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return n.quarter(r, { width: "narrow", context: "formatting" });
        default:
          return n.quarter(r, { width: "wide", context: "formatting" });
      }
    },
    q: function (t, e, n) {
      var r = Math.ceil((t.getUTCMonth() + 1) / 3);
      switch (e) {
        case "q":
          return String(r);
        case "qq":
          return we(r, 2);
        case "qo":
          return n.ordinalNumber(r, { unit: "quarter" });
        case "qqq":
          return n.quarter(r, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return n.quarter(r, { width: "narrow", context: "standalone" });
        default:
          return n.quarter(r, { width: "wide", context: "standalone" });
      }
    },
    M: function (t, e, n) {
      var r = t.getUTCMonth();
      switch (e) {
        case "M":
        case "MM":
          return pe(t, e);
        case "Mo":
          return n.ordinalNumber(r + 1, { unit: "month" });
        case "MMM":
          return n.month(r, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return n.month(r, { width: "narrow", context: "formatting" });
        default:
          return n.month(r, { width: "wide", context: "formatting" });
      }
    },
    L: function (t, e, n) {
      var r = t.getUTCMonth();
      switch (e) {
        case "L":
          return String(r + 1);
        case "LL":
          return we(r + 1, 2);
        case "Lo":
          return n.ordinalNumber(r + 1, { unit: "month" });
        case "LLL":
          return n.month(r, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return n.month(r, { width: "narrow", context: "standalone" });
        default:
          return n.month(r, { width: "wide", context: "standalone" });
      }
    },
    w: function (t, e, n, r) {
      var a = Lt(t, r);
      return "wo" === e
        ? n.ordinalNumber(a, { unit: "week" })
        : we(a, e.length);
    },
    I: function (t, e, n) {
      var r = jt(t);
      return "Io" === e
        ? n.ordinalNumber(r, { unit: "week" })
        : we(r, e.length);
    },
    d: function (t, e, n) {
      return "do" === e
        ? n.ordinalNumber(t.getUTCDate(), { unit: "date" })
        : be(t, e);
    },
    D: function (t, e, n) {
      var r = (function (t) {
        v(1, arguments);
        var e = m(t),
          n = e.getTime();
        e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
        var r = n - e.getTime();
        return Math.floor(r / 864e5) + 1;
      })(t);
      return "Do" === e
        ? n.ordinalNumber(r, { unit: "dayOfYear" })
        : we(r, e.length);
    },
    E: function (t, e, n) {
      var r = t.getUTCDay();
      switch (e) {
        case "E":
        case "EE":
        case "EEE":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return n.day(r, { width: "short", context: "formatting" });
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    e: function (t, e, n, r) {
      var a = t.getUTCDay(),
        i = (a - r.weekStartsOn + 8) % 7 || 7;
      switch (e) {
        case "e":
          return String(i);
        case "ee":
          return we(i, 2);
        case "eo":
          return n.ordinalNumber(i, { unit: "day" });
        case "eee":
          return n.day(a, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return n.day(a, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return n.day(a, { width: "short", context: "formatting" });
        default:
          return n.day(a, { width: "wide", context: "formatting" });
      }
    },
    c: function (t, e, n, r) {
      var a = t.getUTCDay(),
        i = (a - r.weekStartsOn + 8) % 7 || 7;
      switch (e) {
        case "c":
          return String(i);
        case "cc":
          return we(i, e.length);
        case "co":
          return n.ordinalNumber(i, { unit: "day" });
        case "ccc":
          return n.day(a, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return n.day(a, { width: "narrow", context: "standalone" });
        case "cccccc":
          return n.day(a, { width: "short", context: "standalone" });
        default:
          return n.day(a, { width: "wide", context: "standalone" });
      }
    },
    i: function (t, e, n) {
      var r = t.getUTCDay(),
        a = 0 === r ? 7 : r;
      switch (e) {
        case "i":
          return String(a);
        case "ii":
          return we(a, e.length);
        case "io":
          return n.ordinalNumber(a, { unit: "day" });
        case "iii":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return n.day(r, { width: "short", context: "formatting" });
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    a: function (t, e, n) {
      var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
      switch (e) {
        case "a":
        case "aa":
          return n.dayPeriod(r, {
            width: "abbreviated",
            context: "formatting",
          });
        case "aaa":
          return n
            .dayPeriod(r, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "aaaaa":
          return n.dayPeriod(r, { width: "narrow", context: "formatting" });
        default:
          return n.dayPeriod(r, { width: "wide", context: "formatting" });
      }
    },
    b: function (t, e, n) {
      var r,
        a = t.getUTCHours();
      switch (
        ((r =
          12 === a ? "noon" : 0 === a ? "midnight" : a / 12 >= 1 ? "pm" : "am"),
        e)
      ) {
        case "b":
        case "bb":
          return n.dayPeriod(r, {
            width: "abbreviated",
            context: "formatting",
          });
        case "bbb":
          return n
            .dayPeriod(r, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "bbbbb":
          return n.dayPeriod(r, { width: "narrow", context: "formatting" });
        default:
          return n.dayPeriod(r, { width: "wide", context: "formatting" });
      }
    },
    B: function (t, e, n) {
      var r,
        a = t.getUTCHours();
      switch (
        ((r =
          a >= 17
            ? "evening"
            : a >= 12
            ? "afternoon"
            : a >= 4
            ? "morning"
            : "night"),
        e)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return n.dayPeriod(r, {
            width: "abbreviated",
            context: "formatting",
          });
        case "BBBBB":
          return n.dayPeriod(r, { width: "narrow", context: "formatting" });
        default:
          return n.dayPeriod(r, { width: "wide", context: "formatting" });
      }
    },
    h: function (t, e, n) {
      if ("ho" === e) {
        var r = t.getUTCHours() % 12;
        return 0 === r && (r = 12), n.ordinalNumber(r, { unit: "hour" });
      }
      return Te(t, e);
    },
    H: function (t, e, n) {
      return "Ho" === e
        ? n.ordinalNumber(t.getUTCHours(), { unit: "hour" })
        : ke(t, e);
    },
    K: function (t, e, n) {
      var r = t.getUTCHours() % 12;
      return "Ko" === e
        ? n.ordinalNumber(r, { unit: "hour" })
        : we(r, e.length);
    },
    k: function (t, e, n) {
      var r = t.getUTCHours();
      return (
        0 === r && (r = 24),
        "ko" === e ? n.ordinalNumber(r, { unit: "hour" }) : we(r, e.length)
      );
    },
    m: function (t, e, n) {
      return "mo" === e
        ? n.ordinalNumber(t.getUTCMinutes(), { unit: "minute" })
        : Ce(t, e);
    },
    s: function (t, e, n) {
      return "so" === e
        ? n.ordinalNumber(t.getUTCSeconds(), { unit: "second" })
        : xe(t, e);
    },
    S: function (t, e) {
      return De(t, e);
    },
    X: function (t, e, n, r) {
      var a = (r._originalDate || t).getTimezoneOffset();
      if (0 === a) return "Z";
      switch (e) {
        case "X":
          return Ue(a);
        case "XXXX":
        case "XX":
          return Ee(a);
        default:
          return Ee(a, ":");
      }
    },
    x: function (t, e, n, r) {
      var a = (r._originalDate || t).getTimezoneOffset();
      switch (e) {
        case "x":
          return Ue(a);
        case "xxxx":
        case "xx":
          return Ee(a);
        default:
          return Ee(a, ":");
      }
    },
    O: function (t, e, n, r) {
      var a = (r._originalDate || t).getTimezoneOffset();
      switch (e) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + Me(a, ":");
        default:
          return "GMT" + Ee(a, ":");
      }
    },
    z: function (t, e, n, r) {
      var a = (r._originalDate || t).getTimezoneOffset();
      switch (e) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + Me(a, ":");
        default:
          return "GMT" + Ee(a, ":");
      }
    },
    t: function (t, e, n, r) {
      var a = r._originalDate || t;
      return we(Math.floor(a.getTime() / 1e3), e.length);
    },
    T: function (t, e, n, r) {
      return we((r._originalDate || t).getTime(), e.length);
    },
  };
  var Pe = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    qe = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    Ne = /^'([^]*?)'?$/,
    Ye = /''/g,
    Oe = /[a-zA-Z]/;
  function Le(t, e, r) {
    var a, i, o, u, c, s, l, d, w, g, p, b, C, x, E, S, P, q;
    v(2, arguments);
    var N = String(e),
      Y = xt(),
      O =
        null !==
          (a =
            null !== (i = null == r ? void 0 : r.locale) && void 0 !== i
              ? i
              : Y.locale) && void 0 !== a
          ? a
          : f,
      L = h(
        null !==
          (o =
            null !==
              (u =
                null !==
                  (c =
                    null !==
                      (s = null == r ? void 0 : r.firstWeekContainsDate) &&
                    void 0 !== s
                      ? s
                      : null == r ||
                        null === (l = r.locale) ||
                        void 0 === l ||
                        null === (d = l.options) ||
                        void 0 === d
                      ? void 0
                      : d.firstWeekContainsDate) && void 0 !== c
                  ? c
                  : Y.firstWeekContainsDate) && void 0 !== u
              ? u
              : null === (w = Y.locale) ||
                void 0 === w ||
                null === (g = w.options) ||
                void 0 === g
              ? void 0
              : g.firstWeekContainsDate) && void 0 !== o
          ? o
          : 1,
      );
    if (!(L >= 1 && L <= 7))
      throw new RangeError(
        "firstWeekContainsDate must be between 1 and 7 inclusively",
      );
    var A = h(
      null !==
        (p =
          null !==
            (b =
              null !==
                (C =
                  null !== (x = null == r ? void 0 : r.weekStartsOn) &&
                  void 0 !== x
                    ? x
                    : null == r ||
                      null === (E = r.locale) ||
                      void 0 === E ||
                      null === (S = E.options) ||
                      void 0 === S
                    ? void 0
                    : S.weekStartsOn) && void 0 !== C
                ? C
                : Y.weekStartsOn) && void 0 !== b
            ? b
            : null === (P = Y.locale) ||
              void 0 === P ||
              null === (q = P.options) ||
              void 0 === q
            ? void 0
            : q.weekStartsOn) && void 0 !== p
        ? p
        : 0,
    );
    if (!(A >= 0 && A <= 6))
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!O.localize)
      throw new RangeError("locale must contain localize property");
    if (!O.formatLong)
      throw new RangeError("locale must contain formatLong property");
    var H = m(t);
    if (
      !(function (t) {
        if (
          (v(1, arguments),
          !(function (t) {
            return (
              v(1, arguments),
              t instanceof Date ||
                ("object" === n(t) &&
                  "[object Date]" === Object.prototype.toString.call(t))
            );
          })(t) && "number" != typeof t)
        )
          return !1;
        var e = m(t);
        return !isNaN(Number(e));
      })(H)
    )
      throw new RangeError("Invalid time value");
    var j = y(H, k(H)),
      W = {
        firstWeekContainsDate: L,
        weekStartsOn: A,
        locale: O,
        _originalDate: H,
      };
    return N.match(qe)
      .map(function (t) {
        var e = t[0];
        return "p" === e || "P" === e ? (0, T[e])(t, O.formatLong) : t;
      })
      .join("")
      .match(Pe)
      .map(function (n) {
        if ("''" === n) return "'";
        var a,
          i,
          o = n[0];
        if ("'" === o)
          return (i = (a = n).match(Ne)) ? i[1].replace(Ye, "'") : a;
        var u = Se[o];
        if (u)
          return (
            (null != r && r.useAdditionalWeekYearTokens) ||
              !M(n) ||
              U(n, e, String(t)),
            (null != r && r.useAdditionalDayOfYearTokens) ||
              !D(n) ||
              U(n, e, String(t)),
            u(j, n, O.localize, W)
          );
        if (o.match(Oe))
          throw new RangeError(
            "Format string contains an unescaped latin alphabet character `" +
              o +
              "`",
          );
        return n;
      })
      .join("");
  }
  function Ae(t) {
    v(1, arguments);
    var e = m(t);
    return e.setHours(0, 0, 0, 0), e;
  }
  const He = document.querySelector("button#new-task"),
    je = document.querySelector("form#new-item-form"),
    We = document.querySelector("div.task-list"),
    Ie = document.querySelector("div.tab-title"),
    Qe = document.querySelector("div.tab-list"),
    Re = document.querySelector("div.upper");
  let Fe,
    Be = [],
    Ge = "Inbox";
  function Xe(t) {
    return ye(t, "PP", new Date());
  }
  function ze(t) {
    return Le(ye(t, "yyyy-MM-dd", new Date()), "PP");
  }
  Qe.querySelectorAll("button").forEach((t) => {
    "new-project" != t.id &&
      (t.addEventListener("click", () => {
        (Ge = t.id), Ke();
      }),
      Be.length < 3 && Be.push(new e(`${t.id}`, [])));
  });
  const $e = function () {
      Ie.textContent = `${Ge}`;
      const t = (function () {
        const t = [];
        return (
          Be.forEach((e) => {
            e.items.forEach((e) => {
              JSON.stringify(t).includes(JSON.stringify(e)) || t.push(e);
            });
          }),
          t
        );
      })();
      if (
        (Be.forEach((e) => {
          ("Inbox" !== e.name && "Today" !== e.name && "Upcoming" !== e.name) ||
            (e.items = []),
            t.forEach((t) => {
              var n, r, a, i, o;
              e.items.includes(t) ||
                (("Inbox" === e.name ||
                  ("Today" === e.name &&
                    (function (t) {
                      return (
                        v(1, arguments),
                        (function (t, e) {
                          v(2, arguments);
                          var n = Ae(t),
                            r = Ae(e);
                          return n.getTime() === r.getTime();
                        })(t, Date.now())
                      );
                    })(Xe(t.dueDate))) ||
                  ("Upcoming" === e.name &&
                    Xe(t.dueDate) >=
                      ((r = (n = new Date()).getFullYear()),
                      (a = n.getMonth()),
                      (i = n.getDate()),
                      (o = new Date(0)).setFullYear(r, a, i + 1),
                      o.setHours(0, 0, 0, 0),
                      o))) &&
                  e.add(t));
            });
        }),
        (Fe = Be.find((t) => t.name === Ge).items),
        Re.querySelector("button#project-delete") &&
          Re.removeChild(document.getElementById("project-delete")),
        "Inbox" != Ge && "Today" != Ge && "Upcoming" != Ge)
      ) {
        const t = Be.find((t) => t.name == Ge),
          e = document.createElement("button");
        (e.textContent = "Delete project"),
          (e.id = "project-delete"),
          e.addEventListener("click", () => {
            const e = t.name.replaceAll(" ", "-");
            confirm(
              `Are you sure you want to delete the ${t.name} project? This cannot be undone!`,
            ) &&
              ((Be = Be.filter((e) => e.name != t.name)),
              t.items.forEach((t) => {
                Be.forEach((e) => {
                  e.items.includes(t) && e.remove(t);
                });
              }),
              Qe.removeChild(document.getElementById(`${e}`)),
              (Ge = "Inbox"),
              Ke());
          }),
          Re.appendChild(e);
      }
      Be.forEach((t) => {
        if (
          "Inbox" !== t.name &&
          "Today" !== t.name &&
          "Upcoming" !== t.name &&
          !Qe.querySelector(`button#${t.name.replaceAll(" ", "-")}`)
        ) {
          const e = document.createElement("button");
          (e.id = t.name.replaceAll(" ", "-")),
            (e.textContent = t.name),
            e.addEventListener("click", () => {
              (Ge = e.id.replaceAll("-", " ")), Ke();
            }),
            Qe.insertBefore(e, _e);
        }
      }),
        Qe.querySelectorAll("button").forEach((t) => {
          if ("new-project" != t.id) {
            const e = Be.find((e) => e.name == t.id.replaceAll("-", " ")).items
              .length;
            t.id.replaceAll("-", " ") == Ge
              ? (t.textContent = `> ${t.id.replaceAll("-", " ")} [${e}]`)
              : (t.textContent = `${t.id.replaceAll("-", " ")} [${e}]`);
          }
        });
    },
    Je = document.querySelector("input#dueDate");
  He.addEventListener("click", () => {
    (Je.value = Le(Ae(Date.now()), "yyyy-MM-dd")),
      (je.style.display = "grid"),
      document.addEventListener("keydown", (t) => {
        "Escape" == t.key && ((je.style.display = "none"), je.reset());
      });
  }),
    document.querySelector("button#submit").addEventListener("click", (e) => {
      e.preventDefault(),
        dueDate.value.length > 10
          ? alert("Please enter a 4-digit year (maximum: 9999).")
          : je.checkValidity()
          ? ((je.style.display = "none"),
            ("Today" != Ge && "Upcoming" != Ge) || (Ge = "Inbox"),
            $e(),
            Fe.push(
              new t(
                title.value,
                desc.value,
                ze(dueDate.value),
                priority.value,
                !1,
              ),
            ),
            Ke(),
            je.reset())
          : alert("Please fill the task name field.");
    }),
    document.querySelector("button#cancel").addEventListener("click", (t) => {
      t.preventDefault(), (je.style.display = "none"), je.reset();
    });
  const _e = document.querySelector("button#new-project");
  _e.addEventListener("click", () => {
    let t = prompt("Name your project:");
    !Be.map((t) => t.name).includes(t) &&
    0 !== t.length &&
    "new-project" != t &&
    "new project" != t &&
    isNaN(t[0])
      ? (Be.push(new e(t, [])), (Ge = t), Ke())
      : 0 == t.length
      ? alert("Projects must have a name. Please try again.")
      : isNaN(t[0])
      ? alert("Name is already in use or invalid. Please try again.")
      : alert("Project name cannot start with a number. Please try again.");
  });
  const Ke = function () {
    $e(),
      (We.innerHTML = ""),
      Fe.forEach((t) => {
        const e = document.createElement("div");
        e.classList.add("task");
        for (const [n, r] of Object.entries(t))
          if ("checklist" == n) {
            const a = document.createElement("input");
            (a.type = "checkbox"),
              a.classList.add("task-checklist"),
              a.addEventListener("click", () => {
                Be.forEach((e) => {
                  e.items.includes(t) && e.remove(t);
                }),
                  Ke();
              }),
              e.appendChild(a);
          } else {
            const i = document.createElement("div");
            if (
              (i.classList.add(`task-${n}`),
              (i.textContent = `${r}`),
              "priority" == n)
            )
              i.addEventListener("click", () => {
                "low" == t.priority
                  ? (t.priority = "mid")
                  : "mid" == t.priority
                  ? (t.priority = "high")
                  : (t.priority = "low"),
                  Ke();
              }),
                "low" == r
                  ? (i.style.backgroundColor = "green")
                  : "mid" == r
                  ? ((i.style.backgroundColor = "yellow"),
                    (i.style.color = "black"))
                  : (i.style.backgroundColor = "red");
            else if ("title" == n || "desc" == n) {
              const o = document.createElement("button");
              o.classList.add("edit-button"),
                (o.innerHTML = "<img src='./images/edit.png'>"),
                (o.style.visibility = "hidden"),
                o.addEventListener("click", () => {
                  const e = document.createElement("input"),
                    a = document.createElement("button");
                  function o() {
                    "title" == n ? (t.title = e.value) : (t.desc = e.value),
                      Ke();
                  }
                  (e.type = "text"),
                    (e.value = `${r}`),
                    (e.placeholder = `${n}`),
                    e.classList.add(`task-${n}`),
                    e.addEventListener("keydown", (t) => {
                      "Enter" == t.key && o();
                    }),
                    (e.maxLength = "title" == n ? "50" : "100"),
                    (a.innerHTML = "<img src='./images/check.png'>"),
                    a.classList.add("confirm-button"),
                    a.addEventListener("click", o),
                    (i.textContent = ""),
                    i.appendChild(e),
                    i.appendChild(a);
                }),
                i.appendChild(o),
                i.addEventListener("mouseover", () => {
                  i.innerHTML.includes("input") ||
                    (o.style.visibility = "visible");
                }),
                i.addEventListener("mouseleave", () => {
                  i.innerHTML.includes("input") ||
                    (o.style.visibility = "hidden");
                });
            } else if ("dueDate" == n) {
              const u = document.createElement("input"),
                c = document.createElement("button");
              function s() {
                u.checkValidity()
                  ? ((t.dueDate = ze(u.value)), Ke())
                  : alert("That is not a valid date. Please try again.");
              }
              (c.innerHTML = "<img src='./images/check.png'>"),
                c.classList.add("confirm-button"),
                c.addEventListener("click", s),
                (u.type = "date"),
                (u.value = Le(Xe(t.dueDate), "yyyy-MM-dd")),
                u.addEventListener("keydown", (t) => {
                  "Enter" == t.key && s();
                }),
                i.addEventListener(
                  "click",
                  () => {
                    (i.textContent = ""), i.appendChild(u), i.appendChild(c);
                  },
                  { once: !0 },
                );
            }
            e.appendChild(i);
          }
        We.appendChild(e);
      }),
      localStorage.setItem("projects", JSON.stringify(Be));
  };
  if (null != localStorage.getItem("projects")) {
    Be = [];
    const n = [];
    JSON.parse(localStorage.getItem("projects")).forEach((r) => {
      r.items.forEach((e) => {
        const r = new t(e.title, e.desc, e.dueDate, e.priority, e.checklist);
        JSON.stringify(n).includes(JSON.stringify(r)) || n.push(r);
      }),
        Be.push(new e(r.name, []));
    }),
      Be.forEach((t) => {
        n.forEach((e) => {
          JSON.stringify(
            JSON.parse(localStorage.getItem("projects")).find(
              (e) => e.name === t.name,
            ).items,
          ).includes(JSON.stringify(e)) && t.add(e);
        });
      }),
      Ke();
  } else Ke();
})();
