# JSpreadsheet Plugin : Tooltip

Plugin for JSpreadsheet for add tooltip feature on cell.

You can add differents types of tooltip :
- Tooltip info, warning, error, comment
- Tooltip for string (and HTML), array, object
- Add copy value on contextmenu



![preview](https://user-images.githubusercontent.com/52194475/115005696-6ddfa600-9ea8-11eb-9ce4-227e0c35e5fb.png)


This plugin is **Premium**

# Demo

Demo available on [Demo of plugin](https://demo.gbonnaire.fr/jExcel/plugin.tooltip.php)

# Source

Source available on Repo.Gbonnaire.fr : [Repo.Gbonnaire.fr](https://repo.gbonnaire.fr/product/jexcel-plugin-tooltip)

# Documentation
## Options of plugin
<table>
    <thead>
        <tr>
            <th>Option name</th>
            <th>Description</th>
            <th>Type</th>
            <th>Default Value</th>
        </tr>
    </thead>
    <tbody>
                 <tr>
            <td><code>positionHorizontal</code></td>
            <td>Position Horizontal of tooltip </td>
            <td><code>string</code></td>
            <td><code>"right"</code></td>
        </tr>
        <tr>
            <td><code>positionVertical</code></td>
            <td>Position Vertical of tooltip</td>
            <td><code>string</code></td>
            <td><code>"bottom"</code></td>
        </tr>
        <tr>
            <td><code>forComments</code></td>
            <td>Active tooltip for comments</td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
        </tr>
    </tbody>
</table>

## For translation
*If you use general translator, you can translate this plugin to replace "text_" by "tooltip_"*
<table>
    <thead>
        <tr>
            <th>Option name</th>
            <th>Default Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>text_copytooltip</code></td>
            <td>Copy tooltip text</td>
        </tr>
        <tr>
            <td><code>text_copytooltipall</code></td>
            <td>Copy all tooltip text</td>
        </tr>
        <tr>
            <td><code>text_copytooltipvalueof</code></td>
            <td>Copy value of</td>
        </tr>
        <tr>
            <td><code>text_copytooltipcol</code></td>
            <td>column</td>
        </tr>
        <tr>
            <td><code>text_copytooltiprow</code></td>
            <td>row</td>
        </tr>
        <tr>
            <td><code>text_notificationvaluecopied</code></td>
            <td>Value copied to clipboard</td>
        </tr>
    </tbody>
</table>

## Methods of plugin

<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>setTooltip(String cellName, String|Object|Array message, *optional* String type, *optional* Boolean removeOnChange ) -> Void</code></td>
            <td>Set tooltip for one cell. Message can be an object of value or Array. In this case, on tooltip use can copy value</td>
            <td><code>jspreadsheet.current.plugins.tooltip.setTooltip("A1", "My tooltip");</code> or <code>myTable.setTooltip("A1", "My tooltip");</code></td>
        </tr>
        <tr>
            <td><code>removeTooltip(String cellName) -> Void</code></td>
            <td>Remove tooltip for one cell</td>
            <td><code>jspreadsheet.current.plugins.tooltip.removeTooltip("A1");</code> or <code>myTable.removeTooltip("A1");</code></td>
        </tr>
        <tr>
            <td><code>getTooltipType(String cellName) -> String</code></td>
            <td>get tooltip type for one cell</td>
            <td><code>jspreadsheet.current.plugins.tooltip.getTooltipType("A1");</code></td>
        </tr>
    </tbody>
</table>

## Helpers

For help to set type, you can use helper
For tooltip type info : <code>jspreadsheet.helpers.tooltipType.info</code>
For tooltip type success : <code>jspreadsheet.helpers.tooltipType.success</code>
For tooltip type warning : <code>jspreadsheet.helpers.tooltipType.warning</code>
For tooltip type error : <code>jspreadsheet.helpers.tooltipType.error</code>
For tooltip type comment : <code>jspreadsheet.helpers.tooltipType.comment</code>

## Get started

Header on page
```HTML
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jspreadsheet.com/v7/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />

<script src="/path/to/jexcel.tooltip.js"></script>
<link rel="stylesheet" href="/path/to/jexcel.tooltip.css" type="text/css" />
</script>

```

Initialize plugin on JSpreadsheet
```JavaScript
var myTable = jspreadsheet(document.getElementById('spreadsheet'), {
    ...
    plugins: [
      ...
      { name:'tooltip', plugin:jss_tooltip, options:{
                    forComments: true,
                    tooltips: {
                          "A1": {message: "one error example", type:jspreadsheet.helpers.tooltipType.error},
                          "B1": {message: "one warning example with <i>HTML</i><hr>Ok!", type:jspreadsheet.helpers.tooltipType.warning},
                          "C1": {message: "one success example", type:jspreadsheet.helpers.tooltipType.success},
                     }
          }},
      ...  
    ],
    ...
});

// Other way for setTooltip
myTable.setTooltip('A3', {name:'One object', valueString:'OK', valueBoolean:true, valueNumber:4});
myTable.setTooltip('B3', [[1,2,3], [4,5,6], [7,8,9]]);
myTable.setTooltip('C3', [
     {col1: "A", col2: 5, col3: 2.5},
     {col1: "B", col2: 6, col3: 2.3},
     {col1: "C", col2: 1, col3: 1.5, col5: "Test string"},
     {col1: "D", col2: 2, col3: 2.1}
]);
```

# Copyright and license

Copyright [GBonnaire.fr](https://www.gbonnaire.fr) and Code released under the Commercial License. This plugin requiere license of [Repo.gbonnaire.fr](https://repo.gbonnaire.fr)
