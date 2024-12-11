odoo.define("owl_by_marion.OWLTreeRenderer", function (require) {
  "use strict";

  const AbstractRendererOwl = require("web.AbstractRendererOwl");

  const patchMixin = require("web.patchMixin");

  const QWeb = require("web.QWeb");
  const session = require("web.session");

  const { useState } = owl.hooks;

  class OWLTreeRenderer extends AbstractRendererOwl {
    constructor(parent, props) {
      super(...arguments);

      this.qweb = new QWeb(this.env.isDebug(), { _s: session.origin });
      this.state = useState({
        localItems: props.items || [],
      });
    }

    willUpdateProps(nextProps) {
      console.log(nextProps, "nextpropsssssssssssssss");
      Object.assign(this.state, {
        localItems: nextProps.items,
      });
    }
  }

  const components = {
    TreeItem: require("owl_by_marion/static/src/components/tree_item/TreeItem.js"),
  };

  Object.assign(OWLTreeRenderer, {
    components,
    defaultProps: {
      items: [],
    },
    props: {
      arch: {
        type: Object,
        optional: true,
      },
      items: {
        type: Array,
      },
      isEmbedded: {
        type: Boolean,
        optional: true,
      },
      noContentHelp: {
        type: String,
        optional: true,
      },
    },

    template: "owl_by_marion.OWLTreeRenderer",
  });

  return patchMixin(OWLTreeRenderer);
});
