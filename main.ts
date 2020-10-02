namespace SpriteKind {
    export const super_enemy = SpriteKind.create()
    export const super_projectile = SpriteKind.create()
    export const boss = SpriteKind.create()
    export const ultra_enemy = SpriteKind.create()
    export const background = SpriteKind.create()
    export const mini_boss = SpriteKind.create()
    export const planet = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.ultra_enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.warmRadial, 500)
    info.changeLifeBy(-4)
    derrotas += 10
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    PROTAGONISTA.startEffect(effects.halo)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.planet, function (sprite, otherSprite) {
    game.over(true, effects.clouds)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.super_enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 1000)
    projectile.destroy(effects.spray, 200)
    info.changeScoreBy(2)
    derrotas += 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 5 5 5 5 5 5 . . . . . . 
        . . 5 2 4 4 4 2 4 e 5 . . . . . 
        . . 5 4 2 4 4 4 e e 2 5 . . . . 
        . . 5 2 4 4 4 2 4 e 5 . . . . . 
        . . . 5 5 5 5 5 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, PROTAGONISTA, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.mini_boss, function (sprite, otherSprite) {
    redibles.destroy(effects.blizzard, 200)
    info.changeScoreBy(25)
    derrotas += 25
    projectile.destroy(effects.fire, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.mini_boss, function (sprite, otherSprite) {
    projectile.destroy(effects.fire, 100)
    info.changeScoreBy(25)
    info.changeLifeBy(-6)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.ultra_enemy, function (sprite, otherSprite) {
    regigos.destroy(effects.disintegrate, 500)
    info.changeScoreBy(10)
    derrotas += 25
    projectile.destroy(effects.spray, 200)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    if (info.score() < 60) {
        effects.clearParticles(PROTAGONISTA)
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 8 8 8 8 8 8 8 8 . . . . . 
            . . 8 9 9 9 9 9 9 9 9 8 . . . . 
            . 8 9 9 6 6 6 6 6 6 9 9 8 . . . 
            . 8 9 6 6 6 6 6 6 6 6 9 8 . . . 
            . 8 9 6 6 6 6 6 6 6 6 9 8 . . . 
            . 8 9 6 6 6 6 6 6 6 6 9 8 . . . 
            . 8 9 6 6 6 6 6 6 6 6 9 8 . . . 
            . 8 9 6 6 6 6 6 6 6 6 9 8 . . . 
            . 8 9 9 6 6 6 6 6 6 9 9 8 . . . 
            . . 8 9 9 9 9 9 9 9 9 8 . . . . 
            . . 8 8 8 8 8 8 8 8 8 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, PROTAGONISTA, 200, 0)
        projectile2.startEffect(effects.bubbles)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.boss, function (sprite, otherSprite) {
    projectile.destroy(effects.spray, 200)
    projectile2.destroy(effects.spray, 200)
    disparos += 1
    if (disparos > 30) {
        galore_mothership.destroy(effects.disintegrate, 2000)
        info.changeScoreBy(50)
        info.setLife(6)
        derrotas = 70
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    projectile.destroy(effects.spray, 200)
    info.changeScoreBy(1)
    derrotas += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    effects.starField.endScreenEffect()
    otherSprite.destroy(effects.warmRadial, 200)
    info.changeLifeBy(-1)
    music.playMelody("- F - - - - - - ", 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.super_enemy, function (sprite, otherSprite) {
    effects.starField.endScreenEffect()
    otherSprite.destroy(effects.warmRadial, 200)
    info.changeLifeBy(-2)
    derrotas += 1
    music.playMelody("- F - - - - - - ", 200)
})
let galore: Sprite = null
let planet_of_garoles: Sprite = null
let dolers: Sprite = null
let galore_mothership: Sprite = null
let disparos = 0
let projectile2: Sprite = null
let regigos: Sprite = null
let redibles: Sprite = null
let projectile: Sprite = null
let PROTAGONISTA: Sprite = null
let derrotas = 0
effects.starField.startScreenEffect()
scene.setBackgroundImage(img`
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ddd1111111111111111111111111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ddd11111111111111111111111dd
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ddd11111111ddd111111111111dd
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111ddd111111111111dd
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111ddd11111111111111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111
    ffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffff11111111ddd111111111111111111111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ddd111111111111111111111
    ffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ddd111111111111111111111
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111ddd11
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111ddd11
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111ddd11
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffff1f1111111111111111111111111
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111ddd11
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111ddd11
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111ddd11
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111
    ffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
derrotas = 0
PROTAGONISTA = sprites.create(img`
    . . . . . 2 . . . . . . . . . . 
    . . . . . 2 2 . . . . . . . . . 
    . . . . . 2 2 2 . . . . . . . . 
    . 5 . . . 2 2 2 2 . . . . . . . 
    . 5 5 . . 2 2 2 2 2 . . 4 . . . 
    . 5 2 4 d d d d d d d d 4 4 . . 
    . 5 2 e d d d d d d d d 4 4 4 . 
    . 5 2 4 d d d d d 6 6 d 4 4 4 4 
    . 5 2 4 d d d d d 9 6 d 4 4 4 4 
    . 2 4 4 d d d d d d d d 4 4 4 . 
    . 5 2 e d d d d d d d d 4 4 . . 
    . 5 . . . 2 2 2 2 2 . . 4 . . . 
    . 5 . . . 2 2 2 2 . . . . . . . 
    . . . . . 2 2 2 . . . . . . . . 
    . . . . . 2 2 . . . . . . . . . 
    . . . . . 2 . . . . . . . . . . 
    `, SpriteKind.Player)
PROTAGONISTA.setFlag(SpriteFlag.StayInScreen, true)
info.setScore(0)
info.setLife(5)
controller.moveSprite(PROTAGONISTA)
music.playMelody("B A G A G F A C5 ", 140)
game.onUpdateInterval(2000, function () {
    if (derrotas >= 80) {
        if (derrotas < 100) {
            redibles = sprites.create(img`
                . . . . d e . . . . . 5 . . . 2 
                . . . . e e e . . . 5 5 . . 2 5 
                . c . . e e e e . 5 5 5 . 2 2 5 
                c c c e b e e b 9 b b b b 2 2 5 
                c . e b 8 3 3 3 3 3 3 3 2 f f 2 
                . . e 2 2 2 2 2 2 2 2 2 f f f 2 
                . . . 2 7 7 f 3 6 6 6 3 4 4 4 2 
                . . . 2 f f 7 3 3 6 a 4 d d 4 2 
                . . . 2 d f 7 3 3 6 a 4 1 d 4 2 
                . . . 2 7 7 f 3 6 6 6 3 4 4 4 2 
                . . e 2 2 2 2 2 2 2 2 2 f f f 2 
                c . e b 8 a a a a a a a 2 f f 2 
                c c c e b e e b 9 b b b b 2 2 5 
                . c . . e e e e . 5 5 5 . 2 2 5 
                . . . . e e e . . . 5 5 . . 2 5 
                . . . . d e . . . . . 5 . . . 2 
                `, SpriteKind.mini_boss)
            redibles.setVelocity(-5, 0)
            redibles.setPosition(160, randint(0, 120))
        }
    }
})
game.onUpdateInterval(1000, function () {
    if (derrotas < 70) {
        dolers = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 4 5 2 . . . . . . . . . . . . 
            . . 4 5 2 . . . . . . 4 4 4 . . 
            . . . 4 5 2 . . . . 4 e e 4 f . 
            . . . . 4 4 4 4 4 4 e e e 4 5 f 
            . . . 4 a 5 5 a 5 5 2 2 2 4 2 5 
            . . . 4 5 5 a 5 5 2 7 7 2 4 5 2 
            . . . 4 5 5 a 5 5 2 7 7 2 4 2 5 
            . . . 4 a 5 5 a 5 5 2 2 2 4 5 2 
            . . . . 4 4 4 4 4 4 e e e 4 2 f 
            . . . 4 5 2 . . . . 4 e e 4 f . 
            . . 4 5 2 . . . . . . 4 4 4 . . 
            . 4 5 2 . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.super_enemy)
        dolers.setVelocity(-50, 0)
        dolers.setPosition(160, randint(0, 120))
    }
})
forever(function () {
    if (derrotas == 80) {
        derrotas = 200
    }
})
forever(function () {
    music.playMelody("B A G A B G E F ", 120)
})
forever(function () {
    if (derrotas >= 50) {
        galore_mothership = sprites.create(img`
            a . . . . . . . . . . . . . . a 
            c a a . . . . . . . . . . . a c 
            . c c a . . . . . . . . . a c c 
            . . c a a a a a a a a a a a c . 
            . . b c c c c c c c c c c c b . 
            . . d c c 9 9 9 9 9 9 9 c c d . 
            . . b c 9 9 6 9 9 9 9 9 9 c b . 
            . . d c 9 6 6 9 9 9 9 9 9 c d . 
            . . b c 9 6 9 9 9 9 9 9 9 c b . 
            . . d c 9 9 9 9 9 9 9 9 9 c d . 
            . . b c 9 1 6 9 9 9 9 9 9 c b . 
            . . d c c 9 9 9 9 9 9 9 c c d . 
            . . b c c c c c c c c c c 3 b . 
            . . c a a a a a a a a a a a c . 
            . c c a . . . . . . . . . a c c 
            c a a . . . . . . . . . . . a a 
            `, SpriteKind.boss)
        while (derrotas >= 50) {
            galore_mothership.setPosition(148, randint(0, 120))
            pause(500)
        }
    }
})
forever(function () {
    if (derrotas >= 200) {
        planet_of_garoles = sprites.create(img`
            . . 6 c c 6 6 9 9 9 9 9 9 9 . . 
            . 6 6 6 6 6 6 6 9 9 9 9 9 9 9 . 
            5 6 6 6 6 6 6 6 6 9 4 4 9 9 9 9 
            5 5 5 6 6 6 6 6 6 6 9 9 9 9 9 9 
            b 5 5 5 6 6 6 6 6 6 6 9 9 9 9 9 
            6 b 5 5 b 6 6 6 6 6 3 3 3 5 5 5 
            6 b b b b 6 6 6 6 3 3 3 3 5 5 5 
            6 b b b b 6 6 6 6 3 3 b 5 5 5 5 
            6 6 6 6 6 6 6 6 6 3 3 b b b b b 
            6 6 6 6 5 5 5 6 6 3 3 3 3 3 3 3 
            6 6 6 5 5 5 b 6 6 3 3 3 3 3 3 3 
            6 6 6 b 5 5 b 6 6 6 6 6 6 6 9 9 
            6 6 6 b b b b 6 6 6 6 6 6 6 6 9 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 4 
            . 6 6 6 6 6 6 6 6 b 6 6 c 6 6 . 
            . . 4 6 6 6 6 6 6 6 6 6 c c . . 
            `, SpriteKind.planet)
        planet_of_garoles.setPosition(150, 55)
        planet_of_garoles.setVelocity(10, 0)
        PROTAGONISTA.follow(planet_of_garoles)
    }
})
game.onUpdateInterval(500, function () {
    if (derrotas >= 70) {
        if (derrotas < 100) {
            regigos = sprites.create(img`
                . . . . d e . . . . . . . . . 2 
                . . . . e d e . . . . . . . 2 2 
                . . . . e d d e . . . . . 2 2 2 
                . . . e d e e d 6 d d d d d 2 2 
                . 6 e d 6 a a a a a a a 2 f f 2 
                6 6 e 2 2 2 2 2 2 2 2 2 f f f 2 
                6 6 2 f 4 4 f a a a a a 4 4 4 2 
                6 6 2 4 f f 7 a a 8 a 4 d d 4 2 
                6 6 2 4 f f 7 a a 8 a 4 d d 4 2 
                6 6 2 f 4 4 f a a a a a 4 4 4 2 
                6 6 e 2 2 2 2 2 2 2 2 2 f f f 2 
                . 6 e d 6 a a a a a a a 2 f f 2 
                . . . e d e e d 6 d d d d d 2 2 
                . . . . e d d e . . . . . 2 2 2 
                . . . . e d e . . . . . . . 2 2 
                . . . . d e . . . . . . . . . 2 
                `, SpriteKind.ultra_enemy)
            regigos.setVelocity(-35, 0)
            regigos.setPosition(160, randint(0, 120))
        }
    }
})
game.onUpdateInterval(500, function () {
    if (derrotas < 30) {
        galore = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 2 2 2 
            . . . . . . . . . . . . 2 f f 2 
            . . . . . 2 2 2 2 2 2 2 f f f 2 
            . . . . 2 5 5 5 5 5 5 5 4 4 4 2 
            . . . . 2 5 5 5 5 5 5 4 d d 4 2 
            . . . . 2 5 5 5 5 5 5 4 d d 4 2 
            . . . . 2 5 5 5 5 5 5 5 4 4 4 2 
            . . . . . 2 2 2 2 2 2 2 f f f 2 
            . . . . . . . . . . . . 2 f f 2 
            . . . . . . . . . . . . . 2 2 2 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        galore.setVelocity(-50, 0)
        galore.setPosition(160, randint(0, 120))
    }
})
