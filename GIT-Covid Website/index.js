fetch('https://api.covid19india.org/data.json')
.then((response) => {
  return response.json();
})
.then((data) => {
  var s1= data.statewise[4].active;
  console.log('ACTIVE:',s1);
  var s2= data.statewise[4].confirmed;
  console.log('CONFIRMED:',s2);
  var s3= data.statewise[4].recovered;
  console.log('RECOVERED:',s3);
  var s4= data.statewise[4].deaths;
  console.log('DEATHS:',s4);
})
.catch();

fetch('https://api.covid19india.org/data.json')
.then((response) => {
  return response.json();
})
.then((data) => {
  var s1= data.statewise[8].state;    console.log('ACTIVE:',s1);
  var s1= data.statewise[9].state;    console.log('ACTIVE:',s1);
  var s1= data.statewise[10].state;   console.log('ACTIVE:',s1);
  var s1= data.statewise[11].state;   console.log('ACTIVE:',s1);
  var s1= data.statewise[12].state;   console.log('ACTIVE:',s1);
  var s1= data.statewise[13].state;   console.log('ACTIVE:',s1);
  var s1= data.statewise[14].state;   console.log('ACTIVE:',s1);
  var s1= data.statewise[15].state;   console.log('ACTIVE:',s1);
  var s1= data.statewise[16].state;   console.log('ACTIVE:',s1);
  var s1= data.statewise[17].state;   console.log('ACTIVE:',s1);
  var s1= data.statewise[18].state;   console.log('ACTIVE:',s1);
  var s1= data.statewise[19].state;   console.log('ACTIVE:',s1);
  var s1= data.statewise[20].state;   console.log('ACTIVE:',s1);
  var s1= data.statewise[21].state;   console.log('ACTIVE:',s1);
  var s1= data.statewise[22].state;   console.log('ACTIVE:',s1);
  var s1= data.statewise[23].state;   console.log('ACTIVE:',s1);
  var s1= data.statewise[24].state;   console.log('ACTIVE:',s1);
  var s1= data.statewise[25].state;   console.log('ACTIVE:',s1);
  var s1= data.statewise[26].state;   console.log('ACTIVE:',s1);
  var s1= data.statewise[27].state;   console.log('ACTIVE:',s1);
  var s1= data.statewise[28].state;   console.log('ACTIVE:',s1);
  var s1= data.statewise[29].state;   console.log('ACTIVE:',s1);
  var s1= data.statewise[30].state;   console.log('ACTIVE:',s1);
  var s1= data.statewise[31].state;   console.log('ACTIVE:',s1);
  var s1= data.statewise[32].state;   console.log('ACTIVE:',s1);
  var s1= data.statewise[33].state;   console.log('ACTIVE:',s1);
  var s1= data.statewise[34].state;   console.log('ACTIVE:',s1);
  var s1= data.statewise[35].state;   console.log('ACTIVE:',s1);
  var s1= data.statewise[36].state;   console.log('ACTIVE:',s1);
  var s1= data.statewise[37].state;   console.log('ACTIVE:',s1);
})
.catch();




fetch('https://spreadsheets.google.com/feeds/list/1SqrjV1tI_0N-Utiv5TYzYYhonBFGf_72o6XaanFvLwo/od6/public/basic?alt=json')
.then((response) => {
  return response.json();
})
.then((data) => {
    var d= data.feed.entry[0].content.$t;
    console.log('Hospital 01-Default Array:',d);

    var s= data.feed.entry[0].content.$t.split(",");
    console.log('Hospital 01-Complete Data:',s);

    var title= data.feed.entry[0].title.$t;
    console.log('Hospital 01:',title);

    var s1= s[0].split("total: ");
    var total=s1[1];
    console.log('Hospital 01-Total:',total);

    var s2= s[1].split("vacant: ");
    var vacant=s2[1]
    console.log('Hospital 01-Vacant:',vacant);

    var s3= s[2].split("lastupdated:  ");
    var last=s3[1]
    console.log('Hospital 01-Last Updated:',last);
})
.catch();
