# JSpreadsheet Plugin : Mobile

The mobile plugin improve JSpreadsheet for usage on mobile :
- Button for open contextMenu
- New item in contextMenu for edit cell
- Select range after first selection cell origin

![preview](https://repo.gbonnaire.fr/videos/jexcel_mobile.mp4)


This plugin is **Premium**


# Source

Source available on Repo.Gbonnaire.fr : [Repo.Gbonnaire.fr](https://repo.gbonnaire.fr/product/jexcel-plugin-mobile)

# Documentation
## Dependencies

- Materials Icon (You can use font awesome with change icon_menu_open property)

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
			<td><code>icon_menu_open</code></td>
			<td>Icon for button to open context menu</td>
			<td><code>String</code></td>
			<td><code><i class="material-icons">menu_open</i></code></td>
		</tr>
		<tr>
			<td><code>cssButton</code></td>
			<td>CSS of button to open context menu</td>
			<td><code>Boolean</code></td>
			<td><code>position: absolute;background-color: white;width: 23px;height: 23px;border: 2px solid lightgray;border-top-left-radius: 5px;border-bottom-left-radius: 5px;</code></td>
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
			<td><code>text_edit</code></td>
			<td>Edit</td>
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

<script src="/path/to/jexcel.mobile.js"></script>
<link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet">
```

Initialize plugin on JExcel
```JavaScript
jexcel(document.getElementById('spreadsheet'), {
	...
	plugins: [
      ...
      { name:'mobile', plugin:jexcel_mobile},
      ...  
    ],
    ...
});
```

# Copyright and license

Copyright [GBonnaire.fr](https://www.gbonnaire.fr) and Code released under the Commercial License. This plugin requiere license of [Repo.gbonnaire.fr](https://repo.gbonnaire.fr)