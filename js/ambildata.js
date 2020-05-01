// $.ajax({
//     url: 'https://cors-anywhere.herokuapp.com/https://corona.jatengprov.go.id/',
//     success: function(response) {
//         var res = response.match(/font-counter.*<sup/g);
//         var myoutput = "";
//         for (i = 0; i < res.length; i++) {
//             res[i] = res[i].substr(res[i].indexOf(">") + 1, res[i].length).replace(" <sup", "")
//         }
//         myoutput = myoutput.concat("<p>Positif COVID-19 : Total " + res[0] + " Kasus</p>")
//         myoutput = myoutput.concat("<p>Positif COVID-19 : Dirawat " + res[1] + " Kasus</p>")
//         myoutput = myoutput.concat("<p>Positif COVID-19 : Sembuh " + res[2] + " Kasus</p>")
//         myoutput = myoutput.concat("<p>Positif COVID-19 : Meninggal " + res[3] + " Kasus</p>")
//         myoutput = myoutput.concat("<p>ODP (Orang Dalam Pemantauan) " + res[4] + " Total Kasus</p>")
//         myoutput = myoutput.concat("<p>PDP (Pasien Dalam Pengawasan) " + res[5] + " Pasien Dirawat</p>")
//             //console.log(myoutput);
//             // document.getElementById("data-corona").innerHTML = myoutput;
//         document.getElementById("data-corona1").innerHTML = res[0];
//         document.getElementById("data-corona2").innerHTML = "dan ODP sebanyak " + res[4] + " Manusia";
//         //console.log(res);
//     },
//     error: function(response) {
//         console.log('bridge server error');
//     }
// })

$.ajax({
    type: 'post',
    dataType: 'JSON',
    url: 'https://cors-anywhere.herokuapp.com/https://corona.jatengprov.go.id/realtime-data',
    beforeSend: function(xhr, options) {
        console.log('Loading Data');
    },
    success: function(data) {
        document.getElementById("data-corona1").innerHTML = data.total;
        document.getElementById("data-corona2").innerHTML = "dan ODP sebanyak " + data.odp + " Orang";
        // console.log(data.update);
        // console.log(data.total);
        // console.log(data.dirawat);
        // console.log(data.sembuh);
        // console.log(data.meninggal);
        // console.log(data.odp);
        // console.log(data.pdp);
    },
    error: function(response) {
        console.log('bridge server error');
        console.log(response);
    }
});