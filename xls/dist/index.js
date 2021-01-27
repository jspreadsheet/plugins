/**
 * Official Jspreadsheet plugins
 *
 * Website: https://jspreasheet.com
 * Description: Create amazing web based spreadsheets.
 *
 * This plugin converts a Jexcel Spreadsheet content to a XLS file.
 */

if (! jSuites && typeof(require) === 'function') {
    var jSuites = require('jsuites');
    var jsuites = jSuites;
    var jexcel = null;
}

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.export = factory();
}(this, (function () {

    var styles = {};
    var styleIndex = 1;
    var options = null;

    /**
     * Rgb to hex helpers
     */
    var rgbToHex = function(color) {
        color = ""+ color;
        if (!color || color.indexOf("rgb") < 0) {
            return color;
        }

        if (color.charAt(0) == "#") {
            return color;
        }

        if(color.indexOf("rgba")>-1) {
            var nums = /(.*?)rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d+)\)/i.exec(color),
                a = parseInt(nums[2], 10),
                r = parseInt(nums[3], 10),
                g = parseInt(nums[4], 10),
                b = parseInt(nums[5], 10);

                if (a==0) {
                    return ""; // Color transparent
                }

                // Convert to RGB
                r = Math.round(((1 - a) * 255) + (a * r));
                g = Math.round(((1 - a) * 255) + (a * g));
                b = Math.round(((1 - a) * 255) + (a * b));

                r = r.toString(16),
                g = g.toString(16),
                b = b.toString(16);
        } else {
            var nums = /(.*?)rgb\((\d+),\s*(\d+),\s*(\d+)\)/i.exec(color),
                r = parseInt(nums[2], 10).toString(16),
                g = parseInt(nums[3], 10).toString(16),
                b = parseInt(nums[4], 10).toString(16);
        }

        return "#"+ (
            (r.length == 1 ? "0"+ r : r) +
            (g.length == 1 ? "0"+ g : g) +
            (b.length == 1 ? "0"+ b : b)
        );
    }

    /**
     * Parse the CSS style
     */
    var parseCSS = function(css) {
       var result = [];
       css = css.split(';');

       for (var i = 0; i < css.length; i++) {
           if (css[i].trim()) {
               var t = css[i].split(':');
               result[t[0].trim()] = t[1].trim();
           }
       }

       return result;
    }

    /**
     * Helpers to deal with the export to jexcel to excel
     */
    var helpers = function() {
        var o = {};

        o.getData = function() {
            // Create XML cell
            var get = function(o) {
                if (! o.data && ! o.comments) {
                    return `<Cell${o.styleId}${o.merge}/>`;
                } else {
                    return `<Cell${o.styleId}${o.formula}${o.merge}><Data ss:Type="${o.type}">${o.data}</Data>${o.comments}</Cell>`;
                }
            }

            // Containers
            var rows = [];
            var cols = [];

            // Header
            if (options.header) {
                if (this.instance.options.nestedHeaders && this.instance.options.nestedHeaders.length > 0) {
                    // Flexible way to handle nestedheaders
                    for (var j = 0; j < this.instance.options.nestedHeaders.length; j++) {
                        cols = [];
                        for(var i = 0; i < this.instance.options.nestedHeaders[j].length; i++) {
                            // Create cells
                            var o = { styleId:'', type:'', data:'', formula:'', comments:'', merge:'' };
                            // Column name
                            o.data = (this.instance.options.nestedHeaders[j][i].title);
                            // Style
                            o.styleId = makeStyle(options.styleHeader);

                            // Merge (colspan)
                            if (this.instance.options.nestedHeaders[j][i].colspan) {
                                o.merge = makeMerge(parseInt(this.instance.options.nestedHeaders[j][i].colspan)-1);
                            }

                            // Type
                            o.type = 'String';

                            // Add value
                            cols.push(get(o));
                        }
                        rows.push('<Row>' + cols.join('') + '</Row>');
                    }
                }

                cols = [];
                for (var ite_col in this.instance.headers) {
                    // Create cells
                    var o = { styleId:'', type:'', data:'', formula:'', comments:'', merge:''};
                    // Column name
                    o.data = (this.instance.headers[ite_col].outerText||this.instance.headers[ite_col].innerHTML);
                    // Style
                    if (options.computedStyle) {
                        o.styleId = makeStyle(window.getComputedStyle(this.instance.headers[ite_col], null).cssText);
                    } else {
                        o.styleId = makeStyle(options.styleHeader);
                    }
                    // Type
                    o.type = 'String';
                    // Add value
                    cols.push(get(o));
                }
                rows.push('<Row>' + cols.join('') + '</Row>');
            }

            // Get data
            this.data = this.instance.data(null, false, false);
            for (var j = 0; j < this.data.length; j++) {
                cols = [];
                for (var i = 0; i < this.data[j].length; i++) {
                    // Create cells
                    var o = { styleId:'', type:'', data:'', formula:'', merge:'' };
                    // Column name
                    o.columnName = jexcel.helpers.getColumnNameFromCoords(i, j);
                    // Set data;
                    o.data = this.data[j][i];
                    //o.data = o.data.replace(/(?:\r\n|\r|\n)/g, '&#10;');
                    // Get comments
                    o.comments = this.getComments(o.columnName);
                    // Style
                    o.styleId = this.getStyle(o.columnName, i, j);
                    // Merge
                    o.merge = this.getMerge(o.columnName);
                    // Type
                    if (this.instance.options.columns[i].type == 'calendar') {
                        o.styleId = ' ss:StyleID="calendar"';
                        o.type = 'DateTime';
                        o.data = o.data.replace(' ', 'T');
                    } else if (this.instance.options.columns[i].type == 'checkbox' || this.instance.options.columns[i].type == 'radio') {
                        o.type = 'String'
                    } else if (jSuites.isNumeric(o.data)) {
                        o.type = 'Number';
                    } else {
                        o.type = 'String';
                    }
                    // Formulas
                    if ((''+o.data).substr(0,1) == '=') {
                        o.formula = ' ss:Formula="' + this.getFormula(o.data) + '"';
                        o.data = this.instance.records[j][i].element ? this.instance.records[j][i].element.innerHTML : '';
                    }
                    // Add value
                    cols.push(get(o));
                }

                rows.push('<Row>' + cols.join('') + '</Row>');
            }

            // Width
            var width = '';
            for (var i = 0; i < this.instance.headers.length; i++) {
                width += '<Column ss:AutoFitWidth="0" ss:Width="' +  parseInt(this.instance.options.columns[i].width) + '"/>';
            }

            // Formatted data
            this.data = `<Worksheet ss:Name="${this.name}"><Table>${width}${rows.join('')}</Table></Worksheet>`;;
        }

        o.getFormula = function(formula) {
            // Valid token
            var token = new RegExp(/([A-Z]+[0-9]+)(:[A-Z]+[0-9]+)?/i);
            // Tokenize formula
            var newFormula = jexcel.helpers.tokenize(formula, true);
            // Update token
            var updateToken = function(v) {
                if (v.indexOf('!') == -1) {
                    var c = jexcel.helpers.getCoordsFromColumnName(v);
                    var t = '';
                } else {
                    var f = newFormula[i].split('!');
                    var c = jexcel.helpers.getCoordsFromColumnName(f[1]);
                    var t = f[0] + '!';
                }

                var x1 = c[0] + 1;
                var y1 = c[1] + 1;

                return t + 'R'+y1+'C'+x1;
            }

            for (var i = 0; i < formula.length; i++) {
                if (newFormula[i] && token.test(newFormula[i])) {
                    if (newFormula[i].indexOf(':') == -1) {
                        newFormula[i] = updateToken(newFormula[i]);
                    } else {
                        var t = newFormula[i].split(':');
                        newFormula[i] = updateToken(t[0]) + ':' + updateToken(t[1]);
                    }
                }
            }

            return newFormula.join('');
        }

        o.getComments = function(columnName) {
            var comments = '';
            if (comments = this.instance.getComments(columnName)) {
                return `<Comment><Data>${comments}</Data></Comment>`;
            } else {
                return '';
            }
        }

        o.getStyle = function(columnName, i, j) {
            if (this.instance.records[j][i].element) {
                if (options.computedStyle) {
                    var val = window.getComputedStyle(this.instance.records[j][i].element, null).cssText;
                } else {
                    var val = this.instance.records[j][i].element.getAttribute('style');
                }
            } else {
                var val = this.instance.getStyle(columnName);
            }
            if (val) {
                return makeStyle(val);
            } else {
                return '';
            }
        }

        o.getMerge = function(columnName) {
            var merged = this.instance.getMerge();
            if (merged[columnName]) {
                var mAcross = parseInt(merged[columnName][0])-1;
                var mDown = parseInt(merged[columnName][1])-1;

                return makeMerge(mAcross, mDown);
            }
            return '';
        }

        return o;
    }

    /**
     * make XML for merge cells
     * @param {type} Across
     * @param {type} Down
     * @returns {String}
     */
    var makeMerge = function(Across, Down) {
        var xmlProperties = "";

        if (Across) {
            xmlProperties += ' ss:MergeAcross="' + Across + '"';
        }
        if (Down) {
            xmlProperties += ' ss:MergeDown="' + Across + '"';
        }
        return xmlProperties;
    }

    /**
     * make XML for style cells
     * @param {type} style
     * @returns {String}
     */
    var makeStyle = function(style) {
        if (! styles[style]) {
            styles[style] = {
                id: styleIndex++,
                content: applyStyle(style),
            }
        }
        return ' ss:StyleID="' + styles[style].id + '"';
    }

    /**
     * Extract the border style
     */
    var parseBorderCSS = function(css) {
        // Options
       var parsed = { 'size': null, 'color': null, 'style': null };

       // Explode
       css = css.toLowerCase().split(' ');

       for (var i = 0; i < css.length; i++) {
           if (css[i].indexOf('px') >= 0) {
               parsed.size = parseInt(css[i]);
           } else if (css[i].indexOf('#') >= 0) {
               parsed.color = rgbToHex(css[i]);
           } else if (css[i] == 'dashed') {
               parsed.style = 'dashed';
           } else if (css[i] == 'dotted') {
               parsed.style = 'dotted';
           } else if (css[i] == 'solid') {
               parsed.style = 'thin';
           }
       }

       return parsed;
    }

    /**
    * Apply the style onto excel format
    */
   var applyStyle = function(css) {
       css = parseCSS(css);

       var style = [];
       var Font = [];

       if (css['font-style'] && css['font-style'] == 'italic') {
           Font.push('ss:Italic="1"');
       }

       if (css['font-weight'] && css['font-weight'] == 'bold') {
           Font.push('ss:Bold="1"');
       }

       if (css['font-size']) {
           v = css['font-size'];
           if (! jSuites.isNumeric(v)) {
               var v = { 'x-small':8,'small':10,'medium':12,'large':16,'x-large':20 };
               v = v[css['font-size']] ? v[css['font-size']] : 10;
           }
           v = parseInt(v);
           if (v) {
               Font.push('ss:Size="'+v+'"');
           }
       }

       if (css['color']) {
           var v = rgbToHex(css['color'].toUpperCase().trim());
           if (v) {
	           Font.push('ss:Color="' + v + '"');
	       }
       }

       if (css['font-family']) {
           Font.push('ss:FontName="' + css['font-family'] + '"');
       }

       if (Font.length) {
           style.push('<Font ' + Font.join(' ') + '/>');
       }

       if (css['text-align']) {
           var v = css['text-align'].charAt(0).toUpperCase() + css['text-align'].slice(1);
            if (options.wrapText) {
                style.push('<Alignment ss:Horizontal="' + v + '" ss:Vertical="Center" ss:WrapText="1"/>');
            } else {
                style.push('<Alignment ss:Horizontal="' + v + '" />');
            }
       } else if (options.wrapText) {
           style.push('<Alignment ss:Vertical="Center" ss:WrapText="1"/>');
       }

       var Borders = [];

       var getBorder = function(a, b, position) {
           var t = [];
           if (! a) {
               a = {};
           }
           if (! b) {
               b = {};
           }

           if (b.style || a.style) {
               var v = b.style || a.style;
               t.push('ss:borderStyle="' + v + '"');
           }
           if (b.color || a.color) {
               var v = b.color || a.color;
               t.push('ss:Color="' + v +'"');
           }
           if (b.size || a.size) {
               var v = b.size || a.size;
               t.push('ss:Weight="' + v + '"');
           }

           if (t.length) {
               return t;
           } else {
               return false;
           }
       }

       var a = null;
       var b = null;
       var t = null;

       if (css['border']) {
           a = parseBorderCSS(css['border']);
       }

       if (css['border-top']) {
           b = parseBorderCSS(css['border-top']);
       } else {
           b = null;
       }

       if (t = getBorder(a, b)) {
           Borders.push('<Border ss:Position="Top" ss:LineStyle="Continuous" ' + t.join(' ') + '></Border>');
       }

       if (css['border-bottom']) {
           b = parseBorderCSS(css['border-bottom']);
       } else {
           b = null;
       }

       if (t = getBorder(a, b)) {
           Borders.push('<Border ss:Position="Bottom" ss:LineStyle="Continuous" ' + t.join(' ') + '></Border>');
       }

       if (css['border-left']) {
           b = parseBorderCSS(css['border-left']);
       } else {
           b = null;
       } 

       if (t = getBorder(a, b)) {
           Borders.push('<Border ss:Position="Left" ss:LineStyle="Continuous" ' + t.join(' ') + '></Border>');
       }

       if (css['border-right']) {
           b = parseBorderCSS(css['border-right']);
       } else {
           b = null;
       }

       if (t = getBorder(a, b)) {
           Borders.push('<Border ss:Position="Right" ss:LineStyle="Continuous" ' + t.join(' ') + '></Border>');
       }

       if (Borders.length > 0) {
           style.push('<Borders>' + Borders.join('') + '</Borders>');
       }

       if (css['background-color']) {
           var v = rgbToHex(css['background-color']);
           if (v) {
               style.push('<Interior ss:Color="'+v+'" ss:Pattern="Solid"/>');
           }
       }

       return style.join('');
    }

    /**
     * Create a new workbook
     */
    var createWorkbook = function(o) {
        var content = '';
        for (var i = 0; i < o.worksheets.length; i++) {
            content += o.worksheets[i].data;
        }
        var style = '';
        var keys = Object.keys(styles);
        for (var i = 0; i < keys.length; i++) {
            style += '<Style ss:ID="' + styles[keys[i]].id + '">' + styles[keys[i]].content + '</Style>';
        }
        return `<?xml version="1.0"?><?mso-application progid="Excel.Sheet"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"><DocumentProperties xmlns="urn:schemas-microsoft-com:office:office"><Author>${o.author}</Author><Created>${o.created}</Created></DocumentProperties><Styles>${style}<Style ss:ID="Currency"><NumberFormat ss:Format="Currency"></NumberFormat></Style><Style ss:ID="calendar"><NumberFormat ss:Format="yyyy-mm-dd hh:mm:ss"></NumberFormat></Style></Styles>${content}</Workbook>`;
    }

    /**
     * Create a worksheet object
     */
    var createWorksheet =  function(jexcelInstance) {
        // Create worksheet object
        var worksheet = helpers();
        worksheet.instance = jexcelInstance;
        worksheet.name = jexcelInstance.options.worksheetName.replace(' ', '');

        // Execute
        worksheet.getData();

        // Create container
        return worksheet;
    }

    /**
     * Generate excel file from jexcel
     */
    return function(el, o) {
        // Set default value
        if (! o) {
           o = {};
        }

        /**
         * Generate XLS file from jexcel
         */
        var defaultOptions = {
             filename: 'export',
             author: 'jspreadsheet.com',
             sheets: null,
             header: false,
             computedStyle: false,
             styleHeader: 'border: 1px solid #cccccc;background-color: #f3f3f3;text-align: center;',
             wrapText: false,
             version: true,
        }

        for (var property in defaultOptions) {
            if (!  o.hasOwnProperty(property) || o[property] == null) {
                o[property] = defaultOptions[property];
            }
        }

        // New options
        options = o;

        // Just case jexcel has not been loaded yet
        if (! jexcel && typeof(require) === 'function') {
            if (options.version == true) {
                jexcel = require('jexcel-pro');
            } else {
                jexcel = require('jexcel');
            }
        }

        // Reset
        styles = {};
        styleIndex = 1;

        // Worksheets
        var worksheets = [];

        // Get worksheets
        if (Array.isArray(el.jexcel)) {
            for (var t = 0; t < el.jexcel.length; t++) {
                worksheets.push(createWorksheet(el.jexcel[t]));
            }
        } else {
            worksheets.push(createWorksheet(el.jexcel));
        }

        // Workbook
        var workbook = createWorkbook({
            create: (new Date()).getTime(),
            author: options.author,
            worksheets: worksheets,
        });

        // Blob
        var blob = new Blob(["\uFEFF"+workbook], { type: 'application/vnd.ms-excel;charset=utf-8;' });

        // IE Compatibility
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, options.filename + '.xls');
        } else {
            // Download element
            var pom = document.createElement('a');
            var url = URL.createObjectURL(blob);
            pom.href = url;
            pom.setAttribute('download', options.filename + '.xls');
            document.body.appendChild(pom);
            pom.click();
            pom.parentNode.removeChild(pom);
        }
    }
})));