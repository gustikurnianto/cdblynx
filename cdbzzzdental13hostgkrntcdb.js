let input = document.getElementById('inputnich');

    WIDTH = 800;

    input.addEventListener("change", (event) => {
        let image_file = event.target.files[0];

        console.log("Original File", image_file)

        let reader = new FileReader();

        reader.readAsDataURL(image_file);

        reader.onload = (event) => {

            highimg = document.querySelector('.highimg');
            highimg.src = event.target.result;

            image_url = event.target.result;
            let image = document.createElement('img');
            image.src = image_url;

            image.onload = (e) => {

                let canvas = document.createElement('canvas');
                let ratio = WIDTH / image.width;
                canvas.width = WIDTH;
                canvas.height = image.height * ratio;
                canvas.id = 'canvas';
                canvas.style.display = "none";

                let context = canvas.getContext('2d');
                context.drawImage(image, 0, 0, canvas.width, canvas.height);

                let new_image_url = canvas.toDataURL('image/jpeg', 98);

                // console.log("Image URL: ", new_image_url)

                let image_file = urlToFile(new_image_url);

                var wrapper = document.getElementById('wrapper');

                wrapper.append(canvas);

                document.getElementById('containerhighlightz').style.display = "block";

                document.getElementById('modalhighlight').style.display = "block";

                document.getElementById('upbtnzzhighlightz').style.display = "block";

                document.getElementById('wrapper').style.marginTop = "10px";

                document.querySelector('#emptyiconhighlightz').style.display = "none";

            } 
        }
    })

    let urlToFile = (url) => {

        let arr = url.split(",");
        // console.log(arr)
        let mime = arr[0].match(/:(.*?);/)[1];
        let data = arr[1];

        let dataStr = atob(data);
        let n = dataStr.length;
        let dataArr = new Uint8Array(n);

        while(n--)
        {
            dataArr[n] = dataStr.charCodeAt(n)
        };

        let file  = new File([dataArr], 'File.jpg', {type: mime});

        var dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);

        var fileInput = document.querySelector('#inputnyah');
        fileInput.files = dataTransfer.files;

        var databaseuname = ptsft;
        var nomorhlgt =  document.getElementById('nomorhlgt').value;
        var inputnich = document.querySelector('#inputnyah');
        var filesss = inputnich.files[0];
        var namebox = document.querySelector('#nameboxxhighlightz');
        namebox.value = databaseuname+"Highlight"+nomorhlgt;

        return file;

    }

    $('#closehighlight').click(function(){
        $("#modalhighlight").hide();
        $("#containerhighlightz").hide();
        var highimgdelete = document.querySelector('.highimg');
        highimgdelete.src = "";
        var inputnichz = document.querySelector('#inputnich');
        var inputnyahz = document.querySelector('#inputnyah');
        inputnichz.value = "";
        inputnyahz.value = "";
    });

