import { EVENT_TYPE, isMobile } from './Helper'
import { selectColor } from './OekakiHelper'

export class Oekaki {
  constructor({
      stage,
      history,
      strokeStyle,
      color = '#000',
      drawingFunction,
      endFunction
    }) {
    this.stage = stage
    this.history = history

    this.strokeStyle = strokeStyle
    this.color = color
    this.fillStyle = color
    this.startX = 0
    this.startY = 0
    this.x = 0
    this.y = 0
    this.pointX = 0
    this.pointY = 0
    this.isDrawing = false
    this.repeatSpeed = 10
    this.drawingFunction = drawingFunction
    this.endFunction = endFunction
  }

  changeColor({color}) {
    this.color = color

  }

  changeFillStyle({fillStyle}) {
    this.fillStyle = fillStyle
  }

  changeDrawing(isDrawing) {
    this.isDrawing = isDrawing
  }

  changeStartPoint({x, y}) {
    this.startX = x
    this.startY = y
  }

  changePoint({x, y}) {
    this.x = x
    this.y = y
  }

  changeDrawPoint() {
    const { pointX, pointY } = this.getDrawPoint({})
    this.pointX = pointX
    this.pointY = pointY
  }

  getDrawPoint({
    x = this.x,
    y = this.y
  }) {
    return {
      pointX: Math.floor(x / this.stage.pxWidth),
      pointY: Math.floor(y / this.stage.pxHeight)
    }
  }

  addHistory() {
    this.history.addDrawHistory({stage: this.stage, oekaki: this})
  }

  draw({
    pointX = this.pointX,
    pointY = this.pointY,
    fillStyle = this.fillStyle
  }) {
    const color = selectColor(this.stage.getLayerPxColors({pointX, pointY}))[2]
    const action = color ? 'fillRect' : 'clearRect'
    this.stage.ctx.fillStyle = color

    this.stage.ctx[action](
      pointX * this.stage.pxWidth,
      pointY * this.stage.pxHeight,
      this.stage.pxWidth,
      this.stage.pxHeight
    )
  };

  load(layers = this.stage.layers) {
    layers[0].ary.forEach((rows, pointY) => {
      rows.forEach((color, pointX) => {
        this.draw({
          pointX,
          pointY,
          fillStyle: color
        })
      })
    })
  }

  clear() {
    this.stage.clearAllLayer()
    this.load()
  }

  setDrawEvent() {
    const elTop = this.stage.$el.offset().top
    const elLeft = this.stage.$el.offset().left

    this.stage.$el
    .on(EVENT_TYPE.touchStart, (e) => {
      const touchEvent = isMobile ? e.originalEvent.touches[0] : e

      const elTop = this.stage.$el.offset().top
      const elLeft = this.stage.$el.offset().left
      this.changeDrawing(true)
      this.drawStart({
        x: touchEvent.pageX - elLeft,
        y: touchEvent.pageY - elTop
      })
    })
    .on(EVENT_TYPE.touchMove, (e) => {
      if(!this.isDrawing) return
      if(isMobile) {event.preventDefault()}

      const touchEvent = isMobile ? e.originalEvent.touches[0] : e

      const elTop = this.stage.$el.offset().top
      const elLeft = this.stage.$el.offset().left
      this.drawStart({
        x: touchEvent.pageX - elLeft,
        y: touchEvent.pageY - elTop
      })
    })
    .on(EVENT_TYPE.touchEnd, (e) => {
      this.changeDrawing(false)

      if(this.endFunction) this.endFunction()
    })
    .mouseleave((e) => {
      this.changeDrawing(false)
    });
  }

  drawStart({x, y}) {
    this.changePoint({x, y})
    this.changeStartPoint({x, y})
    this.changeDrawPoint()

    const { pointX, pointY } = this.getDrawPoint({})

    this.stage.changeStagePxColor({
      pointX,
      pointY,
      color: this.fillStyle
    })

    this.draw({})

    //console.log(selectColor(this.stage.getLayerPxColors({pointX, pointY})));

    this.addHistory()

    if(this.drawingFunction) this.drawingFunction()
  }
}