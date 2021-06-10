import { renderToString } from '@glimmer/ssr';

export default {
  check,
  renderToStaticMarkup,
};

function check(Component) {
  try {
    const { html } = renderToStaticMarkup(Component, props, childHTML);
    return Boolean(html);
  } catch (e) {}
  return false;
}


function renderToStaticMarkup(Component, props, childHTML) {
  const html = renderToString(Component, { ...props, innerHTML: childHTML });
  return { html };
}
