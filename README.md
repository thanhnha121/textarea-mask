# Textarea Mask
Highlight attributes / tags which was put in your textarea.

Attributes / tags suggestions with filter.

![Screenshot](https://i.imgur.com/hKwvPqB.gifv)

## Install:
jQuery Required:
```
<script src="jquery.js"></script>
<script src="mask.js"></script>
```
Or:
```
<script src="jquery.js"></script>
<script src="mask.min.js"></script>
```

## Usage:
HTML:
```
<div id="mask">
  <textarea></textarea>
</div>
```
JS:
```
initMask(
  $('#mask'),                       // selector
  {
    patern: '{}',                   // match pattern in your textarea, support {} / [] / ()
    unicode: false,                 // true to enable match unicode character
    spacing: false,                 // true to enable match space
    color: 'steelblue'              // background color for each item
  }
  ['animal', 'color', 'bike',...]   // suggestion item
);
  
```
To Get Marked Items:
```
getMaskMarked(selector);
// ['animal', 'color',...] 
```
## Depends on:
- Caret plugin (1.1 kB minified) | https://github.com/accursoft/caret
- Autosize 3.0.20 | https://github.com/jackmoore/autosize
