import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import * as icons from '../src/icons';

const ALL_ICONS = [
  'BashIcon', 'CIcon', 'CodeIcon', 'CppIcon', 'CssIcon',
  'ElixirIcon', 'GobstonesIcon', 'HaskellIcon', 'HtmlIcon',
  'JavaIcon', 'JavascriptIcon', 'MumukiCircleIcon', 'MumukiIcon',
  'PhpIcon', 'PrologIcon', 'PythonIcon', 'QsimIcon', 'RIcon',
  'RubyIcon', 'SqlIcon', 'TextIcon', 'WollokIcon',
] as const;

describe('Icon exports', () => {
  it('exports all 22 icon components', () => {
    expect(ALL_ICONS).toHaveLength(22);
    for (const name of ALL_ICONS) {
      expect(icons).toHaveProperty(name);
      expect(typeof icons[name]).toBe('function');
    }
  });

  it('every icon renders an SVG in black variant', () => {
    for (const name of ALL_ICONS) {
      const Icon = icons[name];
      const { container } = render(<Icon variant="black" />);
      expect(container.querySelector('svg'), `${name} black`).not.toBeNull();
    }
  });

  it('every icon renders an SVG in colored variant', () => {
    for (const name of ALL_ICONS) {
      const Icon = icons[name];
      const { container } = render(<Icon variant="colored" />);
      expect(container.querySelector('svg'), `${name} colored`).not.toBeNull();
    }
  });
});