let inputkeluhan = document.getElementById('jawabanfotokeluhan');

    WIDTH = 800;

    inputkeluhan.addEventListener("change", (eventkeluhan) => {
        let image_keluhan = eventkeluhan.target.files[0];

        console.log("Original File", image_keluhan)

        let readerkeluhan = new FileReader();

        readerkeluhan.readAsDataURL(image_keluhan);

        readerkeluhan.onload = (eventkeluhan) => {

            image_url_keluhan = eventkeluhan.target.result;
            let imagekeluhan = document.createElement('img');
            imagekeluhan.src = image_url_keluhan;

            imagekeluhan.onload = (e) => {

                let canvas = document.createElement('canvas');
                let ratio = WIDTH / imagekeluhan.width;
                canvas.width = WIDTH;
                canvas.height = imagekeluhan.height * ratio;
                canvas.id = 'canvaskeluhan';
                canvas.style.display = "none";

                let context = canvas.getContext('2d');
                context.drawImage(imagekeluhan, 0, 0, canvas.width, canvas.height);

                let new_image_url_keluhan = canvas.toDataURL('image/jpeg', 98);

                // console.log("Image URL: ", new_image_url_keluhan)

                let image_keluhan = urlToFileKeluhan(new_image_url_keluhan);

                var wrapperkeluhan = document.getElementById('wrapperkeluhan');

                document.getElementById('wrapperkeluhan').style.display = "block";

                wrapperkeluhan.append(canvas);

            } 
        }
    })

    let urlToFileKeluhan = (url) => {

        let arr = url.split(",");
        // console.log(arr)
        let mime = arr[0].match(/:(.*?);/)[1];
        let data = arr[1];

        let dataStr = atob(data);
        let n = dataStr.length;
        let dataArr = new Uint8Array(n);

        while(n--)
        {
            dataArr[n] = dataStr.charCodeAt(n)
        };

        let filekeluhan  = new File([dataArr], 'FotoKeluhan.jpg', {type: mime});

        var dataTransfer = new DataTransfer();
        dataTransfer.items.add(filekeluhan);

        var fileInput = document.querySelector('#jawabanfotonya');
        fileInput.files = dataTransfer.files;

        var databaseuname = ptsft;
        var nomorreservasi =  document.getElementById('nomorreservasi').value;
        var jawabanfotokeluhan = document.querySelector('#jawabanfotonya');
        var filessskeluhan = jawabanfotokeluhan.files[0];
        var nameboxkeluhan = document.querySelector('#nameboxxkeluhan');
        nameboxkeluhan.value = databaseuname+"Keluhan"+nomorreservasi;

        let readerkeluhanz = new FileReader();

        readerkeluhanz.readAsDataURL(filessskeluhan);

        readerkeluhanz.onload = (eventkeluhanz) => {

            var highimgkeluhan = document.querySelector('.highimgkeluhan');
            highimgkeluhan.src = eventkeluhanz.target.result;

            $('#jawabanfotokeluhanz').text('ubah foto keluhan');
                
        } 

        return filekeluhan;

    }
    
    $('#selbtn').click(function(){
        $("#fotoInputProfilez").trigger('click');
    });
    
    let inputInputProfile = document.getElementById('fotoInputProfilez');
    
    WIDTH = 800;
    
    inputInputProfile.addEventListener("change", (eventInputProfile) => {
        let image_InputProfile = eventInputProfile.target.files[0];
    
        console.log("Original File", image_InputProfile)
    
        let readerInputProfile = new FileReader();
    
        readerInputProfile.readAsDataURL(image_InputProfile);
    
        readerInputProfile.onload = (eventInputProfile) => {
    
            highimgInputProfile = document.querySelector('.highimgInputProfile');
            highimgInputProfile.src = eventInputProfile.target.result;
    
            image_url_InputProfile = eventInputProfile.target.result;
            let imageInputProfile = document.createElement('img');
            imageInputProfile.src = image_url_InputProfile;
    
            imageInputProfile.onload = (e) => {
    
                let canvasInputProfile = document.createElement('canvas');
                let ratio = WIDTH / imageInputProfile.width;
                canvasInputProfile.width = WIDTH;
                canvasInputProfile.height = imageInputProfile.height * ratio;
                canvasInputProfile.id = 'canvasInputProfile';
                canvasInputProfile.style.display = "none";
    
                let context = canvasInputProfile.getContext('2d');
                context.drawImage(imageInputProfile, 0, 0, canvasInputProfile.width, canvasInputProfile.height);
    
                let new_image_url_InputProfile = canvasInputProfile.toDataURL('image/jpeg', 98);
    
                // console.log("Image URL: ", new_image_url_InputProfile)
    
                let image_InputProfile = urlToFileInputProfile(new_image_url_InputProfile);
    
                var wrapperInputProfile = document.getElementById('wrapperInputProfile');
    
                wrapperInputProfile.append(canvasInputProfile);
    
                $('#kotakpreview').css('background-image', 'url('+eventInputProfile.target.result +')');
                $('#logoprofile').css('background-image', 'url('+eventInputProfile.target.result +')');
                $('#logoprofile').css('background-image', 'url('+eventInputProfile.target.result +')');
                $('#gambareditthetools1').css('background-image', 'url('+eventInputProfile.target.result +')');
                $('#gambareditthetools2').css('background-image', 'url('+eventInputProfile.target.result +')');
                $('#selbtn').css('border-top-left-radius', '8px');
                $('#selbtn').css('border-top-right-radius', '8px');
                $('#selbtn').css('border-bottom-left-radius', '0px');
                $('#selbtn').css('border-bottom-right-radius', '0px');
                $('#selbtn').css('border-bottom', '0.25px solid white');
                $('#upbtn').css('border-top-left-radius', '0px');
                $('#upbtn').css('border-top-right-radius', '0px');
                $('#upbtn').css('border-bottom-left-radius', '8px');
                $('#upbtn').css('border-bottom-right-radius', '8px');
                $('#upbtn').css('border-top', '0.25px solid white');
                $('#upbtn').show();
    
            } 
        }
    })
    
    let urlToFileInputProfile = (url) => {
    
        let arr = url.split(",");
        // console.log(arr)
        let mime = arr[0].match(/:(.*?);/)[1];
        let data = arr[1];
    
        let dataStr = atob(data);
        let n = dataStr.length;
        let dataArr = new Uint8Array(n);
    
        while(n--)
        {
            dataArr[n] = dataStr.charCodeAt(n)
        };
    
        let fileInputProfile  = new File([dataArr], 'FotoInputProfile.jpg', {type: mime});
    
        var dataTransfer = new DataTransfer();
        dataTransfer.items.add(fileInputProfile);
    
        var fileInput = document.querySelector('#fotoInputProfilezx');
        fileInput.files = dataTransfer.files;
    
        var databaseuname = ptsft;
        var jawabanfotoInputProfile = document.querySelector('#fotoInputProfilezx');
        var filesssInputProfile = jawabanfotoInputProfile.files[0];
        var nameboxInputProfile = document.querySelector('#nameboxxInputProfile');
        nameboxInputProfile.value = databaseuname+"InputProfile";
    
        return fileInputProfile;
    
    }
    
    $('#selbtnzz').click(function(){
        $("#fotoInputBioz").trigger('click');
    });
    
    let inputInputBio = document.getElementById('fotoInputBioz');
    
    WIDTH = 800;
    
    inputInputBio.addEventListener("change", (eventInputBio) => {
        let image_InputBio = eventInputBio.target.files[0];
    
        console.log("Original File", image_InputBio)
    
        let readerInputBio = new FileReader();
    
        readerInputBio.readAsDataURL(image_InputBio);
    
        readerInputBio.onload = (eventInputBio) => {
    
            highimgInputBio = document.querySelector('.highimgInputBio');
            highimgInputBio.src = eventInputBio.target.result;
    
            image_url_InputBio = eventInputBio.target.result;
            let imageInputBio = document.createElement('img');
            imageInputBio.src = image_url_InputBio;
    
            imageInputBio.onload = (e) => {
    
                let canvasInputBio = document.createElement('canvas');
                let ratio = WIDTH / imageInputBio.width;
                canvasInputBio.width = WIDTH;
                canvasInputBio.height = imageInputBio.height * ratio;
                canvasInputBio.id = 'canvasInputBio';
                canvasInputBio.style.display = "none";
    
                let context = canvasInputBio.getContext('2d');
                context.drawImage(imageInputBio, 0, 0, canvasInputBio.width, canvasInputBio.height);
    
                let new_image_url_InputBio = canvasInputBio.toDataURL('image/jpeg', 98);
    
                // console.log("Image URL: ", new_image_url_InputBio)
    
                let image_InputBio = urlToFileInputBio(new_image_url_InputBio);
    
                var wrapperInputBio = document.getElementById('wrapperInputBio');
    
                wrapperInputBio.append(canvasInputBio);
    
                $('#kotakpreviewz').css('background-image', 'url('+eventInputBio.target.result +')');
                $('.ktksilahkan').css('background-image', 'url('+eventInputBio.target.result +')');
                $('#selbtnzz').css('border-top-left-radius', '8px');
                $('#selbtnzz').css('border-top-right-radius', '8px');
                $('#selbtnzz').css('border-bottom-left-radius', '0px');
                $('#selbtnzz').css('border-bottom-right-radius', '0px');
                $('#selbtnzz').css('border-bottom', '0.25px solid white');
                $('#upbtnzz').css('border-top-left-radius', '0px');
                $('#upbtnzz').css('border-top-right-radius', '0px');
                $('#upbtnzz').css('border-bottom-left-radius', '8px');
                $('#upbtnzz').css('border-bottom-right-radius', '8px');
                $('#upbtnzz').css('border-top', '0.25px solid white');
                $('#upbtnzz').show();
    
            } 
        }
    })
    
    let urlToFileInputBio = (url) => {
    
        let arr = url.split(",");
        // console.log(arr)
        let mime = arr[0].match(/:(.*?);/)[1];
        let data = arr[1];
    
        let dataStr = atob(data);
        let n = dataStr.length;
        let dataArr = new Uint8Array(n);
    
        while(n--)
        {
            dataArr[n] = dataStr.charCodeAt(n)
        };
    
        let fileInputBio  = new File([dataArr], 'FotoInputBio.jpg', {type: mime});
    
        var dataTransfer = new DataTransfer();
        dataTransfer.items.add(fileInputBio);
    
        var fileInput = document.querySelector('#fotoInputBiozx');
        fileInput.files = dataTransfer.files;
    
        var databaseuname = ptsft;
        var jawabanfotoInputBio = document.querySelector('#fotoInputBiozx');
        var filesssInputBio = jawabanfotoInputBio.files[0];
        var nameboxInputBio = document.querySelector('#nameboxxInputBio');
        nameboxInputBio.value = databaseuname+"InputBio";
    
        return fileInputBio;
    
    }
    
