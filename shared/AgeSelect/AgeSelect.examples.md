### AgeSelect

###### Description:
a `<select/>` tag with self populated options, defined in the module.

###### Examples of Usage

Basic Usage:
```javascript
<AgeSelect id="userAge" value={startAge} onChange={inputChangeHandler}/>
```

With label usage:
```javascript
<AgeSelect label="Select your age" id="userAge" value={startAge} onChange={inputChangeHandler}/>
```
----

Inside the module you'll find helper function `buildAgeArray` that generates an array filled with a range of numbers, defined by min and max, to render the select options:
```
export const MIN_AGE = 55;
export const MAX_AGE = 120;
```
exported also to use for the field validation in the main component.

###### Props

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
id|string|yes|''|The select html id
value|string|yes|0|The age at start of event value from range 55-120
onChange|func|yes|() => null|Event listener for updating the value
label|string|no|''|The select's label text
placeholder|string|no|''|The select placeholder text
withNever|bool|no|''|Show the 'never' option as default choice