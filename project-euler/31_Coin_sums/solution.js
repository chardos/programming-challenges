// In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
// 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
// It is possible to make £2 in the following way:
// 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
// How many different ways can £2 be made using any number of coins?

const denominations = [1,2,5];

function getNumCombos(){

};


//1p, 2p, 5p
//10p

//1p
// (10x1p)
// (8x1p) + (1x2p)
// (6x1p) + (2x2p)
// (5x1p) + (1x5p)
// (4x1p) + (3x2p)
// (2x1p) + (4x2p)
// (1x1p) + (2x2p) + (1x5p)

//5p
// (0x1p) + (5x2p)

//find the maximum amount of coins for each denomination
//