$('#inputBG').click(function(){
    $("#fotoInputBGz").trigger('click');
});

let inputInputBG = document.getElementById('fotoInputBGz');

WIDTH = 800;

inputInputBG.addEventListener("change", (eventInputBG) => {
    let image_InputBG = eventInputBG.target.files[0];

    console.log("Original File", image_InputBG)

    let readerInputBG = new FileReader();

    readerInputBG.readAsDataURL(image_InputBG);

    readerInputBG.onload = (eventInputBG) => {

        highimgInputBG = document.querySelector('.highimgInputBG');
        highimgInputBG.src = eventInputBG.target.result;

        $("body").css('background-image', 'url('+eventInputBG.target.result +')');
        $("body").css('background-size', 'cover');
        $("body").css('background-repeat', 'no-repeat');
        $("body").css('background-attachment', 'fixed');

        image_url_InputBG = eventInputBG.target.result;
        let imageInputBG = document.createElement('img');
        imageInputBG.src = image_url_InputBG;

        imageInputBG.onload = (e) => {

            let canvasInputBG = document.createElement('canvas');
            let ratio = WIDTH / imageInputBG.width;
            canvasInputBG.width = WIDTH;
            canvasInputBG.height = imageInputBG.height * ratio;
            canvasInputBG.id = 'canvasInputBG';
            canvasInputBG.style.display = "none";

            let context = canvasInputBG.getContext('2d');
            context.drawImage(imageInputBG, 0, 0, canvasInputBG.width, canvasInputBG.height);

            let new_image_url_InputBG = canvasInputBG.toDataURL('image/jpeg', 98);

            // console.log("Image URL: ", new_image_url_InputBG)

            let image_InputBG = urlToFileInputBG(new_image_url_InputBG);

            var wrapperInputBG = document.getElementById('wrapperInputBG');

            wrapperInputBG.append(canvasInputBG);

            $('#ktkInputBG').show();
            $('#uploadfotoInputBG').show();

        } 
    }
})

