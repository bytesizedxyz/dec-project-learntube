import React, { Component } from "react";
import ReactDOM from "react-dom";
import { TimelineMax } from "gsap";

const modalRoot = document.getElementById("modal-root");
console.log("GOT THE MODAL ROOT: ", modalRoot);

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }
  formRef = React.createRef();

  componentDidMount() {
    // The portal element is inserted in the DOM tree after
    // the Modal's children are mounted, meaning that children
    // will be mounted on a detached DOM node. If a child
    // component requires to be attached to the DOM tree
    // immediately when mounted, for example to measure a
    // DOM node, or uses 'autoFocus' in a descendant, add
    // state to Modal and only render the children when Modal
    // is inserted in the DOM tree.);
    modalRoot.style.zIndex = 9001;
    modalRoot.appendChild(this.el);

    // Animating the form
    const el = this.formRef.current;
    const tl = new TimelineMax({ delay: 0.5, repeat: 0 });
    tl.to(el, 0, { scaleX: 0, scaleY: 0 });
    tl.to(el, 0.3, { scaleX: 1.1, scaleY: 1.1 });
    tl.to(el, 0.1, { scaleX: 0.95, scaleY: 0.95 });
    tl.to(el, 0.1, { scaleX: 1, scaleY: 1 });
  }

  componentWillUnmount() {
    modalRoot.style.zIndex = -100;
    modalRoot.removeChild(this.el);
  }

  render() {
    // console.log("PROPSS",this.props)
    return ReactDOM.createPortal(this.props.children(this.formRef), this.el);
  }
}

export default Modal;
