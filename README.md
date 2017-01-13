# Tooltip Module 
This repo contains the  tooltip module. This module uses Boostrap 3's tooltip component  as well as a custom tool tip that works to pull data from our custom SVG elements.


### Using The Botstrap Tooltip
The Bootstrap template is simple to use just add the data-toggle="tooltip" attribute to any element you'd like a tooltip to pop up. This will activate the tooltip and use the title attribute as the text. See below:
```javascript
<!-- HTML to write -->
<a href="#" data-toggle="tooltip" title="Some tooltip text!">Hover over me</a>

<!-- Generated markup by the plugin -->
<div class="tooltip top" role="tooltip">
  <div class="tooltip-arrow"></div>
  <div class="tooltip-inner">
    Some tooltip text!
  </div>
</div>
```

### Using The Custom SVG Tooltip
The custom SVG tooltip works in 2 parts and basically adds an event to the mouse pointer  that activates when hovering over a SVG element. See below:


**Step 1:** Add the code below to the D3 svg element you are appending. Basically you just want to make sure the title attribute has a value pulled from the data use to draw the element. In this case we are using it's value:
```javascript
 .attr("title",function(d) {return d.value}) 
```
**Step 2:** Add the code below to the the body of your HTML page. Make sure it isn't nested in anything, it's probably easiest to just throw it at the bottom:
```javascript
<!--This is the hidden mouse pointer tooltip-->
<i id="svg-tooltip" data-toggle="tooltip" data-placement="auto" title="Tooltip for svg elements" data-animation="false" data-trigger="manual"/>
```
**Step 3:** Add the code to your main JS file to import the module ES6 style:
```javascript
import {toolTips} from 'tooltips';
```