                	function copyToClipboard() {
				    var copyText = document.getElementById("poetryAderlee");
				    copyText.select();
				    copyText.setSelectionRange(0, 99999);
				    document.execCommand("copy");
				    alert("تم نسخ النص بنجاح: " + copyText.value);
				}

					      var side, side1, side2, spaceWidth, extendWidth, dif, toolfix;
					      var pType = 0; pLine = 0, pAlign = "center", pUse = 1;

					      var path = window.location.href;
					      path = path.substr(0, path.lastIndexOf("")+1);

					      var let1 = "اأإآؤءدذرزوةى";
					      var let2 = "اأإآؤئبتثجحخدذرزسشصضطظعغفقكلمنهويةى";
					      var let3 = "ًٌٍَُِّْ";//""

					//      defaultFont = "lucida grande,tahoma,ms sans serif,verdana,arial,helvetica";
					      defaultFont = '"lucida grande",tahoma,verdana,arial,sans-serif';

					      //poetry
					      var fname       = '"lucida grande",tahoma,verdana,arial,sans-serif', fsize = 11, fbold = false, fitalic = false, fcolor = "black";
					      var bkcolor = "", bkimage = "";
					      var obstyle = "double", obsize=4, obcolor="gray";
					      var ibchar = "...", ibcolor = "black";

					      //title
					      var fname2 = '"lucida grande",tahoma,verdana,arial,sans-serif', fsize2 = 11, fbold2 = true, fitalic2 = false, fcolor2 = "black";
					      var bkcolor2 = "", bkimage2 = "";
					      var obstyle2 = "double", obsize2=4, obcolor2="gray";

					      //poet
					      var fname3 = '"lucida grande",tahoma,verdana,arial,sans-serif', fsize3 = 11, fbold3 = true, fitalic3 = false, fcolor3 = "black";
					      var aAlign = "left";

					      var tblPoet             = document.getElementById('tblPoet');
					      var tblTitle    = document.getElementById('tblTitle');
					      var tblPoetry   = document.getElementById('tblPoetry');
					      var here                = document.getElementById('here');
					      var AderleeCode = document.getElementById('AderleeCode');
					      var poetryAderlee       = document.getElementById('poetryAderlee');

					      var testWidth   = document.getElementById('testWidth');
					      var poetry              = document.getElementById('poetry');
					      var subject             = document.getElementById('subject');
					      var poet                = document.getElementById('poet');

					      for (seli = 1; seli <= 50; seli++) {
					              var oOption = document.createElement("OPTION");
					              oOption.innerText = seli;
					              var oOption = document.createElement("OPTION");
					              oOption.innerText = seli;
					      }

					      function getColor(t, f) {
					              var c;
					              c = showModalDialog("colors.htm","","help:no; status:no; dialogHeight:310px; dialogWidth:750px");
					              if (c == "-1" || (f == 0 && c == "")) return t;
					              else return c;
					      }

					      function trim(t) {
					              t = t.replace(/^[ ]+/,"");
					              t = t.replace(/[ ]+$/,"");
					              return t;
					      }

					      function textWidth(t) {
					              testWidth.innerHTML= t.replace(/ /gi, "&nbsp;");
					              return ((testWidth.clientWidth - 2) * 0.75);
					      }

					      function strReplace(t, s1, s2, c) {
					              var i = 0, len1 = s1.length; len2 = s2.length;
					              while (1) {
					                      i = t.indexOf(s1, i);
					                      if (i == -1) break;
					                      else {
					                              t = t.substr(0, i) + s2 + t.substr(i+len1);
					                              i += len2;
					                              if (--c == 0) break;
					                      }
					              }
					              return t
					      }

					      function count(str, ch) {
					              var c = 0;
					              for (var i = 0; i < str.length; i++) c += (str.charAt(i) == ch);
					              return c;
					      }

					      function space(n) {
					              if (n <= 1) return " ";
					              return  " " + space( n - 1);
					      }

					      function createExtend(t) {
					              var alef = "اأإآ";
					              var s = "";
					              var befor = "", ch = "";
					              t = t.replace(/الله/g,"@");
					              for (i = 0; i < t.length; i++) {
					                      ch = t.charAt(i);
					                      if (let2.indexOf(ch.charAt(0)) != -1 || ch.charAt(0) == "ء") {
					                              if (befor != "") {
					                                      if (let1.indexOf(befor.charAt(0)) == -1 && let2.indexOf(ch.charAt(0)) != -1 && (befor.charAt(0) != "ل" || alef.indexOf(ch.charAt(0)) == -1)) s += "^";
					                              }
					                              befor = ch;
					                              s += ch;
					                      } else {
					                              s += ch;
					                              if (let3.indexOf(ch.charAt(0)) == -1) befor = "";
					                      }
					              }
					              s = s.replace(/@/g,"الله");
					              return s;
					      }

					      function extend(n) {
					              if (n <= 1) return "ـ";
					              return  "ـ" + extend(n-1);
					      }

					      function justifyBYextend(t, w) {
					              var ex = 0, i, d, n, p, m;
					              t = createExtend(t);
					              ex = count(t, "^");
					              if (ex == 0) return t;
					              d = Math.floor((w - textWidth(t.replace(/\^/g,""))) / extendWidth);
					              t = t.split(" ");
					              n = 0;
					              for (i = 0; i < t.length; i++) n += (t[i].indexOf("^") != -1);
					              p = Math.floor(d / n);
					              m = d % n;
					              for (i = 0; i < t.length; i++) {
					                      ex = count(t[i], "^");
					                      if (ex == 0) continue;
					                      d = p + (m-- > 0);
					                      n = Math.floor(d / ex);
					                      if (n > 0) t[i] = t[i].replace(/\^/g, "^" + extend(n));
					                      if (d % ex > 0) t[i] = strReplace(t[i], "^", extend(1), d % ex);
					              }
					              t = t.join(" ");
					              t = t.replace(/\^/g, "");
					              return t;
					      }

					      function justifyBYspace(t, w, dir) {
					              var sp = 0, i, d, tw, n;
					              sp = count(t, " ");
					              if (sp != 0) {
					                      d = Math.floor((w - textWidth(t)) / spaceWidth);
					                      n = Math.floor(d / sp);
					                      if (n > 0) t = t.replace(/ /g, space(n + 1));
					                      if (d % sp > 0) t = strReplace(t, space(n + 1), space(n + 2), d % sp);
					              }
					              tw = w - textWidth(t);
					              if (tw > 0) {
					                      i = t.lastIndexOf(" ");
					                      if (i == -1) {
					                              if (dir == 0) return t;
					                              else i = ((dir==2)?-1:t.length-1);
					                      }
					                      tw -= dif;
					                      t = t.substr(0, i+1) + toolfix.replace(/letter-spacing:normal/,"letter-spacing:"+tw+"pt ") + t.substr(i+1);
					              }
					              return t;
					      }

					      function justify(t, w, dir) {
					              if (pUse == 1) t = justifyBYextend(t, w);
					              return justifyBYspace(t, w, dir);
					      }

					      function doJustify () {
					              var L, R, MTW, i, j, cr, txt;
					              toolfix = "<span style='font-size:1pt;letter-spacing:normal;visibility:hidden;'><\/span>";
					              testWidth.innerHTML = toolfix;
					              dif = (testWidth.clientWidth - 2) * 0.75;
					              toolfix = toolfix.replace(/ /g,"^");
					              testWidth.style.font = (fitalic?"italic":"normal")+" normal "+(fbold?"bold ":"normal ")+fsize+"pt "+fname+","+defaultFont;
					              txt = poetry.value;
					              txt = txt.replace(/[\^@ـ]/g,"");
					              txt = txt.replace(/[ ]+/g," ");
					              txt = txt.replace(/^[\r\n]+/,"");
					              txt = txt.replace(/[\r\n]+$/,"");
					              txt = txt.replace(/\r/g,"");
					              txt = txt.replace(/[ ]*\n[ ]*/g,"\n");
					              txt = txt.replace(/[ ]*=[ ]*/g,"=");
					              txt = trim(txt);
					              poetry.value = txt.replace(/=/g," = ");
					              txt += "\n";
					              extendWidth = textWidth("ش" + "ــ" + "ش");
					              extendWidth -= textWidth("ش" + "ـ" + "ش");
					              spaceWidth = textWidth("ش" + "&nbsp;&nbsp;" + "ش");
					              spaceWidth -= textWidth("ش" + "&nbsp;" + "ش");
					              var nbsp = "";
					              while (1) {
					                      nbsp += "&nbsp;";
					                      if (textWidth(nbsp) > 12) break;
					              }
					              cr = 0;
					              j = 0;
					              MTW = textWidth(txt.replace(/\n/g,"<br>").replace(/=/g,"<br>"));
					              side = "";
					              cr = 0;
					              j = 0;
					              var sn = 0;
					              while (1) {
					                      cr = txt.indexOf("\n", cr);
					                      if (cr == -1) break;
					                      if (txt.substring(j, cr) != "") {
					                              i = txt.indexOf("=", j);
					                              if (i == -1 || i > cr) i = cr; //no '=' in this line
					                              L = txt.substring(j, i);
					                              L = justify(L, MTW, ((i==cr)?0:1));
					                              L = L.replace(/ /g, "&nbsp;");
					                              L = L.replace(/\^/g, " ");
					                              R = txt.substring(i+1, cr);
					                              R = justify(R, MTW, 2);
					                              R = R.replace(/ /g, "&nbsp;");
					                              R = R.replace(/\^/g, " ");
					                              if (pType == 0) {
					                                      if (i != cr) side += L + nbsp + ibchar + nbsp + R + "<br>";
					                                      else side += "<div align=center>" + L + "<\/div>";
					                              } else if (pType == 1) {
					                                      side += L + "<br>";
					                                      if (i != cr) {
					                                              side += R + "<br>";
					                                              side += "<br>";
					                                      }
					                              }
					                      } else {
					                              side += "<br>";
					                      }
					                      cr += 1;
					                      j = cr;
					              }
					              side = side.replace(/(<br>)+$/i, "");
					              return ToHTML();
					      }

					      function ToHTML() {
					              var poetstyle, titlestyle, poetrystyle, middlestyle="";
					              poetstyle = "font:"+(fitalic3?"italic":"normal") + " normal " + (fbold3?"bold ":"normal ") + fsize3 + "pt " + fname3;
					              poetstyle += "; color:" + fcolor3;
					              titlestyle = "; font:"+(fitalic2?"italic":"normal") + " normal " + (fbold2?"bold ":"normal ") + fsize2 + "pt " + fname2;
					              titlestyle += "; color:" + fcolor2;
					              titlestyle += "; background-image:url(" + bkimage2 + "); background-color:" + bkcolor2;
					              titlestyle += "; border:"+ obsize2 +"px " + obstyle2 +" " + obcolor2;
					              poetrystyle = "font:"+(fitalic?"italic":"normal") + " normal " + (fbold?"bold ":"normal ") + fsize + "pt " + fname;
					              poetrystyle += "; color:" + fcolor;
					              poetrystyle += "; background-image:url(" + bkimage + "); background-color:" + bkcolor;
					              poetrystyle += "; border:" + obsize +"px " + obstyle +" " + obcolor;
					              poetrystyle += "; line-height:" + ((pLine==0)?"200%":"350%");
					              middlestyle = "color:" + ibcolor;
					              HTML = "<table cellspacing='20' cellpadding='0' dir='rtl' border='0' width='0' style='" + poetrystyle + "'>";
					              if (trim(subject.value) || trim(poet.value)) {
					                      HTML += "<tr><td align='center' style='" + titlestyle + "' nowrap>" + subject.value.replace(/\n/gi,"<br>");
					                      if (trim(poet.value) != "") HTML += "<div align='" + aAlign + "' style='" + poetstyle + "'>&nbsp;" + poet.value + "&nbsp;<\/div>";
					                      HTML += "<\/td><\/tr>";
					              }
					              HTML += "<tr>";
					              HTML += "<td width=0 align=center valign=top nowrap>" + side + "<\/td>";
					              HTML += "<\/tr><\/table>";

					              HTML2 = "";
					              if (trim(subject.value) || trim(poet.value)) {
					                      if (trim(subject.value) != "") HTML2 += "" + subject.value + "\n--------------\n";
					                      if (trim(poet.value) != "") HTML2 += "" + poet.value + "\n--------------\n";
					                      HTML2 += "";
					              }
					              HTML2 += "";
					              HTML2 += "" + side + "";
					              HTML2 += "";

					              here.align = pAlign;
					              here.innerHTML = HTML.replace(/<\/?[^btd][^>]+>/gi,'');

					      //      here.style.fontFamily           = '"lucida grande",tahoma,verdana,arial,sans-serif';
					              here.style.fontFamily           = fname;
					              here.style.fontSize                     = fsize;
					      //      here.style.fontSize                     = "11px";
					              here.style.lineHeight           = "14.0833px";
					              here.style.verticalAlign        = "baseline";
					              here.style.textAlign            = "right";
					              here.style.color                        = "#333333";
					              here.style.backgroundColor      = "#F4F5F7";
					              here.style.fontWeight           = "400";
					              here.style.fontStyle            = "normal";
					              here.style.direction            = "rtl";
					              here.style.padding                      = "4px";
					              here.innerHTML = HTML2.replace(/\n/gi,'<br>');
					              poetryAderlee.value = HTML2.replace(/<br>/gi,'\r\n').replace(/&nbsp;/gi,' ').replace(/<\/?s[^>]+>/gi,'').replace(/<di[^>]+>/gi,'').replace(/<\/di[^>]+>/gi,'\n');
					              poetryAderlee.value = trim(poetryAderlee.value);
					      //      poetryAderlee.style.font                        = "" + fsize + " " + fname + " " + (fbold?"bold ":"normal") + " " + (fitalic?"italic":"normal");
					      //      poetryAderlee.style.fontFamily          = fname;
					              poetryAderlee.style.fontFamily          = '"lucida grande",tahoma,verdana,arial,sans-serif';
					      //      poetryAderlee.style.fontSize            = fsize;
					              poetryAderlee.style.fontSize            = "11px";
					              poetryAderlee.style.lineHeight          = "14.0833px";
					              poetryAderlee.style.verticalAlign       = "baseline";
					              poetryAderlee.style.textAlign           = "right";
					              poetryAderlee.style.color                       = "#333333";
					              poetryAderlee.style.fontWeight          = "400";
					              poetryAderlee.style.fontStyle           = "normal";
					              poetryAderlee.style.direction           = "rtl";
					              AderleeCode.style.display                       = 'block';
					      }