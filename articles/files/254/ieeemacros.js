/* -*- Mode: Javascript; indent-tabs-mode:nil; js-indent-level: 2 -*- *//* this file is version 1.8 revised 8-10-2016 by Dave *//* History *//* 5-9-2016 added macro \boxast (from St. Mary font pkg) *//* 6-14-2016 added macro \Sha and \sha cyrillic characters *//* 8-2-2016 added macro \cox for circle with diamond TAC2593947 *//* 8-10-2016 added macro \phase for ICIP Conference articles */
/* vim: set ts=2 et sw=2 tw=80: */

/*
 * Depending on your local configuration, this file should be installed in either:
 *
 * <mathjax>/extensions/TeX
 * <mathjax>/unpacked/extensions/TeX
 *
 * and should replace any macros defined in default.js.
 *
 * To reference this file from default.js, add to the extensions array, as in:
 *
 * extensions: ["tex2jax.js","TeX/AMSmath.js","TeX/AMSsymbols.js","TeX/ieeemacros.js"],
 *
 */

MathJax.Extension["TeX/ieeemacros"] = {
  version: "1.8"
};

MathJax.Hub.Register.StartupHook("TeX Jax Ready",function () {
  var TEX = MathJax.InputJax.TeX,
      MML = MathJax.ElementJax.mml,
      STACKITEM = TEX.Stack.Item,
      IEEE = MathJax.Extension["TeX/ieeemacros"];

  /*
   * Extension to keep IEEE macros out of MathJax code.
   */

  //
  //  DPVC:  I have made corrections to these, but left the originals
  //   as comments predceeding the corrected versions.  Some corrections
  //   are to simplify the definitions (e.g., no need to use an argument
  //   just to pass it again at the end of the macro).  
  //   Dave Starbuck re-wrote macros to correct constructs.
  TEX.Definitions.Add({
    macros: {      eqno: ["Macro","\\tag*{$#1$}", 1],       AA: ["Macro","\\unicode[serif]{x212B}"],       BBA: ["Macro","{\\Bbb A}"],       BBB: ["Macro","{\\Bbb B}"],       BBC: ["Macro","{\\Bbb C}"],       BBD: ["Macro","{\\Bbb D}"],       BBE: ["Macro","{\\Bbb E}"],       BBF: ["Macro","{\\Bbb F}"],       BBG: ["Macro","{\\Bbb G}"],       BBH: ["Macro","{\\Bbb H}"],       BBI: ["Macro","{\\Bbb I}"],       BBJ: ["Macro","{\\Bbb J}"],       BBK: ["Macro","{\\Bbb K}"],       BBL: ["Macro","{\\Bbb L}"],       BBM: ["Macro","{\\Bbb M}"],       BBN: ["Macro","{\\Bbb N}"],       BBO: ["Macro","{\\Bbb O}"],       BBP: ["Macro","{\\Bbb P}"],       BBQ: ["Macro","{\\Bbb Q}"],       BBR: ["Macro","{\\Bbb R}"],       BBS: ["Macro","{\\Bbb S}"],       BBT: ["Macro","{\\Bbb T}"],       BBU: ["Macro","{\\Bbb U}"],       BBV: ["Macro","{\\Bbb V}"],       BBW: ["Macro","{\\Bbb W}"],       BBX: ["Macro","{\\Bbb X}"],       BBY: ["Macro","{\\Bbb Y}"],       BBZ: ["Macro","{\\Bbb Z}"],       bb: ["Macro","\\mathbb"],       BB: ["Macro","\\mathbb"],              circone: ["Macro","\\unicode{x2460}"],       circtwo: ["Macro","\\unicode{x2461}"],       circthree: ["Macro","\\unicode{x2462}"],       circfour: ["Macro","\\unicode{x2463}"],       circfive: ["Macro","\\unicode{x2464}"],       circsix: ["Macro","\\unicode{x2465}"],       circseven: ["Macro","\\unicode{x2466}"],       circeight: ["Macro","\\unicode{x2467}"],       circnine: ["Macro","\\unicode{x2468}"],       circit: ["Macro","\\bigcirc \\kern-.7em{\\scriptstyle{#1}}\\hskip4pt", 1],       textcircled: ["Macro","\\bigcirc \\kern-.7em{\\scriptstyle{#1}}\\hskip4pt", 1],       circa: ["Macro","\\unicode{x24D0}"],       circb: ["Macro","\\unicode{x24D1}"],       circc: ["Macro","\\unicode{x24D2}"],       circd: ["Macro","\\unicode{x24D3}"],       circled: ["Macro","\\unicode{x24D3}"],       circe: ["Macro","\\unicode{x24D4}"],       circf: ["Macro","{\\unicode{x24D5}}"],       circg: ["Macro","{\\unicode{x24D6}}"],       circh: ["Macro","{\\unicode{x24D7}}"],       circi: ["Macro","\\unicode{x24D8}"],       circk: ["Macro","{\\unicode{x24DA}}"],       circl: ["Macro","{\\unicode{x24DB}}"],       circm: ["Macro","{\\unicode{x24DC}}"],       circlem: ["Macro","\\unicode{x24DC}"],       circn: ["Macro","{\\unicode{x24DD}}"],       circo: ["Macro","\\unicode{x24DE}"],       circp: ["Macro","\\unicode{x24DF}"],
              circq: ["Macro","{\\unicode{x24E0}}"],       circr: ["Macro","{\\unicode{x24E1}}"],       circs: ["Macro","\\unicode{x24E2}"],       circv: ["Macro","\\unicode{x24E5}"],
              circw: ["Macro","\\unicode{x24E6}"],
       circy: ["Macro","{\\unicode{x24E8}}"],       circz: ["Macro","{\\unicode{x24E9}}"],       circA: ["Macro","\\unicode{x24B6}"],       circB: ["Macro","\\unicode{x24B7}"],
              circC: ["Macro","\\unicode{x24B8}"],       circD: ["Macro","\\unicode{x24B9}"],
              circE: ["Macro","{\\unicode{x24BA}}"],       circF: ["Macro","{\\unicode{x24BB}}"],       circG: ["Macro","{\\unicode{x24BC}}"],       
circleH: ["Macro","\\unicode{x24BD}"],       circI: ["Macro","{\\unicode{x24BE}}"],       circJ: ["Macro","{\\unicode{x24BF}}"],       circL: ["Macro","{\\unicode{x24C1}}"],       circM: ["Macro","\\unicode{x24C2}"],       circO: ["Macro","{\\unicode{x24C4}}"],       circP: ["Macro","{\\unicode{x24C5}}"],       circR: ["Macro","\\unicode{x24C7}"],
              circS: ["Macro","\\unicode{x24C8}"],
              circT: ["Macro","{\\unicode{x24C9}}"],       circU: ["Macro","\\unicode{x24CA}"],
              circV: ["Macro","{\\unicode{x24CB}}"],       circX: ["Macro","\\unicode{x24CD}"],
              circY: ["Macro","{\\unicode{x24CE}}"],       circZ: ["Macro","{\\unicode{x24CF}}"],       circast: ["Macro","\\unicode{x229B}"],       Zhe: ["Macro","\\unicode{x0416}"],       owedge: ["Macro","\\bigcirc \\kern-1em \\wedge"],       female: ["Macro","{\\unicode{x2640}}"],       boxast: ["Macro","\\unicode{x29C6}"],
       bold: ["Macro","{\\bf{#1}}", 1],        mathbi: ["Macro","\\boldsymbol"],       mbi: ["Macro","\\boldsymbol"],       schmi: ["Macro","\\boldsymbol"],       mmb: ["Macro","{\\boldsymbol #1}", 1],       bm: ["Macro","\\pmb{#1}", 1],       bmit: ["Macro","\\boldsymbol"],       ssr: ["Macro","\\sf"],              boldGamma: ["Macro","\\boldsymbol{\\Gamma}"],       Deltab: ["Macro","\\boldsymbol{\\Delta}"],       Gammab: ["Macro","\\boldsymbol{\\Gamma}"],       Lambdab: ["Macro","\\boldsymbol{\\Lambda}"],       Psib: ["Macro","\\boldsymbol{\\Psi}"],       Sigmab: ["Macro","\\boldsymbol{\\Sigma}"],       Thetab: ["Macro","\\boldsymbol{\\Theta}"],       Upsilonb: ["Macro","\\boldsymbol{\\Upsilon}"],              alphab: ["Macro","\\boldsymbol{\\alpha}"],       betab: ["Macro","\\boldsymbol{\\beta}"],       chib: ["Macro","\\boldsymbol{\\chi}"],       deltab: ["Macro","\\boldsymbol{\\delta}"],       epsilonb: ["Macro","\\boldsymbol{\\epsilon}"],       etab: ["Macro","\\boldsymbol{\\eta}"],       gammab: ["Macro","\\boldsymbol{\\gamma}"],       iotab: ["Macro","\\boldsymbol{\\iota}"],       lambdab: ["Macro","\\boldsymbol{\\lambda}"],       mub: ["Macro","\\boldsymbol{\\mu}"],       nub: ["Macro","\\boldsymbol{\\nu}"],       omegab: ["Macro","\\boldsymbol{\\omega}"],       phib: ["Macro","\\boldsymbol{\\phi}"],       pib: ["Macro","\\boldsymbol{\\pi}"],       psib: ["Macro","\\boldsymbol{\\psi}"],       rhob: ["Macro","\\boldsymbol{\\rho}"],       sharpb: ["Macro","\\boldsymbol{\\sharp}"],       sigmab: ["Macro","\\boldsymbol{\\sigma}"],       taub: ["Macro","\\boldsymbol{\\tau}"],       thetahatb: ["Macro","\\boldsymbol{\\hat{\\theta}}"],       thetab: ["Macro","\\boldsymbol{\\theta}"],       upsilonb: ["Macro","\\boldsymbol{\\upsilon}"],       varepsilonb: ["Macro","\\boldsymbol{\\varepsilon}"],       varphib: ["Macro","\\boldsymbol{\\varphi}"],       varpib: ["Macro","\\boldsymbol{\\varpi}"],       varrhob: ["Macro","\\boldsymbol{\\varrho}"],       varsigmab: ["Macro","\\boldsymbol{\\varsigma}"],       varthetab: ["Macro","\\boldsymbol{\\vartheta}"],       xib: ["Macro","\\boldsymbol{\\xi}"],       zetab: ["Macro","\\boldsymbol{\\zeta}"],       Lambdabmit: ["Macro","\\boldsymbol{\\Lambda}"],       Omegab: ["Macro","\\boldsymbol{\\Omega}"],       Psibmit: ["Macro","\\boldsymbol{\\Psi}"],       Sigmabmit: ["Macro","\\boldsymbol{\\Sigma}"],       Thetabmit: ["Macro","\\boldsymbol{\\Theta}"],       Xibmit: ["Macro","\\boldsymbol{\\Xi}"],       i: ["Macro","\\unicode{x131}"],       permil: ["Macro","\\unicode{x2030}"],       lambdabar: ["Macro","\\unicode{x207B}\\kern -.30em \\lambda"],       coloneqq: ["Macro","\\unicode{x2254}"],       cox: ["Macro","\\raise1.5pt{\\scriptsize\\unicode{x25EF}\\kern -0.80em\\unicode{x25C7}}\\normalsize"],       phase: ["Macro","\\enclose{phasorangle}{#1}",1],       mathacute: ["Macro","\\acute"],       mathbreve: ["Macro","\\breve"],       mathcheck: ["Macro","\\check"],       mathdot: ["Macro","\\dot"],       mathddot: ["Macro","\\ddot"],       mathhat: ["Macro","\\hat"],       mathtilde: ["Macro","\\tilde"],       mathL: ["Macro","\\unicode{x141}"],       mathl: ["Macro","\\unicode{x142}"],                    REALE: ["Macro","{\\rm I\\kern-.20em E}"],       REALK: ["Macro","{\\rm I\\kern-.20em K}"],       REALN: ["Macro","{\\rm I\\kern-.20em N}"],       REALP: ["Macro","{\\rm I\\kern-.20em P}"],       REALR: ["Macro","{\\rm I\\kern-.20em R}"],       REALT: ["Macro","{\\rm I\\kern-.20em T}"],       REALONE: ["Macro","\\unicode[serif]{x1D7D9}"],       realone: ["Macro","\\unicode{x1D7D9}"],       bbalpha: ["Macro","\\shortmid\\kern -.57em\\unicode{x3B1}"],       bbbeta: ["Macro","|\\kern -.30em\\unicode{x3B2}"],       bblambda: ["Macro","\\unicode{x3BB}\\kern -.20em\\unicode{x005C}"],              
texttt: ["Macro","{\\tt\\text{#1}}", 1],       textbackslash: ["Macro","\\unicode{x005C}"],       textcent: ["Macro","\\unicode{x00A2}"],       textcurrency: ["Macro","\\unicode{x00A4}"],       textdegree: ["Macro","\\unicode{x00B0}"],       textdollar: ["Macro","\\unicode{x0024}"],       textexclamdown: ["Macro","\\unicode{x00A1}"],       textless: ["Macro","\\unicode{x003C}"],       textgreater: ["Macro","\\unicode{x003E}"],       textlbrackdbl: ["Macro","\\unicode{x27E6}"],       textnumero: ["Macro","\\unicode{x2116}"],       textperthousand: ["Macro","\\unicode{x2030}"],       textquestiondown: ["Macro","\\unicode{x00BF}"],       textquotedbl: ["Macro","\\unicode{x0022}"],       textquotedblleft: ["Macro","\\unicode{x201C}"],       textquotedblright: ["Macro","\\unicode{x201D}"],       textrbrackdbl: ["Macro","\\unicode{x27E7}"],       textregistered: ["Macro","\\unicode{x00AE}"],       textyen: ["Macro","\\unicode{x00A5}"],       textbullet: ["Macro","\\unicode{x00A5}"],       Mapsto: ["Macro","\\unicode{x2907}"],              boxaround: ["Macro","{\\boxed{#1}}", 1],       boxwrap: ["Macro","{\\boxed{#1}}", 1],       boxed: ["Macro","{\\fbox{$#1$}}", 1],       pounds: ["Macro","\\unicode[serif]{x00A3}"],       euro: ["Macro","\\unicode[serif]{x20AC}"],       pound: ["Macro","\\unicode[serif]{x00A3}"],       cent: ["Macro","\\unicode{x00A2}"],              arrowoncirc: ["Macro","{\\unicode{x21F4}}"],       arrowonoplus: ["Macro","\\unicode{x27F4}"],
       binary: ["Macro","{\\rm I\\kern -0.17em B}"],       blackbox: ["Macro","\\blacksquare"],       blackdiamond: ["Macro","\\unicode{x2666}"],       blackslug: ["Macro","\\unicode{x25AE}"],       blacktriangleup: ["Macro","\\blacktriangle"],       boxbox: ["Macro","\\unicode{x29C8}"],       boxslash: ["Macro","\\unicode{x29C4}"],       complex: ["Macro","\\unicode{x2102}"],       complexs: ["Macro","\\unicode{x2102}"],       copyright: ["Macro","\\unicode{x00A9}"],       csi: ["Macro","{\\iint\\kern-8pt\\raise1pt\\scriptscriptstyle{\\bigcirc}}"],       cupdot: ["Macro","\\unicode{x228D}"],       dag: ["Macro","\\dagger"],       ddag: ["Macro","\\ddagger"],       de: ["Macro","\\buildrel \\Delta \\over = "],       frbox: ["Macro","\\unicode{x2610}"],       harpr: ["Macro","{\\raise1pt\\hbox{$^{\\scriptscriptstyle\\rightharpoonup}$}\\kern-5.5pt r\\hskip1pt}"],       harpm: ["Macro","{\\raise1pt\\hbox{$^{\\scriptscriptstyle\\rightharpoonup}$}\\kern-5.5pt m\\hskip1pt}"],       harpk: ["Macro","{\\raise1pt\\hbox{$^{\\scriptscriptstyle\\rightharpoonup}$}\\kern-5.5pt k\\hskip1pt}"],       harpn: ["Macro","{\\raise1pt\\hbox{$^{\\scriptscriptstyle\\rightharpoonup}$}\\kern-5.5pt n\\hskip1pt}"],       hellip: ["Macro","\\unicode{x2026}"],       hilbert: ["Macro","{\\rm I\\kern -0.15em H}"],       lddots: ["Macro","\\unicode{x22F0}"],       ldquo: ["Macro","\\unicode{x201C}"],       leftarrowtriangle: ["Macro","\\unicode{x21FD}"],       leftmoon: ["Macro","\\unicode{x263E}"],       lhook: ["Macro","\\hookrightarrow"],       lq: ["Macro","\\unicode{x2018}"],       L: ["Macro","\\unicode{x141}"],       l: ["Macro","\\unicode{x142}"],       male: ["Macro","\\unicode{x2642}"],       mathoslash: ["Macro","\\unicode{x00F8}"],       mathOslash: ["Macro","\\unicode{x00D8}"],       minus: ["Macro","\\unicode{x2212}"],       ndash: ["Macro","\\unicode{x2212}"],       posinteger: ["Macro","{\\rm I\\kern -0.13em N}"],       precstar: ["Macro","{\\prec\\hskip-4pt{\\raise1.3pt{\\scriptscriptstyle{+}}}}"],       reallongarrow: ["Macro","\\longrightarrow"],       rightarrowtriangle: ["Macro","\\unicode{x21FE}"],       rightharpoon: ["Macro","\\unicode{x21C0}"],       rms: ["Macro","\\unicode{x24C7}"],       semaphorel: ["Macro","\\unicode{x25E9}"],       semaphorer: ["Macro","\\unicode{x25EA}"],
       slash: ["Macro","\\unicode{x2215}"],       squaredot: ["Macro","\\unicode{x22A1}"],       Squaredot: ["Macro","\\unicode{x2B1D}"],       Squarepipe: ["Macro","\\unicode{x25A1}"],       subsquare: ["Macro","{\\scriptscriptstyle\\square}"],       sun: ["Macro","\\unicode{x263C}"],       thorn: ["Macro","\\unicode{x00FE}"],       th: ["Macro","\\unicode{x00FE}"],       tr: ["Macro","\\mathop{\\rm tr}"],       wedgie: ["Macro","{\\raise2pt\\scriptstyle\\wedge}"],       ZED: ["Macro","\\sf{Z}\\hskip-4pt\\sf{Z}"],       baracc: ["Macro","\\unicode{x207B}"],       ss: ["Macro","\\unicode{x00DF}"],       O: ["Macro","\\unicode{x00D8}"],       upalpha: ["Macro","\\unicode{x03B1}"],       upbeta: ["Macro","\\unicode{x03B2}"],       upchi: ["Macro","\\unicode{x03C7}"],       updelta: ["Macro","\\unicode{x03B4}"],       upepsilon: ["Macro","\\unicode{x03F5}"],       upeta: ["Macro","\\unicode{x03B7}"],       upgamma: ["Macro","\\unicode{x03B3}"],       upiota: ["Macro","\\unicode{x03B9}"],       upkappa: ["Macro","\\unicode{x03BA}"],       uplambda: ["Macro","\\unicode{x03BB}"],       upmu: ["Macro","\\unicode{x03BC}"],       upnu: ["Macro","\\unicode{x03BD}"],       upomega: ["Macro","\\unicode{x03C9}"],       upphi: ["Macro","\\unicode{x03C6}"],       uppi: ["Macro","\\unicode{x03C0}"],       uppsi: ["Macro","\\unicode{x03C8}"],       uprho: ["Macro","\\unicode{x03C1}"],       upsigma: ["Macro","\\unicode{x03C3}"],       uptau: ["Macro","\\unicode{x03C4}"],       uptheta: ["Macro","\\unicode{x03B8}"],       upupsilon: ["Macro","\\unicode{x028A}"],       upvarepsilon: ["Macro","\\unicode{x03F5}"],       upvarphi: ["Macro","\\unicode{x03C6}"],       upvarpi: ["Macro","\\unicode{x03D6}"],       upvarrho: ["Macro","\\unicode{x03F1}"],       upvarsigma: ["Macro","\\unicode{x03C2}"],       upvartheta: ["Macro","\\unicode{x03D1}"],       upxi: ["Macro","\\unicode{x03BE}"],       upzeta: ["Macro","\\unicode{x03B6}"],       llbracket: ["Macro","\\unicode{x27E6}"],       rrbracket: ["Macro","\\unicode{x27E7}"],       icy: ["Macro","\\unicode{x00438}"],       oiint: ["Macro","{\\LARGE{\\unicode{x222F}}}"],       oiiint: ["Macro","{\\LARGE{\\unicode{x2230}}}"],       ocircle: ["Macro","\\unicode{x29BE}"],       indent: ["Macro","\\qquad"],       overparen: ['UnderOver','23DC'],       underparen: ['UnderOver','23DD'],       wideparen: ["Macro","\\overparen"],              Alpha: ["Macro","{\\rm A}"],       Beta: ["Macro","{\\rm B}"],       Epsilon: ["Macro","{\\rm E}"],       Kappa: ["Macro","{\\rm K}"],       Sha: ["Macro","\\unicode{x0428}"],       sha: ["Macro","\\unicode{x0448}"],              "break": ["Macro",""],       "null": ["Macro",""],       relax: ["Macro",""],       thickspace: ["Macro","{\\;}"],       operatornamewithlimits: ["Macro","\\mathop{#1}", 1],       sc: ["Macro","\\scriptsize{#1}\\normalsize", 1],       textsc: ["Macro","\\scriptsize{#1}\\normalsize", 1],
/* Don't use dsmath macros, use correct syntax \mathds{x} */       dsmathA: ["Macro","\\unicode[serif]{x1D538}"],       dsmathB: ["Macro","\\unicode[serif]{x1D539}"],       dsmathC: ["Macro","\\unicode[serif]{x02102}"],       dsmathD: ["Macro","\\unicode[serif]{x1D53B}"],       dsmathE: ["Macro","\\unicode[serif]{x1D53C}"],       dsmathF: ["Macro","\\unicode[serif]{x1D53D}"],       dsmathG: ["Macro","\\unicode[serif]{x1D53E}"],       dsmathH: ["Macro","\\unicode[serif]{x0210D}"],       dsmathI: ["Macro","\\unicode[serif]{x1D540}"],       dsmathJ: ["Macro","\\unicode[serif]{x1D541}"],       dsmathK: ["Macro","\\unicode[serif]{x1D542}"],       dsmathL: ["Macro","\\unicode[serif]{x1D543}"],       dsmathM: ["Macro","\\unicode[serif]{x1D544}"],       dsmathN: ["Macro","\\unicode[serif]{x02115}"],       dsmathO: ["Macro","\\unicode[serif]{x1D546}"],       dsmathP: ["Macro","\\unicode[serif]{x02119}"],       dsmathQ: ["Macro","\\unicode[serif]{x0211A}"],       dsmathR: ["Macro","\\unicode[serif]{x0211D}"],       dsmathS: ["Macro","\\unicode[serif]{x1D54A}"],       dsmathT: ["Macro","\\unicode[serif]{x1D54B}"],       dsmathU: ["Macro","\\unicode[serif]{x1D54C}"],       dsmathV: ["Macro","\\unicode[serif]{x1D54D}"],       dsmathW: ["Macro","\\unicode[serif]{x1D54E}"],       dsmathX: ["Macro","\\unicode[serif]{x1D54F}"],       dsmathY: ["Macro","\\unicode[serif]{x1D550}"],       dsmathZ: ["Macro","\\unicode[serif]{x02124}"],       dsmatha: ["Macro","\\unicode[serif]{x1D552}"],       dsmathb: ["Macro","\\unicode[serif]{x1D553}"],       dsmathc: ["Macro","\\unicode[serif]{x1D554}"],       dsmathd: ["Macro","\\unicode[serif]{x1D555}"],       dsmathe: ["Macro","\\unicode[serif]{x1D556}"],       dsmathf: ["Macro","\\unicode[serif]{x1D557}"],       dsmathg: ["Macro","\\unicode[serif]{x1D558}"],       dsmathh: ["Macro","\\unicode[serif]{x1D559}"],       dsmathi: ["Macro","\\unicode[serif]{x1D55A}"],       dsmathj: ["Macro","\\unicode[serif]{x1D55B}"],       dsmathk: ["Macro","\\unicode[serif]{x1D55C}"],       dsmathl: ["Macro","\\unicode[serif]{x1D55D}"],       dsmathm: ["Macro","\\unicode[serif]{x1D55E}"],       dsmathn: ["Macro","\\unicode[serif]{x1D55F}"],       dsmatho: ["Macro","\\unicode[serif]{x1D560}"],       dsmathp: ["Macro","\\unicode[serif]{x1D561}"],       dsmathq: ["Macro","\\unicode[serif]{x1D562}"],       dsmathr: ["Macro","\\unicode[serif]{x1D563}"],       dsmaths: ["Macro","\\unicode[serif]{x1D564}"],       dsmatht: ["Macro","\\unicode[serif]{x1D565}"],       dsmathu: ["Macro","\\unicode[serif]{x1D566}"],       dsmathv: ["Macro","\\unicode[serif]{x1D567}"],       dsmathw: ["Macro","\\unicode[serif]{x1D568}"],       dsmathx: ["Macro","\\unicode[serif]{x1D569}"],       dsmathy: ["Macro","\\unicode[serif]{x1D56A}"],       dsmathz: ["Macro","\\unicode[serif]{x1D56B}"],       dsmath1: ["Macro","\\unicode[serif]{x1D7D9}"],       dsmathtwo: ["Macro","\\unicode[serif]{x1D7DA}"],       dsmaththree: ["Macro","\\unicode[serif]{x1D7DB}"],       dsmathfour: ["Macro","\\unicode[serif]{x1D7DC}"],       dsmathfive: ["Macro","\\unicode[serif]{x1D7DD}"],       dsmathsix: ["Macro","\\unicode[serif]{x1D7DE}"],       dsmathseven: ["Macro","\\unicode[serif]{x1D7DF}"],       dsmatheight: ["Macro","\\unicode[serif]{x1D7E0}"],       dsmathnine: ["Macro","\\unicode[serif]{x1D7E1}"],       dsmathzero: ["Macro","\\unicode[serif]{x1D7D8}"],       /* Don't use bbmssmath, use correct syntax \mathbbmss{x} */       bbmssmathA: ["Macro","\\unicode{x1D538}"],       bbmssmathB: ["Macro","\\unicode{x1D539}"],       bbmssmathC: ["Macro","\\unicode{x02102}"],       bbmssmathD: ["Macro","\\unicode{x1D53B}"],       bbmssmathE: ["Macro","\\unicode{x1D53C}"],       bbmssmathF: ["Macro","\\unicode{x1D53D}"],       bbmssmathG: ["Macro","\\unicode{x1D53E}"],       bbmssmathH: ["Macro","\\unicode{x0210D}"],       bbmssmathI: ["Macro","\\unicode{x1D540}"],       bbmssmathJ: ["Macro","\\unicode{x1D541}"],       bbmssmathK: ["Macro","\\unicode{x1D542}"],       bbmssmathL: ["Macro","\\unicode{x1D543}"],       bbmssmathM: ["Macro","\\unicode{x1D544}"],       bbmssmathN: ["Macro","\\unicode{x02115}"],       bbmssmathO: ["Macro","\\unicode{x1D546}"],       bbmssmathP: ["Macro","\\unicode{x02119}"],       bbmssmathQ: ["Macro","\\unicode{x0211A}"],       bbmssmathR: ["Macro","\\unicode{x0211D}"],       bbmssmathS: ["Macro","\\unicode{x1D54A}"],       bbmssmathT: ["Macro","\\unicode{x1D54B}"],       bbmssmathU: ["Macro","\\unicode{x1D54C}"],       bbmssmathV: ["Macro","\\unicode{x1D54D}"],       bbmssmathW: ["Macro","\\unicode{x1D54E}"],       bbmssmathX: ["Macro","\\unicode{x1D54F}"],       bbmssmathY: ["Macro","\\unicode{x1D550}"],       bbmssmathZ: ["Macro","\\unicode{x02124}"],       bbmssmatha: ["Macro","\\unicode{x1D552}"],       bbmssmathb: ["Macro","\\unicode{x1D553}"],       bbmssmathc: ["Macro","\\unicode{x1D554}"],       bbmssmathd: ["Macro","\\unicode{x1D555}"],       bbmssmathe: ["Macro","\\unicode{x1D556}"],       bbmssmathf: ["Macro","\\unicode{x1D557}"],       bbmssmathg: ["Macro","\\unicode{x1D558}"],       bbmssmathh: ["Macro","\\unicode{x1D559}"],       bbmssmathi: ["Macro","\\unicode{x1D55A}"],       bbmssmathj: ["Macro","\\unicode{x1D55B}"],       bbmssmathk: ["Macro","\\unicode{x1D55C}"],       bbmssmathl: ["Macro","\\unicode{x1D55D}"],       bbmssmathm: ["Macro","\\unicode{x1D55E}"],       bbmssmathn: ["Macro","\\unicode{x1D55F}"],       bbmssmatho: ["Macro","\\unicode{x1D560}"],       bbmssmathp: ["Macro","\\unicode{x1D561}"],       bbmssmathq: ["Macro","\\unicode{x1D562}"],       bbmssmathr: ["Macro","\\unicode{x1D563}"],       bbmssmaths: ["Macro","\\unicode{x1D564}"],       bbmssmatht: ["Macro","\\unicode{x1D565}"],       bbmssmathu: ["Macro","\\unicode{x1D566}"],       bbmssmathv: ["Macro","\\unicode{x1D567}"],       bbmssmathw: ["Macro","\\unicode{x1D568}"],       bbmssmathx: ["Macro","\\unicode{x1D569}"],       bbmssmathy: ["Macro","\\unicode{x1D56A}"],       bbmssmathz: ["Macro","\\unicode{x1D56B}"],       bbmssmathzero: ["Macro","\\unicode{x1D7D8}"],       bbmssmathone: ["Macro","\\unicode{x1D7D9}"],       bbmssmathtwo: ["Macro","\\unicode{x1D7DA}"],       bbmssmaththree: ["Macro","\\unicode{x1D7DB}"],       bbmssmathfour: ["Macro","\\unicode{x1D7DC}"],       bbmssmathfive: ["Macro","\\unicode{x1D7DD}"],       bbmssmathsix: ["Macro","\\unicode{x1D7DE}"],       bbmssmathseven: ["Macro","\\unicode{x1D7DF}"],       bbmssmatheight: ["Macro","\\unicode{x1D7E0}"],       bbmssmathnine: ["Macro","\\unicode{x1D7E1}"],       bla: ["Macro","\\buildrel \\longrightarrow \\over {#1}", 1],       bra: ["Macro","\\buildrel \\longleftarrow \\over {#1}", 1],       dddots: ["Macro","\\mathop{#1}\\limits^{\\scriptstyle\\ldots}", 1],       doubleint:  ["Macro","\\iint_{#1}", 1],       enskip: ["Macro","\\enspace #1\\enspace", 1],       Fraktur: ["Macro","{\\frak #1}", 1],       fraktur: ["Macro","{\\frak #1}", 1],       joinrel: ["Macro","{\\mathrel{\\mkern-3.5pt} #1}", 1],       relbar: ["Macro","{\\mathrel{-}}"],       harp: ["Macro","\\buildrel \\scriptstyle\\rightharpoonup \\over #1", 1],       lilrvec: ["Macro","\\mathop{#1}\\limits^{\\scriptstyle\\leftrightarrow}", 1],       lrvec: ["Macro","\\mathop{#1}\\limits^{\\leftrightarrow}", 1],       overcat: ["Macro","\\mathop{#1}\\limits^{#2}", 2],       quaddot: ["Macro","{\\ddot{\\hskip-2.8pt\\ddot{#1}}}", 1],       stackvec: ["Macro","\\lilrvec{\\lilrvec{#1}}", 1],       ula: ["Macro","\\buildrel{#1}\\over{\\leftarrow}", 1],       underdog: ["Macro","\\mathop{#1}\\limits_{#2}", 2],       undertilde: ["Macro","{\\mathop{#1}\\limits_{\\unicode{x007E}}}", 1],       ura: ["Macro","\\buildrel{#1}\\over{\\rightarrow}", 1]    }
  });
  

  //
  //  Override some macros with custom versions
  //  and add support for additional ones.
  //
  TEX.Definitions.Add({
    macros: {
      eqalignno: "ieeeEqalignno",
      displaylines: "ieeeMatrix",
      matrix: "ieeeMatrix",
      vcenter: "ieeeVCenter",
      vrule: "ieeeVRule",
      halign: "ieeeHAlign",
      hfill: "ieeeHFill",
      noalign: "ieeeNoAlign",
      mathchar: "ieeeMathChar",
      mathaccent: "ieeeMathAccent",
      scases: ["Matrix", "", "", "left left", null, ".1em", null, true],
      ssi: ["SetFont",MML.VARIANT.SANSSERIFITALIC],
      ssb: ["SetFont",MML.VARIANT.BOLDSANSSERIF],
      sl:  ["SetFont",MML.VARIANT.ITALIC]              // not sure what you want this to be
    },
    environment: {
      scases: ["Array", null, "", ".", "ll", null, ".2em", "T"]
    }
  });
  
  TEX.config.MAXBUFFER *= 2;  // needed for really large tables

  //
  //  Pattern for vertcial rules of various kinds
  //
  var LEADERS = /^to *[0-9.,]*\\baselineskip\{[^}]*?\\vtop to *([0-9.,]+) *ex *\{(?:[^}]*?height *([0-9.,]+) *(ex|pt)[^{]*?|\\vss\\hbox\{\}\\vss)\} *\\vfill\}/;
  var NBSP = "\u00A0";

  TEX.Parse.Augment({
    //
    //  Override \eqalignno to provide support for \hfill by using
    //  the ieeeEqalignno stack item defined below
    //
    ieeeEqalignno: function (name) {
      var c = this.GetNext();
      if (c === "") {TEX.Error(["MissingArgFor","Missing argument for %1",name])}
      if (c === "{") {this.i++} else {this.string = c+"}"+this.string.slice(this.i+1); this.i = 0}
      var array = STACKITEM.ieeeEqalignno().With({
        requireClose: true,
        arraydef: {
          rowspacing: ".5em",
          columnspacing: MML.LENGTH.THICKMATHSPACE,
          columnalign: "right left",
          displaystyle: true
        }
      });
      this.Push(array);
    },

    //
    //  Override Matrix to support vertical and horizontal rules by
    //  using the ieeeMatrix stack item defined below
    //
    ieeeMatrix: function (name) {
      var c = this.GetNext();
      if (c === "") {TEX.Error(["MissingArgFor","Missing argument for %1",name])}
      if (c === "{") {this.i++} else {this.string = c+"}"+this.string.slice(this.i+1); this.i = 0}
      var array = STACKITEM.ieeeArray().With({
        requireClose: true,
        arraydef: {
          rowspacing: "4pt",
          columnspacing: "1em"
        }
      });
      if (name === "\\displaylines") {
        array.arraydef.rowspacing = ".5em";
        array.arraydef.displastyle = true;
      }
      this.Push(array);
    },
    
    //
    //  Override \vcenter to look for its special use as vertical lines
    //  (solid or dashed) in tables, and for special matrix layout that
    //  uses \halign.
    //
    ieeeVCenter: function (name) {
      var c = this.GetNext(), match, top;
      var string = this.string.slice(this.i).replace(/\n+/g," ");
      if (c === "t" && (match = string.match(LEADERS))) {
        //
        //  This is a vertical line (dahsed or solid or empty)
        //  so determine which from the sizes of the parts
        //
        this.i += match[0].length; top = this.stack.Top();
        if (match[1] != 0 && match[2] != 0 && top.type === "ieeeArray") {
          top.vRules[top.row.length] = 
            (match[1] > match[2] || match[3] === "pt" ? "dashed" : "solid");
        }
      } else if (c === "{" && string.match(/^\{[^{]*\\halign/)) {
        //
        //  This is a table using \halign, so remove the \halign
        //  and push the contents back onto the input string.
        //  If we aren't already in a matrix, add one around it.
        //  Check for \vrule in the template for the \hrule
        //
        string = this.GetArgument(name).replace(/.*?\\halign/,"");
        this.string = string + this.string.slice(this.i); this.i = 0;
        string = this.GetArgument("\\halign");
        match = string.match(/(.*?)\\cr/);
        string = string.slice(match[0].length).replace(/ *\\crcr */,"");
        top = this.stack.Top();
        var needsMatrix = (top.type !== "ieeeArray");
        if (needsMatrix) string = "{"+string+"}";
        this.string = string + this.string.slice(this.i); this.i = 0;
        if (needsMatrix) {this.ieeeMatrix("\\halign"); top = this.stack.Top()}
        top.cRules = CRULES(match[1]);
      } else {
        //
        // Just to a regular old \vcenter
        //
        this.TeXAtom(name,MML.TEXCLASS.VCENTER);
      }
    },
    
    //
    //  If there is a raw \halign (not in a \vcenter) remove the template
    //  and add a matrix around the content.  Check the template for
    //  \vrules.
    //  
    ieeeHAlign: function (name) {
      var arg = this.GetArgument(name);
      var match = arg.match(/(.*)\\cr/);
      arg = arg.replace(/.*?\\cr */,"").replace(/\\crcr/,"");
      this.string = "{"+arg+"}" + this.string.slice(this.i); this.i= 0;
      this.ieeeMatrix(name);
      this.stack.Top().cRules = CRULES(match[1]);
    },

    //
    //  Handle \hfill at the beginning or end of a table cell by listing
    //  all the \hfill's in the current cell.  This data is used by the
    //  EndEntry method of the stack items below.
    //  
    ieeeHFill: function (name) {
      var top = this.stack.Top();
      if (top.type === "ieeeArray") top.hFill.push(top.data.length);
    },
    
    //
    //  Handle \vrule within a table by recording the rule
    //  and ignore the \vrule otherwise
    //
    ieeeVRule: function (name) {
      var top = this.stack.Top();
      var match = this.string.slice(this.i).match(/^ *((height|width|depth) *([0-9.,]+pt) *)+/);
      if (match) this.i += match[0].length;
      if (top.type === "ieeeArray") top.vRules[top.row.length] = "solid";
    },

    //
    //  Handle \mathchar by looking up the character in a
    //  table of ones used (otherwise we'd need tables of data
    //  giving the TeX-font to unicode mapping).
    //
    ieeeMathChar: function (name) {
      var match = this.string.slice(this.i).match(/^ *(\d+|"[0-9A-F]+)/);
      if (!match) TEX.Error(name+" must be followed by a number");
      var def = ({
        123: ["mo","\u2212"],          // minus sign
        '"702D': ["mtext","-"],
        '"7027': ["mtext","'"],
        '"26': ["mtext","\u207B"],   // superscript minus
        '"705C': ["mtext","\u201C"],   // smart open double quote
        '"7022': ["mtext","\u201D"]    // smart close double quote
      })[match[1]];
      if (!def) TEX.Error("Unknown math character "+match[1]);
      this.i += match[0].length;
      this.Push(MML.TeXAtom(MML[def[0]](def[1])).With({texClass:MML.TEXCLASS.ORD}));
    },
    
    //
    //  Handle \mathaccent by looking up the accent in a table of
    //  ones know to be used (otherwise we need tables of data
    //  giving the TeX-font to unicode mappings).
    //  Dave Starbuck added to this list 2 items.
    ieeeMathAccent: function (name) {
      var match = this.string.slice(this.i).match(/^ *\^\{\\prime\\prime\} */);
      if (match) {this.string = '"' + this.string.slice(this.i+match[0].length); this.i = 0}
      match = this.string.slice(this.i).match(/^ *(\d+|"[0-9A-F]+)/);
      if (!match) TEX.Error(name+" must be followed by a number");
      var def = ({
        '"7017': ["mo","\u02DA"],
        '"717F': ["mo","\u2322"],
        '"017F': ["mo","\u2322"]
      })[match[1]];
      if (!def) TEX.Error("Unknonwn math accent "+match[1]);
      this.i += match[0].length;
      var arg = this.ParseArg(name);
      this.Push(MML.mover(arg,MML[def[0]](def[1])).With({accent:true}));
    },
    
    //
    //  Implement \noalign to insert a new row with the noalign content
    //  (Note that most special cases are handled in the prefilter below).
    //
    ieeeNoAlign: function (name) {
      var arg = this.GetArgument(name);
      if (arg.match(/ *\\hbox/)) arg += "\\cr ";
      this.string = arg + this.string.slice(this.i); this.i = 0;
    },
    
    //
    //  Handle special characters within \hbox{}
    //  
    InternalText: function (text,def) {
//
      //
      //  text is automatically in \rm so ignore that
      //  
      text = text.replace(/\\rm\s/g,"");
      //
      //  Remove first of double font changes
      //
      text = text.replace(/\\(?:sf|tt)\s\{(\\it|\\bf)/g,"\{$1");
      //
      //  Remove \hbox (already in an hbox)
      //
      text = text.replace(/\\hbox\s?/g,"");
      //
      //  Handle \rlap{I}\kern -.5pt\hbox{R} and similar constructs
      //
      var match = text.match(/^(\s*)\{?\\rlap\s*\{(.)\}\}?\\(?:kern|hskip)\s*(-?[0-9.]+\s*pt)\s*\{\{?(.)\}?,?\}$/);
      if (match) {
        return MML.mrow(
                 MML.mtext(match[1]+match[2]),
                 MML.mspace().With({width:match[3]}),
                 MML.mtext(match[4])
               );
      }
      //
      //  Remove negative \hskips
      //
      text = text.replace(/^\s*\\hskip\s*-?[0-9.]+ex\s*/,"");
      //
      //  Collapse initial and trailing spaces
      //
      text = text.replace(/^\s+/,NBSP).replace(/\s+$/,NBSP);
      //
      //  Convert ~, \(space), \thinspace, \enspace to a space
      //  Convert \; \, and \> to a space
      //  (all get to be the same size; could be more sophisticated about this)
      //
      text = text.replace(/~|\\\s|\\thinspace\s*|\\enspace\s*/g,NBSP);
      text = text.replace(/\\[;,>]/g,NBSP).replace(/\\!/g,"");
      //
      //  \quad becomes two spaces
      //
      text = text.replace(/\\quad/g,NBSP+NBSP);
      //
      //  \ast becomes *
      text = text.replace(/\\ast/g,"*");
      //
      //  \prime gets put back to ' like it should have been originally
      //
      text = text.replace(/\^\{\\prime\}/g,"\u2019").replace(/\^\{\\prime\\prime\}/g,"\u201D");
      text = text.replace(/\\prime/g,"\u2019");
      //
      //  Handle internal font changes
      //
      match = text.match(/^(.*?)\{\\(it|bf|cal|ssr)\{?(.*?)\}?\}(.*)$/);
      if (match) {
        return MML.mrow(
                 MML.mtext(match[1]),
                 MML.mtext(match[3]).With({mathvariant:({
                   it:MML.VARIANT.ITALICS, bf:MML.VARIANT.BOLD,
                   cal:"-tex-caligraphic", ssr:MML.VARIANT.SANSSERIF})[match[2]]}),
                 MML.mtext(match[4])
               );
      }
      //
      //  Remove braces
      //
      text = text.replace(/[{}]/g,"");
      //
      //  Convert \hfill and \hskip to a bunch of spaces
      //  (probably too many for an \hskip; that could be handled more carefully)
      //  and remove negative \hskip
      //
      text = text.replace(/\\hfill?|\\hskip *[0-9.]+(pt|ex|pc)/g,NBSP+NBSP+NBSP+NBSP+NBSP+NBSP+NBSP+NBSP);
      text = text.replace(/(\\kern|\\hskip) *-[0-9.]+(pt|pc|ex)/g,"");
      //
      //  Handle \% \_ \# \& \- \{ and \}
      //
      text = text.replace(/\\([%_#&-{}])/g,"$1");
      //
      //  Handle `` and `
      //
      text = text.replace(/``/g,"\u201C").replace(/`/g,"\u2018");
      //
      //  Handle \AA and \vdots (technically not allowed in \hbox)
      //
      if (text === "\\AA") text = "\u212B";
      if (text === "\\vdots") text = "\u22EE";
      //
      //  Handle font change at the beginning of the hbox
      //
      match = text.match(/^\s*\\(sf|it|tt|bf|scr|frak|cal|ssr|ssb|ssi|sl|Bbb|mbi)\s+/);
      if (match) {
        text = text.slice(match[0].length);
        def.mathvariant = ({
          sf: MML.VARIANT.SANSSERIF,
          it: MML.VARIANT.ITALICS,
          tt: MML.VARIANT.MONOSPACE,
          bf: MML.VARIANT.BOLD,
          scr: MML.VARIANT.SCRIPT,
          frak: MML.VARIANT.FRAKTUR,
          cal: "-tex-caligraphic",
          ssr: MML.VARIANT.SANSSERIF,
          ssb: MML.VARIANT.BOLDSANSSERIF,
          ssi: MML.VARIANT.SANSSERIFITALIC,
          sl: MML.VARIANT.ITALIC,
          Bbb: MML.VARIANT.DOUBLESTRUCK,
          mbi: MML.VARIANT.BOLDITALIC
        })[match[1]];
      }
      return MML.mtext(MML.chars(text)).With(def);
    }
  });

  //
  //  Look for \vrule in \halign templates
  //
  var CRULES = function (columns) {
    var rules = []; columns = columns.split(/&/);
    for (var i = 0, m = columns.length; i < m; i++) {
      if (columns[i].match(/#.*\\vrule/)) rules[i] = "solid";
      if (columns[i].match(/\\vrule.*#/)) rules[i-1] = "solid";
    }
    return rules;
  };
  
  //
  //  Subclass of array stack item for \eqalignno
  //  so that it handles mlabeledtr properly
  //
  STACKITEM.ieeeEqalignno = STACKITEM.array.Subclass({
    type: "ieeeEqalignno",
    EndRow: function () {
      var mtr = MML.mtr;
      if (this.row.length === 3) {
        this.row.unshift(this.row.pop());
        mtr = MML.mlabeledtr;
      }
      this.table.push(mtr.apply(MML,this.row));
      this.row = [];
    }
  });

  //
  //  Subclass of array stack item to handle vertical rules and \hfill for
  //  alignment of cells.  Also, remove negative skips at the edges of
  //  cells (mostly thes are used to adjust for the column spaces used by
  //  vertical lines, but not always, so this can remove useful space as
  //  well).
  //
  STACKITEM.ieeeArray = STACKITEM.array.Subclass({
    type: "ieeeArray",
    Init: function () {
      this.vRules = []; this.cRules = []; this.hFill = [];
      this.SUPER(arguments).Init.call(this);
    },
    EndEntry: function () {
      var cell, w;
      //
      //  Remove negative space at the end and beginning of the cells
      //
      for (i = this.data.length-1; i >= 0; i--) {
        cell = this.data[i]; w = (cell ? cell.Get("width",0) : 0);
        if (cell && cell.type === "mspace" && (w < 0 || String(w).substr(0,8) === "negative")) 
          {this.data.pop()} else {i = 0}
      }
      for (i = 0, m = this.data.length; i < m; i++) {
        cell = this.data[i]; w = (cell ? cell.Get("width",0) : 0);
        if (cell && cell.type === "mspace" && (w < 0 || String(w).substr(0,8) === "negative")) 
          {this.data.shift()} else {i = m}
      }
      //
      //  Adjust the alignment based on the \hfill's at the beginning and
      //  end of the cells
      //
      var mtd = MML.mtd.apply(MML,this.data);
      if (this.hFill.length) {
        if (this.hFill[0] === 0) mtd.columnalign = "right";
        if (this.hFill[this.hFill.length-1] === this.data.length)
          mtd.columnalign = (mtd.columnalign ? "center" : "left");
      }
      this.row.push(mtd); this.data = []; this.hFill = [];
    },
    checkLines: function () {
      var i, j, m, row, cell, M = 0;
      //
      //  Find the longest row
      //
      for (j = this.table.length-1; j >= 0; j--) M = Math.max(M,this.table[j].data.length);
      //
      //  If there are vertical rules ...
      //
      if (this.vRules.length) {
        //
        //  Remove tailing blank cells from each row.
        //  If the row is empty, remove it.
        //
        for (j = this.table.length-1; j >= 0; j--) {
          row = this.table[j];
          for (i = row.data.length-1; i >= 0; i--) {
            cell = row.data[i];
            if (cell && cell.data[0] && cell.data[0].data.length) break;
            row.data.pop();
          }
          if (row.data.length === 0) {
            this.table.splice(j,1);
            // This line below fixed by Davide C. 1/13/2015.// var lines = this.arraydef.rowlines.split(/ /);var lines = (this.arraydef.rowlines||"").split(/ /);
            var type = lines.splice(j-1,1);
            if (type !== "none") lines[j-1] = type;
            //  This line fixed by Davide C. 1/14/2015// this.arraydef.rowlines = lines.join(" ");            this.arraydef.rowlines = lines.join(" ").replace(/ *$/,"");            if (this.arraydef.rowlines === "") delete this.arraydef.rowlines;
          }
        }
        //
        //  Check for blank columns and remove them
        //  Record table rules inot the column array
        //
        for (i = M-1; i >= 0; i--) {
          var blank = true;
          for (j = this.table.length-1; blank && j >= 0; j--) {
            cell = this.table[j].data[i];
            if (cell && cell.data[0] && cell.data[0].data.length) blank = false;
          }
          if (blank) {
            for (j = this.table.length-1; j>= 0; j--) this.table[j].data.splice(i,1);
            this.cRules.splice(i,1); M--;
          }
          if (this.vRules[i]) this.cRules[i-1] = this.vRules[i];
        }
      }
      //
      //  Create the columnlines attribute for the table
      //
      if (this.cRules.length) {
        for (i = 0, m = this.cRules.length; i< m; i++)
          {if (this.cRules[i] == null) this.cRules[i] = "none"}
      }
      if (this.cRules[-1]) this.frame.push("left");
      if (this.cRules.length >= M) {this.frame.push("right"); this.cRules.pop()}
      if (this.cRules.length) this.arraydef.columnlines = this.cRules.join(" ") + " none";
      //
      //  Do the usual line check
      //
      this.SUPER(arguments).checkLines.call(this);
    }
  });
  
  TEX.prefilterHooks.Add(function (data) {
    //
    //  First, run any extra prefiltering
    ////   try {IEEE.prefilter(data)} catch (e) {console.log(e)}  // report errors, if any   var math = data.math;
    //
    //  Look for constructs that should be \hline or \hdashline
    //  (mostly \noalign{\hrule}, \multispan\xleaders or \multispan\hrulefill constructs)
    //  Also convert \cr\noalign{\vskip ...} to \\[...] and remove initial \vskip
    //
    math = math.replace(/\\noalign *\{(\\vskip *-?[0-9.,]+pt *)?\\hrule *(\\vskip *-?[0-9.,]+pt *)?\}/g,"\\hline ");
    math = math.replace(/(?:\\noalign *\{\\vskip *-?[0-9.,]+p[tc] *\})?\\multispan *(?:\{\d+\}|\d+) *(?:\\hrulefill *)*(?:\\cr *|(\}))(?:\\noalign *\{\\vskip *-?[0-9.,]+p[tc] *\})?/g,"\\hline $1");
    math = math.replace(/(?:\\noalign *\{\\vskip *-?[0-9.,]+p[tc] *\})?\\multispan *\{\d+\} *\\xleaders *\\hbox to *([0-9.,]+) *ex\{[^}]*?width *([0-9.,]+)(ex|pt).*?\\hfill *\\cr *(?:\\noalign *\{ *\\vskip *-?[0-9.,]+p[tc] *\})?/g,function (match,ex1,ex2,unit) {
      return (ex1 > ex2 || unit === "pt" ? "\\hdashline " : "\\hline ");
    });
    math = math.replace(/\\cr *\\noalign *\{ *\\vskip *(-?[0-9.,]+ *(pt|pc|ex)) *\}/g,"\\\\[$1]");
    math = math.replace(/\{ *\\noalign *\{ *\\vskip *(-?[0-9.,]+ *p[tc]) *\}/g,"{");
    math = math.replace(/(\\cr|\\\\\[-?[0-9.,]+ *pt\]) *\\hrulefill */g,"\\cr\\hline ");
    math = math.replace(/\{\\hrulefill *(\\cr|\\\\\[-?[0-9.,]+ *pt\]) */g,"{\\hline ");
    //
    //  Convert \noalign{\hbox{...}} to \hbox{...}\cr (adds a new row with the interline material -- best we can do)
    //
    math = math.replace(/\\noalign *\{ *(?:\\hskip *-?[0-9.,]+pt|\\qquad)* *\\hbox *\{([^{}]*?)\} *\}/g,"\\hbox{$1}\\cr ");
    //
    //  Handle \hfill\cr\hfill in \displaylines (add some actual space, since we don't
    //  extend the equations out to the margins, and that would be too much anyway).
    //
    if (math.match(/\\displaylines/)) {
      math = math.replace(/\\hfill *\\cr *\\noalign *\{ *\\vskip (-?[0-9.,]+pt) *\} *\\hfill/g,"\\hskip 6em\\hfill\\\\[$1]\\hfill\\hskip 6em ");
      math = math.replace(/\\hfill *\\cr *\\hfill/g,"\\hskip 6em\\hfill\\cr\\hfill\\hskip 6em ");
    }
    //
    //  Fix font references and remove ones that we don't recognize
    //
    math = math.replace(/\\font\\[a-zA-Z]* *= *cmssi10 */g,"\\sf ");
    math = math.replace(/\\font(\\[a-zA-Z]*) *= *[a-z0-9]+(?: at .*?pt)? *\{(\\hbox *\{) *\1 *(.*?)\}/g,"$2$3");
    math = math.replace(/\\font(\\[a-zA-Z]*) *= *[a-z0-9]+(?: at .*?pt)? *(\\hbox *\{) *\1 *(.*?)\}/g,"$2$3}");
    //
    //  Remove unneeded dolar signs from around \quad (in case statements)
    //
    math = math.replace(/\$\\quad *\$ *&/g,"\\quad\&");
    //
    //  Fix \eqno without braces
    //
    math = math.replace(/\\eqno *([^{}]*\\hbox *\{.*?\})/g,"\\eqno{$1}");
    math = math.replace(/\\eqno *([^{}]*\{\\hbox *\{.*?\} *\})/g,"\\eqno{$1}");
    //
    //  Remove unneeded \hbox from around \hskip
    //
    math = math.replace(/\\hbox *\{ *(\\hskip *[^{}]*?)\}/g,"$1");
    //
    //  Use \Rule to create line
    //  
    math = math.replace(/\\hbox to ([^{}]*?) \{ *\\hrulefill *\}/g,"\\Rule{$1}{1pt}{0pt}");
    if (math === "\\hrulefill") math = "\\Rule{10em}{1pt}{0pt}";
    //
    //  Convert vertical rules to \vrule (picked up by ieeeVRule above).
    //
    math = math.replace(/\{\\smash\{\\hbox\{\\vrule[^{}]*?\}\}\}/g,"\\vrule");
    math = math.replace(/\\smash\{\\hbox\{\\vrule[^{}]*?\}\}/g,"\\vrule");
    math = math.replace(/\\smash\{\\vrule[^{}]*?\}/g,"\\vrule");
    //
    //  Remove \setbox construct that is used to create space
    //
    math = math.replace(/\\setbox 0=.*?\\box 0\\relax/g,"");
    //
    //  Handle \setbox used for centering negation (not great, but at least displays)
    //
    math = math.replace(/(\\math(ord|rel)){\\setbox0=\\hbox\{(\$(.*?)\$|(.*?))\} \\rlap\{.*?\}\}\\box0\}/g,"\\not$1{$4$5}");
    //
    //  Fix order of ^{...} and \limits or \nolimits
    //
    math = math.replace(/([_^]\{[^{}]*?\}) *(\\(no)?limits) */g,"$2$1");
    //
    //  Remove \limits from \underbrace or \overbrace (MathJax doesn't recognize it there)
    //
    math = math.replace(/(\\(?:und|ov)erbrace *\{(?:\{[^{}]*?\}|[^{}])*?\}) *\\limits/g,"$1");
    //
    //  Remove \kern-\nulldelimiterspace (since in MathJax \nulldelimiterspace is 0)
    //
    math = math.replace(/\\kern *-?\\nulldelimiterspace/g,"");
    //
    //  Convert units of pi to pt (not sure what they are suppossed to be)
    //
    math = math.replace(/(\\hskip *-?[0-9.,]+) *pi/g,"$1pt");
    //
    //  Remove \baslineskip settings
    //
    math = math.replace(/\\baselineskip *(= *)?-?[0-9.,]+ *pt/g,"");
    //
    //  Convert use of comma in \hskip distace to a decimal point
    //
    math = math.replace(/(\\hskip *-?\d+),/g,"$1.");
    //
    //  Remove \vadjust{\vskip ...}
    //
    math = math.replace(/\\vadjust *\{ *\\vskip *-?[0-9.,]+ex *\} */g,"");
    //
    //  Remove \noindent - Dave S. added 9/1/2015
    //
    math = math.replace(/\\noindent/g,"");
    //
    //  Fix bad \AA in hbox - Dave S. added 9/1/2015
    //
    math = math.replace(/\\hbox\{\\rm \\AA\}/g,"\\AA");
    //
    //  Fix bad \pgtag used by SPI - Dave S. added 9/1/2015
    //
    math = math.replace(/\\pgtag/g,"");
    //
    //  Fix \setcounter problem in matrices - Dave S. added 9/1/2015
    //
    math = math.replace(/\\setcounter\{[a-zA-Z]*\}\{[0-9]*\}/g,"");
    //
    //  Fix \mathbbm{1} for \realone - Dave S. added 9/7/2015
    //
    math = math.replace(/\\mathbbm\{1\}/g,"\\realone");
    //

    //  Fix \mathds{1} for \realone - Dave S. added 9/7/2015
    //
    math = math.replace(/\\mathds\{1\}/g,"\\realone");
    //    //  Fix \mathds{A}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{A\}/g,"\\dsmathA");    //  Fix \mathds{B}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{B\}/g,"\\dsmathB");    //  Fix \mathds{C}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{C\}/g,"\\dsmathC");    //  Fix \mathds{D}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{D\}/g,"\\dsmathD");    //  Fix \mathds{E}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{E\}/g,"\\dsmathE");
     //  Fix \mathds{F}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{F\}/g,"\\dsmathF");    //  Fix \mathds{G}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{G\}/g,"\\dsmathG");    //  Fix \mathds{H}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{H\}/g,"\\dsmathH");    //  Fix \mathds{I}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{I\}/g,"\\dsmathI");    //  Fix \mathds{J}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{J\}/g,"\\dsmathJ");    //  Fix \mathds{K}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{K\}/g,"\\dsmathK");    //  Fix \mathds{L}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{L\}/g,"\\dsmathL");    //  Fix \mathds{M}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{M\}/g,"\\dsmathM");    //  Fix \mathds{N}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{N\}/g,"\\dsmathN");    //  Fix \mathds{O}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{O\}/g,"\\dsmathO");    //  Fix \mathds{P}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{P\}/g,"\\dsmathP");    //  Fix \mathds{Q}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{Q\}/g,"\\dsmathQ");    //  Fix \mathds{R}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{R\}/g,"\\dsmathR");    //  Fix \mathds{S}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{S\}/g,"\\dsmathS");    //  Fix \mathds{T}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{T\}/g,"\\dsmathT");    //  Fix \mathds{U}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{U\}/g,"\\dsmathU");    //  Fix \mathds{V}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{V\}/g,"\\dsmathV");    //  Fix \mathds{W}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{W\}/g,"\\dsmathW");    //  Fix \mathds{X}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{X\}/g,"\\dsmathX");    //  Fix \mathds{Y}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{Y\}/g,"\\dsmathY");    //  Fix \mathds{Z}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{Z\}/g,"\\dsmathZ"); //    //  Fix \mathds{a}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{a\}/g,"\\dsmatha");    //  Fix \mathds{b}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{b\}/g,"\\dsmathb");    //  Fix \mathds{c}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{c\}/g,"\\dsmathc");    //  Fix \mathds{d}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{d\}/g,"\\dsmathd");    //  Fix \mathds{e}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{e\}/g,"\\dsmathe");
     //  Fix \mathds{f}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{f\}/g,"\\dsmathf");    //  Fix \mathds{g}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{g\}/g,"\\dsmathg");    //  Fix \mathds{h}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{h\}/g,"\\dsmathh");    //  Fix \mathds{i}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{i\}/g,"\\dsmathi");    //  Fix \mathds{j}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{j\}/g,"\\dsmathj");    //  Fix \mathds{k}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{k\}/g,"\\dsmathk");    //  Fix \mathds{l}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{l\}/g,"\\dsmathl");    //  Fix \mathds{m}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{m\}/g,"\\dsmathm");    //  Fix \mathds{n}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{n\}/g,"\\dsmathn");    //  Fix \mathds{o}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{o\}/g,"\\dsmatho");    //  Fix \mathds{p}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{p\}/g,"\\dsmathp");    //  Fix \mathds{q}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{q\}/g,"\\dsmathq");    //  Fix \mathds{r}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{r\}/g,"\\dsmathr");    //  Fix \mathds{s}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{s\}/g,"\\dsmaths");    //  Fix \mathds{t}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{t\}/g,"\\dsmatht");    //  Fix \mathds{u}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{u\}/g,"\\dsmathu");    //  Fix \mathds{v}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{v\}/g,"\\dsmathv");    //  Fix \mathds{w}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{w\}/g,"\\dsmathw");    //  Fix \mathds{x}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{x\}/g,"\\dsmathx");    //  Fix \mathds{y}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{y\}/g,"\\dsmathy");    //  Fix \mathds{z}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{z\}/g,"\\dsmathz");    //  Fix \mathds{1}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{1\}/g,"\\dsmath1");    //  Fix \mathds{2}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{2\}/g,"\\dsmathtwo");    //  Fix \mathds{3}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{3\}/g,"\\dsmaththree");    //  Fix \mathds{4}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{4\}/g,"\\dsmathfour");    //  Fix \mathds{5}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{5\}/g,"\\dsmathfive");    //  Fix \mathds{6}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{6\}/g,"\\dsmathsix");    //  Fix \mathds{7}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{7\}/g,"\\dsmathseven");    //  Fix \mathds{8}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{8\}/g,"\\dsmatheight");    //  Fix \mathds{9}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{9\}/g,"\\dsmathnine");    //  Fix \mathds{0}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{0\}/g,"\\dsmathzero");
    //    //  Fix \mathbbmss{A}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{A\}/g,"\\bbmssmathA");    //  Fix \mathbbmss{B}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{B\}/g,"\\bbmssmathB");    //  Fix \mathbbmss{C}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{C\}/g,"\\bbmssmathC");    //  Fix \mathbbmss{D}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{D\}/g,"\\bbmssmathD");    //  Fix \mathbbmss{E}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{E\}/g,"\\bbmssmathE");    //  Fix \mathbbmss{F}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{F\}/g,"\\bbmssmathF");    //  Fix \mathbbmss{G}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{G\}/g,"\\bbmssmathG");    //  Fix \mathbbmss{H}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{H\}/g,"\\bbmssmathH");    //  Fix \mathbbmss{I}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{I\}/g,"\\bbmssmathI");    //  Fix \mathbbmss{J}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{J\}/g,"\\bbmssmathJ");    //  Fix \mathbbmss{K}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{K\}/g,"\\bbmssmathK");    //  Fix \mathbbmss{L}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{L\}/g,"\\bbmssmathL");    //  Fix \mathbbmss{M}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{M\}/g,"\\bbmssmathM");    //  Fix \mathbbmss{N}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{N\}/g,"\\bbmssmathN");    //  Fix \mathbbmss{O}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{O\}/g,"\\bbmssmathO");    //  Fix \mathbbmss{P}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{P\}/g,"\\bbmssmathP");    //  Fix \mathbbmss{Q}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{Q\}/g,"\\bbmssmathQ");    //  Fix \mathbbmss{R}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{R\}/g,"\\bbmssmathR");    //  Fix \mathbbmss{S}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{S\}/g,"\\bbmssmathS");    //  Fix \mathbbmss{T}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{T\}/g,"\\bbmssmathT");    //  Fix \mathbbmss{U}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{U\}/g,"\\bbmssmathU");    //  Fix \mathbbmss{V}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{V\}/g,"\\bbmssmathV");    //  Fix \mathbbmss{W}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{W\}/g,"\\bbmssmathW");    //  Fix \mathbbmss{X}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{X\}/g,"\\bbmssmathX");    //  Fix \mathbbmss{Y}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{Y\}/g,"\\bbmssmathY");    //  Fix \mathbbmss{Z}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{Z\}/g,"\\bbmssmathZ");    //  Fix \mathbbmss{a}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{a\}/g,"\\bbmssmatha");    //  Fix \mathbbmss{b}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{b\}/g,"\\bbmssmathb");    //  Fix \mathbbmss{c}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{c\}/g,"\\bbmssmathc");    //  Fix \mathbbmss{d}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{d\}/g,"\\bbmssmathd");    //  Fix \mathbbmss{e}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{e\}/g,"\\bbmssmathe");    //  Fix \mathbbmss{f}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{f\}/g,"\\bbmssmathf");    //  Fix \mathbbmss{g}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{g\}/g,"\\bbmssmathg");    //  Fix \mathbbmss{h}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{h\}/g,"\\bbmssmathh");    //  Fix \mathbbmss{i}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{i\}/g,"\\bbmssmathi");    //  Fix \mathbbmss{j}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{j\}/g,"\\bbmssmathj");    //  Fix \mathbbmss{k}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{k\}/g,"\\bbmssmathk");    //  Fix \mathbbmss{l}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{l\}/g,"\\bbmssmathl");    //  Fix \mathbbmss{m}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{m\}/g,"\\bbmssmathm");    //  Fix \mathbbmss{n}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{n\}/g,"\\bbmssmathn");    //  Fix \mathbbmss{o}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{o\}/g,"\\bbmssmatho");    //  Fix \mathbbmss{p}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{p\}/g,"\\bbmssmathp");    //  Fix \mathbbmss{q}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{q\}/g,"\\bbmssmathq");    //  Fix \mathbbmss{r}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{r\}/g,"\\bbmssmathr");    //  Fix \mathbbmss{s}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{s\}/g,"\\bbmssmaths");    //  Fix \mathbbmss{t}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{t\}/g,"\\bbmssmathr");    //  Fix \mathbbmss{u}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{u\}/g,"\\bbmssmathu");    //  Fix \mathbbmss{v}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{v\}/g,"\\bbmssmathv");    //  Fix \mathbbmss{w}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{w\}/g,"\\bbmssmathw");    //  Fix \mathbbmss{x}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{x\}/g,"\\bbmssmathx");    //  Fix \mathbbmss{y}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{y\}/g,"\\bbmssmathy");    //  Fix \mathbbmss{z}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{z\}/g,"\\bbmssmathz");    //  Fix \mathbbmss{0}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{0\}/g,"\\bbmssmathzero");    //  Fix \mathbbmss{1}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{1\}/g,"\\bbmssmathone");    //  Fix \mathbbmss{2}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{2\}/g,"\\bbmssmathtwo");    //  Fix \mathbbmss{3}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{3\}/g,"\\bbmssmaththree");    //  Fix \mathbbmss{4}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{4\}/g,"\\bbmssmathfour");    //  Fix \mathbbmss{5}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{5\}/g,"\\bbmssmathfive");    //  Fix \mathbbmss{6}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{6\}/g,"\\bbmssmathsix");    //  Fix \mathbbmss{7}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{7\}/g,"\\bbmssmathseven");    //  Fix \mathbbmss{8}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{8\}/g,"\\bbmssmatheight");    //  Fix \mathbbmss{9}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathbbmss\{9\}/g,"\\bbmssmathnine");    // Fix \mathbbmsl{T} - Dave S. added 3/2/2016
    math = math.replace(/\\mathbbmsl\{T\}/g,"\\style{transform:skewx(-15deg); transform-origin:left baseline; display:inline-block}{\\mathbb T}");        // Fix \ndownarrow - Dave S. added 4/25/2016
    math = math.replace(/\\ndownarrow/g,"\\style{transform:rotate(-90deg); transform-origin:left baseline; display:inline-block}{\\unicode[serif]{x219A}}");    // Fix \nuparrow - Dave S. added 4/25/2016
    math = math.replace(/\\nuparrow/g,"\\style{transform:rotate(-90deg); transform-origin:left baseline; display:inline-block}{\\unicode[serif]{x219B}}");
    //   //  Fix \noindent\vskip problem  - Dave S. added 9/8/2015
    //
    math = math.replace(/\{\\vskip[0-9]*pt\}/g,"");
    //

   //  Fix \hspace* problem  - Dave S. added 11/6/2015
    //
    math = math.replace(/\\hspace\*/g,"\\hspace");
    //    //  Fix \noindent\vskip problem with minus  - Dave S. added 9/8/2015
    //
    math = math.replace(/\{\\vskip\-[0-9]*pt\}/g,"");
    //    //  Make \hfill\square be flush right (when that is the only thing in the math)
    //
    math = math.replace(/\\blackboxfill/g,"\\hfill\\blackbox");
    var match = math.match(/^\\hfill? *(\\[a-zA-Z]+)$/);
    if (match) {
      math = match[1];
      data.script.parentNode.setAttribute("style","float:right; padding-right:1em");
      MathJax.HTML.addElement(data.script.parentNode.parentNode,"br",{style:{clear:"all"}});
    }
    //
    data.math = math;
  });
});

MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/ieeemacros.js");
