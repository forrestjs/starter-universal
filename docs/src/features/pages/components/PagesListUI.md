With a description:

```js
<ContextProvider children={(
    <PagesListUI
        locale={'en'}
        content={{
            body: `
## Welcome to the pages

This is a **brief description** of this section.  
It works quite well.
            `,
        }}
        pages={[{
            slug: 'page1',
            title: 'First page',
        }, {
            slug: 'page2',
            title: 'Page n. 2',
        }]}
        messages={{
            listTitle: 'Available Docs:',
            goToHome: 'Go back home',
        }}
        loadPages={() => {}}
    />
)} />
```

Without description

```js
<ContextProvider children={(
    <PagesListUI
        locale={'en'}
        content={null}
        pages={[{
            slug: 'page1',
            title: 'First page',
        }, {
            slug: 'page2',
            title: 'Page n. 2',
        }]}
        messages={{
            listTitle: 'Available Docs:',
            goToHome: 'Go back home',
        }}
        loadPages={() => {}}
    />
)} />
````
