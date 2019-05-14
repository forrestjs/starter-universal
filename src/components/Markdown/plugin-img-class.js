/* eslint-disable */

const {replaceEntities, escapeHtml} = require('remarkable/lib/common/utils');

const rule = (imageRule) => (tokens, i, opt, env) => {
	const img = imageRule(tokens, i, opt, env)

  //className, if there is one
  let getClassName = (name) => {
    return (name.match(/\{\:[ ]*\.[\w\w\d\-]*[ ]*\}/g) ? name.match(/(\w|\-)+/g) : '')
  }
  let className = (tokens[i+1] ? getClassName(tokens[i+1].content) : '')

  //figcaption, if there is one
  let getFigCaption = () => {
    return escapeHtml(replaceEntities(tokens[i].alt))
  }
  let figCaption = (tokens[i].alt ? '<figcaption>' + getFigCaption() + '</figcaption>' : '')


  let figure = '<figure class="' + className + '">' + img + figCaption + '</figure>'
  if(tokens[i+1]) { tokens[i+1].content = '' }
  return figure
}

const plugin = (md) => {
	md.renderer.rules.image = rule(md.renderer.rules.image)
}

export default plugin
