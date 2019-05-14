/**
 * Simple SSR cache invalidation strategy.
 * When a markdown file change, the whole SSR cache is dropped.
 *
 * Of course this could be dramatically improved so to drop only
 * the part of the cache that is relevant to the modified file.
 *
 * But this is just a simple example, right?
 *
 */

import chokidar from 'chokidar'
import { invalidateCache as dropSSR } from '@forrestjs/core/lib/memcached'
import { invalidateCache as dropPages } from './list-pages'

export const watchPages = (sourcePath) =>
    chokidar
        .watch(sourcePath)
        .on('change', () => {
            dropSSR(() => true)
            dropPages()
        })
