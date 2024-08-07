// 自动生成的代码。请勿编辑。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "级别1":
            case "级别1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "级别2":
            case "级别2":return tiles.createTilemap(hex`1e001e000102020202020202020202020202020202020202020202020202020202030708080808080808080808080908080808080908080809080808090808040709090909090909080908080908090808080908090809080908090808040708080808080808080908080808080809080908090809080908090808040708090809080909080908090808080808080908090809080908090808040708090808090808080808090809090809080908090809080908090808040708090808080908080808090808080808080908090809080908090808040708090909080808080808090909090909090908090809080908090808040708080809080808080808090808080808080808090808080908080808040709090809090909090909090809090909090909090909090909090908040708090808080808080808080809080808080808080808080808080808040708090909090909090909090909080909090909090909090909090909040708080808080808080808080808080908080808080808080808080808040708090909090909090909090909090908090909090909090909090908040708080808080808080808080808080808090808080808080808080808040709090909090909090909090909090909090809090909090909090909040708080808080808080808080808080808080809080808080808080808040708090909090909090909090909090909090909080909090909090908040708080808080808080808080808080808080808080908080808080808040709090909090909090909090909090909090909090908090909090909040708080808080808080808080808080808080808080808090808080808040708080909090909090909090909090909090909090909090809090908040709080808080808080808080808080808080808080808080809080808040708090809090909090909090909090909090909090909090909080909040708080808080808080808080808080808080808080808080808080908040708080909090909090909090909090909090909090909090909090908040708080808080808080808080808080808080808080808080808080808040709090909090909090909090909090909090909090909090909090a0a04070808080808080808080808080808080808080808080808080808080804070606060606060606060606060606060606060606060606060606060605`, img`
222222222222222222222222222222
2...........2.....2...2...2..2
22222222.2..2.2...2.2.2.2.2..2
2........2......2.2.2.2.2.2..2
2.2.2.22.2.2......2.2.2.2.2..2
2.2..2.....2.22.2.2.2.2.2.2..2
2.2...2....2......2.2.2.2.2..2
2.222......22222222.2.2.2.2..2
2...2......2........2...2....2
222.22222222.222222222222222.2
2.2..........2...............2
2.222222222222.222222222222222
2..............2.............2
2.22222222222222.22222222222.2
2................2...........2
222222222222222222.22222222222
2..................2.........2
2.222222222222222222.2222222.2
2....................2.......2
2222222222222222222222.2222222
2......................2.....2
2..222222222222222222222.222.2
22.......................2...2
2.2.2222222222222222222222.222
2..........................2.2
2..2222222222222222222222222.2
2............................2
222222222222222222222222222..2
2............................2
222222222222222222222222222222
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath4,sprites.castle.tileGrass1,sprites.builtin.forestTiles0,sprites.castle.tileGrass3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// 自动生成的代码。请勿编辑。
