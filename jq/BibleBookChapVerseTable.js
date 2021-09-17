


$(function () {
    //console.log(NIV)

    var BibleObj = NIV
    var tab = ""
    for (let Bk in BibleObj) {
        console.log(Bk)
        for (let Chp in BibleObj[Bk]) {
            //console.log(Bk)
            tab += `<tr><td>${Bk}${Chp}</td><td>`
            for (let Vrs in BibleObj[Bk][Chp]) {
                var relativePosi = BibleObj[Bk][Chp][Vrs]
                //console.log()
                tab += `<a title='${Bk}${Chp}:${Vrs} ${relativePosi}' relativePosi=${relativePosi}>${Vrs}</a>, `;
            }
            tab += "</td></tr>"
        }
    }
    $("#myAudioFileNameSelect tbody").append(tab);
});////////////////////////////////