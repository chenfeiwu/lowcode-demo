
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const namespaceMeta: ComponentMetadata = {
  "componentName": "namespace",
  "title": "namespace",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "demo-material",
    "version": "0.1.0",
    "exportName": "namespace",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "name",
            "zh-CN": "名称"
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性：name | 说明：命名空间名称',
            en_US: 'prop: name | description: name content',
          },
        },
        "name": "name",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {
      isContainer: true,
    }
  }
};
const snippets: Snippet[] = [
  {
    "title": "namespace",
    "screenshot": "",
    "schema": {
      "componentName": "namespace",
      "props": {}
    }
  }
];

export default {
  ...namespaceMeta,
  snippets
};
