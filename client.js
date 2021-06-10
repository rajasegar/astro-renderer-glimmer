import { renderComponent } from '@glimmer/core';

export default (element) => {
  return (Component, props, childHTML) => {
    renderComponent(Component, { ...props, innerHTML: childHTML, rehydrate: true });
  };
};