let urlToFileInputBG = (url) => {

    let arr = url.split(",");
    // console.log(arr)
    let mime = arr[0].match(/:(.*?);/)[1];
    let data = arr[1];

    let dataStr = atob(data);
    let n = dataStr.length;
    let dataArr = new Uint8Array(n);

    while(n--)
    {
        dataArr[n] = dataStr.charCodeAt(n)
    };

    let fileInputBG  = new File([dataArr], 'FotoInputBG.jpg', {type: mime});

    var dataTransfer = new DataTransfer();
    dataTransfer.items.add(fileInputBG);

    var fileInput = document.querySelector('#fotoInputBGzx');
    fileInput.files = dataTransfer.files;

    var databaseuname = ptsft;
    var jawabanfotoInputBG = document.querySelector('#fotoInputBGzx');
    var filesssInputBG = jawabanfotoInputBG.files[0];
    var nameboxInputBG = document.querySelector('#nameboxxInputBG');
    nameboxInputBG.value = databaseuname+"InputBG";

    return fileInputBG;

}

let inputdentist = document.getElementById('fotodentistz');

WIDTH = 800;

inputdentist.addEventListener("change", (eventdentist) => {
    let image_dentist = eventdentist.target.files[0];

    console.log("Original File", image_dentist)

    let readerdentist = new FileReader();

    readerdentist.readAsDataURL(image_dentist);

    readerdentist.onload = (eventdentist) => {

        $('.fotodentist').css('background-image', 'url('+eventdentist.target.result +')');

        image_url_dentist = eventdentist.target.result;
        let imagedentist = document.createElement('img');
        imagedentist.src = image_url_dentist;

        imagedentist.onload = (e) => {

            let canvasdentist = document.createElement('canvas');
            let ratio = WIDTH / imagedentist.width;
            canvasdentist.width = WIDTH;
            canvasdentist.height = imagedentist.height * ratio;
            canvasdentist.id = 'canvasdentist';
            canvasdentist.style.display = "none";

            let context = canvasdentist.getContext('2d');
            context.drawImage(imagedentist, 0, 0, canvasdentist.width, canvasdentist.height);

            let new_image_url_dentist = canvasdentist.toDataURL('image/jpeg', 98);

            // console.log("Image URL: ", new_image_url_dentist)

            let image_dentist = urlToFiledentist(new_image_url_dentist);

            var wrapperdentist = document.getElementById('wrapperdentist');

            wrapperdentist.append(canvasdentist);

        } 
    }
})

let urlToFiledentist = (url) => {

    let arr = url.split(",");
    // console.log(arr)
    let mime = arr[0].match(/:(.*?);/)[1];
    let data = arr[1];

    let dataStr = atob(data);
    let n = dataStr.length;
    let dataArr = new Uint8Array(n);

    while(n--)
    {
        dataArr[n] = dataStr.charCodeAt(n)
    };

    let filedentist  = new File([dataArr], 'Fotodentist.jpg', {type: mime});

    var dataTransfer = new DataTransfer();
    dataTransfer.items.add(filedentist);

    var fileInput = document.querySelector('#fotodentistzx');
    fileInput.files = dataTransfer.files;

    var databaseuname = ptsft;
    var nomordentist =  document.getElementById('nomordentist').value;
    var jawabanfotodentist = document.querySelector('#fotodentistzx');
    var filesssdentist = jawabanfotodentist.files[0];
    var nameboxdentist = document.querySelector('#nameboxxdentist');
    nameboxdentist.value = databaseuname+"dentist"+nomordentist;

    return filedentist;

}

let inputscaling = document.getElementById('fotoscalingz');

WIDTH = 800;

