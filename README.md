# Tooltip Module 
This repo contains the  tool tip module. This repo has a Bootstrap 3 tooltip and a purely d3 v4 tooltip.

## Botstrap Tooltip



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



```javascript
<!-- HTML to write -->
 .attr("title",function(d) {return d.value}) 
```