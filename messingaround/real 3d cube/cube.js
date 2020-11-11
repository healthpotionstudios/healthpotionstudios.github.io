class Cube
{

    constructor (scale)
    {
        this.vert = [
            [-scale,  scale,  scale],
            [ scale,  scale,  scale],
            [ scale, -scale,  scale],
            [-scale, -scale,  scale],

            [ scale,  scale,  scale],
            [ scale,  scale, -scale],
            [ scale, -scale, -scale],
            [ scale, -scale,  scale],

            [ scale,  scale, -scale],
            [-scale,  scale, -scale],
            [-scale, -scale, -scale],
            [ scale, -scale, -scale],

            [-scale,  scale, -scale],
            [-scale,  scale,  scale],
            [-scale, -scale,  scale],
            [-scale, -scale, -scale],

            [-scale,  scale, -scale],
            [ scale,  scale, -scale],
            [ scale,  scale,  scale],
            [-scale,  scale,  scale],

            [-scale, -scale, -scale],
            [ scale, -scale, -scale],
            [ scale, -scale,  scale],
            [-scale, -scale,  scale]
        ]
    }

}