inputscaling.addEventListener("change", (eventscaling) => {
    let image_scaling = eventscaling.target.files[0];

    console.log("Original File", image_scaling)

    let readerscaling = new FileReader();

    readerscaling.readAsDataURL(image_scaling);

    readerscaling.onload = (eventscaling) => {

        $('#fotoscaling').css('background-image', 'url('+eventscaling.target.result +')');

        image_url_scaling = eventscaling.target.result;
        let imagescaling = document.createElement('img');
        imagescaling.src = image_url_scaling;

        imagescaling.onload = (e) => {

            let canvasscaling = document.createElement('canvas');
            let ratio = WIDTH / imagescaling.width;
            canvasscaling.width = WIDTH;
            canvasscaling.height = imagescaling.height * ratio;
            canvasscaling.id = 'canvasscaling';
            canvasscaling.style.display = "none";

            let context = canvasscaling.getContext('2d');
            context.drawImage(imagescaling, 0, 0, canvasscaling.width, canvasscaling.height);

            let new_image_url_scaling = canvasscaling.toDataURL('image/jpeg', 98);

            // console.log("Image URL: ", new_image_url_scaling)

            let image_scaling = urlToFilescaling(new_image_url_scaling);

            var wrapperscaling = document.getElementById('wrapperscaling');

            wrapperscaling.append(canvasscaling);

        } 
    }
})

let urlToFilescaling = (url) => {

    let arr = url.split(",");
    // console.log(arr)
    let mime = arr[0].match(/:(.*?);/)[1];
    let data = arr[1];

    let dataStr = atob(data);
    let n = dataStr.length;
    let dataArr = new Uint8Array(n);

    while(n--)
    {
        dataArr[n] = dataStr.charCodeAt(n)
    };

    let filescaling  = new File([dataArr], 'Fotoscaling.jpg', {type: mime});

    var dataTransfer = new DataTransfer();
    dataTransfer.items.add(filescaling);

    var fileInput = document.querySelector('#fotoscalingzx');
    fileInput.files = dataTransfer.files;

    var databaseuname = ptsft;
    var nomorscaling =  document.getElementById('nomorscaling').value;
    var jawabanfotoscaling = document.querySelector('#fotoscalingzx');
    var filesssscaling = jawabanfotoscaling.files[0];
    var nameboxscaling = document.querySelector('#nameboxxscaling');
    nameboxscaling.value = databaseuname+"scaling"+nomorscaling;

    return filescaling;

}

let inputtambal = document.getElementById('fototambalz');

WIDTH = 800;

inputtambal.addEventListener("change", (eventtambal) => {
    let image_tambal = eventtambal.target.files[0];

    console.log("Original File", image_tambal)

    let readertambal = new FileReader();

    readertambal.readAsDataURL(image_tambal);

    readertambal.onload = (eventtambal) => {

        $('#fototambal').css('background-image', 'url('+eventtambal.target.result +')');

        image_url_tambal = eventtambal.target.result;
        let imagetambal = document.createElement('img');
        imagetambal.src = image_url_tambal;

        imagetambal.onload = (e) => {

            let canvastambal = document.createElement('canvas');
            let ratio = WIDTH / imagetambal.width;
            canvastambal.width = WIDTH;
            canvastambal.height = imagetambal.height * ratio;
            canvastambal.id = 'canvastambal';
            canvastambal.style.display = "none";

            let context = canvastambal.getContext('2d');
            context.drawImage(imagetambal, 0, 0, canvastambal.width, canvastambal.height);

            let new_image_url_tambal = canvastambal.toDataURL('image/jpeg', 98);

            // console.log("Image URL: ", new_image_url_tambal)

            let image_tambal = urlToFiletambal(new_image_url_tambal);

            var wrappertambal = document.getElementById('wrappertambal');

            wrappertambal.append(canvastambal);

        } 
    }
})

let urlToFiletambal = (url) => {

    let arr = url.split(",");
    // console.log(arr)
    let mime = arr[0].match(/:(.*?);/)[1];
    let data = arr[1];

    let dataStr = atob(data);
    let n = dataStr.length;
    let dataArr = new Uint8Array(n);

    while(n--)
    {
        dataArr[n] = dataStr.charCodeAt(n)
    };

    let filetambal  = new File([dataArr], 'Fototambal.jpg', {type: mime});

    var dataTransfer = new DataTransfer();
    dataTransfer.items.add(filetambal);

    var fileInput = document.querySelector('#fototambalzx');
    fileInput.files = dataTransfer.files;

    var databaseuname = ptsft;
    var nomortambal =  document.getElementById('nomortambal').value;
    var jawabanfototambal = document.querySelector('#fototambalzx');
    var filessstambal = jawabanfototambal.files[0];
    var nameboxtambal = document.querySelector('#nameboxxtambal');
    nameboxtambal.value = databaseuname+"tambal"+nomortambal;

    return filetambal;

}

let inputbedah = document.getElementById('fotobedahz');

WIDTH = 800;

