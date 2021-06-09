# JSpreadsheet Plugin : Formula

The formula plugin add feature of formulabar and formula editor on cell, you can:
- Tape F2 after selection cell, and your focus is on formula bar for edit.
- When cell is readonly, formulabar show on readonly value of cell.
- Input formula bar is in multiline, tape ALT+ENTER and new line is created on formula bar.
- If cell type is not recognize for formula, first char "=" is denied.
- Range of cells present on formula is colored on focus in formula bar
- Support custom formula + documentation
- Support multi formula autocomplete
- Highlight formula
- edit on cell
- Select Range and Cell for add reference in formula

![preview](https://user-images.githubusercontent.com/52194475/115026029-4bf31d00-9ec2-11eb-8277-75037ec53694.png)


This plugin is **Premium**

# Demo

Demo available on [Demo of plugin](https://demo.gbonnaire.fr/jExcel/plugin.formula.php)

# Source

Source available on Repo.Gbonnaire.fr : [Repo.Gbonnaire.fr](https://repo.gbonnaire.fr/product/jexcel-plugin-formula)

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
			<td><code>allowAutocomplete</code></td>
			<td>Allow autocomplete formula for help write formula</td>
			<td><code>Boolean</code></td>
			<td><code>true</code></td>
		</tr>
		<tr>
			<td><code>allowMultiline</code></td>
			<td>Allow multiline in formulabar</td>
			<td><code>Boolean</code></td>
			<td><code>true</code></td>
		</tr>
		<tr>
			<td><code>allowHighlightFormula</code></td>
			<td>Allow formula highlighted</td>
			<td><code>Boolean</code></td>
			<td><code>true</code></td>
		</tr>
		<tr>
			<td><code>allowHelper</code></td>
			<td>Allow show helper</td>
			<td><code>Boolean</code></td>
			<td><code>true</code></td>
		</tr>
		<tr>
			<td><code>autocompleteSearchApproximative</code></td>
			<td>Search if text is in formula (not only start by) </td>
			<td><code>Boolean</code></td>
			<td><code>false</code></td>
		</tr>
		<tr>
			<td><code>allowFormulaOnTypes</code></td>
			<td>Allow type of cell write formula start by "=". Each type is separate by space</td>
			<td><code>String</code></td>
			<td><code>number text</code></td>
		</tr>
	</tbody>
</table>

## For translation
<table>
	<thead>
		<tr>
			<th>Option name</th>
			<th>Default Value</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>text_about</code></td>
			<td>About</td>
		</tr>
		<tr>
			<td><code>text_example</code></td>
			<td>Example</td>
		</tr>
		<tr>
			<td><code>text_orientation</code></td>
			<td>Orientation</td>
		</tr>
		<tr>
			<td><code>text_results</code></td>
			<td>Results</td>
		</tr>
		<tr>
			<td><code>text_param</code></td>
			<td>Parameter</td>
		</tr>
		<tr>
			<td><code>text_link</code></td>
			<td>Learn more</td>
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
			<td><code>hideBar() → Void</code></td>
			<td>Hide formula bar</td>
			<td><code>jspreadsheet.current.plugins.formula.hide();</code></td>
		</tr>
                <tr>
			<td><code>refreshDoc() → Void</code></td>
			<td>Refresh Documentation after edit element of Formula documentation</td>
			<td><code>jspreadsheet.current.plugins.formula.refreshDoc();</code></td>
		</tr>
                <tr>
			<td><code>showBar() → Void</code></td>
			<td>Show formula bar</td>
			<td><code>jspreadsheet.current.plugins.formula.show();</code></td>
		</tr>
                <tr>
                        <td><code>formulabarInput</code></td>
			<td>Get Element of formula</td>
			<td><code>jspreadsheet.current.plugins.formula.formulabarInput</code></td>
                </tr>
	</tbody>
</table>

## Formula documentation

You can write your documentation of formulas, by default, this documentation is the same of Google Sheet formula. For write your documentation, add new item on the var <code>jexcel.formulasDoc</code>

1 item of jexcel.formulasDoc is construct like : 
```JavaScript
jexcel.formulasDoc['MYFUNCTION()'] = {
       syntax:"MYFUNCTION(value, value)",
       description:"My custom function description ",
       examples:"MYFUNCTION(2008, 7) equals 25",
       params:[
           {type:"Float", comment:"First value"},
           {type:"Float", comment:"Second value"}
        ],
       link:"https://mydocs.domain.ext/doc/123456"
};
```
Important on <code>jexcel.formulasDoc</code> object, define key property formula with () to end else it considers it as a variable.

<table>
	<thead>
		<tr>
			<th>Property name</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>syntax</code></td>
			<td>Syntax of your formula</td>
		</tr>
                <tr>
			<td><code>description</code></td>
			<td>Description of your formula</td>
		</tr>
                <tr>
			<td><code>examples</code></td>
			<td>Example of your formula</td>
		</tr>
                <tr>
			<td><code>params (Array)</code></td>
			<td>Array for description parameters with for 1 param : <code>type</code> and <code>comment</code></td>
		</tr>
                <tr>
			<td><code>link</code></td>
			<td>Link for external documentation</td>
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

<script src="/path/to/jexcel.formula.js"></script>
<link rel="stylesheet" href="/path/to/jexcel.formula.css" type="text/css" />
```

Initialize plugin on JExcel
```JavaScript
jspreadsheet(document.getElementById('spreadsheet'), {
	...
	plugins: [
      ...
      { name:'formula', plugin:jss_formula },
      ...  
    ],
    ...
});
```
## Example with custom formula
Header on page
```HTML
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jspreadsheet.com/v7/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />

<script src="/path/to/jexcel.formula.js"></script>
<link rel="stylesheet" href="/path/to/jexcel.formula.css" type="text/css" />
<script>
   var MY_CUSTOM_FORMULA = function(a,b) {return a+b;};
   jspreadsheet.formulasDoc["MY_CUSTOM_FORMULA()"] = {syntax:"MY_CUSTOM_FORMULA(number,number)",description:"One custom formula for test"};
</script>
```

Initialize plugin on JSpreadsheet
```JavaScript
jspreadsheet(document.getElementById('spreadsheet'), {
	...
	plugins: [
      ...
   	{ name:'formula', plugin:jss_formula },
      ...  
    ],
    ...
});
```

# Copyright and license

Copyright [GBonnaire.fr](https://www.gbonnaire.fr) and Code released under the Commercial License. This plugin requiere license of [Repo.gbonnaire.fr](https://repo.gbonnaire.fr)
