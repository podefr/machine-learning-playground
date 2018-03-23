# Mega million lotto numbers

Fun around past lottery numbers, pretending that future numbers can be predicted

1. Extracting numbers from lottery website:

I started by extracting the numbers using a JS script on the lottery website:

https://www.wilottery.com/lottogames/megamillionshistoryOD.aspx

```
JSON.stringify(
    [].slice.call($('tr'), 1)
        .reduce((acc, row) => { 
            // extracting column 1 to 8
            acc.push([].slice.call(row.childNodes, 1,8).map(hop => hop.innerText)); 
            return acc;
           }, [])
)
```

Which I then pasted into last-draws.json

