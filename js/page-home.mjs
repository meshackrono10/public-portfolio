import { t as e } from "./runtime.mjs";
import {
  B as t,
  D as n,
  F as r,
  M as i,
  P as a,
  R as o,
  S as s,
  T as c,
  _ as l,
  b as u,
  c as d,
  d as f,
  j as p,
  k as m,
  l as h,
  m as g,
  o as _,
  p as v,
  s as y,
  w as b,
  y as x,
  z as S,
} from "./react.mjs";
import {
  B as C,
  D as w,
  T as ee,
  a as T,
  n as E,
  r as D,
  t as O,
} from "./motion.mjs";
import {
  A as k,
  Ct as A,
  Dt as te,
  I as j,
  L as M,
  O as N,
  Q as ne,
  R as P,
  S as F,
  St as re,
  T as I,
  U as L,
  X as R,
  _ as z,
  _t as ie,
  a as B,
  b as ae,
  bt as oe,
  c as se,
  dt as ce,
  f as V,
  ft as le,
  g as ue,
  gt as de,
  i as H,
  it as fe,
  k as pe,
  n as me,
  o as U,
  pt as he,
  r as ge,
  st as _e,
  t as ve,
  u as ye,
  ut as be,
  v as xe,
  w as Se,
  wt as Ce,
  x as W,
  xt as we,
  y as Te,
  yt as Ee,
} from "./framer.mjs";
import {
  a as De,
  c as Oe,
  d as ke,
  f as Ae,
  i as je,
  l as Me,
  n as Ne,
  o as Pe,
  r as Fe,
  s as Ie,
  t as Le,
  u as Re,
} from "./shared-lib.mjs";
import { i as ze, n as Be, r as Ve, t as He } from "./ui-component-20.mjs";
import { i as Ue, n as We, r as Ge, t as Ke } from "./logo-banner.mjs";
import { n as qe, t as Je } from "./hover-text-switch.mjs";
import { n as Ye, t as Xe } from "./infinite-banner.mjs";
import { i as Ze, n as Qe, r as $e, t as et } from "./ui-component-10.mjs";
import { i as tt, n as nt, r as rt, t as it } from "./ui-component-19.mjs";
import at, { t as ot } from "./ui-component-21.mjs";
var st,
  ct,
  lt = e(() => {
    (L(),
      (st = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      { ...st },
      (ct = {
        onClick: { type: U.EventHandler },
        onMouseEnter: { type: U.EventHandler },
        onMouseLeave: { type: U.EventHandler },
      }),
      U.Number,
      U.Boolean,
      U.String,
      U.Enum);
  });
function ut(e, t) {
  return ft(!0, e, t);
}
function dt(e, t) {
  return ft(!1, e, t);
}
function ft(e, t, n = !0) {
  let r = le();
  x(() => {
    n && r === e && t();
  }, [r]);
}
var pt = e(() => {
    (L(), c());
  }),
  mt = e(() => {
    c();
  }),
  ht = e(() => {
    L();
  }),
  gt = e(() => {
    L();
  }),
  _t = e(() => {
    c();
  }),
  vt = e(() => {
    L();
  }),
  yt,
  bt,
  xt = e(() => {
    (o(),
      c(),
      (yt = () => {
        if (S !== void 0) {
          let e = S.userAgent.toLowerCase();
          return (
            (e.indexOf(`safari`) > -1 ||
              e.indexOf(`framermobile`) > -1 ||
              e.indexOf(`framerx`) > -1) &&
            e.indexOf(`chrome`) < 0
          );
        } else return !1;
      }),
      (bt = () => i(() => yt(), [])));
  }),
  St = e(() => {
    (c(), gt());
  }),
  Ct = e(() => {
    (c(), L(), gt(), mt());
  }),
  wt = e(() => {
    (L(), c(), lt());
  });
function Tt() {
  return i(() => Te.current(), []);
}
function Et() {
  return i(() => Te.current() === Te.canvas, []);
}
var Dt = e(() => {
    (c(), L());
  }),
  Ot = e(() => {
    c();
  });
function kt(e) {
  let {
    borderRadius: t,
    isMixedBorderRadius: n,
    topLeftRadius: r,
    topRightRadius: a,
    bottomRightRadius: o,
    bottomLeftRadius: s,
  } = e;
  return i(
    () => (n ? `${r}px ${a}px ${o}px ${s}px` : `${t}px`),
    [t, n, r, a, o, s],
  );
}
var At,
  jt = e(() => {
    (c(),
      L(),
      (At = {
        borderRadius: {
          title: `Radius`,
          type: U.FusedNumber,
          toggleKey: `isMixedBorderRadius`,
          toggleTitles: [`Radius`, `Radius per corner`],
          valueKeys: [
            `topLeftRadius`,
            `topRightRadius`,
            `bottomRightRadius`,
            `bottomLeftRadius`,
          ],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
        },
      }),
      U.FusedNumber);
  }),
  Mt = e(() => {
    (lt(),
      pt(),
      mt(),
      ht(),
      gt(),
      _t(),
      vt(),
      xt(),
      St(),
      Ct(),
      wt(),
      Dt(),
      Ot(),
      jt());
  });
function Nt(e) {
  let {
    width: t,
    height: n,
    topLeft: r,
    topRight: i,
    bottomRight: a,
    bottomLeft: o,
    id: s,
    children: c,
    ...l
  } = e;
  return l;
}
function Pt(e) {
  let t = Nt(e);
  return _(Ht, { ...t });
}
function Ft(e) {
  let t = le(),
    n = u(!1),
    r = u(!1),
    i = m((t) => {
      if (!e.current) return;
      let n = (t === 1 ? 0.999 : t) * e.current.duration,
        r = Math.abs(e.current.currentTime - n) < 0.1;
      e.current.duration > 0 && !r && (e.current.currentTime = n);
    }, []);
  return {
    play: m(() => {
      let i = e.current;
      i &&
        ((i.preload = `auto`),
        !(
          i.currentTime > 0 &&
          i.onplaying &&
          !i.paused &&
          !i.ended &&
          i.readyState >= i.HAVE_CURRENT_DATA
        ) &&
          i &&
          !n.current &&
          t &&
          ((n.current = !0),
          (r.current = !0),
          i
            .play()
            .catch((e) => {})
            .finally(() => (n.current = !1))));
    }, []),
    pause: m(() => {
      !e.current || n.current || (e.current.pause(), (r.current = !1));
    }, []),
    setProgress: i,
    isPlaying: r,
  };
}
function It({
  playingProp: e,
  muted: t,
  loop: n,
  playsinline: r,
  controls: i,
}) {
  let [a] = l(e),
    [o, s] = l(!1);
  e !== a && !o && s(!0);
  let c = a && t && n && r && !i && !o,
    u;
  return ((u = c ? `on-viewport` : a ? `on-mount` : `no-autoplay`), u);
}
function Lt(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Rt(e) {
  return (e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || [])
    .map(Lt)
    .join(` `);
}
var zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt = e(() => {
    (y(),
      L(),
      O(),
      Mt(),
      c(),
      (function (e) {
        ((e.Fill = `fill`),
          (e.Contain = `contain`),
          (e.Cover = `cover`),
          (e.None = `none`),
          (e.ScaleDown = `scale-down`));
      })((zt ||= {})),
      (function (e) {
        ((e.Video = `Upload`), (e.Url = `URL`));
      })((Bt ||= {})),
      (Vt = `/media/showreel-ambient.mp4`),
      (Ht = s(function (e) {
        let {
            srcType: t = `URL`,
            srcUrl: n,
            srcFile: r = ``,
            posterEnabled: a = !1,
            controls: o = !1,
            playing: s = !0,
            loop: c = !0,
            muted: l = !0,
            playsinline: d = !0,
            restartOnEnter: f = !1,
            objectFit: p = `cover`,
            backgroundColor: m = `rgba(0,0,0,0)`,
            radius: h = 0,
            volume: g = 25,
            startTime: v = 0,
            poster: y,
            playing: b,
            progress: S,
            onSeeked: w,
            onPause: T,
            onPlay: E,
            onEnd: D,
            onClick: O,
            onMouseEnter: k,
            onMouseLeave: A,
            onMouseDown: te,
            onMouseUp: j,
          } = e,
          M = u(),
          N = bt(),
          ne = u(null),
          P = u(null),
          F = Et(),
          re = Tt(),
          I = F || re === Te.export,
          L = kt(e),
          R = I
            ? `no-autoplay`
            : It({
                playingProp: b,
                muted: l,
                loop: c,
                playsinline: d,
                controls: o,
              }),
          z = I ? !0 : C(M),
          ie = !I && C(M, { margin: `10%`, once: !0 }),
          B = v === 100 ? 99.9 : v,
          { play: ae, pause: oe, setProgress: se, isPlaying: ce } = Ft(M);
        (x(() => {
          I || (R !== `on-viewport` && (b ? ae() : oe()));
        }, [R, b]),
          x(() => {
            I ||
              (z && b && R !== `no-autoplay` && ae(),
              R === `on-viewport` && oe());
          }, [R, z, b]),
          x(() => {
            !F || y || a || B || !M.current || (M.current.currentTime = 0.01);
          }, [a, y, B]));
        let V = u(!1);
        (x(() => {
          if (!V.current) {
            V.current = !0;
            return;
          }
          let e = ee(S) ? S.get() : (S ?? 0) * 0.01;
          se((e ?? 0) || (B ?? 0) / 100);
        }, [B, r, n, S]),
          x(() => {
            if (ee(S)) return S.on(`change`, (e) => se(e));
          }, [S]),
          ut(() => {
            ne.current !== null &&
              M.current &&
              ((!P && c) || !ne.current) &&
              ae();
          }),
          dt(() => {
            M.current &&
              ((P.current = M.current.ended),
              (ne.current = M.current.paused),
              oe());
          }));
        let le = i(() => {
          if (t === `URL`) return n + ``;
          if (t === `Upload`) return r + ``;
        }, [t, r, n, B]);
        return (
          x(() => {
            N && M.current && R === `on-mount` && setTimeout(() => ae(), 50);
          }, []),
          x(() => {
            M.current && !l && (M.current.volume = (g ?? 0) / 100);
          }, [g]),
          _(`video`, {
            onClick: O,
            onMouseEnter: k,
            onMouseLeave: A,
            onMouseDown: te,
            onMouseUp: j,
            src: le,
            loop: c,
            ref: M,
            onSeeked: (e) => w?.(e),
            onPause: (e) => T?.(e),
            onPlay: (e) => E?.(e),
            onEnded: (e) => D?.(e),
            autoPlay:
              ce.current || R === `on-mount` || (b && R === `on-viewport` && z),
            preload: ce.current
              ? `auto`
              : I && !y
                ? `metadata`
                : R !== `on-mount` && !ie
                  ? `none`
                  : `metadata`,
            poster:
              a && !r && n === Vt
                ? `/images/portfolio-asset.jpg`
                : a && y
                  ? y
                  : void 0,
            onLoadedData: () => {
              let e = M.current;
              e &&
                (e.currentTime < 0.3 && B > 0 && se((B ?? 0) * 0.01),
                (ce.current ||
                  R === `on-mount` ||
                  (b && R === `on-viewport` && z)) &&
                  ae());
            },
            controls: o,
            muted: I ? !0 : l,
            playsInline: d,
            style: {
              cursor: O ? `pointer` : `auto`,
              width: `100%`,
              height: `100%`,
              borderRadius: L,
              display: `block`,
              objectFit: p,
              backgroundColor: m,
              objectPosition: `50% 50%`,
            },
          })
        );
      })),
      (Pt.displayName = `Video`),
      (Ut = [`cover`, `fill`, `contain`, `scale-down`, `none`]),
      I(Pt, {
        srcType: {
          type: U.Enum,
          displaySegmentedControl: !0,
          title: `Source`,
          options: [`URL`, `Upload`],
        },
        srcUrl: {
          type: U.String,
          title: `URL`,
          defaultValue: `/media/showreel-ambient.mp4`,
          hidden(e) {
            return e.srcType === `Upload`;
          },
        },
        srcFile: {
          type: U.File,
          title: `File`,
          allowedFileTypes: [`mp4`, `webm`],
          description: `Only MP4 and WebM`,
          hidden(e) {
            return e.srcType === `URL`;
          },
        },
        playing: {
          type: U.Boolean,
          title: `Playing`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        ...At,
        posterEnabled: {
          type: U.Boolean,
          title: `Poster`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        poster: {
          type: U.Image,
          title: `Image`,
          hidden: ({ posterEnabled: e }) => !e,
          description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).`,
        },
        backgroundColor: {
          type: U.Color,
          title: `Background`,
          defaultValue: `rgba(0,0,0,0)`,
        },
        startTime: {
          title: `Start Time`,
          type: U.Number,
          min: 0,
          max: 100,
          step: 0.1,
          unit: `%`,
        },
        loop: {
          type: U.Boolean,
          title: `Loop`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        objectFit: {
          type: U.Enum,
          title: `Fit`,
          options: Ut,
          optionTitles: Ut.map(Rt),
        },
        controls: {
          type: U.Boolean,
          title: `Controls`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !1,
        },
        muted: {
          type: U.Boolean,
          title: `Muted`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        volume: {
          type: U.Number,
          max: 100,
          min: 0,
          unit: `%`,
          hidden: ({ muted: e }) => e,
          defaultValue: 25,
        },
        onEnd: { type: U.EventHandler },
        onSeeked: { type: U.EventHandler },
        onPause: { type: U.EventHandler },
        onPlay: { type: U.EventHandler },
        ...ct,
      }));
  }),
  Gt,
  Kt,
  qt,
  Jt = e(() => {
    (L(),
      pe.loadFonts([]),
      (Gt = [{ explicitInter: !0, fonts: [] }]),
      (Kt = [
        `.framer-N8LBb .framer-styles-preset-5qir1a:not(.rich-text-wrapper), .framer-N8LBb .framer-styles-preset-5qir1a.rich-text-wrapper a { --framer-link-text-color: var(--token-832a9c22-d657-4637-89aa-cbcc712eb257, #ca9df1); }`,
      ]),
      (qt = `framer-N8LBb`));
  }),
  Yt,
  Xt,
  Zt,
  Qt = e(() => {
    (L(),
      pe.loadFonts([]),
      (Yt = [{ explicitInter: !0, fonts: [] }]),
      (Xt = [
        `.framer-8e2ME .framer-styles-preset-u019c3:not(.rich-text-wrapper), .framer-8e2ME .framer-styles-preset-u019c3.rich-text-wrapper a { --framer-link-text-color: #000000; --framer-link-text-decoration: underline; }`,
      ]),
      (Zt = `framer-8e2ME`));
  });
function $t(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var en,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn = e(() => {
    (y(),
      L(),
      O(),
      c(),
      Jt(),
      Qt(),
      (en = Ce(w.div)),
      (tn = [`P60vihmw6`, `Ap9fX08MF`]),
      (nn = `framer-1lrjm`),
      (rn = { Ap9fX08MF: `framer-v-1rt7mqk`, P60vihmw6: `framer-v-1w7vqq6` }),
      (an = {
        delay: 0,
        duration: 0.4,
        ease: [0.12, 0.23, 0.5, 1],
        type: `tween`,
      }),
      (on = { delay: 0, duration: 6, ease: [0, 0, 1, 1], type: `tween` }),
      (sn = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (cn = ({ value: e, children: t }) => {
        let n = p(T),
          r = e ?? n.transition,
          a = i(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return _(T.Provider, { value: a, children: t });
      }),
      (ln = { "Variant 1": `P60vihmw6`, "Variant 2": `Ap9fX08MF` }),
      (un = w.create(r)),
      (dn = ({ height: e, id: t, title: n, width: r, ...i }) => ({
        ...i,
        fwCv2N6Ci: n ?? i.fwCv2N6Ci ?? `More projects on GitHub`,
        variant: ln[i.variant] ?? i.variant ?? `P60vihmw6`,
      })),
      (fn = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (pn = A(
        v(function (e, t) {
          let n = u(null),
            i = t ?? n,
            a = b(),
            { activeLocale: o, setLocale: s } = de();
          _e();
          let {
              style: c,
              className: l,
              layoutId: d,
              variant: f,
              fwCv2N6Ci: p,
              ...m
            } = dn(e),
            {
              baseVariant: g,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: C,
              setGestureState: ee,
              setVariant: T,
              variants: E,
            } = re({
              cycleOrder: tn,
              defaultVariant: `P60vihmw6`,
              ref: i,
              variant: f,
              variantClassNames: rn,
            }),
            O = fn(e, E),
            { activeVariantCallback: k, delay: A } = fe(g),
            te = k(async (...e) => {
              (ee({ isHovered: !0 }), T(`Ap9fX08MF`));
            }),
            j = N(nn, qt, Zt),
            M = () => g !== `Ap9fX08MF`,
            ne = () => g === `Ap9fX08MF`;
          return _(D, {
            id: d ?? a,
            children: _(un, {
              animate: E,
              initial: !1,
              children: _(cn, {
                value: an,
                children: h(w.div, {
                  ...m,
                  ...x,
                  className: N(j, `framer-1w7vqq6`, l, v),
                  "data-framer-name": `Variant 1`,
                  "data-highlight": !0,
                  layoutDependency: O,
                  layoutId: `P60vihmw6`,
                  onMouseEnter: te,
                  ref: i,
                  style: { ...c },
                  ...$t(
                    {
                      Ap9fX08MF: {
                        "data-framer-name": `Variant 2`,
                        "data-highlight": void 0,
                        onMouseEnter: void 0,
                      },
                    },
                    g,
                    S,
                  ),
                  children: [
                    M() &&
                      _(W, {
                        __fromCanvasComponent: !0,
                        children: _(r, {
                          children: _(w.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `Q1VTVE9NVjI7UG9wcGlucyBSZWd1bGFy`,
                              "--framer-font-family": `"Poppins Regular", "Poppins Regular Placeholder", sans-serif`,
                              "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                              "--framer-letter-spacing": `-0.02em`,
                              "--framer-line-height": `1.6em`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-832a9c22-d657-4637-89aa-cbcc712eb257, rgb(202, 157, 241)))`,
                              "--framer-text-decoration-offset": `2px`,
                              "--framer-text-decoration-thickness": `1px`,
                              "--framer-text-decoration": `underline`,
                            },
                            children: _(V, {
                              href: `https://github.com/meshackrono10`,
                              motionChild: !0,
                              nodeId: `ZtOPWw1DM`,
                              openInNewTab: !0,
                              relValues: [],
                              scopeId: `B8742u4z9`,
                              smoothScroll: !1,
                              children: _(w.a, {
                                className: `framer-styles-preset-5qir1a`,
                                "data-styles-preset": `KrgisJSA1`,
                                children: `More projects on GitHub`,
                              }),
                            }),
                          }),
                        }),
                        className: `framer-1quh8wk`,
                        fonts: [`CUSTOMV2;Poppins Regular`],
                        layoutDependency: O,
                        layoutId: `ZtOPWw1DM`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-832a9c22-d657-4637-89aa-cbcc712eb257, rgb(202, 157, 241))`,
                        },
                        text: p,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    ne() &&
                      _(en, {
                        __framer__loop: sn,
                        __framer__loopEffectEnabled: !0,
                        __framer__loopPauseOffscreen: !0,
                        __framer__loopRepeatDelay: 0,
                        __framer__loopRepeatType: `loop`,
                        __framer__loopTransition: on,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-1wg6ltv`,
                        layoutDependency: O,
                        layoutId: `uiN1745Tr`,
                        children: _(F, {
                          className: `framer-1elae5u`,
                          layoutDependency: O,
                          layoutId: `SfXnVA6T1`,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 141 140" overflow="visible"><path d="M 83.35 0 L 86.938 26.892 L 107.826 8.976 L 101.109 35.82 C 109.182 32.692 118.709 29.631 126.978 26.752 L 111.303 49.211 L 138.686 50.051 L 115.739 65.373 C 124.079 68.749 132.685 72.563 141 76.095 L 114.182 82.201 C 120.746 88.217 127.469 94.921 133.915 101.132 C 124.848 99.884 115.792 98.555 106.747 97.145 C 110.606 105.367 114.367 113.636 118.031 121.947 L 94.374 108.529 C 94.875 117.764 95.477 126.995 96.178 136.218 L 81.726 118.293 L 80.058 116.463 L 78.669 116.779 C 76.053 120.833 72.157 134.707 70.484 140 C 67.499 132.92 64.436 122.181 62.049 114.608 L 44.898 135.674 L 46.252 108.49 L 22.642 121.964 L 33.788 97.162 L 6.838 101.158 L 26.074 82.31 C 19.385 80.154 7.223 77.789 0 76.167 C 7.567 72.435 16.848 68.762 24.722 65.428 C 17.826 60.38 8.972 54.817 1.749 50.002 L 29.526 49.247 L 13.655 26.842 C 21.593 29.142 31.491 32.863 39.461 35.608 C 37.48 26.808 35.108 17.688 32.962 8.892 C 39.521 14.844 47.152 21.05 53.958 26.83 C 54.899 18.883 55.881 8.166 57.529 0.567 C 60.172 4.196 67.427 18.189 70.495 23.422 Z" fill="var(--token-d9ed1eb8-0c54-4136-bf85-5e5373c04bfa, rgb(255, 214, 80)) /* {&quot;name&quot;:&quot;Yellow-Accent&quot;} */"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                      }),
                    ne() &&
                      _(W, {
                        __fromCanvasComponent: !0,
                        children: _(r, {
                          children: _(w.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `Q1VTVE9NVjI7UG9wcGlucyBNZWRpdW0=`,
                              "--framer-font-family": `"Poppins Medium", "Poppins Medium Placeholder", sans-serif`,
                              "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                              "--framer-font-size": `18px`,
                              "--framer-font-weight": `500`,
                              "--framer-letter-spacing": `-0.02em`,
                              "--framer-line-height": `1.6em`,
                              "--framer-text-decoration-offset": `2px`,
                              "--framer-text-decoration-thickness": `1px`,
                            },
                            children: _(V, {
                              href: { webPageId: `BkbCN2BJk` },
                              motionChild: !0,
                              nodeId: `d2VE8ZCm3`,
                              openInNewTab: !1,
                              relValues: [],
                              scopeId: `B8742u4z9`,
                              smoothScroll: !1,
                              children: _(w.a, {
                                className: `framer-styles-preset-u019c3`,
                                "data-styles-preset": `yE2Mat2L_`,
                                children: `More projects on GitHub`,
                              }),
                            }),
                          }),
                        }),
                        className: `framer-1ndo7jj`,
                        fonts: [`CUSTOMV2;Poppins Medium`],
                        layoutDependency: O,
                        layoutId: `d2VE8ZCm3`,
                        text: p,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-1lrjm.framer-j2yjgq, .framer-1lrjm .framer-j2yjgq { display: block; }`,
          `.framer-1lrjm.framer-1w7vqq6 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 140px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 237px; }`,
          `.framer-1lrjm .framer-1quh8wk, .framer-1lrjm .framer-1ndo7jj { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-1lrjm .framer-1wg6ltv { bottom: 0px; flex: none; left: calc(49.789029535865005% - 141px / 2); overflow: visible; position: absolute; top: 0px; width: 141px; }`,
          `.framer-1lrjm .framer-1elae5u { height: 140px; left: 0px; position: absolute; top: 0px; width: 141px; }`,
          `.framer-1lrjm.framer-v-1rt7mqk.framer-1w7vqq6 { width: 267px; }`,
          ...Kt,
          ...Xt,
        ],
        `framer-1lrjm`,
      )),
      (pn.displayName = `Button-Interaktiv`),
      (pn.defaultProps = { height: 140, width: 237 }),
      I(pn, {
        variant: {
          options: [`P60vihmw6`, `Ap9fX08MF`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: U.Enum,
        },
        fwCv2N6Ci: {
          defaultValue: `More projects on GitHub`,
          displayTextArea: !1,
          title: `Title`,
          type: U.String,
        },
        onfwCv2N6CiChange: { changes: `fwCv2N6Ci`, type: U.ChangeHandler },
      }),
      Se(
        pn,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Poppins Regular`,
                source: `custom`,
                style: `normal`,
                uiFamilyName: `Poppins`,
                url: `/fonts/poppins-regular.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Poppins Medium`,
                source: `custom`,
                style: `normal`,
                uiFamilyName: `Poppins`,
                url: `/fonts/poppins-medium.woff2`,
                weight: `500`,
              },
            ],
          },
          ...M(Gt),
          ...M(Yt),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function hn(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function G(e, ...t) {
  if (!e)
    throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function gn(e) {
  throw Error(`Unexpected value: ${e}`);
}
function _n(e) {
  return typeof e == `string`;
}
function vn(e) {
  return Number.isFinite(e);
}
function yn(e) {
  return e === null;
}
function bn(e) {
  if (yn(e)) return 0;
  switch (e.type) {
    case U.Array:
      return 1;
    case U.Boolean:
      return 2;
    case U.Color:
      return 3;
    case U.Date:
      return 4;
    case U.Enum:
      return 5;
    case U.File:
      return 6;
    case U.ResponsiveImage:
      return 10;
    case U.Link:
      return 7;
    case U.Number:
      return 8;
    case U.Object:
      return 9;
    case U.RichText:
      return 11;
    case U.String:
      return 12;
    case U.VectorSetItem:
      return 13;
    default:
      gn(e);
  }
}
function xn(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = ur.read(e);
    n.push(t);
  }
  return { type: U.Array, value: n };
}
function Sn(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) ur.write(e, n);
}
function Cn(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = ur.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function wn(e) {
  return { type: U.Boolean, value: e.readUint8() !== 0 };
}
function Tn(e, t) {
  e.writeUint8(+!!t.value);
}
function En(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Dn(e) {
  return { type: U.Color, value: e.readString() };
}
function On(e, t) {
  e.writeString(t.value);
}
function kn(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function An(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: U.Date, value: n.toISOString() };
}
function jn(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function Mn(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function Nn(e) {
  return { type: U.Enum, value: e.readString() };
}
function Pn(e, t) {
  e.writeString(t.value);
}
function Fn(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function In(e) {
  return { type: U.File, value: e.readString() };
}
function Ln(e, t) {
  e.writeString(t.value);
}
function Rn(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function zn(e) {
  return { type: U.Link, value: e.readJson() };
}
function Bn(e, t) {
  e.writeJson(t.value);
}
function Vn(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Hn(e) {
  return { type: U.Number, value: e.readFloat64() };
}
function Un(e, t) {
  e.writeFloat64(t.value);
}
function Wn(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Gn(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = ur.read(e);
  }
  return { type: U.Object, value: n };
}
function Kn(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n))
    (e.writeString(t), ur.write(e, r));
}
function qn(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = ur.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function Jn(e) {
  return { type: U.ResponsiveImage, value: e.readJson() };
}
function Yn(e, t) {
  e.writeJson(t.value);
}
function Xn(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Zn(e) {
  let t = e.readInt8();
  if (t === 0) return { type: U.RichText, value: e.readUint32() };
  if (t === 1) return { type: U.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function Qn(e, t) {
  if (vn(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (_n(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function $n(e, t) {
  let n = e.value,
    r = t.value;
  if ((vn(n) && vn(r)) || (_n(n) && _n(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function er(e) {
  return { type: U.String, value: e.readString() };
}
function tr(e, t) {
  e.writeString(t.value);
}
function nr(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function rr(e) {
  return { type: U.VectorSetItem, value: e.readUint32() };
}
function ir(e, t) {
  e.writeUint32(t.value);
}
function ar(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function or(e) {
  let t = Math.floor(kr * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function sr(e, t) {
  let n = lr(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await jr(a);
  if (s.status !== 200)
    throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new Mr(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function cr(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function lr(e) {
  G(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to
      ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) })
      : n.push(e);
  }
  return n;
}
var ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  K,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir = e(() => {
    (o(),
      L(),
      (dr = Object.create),
      (fr = Object.defineProperty),
      (pr = Object.getOwnPropertyDescriptor),
      (mr = Object.getOwnPropertyNames),
      (hr = Object.getPrototypeOf),
      (gr = Object.prototype.hasOwnProperty),
      (_r = (e, t, n) =>
        t in e
          ? fr(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n)),
      (vr = (e, t) =>
        function () {
          return (
            t || (0, e[mr(e)[0]])((t = { exports: {} }).exports, t),
            t.exports
          );
        }),
      (yr = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of mr(t))
            gr.call(e, i) ||
              i === n ||
              fr(e, i, {
                get: () => t[i],
                enumerable: !(r = pr(t, i)) || r.enumerable,
              });
        return e;
      }),
      (br = (e, t, n) => (
        (n = e == null ? {} : dr(hr(e))),
        yr(
          !t && e && e.__esModule
            ? n
            : fr(n, `default`, { value: e, enumerable: !0 }),
          e,
        )
      )),
      (K = (e, t, n) => _r(e, typeof t == `symbol` ? t : t + ``, n)),
      (xr = br(
        vr({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`,
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (!(!e || !1 !== e.batch)) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(
                          `maxBatchSize must be a positive number: ` + t,
                        );
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(
                          `batchScheduleFn must be a function: ` + t,
                        );
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (!(!e || !1 !== e.cache)) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(
                          function (e) {
                            return t && typeof t[e] != `function`;
                          },
                        );
                        if (n.length !== 0)
                          throw TypeError(
                            `Custom cacheMap missing methods: ` + n.join(`, `),
                          );
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`,
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (
                          t !== null &&
                          !t.hasDispatched &&
                          t.keys.length < e._maxBatchSize
                        )
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (
                                ((t.hasDispatched = !0), t.keys.length === 0)
                              ) {
                                o(t);
                                return;
                              }
                              try {
                                n = e._batchLoadFn(t.keys);
                              } catch (n) {
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                      String(n) +
                                      `.`,
                                  ),
                                );
                              }
                              if (!n || typeof n.then != `function`)
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                      String(n) +
                                      `.`,
                                  ),
                                );
                              n.then(function (e) {
                                if (!s(e))
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                      String(e) +
                                      `.`,
                                  );
                                if (e.length !== t.keys.length)
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                      String(t.keys) +
                                      `

Values:
` +
                                      String(e),
                                  );
                                o(t);
                                for (var n = 0; n < t.callbacks.length; n++) {
                                  var r = e[n];
                                  r instanceof Error
                                    ? t.callbacks[n].reject(r)
                                    : t.callbacks[n].resolve(r);
                                }
                              }).catch(function (n) {
                                a(e, t, n);
                              });
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`,
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        }),
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` &&
                typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits)
                for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 &&
                    Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1,
      )),
      (Sr = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (Cr = class {
        getOffset() {
          return this.offset;
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
        }
        readUint8() {
          let e = Sr.Uint8;
          this.ensureLength(e);
          let t = this.view.getUint8(this.offset);
          return ((this.offset += e), t);
        }
        readUint16() {
          let e = Sr.Uint16;
          this.ensureLength(e);
          let t = this.view.getUint16(this.offset);
          return ((this.offset += e), t);
        }
        readUint32() {
          let e = Sr.Uint32;
          this.ensureLength(e);
          let t = this.view.getUint32(this.offset);
          return ((this.offset += e), t);
        }
        readUint64() {
          let e = this.readBigUint64();
          return Number(e);
        }
        readBigUint64() {
          let e = Sr.BigUint64;
          this.ensureLength(e);
          let t = this.view.getBigUint64(this.offset);
          return ((this.offset += e), t);
        }
        readInt8() {
          let e = Sr.Int8;
          this.ensureLength(e);
          let t = this.view.getInt8(this.offset);
          return ((this.offset += e), t);
        }
        readInt16() {
          let e = Sr.Int16;
          this.ensureLength(e);
          let t = this.view.getInt16(this.offset);
          return ((this.offset += e), t);
        }
        readInt32() {
          let e = Sr.Int32;
          this.ensureLength(e);
          let t = this.view.getInt32(this.offset);
          return ((this.offset += e), t);
        }
        readInt64() {
          let e = this.readBigInt64();
          return Number(e);
        }
        readBigInt64() {
          let e = Sr.BigInt64;
          this.ensureLength(e);
          let t = this.view.getBigInt64(this.offset);
          return ((this.offset += e), t);
        }
        readFloat32() {
          let e = Sr.Float32;
          this.ensureLength(e);
          let t = this.view.getFloat32(this.offset);
          return ((this.offset += e), t);
        }
        readFloat64() {
          let e = Sr.Float64;
          this.ensureLength(e);
          let t = this.view.getFloat64(this.offset);
          return ((this.offset += e), t);
        }
        readBytes(e) {
          let t = this.offset,
            n = t + e,
            r = this.bytes.subarray(t, n);
          return ((this.offset = n), r);
        }
        readString() {
          let e = this.readUint32(),
            t = this.readBytes(e);
          return this.decoder.decode(t);
        }
        readJson() {
          let e = this.readString();
          return JSON.parse(e);
        }
        constructor(e) {
          ((this.bytes = e),
            K(this, `offset`, 0),
            K(this, `view`),
            K(this, `decoder`, new TextDecoder()),
            (this.view = hn(this.bytes)));
        }
      }),
      t !== void 0 && t.requestIdleCallback,
      (wr = (e) => 2 ** e - 1),
      (Tr = (e) => -(2 ** (e - 1))),
      (Er = (e) => 2 ** (e - 1) - 1),
      Tr(8),
      Tr(16),
      Tr(32),
      -(BigInt(2) ** BigInt(63)),
      wr(8),
      wr(16),
      wr(32),
      BigInt(2) ** BigInt(64) - BigInt(1),
      Er(8),
      Er(16),
      Er(32),
      BigInt(2) ** BigInt(63) - BigInt(1),
      (Dr = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            G(vn(n), `Invalid chunkId`),
            G(vn(r), `Invalid offset`),
            G(vn(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          let n = t.readUint16(),
            r = t.readUint32(),
            i = t.readUint32();
          return new e(n, r, i);
        }
        write(e) {
          (e.writeUint16(this.chunkId),
            e.writeUint32(this.offset),
            e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (G(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          ((this.chunkId = e), (this.offset = t), (this.length = n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return xn(e);
            case 2:
              return wn(e);
            case 3:
              return Dn(e);
            case 4:
              return An(e);
            case 5:
              return Nn(e);
            case 6:
              return In(e);
            case 7:
              return zn(e);
            case 8:
              return Hn(e);
            case 9:
              return Gn(e);
            case 10:
              return Jn(e);
            case 11:
              return Zn(e);
            case 12:
              return er(e);
            case 13:
              return rr(e);
            default:
              gn(t);
          }
        }),
          (e.write = function (e, t) {
            let n = bn(t);
            if ((e.writeUint8(n), !yn(t)))
              switch (t.type) {
                case U.Array:
                  return Sn(e, t);
                case U.Boolean:
                  return Tn(e, t);
                case U.Color:
                  return On(e, t);
                case U.Date:
                  return jn(e, t);
                case U.Enum:
                  return Pn(e, t);
                case U.File:
                  return Ln(e, t);
                case U.Link:
                  return Bn(e, t);
                case U.Number:
                  return Un(e, t);
                case U.Object:
                  return Kn(e, t);
                case U.ResponsiveImage:
                  return Yn(e, t);
                case U.RichText:
                  return Qn(e, t);
                case U.VectorSetItem:
                  return ir(e, t);
                case U.String:
                  return tr(e, t);
                default:
                  gn(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = bn(e),
              i = bn(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (yn(e) || yn(t)) return 0;
            switch (e.type) {
              case U.Array:
                return (G(t.type === U.Array), Cn(e, t, n));
              case U.Boolean:
                return (G(t.type === U.Boolean), En(e, t));
              case U.Color:
                return (G(t.type === U.Color), kn(e, t));
              case U.Date:
                return (G(t.type === U.Date), Mn(e, t));
              case U.Enum:
                return (G(t.type === U.Enum), Fn(e, t));
              case U.File:
                return (G(t.type === U.File), Rn(e, t));
              case U.Link:
                return (G(t.type === U.Link), Vn(e, t));
              case U.Number:
                return (G(t.type === U.Number), Wn(e, t));
              case U.Object:
                return (G(t.type === U.Object), qn(e, t, n));
              case U.ResponsiveImage:
                return (G(t.type === U.ResponsiveImage), Xn(e, t));
              case U.RichText:
                return (G(t.type === U.RichText), $n(e, t));
              case U.VectorSetItem:
                return (G(t.type === U.VectorSetItem), ar(e, t));
              case U.String:
                return (G(t.type === U.String), nr(e, t, n));
              default:
                gn(e);
            }
          }));
      })((ur ||= {})),
      (Or = 3),
      (kr = 250),
      (Ar = [408, 429, 500, 502, 503, 504]),
      (jr = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!Ar.includes(r.status) || ++n > Or) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > Or) throw e;
          }
          await or(n);
        }
      }),
      (Mr = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((G(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = cr(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((G(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = cr(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          K(this, `chunks`, []);
        }
      }),
      (Nr = class e {
        static read(t) {
          let n = new e(),
            r = t.readUint16();
          for (let e = 0; e < r; e++) {
            let e = t.readString(),
              r = ur.read(t);
            n.setField(e, r);
          }
          return n;
        }
        write(e) {
          for (let [t, n] of (e.writeUint16(this.fields.size), this.fields))
            (e.writeString(t), ur.write(e, n));
        }
        getData() {
          let e = {};
          for (let [t, n] of this.fields) e[t] = n;
          return e;
        }
        setField(e, t) {
          this.fields.set(e, t);
        }
        getField(e) {
          return this.fields.get(e);
        }
        constructor() {
          K(this, `fields`, new Map());
        }
      }),
      (Pr = class {
        scanItems() {
          return (
            (this.itemsPromise ??= jr(this.url).then(async (e) => {
              if (!e.ok)
                throw Error(`Request failed: ${e.status} ${e.statusText}`);
              let t = await e.arrayBuffer(),
                n = new Cr(new Uint8Array(t)),
                r = [],
                i = n.readUint32();
              for (let e = 0; e < i; e++) {
                let e = n.getOffset(),
                  t = Nr.read(n),
                  i = n.getOffset() - e,
                  a = new Dr(this.id, e, i).toString(),
                  o = { pointer: a, data: t.getData() };
                (this.itemLoader.prime(a, o), r.push(o));
              }
              return r;
            })),
            this.itemsPromise
          );
        }
        resolveItem(e) {
          return this.itemLoader.load(e);
        }
        constructor(e, t) {
          ((this.id = e),
            (this.url = t),
            K(this, `itemsPromise`),
            K(
              this,
              `itemLoader`,
              new xr.default(
                async (e) => {
                  let t = e.map((e) => {
                    let t = Dr.fromString(e);
                    return { from: t.offset, to: t.offset + t.length };
                  });
                  return (await sr(this.url, t)).map((t, n) => {
                    let r = new Cr(t),
                      i = Nr.read(r),
                      a = e[n];
                    return (
                      G(a, `Missing pointer`),
                      { pointer: a, data: i.getData() }
                    );
                  });
                },
                { maxBatchSize: 250 },
              ),
            ));
        }
      }),
      (Fr = class {
        async scanItems() {
          return (
            await Promise.all(this.chunks.map(async (e) => e.scanItems()))
          ).flat();
        }
        resolveItems(e) {
          return Promise.all(
            e.map((e) => {
              let t = Dr.fromString(e),
                n = this.chunks[t.chunkId];
              return (G(n, `Missing chunk`), n.resolveItem(e));
            }),
          );
        }
        compareItems(e, t) {
          let n = Dr.fromString(e.pointer),
            r = Dr.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return ur.compare(e, t, n);
        }
        constructor(e) {
          ((this.options = e),
            K(this, `id`),
            K(this, `schema`),
            K(this, `indexes`),
            K(this, `resolveRichText`),
            K(this, `resolveVectorSetItem`),
            K(this, `chunks`),
            (this.chunks = this.options.chunks.map((e, t) => new Pr(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function Lr(e) {
  return typeof e == `object` && !!e && !g(e) && Vr in e;
}
function Rr(e, ...t) {
  if (!e)
    throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function zr(e) {
  let t = new Map();
  return (n) => {
    let i = t.get(n);
    if (i) return i;
    let a = (function t(n) {
      switch (n[0]) {
        case 1: {
          let [, ...e] = n;
          return f(r, void 0, ...e.map(t));
        }
        case 2: {
          let [, e, ...r] = n;
          return f(V, e, ...r.map(t));
        }
        case 3: {
          let [, r, i, a, o] = n;
          for (let e of a) {
            let n = i[e];
            n && (i[e] = t(n));
          }
          for (let t of o) {
            let n = i[t];
            if (typeof n != `string`) continue;
            let r = e[n];
            r && (Lr(r) && r.preload(), (i[t] = r));
          }
          let s = e[r];
          return (
            Rr(s, `Module not found`),
            Lr(s) && s.preload(),
            _(ge, {
              componentIdentifier: r,
              children: (e) => _(ve, { component: s, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, r, ...i] = n,
            a = i.map(t);
          return f(e === `a` ? w.a : e, r, ...a);
        }
        case 5: {
          let [, e] = n;
          return e;
        }
      }
    })(JSON.parse(n));
    return (t.set(n, a), a);
  };
}
var Br,
  Vr,
  Hr,
  Ur = e(() => {
    (o(),
      y(),
      L(),
      c(),
      t !== void 0 && t.requestIdleCallback,
      (Vr = `preload`),
      (Hr =
        (((Br = Hr || {})[(Br.Fragment = 1)] = `Fragment`),
        (Br[(Br.Link = 2)] = `Link`),
        (Br[(Br.Module = 3)] = `Module`),
        (Br[(Br.Tag = 4)] = `Tag`),
        (Br[(Br.Text = 5)] = `Text`),
        Br)));
  }),
  Wr,
  Gr,
  Kr,
  qr,
  Jr,
  Yr = e(() => {
    (L(),
      Ir(),
      Ur(),
      (Wr = {
        createdAt: { isNullable: !0, type: U.Date },
        f45RD1AfX: { isNullable: !0, type: U.ResponsiveImage },
        FDdoQRGUv: { isNullable: !0, type: U.Link },
        id: { isNullable: !1, type: U.String },
        iWygi89xG: { isNullable: !0, type: U.ResponsiveImage },
        lEK2vKG6E: { isNullable: !0, type: U.String },
        nextItemId: { isNullable: !0, type: U.String },
        previousItemId: { isNullable: !0, type: U.String },
        SaHmXX4qr: { isNullable: !0, type: U.String },
        st2QZ5Pro: { isNullable: !0, type: U.String },
        updatedAt: { isNullable: !0, type: U.Date },
        V_rKa0VK9: { isNullable: !0, type: U.ResponsiveImage },
        Yl94iilST: { isNullable: !0, type: U.String },
      }),
      (Gr = []),
      (Kr = (e) => {
        let t = Gr[e];
        if (t) return t().then((e) => e.default);
      }),
      (qr = zr({})),
      new xe(),
      (Jr = {
        collectionByLocaleId: {
          default: new Fr({
            chunks: [
              new URL(
                `./cms-data-chunk-5.framercms`,
                import.meta.url,
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `978cc54d-2c71-4cde-abff-93aef1365856default`,
            indexes: [],
            resolveRichText: qr,
            resolveVectorSetItem: Kr,
            schema: Wr,
          }),
        },
        displayName: `Project Home_05`,
        id: `978cc54d-2c71-4cde-abff-93aef1365856`,
      }),
      I(Jr, {
        iWygi89xG: { title: `Thumbnail`, type: U.ResponsiveImage },
        V_rKa0VK9: { title: `Shape`, type: U.ResponsiveImage },
        f45RD1AfX: {
          __defaultAssetReference: `data:framer/asset-reference,home-showcase-2.png?originalFilename=leere-shape.png&width=554&height=554`,
          title: `Shape 2`,
          type: U.ResponsiveImage,
        },
        SaHmXX4qr: { defaultValue: ``, title: `Title`, type: U.String },
        Yl94iilST: { defaultValue: ``, title: `Service 1`, type: U.String },
        st2QZ5Pro: { defaultValue: ``, title: `Service 2`, type: U.String },
        FDdoQRGUv: { title: `Link to Project Detailpage`, type: U.Link },
        lEK2vKG6E: { preventLocalization: !0, title: `Slug`, type: U.String },
        createdAt: { title: `Created`, type: U.Date },
        updatedAt: { title: `Updated`, type: U.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/wp0VxvTc5:default`,
          title: `Previous`,
          type: U.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/wp0VxvTc5:default`,
          title: `Next`,
          type: U.CollectionReference,
        },
      }));
  });
function Xr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Zr,
  Qr,
  $r,
  ei,
  ti,
  ni,
  ri,
  ii,
  ai,
  oi,
  si,
  ci,
  li,
  ui,
  di,
  fi,
  pi,
  mi,
  hi = e(() => {
    (y(),
      L(),
      O(),
      c(),
      Yr(),
      Ae(),
      ze(),
      (Zr = Ce(ye)),
      (Qr = [`SLMMWausd`, `KA_54aCfU`]),
      ($r = `framer-Iu1AV`),
      (ei = { KA_54aCfU: `framer-v-10452q8`, SLMMWausd: `framer-v-9y0le` }),
      (ti = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ni = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (ri = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (ii = { delay: 0, duration: 3.9, ease: [0, 0, 1, 1], type: `tween` }),
      (ai = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (oi = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? e.toLowerCase() === t.toLowerCase()
          : e === t),
      (si = () => ({
        from: { alias: `SLMMWausd`, data: Jr, type: `Collection` },
        limit: { type: `LiteralValue`, value: 10 },
        select: [
          { collection: `SLMMWausd`, name: `FDdoQRGUv`, type: `Identifier` },
          { collection: `SLMMWausd`, name: `iWygi89xG`, type: `Identifier` },
          { collection: `SLMMWausd`, name: `SaHmXX4qr`, type: `Identifier` },
          { collection: `SLMMWausd`, name: `Yl94iilST`, type: `Identifier` },
          { collection: `SLMMWausd`, name: `st2QZ5Pro`, type: `Identifier` },
          { collection: `SLMMWausd`, name: `f45RD1AfX`, type: `Identifier` },
          { collection: `SLMMWausd`, name: `V_rKa0VK9`, type: `Identifier` },
          { collection: `SLMMWausd`, name: `lEK2vKG6E`, type: `Identifier` },
          { collection: `SLMMWausd`, name: `id`, type: `Identifier` },
        ],
      })),
      (ci = ({ query: e, pageSize: t, children: n }) => n(Ee(e))),
      (li = ({ value: e, children: t }) => {
        let n = p(T),
          r = e ?? n.transition,
          a = i(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return _(T.Provider, { value: a, children: t });
      }),
      (ui = { "Variant 1": `SLMMWausd`, "Variant 2": `KA_54aCfU` }),
      (di = w.create(r)),
      (fi = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: ui[r.variant] ?? r.variant ?? `SLMMWausd`,
      })),
      (pi = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (mi = A(
        v(function (e, t) {
          let n = u(null),
            i = t ?? n,
            a = b(),
            { activeLocale: o, setLocale: s } = de(),
            c = _e(),
            { style: l, className: f, layoutId: p, variant: m, ...g } = fi(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: ee,
              setGestureState: T,
              setVariant: E,
              variants: O,
            } = re({
              cycleOrder: Qr,
              defaultVariant: `SLMMWausd`,
              ref: i,
              variant: m,
              variantClassNames: ei,
            }),
            k = pi(e, O),
            { activeVariantCallback: A, delay: te } = fe(v),
            j = A(async (...e) => {
              (T({ isHovered: !0 }), E(`KA_54aCfU`));
            }),
            M = A(async (...e) => {
              (T({ isHovered: !1 }), E(`SLMMWausd`));
            }),
            ne = N($r, He, Me),
            F = (e) => v === `KA_54aCfU` && e;
          return _(D, {
            id: p ?? a,
            children: _(di, {
              animate: O,
              initial: !1,
              children: _(li, {
                value: ti,
                children: _(w.div, {
                  ...g,
                  ...S,
                  className: N(ne, `framer-9y0le`, f, y),
                  "data-framer-name": `Variant 1`,
                  "data-highlight": !0,
                  layoutDependency: k,
                  layoutId: `SLMMWausd`,
                  onMouseEnter: j,
                  ref: i,
                  style: { ...l },
                  ...Xr(
                    {
                      KA_54aCfU: {
                        "data-framer-name": `Variant 2`,
                        onMouseLeave: M,
                      },
                    },
                    v,
                    C,
                  ),
                  children: _(me, {
                    children: _(ci, {
                      query: si(),
                      children: (e, t, n) => {
                        let i = e?.length ?? 0,
                          a = oi(i, 0);
                        return h(d, {
                          children: [
                            e?.map(
                              (
                                {
                                  f45RD1AfX: e,
                                  FDdoQRGUv: t,
                                  id: n,
                                  iWygi89xG: i,
                                  lEK2vKG6E: a,
                                  SaHmXX4qr: o,
                                  st2QZ5Pro: s,
                                  V_rKa0VK9: l,
                                  Yl94iilST: u,
                                },
                                d,
                              ) => {
                                ((t =
                                  t && t.pathVariables
                                    ? t
                                    : {
                                        pathVariables: {
                                          qD3idoXBI: `381-event-space`,
                                        },
                                        unresolvedPathSlugs: {
                                          qD3idoXBI: {
                                            collectionId: `R2jsuapbg`,
                                            collectionItemId: `Tp8rUcoQa`,
                                          },
                                        },
                                        webPageId: `R3ke5TPEo`,
                                      }),
                                  (o = `381 EVENT SPACE`),
                                  (u = `Exhibition & Event Architecture`),
                                  (s = ``),
                                  (a ??= ``));
                                let f = ri(e),
                                  p = ri(l);
                                return _(
                                  D,
                                  {
                                    id: `SLMMWausd-${n}`,
                                    children: _(ue.Provider, {
                                      value: { lEK2vKG6E: a },
                                      children: _(V, {
                                        href: t,
                                        motionChild: !0,
                                        nodeId: `BV1u6Iheg`,
                                        openInNewTab: !1,
                                        scopeId: `BD9tauQo8`,
                                        children: h(w.a, {
                                          className: `framer-14w8uhi framer-s1l68r`,
                                          layoutDependency: k,
                                          layoutId: `BV1u6Iheg`,
                                          children: [
                                            _(ye, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                loading: P(
                                                  (c?.y || 0) +
                                                    0 +
                                                    (((c?.height || 467) -
                                                      0 -
                                                      1) /
                                                      2 +
                                                      0 +
                                                      0) +
                                                    0 +
                                                    0,
                                                ),
                                                pixelHeight: 4024,
                                                pixelWidth: 6048,
                                                sizes: c?.width || `100vw`,
                                                ...ni(i),
                                              },
                                              className: `framer-deubm8`,
                                              layoutDependency: k,
                                              layoutId: `SsFOAscQp`,
                                            }),
                                            h(w.div, {
                                              className: `framer-mgufgy`,
                                              layoutDependency: k,
                                              layoutId: `WBNwhZ6t_`,
                                              children: [
                                                h(w.div, {
                                                  className: `framer-4d2bgz`,
                                                  layoutDependency: k,
                                                  layoutId: `XI4cydrZa`,
                                                  children: [
                                                    _(W, {
                                                      __fromCanvasComponent: !0,
                                                      children: _(r, {
                                                        children: _(w.h3, {
                                                          className: `framer-styles-preset-es7zc9`,
                                                          "data-styles-preset": `YZV7Namdz`,
                                                          dir: `auto`,
                                                          children: `381 EVENT SPACE`,
                                                        }),
                                                      }),
                                                      className: `framer-10dy5t6`,
                                                      fonts: [`Inter`],
                                                      layoutDependency: k,
                                                      layoutId: `rci5uKd7x`,
                                                      style: {
                                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                        "--framer-link-text-decoration": `underline`,
                                                      },
                                                      text: o,
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    _(W, {
                                                      __fromCanvasComponent: !0,
                                                      children: _(r, {
                                                        children: _(w.p, {
                                                          className: `framer-styles-preset-x2q274`,
                                                          "data-styles-preset": `U2MfhGBrp`,
                                                          dir: `auto`,
                                                          children: `Fintech API & Distributed Systems`,
                                                        }),
                                                      }),
                                                      className: `framer-73zh5r`,
                                                      fonts: [`Inter`],
                                                      layoutDependency: k,
                                                      layoutId: `OTPpsAFji`,
                                                      style: {
                                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                        "--framer-link-text-decoration": `underline`,
                                                      },
                                                      text: u,
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    _(W, {
                                                      __fromCanvasComponent: !0,
                                                      children: _(r, {
                                                        children: _(w.p, {
                                                          className: `framer-styles-preset-x2q274`,
                                                          "data-styles-preset": `U2MfhGBrp`,
                                                          dir: `auto`,
                                                          children: `Fintech API & Distributed Systems`,
                                                        }),
                                                      }),
                                                      className: `framer-1vjsacf`,
                                                      fonts: [`Inter`],
                                                      layoutDependency: k,
                                                      layoutId: `kY6tuVbiy`,
                                                      style: {
                                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                        "--framer-link-text-decoration": `underline`,
                                                      },
                                                      text: s,
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                                h(w.div, {
                                                  className: `framer-13j09ew`,
                                                  layoutDependency: k,
                                                  layoutId: `Iuq8PUoHS`,
                                                  children: [
                                                    F(f !== !1) &&
                                                      _(Zr, {
                                                        background: {
                                                          alt: ``,
                                                          fit: `fill`,
                                                          pixelHeight: 554,
                                                          pixelWidth: 554,
                                                          ...ni(e),
                                                        },
                                                        className: `framer-1scpotx`,
                                                        fitImageDimension: `width`,
                                                        layoutDependency: k,
                                                        layoutId: `aqqDfpwgG`,
                                                        ...Xr(
                                                          {
                                                            KA_54aCfU: {
                                                              __framer__loop:
                                                                ai,
                                                              __framer__loopEffectEnabled:
                                                                !0,
                                                              __framer__loopPauseOffscreen:
                                                                !0,
                                                              __framer__loopRepeatDelay: 0,
                                                              __framer__loopRepeatType: `loop`,
                                                              __framer__loopTransition:
                                                                ii,
                                                              __perspectiveFX:
                                                                !1,
                                                              __smartComponentFX:
                                                                !0,
                                                              __targetOpacity: 1,
                                                              background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                loading: P(
                                                                  (c?.y || 0) +
                                                                    0 +
                                                                    (((c?.height ||
                                                                      467) -
                                                                      0 -
                                                                      1) /
                                                                      2 +
                                                                      0 +
                                                                      0) +
                                                                    0 +
                                                                    10 +
                                                                    10 +
                                                                    0,
                                                                ),
                                                                pixelHeight: 554,
                                                                pixelWidth: 554,
                                                                sizes: `45px`,
                                                                ...ni(e),
                                                              },
                                                            },
                                                          },
                                                          v,
                                                          C,
                                                        ),
                                                      }),
                                                    F(p !== !1) &&
                                                      _(Zr, {
                                                        background: {
                                                          alt: ``,
                                                          fit: `fill`,
                                                          pixelHeight: 200,
                                                          pixelWidth: 200,
                                                          ...ni(l),
                                                        },
                                                        className: `framer-wifs95`,
                                                        fitImageDimension: `width`,
                                                        layoutDependency: k,
                                                        layoutId: `GDC2BdafG`,
                                                        ...Xr(
                                                          {
                                                            KA_54aCfU: {
                                                              __framer__loop:
                                                                ai,
                                                              __framer__loopEffectEnabled:
                                                                !0,
                                                              __framer__loopPauseOffscreen:
                                                                !0,
                                                              __framer__loopRepeatDelay: 0,
                                                              __framer__loopRepeatType: `loop`,
                                                              __framer__loopTransition:
                                                                ii,
                                                              __perspectiveFX:
                                                                !1,
                                                              __smartComponentFX:
                                                                !0,
                                                              __targetOpacity: 1,
                                                              background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                loading: P(
                                                                  (c?.y || 0) +
                                                                    0 +
                                                                    (((c?.height ||
                                                                      467) -
                                                                      0 -
                                                                      1) /
                                                                      2 +
                                                                      0 +
                                                                      0) +
                                                                    0 +
                                                                    10 +
                                                                    10 +
                                                                    0,
                                                                ),
                                                                pixelHeight: 200,
                                                                pixelWidth: 200,
                                                                sizes: `45px`,
                                                                ...ni(l),
                                                              },
                                                            },
                                                          },
                                                          v,
                                                          C,
                                                        ),
                                                      }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  },
                                  n,
                                );
                              },
                            ),
                            a !== !1 &&
                              _(w.div, {
                                className: `framer-wj1ye9`,
                                "data-border": !0,
                                "data-framer-name": `Empty State`,
                                layoutDependency: k,
                                layoutId: `GGwYuR4tk`,
                                style: {
                                  "--border-bottom-width": `1px`,
                                  "--border-color": `rgba(136, 136, 136, 0.2)`,
                                  "--border-left-width": `1px`,
                                  "--border-right-width": `1px`,
                                  "--border-style": `dashed`,
                                  "--border-top-width": `1px`,
                                  backgroundColor: `rgba(204, 204, 204, 0.2)`,
                                  borderBottomLeftRadius: 20,
                                  borderBottomRightRadius: 20,
                                  borderTopLeftRadius: 20,
                                  borderTopRightRadius: 20,
                                },
                                children: _(W, {
                                  __fromCanvasComponent: !0,
                                  children: _(r, {
                                    children: _(w.p, {
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(153, 153, 153))`,
                                      },
                                      children: `No items`,
                                    }),
                                  }),
                                  className: `framer-fjv1pn`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `SSz_vFeZj`,
                                  style: {
                                    "--extracted-r6o4lv": `rgb(153, 153, 153)`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                          ],
                        });
                      },
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Iu1AV.framer-s1l68r, .framer-Iu1AV .framer-s1l68r { display: block; }`,
          `.framer-Iu1AV.framer-9y0le { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 571px; }`,
          `.framer-Iu1AV .framer-14w8uhi { align-content: center; align-items: center; aspect-ratio: 1.2223738062755798 / 1; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 467px); justify-content: flex-start; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
          `.framer-Iu1AV .framer-deubm8 { flex: 1 0 0px; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-Iu1AV .framer-mgufgy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 10px 0px 0px 0px; position: relative; width: 100%; }`,
          `.framer-Iu1AV .framer-4d2bgz { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-Iu1AV .framer-10dy5t6 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-Iu1AV .framer-73zh5r, .framer-Iu1AV .framer-1vjsacf, .framer-Iu1AV .framer-fjv1pn { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-Iu1AV .framer-13j09ew { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 45px; justify-content: flex-end; min-width: 45px; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-Iu1AV .framer-1scpotx, .framer-Iu1AV .framer-wifs95 { flex: none; height: 100%; overflow: var(--overflow-clip-fallback, clip); position: relative; width: auto; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-Iu1AV .framer-wj1ye9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100px; justify-content: center; min-height: 100%; min-width: 100%; padding: 10px; position: relative; width: min-content; }`,
          `.framer-Iu1AV.framer-v-10452q8 .framer-13j09ew { min-width: unset; }`,
          ...Be,
          ...Re,
          `.framer-Iu1AV[data-border="true"]::after, .framer-Iu1AV [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-Iu1AV`,
      )),
      (mi.displayName = `Projekt_Kachel_05`),
      (mi.defaultProps = { height: 467, width: 571 }),
      I(mi, {
        variant: {
          options: [`SLMMWausd`, `KA_54aCfU`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: U.Enum,
        },
      }),
      Se(
        mi,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/fonts/inter-400.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/fonts/inter-400-2.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/fonts/inter-400-3.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `/fonts/inter-400-4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/fonts/inter-400-5.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/fonts/inter-400-6.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `/fonts/inter-400-7.woff2`,
                weight: `400`,
              },
            ],
          },
          ...M(Ve),
          ...M(ke),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (mi.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = R.get(si(), n);
          return Promise.allSettled([r.preload()]);
        },
      }));
  });
function gi(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function q(e, ...t) {
  if (!e)
    throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function _i(e) {
  throw Error(`Unexpected value: ${e}`);
}
function vi(e) {
  return typeof e == `string`;
}
function yi(e) {
  return Number.isFinite(e);
}
function bi(e) {
  return e === null;
}
function xi(e) {
  if (bi(e)) return 0;
  switch (e.type) {
    case U.Array:
      return 1;
    case U.Boolean:
      return 2;
    case U.Color:
      return 3;
    case U.Date:
      return 4;
    case U.Enum:
      return 5;
    case U.File:
      return 6;
    case U.ResponsiveImage:
      return 10;
    case U.Link:
      return 7;
    case U.Number:
      return 8;
    case U.Object:
      return 9;
    case U.RichText:
      return 11;
    case U.String:
      return 12;
    case U.VectorSetItem:
      return 13;
    default:
      _i(e);
  }
}
function Si(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = da.read(e);
    n.push(t);
  }
  return { type: U.Array, value: n };
}
function Ci(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) da.write(e, n);
}
function wi(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = da.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Ti(e) {
  return { type: U.Boolean, value: e.readUint8() !== 0 };
}
function Ei(e, t) {
  e.writeUint8(+!!t.value);
}
function Di(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Oi(e) {
  return { type: U.Color, value: e.readString() };
}
function ki(e, t) {
  e.writeString(t.value);
}
function Ai(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ji(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: U.Date, value: n.toISOString() };
}
function Mi(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function Ni(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function Pi(e) {
  return { type: U.Enum, value: e.readString() };
}
function Fi(e, t) {
  e.writeString(t.value);
}
function Ii(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Li(e) {
  return { type: U.File, value: e.readString() };
}
function Ri(e, t) {
  e.writeString(t.value);
}
function zi(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Bi(e) {
  return { type: U.Link, value: e.readJson() };
}
function Vi(e, t) {
  e.writeJson(t.value);
}
function Hi(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Ui(e) {
  return { type: U.Number, value: e.readFloat64() };
}
function Wi(e, t) {
  e.writeFloat64(t.value);
}
function Gi(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Ki(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = da.read(e);
  }
  return { type: U.Object, value: n };
}
function qi(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n))
    (e.writeString(t), da.write(e, r));
}
function Ji(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = da.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function Yi(e) {
  return { type: U.ResponsiveImage, value: e.readJson() };
}
function Xi(e, t) {
  e.writeJson(t.value);
}
function Zi(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Qi(e) {
  let t = e.readInt8();
  if (t === 0) return { type: U.RichText, value: e.readUint32() };
  if (t === 1) return { type: U.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function $i(e, t) {
  if (yi(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (vi(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function ea(e, t) {
  let n = e.value,
    r = t.value;
  if ((yi(n) && yi(r)) || (vi(n) && vi(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function ta(e) {
  return { type: U.String, value: e.readString() };
}
function na(e, t) {
  e.writeString(t.value);
}
function ra(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function ia(e) {
  return { type: U.VectorSetItem, value: e.readUint32() };
}
function aa(e, t) {
  e.writeUint32(t.value);
}
function oa(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function sa(e) {
  let t = Math.floor(Aa * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function ca(e, t) {
  let n = ua(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await Ma(a);
  if (s.status !== 200)
    throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new Na(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function la(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function ua(e) {
  q(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to
      ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) })
      : n.push(e);
  }
  return n;
}
var da,
  fa,
  pa,
  ma,
  ha,
  ga,
  _a,
  va,
  ya,
  ba,
  xa,
  J,
  Sa,
  Ca,
  wa,
  Ta,
  Ea,
  Da,
  Oa,
  ka,
  Aa,
  ja,
  Ma,
  Na,
  Pa,
  Fa,
  Ia,
  La = e(() => {
    (o(),
      L(),
      (fa = Object.create),
      (pa = Object.defineProperty),
      (ma = Object.getOwnPropertyDescriptor),
      (ha = Object.getOwnPropertyNames),
      (ga = Object.getPrototypeOf),
      (_a = Object.prototype.hasOwnProperty),
      (va = (e, t, n) =>
        t in e
          ? pa(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n)),
      (ya = (e, t) =>
        function () {
          try {
            return (
              t || (0, e[ha(e)[0]])((t = { exports: {} }).exports, t),
              t.exports
            );
          } catch (e) {
            throw ((t = 0), e);
          }
        }),
      (ba = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of ha(t))
            _a.call(e, i) ||
              i === n ||
              pa(e, i, {
                get: () => t[i],
                enumerable: !(r = ma(t, i)) || r.enumerable,
              });
        return e;
      }),
      (xa = (e, t, n) => (
        (n = e == null ? {} : fa(ga(e))),
        ba(
          !t && e && e.__esModule
            ? n
            : pa(n, `default`, { value: e, enumerable: !0 }),
          e,
        )
      )),
      (J = (e, t, n) => va(e, typeof t == `symbol` ? t : t + ``, n)),
      (Sa = xa(
        ya({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`,
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (!(!e || !1 !== e.batch)) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(
                          `maxBatchSize must be a positive number: ` + t,
                        );
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(
                          `batchScheduleFn must be a function: ` + t,
                        );
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (!(!e || !1 !== e.cache)) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(
                          function (e) {
                            return t && typeof t[e] != `function`;
                          },
                        );
                        if (n.length !== 0)
                          throw TypeError(
                            `Custom cacheMap missing methods: ` + n.join(`, `),
                          );
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`,
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (
                          t !== null &&
                          !t.hasDispatched &&
                          t.keys.length < e._maxBatchSize
                        )
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (
                                ((t.hasDispatched = !0), t.keys.length === 0)
                              ) {
                                o(t);
                                return;
                              }
                              try {
                                n = e._batchLoadFn(t.keys);
                              } catch (n) {
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                      String(n) +
                                      `.`,
                                  ),
                                );
                              }
                              if (!n || typeof n.then != `function`)
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                      String(n) +
                                      `.`,
                                  ),
                                );
                              n.then(function (e) {
                                if (!s(e))
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                      String(e) +
                                      `.`,
                                  );
                                if (e.length !== t.keys.length)
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                      String(t.keys) +
                                      `

Values:
` +
                                      String(e),
                                  );
                                o(t);
                                for (var n = 0; n < t.callbacks.length; n++) {
                                  var r = e[n];
                                  r instanceof Error
                                    ? t.callbacks[n].reject(r)
                                    : t.callbacks[n].resolve(r);
                                }
                              }).catch(function (n) {
                                a(e, t, n);
                              });
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`,
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        }),
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` &&
                typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits)
                for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 &&
                    Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1,
      )),
      (Ca = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (wa = class {
        getOffset() {
          return this.offset;
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
        }
        readUint8() {
          let e = Ca.Uint8;
          this.ensureLength(e);
          let t = this.view.getUint8(this.offset);
          return ((this.offset += e), t);
        }
        readUint16() {
          let e = Ca.Uint16;
          this.ensureLength(e);
          let t = this.view.getUint16(this.offset);
          return ((this.offset += e), t);
        }
        readUint32() {
          let e = Ca.Uint32;
          this.ensureLength(e);
          let t = this.view.getUint32(this.offset);
          return ((this.offset += e), t);
        }
        readUint64() {
          let e = this.readBigUint64();
          return Number(e);
        }
        readBigUint64() {
          let e = Ca.BigUint64;
          this.ensureLength(e);
          let t = this.view.getBigUint64(this.offset);
          return ((this.offset += e), t);
        }
        readInt8() {
          let e = Ca.Int8;
          this.ensureLength(e);
          let t = this.view.getInt8(this.offset);
          return ((this.offset += e), t);
        }
        readInt16() {
          let e = Ca.Int16;
          this.ensureLength(e);
          let t = this.view.getInt16(this.offset);
          return ((this.offset += e), t);
        }
        readInt32() {
          let e = Ca.Int32;
          this.ensureLength(e);
          let t = this.view.getInt32(this.offset);
          return ((this.offset += e), t);
        }
        readInt64() {
          let e = this.readBigInt64();
          return Number(e);
        }
        readBigInt64() {
          let e = Ca.BigInt64;
          this.ensureLength(e);
          let t = this.view.getBigInt64(this.offset);
          return ((this.offset += e), t);
        }
        readFloat32() {
          let e = Ca.Float32;
          this.ensureLength(e);
          let t = this.view.getFloat32(this.offset);
          return ((this.offset += e), t);
        }
        readFloat64() {
          let e = Ca.Float64;
          this.ensureLength(e);
          let t = this.view.getFloat64(this.offset);
          return ((this.offset += e), t);
        }
        readBytes(e) {
          let t = this.offset,
            n = t + e,
            r = this.bytes.subarray(t, n);
          return ((this.offset = n), r);
        }
        readString() {
          let e = this.readUint32(),
            t = this.readBytes(e);
          return this.decoder.decode(t);
        }
        readJson() {
          let e = this.readString();
          return JSON.parse(e);
        }
        constructor(e) {
          (J(this, `bytes`, e),
            J(this, `offset`, 0),
            J(this, `view`),
            J(this, `decoder`, new TextDecoder()),
            (this.view = gi(this.bytes)));
        }
      }),
      t !== void 0 && t.requestIdleCallback,
      (Ta = (e) => 2 ** e - 1),
      (Ea = (e) => -(2 ** (e - 1))),
      (Da = (e) => 2 ** (e - 1) - 1),
      Ea(8),
      Ea(16),
      Ea(32),
      -(BigInt(2) ** BigInt(63)),
      Ta(8),
      Ta(16),
      Ta(32),
      BigInt(2) ** BigInt(64) - BigInt(1),
      Da(8),
      Da(16),
      Da(32),
      BigInt(2) ** BigInt(63) - BigInt(1),
      (Oa = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            q(yi(n), `Invalid chunkId`),
            q(yi(r), `Invalid offset`),
            q(yi(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          let n = t.readUint16(),
            r = t.readUint32(),
            i = t.readUint32();
          return new e(n, r, i);
        }
        write(e) {
          (e.writeUint16(this.chunkId),
            e.writeUint32(this.offset),
            e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (q(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          (J(this, `chunkId`, e), J(this, `offset`, t), J(this, `length`, n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return Si(e);
            case 2:
              return Ti(e);
            case 3:
              return Oi(e);
            case 4:
              return ji(e);
            case 5:
              return Pi(e);
            case 6:
              return Li(e);
            case 7:
              return Bi(e);
            case 8:
              return Ui(e);
            case 9:
              return Ki(e);
            case 10:
              return Yi(e);
            case 11:
              return Qi(e);
            case 12:
              return ta(e);
            case 13:
              return ia(e);
            default:
              _i(t);
          }
        }),
          (e.write = function (e, t) {
            let n = xi(t);
            if ((e.writeUint8(n), !bi(t)))
              switch (t.type) {
                case U.Array:
                  return Ci(e, t);
                case U.Boolean:
                  return Ei(e, t);
                case U.Color:
                  return ki(e, t);
                case U.Date:
                  return Mi(e, t);
                case U.Enum:
                  return Fi(e, t);
                case U.File:
                  return Ri(e, t);
                case U.Link:
                  return Vi(e, t);
                case U.Number:
                  return Wi(e, t);
                case U.Object:
                  return qi(e, t);
                case U.ResponsiveImage:
                  return Xi(e, t);
                case U.RichText:
                  return $i(e, t);
                case U.VectorSetItem:
                  return aa(e, t);
                case U.String:
                  return na(e, t);
                default:
                  _i(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = xi(e),
              i = xi(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (bi(e) || bi(t)) return 0;
            switch (e.type) {
              case U.Array:
                return (q(t.type === U.Array), wi(e, t, n));
              case U.Boolean:
                return (q(t.type === U.Boolean), Di(e, t));
              case U.Color:
                return (q(t.type === U.Color), Ai(e, t));
              case U.Date:
                return (q(t.type === U.Date), Ni(e, t));
              case U.Enum:
                return (q(t.type === U.Enum), Ii(e, t));
              case U.File:
                return (q(t.type === U.File), zi(e, t));
              case U.Link:
                return (q(t.type === U.Link), Hi(e, t));
              case U.Number:
                return (q(t.type === U.Number), Gi(e, t));
              case U.Object:
                return (q(t.type === U.Object), Ji(e, t, n));
              case U.ResponsiveImage:
                return (q(t.type === U.ResponsiveImage), Zi(e, t));
              case U.RichText:
                return (q(t.type === U.RichText), ea(e, t));
              case U.VectorSetItem:
                return (q(t.type === U.VectorSetItem), oa(e, t));
              case U.String:
                return (q(t.type === U.String), ra(e, t, n));
              default:
                _i(e);
            }
          }));
      })((da ||= {})),
      (ka = 3),
      (Aa = 250),
      (ja = [408, 429, 500, 502, 503, 504]),
      (Ma = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!ja.includes(r.status) || ++n > ka) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > ka) throw e;
          }
          await sa(n);
        }
      }),
      (Na = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((q(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = la(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((q(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = la(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          J(this, `chunks`, []);
        }
      }),
      (Pa = class e {
        static read(t) {
          let n = new e(),
            r = t.readUint16();
          for (let e = 0; e < r; e++) {
            let e = t.readString(),
              r = da.read(t);
            n.setField(e, r);
          }
          return n;
        }
        write(e) {
          for (let [t, n] of (e.writeUint16(this.fields.size), this.fields))
            (e.writeString(t), da.write(e, n));
        }
        getData() {
          let e = {};
          for (let [t, n] of this.fields) e[t] = n;
          return e;
        }
        setField(e, t) {
          this.fields.set(e, t);
        }
        getField(e) {
          return this.fields.get(e);
        }
        constructor() {
          J(this, `fields`, new Map());
        }
      }),
      (Fa = class {
        scanItems() {
          return (
            (this.itemsPromise ??= Ma(this.url).then(async (e) => {
              if (!e.ok)
                throw Error(`Request failed: ${e.status} ${e.statusText}`);
              let t = await e.arrayBuffer(),
                n = new wa(new Uint8Array(t)),
                r = [],
                i = n.readUint32();
              for (let e = 0; e < i; e++) {
                let e = n.getOffset(),
                  t = Pa.read(n),
                  i = n.getOffset() - e,
                  a = new Oa(this.id, e, i).toString(),
                  o = { pointer: a, data: t.getData() };
                (this.itemLoader.prime(a, o), r.push(o));
              }
              return r;
            })),
            this.itemsPromise
          );
        }
        resolveItem(e) {
          return this.itemLoader.load(e);
        }
        constructor(e, t) {
          (J(this, `id`, e),
            J(this, `url`, t),
            J(this, `itemsPromise`),
            J(
              this,
              `itemLoader`,
              new Sa.default(
                async (e) => {
                  let t = e.map((e) => {
                    let t = Oa.fromString(e);
                    return { from: t.offset, to: t.offset + t.length };
                  });
                  return (await ca(this.url, t)).map((t, n) => {
                    let r = new wa(t),
                      i = Pa.read(r),
                      a = e[n];
                    return (
                      q(a, `Missing pointer`),
                      { pointer: a, data: i.getData() }
                    );
                  });
                },
                { maxBatchSize: 250 },
              ),
            ));
        }
      }),
      (Ia = class {
        async scanItems() {
          return (
            await Promise.all(this.chunks.map(async (e) => e.scanItems()))
          ).flat();
        }
        resolveItems(e) {
          return Promise.all(
            e.map((e) => {
              let t = Oa.fromString(e),
                n = this.chunks[t.chunkId];
              return (q(n, `Missing chunk`), n.resolveItem(e));
            }),
          );
        }
        compareItems(e, t) {
          let n = Oa.fromString(e.pointer),
            r = Oa.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return da.compare(e, t, n);
        }
        constructor(e) {
          (J(this, `options`, e),
            J(this, `id`),
            J(this, `schema`),
            J(this, `indexes`),
            J(this, `resolveRichText`),
            J(this, `resolveVectorSetItem`),
            J(this, `chunks`),
            (this.chunks = this.options.chunks.map((e, t) => new Fa(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function Ra(e) {
  return typeof e == `object` && !!e && !g(e) && Ha in e;
}
function za(e, ...t) {
  if (!e)
    throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function Ba(e) {
  let t = new Map();
  return (n) => {
    let i = t.get(n);
    if (i) return i;
    let a = (function t(n) {
      switch (n[0]) {
        case 1: {
          let [, ...e] = n;
          return f(r, void 0, ...e.map(t));
        }
        case 2: {
          let [, e, ...r] = n;
          return f(V, e, ...r.map(t));
        }
        case 3: {
          let [, r, i, a, o] = n;
          for (let e of a) {
            let n = i[e];
            n && (i[e] = t(n));
          }
          for (let t of o) {
            let n = i[t];
            if (typeof n != `string`) continue;
            let r = e[n];
            r && (Ra(r) && r.preload(), (i[t] = r));
          }
          let s = e[r];
          return (
            za(s, `Module not found`),
            Ra(s) && s.preload(),
            _(ge, {
              componentIdentifier: r,
              children: (e) => _(ve, { component: s, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, r, ...i] = n,
            a = i.map(t);
          return f(e === `a` ? w.a : e, r, ...a);
        }
        case 5: {
          let [, e] = n;
          return e;
        }
      }
    })(JSON.parse(n));
    return (t.set(n, a), a);
  };
}
var Va,
  Ha,
  Ua,
  Wa = e(() => {
    (o(),
      y(),
      L(),
      c(),
      t !== void 0 && t.requestIdleCallback,
      (Ha = `preload`),
      (Ua =
        (((Va = Ua || {})[(Va.Fragment = 1)] = `Fragment`),
        (Va[(Va.Link = 2)] = `Link`),
        (Va[(Va.Module = 3)] = `Module`),
        (Va[(Va.Tag = 4)] = `Tag`),
        (Va[(Va.Text = 5)] = `Text`),
        Va)));
  }),
  Ga,
  Ka,
  qa,
  Ja,
  Ya,
  Xa = e(() => {
    (L(),
      La(),
      Wa(),
      (Ga = {
        cpIxP_APp: { isNullable: !0, type: U.String },
        createdAt: { isNullable: !0, type: U.Date },
        cubDqpnQf: { isNullable: !0, type: U.String },
        id: { isNullable: !1, type: U.String },
        IZknqTZiz: { isNullable: !0, type: U.String },
        koXesnrqF: { isNullable: !0, type: U.ResponsiveImage },
        LQD_3w07t: { isNullable: !0, type: U.String },
        nextItemId: { isNullable: !0, type: U.String },
        previousItemId: { isNullable: !0, type: U.String },
        ULRsmwVIP: { isNullable: !0, type: U.ResponsiveImage },
        updatedAt: { isNullable: !0, type: U.Date },
        XdL6YjR8S: { isNullable: !0, type: U.Link },
        zQKZiD8RN: { isNullable: !0, type: U.ResponsiveImage },
      }),
      (Ka = []),
      (qa = (e) => {
        let t = Ka[e];
        if (t) return t().then((e) => e.default);
      }),
      (Ja = Ba({})),
      new xe(),
      (Ya = {
        collectionByLocaleId: {
          default: new Ia({
            chunks: [
              new URL(
                `./cms-data-chunk-1.framercms`,
                import.meta.url,
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `9cc72078-336a-48b8-bf1b-bd8d3a9072abdefault`,
            indexes: [],
            resolveRichText: Ja,
            resolveVectorSetItem: qa,
            schema: Ga,
          }),
        },
        displayName: `Project Home_01`,
        id: `9cc72078-336a-48b8-bf1b-bd8d3a9072ab`,
      }),
      I(Ya, {
        ULRsmwVIP: { title: `Thumbnail`, type: U.ResponsiveImage },
        cpIxP_APp: { defaultValue: ``, title: `Title`, type: U.String },
        koXesnrqF: {
          __defaultAssetReference: `data:framer/asset-reference,home-showcase-4.png?originalFilename=Projekt+4.png&width=200&height=200`,
          title: `shape`,
          type: U.ResponsiveImage,
        },
        zQKZiD8RN: {
          __defaultAssetReference: `data:framer/asset-reference,home-showcase-2.png?originalFilename=leere-shape.png&width=554&height=554`,
          title: `Shape2`,
          type: U.ResponsiveImage,
        },
        IZknqTZiz: { defaultValue: ``, title: `Service 1`, type: U.String },
        cubDqpnQf: { defaultValue: ``, title: `Service 2`, type: U.String },
        XdL6YjR8S: { title: `Link to Project Detailpage`, type: U.Link },
        LQD_3w07t: { preventLocalization: !0, title: `Slug`, type: U.String },
        createdAt: { title: `Created`, type: U.Date },
        updatedAt: { title: `Updated`, type: U.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/c4vXRlL87:default`,
          title: `Previous`,
          type: U.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/c4vXRlL87:default`,
          title: `Next`,
          type: U.CollectionReference,
        },
      }));
  });
function Za(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Qa,
  $a,
  eo,
  to,
  no,
  ro,
  io,
  ao,
  oo,
  so,
  co,
  lo,
  uo,
  fo,
  po,
  mo,
  ho,
  go = e(() => {
    (y(),
      L(),
      O(),
      c(),
      Xa(),
      Ae(),
      ze(),
      (Qa = Ce(ye)),
      ($a = [`EpTpT4Br4`, `YIq6OZnJR`]),
      (eo = `framer-gz2GW`),
      (to = { EpTpT4Br4: `framer-v-iczogk`, YIq6OZnJR: `framer-v-86h7tg` }),
      (no = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ro = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (io = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (ao = { delay: 0, duration: 3.9, ease: [0, 0, 1, 1], type: `tween` }),
      (oo = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (so = () => ({
        from: { alias: `EpTpT4Br4`, data: Ya, type: `Collection` },
        limit: { type: `LiteralValue`, value: 10 },
        select: [
          { collection: `EpTpT4Br4`, name: `ULRsmwVIP`, type: `Identifier` },
          { collection: `EpTpT4Br4`, name: `cpIxP_APp`, type: `Identifier` },
          { collection: `EpTpT4Br4`, name: `IZknqTZiz`, type: `Identifier` },
          { collection: `EpTpT4Br4`, name: `cubDqpnQf`, type: `Identifier` },
          { collection: `EpTpT4Br4`, name: `zQKZiD8RN`, type: `Identifier` },
          { collection: `EpTpT4Br4`, name: `koXesnrqF`, type: `Identifier` },
          { collection: `EpTpT4Br4`, name: `LQD_3w07t`, type: `Identifier` },
          { collection: `EpTpT4Br4`, name: `id`, type: `Identifier` },
        ],
      })),
      (co = ({ query: e, pageSize: t, children: n }) => n(Ee(e))),
      (lo = ({ value: e, children: t }) => {
        let n = p(T),
          r = e ?? n.transition,
          a = i(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return _(T.Provider, { value: a, children: t });
      }),
      (uo = { "Variant 1": `EpTpT4Br4`, "Variant 2": `YIq6OZnJR` }),
      (fo = w.create(r)),
      (po = ({ height: e, id: t, link: n, width: r, ...i }) => ({
        ...i,
        oELdZlPfS: n ?? i.oELdZlPfS,
        variant: uo[i.variant] ?? i.variant ?? `EpTpT4Br4`,
      })),
      (mo = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (ho = A(
        v(function (e, t) {
          let n = u(null),
            i = t ?? n,
            a = b(),
            { activeLocale: o, setLocale: s } = de(),
            c = _e(),
            {
              style: l,
              className: f,
              layoutId: p,
              variant: m,
              oELdZlPfS: g,
              ...v
            } = po(e),
            {
              baseVariant: y,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: ee,
              isLoading: T,
              setGestureState: E,
              setVariant: O,
              variants: k,
            } = re({
              cycleOrder: $a,
              defaultVariant: `EpTpT4Br4`,
              ref: i,
              variant: m,
              variantClassNames: to,
            }),
            A = mo(e, k),
            { activeVariantCallback: te, delay: j } = fe(y),
            M = te(async (...e) => {
              (E({ isHovered: !0 }), O(`YIq6OZnJR`));
            }),
            ne = te(async (...e) => {
              (E({ isHovered: !1 }), O(`EpTpT4Br4`));
            }),
            F = N(eo, He, Me),
            I = (e) => y === `YIq6OZnJR` && e;
          return _(D, {
            id: p ?? a,
            children: _(fo, {
              animate: k,
              initial: !1,
              children: _(lo, {
                value: no,
                children: _(V, {
                  href:
                    g && g.pathVariables
                      ? g
                      : {
                          pathVariables: { qD3idoXBI: `tresor-globus` },
                          unresolvedPathSlugs: {
                            qD3idoXBI: {
                              collectionId: `R2jsuapbg`,
                              collectionItemId: `ysFcG5bAf`,
                            },
                          },
                          webPageId: `R3ke5TPEo`,
                        },
                  motionChild: !0,
                  nodeId: `EpTpT4Br4`,
                  openInNewTab: !1,
                  scopeId: `N64f_ucRq`,
                  children: _(w.a, {
                    ...v,
                    ...C,
                    className: `${N(F, `framer-iczogk`, f, x)} framer-z2lucb`,
                    "data-framer-name": `Variant 1`,
                    "data-highlight": !0,
                    layoutDependency: A,
                    layoutId: `EpTpT4Br4`,
                    onMouseEnter: M,
                    ref: i,
                    style: { ...l },
                    ...Za(
                      {
                        YIq6OZnJR: {
                          "data-framer-name": `Variant 2`,
                          onMouseEnter: void 0,
                          onMouseLeave: ne,
                        },
                      },
                      y,
                      ee,
                    ),
                    children: _(me, {
                      children: _(co, {
                        query: so(),
                        children: (e, t, n) =>
                          _(d, {
                            children: e?.map(
                              (
                                {
                                  cpIxP_APp: e,
                                  cubDqpnQf: t,
                                  id: n,
                                  IZknqTZiz: i,
                                  koXesnrqF: a,
                                  LQD_3w07t: o,
                                  ULRsmwVIP: s,
                                  zQKZiD8RN: l,
                                },
                                u,
                              ) => {
                                ((e = `Tresor Globus`),
                                  (i = `Club & Cultural Architecture`),
                                  (t = ``),
                                  (o ??= ``));
                                let d = io(l),
                                  f = io(a);
                                return _(
                                  D,
                                  {
                                    id: `EpTpT4Br4-${n}`,
                                    children: _(ue.Provider, {
                                      value: { LQD_3w07t: o },
                                      children: h(w.div, {
                                        className: `framer-1smbnk`,
                                        layoutDependency: A,
                                        layoutId: `W13g7o0r4`,
                                        children: [
                                          _(ye, {
                                            background: {
                                              alt: `Software Engineering Architecture Showcase`,
                                              fit: `fill`,
                                              loading: P(
                                                (c?.y || 0) +
                                                  0 +
                                                  (((c?.height || 510.5) -
                                                    0 -
                                                    (Math.max(
                                                      0,
                                                      ((c?.height || 510.5) -
                                                        0 -
                                                        0) /
                                                        1,
                                                    ) *
                                                      1 +
                                                      0)) /
                                                    2 +
                                                    0 +
                                                    0) +
                                                  0 +
                                                  ((Math.max(
                                                    0,
                                                    ((c?.height || 510.5) -
                                                      0 -
                                                      0) /
                                                      1,
                                                  ) *
                                                    1 -
                                                    0 -
                                                    (Math.max(
                                                      0,
                                                      (Math.max(
                                                        0,
                                                        ((c?.height || 510.5) -
                                                          0 -
                                                          0) /
                                                          1,
                                                      ) *
                                                        1 -
                                                        0 -
                                                        90) /
                                                        1,
                                                    ) *
                                                      1 +
                                                      90 +
                                                      0)) /
                                                    2 +
                                                    0 +
                                                    0),
                                              ),
                                              pixelHeight: 1331,
                                              pixelWidth: 2e3,
                                              sizes: c?.width || `100vw`,
                                              ...ro(s),
                                            },
                                            className: `framer-u7ilcw`,
                                            layoutDependency: A,
                                            layoutId: `NQ3aX5scj`,
                                          }),
                                          h(w.div, {
                                            className: `framer-1apg63u`,
                                            layoutDependency: A,
                                            layoutId: `ue6j9W0AU`,
                                            children: [
                                              h(w.div, {
                                                className: `framer-12917ii`,
                                                layoutDependency: A,
                                                layoutId: `VXAbwN4T5`,
                                                children: [
                                                  _(W, {
                                                    __fromCanvasComponent: !0,
                                                    children: _(r, {
                                                      children: _(w.h3, {
                                                        className: `framer-styles-preset-es7zc9`,
                                                        "data-styles-preset": `YZV7Namdz`,
                                                        dir: `auto`,
                                                        children: `Tresor Globus`,
                                                      }),
                                                    }),
                                                    className: `framer-z5h2wy`,
                                                    fonts: [`Inter`],
                                                    layoutDependency: A,
                                                    layoutId: `sk8Q04w05`,
                                                    style: {
                                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                      "--framer-link-text-decoration": `underline`,
                                                    },
                                                    text: e,
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  _(W, {
                                                    __fromCanvasComponent: !0,
                                                    children: _(r, {
                                                      children: _(w.p, {
                                                        className: `framer-styles-preset-x2q274`,
                                                        "data-styles-preset": `U2MfhGBrp`,
                                                        dir: `auto`,
                                                        children: `POS-Objekte`,
                                                      }),
                                                    }),
                                                    className: `framer-1241jwe`,
                                                    fonts: [`Inter`],
                                                    layoutDependency: A,
                                                    layoutId: `j9AcD1BUh`,
                                                    style: {
                                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                      "--framer-link-text-decoration": `underline`,
                                                    },
                                                    text: i,
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  _(W, {
                                                    __fromCanvasComponent: !0,
                                                    children: _(r, {
                                                      children: _(w.p, {
                                                        className: `framer-styles-preset-x2q274`,
                                                        "data-styles-preset": `U2MfhGBrp`,
                                                        dir: `auto`,
                                                        children: `POS-Objekte`,
                                                      }),
                                                    }),
                                                    className: `framer-aeulmy`,
                                                    fonts: [`Inter`],
                                                    layoutDependency: A,
                                                    layoutId: `VS7NCereG`,
                                                    style: {
                                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                      "--framer-link-text-decoration": `underline`,
                                                    },
                                                    text: t,
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                ],
                                              }),
                                              h(w.div, {
                                                className: `framer-17ye945`,
                                                layoutDependency: A,
                                                layoutId: `Jupw1QOLo`,
                                                children: [
                                                  d !== !1 &&
                                                    _(Qa, {
                                                      __framer__loop: oo,
                                                      __framer__loopEffectEnabled:
                                                        !0,
                                                      __framer__loopPauseOffscreen:
                                                        !0,
                                                      __framer__loopRepeatDelay: 0,
                                                      __framer__loopRepeatType: `loop`,
                                                      __framer__loopTransition:
                                                        ao,
                                                      __perspectiveFX: !1,
                                                      __smartComponentFX: !0,
                                                      __targetOpacity: 0,
                                                      background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        loading: P(
                                                          (c?.y || 0) +
                                                            0 +
                                                            (((c?.height ||
                                                              510.5) -
                                                              0 -
                                                              (Math.max(
                                                                0,
                                                                ((c?.height ||
                                                                  510.5) -
                                                                  0 -
                                                                  0) /
                                                                  1,
                                                              ) *
                                                                1 +
                                                                0)) /
                                                              2 +
                                                              0 +
                                                              0) +
                                                            0 +
                                                            ((Math.max(
                                                              0,
                                                              ((c?.height ||
                                                                510.5) -
                                                                0 -
                                                                0) /
                                                                1,
                                                            ) *
                                                              1 -
                                                              0 -
                                                              (Math.max(
                                                                0,
                                                                (Math.max(
                                                                  0,
                                                                  ((c?.height ||
                                                                    510.5) -
                                                                    0 -
                                                                    0) /
                                                                    1,
                                                                ) *
                                                                  1 -
                                                                  0 -
                                                                  90) /
                                                                  1,
                                                              ) *
                                                                1 +
                                                                90 +
                                                                0)) /
                                                              2 +
                                                              Math.max(
                                                                0,
                                                                (Math.max(
                                                                  0,
                                                                  ((c?.height ||
                                                                    510.5) -
                                                                    0 -
                                                                    0) /
                                                                    1,
                                                                ) *
                                                                  1 -
                                                                  0 -
                                                                  90) /
                                                                  1,
                                                              ) *
                                                                1 +
                                                              0) +
                                                            27.5 +
                                                            0,
                                                        ),
                                                        pixelHeight: 554,
                                                        pixelWidth: 554,
                                                        sizes: `45px`,
                                                        ...ro(l),
                                                      },
                                                      className: `framer-ukc8e7`,
                                                      fitImageDimension: `width`,
                                                      layoutDependency: A,
                                                      layoutId: `qNZhd_fy6`,
                                                      style: { opacity: 0 },
                                                      variants: {
                                                        YIq6OZnJR: {
                                                          opacity: 1,
                                                        },
                                                      },
                                                      ...Za(
                                                        {
                                                          YIq6OZnJR: {
                                                            __targetOpacity: 1,
                                                          },
                                                        },
                                                        y,
                                                        ee,
                                                      ),
                                                    }),
                                                  I(f !== !1) &&
                                                    _(Qa, {
                                                      __framer__loop: oo,
                                                      __framer__loopEffectEnabled:
                                                        !0,
                                                      __framer__loopPauseOffscreen:
                                                        !1,
                                                      __framer__loopRepeatDelay: 0.2,
                                                      __framer__loopRepeatType: `loop`,
                                                      __framer__loopTransition:
                                                        ao,
                                                      __perspectiveFX: !1,
                                                      __smartComponentFX: !0,
                                                      __targetOpacity: 1,
                                                      background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        pixelHeight: 200,
                                                        pixelWidth: 200,
                                                        ...ro(a),
                                                      },
                                                      className: `framer-rbkv96`,
                                                      fitImageDimension: `width`,
                                                      layoutDependency: A,
                                                      layoutId: `g1xotdFUt`,
                                                      ...Za(
                                                        {
                                                          YIq6OZnJR: {
                                                            background: {
                                                              alt: ``,
                                                              fit: `fill`,
                                                              loading: P(
                                                                (c?.y || 0) +
                                                                  0 +
                                                                  (((c?.height ||
                                                                    510.5) -
                                                                    0 -
                                                                    (Math.max(
                                                                      0,
                                                                      ((c?.height ||
                                                                        510.5) -
                                                                        0 -
                                                                        0) /
                                                                        1,
                                                                    ) *
                                                                      1 +
                                                                      0)) /
                                                                    2 +
                                                                    0 +
                                                                    0) +
                                                                  0 +
                                                                  ((Math.max(
                                                                    0,
                                                                    ((c?.height ||
                                                                      510.5) -
                                                                      0 -
                                                                      0) /
                                                                      1,
                                                                  ) *
                                                                    1 -
                                                                    0 -
                                                                    (Math.max(
                                                                      0,
                                                                      (Math.max(
                                                                        0,
                                                                        ((c?.height ||
                                                                          510.5) -
                                                                          0 -
                                                                          0) /
                                                                          1,
                                                                      ) *
                                                                        1 -
                                                                        0 -
                                                                        90) /
                                                                        1,
                                                                    ) *
                                                                      1 +
                                                                      90 +
                                                                      0)) /
                                                                    2 +
                                                                    Math.max(
                                                                      0,
                                                                      (Math.max(
                                                                        0,
                                                                        ((c?.height ||
                                                                          510.5) -
                                                                          0 -
                                                                          0) /
                                                                          1,
                                                                      ) *
                                                                        1 -
                                                                        0 -
                                                                        90) /
                                                                        1,
                                                                    ) *
                                                                      1 +
                                                                    0) +
                                                                  27.5 +
                                                                  0,
                                                              ),
                                                              pixelHeight: 200,
                                                              pixelWidth: 200,
                                                              sizes: `45px`,
                                                              ...ro(a),
                                                            },
                                                          },
                                                        },
                                                        y,
                                                        ee,
                                                      ),
                                                    }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  },
                                  n,
                                );
                              },
                            ),
                          }),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-gz2GW.framer-z2lucb, .framer-gz2GW .framer-z2lucb { display: block; }`,
          `.framer-gz2GW.framer-iczogk { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 511px; justify-content: center; padding: 0px; position: relative; text-decoration: none; width: 448px; }`,
          `.framer-gz2GW .framer-1smbnk { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-gz2GW .framer-u7ilcw { flex: 1 0 0px; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-gz2GW .framer-1apg63u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 10px 0px 0px 0px; position: relative; width: 100%; }`,
          `.framer-gz2GW .framer-12917ii { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-gz2GW .framer-z5h2wy { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-gz2GW .framer-1241jwe, .framer-gz2GW .framer-aeulmy { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-gz2GW .framer-17ye945 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 45px; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-gz2GW .framer-ukc8e7, .framer-gz2GW .framer-rbkv96 { flex: none; height: 100%; overflow: var(--overflow-clip-fallback, clip); position: relative; width: auto; will-change: var(--framer-will-change-filter-override, filter); }`,
          ...Be,
          ...Re,
        ],
        `framer-gz2GW`,
      )),
      (ho.displayName = `projekt-kachel-01`),
      (ho.defaultProps = { height: 510.5, width: 448 }),
      I(ho, {
        variant: {
          options: [`EpTpT4Br4`, `YIq6OZnJR`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: U.Enum,
        },
        oELdZlPfS: { title: `Link`, type: U.Link },
      }),
      Se(
        ho,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/fonts/inter-400.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/fonts/inter-400-2.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/fonts/inter-400-3.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `/fonts/inter-400-4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/fonts/inter-400-5.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/fonts/inter-400-6.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `/fonts/inter-400-7.woff2`,
                weight: `400`,
              },
            ],
          },
          ...M(Ve),
          ...M(ke),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (ho.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = R.get(so(), n);
          return Promise.allSettled([r.preload()]);
        },
      }));
  });
function _o(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function Y(e, ...t) {
  if (!e)
    throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function vo(e) {
  throw Error(`Unexpected value: ${e}`);
}
function yo(e) {
  return typeof e == `string`;
}
function bo(e) {
  return Number.isFinite(e);
}
function xo(e) {
  return e === null;
}
function So(e) {
  if (xo(e)) return 0;
  switch (e.type) {
    case U.Array:
      return 1;
    case U.Boolean:
      return 2;
    case U.Color:
      return 3;
    case U.Date:
      return 4;
    case U.Enum:
      return 5;
    case U.File:
      return 6;
    case U.ResponsiveImage:
      return 10;
    case U.Link:
      return 7;
    case U.Number:
      return 8;
    case U.Object:
      return 9;
    case U.RichText:
      return 11;
    case U.String:
      return 12;
    case U.VectorSetItem:
      return 13;
    default:
      vo(e);
  }
}
function Co(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = fs.read(e);
    n.push(t);
  }
  return { type: U.Array, value: n };
}
function wo(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) fs.write(e, n);
}
function To(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = fs.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Eo(e) {
  return { type: U.Boolean, value: e.readUint8() !== 0 };
}
function Do(e, t) {
  e.writeUint8(+!!t.value);
}
function Oo(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ko(e) {
  return { type: U.Color, value: e.readString() };
}
function Ao(e, t) {
  e.writeString(t.value);
}
function jo(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Mo(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: U.Date, value: n.toISOString() };
}
function No(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function Po(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function Fo(e) {
  return { type: U.Enum, value: e.readString() };
}
function Io(e, t) {
  e.writeString(t.value);
}
function Lo(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Ro(e) {
  return { type: U.File, value: e.readString() };
}
function zo(e, t) {
  e.writeString(t.value);
}
function Bo(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Vo(e) {
  return { type: U.Link, value: e.readJson() };
}
function Ho(e, t) {
  e.writeJson(t.value);
}
function Uo(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Wo(e) {
  return { type: U.Number, value: e.readFloat64() };
}
function Go(e, t) {
  e.writeFloat64(t.value);
}
function Ko(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function qo(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = fs.read(e);
  }
  return { type: U.Object, value: n };
}
function Jo(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n))
    (e.writeString(t), fs.write(e, r));
}
function Yo(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = fs.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function Xo(e) {
  return { type: U.ResponsiveImage, value: e.readJson() };
}
function Zo(e, t) {
  e.writeJson(t.value);
}
function Qo(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function $o(e) {
  let t = e.readInt8();
  if (t === 0) return { type: U.RichText, value: e.readUint32() };
  if (t === 1) return { type: U.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function es(e, t) {
  if (bo(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (yo(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function ts(e, t) {
  let n = e.value,
    r = t.value;
  if ((bo(n) && bo(r)) || (yo(n) && yo(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function ns(e) {
  return { type: U.String, value: e.readString() };
}
function rs(e, t) {
  e.writeString(t.value);
}
function is(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function as(e) {
  return { type: U.VectorSetItem, value: e.readUint32() };
}
function os(e, t) {
  e.writeUint32(t.value);
}
function ss(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function cs(e) {
  let t = Math.floor(js * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function ls(e, t) {
  let n = ds(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await Ns(a);
  if (s.status !== 200)
    throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new Ps(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function us(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function ds(e) {
  Y(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to
      ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) })
      : n.push(e);
  }
  return n;
}
var fs,
  ps,
  ms,
  hs,
  gs,
  _s,
  vs,
  ys,
  bs,
  xs,
  Ss,
  X,
  Cs,
  ws,
  Ts,
  Es,
  Ds,
  Os,
  ks,
  As,
  js,
  Ms,
  Ns,
  Ps,
  Fs,
  Is,
  Ls,
  Rs = e(() => {
    (o(),
      L(),
      (ps = Object.create),
      (ms = Object.defineProperty),
      (hs = Object.getOwnPropertyDescriptor),
      (gs = Object.getOwnPropertyNames),
      (_s = Object.getPrototypeOf),
      (vs = Object.prototype.hasOwnProperty),
      (ys = (e, t, n) =>
        t in e
          ? ms(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n)),
      (bs = (e, t) =>
        function () {
          try {
            return (
              t || (0, e[gs(e)[0]])((t = { exports: {} }).exports, t),
              t.exports
            );
          } catch (e) {
            throw ((t = 0), e);
          }
        }),
      (xs = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of gs(t))
            vs.call(e, i) ||
              i === n ||
              ms(e, i, {
                get: () => t[i],
                enumerable: !(r = hs(t, i)) || r.enumerable,
              });
        return e;
      }),
      (Ss = (e, t, n) => (
        (n = e == null ? {} : ps(_s(e))),
        xs(
          !t && e && e.__esModule
            ? n
            : ms(n, `default`, { value: e, enumerable: !0 }),
          e,
        )
      )),
      (X = (e, t, n) => ys(e, typeof t == `symbol` ? t : t + ``, n)),
      (Cs = Ss(
        bs({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`,
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (!(!e || !1 !== e.batch)) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(
                          `maxBatchSize must be a positive number: ` + t,
                        );
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(
                          `batchScheduleFn must be a function: ` + t,
                        );
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (!(!e || !1 !== e.cache)) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(
                          function (e) {
                            return t && typeof t[e] != `function`;
                          },
                        );
                        if (n.length !== 0)
                          throw TypeError(
                            `Custom cacheMap missing methods: ` + n.join(`, `),
                          );
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`,
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (
                          t !== null &&
                          !t.hasDispatched &&
                          t.keys.length < e._maxBatchSize
                        )
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (
                                ((t.hasDispatched = !0), t.keys.length === 0)
                              ) {
                                o(t);
                                return;
                              }
                              try {
                                n = e._batchLoadFn(t.keys);
                              } catch (n) {
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                      String(n) +
                                      `.`,
                                  ),
                                );
                              }
                              if (!n || typeof n.then != `function`)
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                      String(n) +
                                      `.`,
                                  ),
                                );
                              n.then(function (e) {
                                if (!s(e))
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                      String(e) +
                                      `.`,
                                  );
                                if (e.length !== t.keys.length)
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                      String(t.keys) +
                                      `

Values:
` +
                                      String(e),
                                  );
                                o(t);
                                for (var n = 0; n < t.callbacks.length; n++) {
                                  var r = e[n];
                                  r instanceof Error
                                    ? t.callbacks[n].reject(r)
                                    : t.callbacks[n].resolve(r);
                                }
                              }).catch(function (n) {
                                a(e, t, n);
                              });
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`,
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        }),
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` &&
                typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits)
                for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 &&
                    Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1,
      )),
      (ws = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (Ts = class {
        getOffset() {
          return this.offset;
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
        }
        readUint8() {
          let e = ws.Uint8;
          this.ensureLength(e);
          let t = this.view.getUint8(this.offset);
          return ((this.offset += e), t);
        }
        readUint16() {
          let e = ws.Uint16;
          this.ensureLength(e);
          let t = this.view.getUint16(this.offset);
          return ((this.offset += e), t);
        }
        readUint32() {
          let e = ws.Uint32;
          this.ensureLength(e);
          let t = this.view.getUint32(this.offset);
          return ((this.offset += e), t);
        }
        readUint64() {
          let e = this.readBigUint64();
          return Number(e);
        }
        readBigUint64() {
          let e = ws.BigUint64;
          this.ensureLength(e);
          let t = this.view.getBigUint64(this.offset);
          return ((this.offset += e), t);
        }
        readInt8() {
          let e = ws.Int8;
          this.ensureLength(e);
          let t = this.view.getInt8(this.offset);
          return ((this.offset += e), t);
        }
        readInt16() {
          let e = ws.Int16;
          this.ensureLength(e);
          let t = this.view.getInt16(this.offset);
          return ((this.offset += e), t);
        }
        readInt32() {
          let e = ws.Int32;
          this.ensureLength(e);
          let t = this.view.getInt32(this.offset);
          return ((this.offset += e), t);
        }
        readInt64() {
          let e = this.readBigInt64();
          return Number(e);
        }
        readBigInt64() {
          let e = ws.BigInt64;
          this.ensureLength(e);
          let t = this.view.getBigInt64(this.offset);
          return ((this.offset += e), t);
        }
        readFloat32() {
          let e = ws.Float32;
          this.ensureLength(e);
          let t = this.view.getFloat32(this.offset);
          return ((this.offset += e), t);
        }
        readFloat64() {
          let e = ws.Float64;
          this.ensureLength(e);
          let t = this.view.getFloat64(this.offset);
          return ((this.offset += e), t);
        }
        readBytes(e) {
          let t = this.offset,
            n = t + e,
            r = this.bytes.subarray(t, n);
          return ((this.offset = n), r);
        }
        readString() {
          let e = this.readUint32(),
            t = this.readBytes(e);
          return this.decoder.decode(t);
        }
        readJson() {
          let e = this.readString();
          return JSON.parse(e);
        }
        constructor(e) {
          (X(this, `bytes`, e),
            X(this, `offset`, 0),
            X(this, `view`),
            X(this, `decoder`, new TextDecoder()),
            (this.view = _o(this.bytes)));
        }
      }),
      t !== void 0 && t.requestIdleCallback,
      (Es = (e) => 2 ** e - 1),
      (Ds = (e) => -(2 ** (e - 1))),
      (Os = (e) => 2 ** (e - 1) - 1),
      Ds(8),
      Ds(16),
      Ds(32),
      -(BigInt(2) ** BigInt(63)),
      Es(8),
      Es(16),
      Es(32),
      BigInt(2) ** BigInt(64) - BigInt(1),
      Os(8),
      Os(16),
      Os(32),
      BigInt(2) ** BigInt(63) - BigInt(1),
      (ks = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            Y(bo(n), `Invalid chunkId`),
            Y(bo(r), `Invalid offset`),
            Y(bo(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          let n = t.readUint16(),
            r = t.readUint32(),
            i = t.readUint32();
          return new e(n, r, i);
        }
        write(e) {
          (e.writeUint16(this.chunkId),
            e.writeUint32(this.offset),
            e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (Y(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          (X(this, `chunkId`, e), X(this, `offset`, t), X(this, `length`, n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return Co(e);
            case 2:
              return Eo(e);
            case 3:
              return ko(e);
            case 4:
              return Mo(e);
            case 5:
              return Fo(e);
            case 6:
              return Ro(e);
            case 7:
              return Vo(e);
            case 8:
              return Wo(e);
            case 9:
              return qo(e);
            case 10:
              return Xo(e);
            case 11:
              return $o(e);
            case 12:
              return ns(e);
            case 13:
              return as(e);
            default:
              vo(t);
          }
        }),
          (e.write = function (e, t) {
            let n = So(t);
            if ((e.writeUint8(n), !xo(t)))
              switch (t.type) {
                case U.Array:
                  return wo(e, t);
                case U.Boolean:
                  return Do(e, t);
                case U.Color:
                  return Ao(e, t);
                case U.Date:
                  return No(e, t);
                case U.Enum:
                  return Io(e, t);
                case U.File:
                  return zo(e, t);
                case U.Link:
                  return Ho(e, t);
                case U.Number:
                  return Go(e, t);
                case U.Object:
                  return Jo(e, t);
                case U.ResponsiveImage:
                  return Zo(e, t);
                case U.RichText:
                  return es(e, t);
                case U.VectorSetItem:
                  return os(e, t);
                case U.String:
                  return rs(e, t);
                default:
                  vo(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = So(e),
              i = So(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (xo(e) || xo(t)) return 0;
            switch (e.type) {
              case U.Array:
                return (Y(t.type === U.Array), To(e, t, n));
              case U.Boolean:
                return (Y(t.type === U.Boolean), Oo(e, t));
              case U.Color:
                return (Y(t.type === U.Color), jo(e, t));
              case U.Date:
                return (Y(t.type === U.Date), Po(e, t));
              case U.Enum:
                return (Y(t.type === U.Enum), Lo(e, t));
              case U.File:
                return (Y(t.type === U.File), Bo(e, t));
              case U.Link:
                return (Y(t.type === U.Link), Uo(e, t));
              case U.Number:
                return (Y(t.type === U.Number), Ko(e, t));
              case U.Object:
                return (Y(t.type === U.Object), Yo(e, t, n));
              case U.ResponsiveImage:
                return (Y(t.type === U.ResponsiveImage), Qo(e, t));
              case U.RichText:
                return (Y(t.type === U.RichText), ts(e, t));
              case U.VectorSetItem:
                return (Y(t.type === U.VectorSetItem), ss(e, t));
              case U.String:
                return (Y(t.type === U.String), is(e, t, n));
              default:
                vo(e);
            }
          }));
      })((fs ||= {})),
      (As = 3),
      (js = 250),
      (Ms = [408, 429, 500, 502, 503, 504]),
      (Ns = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!Ms.includes(r.status) || ++n > As) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > As) throw e;
          }
          await cs(n);
        }
      }),
      (Ps = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((Y(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = us(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((Y(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = us(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          X(this, `chunks`, []);
        }
      }),
      (Fs = class e {
        static read(t) {
          let n = new e(),
            r = t.readUint16();
          for (let e = 0; e < r; e++) {
            let e = t.readString(),
              r = fs.read(t);
            n.setField(e, r);
          }
          return n;
        }
        write(e) {
          for (let [t, n] of (e.writeUint16(this.fields.size), this.fields))
            (e.writeString(t), fs.write(e, n));
        }
        getData() {
          let e = {};
          for (let [t, n] of this.fields) e[t] = n;
          return e;
        }
        setField(e, t) {
          this.fields.set(e, t);
        }
        getField(e) {
          return this.fields.get(e);
        }
        constructor() {
          X(this, `fields`, new Map());
        }
      }),
      (Is = class {
        scanItems() {
          return (
            (this.itemsPromise ??= Ns(this.url).then(async (e) => {
              if (!e.ok)
                throw Error(`Request failed: ${e.status} ${e.statusText}`);
              let t = await e.arrayBuffer(),
                n = new Ts(new Uint8Array(t)),
                r = [],
                i = n.readUint32();
              for (let e = 0; e < i; e++) {
                let e = n.getOffset(),
                  t = Fs.read(n),
                  i = n.getOffset() - e,
                  a = new ks(this.id, e, i).toString(),
                  o = { pointer: a, data: t.getData() };
                (this.itemLoader.prime(a, o), r.push(o));
              }
              return r;
            })),
            this.itemsPromise
          );
        }
        resolveItem(e) {
          return this.itemLoader.load(e);
        }
        constructor(e, t) {
          (X(this, `id`, e),
            X(this, `url`, t),
            X(this, `itemsPromise`),
            X(
              this,
              `itemLoader`,
              new Cs.default(
                async (e) => {
                  let t = e.map((e) => {
                    let t = ks.fromString(e);
                    return { from: t.offset, to: t.offset + t.length };
                  });
                  return (await ls(this.url, t)).map((t, n) => {
                    let r = new Ts(t),
                      i = Fs.read(r),
                      a = e[n];
                    return (
                      Y(a, `Missing pointer`),
                      { pointer: a, data: i.getData() }
                    );
                  });
                },
                { maxBatchSize: 250 },
              ),
            ));
        }
      }),
      (Ls = class {
        async scanItems() {
          return (
            await Promise.all(this.chunks.map(async (e) => e.scanItems()))
          ).flat();
        }
        resolveItems(e) {
          return Promise.all(
            e.map((e) => {
              let t = ks.fromString(e),
                n = this.chunks[t.chunkId];
              return (Y(n, `Missing chunk`), n.resolveItem(e));
            }),
          );
        }
        compareItems(e, t) {
          let n = ks.fromString(e.pointer),
            r = ks.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return fs.compare(e, t, n);
        }
        constructor(e) {
          (X(this, `options`, e),
            X(this, `id`),
            X(this, `schema`),
            X(this, `indexes`),
            X(this, `resolveRichText`),
            X(this, `resolveVectorSetItem`),
            X(this, `chunks`),
            (this.chunks = this.options.chunks.map((e, t) => new Is(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function zs(e) {
  return typeof e == `object` && !!e && !g(e) && Us in e;
}
function Bs(e, ...t) {
  if (!e)
    throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function Vs(e) {
  let t = new Map();
  return (n) => {
    let i = t.get(n);
    if (i) return i;
    let a = (function t(n) {
      switch (n[0]) {
        case 1: {
          let [, ...e] = n;
          return f(r, void 0, ...e.map(t));
        }
        case 2: {
          let [, e, ...r] = n;
          return f(V, e, ...r.map(t));
        }
        case 3: {
          let [, r, i, a, o] = n;
          for (let e of a) {
            let n = i[e];
            n && (i[e] = t(n));
          }
          for (let t of o) {
            let n = i[t];
            if (typeof n != `string`) continue;
            let r = e[n];
            r && (zs(r) && r.preload(), (i[t] = r));
          }
          let s = e[r];
          return (
            Bs(s, `Module not found`),
            zs(s) && s.preload(),
            _(ge, {
              componentIdentifier: r,
              children: (e) => _(ve, { component: s, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, r, ...i] = n,
            a = i.map(t);
          return f(e === `a` ? w.a : e, r, ...a);
        }
        case 5: {
          let [, e] = n;
          return e;
        }
      }
    })(JSON.parse(n));
    return (t.set(n, a), a);
  };
}
var Hs,
  Us,
  Ws,
  Gs = e(() => {
    (o(),
      y(),
      L(),
      c(),
      t !== void 0 && t.requestIdleCallback,
      (Us = `preload`),
      (Ws =
        (((Hs = Ws || {})[(Hs.Fragment = 1)] = `Fragment`),
        (Hs[(Hs.Link = 2)] = `Link`),
        (Hs[(Hs.Module = 3)] = `Module`),
        (Hs[(Hs.Tag = 4)] = `Tag`),
        (Hs[(Hs.Text = 5)] = `Text`),
        Hs)));
  }),
  Ks,
  qs,
  Js,
  Ys,
  Xs,
  Zs = e(() => {
    (L(),
      Rs(),
      Gs(),
      (Ks = {
        createdAt: { isNullable: !0, type: U.Date },
        hFE1NcNGs: { isNullable: !0, type: U.String },
        id: { isNullable: !1, type: U.String },
        jPK3hKbTZ: { isNullable: !0, type: U.Link },
        MnchnmPZN: { isNullable: !0, type: U.String },
        nextItemId: { isNullable: !0, type: U.String },
        previousItemId: { isNullable: !0, type: U.String },
        rJHpHLmMW: { isNullable: !0, type: U.ResponsiveImage },
        updatedAt: { isNullable: !0, type: U.Date },
        vamCBOjZw: { isNullable: !0, type: U.ResponsiveImage },
        Y14_NVIoR: { isNullable: !0, type: U.String },
        YwTuhn5ef: { isNullable: !0, type: U.ResponsiveImage },
        YxTsoBVqr: { isNullable: !0, type: U.String },
      }),
      (qs = []),
      (Js = (e) => {
        let t = qs[e];
        if (t) return t().then((e) => e.default);
      }),
      (Ys = Vs({})),
      new xe(),
      (Xs = {
        collectionByLocaleId: {
          default: new Ls({
            chunks: [
              new URL(
                `./cms-data-chunk-2.framercms`,
                import.meta.url,
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `3370d27a-0263-46f3-b104-96f125bc0cd8default`,
            indexes: [],
            resolveRichText: Ys,
            resolveVectorSetItem: Js,
            schema: Ks,
          }),
        },
        displayName: `Project Home_02`,
        id: `3370d27a-0263-46f3-b104-96f125bc0cd8`,
      }),
      I(Xs, {
        rJHpHLmMW: { title: `Thumbnail`, type: U.ResponsiveImage },
        vamCBOjZw: {
          __defaultAssetReference: `data:framer/asset-reference,home-showcase-4.png?originalFilename=Projekt+4.png&width=200&height=200`,
          title: `Shape`,
          type: U.ResponsiveImage,
        },
        YwTuhn5ef: {
          __defaultAssetReference: `data:framer/asset-reference,home-showcase-2.png?originalFilename=leere-shape.png&width=554&height=554`,
          title: `Shape 2`,
          type: U.ResponsiveImage,
        },
        hFE1NcNGs: { defaultValue: ``, title: `Title`, type: U.String },
        MnchnmPZN: { defaultValue: ``, title: `Service 1`, type: U.String },
        Y14_NVIoR: { defaultValue: ``, title: `Service 2`, type: U.String },
        jPK3hKbTZ: { title: `Link to Project Detailpage`, type: U.Link },
        YxTsoBVqr: { preventLocalization: !0, title: `Slug`, type: U.String },
        createdAt: { title: `Created`, type: U.Date },
        updatedAt: { title: `Updated`, type: U.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/mT_Pd5brE:default`,
          title: `Previous`,
          type: U.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/mT_Pd5brE:default`,
          title: `Next`,
          type: U.CollectionReference,
        },
      }));
  });
function Qs(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var $s,
  ec,
  tc,
  nc,
  rc,
  ic,
  ac,
  oc,
  sc,
  cc,
  lc,
  uc,
  dc,
  fc,
  pc,
  mc,
  hc,
  gc = e(() => {
    (y(),
      L(),
      O(),
      c(),
      Zs(),
      Ae(),
      ze(),
      ($s = Ce(ye)),
      (ec = [`ipLQxtJlo`, `aT3awuZLZ`]),
      (tc = `framer-pbFiX`),
      (nc = { aT3awuZLZ: `framer-v-16b4aa9`, ipLQxtJlo: `framer-v-1s9yayc` }),
      (rc = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ic = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (ac = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (oc = { delay: 0, duration: 3.9, ease: [0, 0, 1, 1], type: `tween` }),
      (sc = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (cc = () => ({
        from: { alias: `ipLQxtJlo`, data: Xs, type: `Collection` },
        limit: { type: `LiteralValue`, value: 10 },
        select: [
          { collection: `ipLQxtJlo`, name: `jPK3hKbTZ`, type: `Identifier` },
          { collection: `ipLQxtJlo`, name: `rJHpHLmMW`, type: `Identifier` },
          { collection: `ipLQxtJlo`, name: `hFE1NcNGs`, type: `Identifier` },
          { collection: `ipLQxtJlo`, name: `MnchnmPZN`, type: `Identifier` },
          { collection: `ipLQxtJlo`, name: `Y14_NVIoR`, type: `Identifier` },
          { collection: `ipLQxtJlo`, name: `YwTuhn5ef`, type: `Identifier` },
          { collection: `ipLQxtJlo`, name: `vamCBOjZw`, type: `Identifier` },
          { collection: `ipLQxtJlo`, name: `YxTsoBVqr`, type: `Identifier` },
          { collection: `ipLQxtJlo`, name: `id`, type: `Identifier` },
        ],
      })),
      (lc = ({ query: e, pageSize: t, children: n }) => n(Ee(e))),
      (uc = ({ value: e, children: t }) => {
        let n = p(T),
          r = e ?? n.transition,
          a = i(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return _(T.Provider, { value: a, children: t });
      }),
      (dc = { "Variant 1": `ipLQxtJlo`, "Variant 2": `aT3awuZLZ` }),
      (fc = w.create(r)),
      (pc = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: dc[r.variant] ?? r.variant ?? `ipLQxtJlo`,
      })),
      (mc = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (hc = A(
        v(function (e, t) {
          let n = u(null),
            i = t ?? n,
            a = b(),
            { activeLocale: o, setLocale: s } = de(),
            c = _e(),
            { style: l, className: f, layoutId: p, variant: m, ...g } = pc(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: ee,
              setGestureState: T,
              setVariant: E,
              variants: O,
            } = re({
              cycleOrder: ec,
              defaultVariant: `ipLQxtJlo`,
              ref: i,
              variant: m,
              variantClassNames: nc,
            }),
            k = mc(e, O),
            { activeVariantCallback: A, delay: te } = fe(v),
            j = A(async (...e) => {
              (T({ isHovered: !0 }), E(`aT3awuZLZ`));
            }),
            M = A(async (...e) => {
              (T({ isHovered: !1 }), E(`ipLQxtJlo`));
            }),
            ne = N(tc, He, Me),
            F = (e) => v === `aT3awuZLZ` && e;
          return _(D, {
            id: p ?? a,
            children: _(fc, {
              animate: O,
              initial: !1,
              children: _(uc, {
                value: rc,
                children: _(w.div, {
                  ...g,
                  ...S,
                  className: N(ne, `framer-1s9yayc`, f, y),
                  "data-framer-name": `Variant 1`,
                  "data-highlight": !0,
                  layoutDependency: k,
                  layoutId: `ipLQxtJlo`,
                  onMouseEnter: j,
                  ref: i,
                  style: { ...l },
                  ...Qs(
                    {
                      aT3awuZLZ: {
                        "data-framer-name": `Variant 2`,
                        onMouseLeave: M,
                      },
                    },
                    v,
                    C,
                  ),
                  children: _(me, {
                    children: _(lc, {
                      query: cc(),
                      children: (e, t, n) =>
                        _(d, {
                          children: e?.map(
                            (
                              {
                                hFE1NcNGs: e,
                                id: t,
                                jPK3hKbTZ: n,
                                MnchnmPZN: i,
                                rJHpHLmMW: a,
                                vamCBOjZw: o,
                                Y14_NVIoR: s,
                                YwTuhn5ef: l,
                                YxTsoBVqr: u,
                              },
                              d,
                            ) => {
                              ((n =
                                n && n.pathVariables
                                  ? n
                                  : {
                                      pathVariables: { qD3idoXBI: `dojo` },
                                      unresolvedPathSlugs: {
                                        qD3idoXBI: {
                                          collectionId: `R2jsuapbg`,
                                          collectionItemId: `Ci1GsylEt`,
                                        },
                                      },
                                      webPageId: `R3ke5TPEo`,
                                    }),
                                (e = `DOJO`),
                                (i = `Creative Workspace & Studio`),
                                (s = ``),
                                (u ??= ``));
                              let f = ac(l),
                                p = ac(o);
                              return _(
                                D,
                                {
                                  id: `ipLQxtJlo-${t}`,
                                  children: _(ue.Provider, {
                                    value: { YxTsoBVqr: u },
                                    children: _(V, {
                                      href: n,
                                      motionChild: !0,
                                      nodeId: `BLDwMWm80`,
                                      openInNewTab: !1,
                                      scopeId: `PbbkljQSQ`,
                                      children: h(w.a, {
                                        className: `framer-sga57z framer-a4gyn5`,
                                        layoutDependency: k,
                                        layoutId: `BLDwMWm80`,
                                        children: [
                                          _(ye, {
                                            background: {
                                              alt: `Dojo Office – modular black seating landscape with yellow bar stools under historic brick vault`,
                                              fit: `fill`,
                                              loading: P(
                                                (c?.y || 0) +
                                                  0 +
                                                  (((c?.height || 390.5) -
                                                    0 -
                                                    (Math.max(
                                                      0,
                                                      ((c?.height || 390.5) -
                                                        0 -
                                                        0) /
                                                        1,
                                                    ) *
                                                      1 +
                                                      0)) /
                                                    2 +
                                                    0 +
                                                    0) +
                                                  0 +
                                                  ((Math.max(
                                                    0,
                                                    ((c?.height || 390.5) -
                                                      0 -
                                                      0) /
                                                      1,
                                                  ) *
                                                    1 -
                                                    0 -
                                                    (Math.max(
                                                      0,
                                                      (Math.max(
                                                        0,
                                                        ((c?.height || 390.5) -
                                                          0 -
                                                          0) /
                                                          1,
                                                      ) *
                                                        1 -
                                                        0 -
                                                        304.8) /
                                                        1,
                                                    ) *
                                                      1 +
                                                      304.8 +
                                                      0)) /
                                                    2 +
                                                    0 +
                                                    0),
                                              ),
                                              pixelHeight: 1320,
                                              pixelWidth: 1980,
                                              sizes: c?.width || `100vw`,
                                              ...ic(a),
                                            },
                                            className: `framer-z8mpda`,
                                            layoutDependency: k,
                                            layoutId: `ZqaZkiVfS`,
                                          }),
                                          h(w.div, {
                                            className: `framer-4z3xto`,
                                            layoutDependency: k,
                                            layoutId: `vpTk0BFRP`,
                                            children: [
                                              h(w.div, {
                                                className: `framer-1ki9byd`,
                                                layoutDependency: k,
                                                layoutId: `Q5MPWLdH2`,
                                                children: [
                                                  _(W, {
                                                    __fromCanvasComponent: !0,
                                                    children: _(r, {
                                                      children: _(w.h3, {
                                                        className: `framer-styles-preset-es7zc9`,
                                                        "data-styles-preset": `YZV7Namdz`,
                                                        dir: `auto`,
                                                        children: `PULSE ANALYTICS ENGINE`,
                                                      }),
                                                    }),
                                                    className: `framer-19afkqc`,
                                                    fonts: [`Inter`],
                                                    layoutDependency: k,
                                                    layoutId: `Sx9Tv61Oa`,
                                                    style: {
                                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                      "--framer-link-text-decoration": `underline`,
                                                    },
                                                    text: e,
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  _(W, {
                                                    __fromCanvasComponent: !0,
                                                    children: _(r, {
                                                      children: _(w.p, {
                                                        className: `framer-styles-preset-x2q274`,
                                                        "data-styles-preset": `U2MfhGBrp`,
                                                        dir: `auto`,
                                                        children: `Conception Design `,
                                                      }),
                                                    }),
                                                    className: `framer-xno5wz`,
                                                    fonts: [`Inter`],
                                                    layoutDependency: k,
                                                    layoutId: `FJ5soUiz9`,
                                                    style: {
                                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                      "--framer-link-text-decoration": `underline`,
                                                    },
                                                    text: i,
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  _(W, {
                                                    __fromCanvasComponent: !0,
                                                    children: _(r, {
                                                      children: _(w.p, {
                                                        className: `framer-styles-preset-x2q274`,
                                                        "data-styles-preset": `U2MfhGBrp`,
                                                        dir: `auto`,
                                                        children: `Conception Design `,
                                                      }),
                                                    }),
                                                    className: `framer-1w0ck8k`,
                                                    fonts: [`Inter`],
                                                    layoutDependency: k,
                                                    layoutId: `QFc4EUqDB`,
                                                    style: {
                                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                      "--framer-link-text-decoration": `underline`,
                                                    },
                                                    text: s,
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                ],
                                              }),
                                              h(w.div, {
                                                className: `framer-fqqax7`,
                                                layoutDependency: k,
                                                layoutId: `nTK5bBAwo`,
                                                children: [
                                                  F(f !== !1) &&
                                                    _($s, {
                                                      __framer__loop: sc,
                                                      __framer__loopEffectEnabled:
                                                        !0,
                                                      __framer__loopPauseOffscreen:
                                                        !0,
                                                      __framer__loopRepeatDelay: 0,
                                                      __framer__loopRepeatType: `loop`,
                                                      __framer__loopTransition:
                                                        oc,
                                                      __perspectiveFX: !1,
                                                      __smartComponentFX: !0,
                                                      __targetOpacity: 1,
                                                      background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        pixelHeight: 200,
                                                        pixelWidth: 200,
                                                        ...ic(l),
                                                      },
                                                      className: `framer-nm1wx5`,
                                                      fitImageDimension: `width`,
                                                      layoutDependency: k,
                                                      layoutId: `Gu2WSNIu1`,
                                                      ...Qs(
                                                        {
                                                          aT3awuZLZ: {
                                                            background: {
                                                              alt: ``,
                                                              fit: `fill`,
                                                              loading: P(
                                                                (c?.y || 0) +
                                                                  0 +
                                                                  (((c?.height ||
                                                                    390.5) -
                                                                    0 -
                                                                    (Math.max(
                                                                      0,
                                                                      ((c?.height ||
                                                                        390.5) -
                                                                        0 -
                                                                        0) /
                                                                        1,
                                                                    ) *
                                                                      1 +
                                                                      0)) /
                                                                    2 +
                                                                    0 +
                                                                    0) +
                                                                  0 +
                                                                  ((Math.max(
                                                                    0,
                                                                    ((c?.height ||
                                                                      390.5) -
                                                                      0 -
                                                                      0) /
                                                                      1,
                                                                  ) *
                                                                    1 -
                                                                    0 -
                                                                    (Math.max(
                                                                      0,
                                                                      (Math.max(
                                                                        0,
                                                                        ((c?.height ||
                                                                          390.5) -
                                                                          0 -
                                                                          0) /
                                                                          1,
                                                                      ) *
                                                                        1 -
                                                                        0 -
                                                                        304.8) /
                                                                        1,
                                                                    ) *
                                                                      1 +
                                                                      304.8 +
                                                                      0)) /
                                                                    2 +
                                                                    Math.max(
                                                                      0,
                                                                      (Math.max(
                                                                        0,
                                                                        ((c?.height ||
                                                                          390.5) -
                                                                          0 -
                                                                          0) /
                                                                          1,
                                                                      ) *
                                                                        1 -
                                                                        0 -
                                                                        304.8) /
                                                                        1,
                                                                    ) *
                                                                      1 +
                                                                    0) +
                                                                  129.9 +
                                                                  0,
                                                              ),
                                                              pixelHeight: 200,
                                                              pixelWidth: 200,
                                                              sizes: `45px`,
                                                              ...ic(l),
                                                            },
                                                          },
                                                        },
                                                        v,
                                                        C,
                                                      ),
                                                    }),
                                                  F(p !== !1) &&
                                                    _($s, {
                                                      __framer__loop: sc,
                                                      __framer__loopEffectEnabled:
                                                        !0,
                                                      __framer__loopPauseOffscreen:
                                                        !0,
                                                      __framer__loopRepeatDelay: 0,
                                                      __framer__loopRepeatType: `loop`,
                                                      __framer__loopTransition:
                                                        oc,
                                                      __perspectiveFX: !1,
                                                      __smartComponentFX: !0,
                                                      __targetOpacity: 1,
                                                      background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        pixelHeight: 200,
                                                        pixelWidth: 200,
                                                        ...ic(o),
                                                      },
                                                      className: `framer-10hmd3c`,
                                                      fitImageDimension: `width`,
                                                      layoutDependency: k,
                                                      layoutId: `uMDzw6wr_`,
                                                      ...Qs(
                                                        {
                                                          aT3awuZLZ: {
                                                            background: {
                                                              alt: ``,
                                                              fit: `fill`,
                                                              loading: P(
                                                                (c?.y || 0) +
                                                                  0 +
                                                                  (((c?.height ||
                                                                    390.5) -
                                                                    0 -
                                                                    (Math.max(
                                                                      0,
                                                                      ((c?.height ||
                                                                        390.5) -
                                                                        0 -
                                                                        0) /
                                                                        1,
                                                                    ) *
                                                                      1 +
                                                                      0)) /
                                                                    2 +
                                                                    0 +
                                                                    0) +
                                                                  0 +
                                                                  ((Math.max(
                                                                    0,
                                                                    ((c?.height ||
                                                                      390.5) -
                                                                      0 -
                                                                      0) /
                                                                      1,
                                                                  ) *
                                                                    1 -
                                                                    0 -
                                                                    (Math.max(
                                                                      0,
                                                                      (Math.max(
                                                                        0,
                                                                        ((c?.height ||
                                                                          390.5) -
                                                                          0 -
                                                                          0) /
                                                                          1,
                                                                      ) *
                                                                        1 -
                                                                        0 -
                                                                        304.8) /
                                                                        1,
                                                                    ) *
                                                                      1 +
                                                                      304.8 +
                                                                      0)) /
                                                                    2 +
                                                                    Math.max(
                                                                      0,
                                                                      (Math.max(
                                                                        0,
                                                                        ((c?.height ||
                                                                          390.5) -
                                                                          0 -
                                                                          0) /
                                                                          1,
                                                                      ) *
                                                                        1 -
                                                                        0 -
                                                                        304.8) /
                                                                        1,
                                                                    ) *
                                                                      1 +
                                                                    0) +
                                                                  129.9 +
                                                                  0,
                                                              ),
                                                              pixelHeight: 200,
                                                              pixelWidth: 200,
                                                              sizes: `45px`,
                                                              ...ic(o),
                                                            },
                                                          },
                                                        },
                                                        v,
                                                        C,
                                                      ),
                                                    }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                },
                                t,
                              );
                            },
                          ),
                        }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-pbFiX.framer-a4gyn5, .framer-pbFiX .framer-a4gyn5 { display: block; }`,
          `.framer-pbFiX.framer-1s9yayc { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 391px; justify-content: center; padding: 0px; position: relative; width: 415px; }`,
          `.framer-pbFiX .framer-sga57z { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
          `.framer-pbFiX .framer-z8mpda { flex: 1 0 0px; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-pbFiX .framer-4z3xto { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 10px 0px 10px 0px; position: relative; width: 100%; }`,
          `.framer-pbFiX .framer-1ki9byd { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-pbFiX .framer-19afkqc, .framer-pbFiX .framer-xno5wz, .framer-pbFiX .framer-1w0ck8k { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-pbFiX .framer-fqqax7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 45px; justify-content: center; min-width: 45px; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-pbFiX .framer-nm1wx5, .framer-pbFiX .framer-10hmd3c { flex: none; height: 100%; overflow: var(--overflow-clip-fallback, clip); position: relative; width: auto; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-pbFiX.framer-v-16b4aa9 .framer-fqqax7 { min-width: unset; }`,
          ...Be,
          ...Re,
        ],
        `framer-pbFiX`,
      )),
      (hc.displayName = `Projekt-Kachel-02`),
      (hc.defaultProps = { height: 390.5, width: 414.5 }),
      I(hc, {
        variant: {
          options: [`ipLQxtJlo`, `aT3awuZLZ`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: U.Enum,
        },
      }),
      Se(
        hc,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/fonts/inter-400.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/fonts/inter-400-2.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/fonts/inter-400-3.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `/fonts/inter-400-4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/fonts/inter-400-5.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/fonts/inter-400-6.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `/fonts/inter-400-7.woff2`,
                weight: `400`,
              },
            ],
          },
          ...M(Ve),
          ...M(ke),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (hc.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = R.get(cc(), n);
          return Promise.allSettled([r.preload()]);
        },
      }));
  });
function _c(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function Z(e, ...t) {
  if (!e)
    throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function vc(e) {
  throw Error(`Unexpected value: ${e}`);
}
function yc(e) {
  return typeof e == `string`;
}
function bc(e) {
  return Number.isFinite(e);
}
function xc(e) {
  return e === null;
}
function Sc(e) {
  if (xc(e)) return 0;
  switch (e.type) {
    case U.Array:
      return 1;
    case U.Boolean:
      return 2;
    case U.Color:
      return 3;
    case U.Date:
      return 4;
    case U.Enum:
      return 5;
    case U.File:
      return 6;
    case U.ResponsiveImage:
      return 10;
    case U.Link:
      return 7;
    case U.Number:
      return 8;
    case U.Object:
      return 9;
    case U.RichText:
      return 11;
    case U.String:
      return 12;
    case U.VectorSetItem:
      return 13;
    default:
      vc(e);
  }
}
function Cc(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = fl.read(e);
    n.push(t);
  }
  return { type: U.Array, value: n };
}
function wc(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) fl.write(e, n);
}
function Tc(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = fl.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Ec(e) {
  return { type: U.Boolean, value: e.readUint8() !== 0 };
}
function Dc(e, t) {
  e.writeUint8(+!!t.value);
}
function Oc(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function kc(e) {
  return { type: U.Color, value: e.readString() };
}
function Ac(e, t) {
  e.writeString(t.value);
}
function jc(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Mc(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: U.Date, value: n.toISOString() };
}
function Nc(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function Pc(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function Fc(e) {
  return { type: U.Enum, value: e.readString() };
}
function Ic(e, t) {
  e.writeString(t.value);
}
function Lc(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Rc(e) {
  return { type: U.File, value: e.readString() };
}
function zc(e, t) {
  e.writeString(t.value);
}
function Bc(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Vc(e) {
  return { type: U.Link, value: e.readJson() };
}
function Hc(e, t) {
  e.writeJson(t.value);
}
function Uc(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Wc(e) {
  return { type: U.Number, value: e.readFloat64() };
}
function Gc(e, t) {
  e.writeFloat64(t.value);
}
function Kc(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function qc(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = fl.read(e);
  }
  return { type: U.Object, value: n };
}
function Jc(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n))
    (e.writeString(t), fl.write(e, r));
}
function Yc(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = fl.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function Xc(e) {
  return { type: U.ResponsiveImage, value: e.readJson() };
}
function Zc(e, t) {
  e.writeJson(t.value);
}
function Qc(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function $c(e) {
  let t = e.readInt8();
  if (t === 0) return { type: U.RichText, value: e.readUint32() };
  if (t === 1) return { type: U.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function el(e, t) {
  if (bc(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (yc(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function tl(e, t) {
  let n = e.value,
    r = t.value;
  if ((bc(n) && bc(r)) || (yc(n) && yc(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function nl(e) {
  return { type: U.String, value: e.readString() };
}
function rl(e, t) {
  e.writeString(t.value);
}
function il(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function al(e) {
  return { type: U.VectorSetItem, value: e.readUint32() };
}
function ol(e, t) {
  e.writeUint32(t.value);
}
function sl(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function cl(e) {
  let t = Math.floor(Ml * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function ll(e, t) {
  let n = dl(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await Pl(a);
  if (s.status !== 200)
    throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new Fl(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function ul(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function dl(e) {
  Z(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to
      ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) })
      : n.push(e);
  }
  return n;
}
var fl,
  pl,
  ml,
  hl,
  gl,
  _l,
  vl,
  yl,
  bl,
  xl,
  Sl,
  Cl,
  wl,
  Tl,
  El,
  Dl,
  Ol,
  kl,
  Al,
  jl,
  Ml,
  Nl,
  Pl,
  Fl,
  Il,
  Ll,
  Rl,
  zl = e(() => {
    (o(),
      L(),
      (pl = Object.create),
      (ml = Object.defineProperty),
      (hl = Object.getOwnPropertyDescriptor),
      (gl = Object.getOwnPropertyNames),
      (_l = Object.getPrototypeOf),
      (vl = Object.prototype.hasOwnProperty),
      (yl = (e, t, n) =>
        t in e
          ? ml(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n)),
      (bl = (e, t) =>
        function () {
          return (
            t || (0, e[gl(e)[0]])((t = { exports: {} }).exports, t),
            t.exports
          );
        }),
      (xl = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of gl(t))
            vl.call(e, i) ||
              i === n ||
              ml(e, i, {
                get: () => t[i],
                enumerable: !(r = hl(t, i)) || r.enumerable,
              });
        return e;
      }),
      (Sl = (e, t, n) => (
        (n = e == null ? {} : pl(_l(e))),
        xl(
          !t && e && e.__esModule
            ? n
            : ml(n, `default`, { value: e, enumerable: !0 }),
          e,
        )
      )),
      (Cl = (e, t, n) => yl(e, typeof t == `symbol` ? t : t + ``, n)),
      (wl = Sl(
        bl({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`,
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (!(!e || !1 !== e.batch)) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(
                          `maxBatchSize must be a positive number: ` + t,
                        );
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(
                          `batchScheduleFn must be a function: ` + t,
                        );
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (!(!e || !1 !== e.cache)) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(
                          function (e) {
                            return t && typeof t[e] != `function`;
                          },
                        );
                        if (n.length !== 0)
                          throw TypeError(
                            `Custom cacheMap missing methods: ` + n.join(`, `),
                          );
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`,
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (
                          t !== null &&
                          !t.hasDispatched &&
                          t.keys.length < e._maxBatchSize
                        )
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (
                                ((t.hasDispatched = !0), t.keys.length === 0)
                              ) {
                                o(t);
                                return;
                              }
                              try {
                                n = e._batchLoadFn(t.keys);
                              } catch (n) {
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                      String(n) +
                                      `.`,
                                  ),
                                );
                              }
                              if (!n || typeof n.then != `function`)
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                      String(n) +
                                      `.`,
                                  ),
                                );
                              n.then(function (e) {
                                if (!s(e))
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                      String(e) +
                                      `.`,
                                  );
                                if (e.length !== t.keys.length)
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                      String(t.keys) +
                                      `

Values:
` +
                                      String(e),
                                  );
                                o(t);
                                for (var n = 0; n < t.callbacks.length; n++) {
                                  var r = e[n];
                                  r instanceof Error
                                    ? t.callbacks[n].reject(r)
                                    : t.callbacks[n].resolve(r);
                                }
                              }).catch(function (n) {
                                a(e, t, n);
                              });
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`,
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        }),
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` &&
                typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits)
                for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 &&
                    Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1,
      )),
      (Tl = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (El = class {
        getOffset() {
          return this.offset;
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
        }
        readUint8() {
          let e = Tl.Uint8;
          this.ensureLength(e);
          let t = this.view.getUint8(this.offset);
          return ((this.offset += e), t);
        }
        readUint16() {
          let e = Tl.Uint16;
          this.ensureLength(e);
          let t = this.view.getUint16(this.offset);
          return ((this.offset += e), t);
        }
        readUint32() {
          let e = Tl.Uint32;
          this.ensureLength(e);
          let t = this.view.getUint32(this.offset);
          return ((this.offset += e), t);
        }
        readUint64() {
          let e = this.readBigUint64();
          return Number(e);
        }
        readBigUint64() {
          let e = Tl.BigUint64;
          this.ensureLength(e);
          let t = this.view.getBigUint64(this.offset);
          return ((this.offset += e), t);
        }
        readInt8() {
          let e = Tl.Int8;
          this.ensureLength(e);
          let t = this.view.getInt8(this.offset);
          return ((this.offset += e), t);
        }
        readInt16() {
          let e = Tl.Int16;
          this.ensureLength(e);
          let t = this.view.getInt16(this.offset);
          return ((this.offset += e), t);
        }
        readInt32() {
          let e = Tl.Int32;
          this.ensureLength(e);
          let t = this.view.getInt32(this.offset);
          return ((this.offset += e), t);
        }
        readInt64() {
          let e = this.readBigInt64();
          return Number(e);
        }
        readBigInt64() {
          let e = Tl.BigInt64;
          this.ensureLength(e);
          let t = this.view.getBigInt64(this.offset);
          return ((this.offset += e), t);
        }
        readFloat32() {
          let e = Tl.Float32;
          this.ensureLength(e);
          let t = this.view.getFloat32(this.offset);
          return ((this.offset += e), t);
        }
        readFloat64() {
          let e = Tl.Float64;
          this.ensureLength(e);
          let t = this.view.getFloat64(this.offset);
          return ((this.offset += e), t);
        }
        readBytes(e) {
          let t = this.offset,
            n = t + e,
            r = this.bytes.subarray(t, n);
          return ((this.offset = n), r);
        }
        readString() {
          let e = this.readUint32(),
            t = this.readBytes(e);
          return this.decoder.decode(t);
        }
        readJson() {
          let e = this.readString();
          return JSON.parse(e);
        }
        constructor(e) {
          ((this.bytes = e),
            Cl(this, `offset`, 0),
            Cl(this, `view`),
            Cl(this, `decoder`, new TextDecoder()),
            (this.view = _c(this.bytes)));
        }
      }),
      t !== void 0 && t.requestIdleCallback,
      (Dl = (e) => 2 ** e - 1),
      (Ol = (e) => -(2 ** (e - 1))),
      (kl = (e) => 2 ** (e - 1) - 1),
      Ol(8),
      Ol(16),
      Ol(32),
      -(BigInt(2) ** BigInt(63)),
      Dl(8),
      Dl(16),
      Dl(32),
      BigInt(2) ** BigInt(64) - BigInt(1),
      kl(8),
      kl(16),
      kl(32),
      BigInt(2) ** BigInt(63) - BigInt(1),
      (Al = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            Z(bc(n), `Invalid chunkId`),
            Z(bc(r), `Invalid offset`),
            Z(bc(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          let n = t.readUint16(),
            r = t.readUint32(),
            i = t.readUint32();
          return new e(n, r, i);
        }
        write(e) {
          (e.writeUint16(this.chunkId),
            e.writeUint32(this.offset),
            e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (Z(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          ((this.chunkId = e), (this.offset = t), (this.length = n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return Cc(e);
            case 2:
              return Ec(e);
            case 3:
              return kc(e);
            case 4:
              return Mc(e);
            case 5:
              return Fc(e);
            case 6:
              return Rc(e);
            case 7:
              return Vc(e);
            case 8:
              return Wc(e);
            case 9:
              return qc(e);
            case 10:
              return Xc(e);
            case 11:
              return $c(e);
            case 12:
              return nl(e);
            case 13:
              return al(e);
            default:
              vc(t);
          }
        }),
          (e.write = function (e, t) {
            let n = Sc(t);
            if ((e.writeUint8(n), !xc(t)))
              switch (t.type) {
                case U.Array:
                  return wc(e, t);
                case U.Boolean:
                  return Dc(e, t);
                case U.Color:
                  return Ac(e, t);
                case U.Date:
                  return Nc(e, t);
                case U.Enum:
                  return Ic(e, t);
                case U.File:
                  return zc(e, t);
                case U.Link:
                  return Hc(e, t);
                case U.Number:
                  return Gc(e, t);
                case U.Object:
                  return Jc(e, t);
                case U.ResponsiveImage:
                  return Zc(e, t);
                case U.RichText:
                  return el(e, t);
                case U.VectorSetItem:
                  return ol(e, t);
                case U.String:
                  return rl(e, t);
                default:
                  vc(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = Sc(e),
              i = Sc(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (xc(e) || xc(t)) return 0;
            switch (e.type) {
              case U.Array:
                return (Z(t.type === U.Array), Tc(e, t, n));
              case U.Boolean:
                return (Z(t.type === U.Boolean), Oc(e, t));
              case U.Color:
                return (Z(t.type === U.Color), jc(e, t));
              case U.Date:
                return (Z(t.type === U.Date), Pc(e, t));
              case U.Enum:
                return (Z(t.type === U.Enum), Lc(e, t));
              case U.File:
                return (Z(t.type === U.File), Bc(e, t));
              case U.Link:
                return (Z(t.type === U.Link), Uc(e, t));
              case U.Number:
                return (Z(t.type === U.Number), Kc(e, t));
              case U.Object:
                return (Z(t.type === U.Object), Yc(e, t, n));
              case U.ResponsiveImage:
                return (Z(t.type === U.ResponsiveImage), Qc(e, t));
              case U.RichText:
                return (Z(t.type === U.RichText), tl(e, t));
              case U.VectorSetItem:
                return (Z(t.type === U.VectorSetItem), sl(e, t));
              case U.String:
                return (Z(t.type === U.String), il(e, t, n));
              default:
                vc(e);
            }
          }));
      })((fl ||= {})),
      (jl = 3),
      (Ml = 250),
      (Nl = [408, 429, 500, 502, 503, 504]),
      (Pl = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!Nl.includes(r.status) || ++n > jl) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > jl) throw e;
          }
          await cl(n);
        }
      }),
      (Fl = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((Z(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = ul(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((Z(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = ul(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          Cl(this, `chunks`, []);
        }
      }),
      (Il = class e {
        static read(t) {
          let n = new e(),
            r = t.readUint16();
          for (let e = 0; e < r; e++) {
            let e = t.readString(),
              r = fl.read(t);
            n.setField(e, r);
          }
          return n;
        }
        write(e) {
          for (let [t, n] of (e.writeUint16(this.fields.size), this.fields))
            (e.writeString(t), fl.write(e, n));
        }
        getData() {
          let e = {};
          for (let [t, n] of this.fields) e[t] = n;
          return e;
        }
        setField(e, t) {
          this.fields.set(e, t);
        }
        getField(e) {
          return this.fields.get(e);
        }
        constructor() {
          Cl(this, `fields`, new Map());
        }
      }),
      (Ll = class {
        scanItems() {
          return (
            (this.itemsPromise ??= Pl(this.url).then(async (e) => {
              if (!e.ok)
                throw Error(`Request failed: ${e.status} ${e.statusText}`);
              let t = await e.arrayBuffer(),
                n = new El(new Uint8Array(t)),
                r = [],
                i = n.readUint32();
              for (let e = 0; e < i; e++) {
                let e = n.getOffset(),
                  t = Il.read(n),
                  i = n.getOffset() - e,
                  a = new Al(this.id, e, i).toString(),
                  o = { pointer: a, data: t.getData() };
                (this.itemLoader.prime(a, o), r.push(o));
              }
              return r;
            })),
            this.itemsPromise
          );
        }
        resolveItem(e) {
          return this.itemLoader.load(e);
        }
        constructor(e, t) {
          ((this.id = e),
            (this.url = t),
            Cl(this, `itemsPromise`),
            Cl(
              this,
              `itemLoader`,
              new wl.default(
                async (e) => {
                  let t = e.map((e) => {
                    let t = Al.fromString(e);
                    return { from: t.offset, to: t.offset + t.length };
                  });
                  return (await ll(this.url, t)).map((t, n) => {
                    let r = new El(t),
                      i = Il.read(r),
                      a = e[n];
                    return (
                      Z(a, `Missing pointer`),
                      { pointer: a, data: i.getData() }
                    );
                  });
                },
                { maxBatchSize: 250 },
              ),
            ));
        }
      }),
      (Rl = class {
        async scanItems() {
          return (
            await Promise.all(this.chunks.map(async (e) => e.scanItems()))
          ).flat();
        }
        resolveItems(e) {
          return Promise.all(
            e.map((e) => {
              let t = Al.fromString(e),
                n = this.chunks[t.chunkId];
              return (Z(n, `Missing chunk`), n.resolveItem(e));
            }),
          );
        }
        compareItems(e, t) {
          let n = Al.fromString(e.pointer),
            r = Al.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return fl.compare(e, t, n);
        }
        constructor(e) {
          ((this.options = e),
            Cl(this, `id`),
            Cl(this, `schema`),
            Cl(this, `indexes`),
            Cl(this, `resolveRichText`),
            Cl(this, `resolveVectorSetItem`),
            Cl(this, `chunks`),
            (this.chunks = this.options.chunks.map((e, t) => new Ll(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function Bl(e) {
  return typeof e == `object` && !!e && !g(e) && Wl in e;
}
function Vl(e, ...t) {
  if (!e)
    throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function Hl(e) {
  let t = new Map();
  return (n) => {
    let i = t.get(n);
    if (i) return i;
    let a = (function t(n) {
      switch (n[0]) {
        case 1: {
          let [, ...e] = n;
          return f(r, void 0, ...e.map(t));
        }
        case 2: {
          let [, e, ...r] = n;
          return f(V, e, ...r.map(t));
        }
        case 3: {
          let [, r, i, a, o] = n;
          for (let e of a) {
            let n = i[e];
            n && (i[e] = t(n));
          }
          for (let t of o) {
            let n = i[t];
            if (typeof n != `string`) continue;
            let r = e[n];
            r && (Bl(r) && r.preload(), (i[t] = r));
          }
          let s = e[r];
          return (
            Vl(s, `Module not found`),
            Bl(s) && s.preload(),
            _(ge, {
              componentIdentifier: r,
              children: (e) => _(ve, { component: s, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, r, ...i] = n,
            a = i.map(t);
          return f(e === `a` ? w.a : e, r, ...a);
        }
        case 5: {
          let [, e] = n;
          return e;
        }
      }
    })(JSON.parse(n));
    return (t.set(n, a), a);
  };
}
var Ul,
  Wl,
  Gl,
  Kl = e(() => {
    (o(),
      y(),
      L(),
      c(),
      t !== void 0 && t.requestIdleCallback,
      (Wl = `preload`),
      (Gl =
        (((Ul = Gl || {})[(Ul.Fragment = 1)] = `Fragment`),
        (Ul[(Ul.Link = 2)] = `Link`),
        (Ul[(Ul.Module = 3)] = `Module`),
        (Ul[(Ul.Tag = 4)] = `Tag`),
        (Ul[(Ul.Text = 5)] = `Text`),
        Ul)));
  }),
  ql,
  Jl,
  Yl,
  Xl,
  Zl,
  Ql = e(() => {
    (L(),
      zl(),
      Kl(),
      (ql = {
        createdAt: { isNullable: !0, type: U.Date },
        i15yxJ7CV: { isNullable: !0, type: U.Link },
        id: { isNullable: !1, type: U.String },
        K2Eo65fux: { isNullable: !0, type: U.String },
        ksVLOoouI: { isNullable: !0, type: U.String },
        nAXJP_sM2: { isNullable: !0, type: U.ResponsiveImage },
        nextItemId: { isNullable: !0, type: U.String },
        nu26QL7mv: { isNullable: !0, type: U.ResponsiveImage },
        previousItemId: { isNullable: !0, type: U.String },
        rZXiTi9PK: { isNullable: !0, type: U.String },
        updatedAt: { isNullable: !0, type: U.Date },
        uPOBrczFN: { isNullable: !0, type: U.String },
        VeCYVTB35: { isNullable: !0, type: U.ResponsiveImage },
      }),
      (Jl = []),
      (Yl = (e) => {
        let t = Jl[e];
        if (t) return t().then((e) => e.default);
      }),
      (Xl = Hl({})),
      new xe(),
      (Zl = {
        collectionByLocaleId: {
          default: new Rl({
            chunks: [
              new URL(
                `./cms-data-chunk-4.framercms`,
                import.meta.url,
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `afbbb858-eb84-4f32-ba38-74885169dd5fdefault`,
            indexes: [],
            resolveRichText: Xl,
            resolveVectorSetItem: Yl,
            schema: ql,
          }),
        },
        displayName: `Project Home_03`,
        id: `afbbb858-eb84-4f32-ba38-74885169dd5f`,
      }),
      I(Zl, {
        VeCYVTB35: { title: `Thumbnail`, type: U.ResponsiveImage },
        nAXJP_sM2: {
          __defaultAssetReference: `data:framer/asset-reference,home-showcase-4.png?originalFilename=Projekt+4.png&width=200&height=200`,
          title: `Shape`,
          type: U.ResponsiveImage,
        },
        nu26QL7mv: {
          __defaultAssetReference: `data:framer/asset-reference,home-showcase-2.png?originalFilename=leere-shape.png&width=554&height=554`,
          title: `Shape 2`,
          type: U.ResponsiveImage,
        },
        rZXiTi9PK: { defaultValue: ``, title: `Title`, type: U.String },
        uPOBrczFN: { defaultValue: ``, title: `Service 1`, type: U.String },
        K2Eo65fux: { defaultValue: ``, title: `Service 2`, type: U.String },
        i15yxJ7CV: { title: `Link to Project Detailpage`, type: U.Link },
        ksVLOoouI: { preventLocalization: !0, title: `Slug`, type: U.String },
        createdAt: { title: `Created`, type: U.Date },
        updatedAt: { title: `Updated`, type: U.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/TZ08NJfnQ:default`,
          title: `Previous`,
          type: U.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/TZ08NJfnQ:default`,
          title: `Next`,
          type: U.CollectionReference,
        },
      }));
  });
function $l(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var eu,
  tu,
  nu,
  ru,
  iu,
  au,
  ou,
  su,
  cu,
  lu,
  uu,
  du,
  fu,
  pu,
  mu,
  hu,
  gu,
  _u = e(() => {
    (y(),
      L(),
      O(),
      c(),
      Ql(),
      Ae(),
      ze(),
      (eu = Ce(ye)),
      (tu = [`WMOBDhbBm`, `FFl2JcN7O`]),
      (nu = `framer-AN8LH`),
      (ru = { FFl2JcN7O: `framer-v-1ttw6lx`, WMOBDhbBm: `framer-v-28kp99` }),
      (iu = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (au = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (ou = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (su = { delay: 0, duration: 3.9, ease: [0, 0, 1, 1], type: `tween` }),
      (cu = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (lu = () => ({
        from: { alias: `WMOBDhbBm`, data: Zl, type: `Collection` },
        limit: { type: `LiteralValue`, value: 10 },
        select: [
          { collection: `WMOBDhbBm`, name: `i15yxJ7CV`, type: `Identifier` },
          { collection: `WMOBDhbBm`, name: `VeCYVTB35`, type: `Identifier` },
          { collection: `WMOBDhbBm`, name: `rZXiTi9PK`, type: `Identifier` },
          { collection: `WMOBDhbBm`, name: `uPOBrczFN`, type: `Identifier` },
          { collection: `WMOBDhbBm`, name: `K2Eo65fux`, type: `Identifier` },
          { collection: `WMOBDhbBm`, name: `nu26QL7mv`, type: `Identifier` },
          { collection: `WMOBDhbBm`, name: `nAXJP_sM2`, type: `Identifier` },
          { collection: `WMOBDhbBm`, name: `ksVLOoouI`, type: `Identifier` },
          { collection: `WMOBDhbBm`, name: `id`, type: `Identifier` },
        ],
      })),
      (uu = ({ query: e, pageSize: t, children: n }) => n(Ee(e))),
      (du = ({ value: e, children: t }) => {
        let n = p(T),
          r = e ?? n.transition,
          a = i(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return _(T.Provider, { value: a, children: t });
      }),
      (fu = { "Variant 1": `WMOBDhbBm`, "Variant 2": `FFl2JcN7O` }),
      (pu = w.create(r)),
      (mu = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: fu[r.variant] ?? r.variant ?? `WMOBDhbBm`,
      })),
      (hu = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (gu = A(
        v(function (e, t) {
          let n = u(null),
            i = t ?? n,
            a = b(),
            { activeLocale: o, setLocale: s } = de(),
            c = _e(),
            { style: l, className: f, layoutId: p, variant: m, ...g } = mu(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: ee,
              setGestureState: T,
              setVariant: E,
              variants: O,
            } = re({
              cycleOrder: tu,
              defaultVariant: `WMOBDhbBm`,
              ref: i,
              variant: m,
              variantClassNames: ru,
            }),
            k = hu(e, O),
            { activeVariantCallback: A, delay: te } = fe(v),
            j = A(async (...e) => {
              (T({ isHovered: !0 }), E(`FFl2JcN7O`));
            }),
            M = A(async (...e) => {
              (T({ isHovered: !1 }), E(`WMOBDhbBm`));
            }),
            ne = N(nu, He, Me),
            F = (e) => v === `FFl2JcN7O` && e;
          return _(D, {
            id: p ?? a,
            children: _(pu, {
              animate: O,
              initial: !1,
              children: _(du, {
                value: iu,
                children: _(w.div, {
                  ...g,
                  ...S,
                  className: N(ne, `framer-28kp99`, f, y),
                  "data-framer-name": `Variant 1`,
                  "data-highlight": !0,
                  layoutDependency: k,
                  layoutId: `WMOBDhbBm`,
                  onMouseEnter: j,
                  ref: i,
                  style: { ...l },
                  ...$l(
                    {
                      FFl2JcN7O: {
                        "data-framer-name": `Variant 2`,
                        onMouseLeave: M,
                      },
                    },
                    v,
                    C,
                  ),
                  children: _(me, {
                    children: _(uu, {
                      query: lu(),
                      children: (e, t, n) =>
                        _(d, {
                          children: e?.map(
                            (
                              {
                                i15yxJ7CV: e,
                                id: t,
                                K2Eo65fux: n,
                                ksVLOoouI: i,
                                nAXJP_sM2: a,
                                nu26QL7mv: o,
                                rZXiTi9PK: s,
                                uPOBrczFN: l,
                                VeCYVTB35: u,
                              },
                              d,
                            ) => {
                              ((e =
                                e && e.pathVariables
                                  ? e
                                  : {
                                      pathVariables: {
                                        qD3idoXBI: `reforma-x-people-people`,
                                      },
                                      unresolvedPathSlugs: {
                                        qD3idoXBI: {
                                          collectionId: `R2jsuapbg`,
                                          collectionItemId: `yApIytyML`,
                                        },
                                      },
                                      webPageId: `R3ke5TPEo`,
                                    }),
                                (s = `REFORMA`),
                                (l = `Minimalist Cafe & Community Space`),
                                (n = ``),
                                (i ??= ``));
                              let f = ou(o),
                                p = ou(a);
                              return _(
                                D,
                                {
                                  id: `WMOBDhbBm-${t}`,
                                  children: _(ue.Provider, {
                                    value: { ksVLOoouI: i },
                                    children: _(V, {
                                      href: e,
                                      motionChild: !0,
                                      nodeId: `dIouY6Mso`,
                                      openInNewTab: !1,
                                      scopeId: `tERzoQ1cG`,
                                      children: h(w.a, {
                                        className: `framer-xdita7 framer-1uaxde4`,
                                        layoutDependency: k,
                                        layoutId: `dIouY6Mso`,
                                        children: [
                                          _(ye, {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              loading: P(
                                                (c?.y || 0) +
                                                  0 +
                                                  (((c?.height || 786) -
                                                    0 -
                                                    (Math.max(
                                                      0,
                                                      ((c?.height || 786) -
                                                        0 -
                                                        0) /
                                                        1,
                                                    ) *
                                                      1 +
                                                      0)) /
                                                    2 +
                                                    0 +
                                                    0) +
                                                  0 +
                                                  ((Math.max(
                                                    0,
                                                    ((c?.height || 786) -
                                                      0 -
                                                      0) /
                                                      1,
                                                  ) *
                                                    1 -
                                                    0 -
                                                    (Math.max(
                                                      0,
                                                      (Math.max(
                                                        0,
                                                        ((c?.height || 786) -
                                                          0 -
                                                          0) /
                                                          1,
                                                      ) *
                                                        1 -
                                                        0 -
                                                        90) /
                                                        1,
                                                    ) *
                                                      1 +
                                                      90 +
                                                      0)) /
                                                    2 +
                                                    0 +
                                                    0),
                                              ),
                                              pixelHeight: 5396,
                                              pixelWidth: 8096,
                                              sizes: c?.width || `100vw`,
                                              ...au(u),
                                            },
                                            className: `framer-meiwq`,
                                            layoutDependency: k,
                                            layoutId: `euZe6X9jP`,
                                          }),
                                          h(w.div, {
                                            className: `framer-10mymoc`,
                                            layoutDependency: k,
                                            layoutId: `LG4a3DBXp`,
                                            children: [
                                              h(w.div, {
                                                className: `framer-ubxkws`,
                                                layoutDependency: k,
                                                layoutId: `vNCdGKQFt`,
                                                children: [
                                                  _(W, {
                                                    __fromCanvasComponent: !0,
                                                    children: _(r, {
                                                      children: _(w.h3, {
                                                        className: `framer-styles-preset-es7zc9`,
                                                        "data-styles-preset": `YZV7Namdz`,
                                                        dir: `auto`,
                                                        children: `REFORMA`,
                                                      }),
                                                    }),
                                                    className: `framer-1h9wsh1`,
                                                    fonts: [`Inter`],
                                                    layoutDependency: k,
                                                    layoutId: `cqGkXE0UR`,
                                                    style: {
                                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                      "--framer-link-text-decoration": `underline`,
                                                    },
                                                    text: s,
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  _(W, {
                                                    __fromCanvasComponent: !0,
                                                    children: _(r, {
                                                      children: _(w.p, {
                                                        className: `framer-styles-preset-x2q274`,
                                                        "data-styles-preset": `U2MfhGBrp`,
                                                        dir: `auto`,
                                                        children: `Conception Design & Architektur | Event | Interior `,
                                                      }),
                                                    }),
                                                    className: `framer-1pbgyem`,
                                                    fonts: [`Inter`],
                                                    layoutDependency: k,
                                                    layoutId: `eRQIh0Sqb`,
                                                    style: {
                                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                      "--framer-link-text-decoration": `underline`,
                                                    },
                                                    text: l,
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  _(W, {
                                                    __fromCanvasComponent: !0,
                                                    children: _(r, {
                                                      children: _(w.p, {
                                                        className: `framer-styles-preset-x2q274`,
                                                        "data-styles-preset": `U2MfhGBrp`,
                                                        dir: `auto`,
                                                        children: `Conception Design & Architektur | Event | Interior `,
                                                      }),
                                                    }),
                                                    className: `framer-nmysag`,
                                                    fonts: [`Inter`],
                                                    layoutDependency: k,
                                                    layoutId: `zfWd50h55`,
                                                    style: {
                                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                      "--framer-link-text-decoration": `underline`,
                                                    },
                                                    text: n,
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                ],
                                              }),
                                              h(w.div, {
                                                className: `framer-1wze16r`,
                                                layoutDependency: k,
                                                layoutId: `R8DlS9vt8`,
                                                children: [
                                                  F(f !== !1) &&
                                                    _(eu, {
                                                      __framer__loop: cu,
                                                      __framer__loopEffectEnabled:
                                                        !0,
                                                      __framer__loopPauseOffscreen:
                                                        !0,
                                                      __framer__loopRepeatDelay: 0,
                                                      __framer__loopRepeatType: `loop`,
                                                      __framer__loopTransition:
                                                        su,
                                                      __perspectiveFX: !1,
                                                      __smartComponentFX: !0,
                                                      __targetOpacity: 1,
                                                      background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        intrinsicHeight: 222,
                                                        intrinsicWidth: 221,
                                                        pixelHeight: 200,
                                                        pixelWidth: 200,
                                                        ...au(o),
                                                      },
                                                      className: `framer-ykld9q`,
                                                      fitImageDimension: `width`,
                                                      layoutDependency: k,
                                                      layoutId: `R6YwxktNb`,
                                                      ...$l(
                                                        {
                                                          FFl2JcN7O: {
                                                            background: {
                                                              alt: ``,
                                                              fit: `fill`,
                                                              intrinsicHeight: 222,
                                                              intrinsicWidth: 221,
                                                              loading: P(
                                                                (c?.y || 0) +
                                                                  0 +
                                                                  (((c?.height ||
                                                                    786) -
                                                                    0 -
                                                                    (Math.max(
                                                                      0,
                                                                      ((c?.height ||
                                                                        786) -
                                                                        0 -
                                                                        0) /
                                                                        1,
                                                                    ) *
                                                                      1 +
                                                                      0)) /
                                                                    2 +
                                                                    0 +
                                                                    0) +
                                                                  0 +
                                                                  ((Math.max(
                                                                    0,
                                                                    ((c?.height ||
                                                                      786) -
                                                                      0 -
                                                                      0) /
                                                                      1,
                                                                  ) *
                                                                    1 -
                                                                    0 -
                                                                    (Math.max(
                                                                      0,
                                                                      (Math.max(
                                                                        0,
                                                                        ((c?.height ||
                                                                          786) -
                                                                          0 -
                                                                          0) /
                                                                          1,
                                                                      ) *
                                                                        1 -
                                                                        0 -
                                                                        90) /
                                                                        1,
                                                                    ) *
                                                                      1 +
                                                                      90 +
                                                                      0)) /
                                                                    2 +
                                                                    Math.max(
                                                                      0,
                                                                      (Math.max(
                                                                        0,
                                                                        ((c?.height ||
                                                                          786) -
                                                                          0 -
                                                                          0) /
                                                                          1,
                                                                      ) *
                                                                        1 -
                                                                        0 -
                                                                        90) /
                                                                        1,
                                                                    ) *
                                                                      1 +
                                                                    0) +
                                                                  27.5 +
                                                                  0,
                                                              ),
                                                              pixelHeight: 200,
                                                              pixelWidth: 200,
                                                              sizes: `45px`,
                                                              ...au(o),
                                                            },
                                                          },
                                                        },
                                                        v,
                                                        C,
                                                      ),
                                                    }),
                                                  F(p !== !1) &&
                                                    _(eu, {
                                                      __framer__loop: cu,
                                                      __framer__loopEffectEnabled:
                                                        !0,
                                                      __framer__loopPauseOffscreen:
                                                        !0,
                                                      __framer__loopRepeatDelay: 0,
                                                      __framer__loopRepeatType: `loop`,
                                                      __framer__loopTransition:
                                                        su,
                                                      __perspectiveFX: !1,
                                                      __smartComponentFX: !0,
                                                      __targetOpacity: 1,
                                                      background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        intrinsicHeight: 222,
                                                        intrinsicWidth: 221,
                                                        pixelHeight: 194,
                                                        pixelWidth: 200,
                                                        ...au(a),
                                                      },
                                                      className: `framer-px0887`,
                                                      fitImageDimension: `width`,
                                                      layoutDependency: k,
                                                      layoutId: `aHZqxJsHO`,
                                                      ...$l(
                                                        {
                                                          FFl2JcN7O: {
                                                            background: {
                                                              alt: ``,
                                                              fit: `fill`,
                                                              intrinsicHeight: 222,
                                                              intrinsicWidth: 221,
                                                              loading: P(
                                                                (c?.y || 0) +
                                                                  0 +
                                                                  (((c?.height ||
                                                                    786) -
                                                                    0 -
                                                                    (Math.max(
                                                                      0,
                                                                      ((c?.height ||
                                                                        786) -
                                                                        0 -
                                                                        0) /
                                                                        1,
                                                                    ) *
                                                                      1 +
                                                                      0)) /
                                                                    2 +
                                                                    0 +
                                                                    0) +
                                                                  0 +
                                                                  ((Math.max(
                                                                    0,
                                                                    ((c?.height ||
                                                                      786) -
                                                                      0 -
                                                                      0) /
                                                                      1,
                                                                  ) *
                                                                    1 -
                                                                    0 -
                                                                    (Math.max(
                                                                      0,
                                                                      (Math.max(
                                                                        0,
                                                                        ((c?.height ||
                                                                          786) -
                                                                          0 -
                                                                          0) /
                                                                          1,
                                                                      ) *
                                                                        1 -
                                                                        0 -
                                                                        90) /
                                                                        1,
                                                                    ) *
                                                                      1 +
                                                                      90 +
                                                                      0)) /
                                                                    2 +
                                                                    Math.max(
                                                                      0,
                                                                      (Math.max(
                                                                        0,
                                                                        ((c?.height ||
                                                                          786) -
                                                                          0 -
                                                                          0) /
                                                                          1,
                                                                      ) *
                                                                        1 -
                                                                        0 -
                                                                        90) /
                                                                        1,
                                                                    ) *
                                                                      1 +
                                                                    0) +
                                                                  27.5 +
                                                                  0,
                                                              ),
                                                              pixelHeight: 194,
                                                              pixelWidth: 200,
                                                              sizes: `46.3918px`,
                                                              ...au(a),
                                                            },
                                                          },
                                                        },
                                                        v,
                                                        C,
                                                      ),
                                                    }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                },
                                t,
                              );
                            },
                          ),
                        }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-AN8LH.framer-1uaxde4, .framer-AN8LH .framer-1uaxde4 { display: block; }`,
          `.framer-AN8LH.framer-28kp99 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 786px; justify-content: center; padding: 0px; position: relative; width: 1120px; }`,
          `.framer-AN8LH .framer-xdita7 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
          `.framer-AN8LH .framer-meiwq { flex: 1 0 0px; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-AN8LH .framer-10mymoc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 10px 0px 0px 0px; position: relative; width: 100%; }`,
          `.framer-AN8LH .framer-ubxkws { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-AN8LH .framer-1h9wsh1, .framer-AN8LH .framer-1pbgyem, .framer-AN8LH .framer-nmysag { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-AN8LH .framer-1wze16r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 45px; justify-content: flex-start; min-width: 46px; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-AN8LH .framer-ykld9q, .framer-AN8LH .framer-px0887 { flex: none; height: 100%; overflow: var(--overflow-clip-fallback, clip); position: relative; width: auto; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-AN8LH.framer-v-1ttw6lx .framer-1wze16r { min-width: unset; }`,
          ...Be,
          ...Re,
        ],
        `framer-AN8LH`,
      )),
      (gu.displayName = `projekt-kachel-03`),
      (gu.defaultProps = { height: 786, width: 1120 }),
      I(gu, {
        variant: {
          options: [`WMOBDhbBm`, `FFl2JcN7O`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: U.Enum,
        },
      }),
      Se(
        gu,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/fonts/inter-400.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/fonts/inter-400-2.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/fonts/inter-400-3.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `/fonts/inter-400-4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/fonts/inter-400-5.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/fonts/inter-400-6.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `/fonts/inter-400-7.woff2`,
                weight: `400`,
              },
            ],
          },
          ...M(Ve),
          ...M(ke),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (gu.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = R.get(lu(), n);
          return Promise.allSettled([r.preload()]);
        },
      }));
  });
function vu(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function Q(e, ...t) {
  if (!e)
    throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function yu(e) {
  throw Error(`Unexpected value: ${e}`);
}
function bu(e) {
  return typeof e == `string`;
}
function xu(e) {
  return Number.isFinite(e);
}
function Su(e) {
  return e === null;
}
function Cu(e) {
  if (Su(e)) return 0;
  switch (e.type) {
    case U.Array:
      return 1;
    case U.Boolean:
      return 2;
    case U.Color:
      return 3;
    case U.Date:
      return 4;
    case U.Enum:
      return 5;
    case U.File:
      return 6;
    case U.ResponsiveImage:
      return 10;
    case U.Link:
      return 7;
    case U.Number:
      return 8;
    case U.Object:
      return 9;
    case U.RichText:
      return 11;
    case U.String:
      return 12;
    case U.VectorSetItem:
      return 13;
    default:
      yu(e);
  }
}
function wu(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = pd.read(e);
    n.push(t);
  }
  return { type: U.Array, value: n };
}
function Tu(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) pd.write(e, n);
}
function Eu(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = pd.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Du(e) {
  return { type: U.Boolean, value: e.readUint8() !== 0 };
}
function Ou(e, t) {
  e.writeUint8(+!!t.value);
}
function ku(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Au(e) {
  return { type: U.Color, value: e.readString() };
}
function ju(e, t) {
  e.writeString(t.value);
}
function Mu(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Nu(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: U.Date, value: n.toISOString() };
}
function Pu(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function Fu(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function Iu(e) {
  return { type: U.Enum, value: e.readString() };
}
function Lu(e, t) {
  e.writeString(t.value);
}
function Ru(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function zu(e) {
  return { type: U.File, value: e.readString() };
}
function Bu(e, t) {
  e.writeString(t.value);
}
function Vu(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Hu(e) {
  return { type: U.Link, value: e.readJson() };
}
function Uu(e, t) {
  e.writeJson(t.value);
}
function Wu(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Gu(e) {
  return { type: U.Number, value: e.readFloat64() };
}
function Ku(e, t) {
  e.writeFloat64(t.value);
}
function qu(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Ju(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = pd.read(e);
  }
  return { type: U.Object, value: n };
}
function Yu(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n))
    (e.writeString(t), pd.write(e, r));
}
function Xu(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = pd.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function Zu(e) {
  return { type: U.ResponsiveImage, value: e.readJson() };
}
function Qu(e, t) {
  e.writeJson(t.value);
}
function $u(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function ed(e) {
  let t = e.readInt8();
  if (t === 0) return { type: U.RichText, value: e.readUint32() };
  if (t === 1) return { type: U.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function td(e, t) {
  if (xu(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (bu(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function nd(e, t) {
  let n = e.value,
    r = t.value;
  if ((xu(n) && xu(r)) || (bu(n) && bu(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function rd(e) {
  return { type: U.String, value: e.readString() };
}
function id(e, t) {
  e.writeString(t.value);
}
function ad(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function od(e) {
  return { type: U.VectorSetItem, value: e.readUint32() };
}
function sd(e, t) {
  e.writeUint32(t.value);
}
function cd(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function ld(e) {
  let t = Math.floor(Nd * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function ud(e, t) {
  let n = fd(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await Fd(a);
  if (s.status !== 200)
    throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new Id(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function dd(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function fd(e) {
  Q(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to
      ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) })
      : n.push(e);
  }
  return n;
}
var pd,
  md,
  hd,
  gd,
  _d,
  vd,
  yd,
  bd,
  xd,
  Sd,
  Cd,
  wd,
  Td,
  Ed,
  Dd,
  Od,
  kd,
  Ad,
  jd,
  Md,
  Nd,
  Pd,
  Fd,
  Id,
  Ld,
  Rd,
  zd,
  Bd = e(() => {
    (o(),
      L(),
      (md = Object.create),
      (hd = Object.defineProperty),
      (gd = Object.getOwnPropertyDescriptor),
      (_d = Object.getOwnPropertyNames),
      (vd = Object.getPrototypeOf),
      (yd = Object.prototype.hasOwnProperty),
      (bd = (e, t, n) =>
        t in e
          ? hd(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n)),
      (xd = (e, t) =>
        function () {
          return (
            t || (0, e[_d(e)[0]])((t = { exports: {} }).exports, t),
            t.exports
          );
        }),
      (Sd = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of _d(t))
            yd.call(e, i) ||
              i === n ||
              hd(e, i, {
                get: () => t[i],
                enumerable: !(r = gd(t, i)) || r.enumerable,
              });
        return e;
      }),
      (Cd = (e, t, n) => (
        (n = e == null ? {} : md(vd(e))),
        Sd(
          !t && e && e.__esModule
            ? n
            : hd(n, `default`, { value: e, enumerable: !0 }),
          e,
        )
      )),
      (wd = (e, t, n) => bd(e, typeof t == `symbol` ? t : t + ``, n)),
      (Td = Cd(
        xd({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`,
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (!(!e || !1 !== e.batch)) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(
                          `maxBatchSize must be a positive number: ` + t,
                        );
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(
                          `batchScheduleFn must be a function: ` + t,
                        );
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (!(!e || !1 !== e.cache)) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(
                          function (e) {
                            return t && typeof t[e] != `function`;
                          },
                        );
                        if (n.length !== 0)
                          throw TypeError(
                            `Custom cacheMap missing methods: ` + n.join(`, `),
                          );
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`,
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (
                          t !== null &&
                          !t.hasDispatched &&
                          t.keys.length < e._maxBatchSize
                        )
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (
                                ((t.hasDispatched = !0), t.keys.length === 0)
                              ) {
                                o(t);
                                return;
                              }
                              try {
                                n = e._batchLoadFn(t.keys);
                              } catch (n) {
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                      String(n) +
                                      `.`,
                                  ),
                                );
                              }
                              if (!n || typeof n.then != `function`)
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                      String(n) +
                                      `.`,
                                  ),
                                );
                              n.then(function (e) {
                                if (!s(e))
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                      String(e) +
                                      `.`,
                                  );
                                if (e.length !== t.keys.length)
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                      String(t.keys) +
                                      `

Values:
` +
                                      String(e),
                                  );
                                o(t);
                                for (var n = 0; n < t.callbacks.length; n++) {
                                  var r = e[n];
                                  r instanceof Error
                                    ? t.callbacks[n].reject(r)
                                    : t.callbacks[n].resolve(r);
                                }
                              }).catch(function (n) {
                                a(e, t, n);
                              });
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`,
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        }),
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` &&
                typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits)
                for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 &&
                    Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1,
      )),
      (Ed = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (Dd = class {
        getOffset() {
          return this.offset;
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
        }
        readUint8() {
          let e = Ed.Uint8;
          this.ensureLength(e);
          let t = this.view.getUint8(this.offset);
          return ((this.offset += e), t);
        }
        readUint16() {
          let e = Ed.Uint16;
          this.ensureLength(e);
          let t = this.view.getUint16(this.offset);
          return ((this.offset += e), t);
        }
        readUint32() {
          let e = Ed.Uint32;
          this.ensureLength(e);
          let t = this.view.getUint32(this.offset);
          return ((this.offset += e), t);
        }
        readUint64() {
          let e = this.readBigUint64();
          return Number(e);
        }
        readBigUint64() {
          let e = Ed.BigUint64;
          this.ensureLength(e);
          let t = this.view.getBigUint64(this.offset);
          return ((this.offset += e), t);
        }
        readInt8() {
          let e = Ed.Int8;
          this.ensureLength(e);
          let t = this.view.getInt8(this.offset);
          return ((this.offset += e), t);
        }
        readInt16() {
          let e = Ed.Int16;
          this.ensureLength(e);
          let t = this.view.getInt16(this.offset);
          return ((this.offset += e), t);
        }
        readInt32() {
          let e = Ed.Int32;
          this.ensureLength(e);
          let t = this.view.getInt32(this.offset);
          return ((this.offset += e), t);
        }
        readInt64() {
          let e = this.readBigInt64();
          return Number(e);
        }
        readBigInt64() {
          let e = Ed.BigInt64;
          this.ensureLength(e);
          let t = this.view.getBigInt64(this.offset);
          return ((this.offset += e), t);
        }
        readFloat32() {
          let e = Ed.Float32;
          this.ensureLength(e);
          let t = this.view.getFloat32(this.offset);
          return ((this.offset += e), t);
        }
        readFloat64() {
          let e = Ed.Float64;
          this.ensureLength(e);
          let t = this.view.getFloat64(this.offset);
          return ((this.offset += e), t);
        }
        readBytes(e) {
          let t = this.offset,
            n = t + e,
            r = this.bytes.subarray(t, n);
          return ((this.offset = n), r);
        }
        readString() {
          let e = this.readUint32(),
            t = this.readBytes(e);
          return this.decoder.decode(t);
        }
        readJson() {
          let e = this.readString();
          return JSON.parse(e);
        }
        constructor(e) {
          ((this.bytes = e),
            wd(this, `offset`, 0),
            wd(this, `view`),
            wd(this, `decoder`, new TextDecoder()),
            (this.view = vu(this.bytes)));
        }
      }),
      t !== void 0 && t.requestIdleCallback,
      (Od = (e) => 2 ** e - 1),
      (kd = (e) => -(2 ** (e - 1))),
      (Ad = (e) => 2 ** (e - 1) - 1),
      kd(8),
      kd(16),
      kd(32),
      -(BigInt(2) ** BigInt(63)),
      Od(8),
      Od(16),
      Od(32),
      BigInt(2) ** BigInt(64) - BigInt(1),
      Ad(8),
      Ad(16),
      Ad(32),
      BigInt(2) ** BigInt(63) - BigInt(1),
      (jd = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            Q(xu(n), `Invalid chunkId`),
            Q(xu(r), `Invalid offset`),
            Q(xu(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          let n = t.readUint16(),
            r = t.readUint32(),
            i = t.readUint32();
          return new e(n, r, i);
        }
        write(e) {
          (e.writeUint16(this.chunkId),
            e.writeUint32(this.offset),
            e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (Q(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          ((this.chunkId = e), (this.offset = t), (this.length = n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return wu(e);
            case 2:
              return Du(e);
            case 3:
              return Au(e);
            case 4:
              return Nu(e);
            case 5:
              return Iu(e);
            case 6:
              return zu(e);
            case 7:
              return Hu(e);
            case 8:
              return Gu(e);
            case 9:
              return Ju(e);
            case 10:
              return Zu(e);
            case 11:
              return ed(e);
            case 12:
              return rd(e);
            case 13:
              return od(e);
            default:
              yu(t);
          }
        }),
          (e.write = function (e, t) {
            let n = Cu(t);
            if ((e.writeUint8(n), !Su(t)))
              switch (t.type) {
                case U.Array:
                  return Tu(e, t);
                case U.Boolean:
                  return Ou(e, t);
                case U.Color:
                  return ju(e, t);
                case U.Date:
                  return Pu(e, t);
                case U.Enum:
                  return Lu(e, t);
                case U.File:
                  return Bu(e, t);
                case U.Link:
                  return Uu(e, t);
                case U.Number:
                  return Ku(e, t);
                case U.Object:
                  return Yu(e, t);
                case U.ResponsiveImage:
                  return Qu(e, t);
                case U.RichText:
                  return td(e, t);
                case U.VectorSetItem:
                  return sd(e, t);
                case U.String:
                  return id(e, t);
                default:
                  yu(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = Cu(e),
              i = Cu(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (Su(e) || Su(t)) return 0;
            switch (e.type) {
              case U.Array:
                return (Q(t.type === U.Array), Eu(e, t, n));
              case U.Boolean:
                return (Q(t.type === U.Boolean), ku(e, t));
              case U.Color:
                return (Q(t.type === U.Color), Mu(e, t));
              case U.Date:
                return (Q(t.type === U.Date), Fu(e, t));
              case U.Enum:
                return (Q(t.type === U.Enum), Ru(e, t));
              case U.File:
                return (Q(t.type === U.File), Vu(e, t));
              case U.Link:
                return (Q(t.type === U.Link), Wu(e, t));
              case U.Number:
                return (Q(t.type === U.Number), qu(e, t));
              case U.Object:
                return (Q(t.type === U.Object), Xu(e, t, n));
              case U.ResponsiveImage:
                return (Q(t.type === U.ResponsiveImage), $u(e, t));
              case U.RichText:
                return (Q(t.type === U.RichText), nd(e, t));
              case U.VectorSetItem:
                return (Q(t.type === U.VectorSetItem), cd(e, t));
              case U.String:
                return (Q(t.type === U.String), ad(e, t, n));
              default:
                yu(e);
            }
          }));
      })((pd ||= {})),
      (Md = 3),
      (Nd = 250),
      (Pd = [408, 429, 500, 502, 503, 504]),
      (Fd = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!Pd.includes(r.status) || ++n > Md) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > Md) throw e;
          }
          await ld(n);
        }
      }),
      (Id = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((Q(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = dd(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((Q(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = dd(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          wd(this, `chunks`, []);
        }
      }),
      (Ld = class e {
        static read(t) {
          let n = new e(),
            r = t.readUint16();
          for (let e = 0; e < r; e++) {
            let e = t.readString(),
              r = pd.read(t);
            n.setField(e, r);
          }
          return n;
        }
        write(e) {
          for (let [t, n] of (e.writeUint16(this.fields.size), this.fields))
            (e.writeString(t), pd.write(e, n));
        }
        getData() {
          let e = {};
          for (let [t, n] of this.fields) e[t] = n;
          return e;
        }
        setField(e, t) {
          this.fields.set(e, t);
        }
        getField(e) {
          return this.fields.get(e);
        }
        constructor() {
          wd(this, `fields`, new Map());
        }
      }),
      (Rd = class {
        scanItems() {
          return (
            (this.itemsPromise ??= Fd(this.url).then(async (e) => {
              if (!e.ok)
                throw Error(`Request failed: ${e.status} ${e.statusText}`);
              let t = await e.arrayBuffer(),
                n = new Dd(new Uint8Array(t)),
                r = [],
                i = n.readUint32();
              for (let e = 0; e < i; e++) {
                let e = n.getOffset(),
                  t = Ld.read(n),
                  i = n.getOffset() - e,
                  a = new jd(this.id, e, i).toString(),
                  o = { pointer: a, data: t.getData() };
                (this.itemLoader.prime(a, o), r.push(o));
              }
              return r;
            })),
            this.itemsPromise
          );
        }
        resolveItem(e) {
          return this.itemLoader.load(e);
        }
        constructor(e, t) {
          ((this.id = e),
            (this.url = t),
            wd(this, `itemsPromise`),
            wd(
              this,
              `itemLoader`,
              new Td.default(
                async (e) => {
                  let t = e.map((e) => {
                    let t = jd.fromString(e);
                    return { from: t.offset, to: t.offset + t.length };
                  });
                  return (await ud(this.url, t)).map((t, n) => {
                    let r = new Dd(t),
                      i = Ld.read(r),
                      a = e[n];
                    return (
                      Q(a, `Missing pointer`),
                      { pointer: a, data: i.getData() }
                    );
                  });
                },
                { maxBatchSize: 250 },
              ),
            ));
        }
      }),
      (zd = class {
        async scanItems() {
          return (
            await Promise.all(this.chunks.map(async (e) => e.scanItems()))
          ).flat();
        }
        resolveItems(e) {
          return Promise.all(
            e.map((e) => {
              let t = jd.fromString(e),
                n = this.chunks[t.chunkId];
              return (Q(n, `Missing chunk`), n.resolveItem(e));
            }),
          );
        }
        compareItems(e, t) {
          let n = jd.fromString(e.pointer),
            r = jd.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return pd.compare(e, t, n);
        }
        constructor(e) {
          ((this.options = e),
            wd(this, `id`),
            wd(this, `schema`),
            wd(this, `indexes`),
            wd(this, `resolveRichText`),
            wd(this, `resolveVectorSetItem`),
            wd(this, `chunks`),
            (this.chunks = this.options.chunks.map((e, t) => new Rd(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function Vd(e) {
  return typeof e == `object` && !!e && !g(e) && Gd in e;
}
function Hd(e, ...t) {
  if (!e)
    throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function Ud(e) {
  let t = new Map();
  return (n) => {
    let i = t.get(n);
    if (i) return i;
    let a = (function t(n) {
      switch (n[0]) {
        case 1: {
          let [, ...e] = n;
          return f(r, void 0, ...e.map(t));
        }
        case 2: {
          let [, e, ...r] = n;
          return f(V, e, ...r.map(t));
        }
        case 3: {
          let [, r, i, a, o] = n;
          for (let e of a) {
            let n = i[e];
            n && (i[e] = t(n));
          }
          for (let t of o) {
            let n = i[t];
            if (typeof n != `string`) continue;
            let r = e[n];
            r && (Vd(r) && r.preload(), (i[t] = r));
          }
          let s = e[r];
          return (
            Hd(s, `Module not found`),
            Vd(s) && s.preload(),
            _(ge, {
              componentIdentifier: r,
              children: (e) => _(ve, { component: s, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, r, ...i] = n,
            a = i.map(t);
          return f(e === `a` ? w.a : e, r, ...a);
        }
        case 5: {
          let [, e] = n;
          return e;
        }
      }
    })(JSON.parse(n));
    return (t.set(n, a), a);
  };
}
var Wd,
  Gd,
  Kd,
  qd = e(() => {
    (o(),
      y(),
      L(),
      c(),
      t !== void 0 && t.requestIdleCallback,
      (Gd = `preload`),
      (Kd =
        (((Wd = Kd || {})[(Wd.Fragment = 1)] = `Fragment`),
        (Wd[(Wd.Link = 2)] = `Link`),
        (Wd[(Wd.Module = 3)] = `Module`),
        (Wd[(Wd.Tag = 4)] = `Tag`),
        (Wd[(Wd.Text = 5)] = `Text`),
        Wd)));
  }),
  Jd,
  Yd,
  Xd,
  Zd,
  Qd,
  $d = e(() => {
    (L(),
      Bd(),
      qd(),
      (Jd = {
        B60pBboIj: { isNullable: !0, type: U.String },
        caa5sVpKH: { isNullable: !0, type: U.ResponsiveImage },
        createdAt: { isNullable: !0, type: U.Date },
        E0y582Nko: { isNullable: !0, type: U.ResponsiveImage },
        G3R7Wo0rP: { isNullable: !0, type: U.String },
        HRbZL60YV: { isNullable: !0, type: U.ResponsiveImage },
        id: { isNullable: !1, type: U.String },
        nextItemId: { isNullable: !0, type: U.String },
        previousItemId: { isNullable: !0, type: U.String },
        pV2gsMul3: { isNullable: !0, type: U.Link },
        updatedAt: { isNullable: !0, type: U.Date },
        vIqvRt0Sl: { isNullable: !0, type: U.String },
        vjlWu579U: { isNullable: !0, type: U.String },
      }),
      (Yd = []),
      (Xd = (e) => {
        let t = Yd[e];
        if (t) return t().then((e) => e.default);
      }),
      (Zd = Ud({})),
      new xe(),
      (Qd = {
        collectionByLocaleId: {
          default: new zd({
            chunks: [
              new URL(
                `./cms-data-chunk-3.framercms`,
                import.meta.url,
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `2a07626e-d85a-49a2-9426-d15057fcd9f8default`,
            indexes: [],
            resolveRichText: Zd,
            resolveVectorSetItem: Xd,
            schema: Jd,
          }),
        },
        displayName: `Project Home_04`,
        id: `2a07626e-d85a-49a2-9426-d15057fcd9f8`,
      }),
      I(Qd, {
        caa5sVpKH: { title: `Thumbnail`, type: U.ResponsiveImage },
        HRbZL60YV: {
          __defaultAssetReference: `data:framer/asset-reference,home-showcase-2.png?originalFilename=leere-shape.png&width=554&height=554`,
          title: `Shape`,
          type: U.ResponsiveImage,
        },
        E0y582Nko: {
          __defaultAssetReference: `data:framer/asset-reference,home-showcase-2.png?originalFilename=leere-shape.png&width=554&height=554`,
          title: `Shape 2`,
          type: U.ResponsiveImage,
        },
        B60pBboIj: { defaultValue: ``, title: `Title`, type: U.String },
        vjlWu579U: { defaultValue: ``, title: `Service 1`, type: U.String },
        G3R7Wo0rP: { defaultValue: ``, title: `Service 2`, type: U.String },
        pV2gsMul3: { title: `Link to Project Detailpage`, type: U.Link },
        vIqvRt0Sl: { preventLocalization: !0, title: `Slug`, type: U.String },
        createdAt: { title: `Created`, type: U.Date },
        updatedAt: { title: `Updated`, type: U.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/TWC301sjf:default`,
          title: `Previous`,
          type: U.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/TWC301sjf:default`,
          title: `Next`,
          type: U.CollectionReference,
        },
      }));
  });
function ef(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var tf,
  nf,
  rf,
  af,
  of,
  sf,
  cf,
  lf,
  uf,
  df,
  ff,
  pf,
  mf,
  hf,
  gf,
  _f,
  vf,
  yf = e(() => {
    (y(),
      L(),
      O(),
      c(),
      $d(),
      Ae(),
      ze(),
      (tf = Ce(ye)),
      (nf = [`rWdMBV7CY`, `sR1Hayzxt`]),
      (rf = `framer-Sds4m`),
      (af = { rWdMBV7CY: `framer-v-12crnpv`, sR1Hayzxt: `framer-v-1aestov` }),
      (of = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (sf = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (cf = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (lf = { delay: 0, duration: 3.9, ease: [0, 0, 1, 1], type: `tween` }),
      (uf = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (df = () => ({
        from: { alias: `rWdMBV7CY`, data: Qd, type: `Collection` },
        limit: { type: `LiteralValue`, value: 10 },
        select: [
          { collection: `rWdMBV7CY`, name: `pV2gsMul3`, type: `Identifier` },
          { collection: `rWdMBV7CY`, name: `caa5sVpKH`, type: `Identifier` },
          { collection: `rWdMBV7CY`, name: `B60pBboIj`, type: `Identifier` },
          { collection: `rWdMBV7CY`, name: `vjlWu579U`, type: `Identifier` },
          { collection: `rWdMBV7CY`, name: `G3R7Wo0rP`, type: `Identifier` },
          { collection: `rWdMBV7CY`, name: `E0y582Nko`, type: `Identifier` },
          { collection: `rWdMBV7CY`, name: `HRbZL60YV`, type: `Identifier` },
          { collection: `rWdMBV7CY`, name: `vIqvRt0Sl`, type: `Identifier` },
          { collection: `rWdMBV7CY`, name: `id`, type: `Identifier` },
        ],
      })),
      (ff = ({ query: e, pageSize: t, children: n }) => n(Ee(e))),
      (pf = ({ value: e, children: t }) => {
        let n = p(T),
          r = e ?? n.transition,
          a = i(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return _(T.Provider, { value: a, children: t });
      }),
      (mf = { "Variant 1": `rWdMBV7CY`, "Variant 2": `sR1Hayzxt` }),
      (hf = w.create(r)),
      (gf = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: mf[r.variant] ?? r.variant ?? `rWdMBV7CY`,
      })),
      (_f = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (vf = A(
        v(function (e, t) {
          let n = u(null),
            i = t ?? n,
            a = b(),
            { activeLocale: o, setLocale: s } = de(),
            c = _e(),
            { style: l, className: f, layoutId: p, variant: m, ...g } = gf(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: ee,
              setGestureState: T,
              setVariant: E,
              variants: O,
            } = re({
              cycleOrder: nf,
              defaultVariant: `rWdMBV7CY`,
              ref: i,
              variant: m,
              variantClassNames: af,
            }),
            k = _f(e, O),
            { activeVariantCallback: A, delay: te } = fe(v),
            j = A(async (...e) => {
              (T({ isHovered: !0 }), E(`sR1Hayzxt`));
            }),
            M = A(async (...e) => {
              (T({ isHovered: !1 }), E(`rWdMBV7CY`));
            }),
            ne = N(rf, He, Me),
            F = (e) => v === `sR1Hayzxt` && e;
          return _(D, {
            id: p ?? a,
            children: _(hf, {
              animate: O,
              initial: !1,
              children: _(pf, {
                value: of,
                children: _(w.div, {
                  ...g,
                  ...S,
                  className: N(ne, `framer-12crnpv`, f, y),
                  "data-framer-name": `Variant 1`,
                  "data-highlight": !0,
                  layoutDependency: k,
                  layoutId: `rWdMBV7CY`,
                  onMouseEnter: j,
                  ref: i,
                  style: { ...l },
                  ...ef(
                    {
                      sR1Hayzxt: {
                        "data-framer-name": `Variant 2`,
                        onMouseLeave: M,
                      },
                    },
                    v,
                    C,
                  ),
                  children: _(me, {
                    children: _(ff, {
                      query: df(),
                      children: (e, t, n) =>
                        _(d, {
                          children: e?.map(
                            (
                              {
                                B60pBboIj: e,
                                caa5sVpKH: t,
                                E0y582Nko: n,
                                G3R7Wo0rP: i,
                                HRbZL60YV: a,
                                id: o,
                                pV2gsMul3: s,
                                vIqvRt0Sl: l,
                                vjlWu579U: u,
                              },
                              d,
                            ) => {
                              ((s =
                                s && s.pathVariables
                                  ? s
                                  : {
                                      pathVariables: { qD3idoXBI: `ohm-club` },
                                      unresolvedPathSlugs: {
                                        qD3idoXBI: {
                                          collectionId: `R2jsuapbg`,
                                          collectionItemId: `HhKnCTo3a`,
                                        },
                                      },
                                      webPageId: `R3ke5TPEo`,
                                    }),
                                (e = `Ohm Club`),
                                (u = `Music Venue & Spatial Design`),
                                (i = ``),
                                (l ??= ``));
                              let f = cf(n),
                                p = cf(a);
                              return _(
                                D,
                                {
                                  id: `rWdMBV7CY-${o}`,
                                  children: _(ue.Provider, {
                                    value: { vIqvRt0Sl: l },
                                    children: _(V, {
                                      href: s,
                                      motionChild: !0,
                                      nodeId: `aqrYzSwvz`,
                                      openInNewTab: !1,
                                      scopeId: `tJZpYxvHm`,
                                      children: h(w.a, {
                                        className: `framer-oxve9k framer-u64fyi`,
                                        layoutDependency: k,
                                        layoutId: `aqrYzSwvz`,
                                        children: [
                                          _(ye, {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              loading: P(
                                                (c?.y || 0) +
                                                  0 +
                                                  (((c?.height || 341) -
                                                    0 -
                                                    (Math.max(
                                                      0,
                                                      ((c?.height || 341) -
                                                        0 -
                                                        0) /
                                                        1,
                                                    ) *
                                                      1 +
                                                      0)) /
                                                    2 +
                                                    0 +
                                                    0) +
                                                  0 +
                                                  0,
                                              ),
                                              pixelHeight: 3995,
                                              pixelWidth: 6005,
                                              sizes: c?.width || `100vw`,
                                              ...sf(t),
                                            },
                                            className: `framer-437917`,
                                            layoutDependency: k,
                                            layoutId: `xCYKUBLaa`,
                                          }),
                                          _(w.div, {
                                            className: `framer-kuiv8j`,
                                            layoutDependency: k,
                                            layoutId: `EyXF4gzxp`,
                                            children: h(w.div, {
                                              className: `framer-3f5nhq`,
                                              layoutDependency: k,
                                              layoutId: `rxggW7HP7`,
                                              children: [
                                                h(w.div, {
                                                  className: `framer-smu07s`,
                                                  layoutDependency: k,
                                                  layoutId: `vlZJcG2Bi`,
                                                  children: [
                                                    _(W, {
                                                      __fromCanvasComponent: !0,
                                                      children: _(r, {
                                                        children: _(w.h3, {
                                                          className: `framer-styles-preset-es7zc9`,
                                                          "data-styles-preset": `YZV7Namdz`,
                                                          dir: `auto`,
                                                          children: `CREATIVE DESIGN AWARDS`,
                                                        }),
                                                      }),
                                                      className: `framer-1jon4ys`,
                                                      fonts: [`Inter`],
                                                      layoutDependency: k,
                                                      layoutId: `YN99l0RES`,
                                                      style: {
                                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                        "--framer-link-text-decoration": `underline`,
                                                      },
                                                      text: e,
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    _(W, {
                                                      __fromCanvasComponent: !0,
                                                      children: _(r, {
                                                        children: _(w.p, {
                                                          className: `framer-styles-preset-x2q274`,
                                                          "data-styles-preset": `U2MfhGBrp`,
                                                          dir: `auto`,
                                                          children: `Frontend & Interactive UI`,
                                                        }),
                                                      }),
                                                      className: `framer-1pxxh0g`,
                                                      fonts: [`Inter`],
                                                      layoutDependency: k,
                                                      layoutId: `cjyhm5Yio`,
                                                      style: {
                                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                        "--framer-link-text-decoration": `underline`,
                                                      },
                                                      text: u,
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    _(W, {
                                                      __fromCanvasComponent: !0,
                                                      children: _(r, {
                                                        children: _(w.p, {
                                                          className: `framer-styles-preset-x2q274`,
                                                          "data-styles-preset": `U2MfhGBrp`,
                                                          dir: `auto`,
                                                          children: `Frontend & Interactive UI`,
                                                        }),
                                                      }),
                                                      className: `framer-1h22l4z`,
                                                      fonts: [`Inter`],
                                                      layoutDependency: k,
                                                      layoutId: `r5VzoZMpO`,
                                                      style: {
                                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                        "--framer-link-text-decoration": `underline`,
                                                      },
                                                      text: i,
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                                h(w.div, {
                                                  className: `framer-11ltuti`,
                                                  layoutDependency: k,
                                                  layoutId: `cKumxl4wR`,
                                                  children: [
                                                    F(f !== !1) &&
                                                      _(tf, {
                                                        background: {
                                                          alt: ``,
                                                          fit: `fill`,
                                                          pixelHeight: 554,
                                                          pixelWidth: 554,
                                                          ...sf(n),
                                                        },
                                                        className: `framer-1e34qqh`,
                                                        fitImageDimension: `width`,
                                                        layoutDependency: k,
                                                        layoutId: `XppopStw0`,
                                                        ...ef(
                                                          {
                                                            sR1Hayzxt: {
                                                              __framer__loop:
                                                                uf,
                                                              __framer__loopEffectEnabled:
                                                                !0,
                                                              __framer__loopPauseOffscreen:
                                                                !0,
                                                              __framer__loopRepeatDelay: 0,
                                                              __framer__loopRepeatType: `loop`,
                                                              __framer__loopTransition:
                                                                lf,
                                                              __perspectiveFX:
                                                                !1,
                                                              __smartComponentFX:
                                                                !0,
                                                              __targetOpacity: 1,
                                                              background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                loading: P(
                                                                  (c?.y || 0) +
                                                                    0 +
                                                                    (((c?.height ||
                                                                      341) -
                                                                      0 -
                                                                      (Math.max(
                                                                        0,
                                                                        ((c?.height ||
                                                                          341) -
                                                                          0 -
                                                                          0) /
                                                                          1,
                                                                      ) *
                                                                        1 +
                                                                        0)) /
                                                                      2 +
                                                                      0 +
                                                                      0) +
                                                                    0 +
                                                                    (0 +
                                                                      Math.max(
                                                                        0,
                                                                        (Math.max(
                                                                          0,
                                                                          ((c?.height ||
                                                                            341) -
                                                                            0 -
                                                                            0) /
                                                                            1,
                                                                        ) *
                                                                          1 -
                                                                          0 -
                                                                          100) /
                                                                          1,
                                                                      ) *
                                                                        1 +
                                                                      10) +
                                                                    10 +
                                                                    17.5 +
                                                                    0,
                                                                ),
                                                                pixelHeight: 554,
                                                                pixelWidth: 554,
                                                                sizes: `45px`,
                                                                ...sf(n),
                                                              },
                                                            },
                                                          },
                                                          v,
                                                          C,
                                                        ),
                                                      }),
                                                    F(p !== !1) &&
                                                      _(tf, {
                                                        __framer__loop: uf,
                                                        __framer__loopEffectEnabled:
                                                          !0,
                                                        __framer__loopPauseOffscreen:
                                                          !0,
                                                        __framer__loopRepeatDelay: 0,
                                                        __framer__loopRepeatType: `loop`,
                                                        __framer__loopTransition:
                                                          lf,
                                                        __perspectiveFX: !1,
                                                        __smartComponentFX: !0,
                                                        __targetOpacity: 1,
                                                        background: {
                                                          alt: ``,
                                                          fit: `fill`,
                                                          pixelHeight: 200,
                                                          pixelWidth: 200,
                                                          ...sf(a),
                                                        },
                                                        className: `framer-1czyc3t`,
                                                        layoutDependency: k,
                                                        layoutId: `A59A_cxf6`,
                                                        ...ef(
                                                          {
                                                            sR1Hayzxt: {
                                                              background: {
                                                                alt: ``,
                                                                fit: `fill`,
                                                                loading: P(
                                                                  (c?.y || 0) +
                                                                    0 +
                                                                    (((c?.height ||
                                                                      341) -
                                                                      0 -
                                                                      (Math.max(
                                                                        0,
                                                                        ((c?.height ||
                                                                          341) -
                                                                          0 -
                                                                          0) /
                                                                          1,
                                                                      ) *
                                                                        1 +
                                                                        0)) /
                                                                      2 +
                                                                      0 +
                                                                      0) +
                                                                    0 +
                                                                    (0 +
                                                                      Math.max(
                                                                        0,
                                                                        (Math.max(
                                                                          0,
                                                                          ((c?.height ||
                                                                            341) -
                                                                            0 -
                                                                            0) /
                                                                            1,
                                                                        ) *
                                                                          1 -
                                                                          0 -
                                                                          100) /
                                                                          1,
                                                                      ) *
                                                                        1 +
                                                                      10) +
                                                                    10 +
                                                                    17.5 +
                                                                    0,
                                                                ),
                                                                pixelHeight: 200,
                                                                pixelWidth: 200,
                                                                sizes: `45px`,
                                                                ...sf(a),
                                                              },
                                                            },
                                                          },
                                                          v,
                                                          C,
                                                        ),
                                                      }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                },
                                o,
                              );
                            },
                          ),
                        }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Sds4m.framer-u64fyi, .framer-Sds4m .framer-u64fyi { display: block; }`,
          `.framer-Sds4m.framer-12crnpv { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 341px; justify-content: center; padding: 0px; position: relative; width: 392px; }`,
          `.framer-Sds4m .framer-oxve9k { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: flex-start; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
          `.framer-Sds4m .framer-437917 { flex: 1 0 0px; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-Sds4m .framer-kuiv8j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 10px 0px 0px 0px; position: relative; width: 100%; }`,
          `.framer-Sds4m .framer-3f5nhq { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-Sds4m .framer-smu07s { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-Sds4m .framer-1jon4ys { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-Sds4m .framer-1pxxh0g, .framer-Sds4m .framer-1h22l4z { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-Sds4m .framer-11ltuti { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: 45px; justify-content: flex-end; min-width: 45px; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 1; }`,
          `.framer-Sds4m .framer-1e34qqh { flex: none; height: 45px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: auto; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-Sds4m .framer-1czyc3t { aspect-ratio: 1 / 1; flex: none; height: 100%; overflow: var(--overflow-clip-fallback, clip); position: relative; width: var(--framer-aspect-ratio-supported, 45px); will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-Sds4m.framer-v-1aestov .framer-3f5nhq, .framer-Sds4m.framer-v-1aestov .framer-1e34qqh { order: 0; }`,
          `.framer-Sds4m.framer-v-1aestov .framer-11ltuti { min-width: unset; }`,
          `.framer-Sds4m.framer-v-1aestov .framer-1czyc3t { order: 1; }`,
          ...Be,
          ...Re,
        ],
        `framer-Sds4m`,
      )),
      (vf.displayName = `Projekt_Kachel_04`),
      (vf.defaultProps = { height: 341, width: 392 }),
      I(vf, {
        variant: {
          options: [`rWdMBV7CY`, `sR1Hayzxt`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: U.Enum,
        },
      }),
      Se(
        vf,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/fonts/inter-400.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/fonts/inter-400-2.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/fonts/inter-400-3.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `/fonts/inter-400-4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/fonts/inter-400-5.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/fonts/inter-400-6.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `/fonts/inter-400-7.woff2`,
                weight: `400`,
              },
            ],
          },
          ...M(Ve),
          ...M(ke),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (vf.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = R.get(df(), n);
          return Promise.allSettled([r.preload()]);
        },
      }));
  });
function bf(e) {
  return e.replace(
    /<br\s*\/?>/gi,
    `
`,
  );
}
function xf(e) {
  let t = bf(e).split(`
`);
  return t.map((e, n) =>
    h(r, { children: [e, n < t.length - 1 && _(`br`, {})] }, n),
  );
}
function Sf(e) {
  let t = bf(e),
    n = [];
  return (
    t.split(/(\n|\s+)/).forEach((e) => {
      if (e) {
        if (
          e ===
          `
`
        ) {
          n.push({ type: `break` });
          return;
        }
        if (/^\s+$/.test(e)) {
          n.push({ type: `space`, value: e });
          return;
        }
        n.push({ type: `word`, value: e });
      }
    }),
    n
  );
}
function Cf(e) {
  return e.reduce((e, t) => {
    let n = bf(e);
    return bf(t).length > n.length ? t : e;
  }, e[0] || ``);
}
function wf({
  staticText: e = `Spatial design studio for timeless`,
  words: t = [`retail`, `experiences`, `activations`],
  duration: n = 3e3,
  staggerDelay: r = 0.05,
  textColor: i = `#ffffff`,
  font: o,
  fontSize: s,
  fontWeight: c,
  lineHeight: u,
  htmlTag: d = `div`,
}) {
  let [f, p] = l(0),
    m = t.length > 0 ? t : [``],
    g = m[f] || ``,
    v = Cf(m),
    y = Sf(g),
    b = Sf(v),
    S = y.reduce((e, t) => (t.type === `word` ? e + t.value.length : e), 0),
    C = d;
  (x(() => {
    if (m.length <= 1) return;
    let e = setInterval(() => {
      a(() => {
        p((e) => (e + 1) % m.length);
      });
    }, n);
    return () => clearInterval(e);
  }, [m.length, n]),
    x(() => {
      f >= m.length && p(0);
    }, [f, m.length]));
  let ee = 0.5,
    T = S > 0 ? ee + (S - 1) * r * 0.15 : ee,
    D = -1;
  return h(C, {
    style: {
      display: d === `span` ? `inline` : `block`,
      color: i,
      fontFamily: o?.fontFamily,
      letterSpacing: o?.letterSpacing,
      fontSize: s,
      fontWeight: c,
      lineHeight: u,
      margin: 0,
      whiteSpace: `normal`,
      overflowWrap: `anywhere`,
    },
    children: [
      xf(e),
      ` `,
      h(`span`, {
        style: {
          display: `inline-grid`,
          position: `relative`,
          verticalAlign: `baseline`,
          maxWidth: `100%`,
          overflow: `visible`,
        },
        children: [
          _(`span`, {
            style: {
              gridArea: `1 / 1`,
              visibility: `hidden`,
              pointerEvents: `none`,
              whiteSpace: `pre-wrap`,
              maxWidth: `100%`,
              overflowWrap: `anywhere`,
            },
            children: b.map((e, t) =>
              e.type === `break`
                ? _(`br`, {}, `placeholder-break-${t}`)
                : e.type === `space`
                  ? _(
                      `span`,
                      { style: { whiteSpace: `pre-wrap` }, children: e.value },
                      `placeholder-space-${t}`,
                    )
                  : _(
                      `span`,
                      {
                        style: {
                          display: `inline-block`,
                          whiteSpace: `nowrap`,
                        },
                        children: e.value,
                      },
                      `placeholder-word-${t}`,
                    ),
            ),
          }),
          _(E, {
            initial: !1,
            mode: `sync`,
            children: _(
              w.span,
              {
                style: {
                  gridArea: `1 / 1`,
                  display: `inline`,
                  alignSelf: `start`,
                  whiteSpace: `pre-wrap`,
                  maxWidth: `100%`,
                  overflow: `visible`,
                  overflowWrap: `anywhere`,
                },
                initial: `hidden`,
                animate: `visible`,
                exit: `exit`,
                children: y.map((e, t) =>
                  e.type === `break`
                    ? _(`br`, {}, `${f}-break-${t}`)
                    : e.type === `space`
                      ? _(
                          `span`,
                          {
                            style: { whiteSpace: `pre-wrap` },
                            children: e.value,
                          },
                          `${f}-space-${t}`,
                        )
                      : _(
                          `span`,
                          {
                            style: {
                              display: `inline-block`,
                              whiteSpace: `nowrap`,
                            },
                            children: e.value.split(``).map((e, n) => {
                              D += 1;
                              let i = D;
                              return _(
                                w.span,
                                {
                                  variants: {
                                    hidden: { y: `100%`, opacity: 0 },
                                    visible: {
                                      y: `0%`,
                                      opacity: 1,
                                      transition: {
                                        duration: 0.5,
                                        delay: T + i * r,
                                        ease: [0.22, 1, 0.36, 1],
                                      },
                                    },
                                    exit: {
                                      y: `-100%`,
                                      opacity: 0,
                                      transition: {
                                        duration: 0.5,
                                        delay: i * r,
                                        ease: [0.22, 1, 0.36, 1],
                                      },
                                    },
                                  },
                                  style: {
                                    display: `inline-block`,
                                    whiteSpace: `pre`,
                                    overflow: `visible`,
                                  },
                                  children: e,
                                },
                                `${f}-${t}-${n}`,
                              );
                            }),
                          },
                          `${f}-word-${t}`,
                        ),
                ),
              },
              f,
            ),
          }),
        ],
      }),
    ],
  });
}
var Tf = e(() => {
  (y(),
    c(),
    L(),
    I(wf, {
      staticText: {
        title: `Text`,
        type: U.String,
        defaultValue: `Spatial design studio for timeless`,
        displayTextArea: !0,
      },
      htmlTag: {
        title: `HTML Tag`,
        type: U.Enum,
        options: [`div`, `p`, `span`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`],
        optionTitles: [`div`, `p`, `span`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`],
        defaultValue: `div`,
      },
      words: {
        type: U.Array,
        title: `Wörter`,
        control: { type: U.String, displayTextArea: !0 },
        defaultValue: [`retail`, `experiences`, `activations`],
      },
      duration: {
        type: U.Number,
        title: `Wechsel alle (ms)`,
        defaultValue: 3e3,
        min: 1e3,
        max: 1e4,
        step: 100,
      },
      staggerDelay: {
        type: U.Number,
        title: `Stagger Delay`,
        defaultValue: 0.05,
        min: 0,
        max: 0.2,
        step: 0.01,
      },
      textColor: { type: U.Color, title: `Textfarbe`, defaultValue: `#ffffff` },
      font: {
        title: `Schriftart`,
        type: U.Font,
        defaultValue: { fontFamily: `Inter`, letterSpacing: `-0.02em` },
      },
      fontSize: {
        title: `Schriftgröße`,
        type: U.Number,
        min: 10,
        max: 200,
        defaultValue: 80,
        unit: `px`,
      },
      fontWeight: {
        title: `Schriftschnitt`,
        type: U.Enum,
        options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        optionTitles: [
          `100 Thin`,
          `200 Extra Light`,
          `300 Light`,
          `400 Normal`,
          `500 Medium`,
          `600 Semi Bold`,
          `700 Bold`,
          `800 Extra Bold`,
          `900 Black`,
        ],
        defaultValue: 700,
      },
      lineHeight: {
        title: `Zeilenhöhe`,
        type: U.Number,
        min: 0.8,
        max: 3,
        step: 0.1,
        defaultValue: 1.2,
      },
    }));
});
function Ef(e) {
  let {
      text: t,
      speed: n,
      gap: r,
      direction: i,
      font: a,
      color1: o,
      color2: s,
      opacity: c,
    } = e,
    l = i === `Right` ? 1 : -1,
    u = Math.max(8, 200 / n),
    f = {
      display: `inline-flex`,
      gap: r,
      whiteSpace: `nowrap`,
      willChange: `transform`,
    },
    p = () =>
      _(d, {
        children: Array.from({ length: 12 }).map((e, n) =>
          _(
            `span`,
            {
              style: {
                display: `inline-flex`,
                alignItems: `center`,
                whiteSpace: `nowrap`,
                ...a,
                color: n % 2 == 0 ? o : s,
                opacity: c,
              },
              children: t,
            },
            n,
          ),
        ),
      });
  return _(`div`, {
    style: { width: `100%`, overflow: `hidden`, display: `flex` },
    children: h(w.div, {
      style: f,
      initial: { x: 0 },
      animate: { x: l === -1 ? [`0%`, `-50%`] : [`-50%`, `0%`] },
      transition: { duration: u, ease: `linear`, repeat: 1 / 0 },
      children: [_(p, {}), _(p, {})],
    }),
  });
}
var Df = e(() => {
  (y(),
    O(),
    L(),
    I(Ef, {
      text: { type: U.String, defaultValue: `MESHACK` },
      font: {
        type: U.Font,
        title: `Font`,
        controls: `extended`,
        defaultValue: { fontFamily: `Poppins`, fontWeight: 700, fontSize: 120 },
      },
      speed: {
        type: U.Number,
        title: `Speed`,
        defaultValue: 60,
        min: 1,
        max: 200,
        step: 1,
      },
      gap: {
        type: U.Number,
        title: `Gap`,
        defaultValue: 48,
        min: 0,
        max: 200,
        step: 1,
      },
      direction: {
        type: U.Enum,
        title: `Direction`,
        options: [`Left`, `Right`],
        defaultValue: `Left`,
      },
      color1: { type: U.Color, title: `Color A`, defaultValue: `#000000` },
      color2: { type: U.Color, title: `Color B`, defaultValue: `#ffffff` },
      opacity: {
        type: U.Number,
        defaultValue: 0.2,
        min: 0,
        max: 1,
        step: 0.05,
      },
    }));
});
function Of(e, n, r) {
  let [i, a] = l(0);
  return (
    x(() => {
      if (e <= 1) {
        a(0);
        return;
      }
      let i,
        o = t.setTimeout(() => {
          i = t.setInterval(() => {
            a((t) => (t + 1) % e);
          }, n * 1e3);
        }, r * 1e3);
      return () => {
        (t.clearTimeout(o), i !== void 0 && t.clearInterval(i));
      };
    }, [e, n, r]),
    x(() => {
      i >= e && a(0);
    }, [e, i]),
    i
  );
}
function kf(e) {
  let {
      text: t,
      htmlTag: n,
      shapes1: i = [],
      shapes2: a = [],
      shapes3: o = [],
      images1: s = [],
      images2: c = [],
      images3: l = [],
      switchInterval: u,
      delay1: d,
      delay2: f,
      delay3: p,
      fontSize: m,
      font: h,
      fontWeight: g,
      lineHeight: v,
      textColor: y,
      textAlign: b,
      visualHeightEm: x,
      visualSpacing: S,
      baseShapeSizePx: C,
      shapeFit: w,
      imageFit: ee,
      imageRadius: T,
    } = e,
    E = n,
    D = {
      img1: { shapes: i, images: s, delay: d },
      img2: { shapes: a, images: c, delay: f },
      img3: { shapes: o, images: l, delay: p },
    },
    O = i.length > 0 ? i.length : s.length,
    k = a.length > 0 ? a.length : c.length,
    A = o.length > 0 ? o.length : l.length,
    te = { img1: Of(O, u, d), img2: Of(k, u, f), img3: Of(A, u, p) },
    j = m * v * x,
    M = C > 0 ? j / C : 1,
    N = h?.fontFamily ?? h?.family ?? (typeof h == `string` ? h : void 0),
    ne = g ?? h?.fontWeight ?? h?.weight ?? 400,
    P = {
      display: `inline-flex`,
      alignItems: `center`,
      justifyContent: `center`,
      verticalAlign: `middle`,
      height: `${j}px`,
      marginLeft: `${S}px`,
      marginRight: `${S}px`,
      lineHeight: 0,
      overflow: `visible`,
    },
    F = {
      display: `block`,
      height: `100%`,
      width: `auto`,
      maxWidth: `none`,
      objectFit: ee,
      borderRadius: `${T}px`,
    },
    re = {
      display: `inline-flex`,
      alignItems: `center`,
      justifyContent: `center`,
      width: `${j}px`,
      height: `${j}px`,
      overflow: `visible`,
      flexShrink: 0,
    },
    I = {
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      width: `${C}px`,
      height: `${C}px`,
      transform: `scale(${M})`,
      transformOrigin: `center center`,
      flexShrink: 0,
      overflow: `visible`,
    };
  function L(e, t) {
    let n = D[e],
      r = te[e];
    if (n.shapes && n.shapes.length > 0) {
      let e = n.shapes[r];
      return e
        ? _(
            `span`,
            {
              style: P,
              children: _(`span`, {
                style: re,
                children: _(`span`, {
                  style: {
                    ...I,
                    overflow: w === `cover` ? `hidden` : `visible`,
                  },
                  children: e,
                }),
              }),
            },
            t,
          )
        : null;
    }
    if (n.images && n.images.length > 0) {
      let e = n.images[r];
      return e
        ? _(
            `span`,
            { style: P, children: _(`img`, { src: e, alt: ``, style: F }) },
            t,
          )
        : null;
    }
    return null;
  }
  function R(e, t) {
    return e
      .split(/(<br\s*\/?>)/gi)
      .map((e, n) =>
        /^<br\s*\/?>$/i.test(e)
          ? _(`br`, {}, `${t}-${n}`)
          : _(r, { children: e }, `${t}-${n}`),
      );
  }
  function z() {
    return (t || ``)
      .replace(/[ \t]+/g, ` `)
      .split(/(\{img[1-3]\})/g)
      .flatMap((e, t) =>
        e === `{img1}`
          ? L(`img1`, t)
          : e === `{img2}`
            ? L(`img2`, t)
            : e === `{img3}`
              ? L(`img3`, t)
              : R(e, t),
      );
  }
  return _(E, {
    style: {
      width: `100%`,
      color: y,
      fontFamily: N,
      fontSize: `${m}px`,
      fontWeight: ne,
      lineHeight: v,
      textAlign: b,
      whiteSpace: `pre-wrap`,
      wordBreak: `break-word`,
      overflow: `visible`,
      margin: 0,
    },
    children: z(),
  });
}
var Af = e(() => {
  (o(),
    y(),
    c(),
    L(),
    I(kf, {
      text: {
        title: `Text`,
        type: U.String,
        displayTextArea: !0,
        defaultValue: `From concept to spatial execution,<br>turning ideas {img1} into spaces {img2}<br/>people remember {img3}.`,
      },
      htmlTag: {
        title: `HTML Tag`,
        type: U.Enum,
        options: [`div`, `p`, `span`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`],
        optionTitles: [`div`, `p`, `span`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`],
        defaultValue: `div`,
      },
      shapes1: {
        title: `Shapes 1`,
        type: U.Array,
        propertyControl: { type: U.ComponentInstance },
        defaultValue: [],
      },
      images1: {
        title: `Images 1`,
        type: U.Array,
        propertyControl: { type: U.Image },
        defaultValue: [],
      },
      delay1: {
        title: `Delay 1`,
        type: U.Number,
        min: 0,
        step: 0.1,
        defaultValue: 0,
      },
      shapes2: {
        title: `Shapes 2`,
        type: U.Array,
        propertyControl: { type: U.ComponentInstance },
        defaultValue: [],
      },
      images2: {
        title: `Images 2`,
        type: U.Array,
        propertyControl: { type: U.Image },
        defaultValue: [],
      },
      delay2: {
        title: `Delay 2`,
        type: U.Number,
        min: 0,
        step: 0.1,
        defaultValue: 0.5,
      },
      shapes3: {
        title: `Shapes 3`,
        type: U.Array,
        propertyControl: { type: U.ComponentInstance },
        defaultValue: [],
      },
      images3: {
        title: `Images 3`,
        type: U.Array,
        propertyControl: { type: U.Image },
        defaultValue: [],
      },
      delay3: {
        title: `Delay 3`,
        type: U.Number,
        min: 0,
        step: 0.1,
        defaultValue: 1,
      },
      switchInterval: {
        title: `Switch`,
        type: U.Number,
        min: 0.2,
        step: 0.1,
        defaultValue: 2,
      },
      visualHeightEm: {
        title: `Visual Size`,
        type: U.Number,
        min: 0.2,
        max: 3,
        step: 0.1,
        defaultValue: 1,
      },
      baseShapeSizePx: {
        title: `Base Shape Px`,
        type: U.Number,
        min: 10,
        max: 1e3,
        step: 1,
        defaultValue: 100,
      },
      visualSpacing: {
        title: `Visual Gap`,
        type: U.Number,
        min: 0,
        max: 40,
        step: 1,
        defaultValue: 4,
      },
      shapeFit: {
        title: `Shape Fit`,
        type: U.Enum,
        options: [`contain`, `cover`],
        optionTitles: [`Contain`, `Cover`],
        defaultValue: `contain`,
      },
      imageFit: {
        title: `Image Fit`,
        type: U.Enum,
        options: [`contain`, `cover`],
        optionTitles: [`Contain`, `Cover`],
        defaultValue: `contain`,
      },
      imageRadius: {
        title: `Image Radius`,
        type: U.Number,
        min: 0,
        max: 100,
        step: 1,
        defaultValue: 0,
      },
      fontSize: {
        title: `Size`,
        type: U.Number,
        min: 10,
        max: 200,
        unit: `px`,
        defaultValue: 18,
      },
      font: {
        title: `Font`,
        type: U.Font,
        defaultValue: { family: `Inter`, weight: `400` },
      },
      fontWeight: {
        title: `Weight`,
        type: U.Enum,
        options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        optionTitles: [
          `100 Thin`,
          `200 Extra Light`,
          `300 Light`,
          `400 Normal`,
          `500 Medium`,
          `600 Semi Bold`,
          `700 Bold`,
          `800 Extra Bold`,
          `900 Black`,
        ],
        defaultValue: 400,
      },
      lineHeight: {
        title: `Line Height`,
        type: U.Number,
        min: 0.8,
        max: 3,
        step: 0.1,
        defaultValue: 1.2,
      },
      textColor: { title: `Color`, type: U.Color, defaultValue: `#000000` },
      textAlign: {
        title: `Align`,
        type: U.Enum,
        options: [`left`, `center`, `right`],
        optionTitles: [`Left`, `Center`, `Right`],
        defaultValue: `left`,
        displaySegmentedControl: !0,
      },
    }));
});
function jf(e) {
  let {
      shapes: t,
      speed: r,
      gap: i,
      direction: a,
      itemWidth: o,
      minHeight: s,
      align: c,
      shapeSizePx: d,
      verticalPadding: f,
    } = e,
    p = u(null),
    m = u(null),
    [g, v] = l(0),
    [y, b] = l(6),
    x = c === `start` ? `flex-start` : c === `end` ? `flex-end` : `center`,
    S = Math.max(s, d) + f * 2;
  n(() => {
    let e = () => {
      let e = p.current?.offsetWidth ?? 0,
        t = m.current?.offsetWidth ?? 0;
      if (!e || !t) return;
      v(t);
      let n = Math.ceil((e * 2) / t) + 2;
      b(Math.max(n, 4));
    };
    e();
    let t = new ResizeObserver(e);
    return (
      p.current && t.observe(p.current),
      m.current && t.observe(m.current),
      () => t.disconnect()
    );
  }, [t, i, o, s, d, f]);
  let C = (e, t) =>
      _(
        `div`,
        {
          style: {
            width: `${o}px`,
            height: `${S}px`,
            flex: `0 0 ${o}px`,
            display: `flex`,
            alignItems: x,
            justifyContent: `center`,
            overflow: `visible`,
            boxSizing: `border-box`,
            paddingTop: `${f}px`,
            paddingBottom: `${f}px`,
          },
          children: _(`div`, {
            style: {
              width: `${d}px`,
              height: `${d}px`,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              flexShrink: 0,
              overflow: `visible`,
              boxSizing: `border-box`,
            },
            children: e,
          }),
        },
        t,
      ),
    w = Array.from({ length: y }, (e, n) =>
      _(
        `div`,
        {
          style: {
            display: `flex`,
            alignItems: x,
            gap: `${i}px`,
            flexShrink: 0,
            width: `max-content`,
            overflow: `visible`,
          },
          children: t.map((e, t) => C(e, `${n}-${t}`)),
        },
        n,
      ),
    ),
    ee = a === `left` ? `tickerLeft` : `tickerRight`;
  return h(`div`, {
    ref: p,
    style: {
      width: `100%`,
      minHeight: `${S}px`,
      overflowX: `hidden`,
      overflowY: `visible`,
      position: `relative`,
      display: `flex`,
      alignItems: x,
    },
    children: [
      _(`style`, {
        children: `
                @keyframes tickerLeft {
                    from { transform: translateX(0); }
                    to { transform: translateX(-${g}px); }
                }

                @keyframes tickerRight {
                    from { transform: translateX(-${g}px); }
                    to { transform: translateX(0); }
                }
            `,
      }),
      _(`div`, {
        ref: m,
        style: {
          position: `absolute`,
          visibility: `hidden`,
          pointerEvents: `none`,
          display: `flex`,
          alignItems: x,
          gap: `${i}px`,
          width: `max-content`,
          overflow: `visible`,
        },
        children: t.map((e, t) => C(e, `measure-${t}`)),
      }),
      g > 0 &&
        t.length > 0 &&
        _(`div`, {
          style: {
            display: `flex`,
            alignItems: x,
            width: `max-content`,
            willChange: `transform`,
            animation: `${ee} ${r}s linear infinite`,
            overflow: `visible`,
          },
          children: w,
        }),
    ],
  });
}
var Mf = e(() => {
    (y(),
      c(),
      L(),
      I(jf, {
        shapes: {
          type: U.Array,
          title: `Shapes`,
          control: { type: U.ComponentInstance },
        },
        speed: {
          type: U.Number,
          title: `Speed`,
          defaultValue: 18,
          min: 2,
          max: 80,
          step: 1,
        },
        gap: {
          type: U.Number,
          title: `Gap`,
          defaultValue: 0,
          min: 0,
          max: 200,
          step: 1,
        },
        itemWidth: {
          type: U.Number,
          title: `Item Width`,
          defaultValue: 310,
          min: 20,
          max: 800,
          step: 1,
        },
        minHeight: {
          type: U.Number,
          title: `Min Height`,
          defaultValue: 120,
          min: 0,
          max: 800,
          step: 1,
        },
        shapeSizePx: {
          type: U.Number,
          title: `Shape Size`,
          defaultValue: 90,
          min: 10,
          max: 600,
          step: 1,
        },
        baseShapeSizePx: {
          type: U.Number,
          title: `Base Shape Px`,
          defaultValue: 100,
          min: 10,
          max: 1e3,
          step: 1,
          hidden: () => !0,
        },
        verticalPadding: {
          type: U.Number,
          title: `V Padding`,
          defaultValue: 24,
          min: 0,
          max: 200,
          step: 1,
        },
        align: {
          type: U.Enum,
          title: `Align`,
          defaultValue: `center`,
          options: [`start`, `center`, `end`],
          optionTitles: [`Top`, `Center`, `Bottom`],
        },
        direction: {
          type: U.Enum,
          title: `Direction`,
          defaultValue: `left`,
          options: [`left`, `right`],
          optionTitles: [`Left`, `Right`],
        },
      }));
  }),
  Nf,
  Pf,
  Ff,
  If,
  Lf,
  Rf,
  zf,
  Bf,
  Vf,
  Hf,
  Uf,
  Wf,
  Gf,
  Kf,
  qf,
  Jf,
  Yf,
  Xf,
  Zf,
  Qf,
  $f,
  ep,
  tp,
  np,
  rp,
  ip,
  $,
  ap,
  op,
  sp,
  cp,
  lp,
  up,
  dp,
  fp,
  pp,
  mp,
  hp,
  gp;
e(() => {
  (y(),
    L(),
    O(),
    c(),
    Wt(),
    mn(),
    hi(),
    Ue(),
    go(),
    gc(),
    Oe(),
    _u(),
    yf(),
    Pe(),
    Tf(),
    je(),
    Ne(),
    qe(),
    Df(),
    Af(),
    We(),
    Mf(),
    Ye(),
    Ze(),
    tt(),
    ze(),
    ot(),
    (Nf = j(Ef)),
    (Pf = j(wf)),
    (Ff = j(Pt)),
    (If = Ce(B)),
    (Lf = j(kf)),
    (Rf = j(jf)),
    (zf = j(Ge)),
    (Bf = j(Ke)),
    (Vf = j(ho)),
    (Hf = j(hc)),
    (Uf = j(gu)),
    (Wf = j(vf)),
    (Gf = j(mi)),
    (Kf = j(pn)),
    (qf = j(Xe)),
    (Jf = j(Je)),
    (Yf = j(Fe)),
    (Xf = j(Le)),
    (Zf = j(Ie)),
    (Qf = te(Ie)),
    ($f = j(De)),
    (ep = {
      aYwBiDlS4: `(min-width: 810px) and (max-width: 1199.98px)`,
      WQLkyLRf1: `(min-width: 1200px)`,
      Z0imWIwn6: `(max-width: 809.98px)`,
    }),
    (tp = [`hover-wort`]),
    (np = `framer-1PA4P`),
    (rp = {
      aYwBiDlS4: `framer-v-pfdayg`,
      WQLkyLRf1: `framer-v-72rtr7`,
      Z0imWIwn6: `framer-v-9alzb1`,
    }),
    (ip = (e, t, n) => (e && t ? `position` : n)),
    ($ = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (ap = {
      delay: 0,
      duration: 0.4,
      ease: [0.12, 0.23, 0.5, 1],
      type: `tween`,
    }),
    (op = {
      opacity: 1,
      rotate: -5,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: ap,
    }),
    (sp = {
      opacity: 1,
      rotate: 5,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: ap,
    }),
    (cp = {
      opacity: 1,
      rotate: -2,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: ap,
    }),
    (lp = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1.1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` },
    }),
    (up = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (dp = (e, t) => `translateX(-50%) ${t}`),
    (fp = { Desktop: `WQLkyLRf1`, Phone: `Z0imWIwn6`, Tablet: `aYwBiDlS4` }),
    (pp = ({ value: e }) =>
      he()
        ? null
        : _(`style`, {
            dangerouslySetInnerHTML: { __html: e },
            "data-framer-html-style": ``,
          })),
    (mp = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: fp[r.variant] ?? r.variant ?? `WQLkyLRf1`,
    })),
    (hp = A(
      v(function (e, t) {
        let n = u(null),
          a = t ?? n,
          o = b(),
          { activeLocale: s, setLocale: c } = de(),
          l = _e(),
          { style: d, className: f, layoutId: m, variant: g, ...v } = mp(e);
        ie(i(() => at({}, s), [s]));
        let [y, x] = ce(g, ep, !1),
          S = N(np, et, it, He),
          C = p(se)?.isLayoutTemplate,
          ee = !!p(T)?.transition?.layout,
          E = ip(C, ee),
          O = oe(`DEaHJElxX`),
          k = u(null),
          A = oe(`hFLTOHRJt`),
          te = u(null),
          j = oe(`Tv4vvGym0`),
          M = u(null),
          ne = oe(`JWV_zjlZU`),
          P = u(null),
          re = oe(`mhDWO3N8J`),
          I = u(null);
        we();
        let L = oe(`R0i3frOkI`),
          R = u(null),
          V = oe(`jVHKELLdS`),
          le = u(null),
          ue = u(null),
          fe = oe(`HdiV0iD_v`);
        return (
          be({}),
          _(se.Provider, {
            value: {
              activeVariantId: y,
              humanReadableVariantMap: fp,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: rp,
            },
            children: h(D, {
              id: m ?? o,
              children: [
                _(pp, { value: `html body { background: rgb(0, 0, 0); }` }),
                h(w.div, {
                  ...v,
                  className: N(S, `framer-72rtr7`, f),
                  ref: a,
                  style: { ...d },
                  children: [
                    h(w.div, {
                      className: `framer-1kd870v`,
                      "data-framer-name": `Hero-Section`,
                      layout: E,
                      children: [
                        _(`div`, {
                          className: `framer-1odvrzc`,
                          "data-framer-name": `Text-Banner`,
                          children: _(H, {
                            children: _(B, {
                              className: `framer-4ifwqx-container`,
                              isAuthoredByUser: !0,
                              nodeId: `VyCwXsuk_`,
                              scopeId: `augiA20Il`,
                              children: _(z, {
                                breakpoint: y,
                                overrides: {
                                  Z0imWIwn6: {
                                    color2: `var(--token-832a9c22-d657-4637-89aa-cbcc712eb257, rgb(202, 157, 241))`,
                                    font: {
                                      fontFamily: `"Poppins Black", "Poppins Black Placeholder", sans-serif`,
                                      fontSize: `707px`,
                                      fontStyle: `normal`,
                                      fontWeight: 900,
                                      letterSpacing: `0em`,
                                      lineHeight: `1em`,
                                    },
                                  },
                                },
                                children: _(Ef, {
                                  color1: `var(--token-d9ed1eb8-0c54-4136-bf85-5e5373c04bfa, rgb(255, 214, 80))`,
                                  color2: `rgb(202, 157, 241)`,
                                  direction: `Left`,
                                  font: {
                                    fontFamily: `"Poppins Black", "Poppins Black Placeholder", sans-serif`,
                                    fontSize: `807px`,
                                    fontStyle: `normal`,
                                    fontWeight: 900,
                                    letterSpacing: `0em`,
                                    lineHeight: `1em`,
                                  },
                                  gap: 50,
                                  height: `100%`,
                                  id: `VyCwXsuk_`,
                                  layoutId: `VyCwXsuk_`,
                                  opacity: 1,
                                  speed: 1,
                                  style: { height: `100%`, width: `100%` },
                                  text: `MESHACK`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                        _(`div`, {
                          className: `framer-1nqphx5`,
                          "data-framer-name": `Text-Start-Animation`,
                          children: _(H, {
                            children: _(B, {
                              className: `framer-pbwefw-container`,
                              isAuthoredByUser: !0,
                              nodeId: `mdq8XYfza`,
                              scopeId: `augiA20Il`,
                              children: _(z, {
                                breakpoint: y,
                                overrides: {
                                  aYwBiDlS4: { fontSize: 49 },
                                  Z0imWIwn6: {
                                    fontSize: 46,
                                    words: [
                                      `scalable web applications`,
                                      `modern full-stack systems`,
                                      `resilient cloud & APIs`,
                                      `interactive UI/UX products`,
                                      `high-performance software`,
                                      `clean frontend architecture`,
                                      `seamless digital products
`,
                                      `distributed backend systems`,
                                      `experiences built to scale`,
                                    ],
                                  },
                                },
                                children: _(wf, {
                                  duration: 3e3,
                                  font: {
                                    fontFamily: `"Poppins Bold", "Poppins Bold Placeholder", sans-serif`,
                                    fontStyle: `normal`,
                                    fontWeight: 700,
                                  },
                                  fontSize: 52,
                                  fontWeight: 700,
                                  height: `100%`,
                                  htmlTag: `h1`,
                                  id: `mdq8XYfza`,
                                  layoutId: `mdq8XYfza`,
                                  lineHeight: 1.2,
                                  staggerDelay: 0.05,
                                  staticText: `MESHACK — Building <br>`,
                                  style: { height: `100%`, width: `100%` },
                                  textColor: `rgb(255, 255, 255)`,
                                  width: `100%`,
                                  words: [
                                    `scalable web applications`,
                                    `modern full-stack systems`,
                                    `resilient cloud & APIs`,
                                    `interactive UI/UX products`,
                                    `high-performance software`,
                                    `clean frontend architecture`,
                                    `seamless digital products
`,
                                    `distributed backend systems`,
                                    `experiences built to scale`,
                                  ],
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    _(w.div, {
                      className: `framer-9t1gtw`,
                      id: O,
                      layout: E,
                      ref: k,
                      children: _(H, {
                        children: _(If, {
                          __framer__styleTransformEffectEnabled: !0,
                          __framer__transformTargets: [
                            {
                              target: {
                                opacity: 0.5,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 0.5,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0,
                              },
                            },
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0,
                              },
                            },
                          ],
                          __framer__transformTrigger: `onInView`,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-1ski4mn-container`,
                          isModuleExternal: !0,
                          nodeId: `NO9ULr35Q`,
                          rendersWithMotion: !0,
                          scopeId: `augiA20Il`,
                          children: _(Pt, {
                            backgroundColor: `rgba(0, 0, 0, 0)`,
                            borderRadius: 0,
                            bottomLeftRadius: 0,
                            bottomRightRadius: 0,
                            controls: !1,
                            height: `100%`,
                            id: `NO9ULr35Q`,
                            isMixedBorderRadius: !1,
                            layoutId: `NO9ULr35Q`,
                            loop: !0,
                            muted: !0,
                            objectFit: `cover`,
                            playing: !0,
                            posterEnabled: !0,
                            srcFile: `/media/showreel-hero.mp4`,
                            srcType: `Upload`,
                            srcUrl: `/media/showreel-ambient.mp4`,
                            startTime: 0,
                            style: { width: `100%` },
                            topLeftRadius: 0,
                            topRightRadius: 0,
                            volume: 25,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    _(w.div, {
                      className: `framer-2r3hhd`,
                      "data-framer-name": `Key-Sentence`,
                      id: A,
                      layout: E,
                      ref: te,
                      children: _(H, {
                        children: _(B, {
                          className: `framer-1etzyo7-container`,
                          isAuthoredByUser: !0,
                          nodeId: `XFVqz4FrS`,
                          scopeId: `augiA20Il`,
                          children: _(z, {
                            breakpoint: y,
                            overrides: {
                              Z0imWIwn6: { fontSize: 36, lineHeight: 1.5 },
                            },
                            children: _(kf, {
                              baseShapeSizePx: 69,
                              delay1: 0.4,
                              delay2: 0.6,
                              delay3: 0.5,
                              font: {
                                fontFamily: `"Poppins SemiBold", "Poppins SemiBold Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 600,
                              },
                              fontSize: 64,
                              fontWeight: 600,
                              height: `100%`,
                              htmlTag: `h2`,
                              id: `XFVqz4FrS`,
                              imageFit: `contain`,
                              imageRadius: 0,
                              images1: [],
                              images2: [
                                `/images/home-showcase.webp?width=411&height=261`,
                                `/images/portfolio-asset-12.webp?width=411&height=261`,
                                `/images/portfolio-asset-4.webp?width=411&height=261`,
                              ],
                              images3: [],
                              layoutId: `XFVqz4FrS`,
                              lineHeight: 1.2,
                              shapeFit: `contain`,
                              shapes1: [
                                _(w.div, {
                                  className: `framer-1r5xr5h`,
                                  "data-framer-name": `Key-Sentence-Shape-4`,
                                  children: _(F, {
                                    className: `framer-1ey7qi6`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 70 69.697" overflow="visible"><path d="M 41.379 0 L 43.161 13.388 L 53.531 4.469 L 50.196 17.833 C 54.204 16.275 58.933 14.752 63.038 13.318 L 55.257 24.499 L 68.851 24.917 L 57.459 32.545 C 61.599 34.226 65.872 36.125 70 37.883 L 56.686 40.922 C 59.945 43.918 63.283 47.255 66.483 50.347 C 61.982 49.726 57.485 49.064 52.995 48.362 C 54.911 52.455 56.778 56.572 58.597 60.709 L 46.852 54.029 C 47.101 58.627 47.4 63.223 47.748 67.814 L 40.573 58.89 L 39.745 57.979 L 39.055 58.137 C 37.757 60.155 35.823 67.062 34.992 69.697 C 33.51 66.172 31.99 60.826 30.805 57.056 L 22.29 67.543 L 22.962 54.01 L 11.241 60.718 L 16.774 48.371 L 3.395 50.36 L 12.944 40.977 C 9.624 39.904 3.586 38.726 0 37.919 C 3.757 36.061 8.364 34.232 12.273 32.572 C 8.85 30.059 4.454 27.29 0.868 24.893 L 14.658 24.517 L 6.779 13.363 C 10.72 14.508 15.634 16.361 19.59 17.727 C 18.607 13.346 17.429 8.806 16.364 4.427 C 19.62 7.39 23.409 10.479 26.788 13.357 C 27.255 9.401 27.743 4.066 28.56 0.282 C 29.873 2.089 33.475 9.055 34.998 11.66 Z" fill="var(--token-d9ed1eb8-0c54-4136-bf85-5e5373c04bfa, rgb(255, 214, 80)) /* {&quot;name&quot;:&quot;Yellow-Accent&quot;} */"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                _(w.div, {
                                  className: `framer-1p9f1xx`,
                                  "data-framer-name": `Key-Sentence-Shape-5`,
                                  children: _(F, {
                                    className: `framer-168ntim`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 69.822 69.822" overflow="visible"><path d="M 32.417 0 L 37.405 0 L 37.405 22.082 L 45.677 1.608 L 50.301 3.476 L 41.814 24.481 L 57.834 8.462 L 61.36 11.989 L 46.007 27.342 L 65.904 18.649 L 67.9 23.219 L 46.847 32.417 L 69.822 32.417 L 69.822 37.405 L 46.847 37.405 L 67.9 46.603 L 65.904 51.173 L 46.007 42.48 L 61.36 57.834 L 57.834 61.36 L 41.814 45.341 L 50.301 66.346 L 45.677 68.214 L 37.405 47.74 L 37.405 69.822 L 32.417 69.822 L 32.417 47.74 L 24.145 68.214 L 19.521 66.346 L 28.007 45.341 L 11.988 61.36 L 8.462 57.834 L 23.816 42.48 L 3.918 51.173 L 1.922 46.603 L 22.975 37.405 L 0 37.405 L 0 32.417 L 22.975 32.417 L 1.922 23.219 L 3.918 18.649 L 23.816 27.342 L 8.462 11.988 L 11.988 8.462 L 28.007 24.481 L 19.521 3.476 L 24.145 1.608 L 32.417 22.082 Z" fill="var(--token-d9ed1eb8-0c54-4136-bf85-5e5373c04bfa, rgb(255, 214, 80)) /* {&quot;name&quot;:&quot;Yellow-Accent&quot;} */"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                _(w.div, {
                                  className: `framer-m1tent`,
                                  "data-framer-name": `Key-Sentence-Shape-1`,
                                  children: _(F, {
                                    className: `framer-17shcze`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 69.652 69.652" overflow="visible"><path d="M 37.09 0.806 C 35.772 -0.269 33.88 -0.269 32.562 0.806 L 29.72 3.123 C 28.826 3.852 27.635 4.106 26.522 3.805 L 22.991 2.851 C 21.351 2.408 19.626 3.177 18.86 4.692 L 17.192 7.991 C 16.672 9.017 15.692 9.732 14.555 9.912 L 10.927 10.486 C 9.255 10.751 7.997 12.15 7.91 13.84 L 7.719 17.562 C 7.661 18.706 7.058 19.753 6.098 20.378 L 2.994 22.401 C 1.58 23.323 1.001 25.106 1.604 26.682 L 2.94 30.171 C 3.349 31.239 3.223 32.437 2.602 33.397 L 0.575 36.529 C -0.341 37.945 -0.146 39.808 1.044 41.003 L 3.67 43.638 C 4.478 44.449 4.849 45.596 4.67 46.726 L 4.086 50.414 C 3.822 52.083 4.76 53.709 6.337 54.317 L 9.779 55.642 C 10.851 56.054 11.66 56.955 11.955 58.065 L 12.908 61.653 C 13.343 63.291 14.868 64.4 16.561 64.31 L 20.218 64.114 C 21.369 64.052 22.479 64.548 23.201 65.446 L 25.507 68.314 C 26.573 69.639 28.423 70.032 29.935 69.256 L 33.19 67.585 C 34.217 67.059 35.435 67.059 36.462 67.585 L 39.717 69.256 C 41.229 70.032 43.079 69.639 44.144 68.314 L 46.45 65.446 C 47.173 64.548 48.283 64.052 49.434 64.114 L 53.091 64.31 C 54.784 64.4 56.309 63.291 56.744 61.653 L 57.697 58.065 C 57.992 56.955 58.801 56.054 59.872 55.642 L 63.315 54.317 C 64.892 53.709 65.83 52.083 65.566 50.414 L 64.981 46.726 C 64.803 45.596 65.174 44.449 65.981 43.638 L 68.607 41.003 C 69.798 39.808 69.993 37.945 69.077 36.529 L 67.05 33.397 C 66.429 32.437 66.303 31.239 66.712 30.171 L 68.048 26.682 C 68.651 25.106 68.072 23.323 66.658 22.401 L 63.554 20.378 C 62.594 19.753 61.991 18.706 61.933 17.562 L 61.742 13.84 C 61.655 12.15 60.396 10.751 58.725 10.486 L 55.096 9.912 C 53.96 9.732 52.98 9.017 52.46 7.991 L 50.792 4.692 C 50.026 3.177 48.3 2.408 46.661 2.851 L 43.13 3.805 C 42.016 4.106 40.826 3.852 39.932 3.123 Z" fill="var(--token-d9ed1eb8-0c54-4136-bf85-5e5373c04bfa, rgb(255, 214, 80)) /* {&quot;name&quot;:&quot;Yellow-Accent&quot;} */"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                _(w.div, {
                                  className: `framer-56rghr`,
                                  "data-framer-name": `Key-Sentence-Shape-2`,
                                  children: _(F, {
                                    className: `framer-1dp7i2q`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 70 70" overflow="visible"><path d="M 20.613 0.062 C 23.676 -0.07 27.761 0.049 30.891 0.048 L 49.567 0.062 C 56.376 6.652 63.288 13.789 70 20.51 L 69.998 49.49 C 63.603 56.186 56.144 63.387 49.552 69.943 C 46.311 70.053 42.591 69.97 39.297 69.971 L 20.589 69.958 C 18.447 68.076 15.489 64.933 13.416 62.858 L 0.07 49.498 C -0.065 46.21 0.037 42.147 0.037 38.804 L 0.061 20.514 L 13.597 6.957 C 15.308 5.244 18.876 1.478 20.613 0.062 Z" fill="var(--token-d9ed1eb8-0c54-4136-bf85-5e5373c04bfa, rgb(255, 214, 80)) /* {&quot;name&quot;:&quot;Yellow-Accent&quot;} */"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                _(w.div, {
                                  className: `framer-1otqs7u`,
                                  "data-framer-name": `Key-Sentence-Shape-3`,
                                  children: _(F, {
                                    className: `framer-9ctntc`,
                                    "data-framer-name": `Vector`,
                                    opacity: 1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 70 68"><path d="M 31.4 0.301 C 42.872 -1.243 49.08 5.068 49.433 16.169 C 54.323 14.779 58.035 14.243 62.768 16.91 C 66.07 18.768 68.482 21.867 69.464 25.511 C 71.71 34.086 66.69 41.107 58.312 43.239 C 60.297 46.413 61.661 48.93 61.84 52.753 C 62.016 56.697 60.586 60.548 57.873 63.432 C 51.913 69.87 43.504 68.996 37.34 63.356 L 34.987 60.492 C 29.835 66.709 22.677 70.203 15.022 65.808 C 11.634 63.864 9.191 60.628 8.258 56.852 C 6.927 51.48 8.68 47.784 11.333 43.389 C 7.675 41.952 3.331 39.622 1.711 36.124 C -3.01 25.938 2.334 15.386 14.122 15.139 C 15.664 15.107 19.4 15.741 20.317 15.248 C 20.797 6.948 24.222 3.531 31.4 0.301 Z" fill="var(--token-d9ed1eb8-0c54-4136-bf85-5e5373c04bfa, rgb(255, 214, 80)) /* {&quot;name&quot;:&quot;Yellow-Accent&quot;} */"></path></svg>`,
                                    svgContentId: 10743226837,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                _(w.div, {
                                  className: `framer-1l5oyhd`,
                                  "data-framer-name": `Key-Sentence-Shape-6`,
                                  children: _(F, {
                                    className: `framer-1sg7b83`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 70 70" overflow="visible"><path d="M 35 60.808 C 8.528 82.93 -12.93 61.473 9.192 35 C -12.93 8.528 8.528 -12.93 35 9.192 C 61.468 -12.93 82.931 8.528 60.809 35 C 82.931 61.452 61.468 82.93 35 60.808 Z" fill="var(--token-d9ed1eb8-0c54-4136-bf85-5e5373c04bfa, rgb(255, 214, 80)) /* {&quot;name&quot;:&quot;Yellow-Accent&quot;} */"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                              shapes2: [],
                              shapes3: [],
                              switchInterval: 0.8,
                              text: `From concept to deployment. Ideas {img1} become code. Code becomes {img2} experiences.
`,
                              textAlign: `center`,
                              textColor: `rgb(0, 0, 0)`,
                              visualHeightEm: 1,
                              visualSpacing: 4,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    h(w.div, {
                      className: `framer-15ia9fc`,
                      "data-framer-name": `Intro-Services`,
                      id: j,
                      layout: E,
                      ref: M,
                      children: [
                        h(`div`, {
                          className: `framer-1kewz24`,
                          children: [
                            _(W, {
                              __fromCanvasComponent: !0,
                              children: _(r, {
                                children: _(`h2`, {
                                  className: `framer-styles-preset-hix2d`,
                                  "data-styles-preset": `Nkvcm8ls1`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                  },
                                  children: `FULL-STACK DEV`,
                                }),
                              }),
                              className: `framer-1qra3ek`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            _(W, {
                              __fromCanvasComponent: !0,
                              children: _(r, {
                                children: _(`p`, {
                                  className: `framer-styles-preset-1wc8dab`,
                                  "data-styles-preset": `yVYr7T1im`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                  },
                                  children: `from backend architecture to pixel-perfect UI.`,
                                }),
                              }),
                              className: `framer-uvj7h3`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        _(`div`, {
                          className: `framer-jrrhuh`,
                          children: _(H, {
                            children: _(B, {
                              className: `framer-3zt4of-container`,
                              isAuthoredByUser: !0,
                              nodeId: `X1jAjSAXB`,
                              scopeId: `augiA20Il`,
                              children: _(jf, {
                                align: `center`,
                                baseShapeSizePx: 100,
                                direction: `left`,
                                gap: 0,
                                height: `100%`,
                                id: `X1jAjSAXB`,
                                itemWidth: 310,
                                layoutId: `X1jAjSAXB`,
                                minHeight: 206,
                                shapes: [
                                  _(w.div, {
                                    className: `framer-yd4x8t`,
                                    "data-framer-name": `Services-Shape-1`,
                                    children: _(F, {
                                      className: `framer-bfy5gi`,
                                      "data-framer-name": `Vector`,
                                      opacity: 1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 208.95 208.95"><path d="M 111.27 2.418 C 107.316 -0.806 101.64 -0.806 97.686 2.418 L 89.161 9.37 C 86.478 11.557 82.906 12.319 79.565 11.416 L 68.973 8.554 C 64.054 7.224 58.879 9.531 56.579 14.077 L 51.575 23.972 C 50.016 27.051 47.075 29.195 43.666 29.735 L 32.782 31.459 C 27.766 32.254 23.991 36.45 23.731 41.521 L 23.158 52.685 C 22.982 56.117 21.173 59.258 18.293 61.135 L 8.981 67.204 C 4.74 69.968 3.003 75.318 4.813 80.045 L 8.819 90.514 C 10.046 93.716 9.668 97.311 7.806 100.19 L 1.724 109.588 C -1.024 113.835 -0.438 119.423 3.134 123.008 L 11.011 130.915 C 13.433 133.346 14.548 136.787 14.011 140.178 L 12.258 151.243 C 11.466 156.248 14.281 161.127 19.011 162.95 L 29.338 166.925 C 32.553 168.163 34.979 170.866 35.864 174.194 L 38.723 184.958 C 40.029 189.874 44.603 193.201 49.683 192.929 L 60.654 192.342 C 64.107 192.157 67.437 193.645 69.604 196.339 L 76.522 204.942 C 79.718 208.917 85.268 210.097 89.806 207.768 L 99.57 202.756 C 102.651 201.176 106.305 201.176 109.385 202.756 L 119.15 207.768 C 123.688 210.097 129.237 208.917 132.433 204.942 L 139.351 196.339 C 141.518 193.645 144.849 192.157 148.301 192.342 L 159.272 192.929 C 164.352 193.201 168.927 189.874 170.233 184.958 L 173.092 174.194 C 173.976 170.866 176.402 168.163 179.617 166.925 L 189.944 162.95 C 194.675 161.127 197.49 156.248 196.697 151.243 L 194.944 140.178 C 194.408 136.787 195.523 133.346 197.944 130.915 L 205.822 123.008 C 209.393 119.423 209.979 113.835 207.231 109.588 L 201.15 100.19 C 199.287 97.311 198.91 93.716 200.136 90.514 L 204.143 80.045 C 205.953 75.318 204.216 69.968 199.974 67.204 L 190.661 61.135 C 187.782 59.258 185.974 56.117 185.798 52.685 L 185.225 41.521 C 184.964 36.45 181.189 32.254 176.174 31.459 L 165.289 29.735 C 161.881 29.195 158.939 27.051 157.381 23.972 L 152.375 14.077 C 150.077 9.531 144.901 7.224 139.982 8.554 L 129.391 11.416 C 126.049 12.319 122.477 11.557 119.795 9.37 Z" fill="rgba(202, 157, 241, 0.6)"></path></svg>`,
                                      svgContentId: 8730547542,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  _(w.div, {
                                    className: `framer-y1w3w4`,
                                    "data-framer-name": `Services-Shape-2`,
                                    children: _(F, {
                                      className: `framer-19u29eg`,
                                      "data-framer-name": `Vector`,
                                      opacity: 1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 210 204"><path d="M 94.201 0.902 C 128.615 -3.73 147.24 15.204 148.299 48.507 C 162.969 44.337 174.105 42.728 188.304 50.73 C 198.209 56.304 205.447 65.6 208.392 76.533 C 215.129 102.258 200.07 123.32 174.935 129.716 C 180.892 139.239 184.982 146.79 185.52 158.258 C 186.048 170.092 181.759 181.644 173.62 190.295 C 155.74 209.609 130.511 206.989 112.02 190.069 L 104.962 181.476 C 89.506 200.128 68.031 210.61 45.065 197.423 C 34.902 191.591 27.572 181.884 24.774 170.557 C 20.782 154.44 26.041 143.353 33.998 130.166 C 23.025 125.855 9.993 118.867 5.132 108.372 C -9.03 77.815 7.001 46.157 42.365 45.418 C 46.993 45.322 58.201 47.224 60.95 45.743 C 62.39 20.845 72.666 10.592 94.201 0.902 Z" fill="rgba(255, 214, 80, 0.6)"></path></svg>`,
                                      svgContentId: 12149939220,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  _(w.div, {
                                    className: `framer-1o0z8go`,
                                    "data-framer-name": `Services-Shape-3`,
                                    children: _(F, {
                                      className: `framer-w92onp`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 209.467 209.467" overflow="visible"><path d="M 97.252 0 L 112.214 0 L 112.214 66.247 L 137.031 4.824 L 150.903 10.429 L 125.443 73.443 L 173.501 25.386 L 184.08 35.966 L 138.02 82.026 L 197.711 55.947 L 203.701 69.657 L 140.541 97.252 L 209.467 97.252 L 209.467 112.214 L 140.542 112.214 L 203.701 139.81 L 197.711 153.52 L 138.02 127.441 L 184.08 173.501 L 173.501 184.08 L 125.443 136.024 L 150.903 199.038 L 137.031 204.643 L 112.214 143.22 L 112.214 209.467 L 97.252 209.467 L 97.252 143.22 L 72.436 204.643 L 58.564 199.038 L 84.022 136.024 L 35.965 184.08 L 25.386 173.501 L 71.447 127.441 L 11.755 153.52 L 5.766 139.81 L 68.925 112.214 L 0 112.214 L 0 97.252 L 68.926 97.252 L 5.766 69.657 L 11.755 55.947 L 71.447 82.026 L 25.386 35.965 L 35.965 25.386 L 84.022 73.443 L 58.564 10.429 L 72.436 4.824 L 97.252 66.247 Z" fill="rgba(202, 157, 241, 0.6)"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  _(w.div, {
                                    className: `framer-3nsicb`,
                                    "data-framer-name": `Services-Shape-4`,
                                    children: _(F, {
                                      className: `framer-2f0h8i`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 210 210" overflow="visible"><path d="M 61.838 0.187 C 71.028 -0.209 83.283 0.148 92.673 0.145 L 148.702 0.186 C 169.128 19.957 189.863 41.366 210 61.531 L 209.995 148.469 C 190.809 168.558 168.431 190.16 148.656 209.828 C 138.932 210.159 127.772 209.909 117.89 209.914 L 61.766 209.873 C 55.341 204.228 46.468 194.8 40.248 188.575 L 0.209 148.494 C -0.194 138.629 0.11 126.44 0.11 116.412 L 0.182 61.543 L 40.791 20.872 C 45.925 15.733 56.627 4.435 61.838 0.187 Z" fill="rgba(255, 214, 80, 0.6)"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  _(w.div, {
                                    className: `framer-xjzwyb`,
                                    "data-framer-name": `Services-Shape-5`,
                                    children: _(F, {
                                      className: `framer-qm1xe9`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 210 209.091" overflow="visible"><path d="M 124.138 0 L 129.482 40.163 L 160.592 13.406 L 150.587 53.498 C 162.612 48.826 176.8 44.255 189.115 39.954 L 165.771 73.497 L 206.554 74.752 L 172.377 97.635 C 184.798 102.677 197.615 108.374 210 113.649 L 170.058 122.767 C 179.835 131.753 189.848 141.765 199.448 151.041 C 185.945 149.177 172.455 147.193 158.985 145.087 C 164.733 157.366 170.334 169.715 175.791 182.128 L 140.556 162.088 C 141.304 175.882 142.199 189.668 143.245 203.443 L 121.72 176.671 L 119.235 173.938 L 117.166 174.411 C 113.271 180.465 107.468 201.186 104.975 209.091 C 100.53 198.517 95.969 182.478 92.414 171.168 L 66.87 202.63 L 68.885 162.03 L 33.722 182.154 L 50.323 145.113 L 10.184 151.08 L 38.833 122.93 C 28.871 119.711 10.758 116.179 0 113.756 C 11.27 108.183 25.093 102.696 36.819 97.717 C 26.549 90.177 13.362 81.87 2.605 74.679 L 43.974 73.551 L 20.337 40.089 C 32.16 43.523 46.901 49.082 58.771 53.181 C 55.821 40.038 52.288 26.417 49.093 13.28 C 58.861 22.17 70.226 31.438 80.363 40.071 C 81.765 28.202 83.228 12.197 85.681 0.847 C 89.618 6.267 100.424 27.165 104.993 34.981 Z" fill="rgba(202, 157, 241, 0.6)"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  _(w.div, {
                                    className: `framer-bc8xjx`,
                                    "data-framer-name": `Services-Shape-6`,
                                    children: _(F, {
                                      className: `framer-izss5q`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 210 210" overflow="visible"><path d="M 105.001 182.425 C 25.583 248.791 -38.791 184.418 27.576 105 C -38.791 25.583 25.583 -38.791 105.001 27.575 C 184.404 -38.791 248.794 25.583 182.427 105 C 248.794 184.357 184.404 248.791 105.001 182.425 Z" fill="rgba(255, 214, 80, 0.6)"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                                shapeSizePx: 97,
                                speed: 18,
                                style: { width: `100%` },
                                verticalPadding: 24,
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        _(`div`, {
                          className: `framer-1olxwkf`,
                          children: _(W, {
                            __fromCanvasComponent: !0,
                            children: _(r, {
                              children: _(`p`, {
                                className: `framer-styles-preset-es7zc9`,
                                "data-styles-preset": `YZV7Namdz`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `rgb(255, 255, 255)`,
                                },
                                children: `From initial system architecture to production deployment, I engineer scalable software around your vision.`,
                              }),
                            }),
                            className: `framer-1dooqsd`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                    _(z, {
                      breakpoint: y,
                      overrides: {
                        Z0imWIwn6: { height: 1e3, y: (l?.y || 0) + 0 + 4200 },
                      },
                      children: _(H, {
                        height: 1000.9407,
                        width: l?.width || `100vw`,
                        y: (l?.y || 0) + 0 + 3112,
                        children: _(B, {
                          className: `framer-1f57nu9-container`,
                          id: ne,
                          layout: E,
                          nodeId: `JWV_zjlZU`,
                          ref: P,
                          scopeId: `augiA20Il`,
                          children: _(z, {
                            breakpoint: y,
                            overrides: {
                              aYwBiDlS4: { variant: $(`gpoQhjy8T`) },
                              Z0imWIwn6: { variant: $(`z66nltSCh`) },
                            },
                            children: _(Ge, {
                              CccmEY23b: `Technical Architecture`,
                              height: `100%`,
                              id: `JWV_zjlZU`,
                              layoutId: `JWV_zjlZU`,
                              lxJjwHR6I: `AI & Product Engineering`,
                              MG6itLVx3: `Frontend & Interactive UI`,
                              p2kaUmVZk: `Cloud & DevOps Systems`,
                              pOC4Oy0rY: `Full-Stack Web Apps`,
                              style: { height: `100%`, width: `100%` },
                              variant: $(`MAZEZ2itw`),
                              vpcMKrKGm: `Backend & API Architecture`,
                              w7pPp8iwJ: `UI/UX & Design Systems`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    _(H, {
                      children: _(B, {
                        className: `framer-cr2owr-container`,
                        isAuthoredByUser: !0,
                        layout: E,
                        nodeId: `dNksF1c3T`,
                        scopeId: `augiA20Il`,
                        children: _(Ke, {
                          background: `rgb(0, 0, 0)`,
                          gap: 55,
                          height: `100%`,
                          id: `dNksF1c3T`,
                          layoutId: `dNksF1c3T`,
                          logoHeight: 18,
                          logos: [
                            `/images/service-workplace-new-work-2.png?width=736&height=128`,
                            `/images/service-workplace-new-work-6.png?width=268&height=54`,
                            `/images/service-workplace-new-work-15.png?width=286&height=44`,
                            `/images/service-workplace-new-work-12.png?width=240&height=64`,
                            `/images/service-workplace-new-work-8.png?width=418&height=83`,
                            `/images/service-workplace-new-work-10.png?width=775&height=390`,
                            `/images/service-workplace-new-work-9.png?width=170&height=60`,
                            `/images/service-workplace-new-work-4.png?width=746&height=376`,
                            `/images/service-workplace-new-work-5.png?width=236&height=60`,
                            `/images/service-workplace-new-work-11.png?width=306&height=52`,
                            `/images/service-workplace-new-work-14.png?width=775&height=200`,
                            `/images/service-workplace-new-work-13.png?width=1479&height=200`,
                            `/images/service-workplace-new-work-3.png?width=524&height=200`,
                            `/images/service-workplace-new-work-16.png?width=1232&height=200`,
                            `/images/service-workplace-new-work-7.png?width=1272&height=270`,
                          ],
                          paddingX: 8,
                          pauseOnHover: !0,
                          radius: 0,
                          rowHeight: 53,
                          speed: 40,
                          style: { height: `100%`, width: `100%` },
                          width: `100%`,
                        }),
                      }),
                    }),
                    h(w.div, {
                      className: `framer-1ihvruv`,
                      "data-framer-name": `Projekte-Main`,
                      id: re,
                      layout: E,
                      ref: I,
                      children: [
                        _(`div`, {
                          className: `framer-vwh5wi`,
                          "data-framer-name": `Titel`,
                          children: _(W, {
                            __fromCanvasComponent: !0,
                            children: _(r, {
                              children: _(`h2`, {
                                className: `framer-styles-preset-hix2d`,
                                "data-styles-preset": `Nkvcm8ls1`,
                                dir: `auto`,
                                style: { "--framer-text-alignment": `start` },
                                children: `WORK DONE`,
                              }),
                            }),
                            className: `framer-1o4iwtc`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                        h(`div`, {
                          className: `framer-1uprj5`,
                          "data-framer-name": `Projek-1-2`,
                          children: [
                            _(ae, {
                              links: [
                                {
                                  href: {
                                    pathVariables: {
                                      qD3idoXBI: `tresor-globus`,
                                    },
                                    unresolvedPathSlugs: {
                                      qD3idoXBI: {
                                        collectionId: `R2jsuapbg`,
                                        collectionItemId: `ysFcG5bAf`,
                                      },
                                    },
                                    webPageId: `R3ke5TPEo`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    pathVariables: {
                                      qD3idoXBI: `tresor-globus`,
                                    },
                                    unresolvedPathSlugs: {
                                      qD3idoXBI: {
                                        collectionId: `R2jsuapbg`,
                                        collectionItemId: `ysFcG5bAf`,
                                      },
                                    },
                                    webPageId: `R3ke5TPEo`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: {
                                    pathVariables: {
                                      qD3idoXBI: `tresor-globus`,
                                    },
                                    unresolvedPathSlugs: {
                                      qD3idoXBI: {
                                        collectionId: `R2jsuapbg`,
                                        collectionItemId: `ysFcG5bAf`,
                                      },
                                    },
                                    webPageId: `R3ke5TPEo`,
                                  },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (e) =>
                                _(z, {
                                  breakpoint: y,
                                  overrides: {
                                    Z0imWIwn6: {
                                      height: 400,
                                      width: `calc(min(${l?.width || `100vw`}, 2300px) - 32px)`,
                                      y:
                                        (l?.y || 0) +
                                        0 +
                                        5253 +
                                        0 +
                                        278.8 +
                                        0 +
                                        0,
                                    },
                                  },
                                  children: _(H, {
                                    height: 511,
                                    width: `calc((min(${l?.width || `100vw`}, 2300px) - 80px) * 0.47)`,
                                    y:
                                      (l?.y || 0) +
                                      0 +
                                      4165.9407 +
                                      0 +
                                      418.8 +
                                      0,
                                    children: _(z, {
                                      breakpoint: y,
                                      overrides: {
                                        Z0imWIwn6: { whileHover: void 0 },
                                      },
                                      children: _(B, {
                                        className: `framer-1qbsy10-container`,
                                        nodeId: `IMZBm3Thg`,
                                        rendersWithMotion: !0,
                                        scopeId: `augiA20Il`,
                                        whileHover: op,
                                        children: _(z, {
                                          breakpoint: y,
                                          overrides: {
                                            aYwBiDlS4: {
                                              oELdZlPfS: e[1],
                                              variant: $(`YIq6OZnJR`),
                                            },
                                            Z0imWIwn6: {
                                              oELdZlPfS: e[2],
                                              variant: $(`YIq6OZnJR`),
                                            },
                                          },
                                          children: _(ho, {
                                            height: `100%`,
                                            id: `IMZBm3Thg`,
                                            layoutId: `IMZBm3Thg`,
                                            oELdZlPfS: e[0],
                                            style: {
                                              height: `100%`,
                                              width: `100%`,
                                            },
                                            variant: $(`EpTpT4Br4`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                            }),
                            _(z, {
                              breakpoint: y,
                              overrides: {
                                Z0imWIwn6: {
                                  height: 400,
                                  width: `calc(min(${l?.width || `100vw`}, 2300px) - 32px)`,
                                  y:
                                    (l?.y || 0) +
                                    0 +
                                    5253 +
                                    0 +
                                    278.8 +
                                    0 +
                                    440,
                                },
                              },
                              children: _(H, {
                                height: 391,
                                width: `calc((min(${l?.width || `100vw`}, 2300px) - 80px) * 0.37)`,
                                y: (l?.y || 0) + 0 + 4165.9407 + 0 + 418.8 + 0,
                                children: _(B, {
                                  className: `framer-wkfob2-container`,
                                  nodeId: `OqwYYClgs`,
                                  rendersWithMotion: !0,
                                  scopeId: `augiA20Il`,
                                  whileHover: sp,
                                  children: _(z, {
                                    breakpoint: y,
                                    overrides: {
                                      aYwBiDlS4: { variant: $(`aT3awuZLZ`) },
                                      Z0imWIwn6: { variant: $(`aT3awuZLZ`) },
                                    },
                                    children: _(hc, {
                                      height: `100%`,
                                      id: `OqwYYClgs`,
                                      layoutId: `OqwYYClgs`,
                                      style: { height: `100%`, width: `100%` },
                                      variant: $(`ipLQxtJlo`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        _(z, {
                          breakpoint: y,
                          overrides: {
                            aYwBiDlS4: { height: 600 },
                            Z0imWIwn6: {
                              height: 400,
                              width: `min(min(${l?.width || `100vw`}, 2300px) - 32px, 1501px)`,
                              y: (l?.y || 0) + 0 + 5253 + 0 + 1158.8,
                            },
                          },
                          children: _(H, {
                            height: 800,
                            width: `min(min(${l?.width || `100vw`}, 2300px) - 80px, 1501px)`,
                            y: (l?.y || 0) + 0 + 4165.9407 + 0 + 1049.8,
                            children: _(B, {
                              className: `framer-1mlu2iv-container`,
                              nodeId: `gcgm29fwL`,
                              rendersWithMotion: !0,
                              scopeId: `augiA20Il`,
                              whileHover: cp,
                              children: _(z, {
                                breakpoint: y,
                                overrides: {
                                  aYwBiDlS4: { variant: $(`FFl2JcN7O`) },
                                  Z0imWIwn6: { variant: $(`FFl2JcN7O`) },
                                },
                                children: _(gu, {
                                  height: `100%`,
                                  id: `gcgm29fwL`,
                                  layoutId: `gcgm29fwL`,
                                  style: {
                                    height: `100%`,
                                    maxWidth: `100%`,
                                    width: `100%`,
                                  },
                                  variant: $(`WMOBDhbBm`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                        h(`div`, {
                          className: `framer-umq05j`,
                          "data-framer-name": `Projek-4-5`,
                          children: [
                            _(z, {
                              breakpoint: y,
                              overrides: {
                                aYwBiDlS4: {
                                  width: `calc((min(${l?.width || `100vw`}, 2300px) - 80px) * 0.38)`,
                                  y:
                                    (l?.y || 0) +
                                    0 +
                                    4165.9407 +
                                    0 +
                                    1769.8 +
                                    0,
                                },
                                Z0imWIwn6: {
                                  height: 400,
                                  width: `calc(min(${l?.width || `100vw`}, 2300px) - 32px)`,
                                  y:
                                    (l?.y || 0) + 0 + 5253 + 0 + 1598.8 + 0 + 0,
                                },
                              },
                              children: _(H, {
                                height: 421,
                                width: `calc((min(${l?.width || `100vw`}, 2300px) - 80px) * 0.37)`,
                                y: (l?.y || 0) + 0 + 4165.9407 + 0 + 1969.8 + 0,
                                children: _(B, {
                                  className: `framer-so15km-container`,
                                  nodeId: `Gh_3YxeHD`,
                                  rendersWithMotion: !0,
                                  scopeId: `augiA20Il`,
                                  whileHover: op,
                                  children: _(z, {
                                    breakpoint: y,
                                    overrides: {
                                      aYwBiDlS4: { variant: $(`sR1Hayzxt`) },
                                      Z0imWIwn6: { variant: $(`sR1Hayzxt`) },
                                    },
                                    children: _(vf, {
                                      height: `100%`,
                                      id: `Gh_3YxeHD`,
                                      layoutId: `Gh_3YxeHD`,
                                      style: { height: `100%`, width: `100%` },
                                      variant: $(`rWdMBV7CY`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            _(z, {
                              breakpoint: y,
                              overrides: {
                                aYwBiDlS4: {
                                  width: `calc((min(${l?.width || `100vw`}, 2300px) - 80px) * 0.55)`,
                                  y:
                                    (l?.y || 0) +
                                    0 +
                                    4165.9407 +
                                    0 +
                                    1769.8 +
                                    0,
                                },
                                Z0imWIwn6: {
                                  height: 400,
                                  width: `calc(min(${l?.width || `100vw`}, 2300px) - 32px)`,
                                  y:
                                    (l?.y || 0) +
                                    0 +
                                    5253 +
                                    0 +
                                    1598.8 +
                                    0 +
                                    440,
                                },
                              },
                              children: _(H, {
                                height: 467,
                                width: `calc((min(${l?.width || `100vw`}, 2300px) - 80px) * 0.5098)`,
                                y: (l?.y || 0) + 0 + 4165.9407 + 0 + 1969.8 + 0,
                                children: _(B, {
                                  className: `framer-1p9mnef-container`,
                                  nodeId: `g6iefRDCh`,
                                  rendersWithMotion: !0,
                                  scopeId: `augiA20Il`,
                                  whileHover: sp,
                                  children: _(z, {
                                    breakpoint: y,
                                    overrides: {
                                      aYwBiDlS4: { variant: $(`KA_54aCfU`) },
                                      Z0imWIwn6: {
                                        style: {
                                          height: `100%`,
                                          width: `100%`,
                                        },
                                        variant: $(`KA_54aCfU`),
                                      },
                                    },
                                    children: _(mi, {
                                      height: `100%`,
                                      id: `g6iefRDCh`,
                                      layoutId: `g6iefRDCh`,
                                      style: { width: `100%` },
                                      variant: $(`SLMMWausd`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        _(z, {
                          breakpoint: y,
                          overrides: {
                            aYwBiDlS4: {
                              y: (l?.y || 0) + 0 + 4165.9407 + 0 + 2356.8,
                            },
                            Z0imWIwn6: {
                              y: (l?.y || 0) + 0 + 5253 + 0 + 2478.8,
                            },
                          },
                          children: _(H, {
                            height: 140,
                            y: (l?.y || 0) + 0 + 4165.9407 + 0 + 2556.8,
                            children: _(B, {
                              className: `framer-12tzub4-container`,
                              nodeId: `fUorzigtK`,
                              rendersWithMotion: !0,
                              scopeId: `augiA20Il`,
                              whileHover: lp,
                              children: _(pn, {
                                fwCv2N6Ci: `More projects `,
                                height: `100%`,
                                id: `fUorzigtK`,
                                layoutId: `fUorzigtK`,
                                style: { height: `100%` },
                                variant: $(`Ap9fX08MF`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    h(w.div, {
                      className: `framer-3tud21`,
                      layout: E,
                      children: [
                        _(`div`, {
                          className: `framer-k2oyln`,
                          "data-framer-name": `Website-under-construction`,
                          children: _(H, {
                            children: _(B, {
                              className: `framer-1up8tzw-container`,
                              "data-code-component-plugin-id": `84d4c1`,
                              isAuthoredByUser: !0,
                              nodeId: `EmlBiGk0S`,
                              scopeId: `augiA20Il`,
                              children: _(Xe, {
                                backgroundColor: `var(--token-d9ed1eb8-0c54-4136-bf85-5e5373c04bfa, rgb(255, 214, 80))`,
                                direction: `left`,
                                font: {
                                  fontFamily: `"Poppins Regular", "Poppins Regular Placeholder", sans-serif`,
                                  fontSize: `16px`,
                                  fontStyle: `normal`,
                                  fontWeight: 400,
                                  letterSpacing: `-0.01em`,
                                  lineHeight: `1em`,
                                },
                                fontSize: 16,
                                gap: 22,
                                height: `100%`,
                                iconSize: 26,
                                id: `EmlBiGk0S`,
                                items: [
                                  {
                                    id: `default-item-0`,
                                    image: up(
                                      {
                                        pixelHeight: 72,
                                        pixelWidth: 72,
                                        src: `/images/icon-github.png?width=72&height=72`,
                                      },
                                      ``,
                                    ),
                                    label: `More Projects on GitHub`,
                                    link: `https://github.com/meshackrono10`,
                                    newTab: !0,
                                  },
                                  {
                                    id: `default-item-1`,
                                    image: up(
                                      {
                                        pixelHeight: 72,
                                        pixelWidth: 72,
                                        src: `/images/icon-twitter-x.png?width=72&height=72`,
                                      },
                                      ``,
                                    ),
                                    label: `More Updates on X / Twitter`,
                                    link: `https://github.com/meshackrono10`,
                                    newTab: !0,
                                  },
                                  {
                                    id: `default-item-2`,
                                    image: up(
                                      {
                                        pixelHeight: 72,
                                        pixelWidth: 72,
                                        src: `/images/icon-linkedin.png?width=72&height=72`,
                                      },
                                      ``,
                                    ),
                                    label: `Connect with me on LinkedIn`,
                                    link: `https://www.linkedin.com/in/meshackrono10/`,
                                    newTab: !0,
                                  },
                                ],
                                layoutId: `EmlBiGk0S`,
                                pauseOnHover: !1,
                                speed: 70,
                                style: { height: `100%`, width: `100%` },
                                textColor: `rgb(0, 0, 0)`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        _(`div`, {
                          className: `framer-cki42d`,
                          "data-framer-name": `About-Us`,
                          id: L,
                          ref: R,
                          children: _(ae, {
                            links: [
                              {
                                href: { webPageId: `cxR3EcTsQ` },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: { webPageId: `cxR3EcTsQ` },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: { webPageId: `cxR3EcTsQ` },
                                implicitPathVariables: void 0,
                              },
                            ],
                            children: (e) =>
                              _(H, {
                                children: _(B, {
                                  className: `framer-15ty54m-container`,
                                  isAuthoredByUser: !0,
                                  nodeId: `lu_13G67e`,
                                  scopeId: `augiA20Il`,
                                  children: _(z, {
                                    breakpoint: y,
                                    overrides: {
                                      aYwBiDlS4: {
                                        href: e[1],
                                        linkColor: `rgb(0, 0, 0)`,
                                        tabletBreakpoint: 1199,
                                      },
                                      Z0imWIwn6: {
                                        font: {
                                          fontFamily: `"Poppins", "Poppins Placeholder", sans-serif`,
                                          fontSize: `29px`,
                                          fontStyle: `normal`,
                                          fontWeight: 500,
                                          letterSpacing: `-0.02em`,
                                          lineHeight: `1.2em`,
                                        },
                                        href: e[2],
                                        linkColor: `rgb(0, 0, 0)`,
                                        linkHoverColor: `var(--token-832a9c22-d657-4637-89aa-cbcc712eb257, rgb(202, 157, 241))`,
                                        linkLabel: `Learn more`,
                                        style: {
                                          maxWidth: `100%`,
                                          width: `100%`,
                                        },
                                        textBefore: `I'm Meshack, a Full-Stack Software Engineer building scalable web apps, APIs, and digital products in Nairobi, Kenya. <br><br> From cloud backends to polished interfaces, I craft software that performs. <br><br> Curious who I am? `,
                                        textIndent: 0,
                                      },
                                    },
                                    children: _(Je, {
                                      font: {
                                        fontFamily: `"Poppins Medium", "Poppins Medium Placeholder", sans-serif`,
                                        fontSize: `38px`,
                                        fontStyle: `normal`,
                                        fontWeight: 500,
                                        letterSpacing: `-0.02em`,
                                        lineHeight: `1.2em`,
                                      },
                                      height: `100%`,
                                      href: e[0],
                                      htmlTag: `p`,
                                      id: `lu_13G67e`,
                                      keepRunningWhileHover: !0,
                                      layoutId: `lu_13G67e`,
                                      linkColor: `var(--token-d9ed1eb8-0c54-4136-bf85-5e5373c04bfa, rgb(255, 214, 80))`,
                                      linkDecoration: `underline`,
                                      linkDecorationThickness: 1,
                                      linkHoverColor: `rgb(0, 0, 0)`,
                                      linkLabel: ` <br>Learn more`,
                                      linkUnderlineOffset: 10,
                                      mobileBreakpoint: 768,
                                      rotateOnHover: !0,
                                      rotationSpeed: 20,
                                      shapes: [
                                        _(w.div, {
                                          className: `framer-1ccvbjf`,
                                          "data-framer-name": `About-Us-Shape-3`,
                                          children: _(F, {
                                            className: `framer-12uvg1o`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 208.955 208.955" overflow="visible"><path d="M 111.27 2.418 C 107.316 -0.806 101.64 -0.806 97.686 2.418 L 89.161 9.37 C 86.478 11.557 82.906 12.319 79.565 11.416 L 68.973 8.554 C 64.054 7.224 58.879 9.531 56.579 14.077 L 51.575 23.972 C 50.016 27.051 47.075 29.195 43.666 29.735 L 32.782 31.459 C 27.766 32.254 23.991 36.45 23.731 41.521 L 23.158 52.685 C 22.982 56.117 21.173 59.258 18.293 61.135 L 8.981 67.204 C 4.74 69.968 3.003 75.318 4.813 80.045 L 8.819 90.514 C 10.046 93.716 9.668 97.311 7.806 100.19 L 1.724 109.588 C -1.024 113.835 -0.438 119.423 3.133 123.008 L 11.011 130.915 C 13.433 133.346 14.548 136.787 14.011 140.178 L 12.258 151.243 C 11.466 156.248 14.281 161.127 19.011 162.95 L 29.338 166.925 C 32.553 168.163 34.979 170.866 35.864 174.194 L 38.723 184.958 C 40.029 189.874 44.603 193.201 49.683 192.929 L 60.654 192.342 C 64.107 192.157 67.437 193.645 69.604 196.339 L 76.522 204.942 C 79.718 208.917 85.268 210.097 89.806 207.768 L 99.57 202.756 C 102.651 201.176 106.305 201.176 109.385 202.756 L 119.15 207.768 C 123.688 210.097 129.237 208.917 132.433 204.942 L 139.351 196.339 C 141.518 193.645 144.849 192.157 148.301 192.342 L 159.272 192.929 C 164.352 193.201 168.927 189.874 170.233 184.958 L 173.092 174.194 C 173.976 170.866 176.402 168.163 179.617 166.925 L 189.944 162.95 C 194.675 161.127 197.49 156.248 196.697 151.243 L 194.944 140.178 C 194.408 136.787 195.523 133.346 197.944 130.915 L 205.822 123.008 C 209.393 119.423 209.979 113.835 207.231 109.588 L 201.15 100.19 C 199.287 97.311 198.91 93.716 200.136 90.514 L 204.143 80.045 C 205.953 75.318 204.216 69.968 199.974 67.204 L 190.661 61.135 C 187.782 59.258 185.974 56.117 185.798 52.685 L 185.225 41.521 C 184.964 36.45 181.189 32.254 176.174 31.459 L 165.289 29.735 C 161.881 29.195 158.939 27.051 157.381 23.972 L 152.375 14.077 C 150.077 9.531 144.901 7.224 139.982 8.554 L 129.391 11.416 C 126.049 12.319 122.477 11.557 119.795 9.37 Z" fill="var(--token-d9ed1eb8-0c54-4136-bf85-5e5373c04bfa, rgb(255, 214, 80)) /* {&quot;name&quot;:&quot;Yellow-Accent&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        _(w.div, {
                                          className: `framer-14skpzc`,
                                          "data-framer-name": `About-Us-Shape-2`,
                                          children: _(F, {
                                            className: `framer-snzj9h`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 210 210" overflow="visible"><path d="M 61.838 0.187 C 71.028 -0.209 83.283 0.148 92.673 0.145 L 148.702 0.186 C 169.128 19.957 189.863 41.366 210 61.531 L 209.995 148.469 C 190.809 168.558 168.431 190.16 148.656 209.828 C 138.932 210.159 127.772 209.909 117.89 209.914 L 61.766 209.873 C 55.341 204.228 46.468 194.8 40.248 188.575 L 0.209 148.494 C -0.194 138.629 0.11 126.44 0.11 116.412 L 0.182 61.543 L 40.791 20.872 C 45.925 15.733 56.627 4.435 61.838 0.187 Z" fill="var(--token-d9ed1eb8-0c54-4136-bf85-5e5373c04bfa, rgb(255, 214, 80)) /* {&quot;name&quot;:&quot;Yellow-Accent&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        _(w.div, {
                                          className: `framer-19yee0w`,
                                          "data-framer-name": `About-Us-Shape-1`,
                                          children: _(F, {
                                            className: `framer-19oqyb8`,
                                            "data-framer-name": `Vector`,
                                            opacity: 1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 210 204"><path d="M 94.201 0.902 C 128.615 -3.73 147.24 15.204 148.299 48.507 C 162.969 44.337 174.105 42.728 188.304 50.73 C 198.209 56.304 205.447 65.6 208.392 76.533 C 215.129 102.258 200.07 123.32 174.935 129.716 C 180.892 139.239 184.982 146.79 185.52 158.258 C 186.048 170.092 181.759 181.644 173.62 190.295 C 155.74 209.609 130.511 206.989 112.02 190.069 L 104.962 181.476 C 89.506 200.128 68.031 210.61 45.065 197.423 C 34.902 191.591 27.572 181.884 24.774 170.557 C 20.782 154.44 26.041 143.353 33.998 130.166 C 23.025 125.855 9.993 118.867 5.132 108.372 C -9.03 77.815 7.001 46.157 42.365 45.418 C 46.993 45.322 58.201 47.224 60.95 45.743 C 62.39 20.845 72.666 10.592 94.201 0.902 Z" fill="var(--token-d9ed1eb8-0c54-4136-bf85-5e5373c04bfa, rgb(255, 214, 80)) /* {&quot;name&quot;:&quot;Yellow-Accent&quot;} */"></path></svg>`,
                                            svgContentId: 8642976932,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        _(w.div, {
                                          className: `framer-o83jzg`,
                                          "data-framer-name": `About-Us-Shape-5`,
                                          children: _(F, {
                                            className: `framer-io3fv4`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 210 209.091" overflow="visible"><path d="M 124.138 0 L 129.482 40.163 L 160.592 13.406 L 150.587 53.498 C 162.612 48.826 176.8 44.255 189.115 39.954 L 165.771 73.497 L 206.554 74.752 L 172.377 97.635 C 184.798 102.677 197.615 108.374 210 113.649 L 170.058 122.767 C 179.835 131.753 189.848 141.765 199.448 151.041 C 185.945 149.177 172.455 147.193 158.985 145.087 C 164.733 157.366 170.334 169.715 175.791 182.128 L 140.556 162.088 C 141.304 175.882 142.199 189.668 143.245 203.443 L 121.72 176.671 L 119.235 173.938 L 117.166 174.411 C 113.271 180.465 107.468 201.186 104.975 209.091 C 100.53 198.517 95.969 182.478 92.414 171.168 L 66.87 202.63 L 68.885 162.03 L 33.722 182.154 L 50.323 145.113 L 10.184 151.08 L 38.833 122.93 C 28.871 119.711 10.758 116.179 0 113.756 C 11.27 108.183 25.093 102.696 36.819 97.717 C 26.549 90.177 13.362 81.87 2.605 74.679 L 43.974 73.551 L 20.337 40.089 C 32.16 43.523 46.901 49.082 58.771 53.181 C 55.821 40.038 52.288 26.417 49.093 13.28 C 58.861 22.17 70.226 31.438 80.363 40.071 C 81.765 28.202 83.228 12.197 85.681 0.847 C 89.618 6.267 100.424 27.165 104.993 34.981 Z" fill="var(--token-d9ed1eb8-0c54-4136-bf85-5e5373c04bfa, rgb(255, 214, 80)) /* {&quot;name&quot;:&quot;Yellow-Accent&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        _(w.div, {
                                          className: `framer-1pezvom`,
                                          "data-framer-name": `About-Us-Shape-4`,
                                          children: _(F, {
                                            className: `framer-uxz18h`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 209.467 209.467" overflow="visible"><path d="M 97.252 0 L 112.214 0 L 112.214 66.247 L 137.031 4.824 L 150.903 10.429 L 125.443 73.443 L 173.501 25.386 L 184.08 35.966 L 138.02 82.026 L 197.711 55.947 L 203.701 69.657 L 140.541 97.252 L 209.467 97.252 L 209.467 112.214 L 140.542 112.214 L 203.701 139.81 L 197.711 153.52 L 138.02 127.441 L 184.08 173.501 L 173.501 184.08 L 125.443 136.024 L 150.903 199.038 L 137.031 204.643 L 112.214 143.22 L 112.214 209.467 L 97.252 209.467 L 97.252 143.22 L 72.436 204.643 L 58.564 199.038 L 84.022 136.024 L 35.965 184.08 L 25.386 173.501 L 71.447 127.441 L 11.755 153.52 L 5.766 139.81 L 68.925 112.214 L 0 112.214 L 0 97.252 L 68.926 97.252 L 5.766 69.657 L 11.755 55.947 L 71.447 82.026 L 25.386 35.965 L 35.965 25.386 L 84.022 73.443 L 58.564 10.429 L 72.436 4.824 L 97.252 66.247 Z" fill="var(--token-d9ed1eb8-0c54-4136-bf85-5e5373c04bfa, rgb(255, 214, 80)) /* {&quot;name&quot;:&quot;Yellow-Accent&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        _(w.div, {
                                          className: `framer-uiwxpu`,
                                          "data-framer-name": `About-Us-Shape-6`,
                                          children: _(F, {
                                            className: `framer-130agsb`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200" overflow="visible"><path d="M 100.001 173.738 C 24.365 236.944 -36.944 175.636 26.262 100 C -36.944 24.364 24.365 -36.944 100.001 26.262 C 175.623 -36.944 236.947 24.364 173.74 100 C 236.947 175.578 175.623 236.944 100.001 173.738 Z" fill="var(--token-d9ed1eb8-0c54-4136-bf85-5e5373c04bfa, rgb(255, 214, 80)) /* {&quot;name&quot;:&quot;Yellow-Accent&quot;} */"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                      shapeSize: 360,
                                      showShapesOnDesktop: !1,
                                      showShapesOnMobile: !0,
                                      showShapesOnTablet: !0,
                                      style: { maxWidth: `100%` },
                                      switchInterval: 200,
                                      tabletBreakpoint: 1024,
                                      textAfter: ` about me.`,
                                      textBefore: `I'm Meshack, a Full-Stack Software Engineer building scalable web apps, APIs, and interactive digital products in Nairobi, Kenya. From cloud backends to polished interfaces, I craft software that performs. Curious who I am? `,
                                      textColor: `rgb(255, 255, 255)`,
                                      textIndent: 252,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                          }),
                        }),
                        _(`div`, {
                          className: `framer-khr8di`,
                          "data-framer-name": `Get-in-touch`,
                          children: _(H, {
                            children: _(B, {
                              className: `framer-1tl12zb-container`,
                              "data-framer-name": `Get-In-Touch_Banner`,
                              isAuthoredByUser: !0,
                              name: `Get-In-Touch_Banner`,
                              nodeId: `ZMFhfv3Qg`,
                              scopeId: `augiA20Il`,
                              children: _(Fe, {
                                background: `rgb(202, 157, 241)`,
                                color: `rgb(255, 255, 255)`,
                                direction: `Left`,
                                fadeEdges: !0,
                                fadeWidth: 80,
                                font: {
                                  fontFamily: `"Poppins Regular", "Poppins Regular Placeholder", sans-serif`,
                                  fontSize: `16px`,
                                  fontStyle: `normal`,
                                  fontWeight: 400,
                                  letterSpacing: `0em`,
                                  lineHeight: `1em`,
                                },
                                gap: 40,
                                height: `100%`,
                                icons: [
                                  _(w.div, {
                                    className: `framer-lu3tb5`,
                                    "data-framer-name": `Get-In-Touch-Shape-5`,
                                    children: _(F, {
                                      className: `framer-1ecw17r`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" overflow="visible"><path d="M 17.734 0 L 18.497 5.763 L 22.942 1.923 L 21.512 7.676 C 23.23 7.005 25.257 6.35 27.016 5.733 L 23.682 10.545 L 29.508 10.725 L 24.625 14.009 C 26.4 14.732 28.231 15.549 30 16.306 L 24.294 17.614 C 25.691 18.904 27.121 20.34 28.493 21.671 C 26.564 21.404 24.636 21.119 22.712 20.817 C 23.533 22.579 24.333 24.35 25.113 26.131 L 20.079 23.256 C 20.186 25.235 20.314 27.213 20.464 29.19 L 17.389 25.348 L 17.034 24.956 L 16.738 25.024 C 16.182 25.893 15.353 28.866 14.996 30 C 14.361 28.483 13.71 26.182 13.202 24.559 L 9.553 29.073 L 9.841 23.248 L 4.817 26.135 L 7.189 20.821 L 1.455 21.677 L 5.548 17.638 C 4.124 17.176 1.537 16.669 0 16.322 C 1.61 15.522 3.585 14.735 5.26 14.02 C 3.793 12.938 1.909 11.747 0.372 10.715 L 6.282 10.553 L 2.905 5.752 C 4.594 6.245 6.7 7.042 8.396 7.63 C 7.974 5.745 7.47 3.79 7.013 1.905 C 8.409 3.181 10.032 4.511 11.48 5.749 C 11.681 4.046 11.89 1.75 12.24 0.121 C 12.803 0.899 14.346 3.898 14.999 5.019 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  _(w.div, {
                                    className: `framer-xoc8ku`,
                                    "data-framer-name": `Get-In-Touch-Shape-2`,
                                    children: _(F, {
                                      className: `framer-13ovmef`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 29.924 29.924" overflow="visible"><path d="M 13.893 0 L 16.031 0 L 16.031 9.464 L 19.576 0.689 L 21.558 1.49 L 17.92 10.492 L 24.786 3.627 L 26.297 5.138 L 19.717 11.718 L 28.244 7.992 L 29.1 9.951 L 20.077 13.893 L 29.924 13.893 L 29.924 16.031 L 20.077 16.031 L 29.1 19.973 L 28.244 21.931 L 19.717 18.206 L 26.297 24.786 L 24.786 26.297 L 17.92 19.432 L 21.558 28.434 L 19.576 29.235 L 16.031 20.46 L 16.031 29.924 L 13.893 29.924 L 13.893 20.46 L 10.348 29.235 L 8.366 28.434 L 12.003 19.432 L 5.138 26.297 L 3.627 24.786 L 10.207 18.206 L 1.679 21.931 L 0.824 19.973 L 9.846 16.031 L 0 16.031 L 0 13.893 L 9.847 13.893 L 0.824 9.951 L 1.679 7.992 L 10.207 11.718 L 3.627 5.138 L 5.138 3.627 L 12.003 10.492 L 8.366 1.49 L 10.348 0.689 L 13.893 9.464 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  _(w.div, {
                                    className: `framer-kidiqh`,
                                    "data-framer-name": `Get-In-Touch-Shape-1`,
                                    children: _(F, {
                                      className: `framer-7avc00`,
                                      "data-framer-name": `Vector`,
                                      opacity: 1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 29.85 29.85"><path d="M 15.896 0.345 C 15.331 -0.115 14.52 -0.115 13.955 0.345 L 12.737 1.339 C 12.354 1.651 11.844 1.76 11.366 1.631 L 9.853 1.222 C 9.151 1.032 8.411 1.362 8.083 2.011 L 7.368 3.425 C 7.145 3.864 6.725 4.171 6.238 4.248 L 4.683 4.494 C 3.967 4.608 3.427 5.207 3.39 5.932 L 3.308 7.526 C 3.283 8.017 3.025 8.465 2.613 8.734 L 1.283 9.601 C 0.677 9.995 0.429 10.76 0.688 11.435 L 1.26 12.931 C 1.435 13.388 1.381 13.902 1.115 14.313 L 0.246 15.655 C -0.146 16.262 -0.063 17.06 0.448 17.573 L 1.573 18.702 C 1.919 19.049 2.078 19.541 2.002 20.025 L 1.751 21.606 C 1.638 22.321 2.04 23.018 2.716 23.279 L 4.191 23.846 C 4.65 24.023 4.997 24.409 5.123 24.885 L 5.532 26.423 C 5.718 27.125 6.372 27.6 7.098 27.561 L 8.665 27.477 C 9.158 27.451 9.634 27.664 9.943 28.048 L 10.932 29.277 C 11.388 29.845 12.181 30.014 12.829 29.681 L 14.224 28.965 C 14.664 28.739 15.186 28.739 15.626 28.965 L 17.021 29.681 C 17.67 30.014 18.462 29.845 18.919 29.277 L 19.907 28.048 C 20.217 27.664 20.693 27.451 21.186 27.477 L 22.753 27.561 C 23.479 27.6 24.132 27.125 24.319 26.423 L 24.727 24.885 C 24.854 24.409 25.2 24.023 25.66 23.846 L 27.135 23.279 C 27.811 23.018 28.213 22.321 28.1 21.606 L 27.849 20.025 C 27.773 19.541 27.932 19.049 28.278 18.702 L 29.403 17.573 C 29.913 17.06 29.997 16.262 29.604 15.655 L 28.736 14.313 C 28.47 13.902 28.416 13.388 28.591 12.931 L 29.163 11.435 C 29.422 10.76 29.174 9.995 28.568 9.601 L 27.237 8.734 C 26.826 8.465 26.568 8.017 26.543 7.526 L 26.461 5.932 C 26.423 5.207 25.884 4.608 25.168 4.494 L 23.613 4.248 C 23.126 4.171 22.706 3.864 22.483 3.425 L 21.768 2.011 C 21.44 1.362 20.7 1.032 19.997 1.222 L 18.484 1.631 C 18.007 1.76 17.497 1.651 17.114 1.339 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                      svgContentId: 10727552250,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  _(w.div, {
                                    className: `framer-i6lusg`,
                                    "data-framer-name": `Get-In-Touch-Shape-4`,
                                    children: _(F, {
                                      className: `framer-qoz05s`,
                                      "data-framer-name": `Vector`,
                                      opacity: 1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 29.85 29.85"><path d="M 8.834 0.027 C 10.147 -0.03 11.898 0.021 13.239 0.021 L 21.243 0.027 C 24.161 2.851 27.123 5.909 30 8.79 L 29.999 21.21 C 27.258 24.08 24.062 27.166 21.237 29.975 C 19.847 30.023 18.253 29.987 16.841 29.988 L 8.824 29.982 C 7.906 29.175 6.638 27.829 5.75 26.939 L 0.03 21.213 C -0.028 19.804 0.016 18.063 0.016 16.63 L 0.026 8.792 L 5.827 2.982 C 6.561 2.248 8.09 0.634 8.834 0.027 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                      svgContentId: 11420852403,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  _(w.div, {
                                    className: `framer-1s2erp6`,
                                    "data-framer-name": `Get-In-Touch-Shape-3`,
                                    children: _(F, {
                                      className: `framer-1mxwj16`,
                                      "data-framer-name": `Vector`,
                                      opacity: 1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 29"><path d="M 13.457 0.059 C 18.374 -0.603 21.034 2.102 21.186 6.86 C 23.281 6.264 24.872 6.034 26.901 7.177 C 28.316 7.973 29.35 9.301 29.77 10.863 C 30.733 14.538 28.581 17.547 24.991 18.461 C 25.842 19.821 26.426 20.9 26.503 22.538 C 26.578 24.229 25.966 25.879 24.803 27.115 C 22.249 29.874 18.644 29.5 16.003 27.083 L 14.995 25.855 C 12.787 28.52 9.719 30.017 6.438 28.133 C 4.986 27.3 3.939 25.913 3.539 24.295 C 2.969 21.993 3.72 20.409 4.857 18.525 C 3.289 17.909 1.428 16.911 0.733 15.412 C -1.29 11.046 1 6.524 6.052 6.418 C 6.713 6.405 8.314 6.676 8.707 6.465 C 8.913 2.908 10.381 1.443 13.457 0.059 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                      svgContentId: 10161200620,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  _(w.div, {
                                    className: `framer-h26qu5`,
                                    "data-framer-name": `Get-In-Touch-Shape-6`,
                                    children: _(F, {
                                      className: `framer-1920ora`,
                                      requiresOverflowVisible: !1,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" overflow="visible"><path d="M 15 26.061 C 3.655 35.542 -5.542 26.345 3.939 15 C -5.542 3.655 3.655 -5.542 15 3.939 C 26.343 -5.542 35.542 3.655 26.061 15 C 35.542 26.337 26.343 35.542 15 26.061 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                                id: `ZMFhfv3Qg`,
                                layoutId: `ZMFhfv3Qg`,
                                name: `Get-In-Touch_Banner`,
                                pauseOnHover: !0,
                                speed: 4,
                                style: { height: `100%` },
                                text: `Get in touch — let's build something great together.`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    h(w.div, {
                      className: `framer-esf7s4`,
                      "data-framer-name": `Get-In-Touch`,
                      layout: E,
                      children: [
                        _(`div`, {
                          className: `framer-1vlt2no`,
                          id: V,
                          ref: le,
                          children: _(H, {
                            children: _(B, {
                              className: `framer-106yu75-container`,
                              isAuthoredByUser: !0,
                              nodeId: `IV4tjeClq`,
                              scopeId: `augiA20Il`,
                              children: _(z, {
                                breakpoint: y,
                                overrides: {
                                  aYwBiDlS4: {
                                    font: {
                                      fontFamily: `"Magiel", "Magiel Placeholder", sans-serif`,
                                      fontSize: `155px`,
                                      fontStyle: `normal`,
                                      fontWeight: 900,
                                      letterSpacing: `0.07em`,
                                      lineHeight: `0.9em`,
                                    },
                                  },
                                  Z0imWIwn6: {
                                    font: {
                                      fontFamily: `"Magiel", "Magiel Placeholder", sans-serif`,
                                      fontSize: `80px`,
                                      fontStyle: `normal`,
                                      fontWeight: 900,
                                      letterSpacing: `0.07em`,
                                      lineHeight: `0.9em`,
                                    },
                                  },
                                },
                                children: _(Le, {
                                  align: `center`,
                                  as: `h2`,
                                  bottomLeft: `T`,
                                  bottomRight: `UCH`,
                                  emailAddress: `meshackrono05@gmail.com`,
                                  emailBody: ``,
                                  emailSubject: ``,
                                  font: {
                                    fontFamily: `"Magiel Black", "Magiel Black Placeholder", sans-serif`,
                                    fontSize: `205px`,
                                    fontStyle: `normal`,
                                    fontWeight: 900,
                                    letterSpacing: `0.07em`,
                                    lineHeight: `0.9em`,
                                  },
                                  gap: 0.07,
                                  height: `100%`,
                                  id: `IV4tjeClq`,
                                  layoutId: `IV4tjeClq`,
                                  mobileBreakpoint: 768,
                                  openInNewTab: !1,
                                  rotateDuration: 2.45,
                                  shapeImage: `/images/service-workplace-new-work.png?width=706&height=706`,
                                  shapeOffsetX: -0.02,
                                  shapeOffsetY: 0.12,
                                  shapeScale: 0.72,
                                  showHoverOnMobile: !0,
                                  showHoverOnTablet: !0,
                                  tabletBreakpoint: 1024,
                                  textColor: `rgb(0, 0, 0)`,
                                  textTransform: `uppercase`,
                                  topText: `GET IN`,
                                  underlineColor: `rgb(0, 0, 0)`,
                                  underlineOffset: 13,
                                  underlineThickness: 9,
                                  width: `100%`,
                                  widthMode: `fit-content`,
                                }),
                              }),
                            }),
                          }),
                        }),
                        _(`div`, {
                          className: `framer-17h0dlq`,
                          children: _(F, {
                            className: `framer-hsg4nm`,
                            "data-framer-name": `Vector 108`,
                            fill: `rgba(0,0,0,1)`,
                            intrinsicHeight: 116,
                            intrinsicWidth: 2688,
                            svg: `<svg width="2688" height="116" viewBox="-21 -21 2688 116" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M45.2157 28.2843L0 73.5H2646L2600.78 28.2843C2585.16 12.6633 2559.84 12.6633 2544.22 28.2843L2527.28 45.2157C2511.66 60.8367 2486.34 60.8367 2470.72 45.2157L2453.78 28.2843C2438.16 12.6633 2412.84 12.6633 2397.22 28.2843L2380.28 45.2157C2364.66 60.8367 2339.34 60.8367 2323.72 45.2157L2306.78 28.2843C2291.16 12.6633 2265.84 12.6633 2250.22 28.2843L2233.28 45.2157C2217.66 60.8367 2192.34 60.8367 2176.72 45.2157L2159.78 28.2843C2144.16 12.6633 2118.84 12.6633 2103.22 28.2843L2086.28 45.2157C2070.66 60.8367 2045.34 60.8367 2029.72 45.2157L2012.78 28.2843C1997.16 12.6633 1971.84 12.6633 1956.22 28.2843L1939.28 45.2157C1923.66 60.8367 1898.34 60.8367 1882.72 45.2157L1865.78 28.2843C1850.16 12.6633 1824.84 12.6633 1809.22 28.2843L1792.28 45.2157C1776.66 60.8367 1751.34 60.8367 1735.72 45.2157L1718.78 28.2843C1703.16 12.6633 1677.84 12.6633 1662.22 28.2843L1645.28 45.2157C1629.66 60.8367 1604.34 60.8367 1588.72 45.2157L1571.78 28.2843C1556.16 12.6633 1530.84 12.6633 1515.22 28.2843L1498.28 45.2157C1482.66 60.8367 1457.34 60.8367 1441.72 45.2157L1424.78 28.2843C1409.16 12.6633 1383.84 12.6633 1368.22 28.2843L1351.28 45.2157C1335.66 60.8367 1310.34 60.8367 1294.72 45.2157L1277.78 28.2843C1262.16 12.6633 1236.84 12.6633 1221.22 28.2843L1204.28 45.2157C1188.66 60.8367 1163.34 60.8367 1147.72 45.2157L1130.78 28.2843C1115.16 12.6633 1089.84 12.6633 1074.22 28.2843L1057.28 45.2157C1041.66 60.8367 1016.34 60.8367 1000.72 45.2157L983.784 28.2843C968.163 12.6633 942.837 12.6633 927.216 28.2843L910.284 45.2157C894.663 60.8367 869.337 60.8367 853.716 45.2157L836.784 28.2843C821.163 12.6633 795.837 12.6633 780.216 28.2843L763.284 45.2157C747.663 60.8367 722.337 60.8367 706.716 45.2157L689.784 28.2843C674.163 12.6633 648.837 12.6633 633.216 28.2843L616.284 45.2157C600.663 60.8367 575.337 60.8367 559.716 45.2157L542.784 28.2843C527.163 12.6633 501.837 12.6633 486.216 28.2843L469.284 45.2157C453.663 60.8367 428.337 60.8367 412.716 45.2157L395.784 28.2843C380.163 12.6633 354.837 12.6633 339.216 28.2843L322.284 45.2157C306.663 60.8367 281.337 60.8367 265.716 45.2157L248.784 28.2843C233.163 12.6633 207.837 12.6633 192.216 28.2843L175.284 45.2157C159.663 60.8367 134.337 60.8367 118.716 45.2157L101.784 28.2843C86.1633 12.6633 60.8367 12.6633 45.2157 28.2843Z" fill="black" stroke="black" stroke-width="41"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                    _(z, {
                      breakpoint: y,
                      overrides: { Z0imWIwn6: { width: `100vw` } },
                      children: _(H, {
                        height: 157,
                        width: l?.width || `100vw`,
                        y: 0,
                        children: _(z, {
                          breakpoint: y,
                          overrides: { Z0imWIwn6: { transformTemplate: dp } },
                          children: _(B, {
                            className: `framer-15epnuz-container`,
                            layout: E,
                            layoutScroll: !0,
                            nodeId: `iGw9ocrOs`,
                            rendersWithMotion: !0,
                            scopeId: `augiA20Il`,
                            children: _(z, {
                              breakpoint: y,
                              overrides: {
                                aYwBiDlS4: { variant: $(`UFK11e0Ns`) },
                                Z0imWIwn6: {
                                  __framer__targets: [
                                    {
                                      offset: 20,
                                      ref: te,
                                      target: `e2EBMhbK1`,
                                    },
                                    { offset: 20, ref: M, target: `xw8qZPiB6` },
                                    { offset: 20, ref: P, target: `e2EBMhbK1` },
                                    {
                                      offset: 100,
                                      ref: R,
                                      target: `xw8qZPiB6`,
                                    },
                                    {
                                      offset: 20,
                                      ref: le,
                                      target: `e2EBMhbK1`,
                                    },
                                    {
                                      offset: 120,
                                      ref: ue,
                                      target: `xw8qZPiB6`,
                                    },
                                  ],
                                  style: { width: `100%` },
                                  variant: $(`xw8qZPiB6`),
                                },
                              },
                              children: _(Qf, {
                                __framer__animateOnce: !1,
                                __framer__targets: [
                                  { offset: 20, ref: te, target: `kEbS4L7fD` },
                                  { offset: 20, ref: M, target: `ZroOE0Oai` },
                                  { offset: 20, ref: P, target: `kEbS4L7fD` },
                                  { offset: 100, ref: R, target: `ZroOE0Oai` },
                                  { offset: 20, ref: le, target: `kEbS4L7fD` },
                                  { offset: 120, ref: ue, target: `ZroOE0Oai` },
                                ],
                                __framer__threshold: 0,
                                __framer__variantAppearEffectEnabled: !0,
                                height: `100%`,
                                id: `iGw9ocrOs`,
                                layoutId: `iGw9ocrOs`,
                                style: { height: `100%`, width: `100%` },
                                variant: $(`ZroOE0Oai`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                    _(z, {
                      breakpoint: y,
                      overrides: {
                        aYwBiDlS4: { y: (l?.y || 0) + 0 + 8792.7407 },
                        Z0imWIwn6: { y: (l?.y || 0) + 0 + 10001.8 },
                      },
                      children: _(H, {
                        height: 1e3,
                        width: l?.width || `100vw`,
                        y: (l?.y || 0) + 0 + 8992.7407,
                        children: _(B, {
                          className: `framer-z91beo-container`,
                          id: fe,
                          layout: E,
                          nodeId: `HdiV0iD_v`,
                          ref: ue,
                          scopeId: `augiA20Il`,
                          children: _(z, {
                            breakpoint: y,
                            overrides: {
                              aYwBiDlS4: { variant: $(`BQwAMMHJ0`) },
                              Z0imWIwn6: { variant: $(`TaC6yX4vc`) },
                            },
                            children: _(De, {
                              height: `100%`,
                              id: `HdiV0iD_v`,
                              layoutId: `HdiV0iD_v`,
                              style: { height: `100%`, width: `100%` },
                              variant: $(`pDyOQ4hPB`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                _(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-1PA4P.framer-lux5qc, .framer-1PA4P .framer-lux5qc { display: block; }`,
        `.framer-1PA4P.framer-72rtr7 { align-content: center; align-items: center; background-color: #000000; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-1PA4P .framer-1kd870v { background-color: #000000; flex: none; gap: 10px; height: 100vh; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-1PA4P .framer-1odvrzc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 616px; justify-content: center; left: calc(50.00000000000002% - 100% / 2); overflow: var(--overflow-clip-fallback, clip); padding: 30px 0px 0px 0px; position: absolute; top: calc(50.69175428887661% - 615.5px / 2); width: 100%; }`,
        `.framer-1PA4P .framer-4ifwqx-container { flex: none; height: 807px; position: relative; width: 100%; }`,
        `.framer-1PA4P .framer-1nqphx5 { align-content: center; align-items: center; bottom: 59px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; left: 50%; overflow: var(--overflow-clip-fallback, clip); padding: 0px 40px 0px 40px; position: absolute; transform: translateX(-50%); width: 100%; }`,
        `.framer-1PA4P .framer-pbwefw-container { flex: none; height: 128px; position: relative; width: 772px; }`,
        `.framer-1PA4P .framer-9t1gtw { align-content: center; align-items: center; background-color: #000000; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; scroll-margin-top: 40px; width: 100%; }`,
        `.framer-1PA4P .framer-1ski4mn-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-1PA4P .framer-2r3hhd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 52px; height: 100vh; justify-content: center; max-width: 1200px; overflow: var(--overflow-clip-fallback, clip); padding: 180px 40px 180px 40px; position: relative; scroll-margin-top: 20px; width: 100%; }`,
        `.framer-1PA4P .framer-1etzyo7-container, .framer-1PA4P .framer-106yu75-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-1PA4P .framer-1r5xr5h, .framer-1PA4P .framer-1p9f1xx, .framer-1PA4P .framer-1otqs7u, .framer-1PA4P .framer-1l5oyhd { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-1PA4P .framer-1ey7qi6, .framer-1PA4P .framer-168ntim, .framer-1PA4P .framer-17shcze, .framer-1PA4P .framer-1dp7i2q, .framer-1PA4P .framer-1sg7b83 { height: 70px; position: relative; width: 70px; }`,
        `.framer-1PA4P .framer-m1tent, .framer-1PA4P .framer-56rghr { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-1PA4P .framer-9ctntc { flex: none; height: 68px; position: relative; width: 70px; }`,
        `.framer-1PA4P .framer-15ia9fc { align-content: center; align-items: center; background-color: #000000; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 100vh; justify-content: space-evenly; overflow: var(--overflow-clip-fallback, clip); padding: 70px 0px 30px 0px; position: relative; scroll-margin-top: 20px; width: 100%; }`,
        `.framer-1PA4P .framer-1kewz24, .framer-1PA4P .framer-jrrhuh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-1PA4P .framer-1qra3ek, .framer-1PA4P .framer-uvj7h3, .framer-1PA4P .framer-1dooqsd { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-1PA4P .framer-3zt4of-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-1PA4P .framer-yd4x8t, .framer-1PA4P .framer-y1w3w4, .framer-1PA4P .framer-1o0z8go, .framer-1PA4P .framer-bc8xjx { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-1PA4P .framer-bfy5gi { flex: none; height: 209px; position: relative; width: 209px; }`,
        `.framer-1PA4P .framer-19u29eg, .framer-1PA4P .framer-19oqyb8 { flex: none; height: 204px; position: relative; width: 210px; }`,
        `.framer-1PA4P .framer-w92onp, .framer-1PA4P .framer-2f0h8i, .framer-1PA4P .framer-izss5q, .framer-1PA4P .framer-snzj9h, .framer-1PA4P .framer-uxz18h { height: 210px; position: relative; width: 210px; }`,
        `.framer-1PA4P .framer-3nsicb, .framer-1PA4P .framer-xjzwyb { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-1PA4P .framer-qm1xe9, .framer-1PA4P .framer-io3fv4 { height: 209px; position: relative; width: 210px; }`,
        `.framer-1PA4P .framer-1olxwkf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 650px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 50%; }`,
        `.framer-1PA4P .framer-1f57nu9-container { flex: none; height: 100.09407337723424vh; position: relative; scroll-margin-top: 20px; width: 100%; }`,
        `.framer-1PA4P .framer-cr2owr-container { flex: none; height: 53px; position: relative; width: 100%; }`,
        `.framer-1PA4P .framer-1ihvruv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: center; max-width: 2300px; overflow: visible; padding: 0px 40px 130px 40px; position: relative; width: 100%; }`,
        `.framer-1PA4P .framer-vwh5wi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 1200px; overflow: var(--overflow-clip-fallback, clip); padding: 140px 40px 40px 40px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-1PA4P .framer-1o4iwtc { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-1PA4P .framer-1uprj5, .framer-1PA4P .framer-umq05j { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-1PA4P .framer-1qbsy10-container { aspect-ratio: 1.0303326810176126 / 1; flex: none; height: auto; position: relative; width: 47%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-1PA4P .framer-wkfob2-container { aspect-ratio: 1.0601023017902813 / 1; flex: none; height: auto; position: relative; width: 37%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-1PA4P .framer-1mlu2iv-container { flex: none; height: 80vh; max-width: 1501px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-1PA4P .framer-so15km-container { aspect-ratio: 0.9845605700712589 / 1; flex: none; height: auto; position: relative; width: 37%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-1PA4P .framer-1p9mnef-container { flex: none; height: auto; position: relative; width: 51%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-1PA4P .framer-12tzub4-container { flex: none; height: 140px; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-1PA4P .framer-3tud21 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100vh; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-1PA4P .framer-k2oyln { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-1PA4P .framer-1up8tzw-container { flex: 1 0 0px; height: 40px; position: relative; width: 1px; }`,
        `.framer-1PA4P .framer-cki42d { align-content: center; align-items: center; background-color: #000000; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px; position: relative; scroll-margin-top: 100px; width: 100%; z-index: 1; }`,
        `.framer-1PA4P .framer-15ty54m-container { flex: none; height: auto; max-width: 1400px; position: relative; width: auto; }`,
        `.framer-1PA4P .framer-1ccvbjf, .framer-1PA4P .framer-14skpzc { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-1PA4P .framer-12uvg1o { height: 209px; position: relative; width: 209px; }`,
        `.framer-1PA4P .framer-19yee0w, .framer-1PA4P .framer-o83jzg, .framer-1PA4P .framer-1pezvom { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-1PA4P .framer-uiwxpu { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 201px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 200px; }`,
        `.framer-1PA4P .framer-130agsb { height: 200px; position: relative; width: 200px; }`,
        `.framer-1PA4P .framer-khr8di { flex: none; height: 37px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-1PA4P .framer-1tl12zb-container { flex: none; height: 38px; left: 50%; position: absolute; top: 49%; transform: translate(-50%, -50%); width: auto; }`,
        `.framer-1PA4P .framer-lu3tb5, .framer-1PA4P .framer-xoc8ku, .framer-1PA4P .framer-kidiqh, .framer-1PA4P .framer-i6lusg, .framer-1PA4P .framer-1s2erp6 { height: 30px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 30px; }`,
        `.framer-1PA4P .framer-1ecw17r, .framer-1PA4P .framer-13ovmef, .framer-1PA4P .framer-1920ora { height: 30px; left: 0px; position: absolute; top: 0px; width: 30px; }`,
        `.framer-1PA4P .framer-7avc00, .framer-1PA4P .framer-qoz05s { flex: none; height: 30px; left: 0px; position: absolute; top: 0px; width: 30px; }`,
        `.framer-1PA4P .framer-1mxwj16 { flex: none; height: 29px; left: 0px; position: absolute; top: 0px; width: 30px; }`,
        `.framer-1PA4P .framer-h26qu5 { aspect-ratio: 0.9950248756218906 / 1; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 30px; }`,
        `.framer-1PA4P .framer-esf7s4 { align-content: center; align-items: center; background-color: var(--token-d9ed1eb8-0c54-4136-bf85-5e5373c04bfa, #ffd650); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-1PA4P .framer-1vlt2no { align-content: center; align-items: center; background-color: var(--token-d9ed1eb8-0c54-4136-bf85-5e5373c04bfa, #ffd650); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; scroll-margin-top: 20px; width: 100%; }`,
        `.framer-1PA4P .framer-17h0dlq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 113px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 2600px; }`,
        `.framer-1PA4P .framer-hsg4nm { flex: none; height: 116px; position: relative; width: 100%; }`,
        `.framer-1PA4P .framer-15epnuz-container { flex: none; height: 157px; left: 0px; position: fixed; right: 0px; top: 0px; z-index: 1; }`,
        `.framer-1PA4P .framer-z91beo-container { flex: none; height: 100vh; position: relative; scroll-margin-top: 120px; width: 100%; }`,
        ...Qe,
        ...nt,
        ...Be,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-1PA4P.framer-72rtr7 { width: 810px; } .framer-1PA4P .framer-pbwefw-container { width: 727px; } .framer-1PA4P .framer-1mlu2iv-container { height: 60vh; } .framer-1PA4P .framer-so15km-container { width: 38%; } .framer-1PA4P .framer-1p9mnef-container { width: 55%; } .framer-1PA4P .framer-cki42d { padding: 100px 50px 100px 50px; }}`,
        `@media (max-width: 809.98px) { .framer-1PA4P.framer-72rtr7 { width: 390px; } .framer-1PA4P .framer-1kd870v { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: flex-end; order: 0; padding: 100px 0px 60px 0px; z-index: 10; } .framer-1PA4P .framer-1odvrzc { height: 556px; order: 0; top: 120px; z-index: 1; } .framer-1PA4P .framer-4ifwqx-container { height: 707px; } .framer-1PA4P .framer-1nqphx5 { bottom: 30px; height: 276px; left: calc(50.00000000000002% - 100% / 2); order: 1; padding: 0px 16px 0px 16px; transform: unset; z-index: 1; } .framer-1PA4P .framer-pbwefw-container { flex: 1 0 0px; height: 276px; width: 1px; } .framer-1PA4P .framer-9t1gtw { flex-direction: column; height: 100vh; order: 1; padding: 0px 0px 130px 0px; width: 390px; } .framer-1PA4P .framer-1ski4mn-container { flex: none; width: 140%; } .framer-1PA4P .framer-2r3hhd { background-color: #ffffff; order: 3; padding: 180px 16px 180px 16px; } .framer-1PA4P .framer-15ia9fc { gap: 70px; height: 120vh; justify-content: center; order: 5; padding: 60px 0px 0px 0px; } .framer-1PA4P .framer-1olxwkf, .framer-1PA4P .framer-15ty54m-container { width: 100%; } .framer-1PA4P .framer-1dooqsd { width: 80%; } .framer-1PA4P .framer-1f57nu9-container { height: 100vh; order: 6; } .framer-1PA4P .framer-cr2owr-container { order: 7; } .framer-1PA4P .framer-1ihvruv { background-color: #ffffff; gap: 40px; justify-content: flex-start; order: 8; padding: 0px 16px 130px 16px; } .framer-1PA4P .framer-vwh5wi { padding: 120px 40px 0px 40px; } .framer-1PA4P .framer-1uprj5, .framer-1PA4P .framer-umq05j { flex-direction: column; gap: 40px; justify-content: center; } .framer-1PA4P .framer-1qbsy10-container { aspect-ratio: unset; height: 40vh; width: 100%; will-change: unset; } .framer-1PA4P .framer-wkfob2-container, .framer-1PA4P .framer-so15km-container { aspect-ratio: unset; height: 40vh; width: 100%; } .framer-1PA4P .framer-1mlu2iv-container { height: 40vh; } .framer-1PA4P .framer-1p9mnef-container { height: 40vh; width: 100%; } .framer-1PA4P .framer-3tud21 { gap: unset; justify-content: space-between; order: 9; } .framer-1PA4P .framer-cki42d { flex: none; height: min-content; overflow: visible; padding: 0px 16px 0px 16px; } .framer-1PA4P .framer-esf7s4 { order: 10; } .framer-1PA4P .framer-1vlt2no { flex: none; height: 90vh; } .framer-1PA4P .framer-17h0dlq { height: min-content; } .framer-1PA4P .framer-15epnuz-container { height: auto; left: 50%; order: 12; right: unset; transform: translateX(-50%); width: 100%; z-index: 10; } .framer-1PA4P .framer-z91beo-container { order: 11; }}`,
      ],
      `framer-1PA4P`,
    )),
    (hp.displayName = `Home`),
    (hp.defaultProps = { height: 11047, width: 1200 }),
    Se(
      hp,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Poppins Black`,
              source: `custom`,
              style: `normal`,
              uiFamilyName: `Poppins`,
              url: `/fonts/poppins-black.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Poppins Bold`,
              source: `custom`,
              style: `normal`,
              uiFamilyName: `Poppins`,
              url: `/fonts/poppins-bold.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Poppins SemiBold`,
              source: `custom`,
              style: `normal`,
              uiFamilyName: `Poppins`,
              url: `/fonts/poppins-semibold.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `/fonts/inter-400.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `/fonts/inter-400-2.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `/fonts/inter-400-3.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `/fonts/inter-400-4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `/fonts/inter-400-5.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `/fonts/inter-400-6.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `/fonts/inter-400-7.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Poppins Regular`,
              source: `custom`,
              style: `normal`,
              uiFamilyName: `Poppins`,
              url: `/fonts/poppins-regular.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Poppins Medium`,
              source: `custom`,
              style: `normal`,
              uiFamilyName: `Poppins`,
              url: `/fonts/poppins-medium.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Poppins`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Poppins`,
              url: `/fonts/poppins-500.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Magiel Black`,
              source: `custom`,
              style: `normal`,
              uiFamilyName: `Magiel`,
              url: `/fonts/magiel-black.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Magiel`,
              source: `builtIn`,
              style: `normal`,
              uiFamilyName: `Magiel`,
              url: `/fonts/magiel.woff`,
              weight: `900`,
            },
          ],
        },
        ...Nf,
        ...Pf,
        ...Ff,
        ...Lf,
        ...Rf,
        ...zf,
        ...Bf,
        ...Vf,
        ...Hf,
        ...Uf,
        ...Wf,
        ...Gf,
        ...Kf,
        ...qf,
        ...Jf,
        ...Yf,
        ...Xf,
        ...Zf,
        ...$f,
        ...M($e),
        ...M(rt),
        ...M(Ve),
      ],
      { supportsExplicitInterCodegen: !0 },
    ),
    (hp.loader = {
      load: (e, t) =>
        ne(
          [
            () => k(Ge, {}, t),
            () => k(ho, {}, t),
            () => k(hc, {}, t),
            () => k(gu, {}, t),
            () => k(vf, {}, t),
            () => k(mi, {}, t),
            () => k(pn, {}, t),
            () => k(Ie, {}, t),
            () => k(De, {}, t),
          ],
          t,
        ),
    }),
    (gp = {
      exports: {
        queryParamNames: {
          type: `variable`,
          annotations: { framerContractVersion: `1` },
        },
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerContractVersion: `1`,
            framerDisplayContentsDiv: `false`,
            framerAutoSizeImages: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerColorSyntax: `true`,
            framerResponsiveScreen: `true`,
            framerIntrinsicWidth: `1200`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"aYwBiDlS4":{"layout":["fixed","auto"]},"Z0imWIwn6":{"layout":["fixed","auto"]}}}`,
            framerScrollSections: `{"DEaHJElxX":{"pattern":":DEaHJElxX","name":"showreel"},"hFLTOHRJt":{"pattern":":hFLTOHRJt","name":"what-we-do"},"Tv4vvGym0":{"pattern":":Tv4vvGym0","name":"service"},"JWV_zjlZU":{"pattern":":JWV_zjlZU","name":"services"},"mhDWO3N8J":{"pattern":":mhDWO3N8J","name":"work-done"},"R0i3frOkI":{"pattern":":R0i3frOkI","name":"about-us-"},"jVHKELLdS":{"pattern":":jVHKELLdS","name":"get-in-touch-"},"HdiV0iD_v":{"pattern":":HdiV0iD_v","name":"footer"}}`,
            framerAcceptsLayoutTemplate: `true`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicHeight: `11047`,
            framerImmutableVariables: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { gp as __FramerMetadata__, hp as default, tp as queryParamNames };
//# sourceMappingURL=page-home.mjs.map
