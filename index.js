const api=async()=>{
    fetch('https://api.covid19india.org/data.json').then((res)=>{
        if(!res.ok){
            throw Error(res.statusText)
        }
        const dt =res.json()
        return dt
    }).then((data)=>{
        // console.log(data);
        // console.log(data.statewise);
        // console.log(data.statewise.length);
        
    //code for total cases
      document.getElementById('update-time').innerHTML+=data.statewise[0].lastupdatedtime;
      document.getElementById('total').innerHTML=data.statewise[0].active;
    document.getElementById('confirmed').innerHTML=data.statewise[0].confirmed;
    document.getElementById('deaths').innerHTML=data.statewise[0].deaths;
    document.getElementById('recovered').innerHTML=data.statewise[0].recovered;
     
    //end
    var output='';
        for(let i=1;i<data.statewise.length-1;i++)
        {
           output+=`
              <tr>
                <td>${data.statewise[i].lastupdatedtime}</td>
                <td>${data.statewise[i].state}</td>
                <td>${data.statewise[i].active}</td>
                <td>${data.statewise[i].confirmed}</td>
                <td>${data.statewise[i].deaths}</td>
                <td>${data.statewise[i].migratedother}</td>
                <td>${data.statewise[i].recovered}</td>
              
              </tr>
           `;
        };
        
        document.getElementById('tbody').innerHTML=output;

    }).catch((error)=>{
        console.log(error)
    })
}
api();
