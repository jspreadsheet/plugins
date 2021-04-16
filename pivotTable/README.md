# JSpreadsheet Plugin : pivot Table

The pivot table plugin add lot of features for make a pivot table like Excel :
- Create Sheet in mode pivot table
- Create slicer for filter data
- Filter data
- Make custom function for values
- Make custom sort of columns/rows/slicers
- Can run other plugin specifics (for example : conditional style)

![preview](https://user-images.githubusercontent.com/52194475/104006056-4a6cd700-51a6-11eb-88af-db819d2bb872.png)


This plugin is **Premium**

# Demo

Demo available on [Demo of plugin](https://demo.gbonnaire.fr/jExcel/plugin.pivottable.php)

# Source

Source available on Repo.Gbonnaire.fr : [Repo.Gbonnaire.fr](https://repo.gbonnaire.fr/product/jexcel-plugin-pivottable)

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
			<td><code>colsSortBy</code></td>
			<td>Defined custom sort of columns in pivot</td>
			<td><code>function|null</code></td>
			<td><code>null</code></td>
		</tr>
		<tr>
			<td><code>columns</code></td>
			<td>List of name or column name ("A") or column index (0 = first column)</td>
			<td><code>Array</code></td>
			<td><code>null</code></td>
		</tr>
		<tr>
			<td><code>data</code></td>
			<td>if data null, data is get on instance</td>
			<td><code>Array|null</code></td>
			<td><code>null</code></td>
		</tr>
		<tr>
			<td><code>filters</code></td>
			<td>filters present of pivot "columnName":value/regexp/arrayofvalue</td>
			<td><code>Object</code></td>
			<td><code>{}</code></td>
		</tr>
		<tr>
			<td><code>footers</code></td>
			<td>Show footers of pivot (Total columns)</td>
			<td><code>Boolean</code></td>
			<td><code>false</code></td>
		</tr>
		<tr>
			<td><code>hideSheetData</code></td>
			<td>hide sheet with data</td>
			<td><code>Boolean</code></td>
			<td><code>false</code></td>
		</tr>
		<tr>
			<td><code>plugins</code></td>
			<td>Plugins for instance JExcel of pivot</td>
			<td><code>Array|null</code></td>
			<td><code>null</code></td>
		</tr>
		<tr>
			<td><code>rows</code></td>
			<td>List of name or column name ("A") or column index (0 = first column)</td>
			<td><code>Array</code></td>
			<td><code>[]</code></td>
		</tr>
		<tr>
			<td><code>rowSortBy</code></td>
			<td>Custom sort row (index, array of index, function)</td>
			<td><code>int|array|function</code></td>
			<td><code>null</code></td>
		</tr>
		<tr>
			<td><code>showEmptyColumns</code></td>
			<td>Show columns with no data</td>
			<td><code>boolean</code></td>
			<td><code>false</code></td>
		</tr>
		<tr>
			<td><code>slicers</code></td>
			<td>List of name or column name ("A") or column index (0 = first column)</td>
			<td><code>Array</code></td>
			<td><code>[]</code></td>
		</tr>
		<tr>
			<td><code>slicersSortBy</code></td>
			<td>Custom sort slicers (function with indexSlicers)</td>
			<td><code>function</code></td>
			<td><code>null</code></td>
		</tr>
		<tr>
			<td><code>values</code></td>
			<td>Name or column name ("A") or column index (0 = first column)</td>
			<td><code>string|int</code></td>
			<td><code>null</code></td>
		</tr>
		<tr>
			<td><code>valuesFormula</code></td>
			<td>Results cross row/column</td>
			<td><code>string(SUM/COUNT/AVG/MIN/MAX)|function</code></td>
			<td><code>"SUM"</code></td>
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
			<td><code>text_allItems</code></td>
			<td>All items</td>
		</tr>
		<tr>
			<td><code>text_empty</code></td>
			<td>(empty)</td>
		</tr>
		<tr>
			<td><code>text_resultsOf</code></td>
			<td>Results of</td>
		</tr>
		<tr>
			<td><code>text_slicer_multiple</code></td>
			<td>Multiple select</td>
		</tr>
		<tr>
			<td><code>text_slicer_clear</code></td>
			<td>Clear select</td>
		</tr>
		<tr>
			<td><code>text_total</code></td>
			<td>Total</td>
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
			<td><code>setData(Array) -> Void</code></td>
			<td>Defined data for pivotTable</td>
			<td><code>jexcel.current.plugins.pivotTable.setData([[1,2,3],[4,5,6]]);</code></td>
		</tr>
		<tr>
			<td><code>updatePivot() -> Void</code></td>
			<td>refresh pivot from data</td>
			<td><code>jexcel.current.plugins.pivotTable.updatePivot();</code></td>
		</tr>
	</tbody>
</table>

## Get started

Header on page
```HTML
<script src="https://jexcel.net/v7/jexcel.js"></script>
<script src="https://jexcel.net/v7/jsuites.js"></script>
<link rel="stylesheet" href="https://jexcel.net/v7/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jexcel.net/v7/jexcel.css" type="text/css" />

<script src="/path/to/jexcel.pivotTable.js"></script>
```

Initialize plugin on JExcel
```JavaScript
jexcel(document.getElementById('spreadsheet'), {
	...
	plugins: [
      ...
     { name:'pivot', plugin:jexcel_pivotTable, options:{
                rows: ["A", "B", "C"], 
                columns: ["E", "F", "G"], 
                values: "H", 
                valuesFormula: "SUM", 
                filters: {"C": ["New York", "London"]},
                slicers: ["C", "E", "F", "G"],
                rowsSortBy: [2,1],
                colsSortBy: function(RowA, RowB) {
                  var a_value_col2 = RowA[2];
                  var b_value_col2 = RowB[2];
                  if(RowA[0] == RowB[0]) {
                      if(RowA[1] == RowB[1]) {
                          if(a_value_col2 == b_value_col2) {
                              return 0;
                          } else {
                            var a_index = orderReferential.indexOf(a_value_col2);
                            var b_index = orderReferential.indexOf(b_value_col2);
                            return a_index>b_index ? 1:-1;
                          }
                      } else {
                          return RowA[1]>RowB[1] ? 1:-1;
                      }
                  } else {
                      return RowA[0]>RowB[0] ? 1:-1;
                  }
                },
                slicersSortBy: function(a, b, indexSlicer) {
                    if(a==b) {
                        return 0;
                    }
                    if(indexSlicer==0) { // First slicer
                        var a_index = orderReferential.indexOf(a.toLowerCase());
                        var b_index = orderReferential.indexOf(b.toLowerCase());
                        return a_index>b_index ? 1:-1;
                    } else { // Default
                        return a>b ? 1:-1;
                    }
                },
                worksheetName: "Pivot Table",
                hideSheetData: false,
                plugins:null,
                footers: false,
            }},
      ...  
    ],
    ...
});
```


# Copyright and license

Copyright [GBonnaire.fr](https://www.gbonnaire.fr) and Code released under the Commercial License. This plugin requiere license of [Repo.gbonnaire.fr](https://repo.gbonnaire.fr)
