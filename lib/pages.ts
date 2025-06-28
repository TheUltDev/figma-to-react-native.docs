import { createElement } from "react";
import { icons } from "lucide-react";
import { source } from "@/lib/source";

export interface GuideMetadata {
  title: string;
  description: string;
  homeColor: string;
  icon: React.ReactNode;
  href: string;
}

export interface ArticleMetadata {
  title: string;
  description: string;
  href: string;
}

/**
 * Function to create guide objects with icons and sorting
 * @returns The guide pages metadata
 */
export function createGuides(): GuideMetadata[] {
  return filterPagesByPrefix('/plugin/guides/', ['title', 'description', 'homeColor', 'icon'])
    .map(page => {
      const iconElement = page.data.icon && page.data.icon in icons
        ? createElement(icons[page.data.icon as keyof typeof icons], { size: 32, color: 'white' })
        : null;
      return {
        title: page.data.title!,
        description: page.data.description!,
        homeColor: page.data.homeColor!,
        icon: iconElement,
        href: page.url,
        homeOrder: page.data.homeOrder || 999
      };
    })
    .sort((a, b) => a.homeOrder - b.homeOrder);
}

/**
 * Function to create article objects
 * @returns The article pages metadata
 */
export function createArticles(): ArticleMetadata[] {
  return filterPagesByPrefix('/plugin/features/', ['title', 'description']).map(page => ({
    title: page.data.title!,
    description: page.data.description!,
    href: page.url
  }));
}

/**
 * Generic function to filter pages by URL prefix and required properties
 * @param urlPrefix - The URL prefix to filter pages by
 * @param requiredProps - The required properties to filter pages by
 * @returns The filtered pages
 */
export function filterPagesByPrefix(urlPrefix: string, requiredProps: string[]) {
  return source.getPages().filter(page => {
    if (!page.url.startsWith(urlPrefix)) return false;
    return requiredProps.every(prop => {
      const keys = prop.split('.');
      let value: any = page.data;
      for (const key of keys) {
        value = value?.[key];
      }
      return value;
    });
  });
}
