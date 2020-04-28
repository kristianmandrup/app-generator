import { BaseView } from '../../../base/index';
import { IEventSubscriber } from '../../../../../eventstream/src/event/subscriber/index';

export class ItemErrorContainerDisplay {
  get classNames() {
    return []
  }

  renderValue(): any {
    return this.valueToDisplay
  }

  render(): any {
    const { classNames } = this
    return {
      classNames,
      value: this.renderValue() 
    }
  }
}

export class ItemErrorDisplay extends BaseView {
  subscriber: IEventSubscriber
  value: any = null

  get valueToDisplay(): any {
    return this.value
  }

  injectContainerDisplay(containerDisplay: IListContainerDisplay) {
    containerDisplay.valueToDisplay = valueToDisplay
    this.containerDisplay = containerDisplay;
  }  

  injectSubscriber(subscriber: IEventSubscriber) {
    subscriber.onNext = (value) => {
      this.value = value
    }
    this.subscriber = subscriber;
  }  

  render(): any {
    return this.container.render()    
  }
}