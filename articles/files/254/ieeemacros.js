/* -*- Mode: Javascript; indent-tabs-mode:nil; js-indent-level: 2 -*- */
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
    macros: {
       
       

       
       
circleH: ["Macro","\\unicode{x24BD}"],
       
       
       
       

texttt: ["Macro","{\\tt\\text{#1}}", 1],


/* Don't use dsmath macros, use correct syntax \mathds{x} */
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
            // This line below fixed by Davide C. 1/13/2015.
            var type = lines.splice(j-1,1);
            if (type !== "none") lines[j-1] = type;
            //  This line fixed by Davide C. 1/14/2015
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
    //
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
    //
    math = math.replace(/\\mathds\{A\}/g,"\\dsmathA");
    math = math.replace(/\\mathds\{B\}/g,"\\dsmathB");
    math = math.replace(/\\mathds\{C\}/g,"\\dsmathC");
    math = math.replace(/\\mathds\{D\}/g,"\\dsmathD");
    math = math.replace(/\\mathds\{E\}/g,"\\dsmathE");
     //  Fix \mathds{F}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{F\}/g,"\\dsmathF");
    math = math.replace(/\\mathds\{G\}/g,"\\dsmathG");
    math = math.replace(/\\mathds\{H\}/g,"\\dsmathH");
    math = math.replace(/\\mathds\{I\}/g,"\\dsmathI");
    math = math.replace(/\\mathds\{J\}/g,"\\dsmathJ");
    math = math.replace(/\\mathds\{K\}/g,"\\dsmathK");
    math = math.replace(/\\mathds\{L\}/g,"\\dsmathL");
    math = math.replace(/\\mathds\{M\}/g,"\\dsmathM");
    math = math.replace(/\\mathds\{N\}/g,"\\dsmathN");
    math = math.replace(/\\mathds\{O\}/g,"\\dsmathO");
    math = math.replace(/\\mathds\{P\}/g,"\\dsmathP");
    math = math.replace(/\\mathds\{Q\}/g,"\\dsmathQ");
    math = math.replace(/\\mathds\{R\}/g,"\\dsmathR");
    math = math.replace(/\\mathds\{S\}/g,"\\dsmathS");
    math = math.replace(/\\mathds\{T\}/g,"\\dsmathT");
    math = math.replace(/\\mathds\{U\}/g,"\\dsmathU");
    math = math.replace(/\\mathds\{V\}/g,"\\dsmathV");
    math = math.replace(/\\mathds\{W\}/g,"\\dsmathW");
    math = math.replace(/\\mathds\{X\}/g,"\\dsmathX");
    math = math.replace(/\\mathds\{Y\}/g,"\\dsmathY");
    math = math.replace(/\\mathds\{Z\}/g,"\\dsmathZ");
    math = math.replace(/\\mathds\{a\}/g,"\\dsmatha");
    math = math.replace(/\\mathds\{b\}/g,"\\dsmathb");
    math = math.replace(/\\mathds\{c\}/g,"\\dsmathc");
    math = math.replace(/\\mathds\{d\}/g,"\\dsmathd");
    math = math.replace(/\\mathds\{e\}/g,"\\dsmathe");
     //  Fix \mathds{f}  - Dave S. added 12/7/2015
    math = math.replace(/\\mathds\{f\}/g,"\\dsmathf");
    math = math.replace(/\\mathds\{g\}/g,"\\dsmathg");
    math = math.replace(/\\mathds\{h\}/g,"\\dsmathh");
    math = math.replace(/\\mathds\{i\}/g,"\\dsmathi");
    math = math.replace(/\\mathds\{j\}/g,"\\dsmathj");
    math = math.replace(/\\mathds\{k\}/g,"\\dsmathk");
    math = math.replace(/\\mathds\{l\}/g,"\\dsmathl");
    math = math.replace(/\\mathds\{m\}/g,"\\dsmathm");
    math = math.replace(/\\mathds\{n\}/g,"\\dsmathn");
    math = math.replace(/\\mathds\{o\}/g,"\\dsmatho");
    math = math.replace(/\\mathds\{p\}/g,"\\dsmathp");
    math = math.replace(/\\mathds\{q\}/g,"\\dsmathq");
    math = math.replace(/\\mathds\{r\}/g,"\\dsmathr");
    math = math.replace(/\\mathds\{s\}/g,"\\dsmaths");
    math = math.replace(/\\mathds\{t\}/g,"\\dsmatht");
    math = math.replace(/\\mathds\{u\}/g,"\\dsmathu");
    math = math.replace(/\\mathds\{v\}/g,"\\dsmathv");
    math = math.replace(/\\mathds\{w\}/g,"\\dsmathw");
    math = math.replace(/\\mathds\{x\}/g,"\\dsmathx");
    math = math.replace(/\\mathds\{y\}/g,"\\dsmathy");
    math = math.replace(/\\mathds\{z\}/g,"\\dsmathz");
    math = math.replace(/\\mathds\{1\}/g,"\\dsmath1");
    math = math.replace(/\\mathds\{2\}/g,"\\dsmathtwo");
    math = math.replace(/\\mathds\{3\}/g,"\\dsmaththree");
    math = math.replace(/\\mathds\{4\}/g,"\\dsmathfour");
    math = math.replace(/\\mathds\{5\}/g,"\\dsmathfive");
    math = math.replace(/\\mathds\{6\}/g,"\\dsmathsix");
    math = math.replace(/\\mathds\{7\}/g,"\\dsmathseven");
    math = math.replace(/\\mathds\{8\}/g,"\\dsmatheight");
    math = math.replace(/\\mathds\{9\}/g,"\\dsmathnine");
    math = math.replace(/\\mathds\{0\}/g,"\\dsmathzero");
    //
    math = math.replace(/\\mathbbmss\{A\}/g,"\\bbmssmathA");
    math = math.replace(/\\mathbbmss\{B\}/g,"\\bbmssmathB");
    math = math.replace(/\\mathbbmss\{C\}/g,"\\bbmssmathC");
    math = math.replace(/\\mathbbmss\{D\}/g,"\\bbmssmathD");
    math = math.replace(/\\mathbbmss\{E\}/g,"\\bbmssmathE");
    math = math.replace(/\\mathbbmss\{F\}/g,"\\bbmssmathF");
    math = math.replace(/\\mathbbmss\{G\}/g,"\\bbmssmathG");
    math = math.replace(/\\mathbbmss\{H\}/g,"\\bbmssmathH");
    math = math.replace(/\\mathbbmss\{I\}/g,"\\bbmssmathI");
    math = math.replace(/\\mathbbmss\{J\}/g,"\\bbmssmathJ");
    math = math.replace(/\\mathbbmss\{K\}/g,"\\bbmssmathK");
    math = math.replace(/\\mathbbmss\{L\}/g,"\\bbmssmathL");
    math = math.replace(/\\mathbbmss\{M\}/g,"\\bbmssmathM");
    math = math.replace(/\\mathbbmss\{N\}/g,"\\bbmssmathN");
    math = math.replace(/\\mathbbmss\{O\}/g,"\\bbmssmathO");
    math = math.replace(/\\mathbbmss\{P\}/g,"\\bbmssmathP");
    math = math.replace(/\\mathbbmss\{Q\}/g,"\\bbmssmathQ");
    math = math.replace(/\\mathbbmss\{R\}/g,"\\bbmssmathR");
    math = math.replace(/\\mathbbmss\{S\}/g,"\\bbmssmathS");
    math = math.replace(/\\mathbbmss\{T\}/g,"\\bbmssmathT");
    math = math.replace(/\\mathbbmss\{U\}/g,"\\bbmssmathU");
    math = math.replace(/\\mathbbmss\{V\}/g,"\\bbmssmathV");
    math = math.replace(/\\mathbbmss\{W\}/g,"\\bbmssmathW");
    math = math.replace(/\\mathbbmss\{X\}/g,"\\bbmssmathX");
    math = math.replace(/\\mathbbmss\{Y\}/g,"\\bbmssmathY");
    math = math.replace(/\\mathbbmss\{Z\}/g,"\\bbmssmathZ");
    math = math.replace(/\\mathbbmss\{a\}/g,"\\bbmssmatha");
    math = math.replace(/\\mathbbmss\{b\}/g,"\\bbmssmathb");
    math = math.replace(/\\mathbbmss\{c\}/g,"\\bbmssmathc");
    math = math.replace(/\\mathbbmss\{d\}/g,"\\bbmssmathd");
    math = math.replace(/\\mathbbmss\{e\}/g,"\\bbmssmathe");
    math = math.replace(/\\mathbbmss\{f\}/g,"\\bbmssmathf");
    math = math.replace(/\\mathbbmss\{g\}/g,"\\bbmssmathg");
    math = math.replace(/\\mathbbmss\{h\}/g,"\\bbmssmathh");
    math = math.replace(/\\mathbbmss\{i\}/g,"\\bbmssmathi");
    math = math.replace(/\\mathbbmss\{j\}/g,"\\bbmssmathj");
    math = math.replace(/\\mathbbmss\{k\}/g,"\\bbmssmathk");
    math = math.replace(/\\mathbbmss\{l\}/g,"\\bbmssmathl");
    math = math.replace(/\\mathbbmss\{m\}/g,"\\bbmssmathm");
    math = math.replace(/\\mathbbmss\{n\}/g,"\\bbmssmathn");
    math = math.replace(/\\mathbbmss\{o\}/g,"\\bbmssmatho");
    math = math.replace(/\\mathbbmss\{p\}/g,"\\bbmssmathp");
    math = math.replace(/\\mathbbmss\{q\}/g,"\\bbmssmathq");
    math = math.replace(/\\mathbbmss\{r\}/g,"\\bbmssmathr");
    math = math.replace(/\\mathbbmss\{s\}/g,"\\bbmssmaths");
    math = math.replace(/\\mathbbmss\{t\}/g,"\\bbmssmathr");
    math = math.replace(/\\mathbbmss\{u\}/g,"\\bbmssmathu");
    math = math.replace(/\\mathbbmss\{v\}/g,"\\bbmssmathv");
    math = math.replace(/\\mathbbmss\{w\}/g,"\\bbmssmathw");
    math = math.replace(/\\mathbbmss\{x\}/g,"\\bbmssmathx");
    math = math.replace(/\\mathbbmss\{y\}/g,"\\bbmssmathy");
    math = math.replace(/\\mathbbmss\{z\}/g,"\\bbmssmathz");
    math = math.replace(/\\mathbbmss\{0\}/g,"\\bbmssmathzero");
    math = math.replace(/\\mathbbmss\{1\}/g,"\\bbmssmathone");
    math = math.replace(/\\mathbbmss\{2\}/g,"\\bbmssmathtwo");
    math = math.replace(/\\mathbbmss\{3\}/g,"\\bbmssmaththree");
    math = math.replace(/\\mathbbmss\{4\}/g,"\\bbmssmathfour");
    math = math.replace(/\\mathbbmss\{5\}/g,"\\bbmssmathfive");
    math = math.replace(/\\mathbbmss\{6\}/g,"\\bbmssmathsix");
    math = math.replace(/\\mathbbmss\{7\}/g,"\\bbmssmathseven");
    math = math.replace(/\\mathbbmss\{8\}/g,"\\bbmssmatheight");
    math = math.replace(/\\mathbbmss\{9\}/g,"\\bbmssmathnine");
    math = math.replace(/\\mathbbmsl\{T\}/g,"\\style{transform:skewx(-15deg); transform-origin:left baseline; display:inline-block}{\\mathbb T}");
    math = math.replace(/\\ndownarrow/g,"\\style{transform:rotate(-90deg); transform-origin:left baseline; display:inline-block}{\\unicode[serif]{x219A}}");
    math = math.replace(/\\nuparrow/g,"\\style{transform:rotate(-90deg); transform-origin:left baseline; display:inline-block}{\\unicode[serif]{x219B}}");
    //
    //
    math = math.replace(/\{\\vskip[0-9]*pt\}/g,"");
    //

   //  Fix \hspace* problem  - Dave S. added 11/6/2015
    //
    math = math.replace(/\\hspace\*/g,"\\hspace");
    //
    //
    math = math.replace(/\{\\vskip\-[0-9]*pt\}/g,"");
    //
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