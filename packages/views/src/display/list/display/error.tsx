import { BaseView } from '../../../base/index';

export class ListErrorContainerDisplay {
    constructor() {
    }
  
    get classNames() {
      return []
    }
  
    renderError(): any {
      return this.errorToDisplay
    }
  
    render(): any {
      const { classNames } = this
      return <div className={classNames}>
        { return this.renderError() }
      </div>
    }
  }
  
  export class ListErrorDisplay extends BaseView {
    containerDisplay: IListContainerDisplay
  
    injectContainerDisplay(containerDisplay: IListContainerDisplay) {
      containerDisplay.errorToDisplay = errorToDisplay
      this.containerDisplay = containerDisplay;
    }  
  
    get errorToDisplay(): any {
      return {}
    }
  
    render(): any {
      return this.container.render()    
    }
  }