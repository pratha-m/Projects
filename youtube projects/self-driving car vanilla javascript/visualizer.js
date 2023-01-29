class Visualizer{
    static drawNetwork(ctx,network){
        const margin=50;
        const left=margin;
        const top=margin;
        const width=ctx.canvas.width-margin*2;
        const height=ctx.canvas.height-margin*2;

        const levelHeight=height/network.levels.length;

        for(let i=network.levels.length-1;i>=0;i--){
            const levelTop=top+
                lerp(
                    height-levelHeight,
                    0,
                    network.levels.length==1
                        ?0.5
                        :i/(network.levels.length-1)
                );

            ctx.setLineDash([7,3]);
        }
    }

}