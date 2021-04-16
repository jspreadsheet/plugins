## JSpreadsheet Plugin : auto Width

The autoWidth plugin add possibility to set auto width of columns.

This plugin is **Free**

## Demo

Demo available on [Demo of plugin](https://demo.gbonnaire.fr/jExcel/plugin.autowidth.php)

## GitHub

Source available on GitHub : [GitHub](https://github.com/Guillaume-Bo/jexcel-plugins-and-editors/tree/master/plugins/autoWidth)

### Features

- Auto width columns without width property or property:"auto" on intialization
- the min width is egal to defaultColWidth
- can setWidth with "auto" value


## Documentation

### Dependencies

- [JSpreadsheet Pro v7](https://www.jspreadsheet.net/v7) 

if you have a lot a plugins, add on the top autoWidth
### Get started

Header on page
```HTML
<script src="https://jexcel.net/v7/jexcel.js"></script>
<script src="https://jexcel.net/v7/jsuites.js"></script>
<link rel="stylesheet" href="https://jexcel.net/v7/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jexcel.net/v7/jexcel.css" type="text/css" />

<script src="/path/to/jexcel.autoWidth.js"></script>
```

Initialize plugin on JExcel
```JavaScript
jexcel(document.getElementById('spreadsheet'), {
	...
	plugins: [
      ...
      { name:'autoWidth', plugin:jss_autoWidth},
      ...  
    ],
    ...
});
```


## CDN

You can use this CDN link

```HTML
<script src="https://cdn.jsdelivr.net/gh/Guillaume-Bo/jexcel-plugins-and-editors@latest/plugins/autoWidth/jexcel.autoWidth.js"></script>
```

## NPM
Coming soon (March 2021)
```javascript
import download from '@jspreadsheet/autoWidth';
```

## Copyright and license

Copyright [GBonnaire.fr](https://www.gbonnaire.fr) and Code released under the MIT License
