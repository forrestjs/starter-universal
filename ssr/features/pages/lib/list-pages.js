/**
 * This is a simple utility that sources Markdown pages from the file system
 * in order to expose them to the GraphQL api.
 *
 */
import path from 'path'
import fs from 'fs-extra'
import frontmatter from 'front-matter'
import mapLimit from 'async/mapLimit'
import glob from 'glob'

const isMarkdown = name => name.indexOf('.md') !== -1

export const listPages = (sourcePath) =>
    new Promise(async (resolve, reject) => {
        // check in-memory cache before to hit the file system
        if (listPages.cache) {
            resolve(listPages.cache)
            return
        }

        const files = await (new Promise((resolve, reject) => {
            glob(`${sourcePath}/**/*.md`, {}, (err, files) =>
                err ? reject(err) : resolve(files)
            )
        }))

        const onEach = async (filepath, next) => {
            const filename = path.parse(filepath).base
            const content = await fs.readFile(filepath, 'utf-8')
            const data = frontmatter(content)

            data.fileName = filename
            data.filePath = filepath

            // extract relevant attributes
            const { locale, slug, title, description, keywords, ...attributes } = data.attributes

            // apply defaults
            data.locale = locale || 'en'
            data.slug = slug || filename
            data.title = title || filename
            data.description = description || filename
            data.keywords = keywords
                ? keywords.split(',').map($ => $.trim())
                : []

            // export other relevant attributes
            data.attributes = attributes

            next(null, data)
        }

        // when data is loadad it gets simply cached in memory
        const onEnd = (err, results) => {
            if (err) {
                reject(err)
                return
            }

            listPages.cache = results
            resolve(results)
        }
        mapLimit(files.filter(isMarkdown), 5, onEach, onEnd)
    })

// External interface to drop any cache and hit back the fs
export const invalidateCache = () =>
    (listPages.cache = null)
