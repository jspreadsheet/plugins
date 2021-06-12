# Plugins

The JSS plugins are the best way to enhance existing or create new features for your online spreadsheets. There are plenty of free or premium plugins already available, but you can build your custom plugins. You will find here official or third-party plugins.

## Custom plugins

You can overwrite a few of the methods described below to create custom features. For instance, change the toolbar or context menu, or implement a server-side spreadsheet data persistence. You will have access to all components in your spreadsheet, and along with the available events, you would be able to create amazing things.  

<table>
<thead>
<tr>
<th>Method</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>init</td>
<td>When a new worksheet is added.<br><code>init(worksheet: Object) : void</code></td>
</tr>
<tr>
<td>onevent</td>
<td>It would receive a call for every spreadsheet event.<br><code>onevent(event: String, a?: any, b?: any, c?: any, d?: any) : void</code><br>
The number of arguments would vary depending on which event is being executed. The first argument is the event name.</td>
</tr>
<tr>
<td>persistence</td>
<td>When the spreadsheet needs to save something in the server. The second argument depends on which method is being executed.<br>
<code>persistence(method: String, args: Object) : void</code><br>
</td>
</tr>
<tr>
<td>contextMenu</td>
<td>When the user opens the context menu.<br>
<code>contextMenu(instance: Object, x: Number, y: Number, e: MouseEvent, items: Array, section: String, a: any, b?: any) : void</code><br>
<pre>
/**
   * Run on the context menu
   * @param instance Jexcel Spreadsheet Instance
   * @param x coordinates from the clicked cell
   * @param y coordinates from the clicked cell
   * @param e click object
   * @param items current items in the contextMenu
   * @param section
   * @param argument1 depends which section
   * @param argument2 depends which section
   */
<pre>
</td>
</tr>
<tr>
<td>toolbar</td>
<td>When the toolbar is create and clicked.<br><code>toolbar(instance: Object, items: Array) : void</code></td>
</tr>
</tbody>
</table>

## Basic implementation

The following code is a basic implementation that can be used as a reference.  

### Plugin implementation

```Javascript
var newPlugin = (function() {
    // Plugin object
    var plugin = {};

    /**
     * It will be executed for every new worksheet
     */
    plugin.init = function(worksheet) {
    }

    /**
     * Jspreadsheet events
     */
    plugin.onevent = function() {
        // It would be executed in every single event and can be used to customize actions
    }

    /**
     * Persistence: It would be call every single time persistence is required
     * @param {string} method - action executed
     * @param {object} args - depending on the action.
     */
    plugin.persistence = function(method, args) {
        // Different options are used depending on the action performated. 
    }

    /**
     * Run on the context menu
     * @param instance Jexcel Spreadsheet Instance
     * @param x coordinates from the clicked cell
     * @param y coordinates from the clicked cell
     * @param e click object
     * @param items current items in the contextMenu
     */
    plugin.contextMenu = function(instance, x, y, e, items) {
        // Can be used to overwrite the contextMenu

        return items;
    }

    /**
     * Run on toolbar
     * @param instance Jexcel Spreadsheet Instance
     * @param items current items in the toolbar 
     */
    plugin.toolbar = function(instance, items) {
        // Can be used to overwrite the toolbar

        return items;
    }

    // Any startup configuration goes here
    // (...)

    // Return the object
    return plugin;
});
```

### Loading the plugin

Considering the following example, you can use the following code to integrate the plugin into a spreadsheet.

```HTML
<html>
<script src="https://jspreadsheet.com/v7/jexcel.js"></script>
<script src="https://jspreadsheet.com/v7/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jexcel.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jsuites.css" type="text/css" />

<script src="/js/newPlugin.js"></script>

<div id='spreadsheet'></div>

<script>
var spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        { minDimensions: [10, 10] },
        { minDimensions: [10, 10] },
    ],
    plugins: { newPlugin }
});

// This method is used to load plugins after the spreadsheet initialization
var loadPlugins = function() {
    spreadsheet.setPlugins({ otherPlugin });
}
</script>
</html>
```

## <a name="Loading-a-plugin-example">Examples</a>

The following code is a working example of a plugin in action.  

## <a name="spreadsheet-property-plugin">Spreadsheet properties update</a>

The properties plugin allow the user to change some of the spreadsheet settings, through a new option included in the context menu.  

<span class="small">To test: right-click in any cell and choose the last option in the context mene.</span>  

### HTML

```HTML
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v4/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v4/jsuites.css" type="text/css" />

<script src="https://jspreadsheet.com/v8/plugins/properties.js"></script>

<div id='spreadsheet'></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        { minDimensions: [10, 10] },
        { minDimensions: [10, 10] },
    ],
    plugins: { properties },
});
</script>
</html>
```

### CDN

```Javascript
// Installation npm install @jspreadsheet/properties
import properties from '@jspreadsheet/properties';

// Loading the plugin into the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        { minDimensions: [10, 10] },
        { minDimensions: [10, 10] },
    ],
    plugins: { properties },
});
```

</div>

</div>

</div>

## Plugins documentation

More about the JSS spreadsheet plugins.

<a href='https://jspreadsheet.com'>https://jspreadsheet.com/plugins</a>

### <a name="Publish-your-plugins">Publish your plugins</a>

To publish your plugins on our website. Please, clone this repository and send you PR.
