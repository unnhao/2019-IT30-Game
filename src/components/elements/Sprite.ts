import * as PIXI from "pixi.js"
import * as WrapperType from '@/components/elements/WrapperType'
import Wrapper from "Wrapper"
import { TweenMax } from "gsap"

export default class Sprite implements Wrapper {
  protected _container: PIXI.Container
  protected _sprite: PIXI.Sprite
  /**
   * @targetsheet target位於哪張sprite
   * @param target 要產生甚麼圖
   */
  constructor(targetsheet: string, target: string) {
    let id: any = PIXI.loader.resources[targetsheet].textures
    this._sprite = new PIXI.Sprite(id[`${target}.png`])
    this._container = new PIXI.Container()
    this._container.addChild(this._sprite)
  }

  public getContainer(): PIXI.Container {
    return this._container
  }

  public setPosition(animationOpt: WrapperType.animationOpt, x: number, y: number) {
    if (animationOpt.animation) {
      TweenMax.to(this._container, animationOpt.during ? animationOpt.during : 0.6, {
        x: x,
        y: y
      });
    } else {
      this._container.x = x
      this._container.y = y
    }
  }

  public setSize(animation: boolean, width: number, height: number) {
    if (animation) {
      TweenMax.to(this._container, 0.6, { width: width, height: height });
    } else {
      this._container.width = width
      this._container.height = height
    }
  }

  public addChild(child: Wrapper): Wrapper {
    this._container.addChild(child.getContainer())
    return this
  }

  public addContainer(obj: any): Wrapper {
    this._container.addChild(obj)
    return this
  }

  public setScale(animation: boolean, scale_x: number, scale_y: number) {
    if (animation) {
      TweenMax.to(this._container.scale, 0.6, { x: scale_x, y: scale_y });
    } else {
      this._container.scale.x = scale_x
      this._container.scale.y = scale_y
    }
  }

  public setInteractive(interactive: boolean): void {
    this._container.interactive = interactive
  }

  public setRotation(animation: boolean, rotation: number): void {
    if (animation) {
      TweenMax.to(this._container, 0.6, { rotation: rotation });
    } else {
      this._container.rotation = rotation
    }
  }

  public setAlpha(animation: boolean, alpha: number) {
    if (animation) {
      TweenMax.to(this._container, 0.6, {
        alpha: alpha
      })
    } else {
      this._container.alpha = alpha
    }
  }

  public removeChildren(): void {
    this._container.removeChildren()
  }

  public on(event: string, listener: any) {
    this._container.on(event, listener)
  }

  public onClick(listener: any): void {
    this._container.on('click', listener)
    this._container.on('tap', listener)
  }

  public onHover(listener: any) {
    this._container.on('mouseover', listener)
    this._container.on('pointerover', listener)
  }

  get x(): number {
    return this._container.x;
  }

  set x(num: number) {
    this._container.x = num
  }

  get y(): number {
    return this._container.y;
  }

  set y(num: number) {
    this._container.y = num
  }

  get width(): number {
    return this._container.width;
  }

  set width(num: number) {
    this._container.width = num
  }

  get height(): number {
    return this._container.height;
  }

  set height(num: number) {
    this._container.height = num
  }
}