# DevAwesome

DevAwesome brings an awesome set of programming language icons as React components.
This project contains glyphs derived from [DevIcons](http://vorillaz.github.io/devicons) and is inspired by [FontAwesome](http://fontawesome.io).

## Install

```sh
npm install dev-awesome
```

React 17+ is required as a peer dependency.

## Usage

### Basic

```tsx
import { PythonIcon } from 'dev-awesome';

export default function App() {
  return <PythonIcon />;
}
```

### Colored variant

Each icon ships in a monochrome (`black`, default) and a `colored` variant.

```tsx
import { JavascriptIcon, HaskellIcon } from 'dev-awesome';

<JavascriptIcon variant="colored" />
<HaskellIcon variant="colored" />
```

### Size

Use the `size` prop to set width and height uniformly (default: `32`).

```tsx
<PythonIcon size={64} />
```

You can also pass explicit `width` and `height` SVG attributes, which take precedence over `size`.

```tsx
<PythonIcon width={80} height={80} />
```

### Styling

All standard SVG props are forwarded, including `className`, `style`, `aria-label`, etc.

```tsx
<PythonIcon className="my-icon" style={{ opacity: 0.8 }} aria-label="Python" />
```

### Available icons

| Component | Language / Tool |
|---|---|
| `BashIcon` | Bash |
| `CIcon` | C |
| `CodeIcon` | Generic code |
| `CppIcon` | C++ |
| `CssIcon` | CSS |
| `ElixirIcon` | Elixir |
| `GobstonesIcon` | Gobstones |
| `HaskellIcon` | Haskell |
| `HtmlIcon` | HTML |
| `JavaIcon` | Java |
| `JavascriptIcon` | JavaScript |
| `MumukiCircleIcon` | Mumuki (circle) |
| `MumukiIcon` | Mumuki |
| `PhpIcon` | PHP |
| `PrologIcon` | Prolog |
| `PythonIcon` | Python |
| `QsimIcon` | QSim |
| `RIcon` | R |
| `RubyIcon` | Ruby |
| `SqlIcon` | SQL |
| `TextIcon` | Plain text |
| `WollokIcon` | Wollok |

## Contribute

1. Fork this repository.
2. Add a 32x32 colored SVG icon into `svg/colored/`.
3. Add a 32x32 black SVG icon into `svg/black/`.
4. Export the new component in `src/icons/index.tsx`.
5. Send a PR to `master`.

To run tests locally:

```sh
npm test
```
