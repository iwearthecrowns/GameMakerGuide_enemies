controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        3 3 3 3 3 3 3 3 
        3 . . . . . . 3 
        3 . 3 3 3 3 . 3 
        3 . 3 . . 3 . 3 
        3 . 3 . . 3 . 3 
        3 . 3 3 3 3 . 3 
        3 . . . . . . 3 
        3 3 3 3 3 3 3 3 
        `, mySprite, 0, -70)
    projectile.startEffect(effects.fire)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    myEnemy.destroy()
    projectile.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.spray, 500)
})
let myEnemy: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . 9 9 . . . . . . . 
    . . . . . . 9 . . 9 . . . . . . 
    . . . . . . 9 . . 9 . . . . . . 
    . . . . . 9 . 9 9 . 9 . . . . . 
    . . . . . 9 . 9 9 . 9 . . . . . 
    . . . . 9 . 9 9 9 9 . 9 . . . . 
    . . . . 9 . 9 9 9 9 . 9 . . . . 
    . . . 9 . 9 9 9 9 9 9 . 9 . . . 
    . . . 9 . 9 . . . . 9 . 9 . . . 
    . . 9 . 9 9 . 9 9 . 9 9 . 9 . . 
    . . 9 . 9 9 . . . . 9 9 . 9 . . 
    . 9 . 9 9 9 . 9 9 9 9 9 9 . 9 . 
    . 9 . 9 9 9 . 9 9 9 9 9 9 . 9 . 
    9 . 9 9 9 9 9 9 9 9 9 9 9 9 . 9 
    9 . . . . . . . . . . . . . . 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdateInterval(1000, function () {
    myEnemy = sprites.createProjectileFromSide(assets.image`myEnemy`, 0, 50)
    myEnemy.x = randint(5, 155)
    myEnemy.setKind(SpriteKind.Enemy)
})
