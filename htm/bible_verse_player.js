

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
                var Chp3 = Chp.padStart(3, "0")
                var src = Audio_Bible_Struct.findAudioUrlFolderPath(Bk, Chp) 
                var bcv = `${Bk}${Chp}:${Vrs}`
                
                tab += `<a src='${src}' title='${bcv} ${relativePosi}' relativePosi=${relativePosi}> ${Vrs}</a>,`;
            }
            tab = tab.replace(/,$/,"")
            tab += "</td></tr>"
        }
    }
    $("#myAudioFileNameSelect tbody").append(tab).find("a").on("click", function () {
        var audsrc = $(this).attr("src")
        var relativePosi = $(this).attr("relativePosi")
        $(".hili").removeClass("hili")
        $(this).addClass("hili")

        var title = $(this).attr("title")
        $("#playname").text(title)

        gvObj = null
        gvObj = document.getElementById('myAudio');

        setTimeout(function () {
            gvObj.src = audsrc
            //gvObj.play()
            gvObj.pause()
            setTimeout(function () {
                var maxlen = gvObj.duration;//(audio len in seconds)
                if(!maxlen){
                    alert("try again")
                    return;
                }
                console.log("maxlen", maxlen)
                gvObj.currentTime = maxlen * parseFloat(relativePosi)
                gvObj.play()
                console.log(audsrc)
            },500)
        },0)
        
        

        //
       

    });
});////////////////////////////////