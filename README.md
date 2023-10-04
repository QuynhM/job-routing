# React Hook Form

## 1. React Router v6

### Turn single-page to multi-page application

[Documentation](https://reactrouter.com/en/main)

`npm install react-router-dom@6`
In `index.js`

```
import {BrowserRouter} from "react-router-dom"

ReactDom.render(
<BrowserRouter>
<App/>
</BrowserRouter>
);
```

**Routing pages** use <Routes>. (This goes in `index.js`). Has `path` attribute, can either be the static path or dynamic (i.e. `:invoiceId` dynamic segment). `element`: what going to be rendered.
**Layout (sharing)** Use `<Outlet>`
**Hyperlink** Use `Link` or `NavLink`. This has `to` attribute
**useParams** method to get the id of clickable item (similar to ctx.triggered\*id in Python)

_Note:_ Route is nested.

**useSearchParams:** React Hook. Use to make search filter in input. Can put this directly on html atribute `onChange`
**useLocation:** A hook that can return a dictionary that has your current url and separate them in to different children.
**useNavigate** A hook use (on onChange) to automatically change route on event. Ex:

```javascript
navigate = useNavigate();
<Card onClick={() => navigate(`/book/${book.id}`)} />;
```

**Summary** To make multi-page you need to first

1. Use Browser Router to wrap around the application in `index.js`.
2. Define the `path` for each Route using <Routes> and define the event when click using `element` attributes.
3. Routing can also be done using `Link` or `Navlink`
4. Other: useParams, searchParams, useLocation

## 2. React Router - Main Concepts

**Vocab:**

- Search param: anything after ? in route
- Location: browser object represent the url
- Location state: states inside location object.
- History Stack: locations in a stack (Pop, push, replace)
- Segment (url params): path pattern "/user/123" has 2 _segments_
- Router: top-level component, relative with parents.
- Outlet: A component that renders the next match in a set of matches
- Index Route: A child route with no path that renders in the parent's outlet at the parents URL. `<Route index element = ... \> `
- Route config: route matching order, usually represent as a tree

## 3. [Material UI v5](https://mui.com)

**Installation**
`npm install @mui/material @emotion/react @emotion/styled`

```javascript
import {Button}
 from "@mui/material"

 <Button variant = "contained> Click me <\Button>
```

App Bar (Nav bar),
**Note:**: Structure:

- src > components > SearchAppBar.js for all components
- src > pages > DetailPage.js for all pages

**Grid:** Flex box container. Use xs, md, lg for responsive.

**sx**: A dict element of Material UI to quickly style (Use like `style`). Ex: mt = margin-top.

**Note**: Dont forget `key` whenever using loop. This will help when want to get id of clicked button (Using `useParams`)

**Other components**: Typography (h1-h5), Box (similar to container), QuiltedImageList (Collage), Icon (Similar to Iconify)

**Theme:** Similar to manipulate root in CSS

- createTheme: a dict object to pass in `theme` element in ThemeProvider. Use to change theme
- ThemeProvider: wrap around the app
