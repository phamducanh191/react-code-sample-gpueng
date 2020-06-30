### TotalValueInput

###### Description:
a `<input/>` tag for monetary values that has class name, value, on-change handler, label & placeholder properties.

###### Examples of Usage

Basic Usage:
```javascript
<TotalValueInput value={totalValue} onChange={inputChangeHandler}/>
```

With label & placeholder:
```javascript
<TotalValueInput value={totalValue} onChange={inputChangeHandler} label="Amount" placeholder="Enter Amount"/>
```

With allowZero property:
```javascript
<TotalValueInput value={totalValue} onChange={inputChangeHandler} label="Amount" placeholder="Enter Amount" allowZero/>
```
----

Inside the module you'll find these constants:
```
const STEP = 0.01; // Defines the input's steps.
export const MIN_TOTALVALUE = 0;
export const MAX_TOTALVALUE = 9999999.99;
```
exported also to use for the field validation in the main component.

----

The `<i/>` is for showing the Pound character, defined in the component's style.scss

----

You can add `input--per-month` class name which will add a label located under the input, and says: "per month":

```javascript
<TotalValueInput className="input--per-month" value={totalValue} onChange={inputChangeHandler} />
```

###### Props

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
className|string|no|''|Additional class name
value|string|yes|''|The total monetary value from range 0-9999999.99 (Decimal value)
onChange|func|yes|() => null|Event listener for updating the value
label|string|no|''|Wrapping label text
placeholder|string|no|''|Input's placeholder text
allowZero|bool|no|false|If prop exists will allow 0 (zero) value, default to false