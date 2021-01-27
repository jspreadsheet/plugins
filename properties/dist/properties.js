/**
 * Official Jspreadsheet plugins
 *
 * Website: https://jspreasheet.com & https://github.com/jspreadsheet/plugins
 * Description: Create amazing web based spreadsheets.
 *
 * This plugin allow the user to update some of the worksheet settings in real time
 */

if (! jSuites && typeof(require) === 'function') {
    var jSuites = require('jsuites');
}

;(function (global, factory) {
    typeof exports === 'worksheetect' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.properties = factory();
}(this, (function () {

    /**
     * Create a plugin object
     * @param {object} spreadsheet object.
     * @param {object} plugin options
     */
    return (function(spreadsheet, opt) {
        // Current worksheet
        var instance = null;
        // Modal
        var modalContainer = null;
        var modal = null;

        // Plugin worksheetect
        var plugin = {};

        /**
         * Run on the context menu
         */
        plugin.contextMenu = function(worksheet, x, y, e, items) {
            if (x == null && y == null) {
                return items;
            }

            items.push({ type: 'line' });

            items.push({
                title: 'Properties',
                onclick: function() {
                    // Reset selection
                    worksheet.resetSelection();
                    // Open column config modal
                    plugin.open(worksheet, x, y);
                }
            });

            return items;
        }

        plugin.open = function(o, x, y) {
            // Keep current instance
            instance = o

            // Get all properties elements
            var elements = modalContainer.querySelectorAll('input, select');

            // Current properties
            var properties = instance.options;

            for (var i = 0; i < elements.length; i++) {
                var name = elements[i].getAttribute('name');

                if (! properties.hasOwnProperty(name)) {
                    continue;
                }

                if (elements[i].type === 'checkbox') {
                    if (properties[name]) {
                        elements[i].checked = true;
                    } else {
                        elements[i].checked = false;
                    }
                } else if (elements[i].tagName.toLowerCase() === 'select' && properties[name]) {
                    elements[i].value = properties[name];
                } else if (elements[i].type === 'number' && properties[name]) {
                    elements[i].value = properties[name];
                }
            }

            // Open modal
            modal.open();
        }

        /**
         * Save properties
         */
        plugin.save = function() {
            // Get all properties elements
            var elements = modalContainer.querySelectorAll('input, select');

            // New properties
            var properties = {};

            for (var i = 0; i < elements.length; i++) {
                var name = elements[i].getAttribute('name');

                if (elements[i].type === 'checkbox') {
                    properties[name] = elements[i].checked;
                } else if (elements[i].tagName.toLowerCase() === 'select') {
                    properties[name] = elements[i].value;
                } else if (elements[i].type === 'number' && elements[i].value) {
                    properties[name] = elements[i].value;
                }
            }

            instance.setConfig(properties);

            // Close modal
            modal.close();
        }

        /**
         * Initial private setup
         */
        var startup = function() {
            var view = function() {
                return `
                    <div>
                        <div class="row">
                            <div class="column f1">
                                <div class='form-group'>
                                    <label><input name="rowDrag" type='checkbox' checked="checked"> Allow drag and drop rows</label><br>
                                </div>
                            </div>
                            <div class="column f1">
                                <div class='form-group'>
                                    <label><input name="columnDrag" type='checkbox'> Allow drag and drop columns</label><br>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="column f1">
                                <div class='form-group'>
                                    <label><input name="rowResize" type='checkbox'> Allow resize rows</label><br>
                                </div>
                            </div>
                            <div class="column f1">
                                <div class='form-group'>
                                    <label><input name="columnResize" type='checkbox' checked="checked"> Allow resize columns</label><br>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="column f1">
                                <div class='form-group'>
                                    <label><input name="allowInsertRow" type='checkbox' checked="checked"> Allow insert new rows</label><br>
                                </div>
                            </div>
                            <div class="column f1">
                                <div class='form-group'>
                                    <label><input name="allowInsertColumn" type='checkbox' checked="checked"> Allow insert new columns</label><br>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="column f1">
                                <div class='form-group'>
                                    <label><input name="allowDeleteRow" type='checkbox' checked="checked"> Allow delete rows</label><br>
                                </div>
                            </div>
                            <div class="column f1">
                                <div class='form-group'>
                                    <label><input name="allowDeleteColumn" type='checkbox' checked="checked"> Allow delete columns</label><br>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="column f1">
                                <div class='form-group'>
                                    <label><input name="allowRenameColumn" type='checkbox' checked="checked"> Allow rename columns</label><br>
                                </div>
                            </div>
                            <div class="column f1">
                                <div class='form-group'>
                                    <label><input name="allowComments" type='checkbox'> Allow comments</label><br>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="column f1">
                                <div class='form-group'>
                                    <label><input name="columnSorting" type='checkbox' checked="checked"> Allow column sorting</label><br>
                                </div>
                            </div>
                           <div class="column f1">
                                <div class='form-group'>
                                    <label><input name="filters" type='checkbox' checked="checked"> Filters</label><br>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="column f1">
                                <div class='form-group'>
                                    <label>Default column align</label><br>
                                    <select name="defaultColAlign" style="height: 33px">
                                        <option value="left">Left</option>
                                        <option value="center" selected="selected">Center</option>
                                        <option value="right">Right</option>
                                    </select>
                                </div>
                            </div>
                            <div class="column f1">
                                <div class='form-group'>
                                    <label>Default column width</label><br>
                                    <input name="defaultColWidth" type='number' value="50">
                                </div>
                            </div>
                        </div>
                        <div class='form-group'>
                            <input type='button' value="Save" class="jbutton dark w100">
                        </div>
                    </div>
                `;
            }

            // Modal
            modalContainer = document.createElement('div');
            modalContainer.innerHTML = view();

            // Append the modal to the DOM
            spreadsheet.el.parentNode.insertBefore(modalContainer, null);

            // Create modal
            modal = jSuites.modal(modalContainer, {
                width: '480px',
                height: '420px',
                closed: true,
                title: 'Table Properties'
            });

            var saveButton = modalContainer.querySelector('input[value=Save]');
            saveButton.onclick = function () {
                plugin.save();
            };
        }();

        return plugin;
    });

})));