inputbedah.addEventListener("change", (eventbedah) => {
    let image_bedah = eventbedah.target.files[0];

    console.log("Original File", image_bedah)

    let readerbedah = new FileReader();

    readerbedah.readAsDataURL(image_bedah);

    readerbedah.onload = (eventbedah) => {

        $('#fotobedah').css('background-image', 'url('+eventbedah.target.result +')');

        image_url_bedah = eventbedah.target.result;
        let imagebedah = document.createElement('img');
        imagebedah.src = image_url_bedah;

        imagebedah.onload = (e) => {

            let canvasbedah = document.createElement('canvas');
            let ratio = WIDTH / imagebedah.width;
            canvasbedah.width = WIDTH;
            canvasbedah.height = imagebedah.height * ratio;
            canvasbedah.id = 'canvasbedah';
            canvasbedah.style.display = "none";

            let context = canvasbedah.getContext('2d');
            context.drawImage(imagebedah, 0, 0, canvasbedah.width, canvasbedah.height);

            let new_image_url_bedah = canvasbedah.toDataURL('image/jpeg', 98);

            // console.log("Image URL: ", new_image_url_bedah)

            let image_bedah = urlToFilebedah(new_image_url_bedah);

            var wrapperbedah = document.getElementById('wrapperbedah');

            wrapperbedah.append(canvasbedah);

        } 
    }
})

let urlToFilebedah = (url) => {

    let arr = url.split(",");
    // console.log(arr)
    let mime = arr[0].match(/:(.*?);/)[1];
    let data = arr[1];

    let dataStr = atob(data);
    let n = dataStr.length;
    let dataArr = new Uint8Array(n);

    while(n--)
    {
        dataArr[n] = dataStr.charCodeAt(n)
    };

    let filebedah  = new File([dataArr], 'Fotobedah.jpg', {type: mime});

    var dataTransfer = new DataTransfer();
    dataTransfer.items.add(filebedah);

    var fileInput = document.querySelector('#fotobedahzx');
    fileInput.files = dataTransfer.files;

    var databaseuname = ptsft;
    var nomorbedah =  document.getElementById('nomorbedah').value;
    var jawabanfotobedah = document.querySelector('#fotobedahzx');
    var filesssbedah = jawabanfotobedah.files[0];
    var nameboxbedah = document.querySelector('#nameboxxbedah');
    nameboxbedah.value = databaseuname+"bedah"+nomorbedah;

    return filebedah;

}

let inputbehel = document.getElementById('fotobehelz');

WIDTH = 800;

inputbehel.addEventListener("change", (eventbehel) => {
    let image_behel = eventbehel.target.files[0];

    console.log("Original File", image_behel)

    let readerbehel = new FileReader();

    readerbehel.readAsDataURL(image_behel);

    readerbehel.onload = (eventbehel) => {

        $('#fotobehel').css('background-image', 'url('+eventbehel.target.result +')');

        image_url_behel = eventbehel.target.result;
        let imagebehel = document.createElement('img');
        imagebehel.src = image_url_behel;

        imagebehel.onload = (e) => {

            let canvasbehel = document.createElement('canvas');
            let ratio = WIDTH / imagebehel.width;
            canvasbehel.width = WIDTH;
            canvasbehel.height = imagebehel.height * ratio;
            canvasbehel.id = 'canvasbehel';
            canvasbehel.style.display = "none";

            let context = canvasbehel.getContext('2d');
            context.drawImage(imagebehel, 0, 0, canvasbehel.width, canvasbehel.height);

            let new_image_url_behel = canvasbehel.toDataURL('image/jpeg', 98);

            // console.log("Image URL: ", new_image_url_behel)

            let image_behel = urlToFilebehel(new_image_url_behel);

            var wrapperbehel = document.getElementById('wrapperbehel');

            wrapperbehel.append(canvasbehel);

        } 
    }
})

let urlToFilebehel = (url) => {

    let arr = url.split(",");
    // console.log(arr)
    let mime = arr[0].match(/:(.*?);/)[1];
    let data = arr[1];

    let dataStr = atob(data);
    let n = dataStr.length;
    let dataArr = new Uint8Array(n);

    while(n--)
    {
        dataArr[n] = dataStr.charCodeAt(n)
    };

    let filebehel  = new File([dataArr], 'Fotobehel.jpg', {type: mime});

    var dataTransfer = new DataTransfer();
    dataTransfer.items.add(filebehel);

    var fileInput = document.querySelector('#fotobehelzx');
    fileInput.files = dataTransfer.files;

    var databaseuname = ptsft;
    var nomorbehel =  document.getElementById('nomorbehel').value;
    var jawabanfotobehel = document.querySelector('#fotobehelzx');
    var filesssbehel = jawabanfotobehel.files[0];
    var nameboxbehel = document.querySelector('#nameboxxbehel');
    nameboxbehel.value = databaseuname+"behel"+nomorbehel;

    return filebehel;

}

let inputgitur = document.getElementById('fotogiturz');

WIDTH = 800;

