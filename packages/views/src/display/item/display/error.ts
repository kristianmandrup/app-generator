import { BaseView } from '../../../base/index';
import { IEventSubscriber } from '../../../../../eventstream/src/event/subscriber/index';

export class ItemErrorContainerDisplay {
  get classNames() {
    return []
  }

  renderError(): any {
    return this.errorToDisplay
  }

  render(): any {
    const { classNames } = this
    return {
      classNames,
      error: this.renderError() 
    }
  }
}

export class ItemErrorDisplay extends BaseView {
  subscriber: IEventSubscriber
  error: any = null

  get errorToDisplay(): any {
    return this.error
  }

  injectContainerDisplay(containerDisplay: IListContainerDisplay) {
    containerDisplay.valueToDisplay = valueToDisplay
    this.containerDisplay = containerDisplay;
  }  

  injectSubscriber(subscriber: IEventSubscriber) {
    subscriber.onError = (error) => {
      this.error = error
    }
    this.subscriber = subscriber;
  }  

  render(): any {
    return this.container.render()    
  }
}