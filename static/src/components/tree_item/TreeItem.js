odoo.define(
  "owl_by_marion/static/src/components/tree_item/TreeItem.js",
  function (require) {
    "use strict";
    const { Component } = owl;
    const patchMixin = require("web.patchMixin");

    const { useState } = owl.hooks;

    class TreeItem extends Component {
      /**
       * @override
       */
      constructor(...args) {
        super(...args);
        console.log(
          this.props,
          "constructordddddddddddddddddddddddddddddddddd"
        );
        this.state = useState({});
      }
    }
    Object.assign(TreeItem, {
      components: { TreeItem },
      props: {
        item: {},
      },
      template: "owl_by_marion.TreeItem",
    });

    return patchMixin(TreeItem);
  }
);
