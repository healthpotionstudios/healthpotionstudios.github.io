class Cube 
{
    

    constructor(centerx, centery, size) 
    {
        this.centerx = centerx;
        this.centery = centery;
        size = Math.round(size/2);
        this.angle = 0;
        this.points = [
            [ -size,  -size, -size],
            [ size,  -size, -size],
            [ size,  size, -size],
            [ -size,  size, -size],
            [ -size,  -size, size],
            [ size,  -size, size],
            [ size,  size, size],
            [ -size,  size, size],
            ];
        this.projected = [];

        this.projection = [
            [1, 0, 0],
            [0, 1, 0]
          ];
    }

    update(pixels)
    {
        this.angle += .05;

        const rotationZ = [
            [Math.cos(this.angle), -Math.sin(this.angle), 0],
            [Math.sin(this.angle), Math.cos(this.angle), 0],
            [0, 0, 1]
          ];
        
          const rotationX = [
            [1, 0, 0],
            [0, Math.cos(this.angle), -Math.sin(this.angle)],
            [0, Math.sin(this.angle), Math.cos(this.angle)]
          ];

        const rotationY = [
            [Math.cos(this.angle), 0, Math.sin(this.angle)],
            [0, 1, 0],
            [-Math.sin(this.angle), 0, Math.cos(this.angle)]
          ];


          for (let i = 0; i < this.points.length; i++) {
            let rotated = this.matmul(rotationX, this.points[i]);
            rotated = this.matmul(rotationY, rotated);
            rotated = this.matmul(rotationZ, rotated);
            let projected2d = this.matmul(this.projection, rotated);
            projected2d[0] = projected2d[0][0] + this.centerx;
            projected2d[1] = projected2d[1][0] + this.centery;
            this.projected[i] = projected2d;
          }
        this.sendPixels();
    }

//=======================================Matrix

    vecToMatrix(v) {
        let m = [];
        for (let i = 0; i < v.length; i++) {
          m[i] = [v[i]];
        }
        return m;
      }
      
      matrixToVec(m) {
        let v = []
        for (let i = 0; i < m.length; i++) {
            v[i] = m[i];
          }
        return v;
      }

    matmulvec(a, vec) {
        let m = this.vecToMatrix(vec);
        let r = this.matmul(a, m);
        return this.matrixToVec(r);
      }

    matmul(a, b) {
        if (b[0].length == 0 || b[0].length == undefined) {
            return this.matmulvec(a, b);
          }

        let colsA = a[0].length;
        let rowsA = a.length;
        let colsB = b[0].length;
        let rowsB = b.length;

        //console.log(colsA, rowsA, colsB, rowsB); //3 2 0 3

        if (colsA !== rowsB) {
            console.error('Columns of A must match rows of B');
            return null;
        }

        let result = [];
        for (let j = 0; j < rowsA; j++) {
            result[j] = [];
            for (let i = 0; i < colsB; i++) {
                let sum = 0;
                for (let n = 0; n < colsA; n++) {
                    sum += a[j][n] * b[n][i];
                }
                //console.log(Math.round(sum));
                result[j][i] = Math.round(sum);
            }
        }
        //console.log(result);
        return result;
    }
//=====================================end matrix
    sendPixels()
    {
        //renderer.DrawPoint([this.centerx,this.centery]);
        //console.log([this.projected[0][0],this.projected[0][1]]);
        // renderer.DrawPoint([this.projected[0][0] + this.centerx,this.projected[0][1] + this.centery]);
        // renderer.DrawPoint([this.projected[1][0] + this.centerx,this.projected[1][1] + this.centery]);
        // renderer.DrawPoint([this.projected[2][0] + this.centerx,this.projected[2][1] + this.centery]);
        // renderer.DrawPoint([this.projected[3][0] + this.centerx,this.projected[3][1] + this.centery]);

        // console.log([this.projected[0][0],this.projected[0][1]]);
        // renderer.DrawPoint([this.projected[0][0],this.projected[0][1]]);
        // renderer.DrawPoint([this.projected[1][0],this.projected[1][1]]);
        // renderer.DrawPoint([this.projected[2][0],this.projected[2][1]]);
        // renderer.DrawPoint([this.projected[3][0],this.projected[3][1]]);
        // renderer.DrawPoint([this.projected[4][0],this.projected[4][1]]);
        // renderer.DrawPoint([this.projected[5][0],this.projected[5][1]]);
        // renderer.DrawPoint([this.projected[6][0],this.projected[6][1]]);
        // renderer.DrawPoint([this.projected[7][0],this.projected[7][1]]);

        renderer.DrawLine(this.projected[0][0],this.projected[0][1], this.projected[1][0],this.projected[1][1]);
        renderer.DrawLine(this.projected[1][0],this.projected[1][1], this.projected[2][0],this.projected[2][1]);
        renderer.DrawLine(this.projected[2][0],this.projected[2][1], this.projected[3][0],this.projected[3][1]);
        renderer.DrawLine(this.projected[3][0],this.projected[3][1], this.projected[0][0],this.projected[0][1]);

        renderer.DrawLine(this.projected[4][0],this.projected[4][1], this.projected[5][0],this.projected[5][1]);
        renderer.DrawLine(this.projected[5][0],this.projected[5][1], this.projected[6][0],this.projected[6][1]);
        renderer.DrawLine(this.projected[6][0],this.projected[6][1], this.projected[7][0],this.projected[7][1]);
        renderer.DrawLine(this.projected[7][0],this.projected[7][1], this.projected[4][0],this.projected[4][1]);

        renderer.DrawLine(this.projected[0][0],this.projected[0][1], this.projected[4][0],this.projected[4][1]);
        renderer.DrawLine(this.projected[1][0],this.projected[1][1], this.projected[5][0],this.projected[5][1]);
        renderer.DrawLine(this.projected[2][0],this.projected[2][1], this.projected[6][0],this.projected[6][1]);
        renderer.DrawLine(this.projected[3][0],this.projected[3][1], this.projected[7][0],this.projected[7][1]);

    }

}


