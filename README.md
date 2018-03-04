# Textarea Mask

## Install:
### jQuery Required
```
<script src="https://code.jquery.com/jquery.min.js"></script>
<script src="mask.js"></script>
```
### Or:
```
<script src="https://code.jquery.com/jquery.min.js"></script>
<script src="mask.min.js"></script>
```

## How it works:

Highlight attributes which was put in your textarea!

![Screenshot](http://sv1.upsieutoc.com/2018/03/04/mask.gif)

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
    patern: '{}',                   // match pattern in your textarea
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

