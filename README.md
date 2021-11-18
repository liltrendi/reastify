## Reastify

Recursive module that converts html ast (for example, from Contentful) to react.

This data follows the premise that it has one source of truth that branches into embedded children whose nodes are not known at compile time.

The data passed is of a similar format to the one below:

```js
let htmlAst = {
    type: "root",
    tagName: "p",
    properties: {},
    children: [
        {
            type: "text",
            value: "hello world"
        },
        {
            type: "element",
            tagName: "p",
            properties: {},
            children: [
                {
                    type: "element",
                    tagName: "a",
                    properties: {
                        href: "https://example.com/"
                    },
                    children: [
                        {
                            type: "text",
                            value: "www.example.com"
                        }
                    ]
                },
                {
                    type: "element",
                    tagName: "table",
                    properties: {},
                    children: [
                        {
                            type: "element",
                            tagName: "thead",
                            properties: {},
                            children: [
                                //it goes on and on and on
                            ]
                        }
                    ]
                },
                {
                    type: "text",
                    value: "random sample"
                },
            ]
        }
    ],
}
```

## Installation

You can use Yarn:

```bash
yarn add @liltrendi/reastify
```

Or npm:

```bash
npm i @liltrendi/reastify
```

## Usage

Import it into your app

```js
import Reastify, {reastify} from "@liltrendi/reastify"
```

And pretty much pass the HTML ast data to the ``reastify`` function or as a prop to the ``Reastify`` component, like so:

```js
import React from "react"
import {reastify} from "@liltrendi/reastify"

const App = ({htmlAst}) => {
    let reactifiedAst = reastify(htmlAst)
    return (
        <React.Fragment>
            {reastifiedAst}
        </React.Fragment>
    )
}

export default App;
```

Or you can directly use the component it exports like this:

```js
import React from "react"
import Reastify from "@liltrendi/reastify"

const App = ({htmlAst}) => {
    return <Reastify htmlAst={htmlAst} />
}

export default App;
```

## Props

Both the function and the component use a similar model, based off of these typescript interfaces:

```ts
interface I_ReastifyNode {
    type?: string;
    tagName?: string;
    children?: any[];
    properties?: any;
    value?: any;
}

interface I_ReastifyProps {
    htmlAst?: I_ReastifyNode;
    tableClassName?: string;
    theadClassName?: string;
    tbodyClassName?: string;
    trClassName?: string;
    tdClassName?: string;
    thClassName?: string;
    pClassName?: string;
    h1ClassName?: string;
    h2ClassName?: string;
    h3ClassName?: string;
    h4ClassName?: string;
    h5ClassName?: string;
    h6ClassName?: string;
    imgClassName?: string;
    brClassName?: string;
    aClassName?: string;
    uClassName?: string;
    strongClassName?: string;
    emClassName?: string;
    ulClassName?: string;
    olClassName?: string;
    liClassName?: string;
    preClassName?: string;
    codeClassName?: string;
    linkOnclick?: (event: React.MouseEvent<HTMLElement>) => any;
}
```