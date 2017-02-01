# Canvas Best Practice

This best practice guide is provided to help you build applications using 
[Canvas for TM1](https://canvasfortm1.com) that are easy to maintain and 
advantage of all of the Canvas features.

There are some keys principles of this document:
 * Consistency **IS** quality!
 * Readability is more important than reducing key strokes.
 * All names (variables, class names, etc) should describe it's usage.
 * Comment anything that is obvious.

## Table of Contents

 * [HTML](#html)
 * [Javascript](#js)
 * [CSS](#css)
 * [HTML or Javascript?](#htmlorjs)

## <a name="html">HTML</a>
Canvas is built using AngularJS directives to allowing you to build complex 
pages with minimal JavaScript code. Having the **logic** of your page in HTML 
adds complexity. 

### Case, whitespace and indentation

  * All html elements, attributes and id's should be **lower-case**
  * Use hyphen to separate words in a value: `id="myElement"` becomes `id="my-element"`.
  * Use 2 spaces as indentation (the default in VS Code).
  * Always indent child blocks inside a parent element.
  * Use empty lines to separate logical code blocks.
  * For elements with many attributes place one on each line (indented) instead of a single line.
  * Always use double-quotes for values for element attributes.
  * The one exception to the above rule is for `tm1-elements`. For this attribute it is better to 
  use single quotes so elements can be qualified with a double quote.

```html

  <!-- BAD -->
  <DIV ID="myELEMENT" >
  </DIV>

  <!-- BETTER, use lower-case and words with a hyphen -->
  <div id="my-element" >
  </div>

```

```html

  <!-- BAD -->
  <div>
  <ul>
  <li></li>
  </ul>
  </div>

  <!-- BETTER, indent your elements -->
  <div>
    <ul>
      <li></li>
    </ul>
  </div>

```

```html

  <!-- BAD -->
  <tm1-ui-dbr tm1-instance="Instance Name" tm1-cube="Cube Name" tm1-elements='Comma separated element list' tm1-comment-cube="Cube Name" tm1-comment-elements='Comma separated element list' tm1-picklist-radio="none" tm1-multi-line="1" tm1-read-only="false" tm1-comment-read-only="false">
  </tm1-ui-dbr>

  <!-- BETTER, use a single attribute per line -->
  <tm1-ui-dbr
     tm1-instance="Instance Name"
     tm1-cube="Cube Name"
     tm1-elements='Comma separated element list'
     tm1-comment-cube="Cube Name"
     tm1-comment-elements='Comma separated element list'
     tm1-picklist-radio="none"
     tm1-multi-line="1"
     tm1-read-only="false"
     tm1-comment-read-only="false"
     >
  </tm1-ui-dbr>

```

```html

  <!-- BAD -->
  <div id='my-element'>

  <!-- BETTER, use a single attribute per line -->
  <tm1-ui-dbr
     tm1-instance="Instance Name"
     tm1-cube="Cube Name"
     tm1-elements='Comma separated element list'
     tm1-comment-cube="Cube Name"
     tm1-comment-elements='Comma separated element list'
     tm1-picklist-radio="none"
     tm1-multi-line="1"
     tm1-read-only="false"
     tm1-comment-read-only="false"
     >
  </tm1-ui-dbr>

```

### Styling

  * Don't use `<table>` elements to layout your page. 
  * Use Bootstrap `class="col-md-4"` classes instead, this will make your page responsive to different browser sizes.
    * SEE: [Bootstrap Grid System](http://getbootstrap.com/css/#grid)
  * Style all of your visual elements: tables, buttons, labels, etc with bootstrap classes.
  * Limit the use of the style attribute on elements.
  * If you repeat a particular style on two or more elements make it a CSS class instead.
  * Before creating your own styles try to use a Bootstrap one instead. This will allow you to change themes easily.
    * SEE: [Bootstrap CSS helper classes](http://getbootstrap.com/css/#helper-classes)
  * Place page specific styles in a `<style>` element at the top of the page.
  * If you use a CSS class on more than one page place it in the `\css\style.css`
  * CSS class names should be **lower-case** and hyphenated between words: `warning-message`

```html

  <!-- BAD, don't use tables for page layouts -->
  <table style="width: 100%;">
    <tr>
      <td>
        Left Column
      </td>
      <td>
        Right Column
      </td>
    </tr>
  </table>

  <!-- BETTER, use Bootstrap grid system instead -->

```

## <a name="js">JavaScript</a>

### Whitespace and Indentation

- Always indent your blocks of code, i.e. if, for, etc.
- Use 2 spaces as indentation (the default in VS Code).
- Use empty lines to separate logical code blocks.

```javascript

  // BAD
  if( something>0 ){
  // No indentation
  for(var i = 0; i < 10; i++){
  // Do something
  }
  }

  // BETTER
  if( something>0 ){
    // Indentation makes is easier to read! 
    for(var i = 0; i < 10; i++){
      // Do something
    } 
  }

```

```javascript

  // BAD, no empty lines
  $scope.page = {
    instance: "dev"
  }
  $scope.getCubes = function(){
    $http.get("api/cubes/" + $scope.page.instance).then(function(success, error) {
      $scope.cubes = success.data.value
    });
  };
  $scope.dimensionNames = function(cube){
    var dims = [];
    _.each(cube.Dimensions, function(dim){
      dims.push(dim.Name);
    });
    return dims.join(", ");
  }

  // BETTER, lines between blocks makes it easier to read
  $scope.page = {
    instance: "dev"
  }

  $scope.getCubes = function(){
    $http.get("api/cubes/" + $scope.page.instance).then(function(success, error) {
      $scope.cubes = success.data.value
    });
  };

  $scope.dimensionNames = function(cube){
    var dims = [];
    _.each(cube.Dimensions, function(dim){
      dims.push(dim.Name);
    });
    return dims.join(", ");
  }


```