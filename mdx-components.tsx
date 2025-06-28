import defaultMdxComponents from 'fumadocs-ui/mdx';
import { VideoPlayer } from './app/_ui/VideoPlayer';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    VideoPlayer,
    ...components,
  };
}
