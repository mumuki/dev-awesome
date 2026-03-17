import React from 'react';
import type { FC, SVGProps } from 'react';
import type { IconProps } from '../components/Icon';

// Black (monochrome) SVG imports
import BashBlackSvg from '../../svg/black/bash.svg?react';
import CBlackSvg from '../../svg/black/c.svg?react';
import CodeBlackSvg from '../../svg/black/code.svg?react';
import CppBlackSvg from '../../svg/black/cpp.svg?react';
import CssBlackSvg from '../../svg/black/css.svg?react';
import ElixirBlackSvg from '../../svg/black/elixir.svg?react';
import GobstonesBlackSvg from '../../svg/black/gobstones.svg?react';
import HaskellBlackSvg from '../../svg/black/haskell.svg?react';
import HtmlBlackSvg from '../../svg/black/html.svg?react';
import JavaBlackSvg from '../../svg/black/java.svg?react';
import JavascriptBlackSvg from '../../svg/black/javascript.svg?react';
import MumukiCircleBlackSvg from '../../svg/black/mumuki-circle.svg?react';
import MumukiBlackSvg from '../../svg/black/mumuki.svg?react';
import PhpBlackSvg from '../../svg/black/php.svg?react';
import PrologBlackSvg from '../../svg/black/prolog.svg?react';
import PythonBlackSvg from '../../svg/black/python.svg?react';
import QsimBlackSvg from '../../svg/black/qsim.svg?react';
import RBlackSvg from '../../svg/black/r.svg?react';
import RubyBlackSvg from '../../svg/black/ruby.svg?react';
import SqlBlackSvg from '../../svg/black/sql.svg?react';
import TextBlackSvg from '../../svg/black/text.svg?react';
import WollokBlackSvg from '../../svg/black/wollok.svg?react';

// Colored SVG imports
import BashColoredSvg from '../../svg/colored/bash.svg?react';
import CColoredSvg from '../../svg/colored/c.svg?react';
import CodeColoredSvg from '../../svg/colored/code.svg?react';
import CppColoredSvg from '../../svg/colored/cpp.svg?react';
import CssColoredSvg from '../../svg/colored/css.svg?react';
import ElixirColoredSvg from '../../svg/colored/elixir.svg?react';
import GobstonesColoredSvg from '../../svg/colored/gobstones.svg?react';
import HaskellColoredSvg from '../../svg/colored/haskell.svg?react';
import HtmlColoredSvg from '../../svg/colored/html.svg?react';
import JavaColoredSvg from '../../svg/colored/java.svg?react';
import JavascriptColoredSvg from '../../svg/colored/javascript.svg?react';
import MumukiCircleColoredSvg from '../../svg/colored/mumuki-circle.svg?react';
import MumukiColoredSvg from '../../svg/colored/mumuki.svg?react';
import PhpColoredSvg from '../../svg/colored/php.svg?react';
import PrologColoredSvg from '../../svg/colored/prolog.svg?react';
import PythonColoredSvg from '../../svg/colored/python.svg?react';
import QsimColoredSvg from '../../svg/colored/qsim.svg?react';
import RColoredSvg from '../../svg/colored/r.svg?react';
import RubyColoredSvg from '../../svg/colored/ruby.svg?react';
import SqlColoredSvg from '../../svg/colored/sql.svg?react';
import TextColoredSvg from '../../svg/colored/text.svg?react';
import WollokColoredSvg from '../../svg/colored/wollok.svg?react';

function makeIcon(
  name: string,
  Black: FC<SVGProps<SVGSVGElement>>,
  Colored: FC<SVGProps<SVGSVGElement>>,
): FC<IconProps> {
  const Icon: FC<IconProps> = ({ variant = 'black', size = 32, width, height, ...props }) => {
    const Svg = variant === 'colored' ? Colored : Black;
    return <Svg width={width ?? size} height={height ?? size} {...props} />;
  };
  Icon.displayName = name;
  return Icon;
}

export const BashIcon = makeIcon('BashIcon', BashBlackSvg, BashColoredSvg);
export const CIcon = makeIcon('CIcon', CBlackSvg, CColoredSvg);
export const CodeIcon = makeIcon('CodeIcon', CodeBlackSvg, CodeColoredSvg);
export const CppIcon = makeIcon('CppIcon', CppBlackSvg, CppColoredSvg);
export const CssIcon = makeIcon('CssIcon', CssBlackSvg, CssColoredSvg);
export const ElixirIcon = makeIcon('ElixirIcon', ElixirBlackSvg, ElixirColoredSvg);
export const GobstonesIcon = makeIcon('GobstonesIcon', GobstonesBlackSvg, GobstonesColoredSvg);
export const HaskellIcon = makeIcon('HaskellIcon', HaskellBlackSvg, HaskellColoredSvg);
export const HtmlIcon = makeIcon('HtmlIcon', HtmlBlackSvg, HtmlColoredSvg);
export const JavaIcon = makeIcon('JavaIcon', JavaBlackSvg, JavaColoredSvg);
export const JavascriptIcon = makeIcon('JavascriptIcon', JavascriptBlackSvg, JavascriptColoredSvg);
export const MumukiCircleIcon = makeIcon('MumukiCircleIcon', MumukiCircleBlackSvg, MumukiCircleColoredSvg);
export const MumukiIcon = makeIcon('MumukiIcon', MumukiBlackSvg, MumukiColoredSvg);
export const PhpIcon = makeIcon('PhpIcon', PhpBlackSvg, PhpColoredSvg);
export const PrologIcon = makeIcon('PrologIcon', PrologBlackSvg, PrologColoredSvg);
export const PythonIcon = makeIcon('PythonIcon', PythonBlackSvg, PythonColoredSvg);
export const QsimIcon = makeIcon('QsimIcon', QsimBlackSvg, QsimColoredSvg);
export const RIcon = makeIcon('RIcon', RBlackSvg, RColoredSvg);
export const RubyIcon = makeIcon('RubyIcon', RubyBlackSvg, RubyColoredSvg);
export const SqlIcon = makeIcon('SqlIcon', SqlBlackSvg, SqlColoredSvg);
export const TextIcon = makeIcon('TextIcon', TextBlackSvg, TextColoredSvg);
export const WollokIcon = makeIcon('WollokIcon', WollokBlackSvg, WollokColoredSvg);
