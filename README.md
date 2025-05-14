# system-color-scheme

This npm package manage system (OS or browser) color scheme. 
Note this is not browser or user color scheme. This is **system** color scheme from operating system or browser settings. 


[![Animation showing the system color scheme detection](/images/system-color-scheme.gif)](https://www.youtube.com/watch?v=PnN5bA45lsU)


---

## Install


```bash
npm install --save btfcss@system-color-scheme
```


## Usage 

Import the package 

```js
import systemColorScheme from "system-color-scheme";
```

### Get system color scheme

The `isDark()` function returns true if the system color scheme is dark, false otherwise. 

The following code log the system color scheme in the console


```js
if (systemColorScheme.isDark()) 
  console.log ('System color scheme is dark');
else
  console.log ('System color scheme is light');
```

### Detect system color scheme changes

The function `addEventListenerOnChange(callback)` runs the callback function when system color scheme changes. When the callback function is called, the parameter is true if the system color scheme changed to dark, false otherwise. 

``` js
systemColorScheme.addEventListenerOnChange((isDark) => {
  if (isDark) console.log("System color scheme changed for dark");
  else console.log("System color scheme changed for light");
})
```