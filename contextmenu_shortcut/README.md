## JExcel Plugin : Contextmenu shortcut

ContextMenu Shortcut is a plugin to improve the contextMenu of JExcel Pro. It allows you to change the base of shortcuts depending on whether you are on a Mac or a Windows. It also allows you to add icons for each menu item.

![preview](https://user-images.githubusercontent.com/52194475/91465865-a0dc1780-e88e-11ea-8a41-1ed1f5275c95.png)

This plugin is **Free**

## Demo

Demo available on [Demo of plugin](https://demo.gbonnaire.fr/jExcel/plugin.contextmenu.php)

## GitHub

Source available on GitHub : [GitHub](https://github.com/Guillaume-Bo/jexcel-plugins-and-editors/tree/master/plugins/contextmenu_shortcut)

## Documentation

### Dependencies

- [JExcel Pro v7](https://www.jexcel.net/v7)

- With default options of plugin, you should use [Material Design icons](https://material.io/resources/icons/). But, if you want, you can use fontawesome with editing all icons

```HTML
<link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet">
 ```   

### Options of plugin

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
			<td><code>icon_changeColumnType</code></td>
			<td>Icon for "Change column type"</td>
			<td><code>String</code></td>
			<td><code>ballot</code></td>
		</tr>
		<tr>
			<td><code>icon_insertANewColumnBefore</code></td>
			<td>Icon for "Insert a new column before"</td>
			<td><code>String</code></td>
			<td><code>add</code></td>
		</tr>
		<tr>
			<td><code>icon_insertANewColumnAfter</code></td>
			<td>Icon for "Insert a new column after"</td>
			<td><code>String</code></td>
			<td><code>add</code></td>
		</tr>
		<tr>
			<td><code>icon_deleteSelectedColumns</code></td>
			<td>Icon for "Delete selected columns"</td>
			<td><code>String</code></td>
			<td><code>delete</code></td>
		</tr>
		<tr>
			<td><code>icon_renameThisColumn</code></td>
			<td>Icon for "Rename this column"</td>
			<td><code>String</code></td>
			<td><code>create</code></td>
		</tr>
		<tr>
			<td><code>icon_orderAscending</code></td>
			<td>Icon for "Order ascending"</td>
			<td><code>String</code></td>
			<td><code>sort</code></td>
		</tr>
		<tr>
			<td><code>icon_orderDescending</code></td>
			<td>Icon for "Order descending"</td>
			<td><code>String</code></td>
			<td><code>sort</code></td>
		</tr>
		<tr>
			<td><code>icon_insertANewRowBefore</code></td>
			<td>Icon for "Insert a new row before"</td>
			<td><code>String</code></td>
			<td><code>add</code></td>
		</tr>
		<tr>
			<td><code>icon_insertANewRowAfter</code></td>
			<td>Icon for "Insert a new row after"</td>
			<td><code>String</code></td>
			<td><code>add</code></td>
		</tr>
		<tr>
			<td><code>icon_deleteSelectedRows</code></td>
			<td>Icon for "Delete Selected Rows"</td>
			<td><code>String</code></td>
			<td><code>delete</code></td>
		</tr>
		<tr>
			<td><code>icon_addComments</code></td>
			<td>Icon for "Add comment"</td>
			<td><code>String</code></td>
			<td><code>insert_comment</code></td>
		</tr>
		<tr>
			<td><code>icon_clearComments</code></td>
			<td>Icon for "Clear comments"</td>
			<td><code>String</code></td>
			<td><code>clear</code></td>
		</tr>
		<tr>
			<td><code>icon_cut</code></td>
			<td>Icon for "Cut"</td>
			<td><code>String</code></td>
			<td><code>content_cut</code></td>
		</tr>
		<tr>
			<td><code>icon_copy</code></td>
			<td>Icon for "Copy"</td>
			<td><code>String</code></td>
			<td><code>content_copy</code></td>
		</tr>
		<tr>
			<td><code>icon_paste</code></td>
			<td>Icon for "Paste"</td>
			<td><code>String</code></td>
			<td><code>content_paste</code></td>
		</tr>
		<tr>
			<td><code>icon_saveAs</code></td>
			<td>Icon for "Save As"</td>
			<td><code>String</code></td>
			<td><code>save</code></td>
		</tr>
		<tr>
			<td><code>icon_about</code></td>
			<td>Icon for "About"</td>
			<td><code>String</code></td>
			<td><code>info</code></td>
		</tr>
		<tr>
			<td><code>isIconHTML</code></td>
			<td>Flag for defined is icon value is HTML or not (to use only is use an other library of icons i.e. <code>&lt;i class='fa fa-icons'>&gt;&lt;/i&gt;</code></td>
			<td><code>Boolean</code></td>
			<td><code>false</code></td>
		</tr>
	</tbody>
</table>

### Get started

Header on page
```HTML
<script src="https://jexcel.net/v7/jexcel.js"></script>
<script src="https://jexcel.net/v7/jsuites.js"></script>
<link rel="stylesheet" href="https://jexcel.net/v7/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jexcel.net/v7/jexcel.css" type="text/css" />
<link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet">

<script src="/path/to/jexcel.contextmenu_shortcut.js"></script>
```

Initialize plugin on JExcel
```JavaScript
jexcel(document.getElementById('spreadsheet'), {
	...
	plugins: [
      ...
      { name:'shortcut', plugin:jss_contextmenu_shortcut},
      ...  
    ],
    ...
});
```

#### Example with options

Use this way for defined icon of FontAwesome

Header on page
```HTML
<script src="https://jexcel.net/v7/jexcel.js"></script>
<script src="https://jexcel.net/v7/jsuites.js"></script>
<link rel="stylesheet" href="https://jexcel.net/v7/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jexcel.net/v7/jexcel.css" type="text/css" />
<link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet">

<script src="/path/to/jexcel.contextmenu_shortcut.js"></script>
```

Initialize plugin on JExcel
```JavaScript
jexcel(document.getElementById('spreadsheet'), {
	...
	plugins: [
      ...
        { name:'shortcut', plugin:jss_contextmenu_shortcut, options:{
        	icon_addComments: 'add',
        }},
      ...  
    ],
    ...
});
```
## CDN

You can use this CDN link

```HTML
<script src="https://cdn.jsdelivr.net/gh/Guillaume-Bo/jexcel-plugins-and-editors@latest/plugins/contextmenu_shortcut/jexcel.contextmenu_shortcut.js"></script>
```

## NPM
Coming soon (March 2021)
```javascript
import download from '@jspreadsheet/contextmenu_shortcut';
```

## Copyright and license

Copyright [GBonnaire.fr](https://www.gbonnaire.fr) and Code released under the MIT License