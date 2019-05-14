In order to render `LocaleSelectorUI` I need to recreate a DOM structure
that is similar to what is happening in the App as this simple lang menu
will place itself on an absolute position.

```js
import 'App.css';
<ContextProvider>
    <div className={'App-header'}>App Header</div>
    <LocaleSelectorUI messages={{
        it: 'Italiano',
        en: 'English',
    }} />
</ContextProvider>
```
