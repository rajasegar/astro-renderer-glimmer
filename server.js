import { renderToString } from '@glimmer/ssr';

export default {
  // should Component use this renderer?
  check(Component, props, childHTML) {},
  // Component => string of static HTML
  renderToStaticMarkup(Component, props, childHTML) {},
};

function check(Component) {
  return Component.isMyFrameworkComponent;
}


function renderToStaticMarkup(Component, props, childHTML) {
  const html = renderToString(Component, { ...props, innerHTML: childHTML });
  return { html };
}
