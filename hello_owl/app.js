console.log('---------------start--------------',owl)
const { Component, mount, xml, useState } = owl;

// Owl Components
class Root extends Component {
    static template = xml`
    <div t-on-click="update">
      Hello <t t-esc="state.count"/>
    </div>`;

  state = useState({ count:1});
  update() {
    this.state.count = this.state.count + 1;
  }

}

mount(Root, document.body);