import Wrapper from '@/components/elements/Wrapper'
import WrapperContainerCenter from '@/components/elements/WrapperContainerCenter'
import Table from '@/components/groups/Table'

export default class Body extends WrapperContainerCenter {
  private _table: Wrapper
  constructor() {
    super()
    let rect = new PIXI.Graphics()
    rect.drawRect(0, 0, 1650, 900)
    rect.alpha = 0
    this._centerContainer.addContainer(rect)
    this._table = new Table()
    this._table.setPosition({animation: false}, this.width / 2 - 10 - this._table.width / 2, this.height / 2 - this._table.height / 2 + 60)
    this._table.setScale(false, 1.2, 1.2)

    this._centerContainer.addChild(this._table)
  }
}