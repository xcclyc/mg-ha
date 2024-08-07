info.onScore(100, function () {
    game.setGameOverEffect(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    game.splash("not bad!")
    info.setScore(0)
    for (let index = 0; index < 100; index++) {
        info.changeScoreBy(1)
    }
})
tiles.setCurrentTilemap(tilemap`级别2`)
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f f 4 5 5 4 f f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f 5 5 5 5 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 5 f . . . 
    . . . . f 5 5 5 5 5 5 5 f . . . 
    . . . . . f 5 5 5 5 5 f . . . . 
    . . . . . . f 5 5 5 f . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f f f f f f . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(1, 28))
game.splash("Hello")
game.splash("You have to walk through this maze!")
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
