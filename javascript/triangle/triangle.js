export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  kind() {
    const equalSides = findEqualSides([this.a, this.b, this.c]);

    if (this.a === 0 || this.b === 0 || this.c === 0) {
      throw new Error('Triangles with no size are illegal');
    } else if (this.a < 0 || this.b < 0 || this.c < 0) {
      throw new Error('Triangles with negative sides are illegal')
    } else if (this.a + this.c <= this.b || this.a + this.b <= this.c  || this.b + this.c <= this.a) {
      throw new Error('Triangle inequality is illegal.')
    }

    switch(equalSides) {
      case 3:
        return 'equilateral';
      case 2:
        return 'isosceles';
      default:
        return 'scalene';
    }
  }
  
}

function findEqualSides(arr) {  
  let sides = 0;
  const sorted = arr.sort();

  for(let i = 0; i <= arr.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      sides++
    }
  }
  return sides;
}
