import * as React from 'react';
import { createElement } from 'react';
import { bizCssPrefix } from '../../variables';
import './index.scss';

export interface NamespaceProps {
  name?: string;
}

const Namespace: React.FC<NamespaceProps> = function Namespace({
  name,
...otherProps
}) {
  return (
    <div {...otherProps} class={bizCssPrefix + '-namespace'}>{otherProps.children}</div>
  );
};

export default Namespace;