inputgitur.addEventListener("change", (eventgitur) => {
    let image_gitur = eventgitur.target.files[0];

    console.log("Original File", image_gitur)

    let readergitur = new FileReader();

    readergitur.readAsDataURL(image_gitur);

    readergitur.onload = (eventgitur) => {

        $('#fotogitur').css('background-image', 'url('+eventgitur.target.result +')');

        image_url_gitur = eventgitur.target.result;
        let imagegitur = document.createElement('img');
        imagegitur.src = image_url_gitur;

        imagegitur.onload = (e) => {

            let canvasgitur = document.createElement('canvas');
            let ratio = WIDTH / imagegitur.width;
            canvasgitur.width = WIDTH;
            canvasgitur.height = imagegitur.height * ratio;
            canvasgitur.id = 'canvasgitur';
            canvasgitur.style.display = "none";

            let context = canvasgitur.getContext('2d');
            context.drawImage(imagegitur, 0, 0, canvasgitur.width, canvasgitur.height);

            let new_image_url_gitur = canvasgitur.toDataURL('image/jpeg', 98);

            // console.log("Image URL: ", new_image_url_gitur)

            let image_gitur = urlToFilegitur(new_image_url_gitur);

            var wrappergitur = document.getElementById('wrappergitur');

            wrappergitur.append(canvasgitur);

        } 
    }
})

let urlToFilegitur = (url) => {

    let arr = url.split(",");
    // console.log(arr)
    let mime = arr[0].match(/:(.*?);/)[1];
    let data = arr[1];

    let dataStr = atob(data);
    let n = dataStr.length;
    let dataArr = new Uint8Array(n);

    while(n--)
    {
        dataArr[n] = dataStr.charCodeAt(n)
    };

    let filegitur  = new File([dataArr], 'Fotogitur.jpg', {type: mime});

    var dataTransfer = new DataTransfer();
    dataTransfer.items.add(filegitur);

    var fileInput = document.querySelector('#fotogiturzx');
    fileInput.files = dataTransfer.files;

    var databaseuname = ptsft;
    var nomorgitur =  document.getElementById('nomorgitur').value;
    var jawabanfotogitur = document.querySelector('#fotogiturzx');
    var filesssgitur = jawabanfotogitur.files[0];
    var nameboxgitur = document.querySelector('#nameboxxgitur');
    nameboxgitur.value = databaseuname+"gitur"+nomorgitur;

    return filegitur;

}

let inputbleaching = document.getElementById('fotobleachingz');

WIDTH = 800;

inputbleaching.addEventListener("change", (eventbleaching) => {
    let image_bleaching = eventbleaching.target.files[0];

    console.log("Original File", image_bleaching)

    let readerbleaching = new FileReader();

    readerbleaching.readAsDataURL(image_bleaching);

    readerbleaching.onload = (eventbleaching) => {

        $('#fotobleaching').css('background-image', 'url('+eventbleaching.target.result +')');

        image_url_bleaching = eventbleaching.target.result;
        let imagebleaching = document.createElement('img');
        imagebleaching.src = image_url_bleaching;

        imagebleaching.onload = (e) => {

            let canvasbleaching = document.createElement('canvas');
            let ratio = WIDTH / imagebleaching.width;
            canvasbleaching.width = WIDTH;
            canvasbleaching.height = imagebleaching.height * ratio;
            canvasbleaching.id = 'canvasbleaching';
            canvasbleaching.style.display = "none";

            let context = canvasbleaching.getContext('2d');
            context.drawImage(imagebleaching, 0, 0, canvasbleaching.width, canvasbleaching.height);

            let new_image_url_bleaching = canvasbleaching.toDataURL('image/jpeg', 98);

            // console.log("Image URL: ", new_image_url_bleaching)

            let image_bleaching = urlToFilebleaching(new_image_url_bleaching);

            var wrapperbleaching = document.getElementById('wrapperbleaching');

            wrapperbleaching.append(canvasbleaching);

        } 
    }
})

let urlToFilebleaching = (url) => {

    let arr = url.split(",");
    // console.log(arr)
    let mime = arr[0].match(/:(.*?);/)[1];
    let data = arr[1];

    let dataStr = atob(data);
    let n = dataStr.length;
    let dataArr = new Uint8Array(n);

    while(n--)
    {
        dataArr[n] = dataStr.charCodeAt(n)
    };

    let filebleaching  = new File([dataArr], 'Fotobleaching.jpg', {type: mime});

    var dataTransfer = new DataTransfer();
    dataTransfer.items.add(filebleaching);

    var fileInput = document.querySelector('#fotobleachingzx');
    fileInput.files = dataTransfer.files;

    var databaseuname = ptsft;
    var nomorbleaching =  document.getElementById('nomorbleaching').value;
    var jawabanfotobleaching = document.querySelector('#fotobleachingzx');
    var filesssbleaching = jawabanfotobleaching.files[0];
    var nameboxbleaching = document.querySelector('#nameboxxbleaching');
    nameboxbleaching.value = databaseuname+"bleaching"+nomorbleaching;

    return filebleaching;

}

let inputveneer = document.getElementById('fotoveneerz');

WIDTH = 800;

