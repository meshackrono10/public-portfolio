import { t as e } from "./runtime.mjs";
import {
  B as t,
  D as n,
  F as r,
  P as i,
  R as a,
  S as o,
  T as s,
  _ as c,
  a as l,
  b as u,
  d,
  i as f,
  k as p,
  l as m,
  n as h,
  o as g,
  p as _,
  r as v,
  s as ee,
  t as te,
  w as ne,
  y as re,
  z as ie,
} from "./react.mjs";
import { D as y, r as b, t as x } from "./motion.mjs";
import {
  Ct as S,
  Et as ae,
  H as oe,
  K as se,
  O as C,
  Ot as ce,
  U as w,
  V as le,
  W as T,
  Y as ue,
  Z as de,
  c as fe,
  d as pe,
  dt as E,
  et as me,
  gt as D,
  h as he,
  l as ge,
  lt as _e,
  m as ve,
  pt as O,
  rt as ye,
  s as be,
  tt as xe,
  ut as k,
  w as A,
  xt as Se,
  y as j,
} from "./framer.mjs";
var M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  Ce,
  we,
  Te,
  V,
  Ee = e(() => {
    (ee(),
      w(),
      x(),
      s(),
      (M = {
        HhmkKGbLW: `(min-width: 810px) and (max-width: 1199.98px)`,
        N15RFKXdD: `(max-width: 809.98px)`,
        SPKDetAQ6: `(min-width: 1200px)`,
      }),
      (N = `framer-JDJvg`),
      (P = {
        HhmkKGbLW: `framer-v-1mars2k`,
        N15RFKXdD: `framer-v-1k9qu5o`,
        SPKDetAQ6: `framer-v-11s3nph`,
      }),
      (F = {}),
      (I = Object.keys(F)),
      (L = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-JDJvg.framer-nfztqn, .framer-JDJvg .framer-nfztqn { display: block; }`,
        `.framer-JDJvg.framer-11s3nph { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-JDJvg .framer-1utgcug { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
      ]),
      (R = {
        HhmkKGbLW: `(min-width: 810px) and (max-width: 1199.98px)`,
        N15RFKXdD: `(max-width: 809.98px)`,
        SPKDetAQ6: `(min-width: 1200px)`,
      }),
      (z = { Desktop: `SPKDetAQ6`, Phone: `N15RFKXdD`, Tablet: `HhmkKGbLW` }),
      (B = ({ value: e }) =>
        O()
          ? null
          : g(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (Ce = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: z[r.variant] ?? r.variant ?? `SPKDetAQ6`,
      })),
      (we = _(function (e, t) {
        let n = u(null),
          r = t ?? n,
          i = ne(),
          { activeLocale: a, setLocale: o } = D(),
          {
            style: s,
            className: c,
            layoutId: l,
            variant: d,
            children: f,
            ...p
          } = Ce(e),
          [h, _] = E(d, M, !1),
          v = C(N);
        return (
          k({}),
          g(fe.Provider, {
            value: {
              activeVariantId: h,
              humanReadableVariantMap: z,
              isLayoutTemplate: !0,
              primaryVariantId: `SPKDetAQ6`,
              variantClassNames: P,
            },
            children: m(b, {
              id: l ?? i,
              children: [
                g(B, {
                  value: `:root body { background: rgb(255, 255, 255); }`,
                }),
                m(y.div, {
                  ...p,
                  className: C(v, `framer-11s3nph`, c),
                  "data-layout-template": !0,
                  ref: r,
                  style: { ...s },
                  children: [f, g(`div`, { className: `framer-1utgcug` })],
                }),
                g(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (Te = (e) =>
        e === j.canvas || e === j.export
          ? [
              ...L,
              ...I.flatMap((e) => {
                let t = F[e];
                return F[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...L, ...I.map((e) => `@media ${R[e]} { ${F[e].join(` `)} }`)]),
      (V = S(we, Te, `framer-JDJvg`)),
      (V.displayName = `Light-Background`),
      (V.defaultProps = { height: 1e3, width: 1200 }),
      A(V, [{ explicitInter: !0, fonts: [] }], {
        supportsExplicitInterCodegen: !0,
      }));
  }),
  De,
  Oe,
  ke,
  H,
  U,
  Ae,
  W,
  je,
  G,
  Me,
  Ne,
  Pe,
  Fe,
  K,
  Ie = e(() => {
    (ee(),
      w(),
      x(),
      s(),
      (De = {
        CKuu_UUgJ: `(min-width: 1200px)`,
        Whmphzt0X: `(min-width: 810px) and (max-width: 1199.98px)`,
        ZJ1bWxvO3: `(max-width: 809.98px)`,
      }),
      (Oe = `framer-dYpKI`),
      (ke = {
        CKuu_UUgJ: `framer-v-ap504g`,
        Whmphzt0X: `framer-v-1v2l7ut`,
        ZJ1bWxvO3: `framer-v-qnm5oj`,
      }),
      (H = {
        ZJ1bWxvO3: [
          `.framer-dYpKI.framer-ap504g { background-color: #000000; overflow: var(--overflow-clip-fallback, clip); }`,
        ],
      }),
      (U = Object.keys(H)),
      (Ae = { ZJ1bWxvO3: `.framer-qnm5oj-override` }),
      (W = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-dYpKI.framer-1nq850i, .framer-dYpKI .framer-1nq850i { display: block; }`,
        `.framer-dYpKI.framer-ap504g { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-dYpKI .framer-r7vawf { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
      ]),
      (je = {
        CKuu_UUgJ: `(min-width: 1200px)`,
        Whmphzt0X: `(min-width: 810px) and (max-width: 1199.98px)`,
        ZJ1bWxvO3: `(max-width: 809.98px)`,
      }),
      (G = { Desktop: `CKuu_UUgJ`, Phone: `ZJ1bWxvO3`, Tablet: `Whmphzt0X` }),
      (Me = ({ value: e }) =>
        O()
          ? null
          : g(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (Ne = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: G[r.variant] ?? r.variant ?? `CKuu_UUgJ`,
      })),
      (Pe = _(function (e, t) {
        let n = u(null),
          r = t ?? n,
          i = ne(),
          { activeLocale: a, setLocale: o } = D(),
          {
            style: s,
            className: c,
            layoutId: l,
            variant: d,
            children: f,
            ...p
          } = Ne(e),
          [h, _] = E(d, De, !1),
          v = C(Oe);
        return (
          k({}),
          g(fe.Provider, {
            value: {
              activeVariantId: h,
              humanReadableVariantMap: G,
              isLayoutTemplate: !0,
              primaryVariantId: `CKuu_UUgJ`,
              variantClassNames: ke,
            },
            children: m(b, {
              id: l ?? i,
              children: [
                g(Me, {
                  value: `:root body { background: rgb(255, 255, 255); } @media (max-width: 809.98px) { :root body { background: rgb(0, 0, 0); } }`,
                }),
                m(y.div, {
                  ...p,
                  className: C(v, `framer-ap504g`, c),
                  "data-layout-template": !0,
                  ref: r,
                  style: { ...s },
                  children: [f, g(`div`, { className: `framer-r7vawf` })],
                }),
                g(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (Fe = (e) =>
        e === j.canvas || e === j.export
          ? [
              ...W,
              ...U.flatMap((e) => {
                let t = Ae[e];
                return H[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...W, ...U.map((e) => `@media ${je[e]} { ${H[e].join(` `)} }`)]),
      (K = S(Pe, Fe, `framer-dYpKI`)),
      (K.displayName = `Main`),
      (K.defaultProps = { height: 1e3, width: 1200 }),
      A(K, [{ explicitInter: !0, fonts: [] }], {
        supportsExplicitInterCodegen: !0,
      }));
  });
function Le({ webPageId: e, children: t, style: n, ...r }) {
  let i = {}[e] ?? {};
  switch (e) {
    case `augiA20Il`:
      return d(K, { ...i, key: `Main`, style: n }, t(!0));
    case `cxR3EcTsQ`:
    case `ki2rFlCNJ`:
    case `Nnz01J6sm`:
    case `XGbLixgbp`:
    case `oXOuO6LXx`:
    case `XfaahhwnV`:
    case `gtoVYjlJq`:
    case `UndUTFxd1`:
    case `PlspbUckK`:
    case `Me0PG4r_e`:
    case `BkbCN2BJk`:
    case `XPdkbNIcN`:
    case `tzUpUwjFj`:
    case `R3ke5TPEo`:
    case `aASpJzCsP`:
      return d(V, { ...i, key: `LightBackground`, style: n }, t(!0));
    default:
      return t(!1);
  }
}
function Re(e) {
  switch (e) {
    case `augiA20Il`:
      return [
        { hash: `qnm5oj`, mediaQuery: `(max-width: 809.98px)` },
        {
          hash: `1v2l7ut`,
          mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)`,
        },
        { hash: `ap504g`, mediaQuery: `(min-width: 1200px)` },
      ];
    case `cxR3EcTsQ`:
    case `ki2rFlCNJ`:
    case `Nnz01J6sm`:
    case `XGbLixgbp`:
    case `oXOuO6LXx`:
    case `XfaahhwnV`:
    case `gtoVYjlJq`:
    case `UndUTFxd1`:
    case `PlspbUckK`:
    case `Me0PG4r_e`:
    case `BkbCN2BJk`:
    case `XPdkbNIcN`:
    case `tzUpUwjFj`:
    case `R3ke5TPEo`:
    case `aASpJzCsP`:
      return [
        { hash: `1k9qu5o`, mediaQuery: `(max-width: 809.98px)` },
        {
          hash: `1mars2k`,
          mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)`,
        },
        { hash: `11s3nph`, mediaQuery: `(min-width: 1200px)` },
      ];
    default:
      return;
  }
}
async function ze({
  routeId: e,
  pathVariables: i,
  canonicalPathVariables: a,
  localeId: s,
  collectionItemId: l,
  contentLocaleId: m,
  shouldResolveInitialRouteContentState: h = !1,
}) {
  let g = J[e].page.preload();
  (xe({
    checkServerSideRouter: !0,
    disableCustomCode: !1,
    disableHoverOnMobile: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageRichTextBlockSelection: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  }),
    me(Z));
  let _ = d(ve, {
    children: d(ge, {
      children: d(he, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: i,
        canonicalPathVariables: a,
        routes: J,
        collectionUtils: X,
        serverDatabaseClient: Ve,
        framerSiteId: Z,
        notFoundPage: T(() => import(`./page-not-found.mjs`)),
        isReducedMotion: !0,
        localeId: s,
        locales: Y,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://meshack.dev`,
        EditorBar: void 0,
        adaptLayoutToTextDirection: !0,
        LayoutTemplate: Le,
        loadSnippetsModule: new pe(() => import(`./component-snippets.mjs`)),
        initialCollectionItemId: l,
        initialContentLocaleIdOverride: m,
      }),
    }),
    value: { routes: {} },
  });
  return (await g, _);
}
function Be() {
  Q && t.__framer_events.push(arguments);
}
async function q(e, n) {
  function r(e, n, r = !0) {
    if (e.caught || t.__framer_hadFatalError) return;
    let i = n?.componentStack;
    if (r) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          i,
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        i,
      );
    Be(
      r ? `published_site_load_recoverable_error` : `published_site_load_error`,
      {
        message: String(e),
        componentStack: i,
        stack: i
          ? void 0
          : e instanceof Error && typeof e.stack == `string`
            ? e.stack
            : null,
      },
    );
  }
  try {
    let a, o, s, c, l, u, d;
    if (e)
      ((d = JSON.parse(n.dataset.framerHydrateV2)),
        (a = d.routeId),
        (o = d.localeId),
        (s = d.contentLocaleId),
        (c = d.pathVariables),
        (l = d.canonicalPathVariables),
        (u = d.breakpoints),
        (a = ue(J, a)));
    else {
      ue(J, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((a = t.get(`id`)), (o = t.get(`locale`)));
        for (let [e, n] of t.entries())
          e.startsWith(`var.`) && ((c ??= {}), (c[e.slice(4)] = n));
      }
      if (!a || !o) {
        let e = le(J, decodeURIComponent(location.pathname), !0, Y);
        ((a = e.routeId), (o = e.localeId), (c = e.pathVariables));
      }
    }
    let f = ze({
      routeId: a,
      localeId: o,
      contentLocaleId: s,
      pathVariables: c,
      canonicalPathVariables: l,
      collectionItemId: e ? d?.collectionItemId : void 0,
      shouldResolveInitialRouteContentState: !e,
    });
    t !== void 0 &&
      (async () => {
        let e = J[a],
          n = Y.find(({ id: e }) => (o ? e === o : e === "default")).code,
          r = d?.collectionItemId ?? null;
        if (r === null && e?.collectionId && X) {
          let t = await X[e.collectionId]?.(),
            [i] = Object.values(c);
          t &&
            typeof i == `string` &&
            (r = (await t.getRecordIdBySlug(i, n || void 0)) ?? null);
        }
        let i = Intl.DateTimeFormat().resolvedOptions(),
          s = i.timeZone,
          l = i.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          t.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: Z,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: r,
              framerLocale: n || null,
              webPageId: e?.abTestingVariantId ?? a,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: t.location.href,
              hostname: t.location.hostname || null,
              pathname: t.location.pathname || null,
              hash: t.location.hash || null,
              search: t.location.search || null,
              timezone: s,
              locale: l,
            },
            `eager`,
          ]),
          await ce({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, {
              detail: { framerLocale: n || null },
            }),
          ));
      })();
    let p = await f;
    e
      ? (ae(`framer-rewrite-breakpoints`, () => {
          (de(u), t.__framer_onRewriteBreakpoints?.(u));
        }),
        ($ ? (e) => e() : i)(() => {
          (se(), ye(), te(n, p, { onRecoverableError: r }));
        }))
      : v(n, { onRecoverableError: r }).render(p);
  } catch (e) {
    throw (r(e, void 0, !1), e);
  }
}
var J, Y, X, Ve, Z, Q, $;
e(() => {
  if (
    (a(),
    w(),
    s(),
    l(),
    h(),
    Ee(),
    Ie(),
    (J = {
      augiA20Il: {
        elements: {
          DEaHJElxX: `showreel`,
          HdiV0iD_v: `footer`,
          hFLTOHRJt: `what-we-do`,
          jVHKELLdS: `get-in-touch-`,
          JWV_zjlZU: `services`,
          mhDWO3N8J: `work-done`,
          R0i3frOkI: `about-us-`,
          Tv4vvGym0: `service`,
        },
        page: T(() => import(`./page-home.mjs`)),
        path: `/`,
      },
      cxR3EcTsQ: {
        elements: { ee21RFGKD: `get-in-touch-dark`, xFiwqzKvc: `footer-light` },
        page: T(() => import(`./page-about-us.mjs`)),
        path: `/about-us`,
      },
      ki2rFlCNJ: {
        elements: {
          NlFRBqz_c: `service-02-dark`,
          sxgLGXE16: `get-in-touch-dark`,
          tIrcgT5AS: `footer-light`,
        },
        page: T(() => import(`./page-service-event-brand.mjs`)),
        path: `/services/event-brand-experiences`,
      },
      Nnz01J6sm: {
        elements: {
          ENA4kZJJS: `service-02-dark`,
          m6Pf84Vc4: `get-in-touch-dark`,
          oxoLKBst3: `footer-light`,
        },
        page: T(() => import(`./page-service-brand-arch.mjs`)),
        path: `/services/brand-architecture`,
      },
      XGbLixgbp: {
        elements: {
          NhN_dOXH7: `footer-light`,
          r1KpbDqeC: `get-in-touch-dark`,
          Yu2xEfOf_: `service-02-dark`,
        },
        page: T(() => import(`./page-service-interior-design.mjs`)),
        path: `/services/interior-and-spatial-design`,
      },
      oXOuO6LXx: {
        elements: {
          go09BW6Fi: `footer-light`,
          vhyr2oDA2: `get-in-touch-dark`,
          zzTXJ33dD: `service-02-dark`,
        },
        page: T(() => import(`./page-service-retail.mjs`)),
        path: `/services/retail-hospitality`,
      },
      XfaahhwnV: {
        elements: {
          B2KLevGsH: `get-in-touch-dark`,
          ICLjvKOzW: `footer-light`,
          iHjYkunB8: `service-02-dark`,
        },
        page: T(() => import(`./page-service-workplace.mjs`)),
        path: `/services/workplace-new-work`,
      },
      gtoVYjlJq: {
        elements: {
          KA_klgbXE: `footer-light`,
          kmPq20wOm: `service-02-dark`,
          S7U5TvnDw: `get-in-touch-dark`,
        },
        page: T(() => import(`./page-service-brand-activation.mjs`)),
        path: `/services/brand-product-activation`,
      },
      UndUTFxd1: {
        elements: {
          g1fdvujbW: `get-in-touch-dark`,
          laQcz_ikR: `footer-light`,
          w1_XxI7CC: `service-02-dark`,
        },
        page: T(() => import(`./page-service-strategy.mjs`)),
        path: `/services/strategy-consulting`,
      },
      PlspbUckK: {
        elements: {
          jG4SAdPQt: `about-us-light`,
          uxpJ7GBtw: `get-in-touch-dark`,
          yrQiByRrP: `footer-light`,
        },
        page: T(() => import(`./page-imprint.mjs`)),
        path: `/imprint`,
      },
      Me0PG4r_e: {
        elements: {
          BxLNOMAhK: `footer-light`,
          j7TGcfgow: `get-in-touch-dark`,
          yFBx0kgki: `about-us-light`,
        },
        page: T(() => import(`./page-privacy-policy.mjs`)),
        path: `/privacy-policy`,
      },
      BkbCN2BJk: {
        elements: {
          BAJm6RTvg: `footer`,
          p0HoZqNTk: `get-in-touch-`,
          Pht4gBbFY: `about-us-`,
        },
        page: T(() => import(`./page-work.mjs`)),
        path: `/work`,
      },
      R3ke5TPEo: {
        collectionId: `R2jsuapbg`,
        elements: { BRGyB2iMQ: `get-in-touch-dark`, nOtZE71Fp: `footer-light` },
        page: T(() => import(`./page-project-detail.mjs`)),
        path: `/projects/:qD3idoXBI`,
      },
    }),
    (Y = [
      {
        code: `en`,
        id: `default`,
        name: `English`,
        slug: ``,
        textDirection: `ltr`,
      },
    ]),
    (X = {
      GL1a_KYaP: async () =>
        (await import(`./collection-services.mjs`).then((e) => (e.n(), e.t)))
          ?.utils,
      R2jsuapbg: async () =>
        (await import(`./collection-projects-utils.mjs`))?.utils,
      ZQ5zvsJhD: async () =>
        (await import(`./collection-categories.mjs`))?.utils,
    }),
    (Ve = void 0),
    (Z = `a4883acc0c3d160ec876460dcfebec8e5037eb66b9f5d0e0f14e1840f04a59ba`),
    (Q = typeof document < `u`),
    ($ =
      Q &&
      /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(
        ie.userAgent,
      )),
    Q)
  ) {
    ((t.__framer_importFromPackage = (e, t) => () =>
      d(be, {
        error: `Package component not supported: "` + t + `" in "` + e + `"`,
      })),
      (t.__framer_events = t.__framer_events || []),
      oe());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? q(!0, e) : q(!1, e);
  }
})();
export { Re as getLayoutTemplateBreakpoints, ze as getPageRoot };
//# sourceMappingURL=main.mjs.map
