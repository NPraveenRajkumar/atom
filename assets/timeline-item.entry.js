import { r as registerInstance, h } from './index-DUsoYu9r.js';

const timelineItemCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block}.timeline-item-container{position:relative;margin-bottom:20px}.timeline-item-content{position:relative;width:400px;min-height:120px;padding:20px;background-color:#f9f9f9;border-radius:5px;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);transition:transform 0.3s ease}.timeline-item-content:hover{transform:translateY(-5px)}.timeline-item-container::after{content:"";position:absolute;top:20px;width:16px;height:16px;background-color:#f9f9f9;border:4px solid #ddd;border-radius:50%;z-index:1}:host(:nth-child(odd)) .timeline-item-container::after{right:-8px}:host(:nth-child(even)) .timeline-item-container::after{left:-8px}:host(:nth-child(odd)) .timeline-item-content{left:0}:host(:nth-child(even)) .timeline-item-content{right:0}`;

const TimelineItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * The title of the timeline item.
     */
    itemTitle;
    /**
     * The description of the timeline item.
     */
    itemDescription;
    /**
     * The date of the timeline item.
     */
    itemDate;
    render() {
        return (h("div", { key: '0004428a7a312050db13c20a0b01ccfa1bbefec8', class: "timeline-item-container" }, h("div", { key: '706c054af22b45409c3eec9c3cae7bf13b016c88', class: "timeline-item-content" }, h("h2", { key: '176eb8c8b42d7658f001acaa2a94d01abcbc2060' }, this.itemTitle), h("p", { key: 'a0b6b862951518676293156a8dba54fbb2608d65' }, this.itemDescription), h("span", { key: 'e753aaeffb2c672b2c6b243f96e270e7a6b10c6e' }, this.itemDate))));
    }
};
TimelineItem.style = timelineItemCss();

export { TimelineItem as timeline_item };
