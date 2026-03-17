import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { PythonIcon, JavascriptIcon, BashIcon } from '../src/icons';

describe('Icon rendering', () => {
  it('renders PythonIcon as an SVG element', () => {
    const { container } = render(<PythonIcon />);
    expect(container.querySelector('svg')).not.toBeNull();
  });

  it('renders PythonIcon in colored variant', () => {
    const { container } = render(<PythonIcon variant="colored" />);
    expect(container.querySelector('svg')).not.toBeNull();
  });

  it('applies size prop to width and height', () => {
    const { container } = render(<PythonIcon size={64} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '64');
    expect(svg).toHaveAttribute('height', '64');
  });

  it('explicit width/height override size', () => {
    const { container } = render(<PythonIcon size={64} width={128} height={128} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '128');
    expect(svg).toHaveAttribute('height', '128');
  });

  it('forwards className to the SVG element', () => {
    const { container } = render(<PythonIcon className="my-icon" />);
    expect(container.querySelector('svg')).toHaveClass('my-icon');
  });

  it('renders JavascriptIcon without crashing', () => {
    const { container } = render(<JavascriptIcon />);
    expect(container.querySelector('svg')).not.toBeNull();
  });

  it('renders BashIcon without crashing', () => {
    const { container } = render(<BashIcon />);
    expect(container.querySelector('svg')).not.toBeNull();
  });
});
