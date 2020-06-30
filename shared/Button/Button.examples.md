### Button

###### Description:
a `<button/>` tag with class names, click handler, disabled properties.

###### Examples of Usage

Basic Usage:
```javascript
<Button text="Click Here" onClick={eventListener}/>
```
----

Usage with class names:
```javascript
<Button text="Add event" className="btn--dark-bg btn--no-border" onClick={eventListener}/>
```
----

Usage with disabled property:
```javascript
const isDisabled = false;
<Button text="Submit" onClick={eventListener} disabled={isDisabled}/>
```
----

###### Props

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
text|string|yes||The button&#x27;s text value
className|string|no|null|The button&#x27;s styling class name(s)
onClick|func|yes||Event listener for button clicks
disabled|bool|no|false|Sets disabled propery on the button, if true the onClick action set to null