inputveneer.addEventListener("change", (eventveneer) => {
    let image_veneer = eventveneer.target.files[0];

    console.log("Original File", image_veneer)

    let readerveneer = new FileReader();

    readerveneer.readAsDataURL(image_veneer);

    readerveneer.onload = (eventveneer) => {

        $('#fotoveneer').css('background-image', 'url('+eventveneer.target.result +')');

        image_url_veneer = eventveneer.target.result;
        let imageveneer = document.createElement('img');
        imageveneer.src = image_url_veneer;

        imageveneer.onload = (e) => {

            let canvasveneer = document.createElement('canvas');
            let ratio = WIDTH / imageveneer.width;
            canvasveneer.width = WIDTH;
            canvasveneer.height = imageveneer.height * ratio;
            canvasveneer.id = 'canvasveneer';
            canvasveneer.style.display = "none";

            let context = canvasveneer.getContext('2d');
            context.drawImage(imageveneer, 0, 0, canvasveneer.width, canvasveneer.height);

            let new_image_url_veneer = canvasveneer.toDataURL('image/jpeg', 98);

            // console.log("Image URL: ", new_image_url_veneer)

            let image_veneer = urlToFileveneer(new_image_url_veneer);

            var wrapperveneer = document.getElementById('wrapperveneer');

            wrapperveneer.append(canvasveneer);

        } 
    }
})

let urlToFileveneer = (url) => {

    let arr = url.split(",");
    // console.log(arr)
    let mime = arr[0].match(/:(.*?);/)[1];
    let data = arr[1];

    let dataStr = atob(data);
    let n = dataStr.length;
    let dataArr = new Uint8Array(n);

    while(n--)
    {
        dataArr[n] = dataStr.charCodeAt(n)
    };

    let fileveneer  = new File([dataArr], 'Fotoveneer.jpg', {type: mime});

    var dataTransfer = new DataTransfer();
    dataTransfer.items.add(fileveneer);

    var fileInput = document.querySelector('#fotoveneerzx');
    fileInput.files = dataTransfer.files;

    var databaseuname = ptsft;
    var nomorveneer =  document.getElementById('nomorveneer').value;
    var jawabanfotoveneer = document.querySelector('#fotoveneerzx');
    var filesssveneer = jawabanfotoveneer.files[0];
    var nameboxveneer = document.querySelector('#nameboxxveneer');
    nameboxveneer.value = databaseuname+"veneer"+nomorveneer;

    return fileveneer;

}

let inputlainnya = document.getElementById('fotolainnyaz');

WIDTH = 800;

inputlainnya.addEventListener("change", (eventlainnya) => {
    let image_lainnya = eventlainnya.target.files[0];

    console.log("Original File", image_lainnya)

    let readerlainnya = new FileReader();

    readerlainnya.readAsDataURL(image_lainnya);

    readerlainnya.onload = (eventlainnya) => {

        $('#fotolainnya').css('background-image', 'url('+eventlainnya.target.result +')');

        image_url_lainnya = eventlainnya.target.result;
        let imagelainnya = document.createElement('img');
        imagelainnya.src = image_url_lainnya;

        imagelainnya.onload = (e) => {

            let canvaslainnya = document.createElement('canvas');
            let ratio = WIDTH / imagelainnya.width;
            canvaslainnya.width = WIDTH;
            canvaslainnya.height = imagelainnya.height * ratio;
            canvaslainnya.id = 'canvaslainnya';
            canvaslainnya.style.display = "none";

            let context = canvaslainnya.getContext('2d');
            context.drawImage(imagelainnya, 0, 0, canvaslainnya.width, canvaslainnya.height);

            let new_image_url_lainnya = canvaslainnya.toDataURL('image/jpeg', 98);

            // console.log("Image URL: ", new_image_url_lainnya)

            let image_lainnya = urlToFilelainnya(new_image_url_lainnya);

            var wrapperlainnya = document.getElementById('wrapperlainnya');

            wrapperlainnya.append(canvaslainnya);

        } 
    }
})

let urlToFilelainnya = (url) => {

    let arr = url.split(",");
    // console.log(arr)
    let mime = arr[0].match(/:(.*?);/)[1];
    let data = arr[1];

    let dataStr = atob(data);
    let n = dataStr.length;
    let dataArr = new Uint8Array(n);

    while(n--)
    {
        dataArr[n] = dataStr.charCodeAt(n)
    };

    let filelainnya  = new File([dataArr], 'Fotolainnya.jpg', {type: mime});

    var dataTransfer = new DataTransfer();
    dataTransfer.items.add(filelainnya);

    var fileInput = document.querySelector('#fotolainnyazx');
    fileInput.files = dataTransfer.files;

    var databaseuname = ptsft;
    var nomorlainnya =  document.getElementById('nomorlainnya').value;
    var jawabanfotolainnya = document.querySelector('#fotolainnyazx');
    var filessslainnya = jawabanfotolainnya.files[0];
    var nameboxlainnya = document.querySelector('#nameboxxlainnya');
    nameboxlainnya.value = databaseuname+"lainnya"+nomorlainnya;

    return filelainnya;

}