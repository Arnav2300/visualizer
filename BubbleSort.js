async function BubbleSort(size,delay){
    console.log(size);
    for(var i=0;i<size-1;i++)   //10 is array size
    {
        for(var j=0;j<size-1-i;j++)
        {
            //await new Promise(resolve => setTimeout(() => {resolve(), 2000}));
            updater(divs[j],arr_heights[j],"#ecdbba");
            await new Promise(resolve => {
                setTimeout(function() {
                  resolve()},delay)
              });
            if(arr_heights[j]>arr_heights[j+1])
            {
                
                updater(divs[j],arr_heights[j],"#c84b31");
                updater(divs[j+1],arr_heights[j+1],"#c84b31");
                
                await new Promise(resolve => {
                    setTimeout(function() {
                      resolve()},delay)
                  });
                var t1=arr_heights[j];
                arr_heights[j]=arr_heights[j+1];
                arr_heights[j+1]=t1;
                
                //height update
                updater(divs[j],arr_heights[j],"red");
                updater(divs[j+1],arr_heights[j+1],"red");
            }
            updater(divs[j],arr_heights[j],"#43FCFF"); //neon blue
        }
        updater(divs[j],arr_heights[j],"#77dd77"); //green
    }    
    updater(divs[0],arr_heights[0],"#77dd77"); //green
    button_enable();
    slider_enable();
}