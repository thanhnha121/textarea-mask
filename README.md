# Textarea Mask

## Install:
### jQuery Required
```
<script src="https://code.jquery.com/jquery.min.js"></script>
<script src="mask.js"></script>
```
Or:
```
<script src="mask.min.js"></script>
```

## How it works:

Highlight attributes which was put in your textarea!

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

