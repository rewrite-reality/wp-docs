import type { MDXComponents } from 'mdx/types'
import defaultComponents from 'fumadocs-ui/mdx'
import { Callout } from 'fumadocs-ui/components/callout'
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion'
import { Card, Cards } from 'fumadocs-ui/components/card'
import { Tab, Tabs } from 'fumadocs-ui/components/tabs'
import { Step, Steps } from 'fumadocs-ui/components/steps'
import { ImageZoom } from 'fumadocs-ui/components/image-zoom'
import { File, Folder, Files } from 'fumadocs-ui/components/files'
import { InlineTOC } from 'fumadocs-ui/components/inline-toc'




export function getMDXComponents(components: MDXComponents = {}): MDXComponents {
  return {
    ...defaultComponents,
    Callout,
    InlineTOC,
    Accordion,
    Accordions,
    Card,
    Cards,
    Tab,
    Tabs,
    Step,
    File,
    Folder,
    Files,
    Steps,
    img: (props) => {
      if (typeof props.src === 'string' && props.src.trim() === '') return null
      return <ImageZoom {...props} />
    },

    ...components,
  }
}
