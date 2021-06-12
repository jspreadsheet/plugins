# JSpreadsheet Plugin : Conditional style

The Conditional Style plugin like conditional style of Excel. With this plugin, you can:
- Add conditional style on Jspreadsheet like Excel on specific cell, column, row, range or all cells
- Order conditional style and stop apply when criteria is true
- Add style with class or style properties
- Add icon on cell with material-icons

![preview](https://user-images.githubusercontent.com/52194475/91465458-15fb1d00-e88e-11ea-960a-c79f42f55b7b.png)


This plugin is **Premium**

# Demo

Demo available on [Demo of plugin](https://demo.gbonnaire.fr/jExcel/plugin.conditionnalstyle.php)

# Source

Source available on Repo.Gbonnaire.fr : [Repo.Gbonnaire.fr](https://repo.gbonnaire.fr/product/jexcel-plugin-conditionalstyle)

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
			<td><code>allUpdateAlways</code></td>
			<td>Update all cell on all refresh, when this property is set to false, refresh only cell changed and impacted (linked by formula)</td>
			<td><code>Boolean</code></td>
			<td><code>false</code></td>
		</tr>
		<tr>
			<td><code>rules</code></td>
			<td>Define all rules in order of apply</td>
			<td><code>Array of rules</code></td>
			<td><code>[]</code></td>
		</tr>
		<tr>
			<td><code>pathClassName</code></td>
			<td>Path css class name. When you apply style, this plugin create a new class CSS, and this path can specific spreadsheet to apply</td>
			<td><code>String</code></td>
			<td><code>.jexcel tbody tr td</code></td>
		</tr>
	</tbody>
</table>


## Options of Rules
<table>
	<thead>
		<tr>
			<th>Option name</th>
			<th>Description</th>
			<th>Type</th>
			<th>Example</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>Range (optional)</code></td>
			<td>Range of cells. Can be add multiple ranges separate by <code>;</code>. If not defined, by default is all cells of sheet<br>
			Other syntax available : 
			1:1 = All data of row 1
			A:A = All data of column A</td>
			<td><code>String</code></td>
			<td><code>{range:"B1:B10;1:1", criteria: "Honda", class:"cellAlert"},</code></td>
		</tr>
		<tr>
			<td><code>criteria (optional)</code></td>
			<td>Is condition for apply rules. Critera is directly a value or a formula. If not defined, by default is apply to all cells of sheet</td>
			<td><code>String / Int / Float / Boolean / Function</code></td>
			<td><code>{criteria: "=IF(MOD(ROW(),2)==1, true, false)", style:{"background-color": "lightblue"}, stopIfTrue:true},</code></td>
		</tr>
		<tr>
			<td><code>style (optional)</code></td>
			<td>Style apply on cell if result of criteria is right</td>
			<td><code>String</code></td>
			<td><code>{criteria: "=IF(MOD(ROW(),2)==1, true, false)", style:{"background-color": "lightblue"}},</code></td>
		</tr>
		<tr>
			<td><code>class (optional)</code></td>
			<td>Class CSS apply on cell if result of critera is right</td>
			<td><code>String</code></td>
			<td><code>{range:"B1:B10;1:1", criteria: "Honda", class:"cellAlert"},</code></td>
		</tr>
		<tr>
			<td><code>stopIfTrue (optional)</code></td>
			<td>this option like Excel, if rule is apply, stop apply conditional style for this cell (no go check next rule). By Default is <code>false</code></td>
			<td><code>Boolean</code></td>
			<td><code>&lt;i class="context_icon material-icons"&gt;create&lt;/i&gt;</code></td>
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
			<td><code>addRule(Range<String>, Criteria<String|Int|Float|Boolean>, Style<String>, Class<String>, Position<Int>) -> Void</code></td>
			<td>Create new rule</td>
			<td><code>jspreadsheet.current.plugins.conditionalstyle.addRule("B:B", ">3000", "color: red;", null, 1);</code></td>
		</tr>
		<tr>
			<td><code>editRule(Position<Int>, Range<String>, Criteria<String|Int|Float|Boolean>, Style<String>, Class<String>) -> Void</code></td>
			<td>Edit rule on specific position</td>
			<td><code>jspreadsheet.current.plugins.conditionalstyle.editRule(1, "B:B", "<3000", "color: red;", null);</code></td>
		</tr>
		<tr>
			<td><code>getCSS() -> String</code></td>
			<td>Get all CSS of styles. Use for example with print plugin</td>
			<td><code>{ name:'print', plugin:jss_print, options:{style:function(obj) { return obj.plugins.conditionalstyle.getCSS(); }} },</code></td>
		</tr>
		<tr>
			<td><code>moveRulePosition(Position<Int>, NewPosition<Int>) -> Void</code></td>
			<td>Move rule to specific position</td>
			<td><code>jspreadsheet.current.plugins.conditionalstyle.moveRulePosition(1, 3);</code></td>
		</tr>
		<tr>
			<td><code>removeRule(Position<Int>) -> Void</code></td>
			<td>Remove rule on specific position</td>
			<td><code>jspreadsheet.current.plugins.conditionalstyle.removeRule(3);</code></td>
		</tr>
	</tbody>
</table>

## Get started

Header on page
```HTML
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jspreadsheet.com/v7/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />

<script src="/path/to/jexcel.conditionalstyle.js"></script>
```

Initialize plugin on JSpreadsheet
```JavaScript
jspreadsheet(document.getElementById('spreadsheet'), {
	...
	plugins: [
      ...
      { name:'conditionalstyle', plugin:jss_conditionalstyle},
      ...  
    ],
    ...
});
```
### Example
Header on page
```HTML
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jspreadsheet.com/v7/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />

<script src="/path/to/jexcel.conditionalstyle.js"></script>

<style>    
    .jexcel tbody tr td.cellAlert {
        background-color: #f46e42!important;
        color: #ffffff;
    }    
</style>
```

Initialize plugin on JSpreadsheet
```JavaScript
jspreadsheet(document.getElementById('spreadsheet'), {
	...
	plugins: [
      ...
   		{ name:'conditionalstyle', plugin:jss_conditionalstyle, options:{rules:[
   			// #Rules 1 : For Range B1:B10 and Row 1, cell = Honda use ClassCss cellAlert
	                {range:"B1:B10;1:1", criteria: "Honda", class:"cellAlert"}, 
	                // #Rule 2 : All data of Column G if value > 3000, apply this style and stop here (no check next rules if true)
	                {range:"G:G", criteria: ">3000", style:{"color": "red", "font-weight":"bold", "background-color": "LightPink"}, stopIfTrue:true}, 
	                // #Rule 3 : All data of Column F, if value = true (checkbox), apply style and stop here (no check next rules if true)
	                {range:"F:F", criteria: true, style:"background-color:green", stopIfTrue:true}, 
	                // #Rule 4 All sheet, If rule is even, apply style                      
	                {criteria: "=IF(MOD(ROW(),2)==1, true, false)", style:{"background-color": "lightblue"}},  
        	]}},
      ...  
    ],
    ...
});
```

# Copyright and license

Copyright [GBonnaire.fr](https://www.gbonnaire.fr) and Code released under the Commercial License. This plugin requiere license of [Repo.gbonnaire.fr](https://repo.gbonnaire.fr)
