```js
<ContextProvider children={(
    <PageItemUI
        locale={'en'}
        slug={'page1'}
        content={{
            body: `
## Page Content - H2

This can take arbitrary Markdown.

And render it.
            `
        }}
        messages={{
            goToMenu: 'Back to menu',
        }}
    />
)} />
````
