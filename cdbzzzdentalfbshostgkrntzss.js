import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";
import { getDatabase, set, remove, update, ref, push, child, get, onValue, onChildAdded, onChildRemoved } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

fetch('profile.php?getFirebaseConfig=true')
    .then(response => response.json())
    .then(data => {

        const encryptionKey = data.encryptionKey;
        const firebaseConfig = data.firebaseConfig;
        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);

  //-----------------------------------------------------------------------------------//

        var files = [];
        var filesz = [];
        var reader = new FileReader();
        var readerz = new FileReader();
        var ImageLinksz = [];

        var namebox = document.getElementById('namebox');
        var nameboxx = document.getElementById('nameboxx');
        var extlab = document.getElementById('extlab');
        var extlabz = document.getElementById('extlabz');
        var SelBtn = document.getElementById('selbtn');
        var SelBtnzz = document.getElementById('selbtnzz');
        var UpBtn = document.getElementById('upbtn');
        var UpBtnzz = document.getElementById('upbtnzz');
        var DownBtn = document.getElementById('downbtn');
        var usernametools = document.getElementById('usernametools');
        var applyubah = document.getElementById('applyubah');
        var applyubahs = document.getElementById('applyubahs');
        var ubahusername = document.getElementById('ubahusername');
        var bioprofile = document.getElementById('bioprofile');
        var saygreeting = document.getElementById('saygreeting');
        var kalimatsilahkan = document.querySelector('.kalimatsilahkan');
        var inputcolor = document.getElementById('inputcolor');
        var inputcolorz = document.getElementById('inputcolorz');
        var inputcolorzz = document.getElementById('inputcolorzz');
        var inputcolorzzz = document.getElementById('inputcolorzzz');
        var bentukbutton = document.getElementById('bentukbutton');
        var bentukbutton1 = document.getElementById('bentukbutton1');
        var bentukbutton2 = document.getElementById('bentukbutton2');
        var bentukbutton3 = document.getElementById('bentukbutton3');
        var jepitz = document.querySelector('.checkbox2');
        var jepit = document.querySelector('.checkbox1');
        var gambarbutton0 = document.getElementById('gambarbutton0');
        var gambarbutton1 = document.getElementById('gambarbutton1');
        var gambarbutton2 = document.getElementById('gambarbutton2');
        var gambarbutton3 = document.getElementById('gambarbutton3');
        var gambarbutton4 = document.getElementById('gambarbutton4');
        var gambarbutton5 = document.getElementById('gambarbutton5');
        var gambarbutton6 = document.getElementById('gambarbutton6');
        var gambarbutton7 = document.getElementById('gambarbutton7');
        var gambarbutton8 = document.getElementById('gambarbutton8');
        var gambarbutton = document.getElementById('gambarbutton');
        var gmbrbtn1 = document.querySelector('.checkbox1s');
        var gmbrbtn1list = document.querySelector('.checkbox1slist');
        var gmbrbtn2 = document.querySelector('.checkbox2s');
        var gmbrbtn2list = document.querySelector('.checkbox2slist');
        var gmbrbtn3 = document.querySelector('.checkbox3s');
        var gmbrbtn3list = document.querySelector('.checkbox3slist');
        var gambarbuttonzz = document.querySelector('#gambarbuttonzz');
        var checkboxmetode1sz = document.querySelector('#checkboxmetode1sz');
        var checkboxmetode2sz = document.querySelector('#checkboxmetode2sz');
        var FB = document.getElementById('FB');
        var IG = document.getElementById('IG');
        var googlemaps = document.getElementById('googlemaps');
        var twitter = document.getElementById('twitter');
        var tiktok = document.getElementById('tiktok');
        var WA = document.getElementById('WA');
        var fbresult = document.getElementById('fbresult');
        var igresult = document.getElementById('igresult');
        var gmapsresult = document.getElementById('gmapsresult');
        var twitterresult = document.getElementById('twitterresult');
        var tiktokresult = document.getElementById('tiktokresult');
        var waresult = document.getElementById('waresult');
        var userfacebook = document.getElementById('userfacebook');
        var userfb = document.getElementById('userfb');
        var userinstagram = document.getElementById('userinstagram');
        var userig = document.getElementById('userig');
        var usergmaps = document.getElementById('usergmaps');
        var usertwitter = document.getElementById('usertwitter');
        var usertwt = document.getElementById('usertwt');
        var usertiktok = document.getElementById('usertiktok');
        var usertt = document.getElementById('usertt');
        var userwhatsapp = document.getElementById('userwhatsapp');
        var userwht = document.getElementById('userwht');
        var fontstyle = document.getElementById('fontstyle');
        var checkboxfont1 = document.getElementById('checkboxfont1');
        var checkboxfont2 = document.getElementById('checkboxfont2');
        var checkboxfont3 = document.getElementById('checkboxfont3');
        var checkboxfont4 = document.getElementById('checkboxfont4');
        var checkboxmetode1ss = document.getElementById('checkboxmetode1ss');
        var checkboxmetode2ss = document.getElementById('checkboxmetode2ss');
        var checkboxmetode3ss = document.getElementById('checkboxmetode3ss');
        var checkboxmetode4ss = document.getElementById('checkboxmetode4ss');
        var checkboxmetode5ss = document.getElementById('checkboxmetode5ss');
        var checkboxmetode6ss = document.getElementById('checkboxmetode6ss');
        var switchmetodess = document.querySelector('.switchmetodess');
        var switchmetode2ss = document.querySelector('.switchmetode2ss');
        var switchmetode3ss = document.querySelector('.switchmetode3ss');
        var switchmetode4ss = document.querySelector('.switchmetode4ss');
        var switchmetode5ss = document.querySelector('.switchmetode5ss');
        var switchmetode6ss = document.querySelector('.switchmetode6ss');
        var hide1result = document.getElementById('hide1result');
        var hide2result = document.getElementById('hide2result');
        var hide3result = document.getElementById('hide3result');
        var hide4result = document.getElementById('hide4result');
        var hide5result = document.getElementById('hide5result');
        var hide6result = document.getElementById('hide6result');
        var hide7result = document.getElementById('hide7result');
        var hide8result = document.getElementById('hide8result');
        var hide9result = document.getElementById('hide9result');
        var checkboxmetode1ssx = document.getElementById('checkboxmetode1ssx');
        var checkboxmetode2ssx = document.getElementById('checkboxmetode2ssx');
        var checkboxmetode3ssx = document.getElementById('checkboxmetode3ssx');
        var checkboxmetode4ssx = document.getElementById('checkboxmetode4ssx');
        var checkboxmetode5ssx = document.getElementById('checkboxmetode5ssx');
        var checkboxmetode6ssx = document.getElementById('checkboxmetode6ssx');
        var checkboxmetode7ssx = document.getElementById('checkboxmetode7ssx');
        var checkboxmetode8ssx = document.getElementById('checkboxmetode8ssx');
        var checkboxmetode9ssx = document.getElementById('checkboxmetode9ssx');
        var buttonz1 = document.getElementById('buttonz1');
        var buttonz2 = document.getElementById('buttonz2');
        var buttonz3 = document.getElementById('buttonz3');
        var buttonz4 = document.getElementById('buttonz4');
        var buttonz5 = document.getElementById('buttonz5');
        var buttonz6 = document.getElementById('buttonz6');
        var buttonz7 = document.getElementById('buttonz7');
        var buttonz8 = document.getElementById('buttonz8');
        var buttonz9 = document.getElementById('buttonz9');
        var buttonzig = document.getElementById('buttonzig');
        var buttonzfb = document.getElementById('buttonzfb');
        var buttonzgmaps = document.getElementById('buttonzgmaps');
        var buttonztwitter = document.getElementById('buttonztwitter');
        var buttonztiktok = document.getElementById('buttonztiktok');
        var buttonzwa = document.getElementById('buttonzwa');
        var healthbutton = document.getElementById('healthbutton');
        var groombutton = document.getElementById('groombutton');
        var hotelbutton = document.getElementById('hotelbutton');
        var pacakbutton = document.getElementById('pacakbutton');
        var databaseuname = ptsft;
        var databaseunamez = ptsft + "/Account/";
        var databasereport = ptsft + "/AccountReport/";
        var databasedisablewa = ptsft + "/DisableDatabaseCDB/";
        var databasedisablereservasi = ptsft+"/DisableReservasi/";
        var databasethemez = ptsft + "/Theme/";
        var databasesosmedz = ptsft + "/Sosmed/";
        var databasefoto = ptsft + "/AccountPhoto/";
        var databaseBGfoto = ptsft + "/ThemePhoto/";
        var databaseBGTheme = ptsft + "/ThemeBackground/";
        var databasehighlight = ptsft + "/Highlight/";
        var databaseMenuDentist = ptsft + "/Menu/dentist/";
        var databaseMenuscaling = ptsft + "/Menu/scaling/";
        var databaseMenutambal = ptsft + "/Menu/tambal/";
        var databaseMenubedah = ptsft + "/Menu/bedah/";
        var databaseMenubehel = ptsft + "/Menu/behel/";
        var databaseMenugitur = ptsft + "/Menu/gigitiruan/";
        var databaseMenubleaching = ptsft + "/Menu/bleaching/";
        var databaseMenuveneer = ptsft + "/Menu/veneer/";
        var databaseMenulainnya = ptsft + "/Menu/lainnya/";
        var databasepin = ptsft + "/HighlightPin/";
        var databasejadwal = ptsft + "/Jadwal/";
        var databaselibur = ptsft + "/Libur/";
        var databasereservasi = ptsft + "/Reservasi/";
        var databasenotif = ptsft + "/Notif/";
        var nameboxxhighlightz = document.querySelector('#nameboxxhighlightz');
        var nameboxxkeluhan = document.querySelector('#nameboxxkeluhan');
        var nameboxxscaling = document.querySelector('#nameboxxscaling');
        var nameboxxdentist = document.querySelector('#nameboxxdentist');
        var nameboxxtambal = document.querySelector('#nameboxxtambal');
        var nameboxxbedah = document.querySelector('#nameboxxbedah');
        var nameboxxbehel = document.querySelector('#nameboxxbehel');
        var nameboxxgitur = document.querySelector('#nameboxxgitur');
        var nameboxxbleaching = document.querySelector('#nameboxxbleaching');
        var nameboxxveneer = document.querySelector('#nameboxxveneer');
        var nameboxxlainnya = document.querySelector('#nameboxxlainnya');
        var inputnyah = document.getElementById('inputnyah');
        var jawabanfotonya = document.getElementById('jawabanfotonya');
        var fotoscalingzx = document.getElementById('fotoscalingzx');
        var fotoInputBGzx = document.getElementById('fotoInputBGzx');
        var fotodentistzx = document.getElementById('fotodentistzx');
        var fototambalzx = document.getElementById('fototambalzx');
        var fotobedahzx = document.getElementById('fotobedahzx');
        var fotobehelzx = document.getElementById('fotobehelzx');
        var fotogiturzx = document.getElementById('fotogiturzx');
        var fotobleachingzx = document.getElementById('fotobleachingzx');
        var fotoveneerzx = document.getElementById('fotoveneerzx');
        var fotolainnyazx = document.getElementById('fotolainnyazx');
        var nomorhlgt = document.getElementById('nomorhlgt');  
        var nomorreservasi = document.getElementById('nomorreservasi');   
        var nomorscaling = document.getElementById('nomorscaling');  
        var nomordentist = document.getElementById('nomordentist');  
        var nomortambal = document.getElementById('nomortambal');  
        var nomorbedah = document.getElementById('nomorbedah');  
        var nomorbehel = document.getElementById('nomorbehel');  
        var nomorgitur = document.getElementById('nomorgitur');  
        var nomorbleaching = document.getElementById('nomorbleaching');  
        var nomorveneer = document.getElementById('nomorveneer'); 
        var nomorlainnya = document.getElementById('nomorlainnya'); 
        var fotodentistz = document.getElementById('fotodentistz');
        var cutilibur = document.getElementById('cutilibur');
        var inputsenin = document.getElementById('inputsenin');
        var inputselasa = document.getElementById('inputselasa');
        var inputrabu = document.getElementById('inputrabu');
        var inputkamis = document.getElementById('inputkamis');
        var inputjumat = document.getElementById('inputjumat');
        var inputsabtu = document.getElementById('inputsabtu');
        var inputminggu = document.getElementById('inputminggu');

        var input = document.createElement('input');
        var inputz = document.createElement('input');
        input.type = 'file';
        inputz.type = 'file';

        input.onchange = e => {
            files = e.target.files;

            var extention = GetFileExt(files[0]);
            var name = GetFileName(files[0]);

            var databaseuname = ptsft;
            var nomorfotoprofil =  document.getElementById('nomorfotoprofil').value;

            namebox.value = databaseuname+"ProfilePicture"+nomorfotoprofil;
            extlab.innerHTML = extention;

            reader.readAsDataURL(files[0]);
        }

        inputz.onchange = e => {
            filesz = e.target.files;

            var extentionz = GetFileExtz(filesz[0]);
            var namez = GetFileNamez(filesz[0]);

            var databaseuname = ptsft;
            var nomorfotoBG =  document.getElementById('nomorfotoBG').value;

            nameboxx.value = databaseuname+"ThemePicture"+nomorfotoBG;
            extlabz.innerHTML = extentionz;

            readerz.readAsDataURL(filesz[0]);
        }

        reader.onload = function (e) {
            $('#kotakpreview').css('background-image', 'url('+e.target.result +')');
            $('#logoprofile').css('background-image', 'url('+e.target.result +')');
            $('#logoprofile').css('background-image', 'url('+e.target.result +')');
            $('#gambareditthetools1').css('background-image', 'url('+e.target.result +')');
            $('#gambareditthetools2').css('background-image', 'url('+e.target.result +')');
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
            $('#upbtn').show()
        }

        readerz.onload = function (e) {
            $('#kotakpreviewz').css('background-image', 'url('+e.target.result +')');
            $('.ktksilahkan').css('background-image', 'url('+e.target.result +')');
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

    //-----------------------------------------------------------------------------------//

        SelBtn.onclick = function () {
            input.click();
            $('#barparent1').hide();
            $('#barteks1').text('');
            $('#barteks1').css('background-image', 'url("")');
            $('#barteks1').css('width', '');
            $('#barteks1').css('text-align', '');
            $('#barteks1').css('padding-left', '');
        }

        SelBtnzz.onclick = function () {
            inputz.click();
            $('#barparent2').hide();
            $('#barteks2').text('');
            $('#barteks2').css('background-image', 'url("")');
            $('#barteks2').css('width', '');
            $('#barteks2').css('text-align', '');
            $('#barteks2').css('padding-left', '');
        }

        function GetFileExt(file) {
            var temp = file.name.split('.');
            var ext = temp.slice((temp.length-1),(temp.length));
            return '.' + ext[0];
        }    

        function GetFileName(file) {
            var temp = file.name.split('.');
            var fname = temp.slice(0,-1).join('.');
            return fname;
        }   

        function GetFileExtz(file) {
            var tempz = file.name.split('.');
            var extz = tempz.slice((tempz.length-1),(tempz.length));
            return '.' + extz[0];
        }    

        function GetFileNamez(file) {
            var tempz = file.name.split('.');
            var fnamez = tempz.slice(0,-1).join('.');
            return fnamez;
        }  

    //-----------------------------------------------------------------------------------//

        $("#upbtn").click(function() {
            var ImgToUpload = files[0];

            var ImgName = namebox.value + extlab.innerHTML;

            if(!ValidateName()){
                alert('name cannot contain "." , "#", "$", "[", "]"');
                return;
            }

            const metaData = {
                contentType: ImgToUpload.type
            }

            const storage = getStorage();

            const stroageRef = sRef(storage, "Images/"+ImgName);

            const UploadTask = uploadBytesResumable(stroageRef, ImgToUpload, metaData);

            UploadTask.on('state-changed', (snapshot)=>{

                var progess = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
                var barteks = document.querySelector('#barteks1');
                barteks.innerHTML = "upload " + progess + "%";
                $('#progressdah1').css('width', progess+'%');
                $('#barparent1').css('margin-top', '-25px');
                $('#barparent1').show();

                if (barteks.innerHTML == "upload 100%" ) {    
                    $('#progressdah1').css('background-image', 'url("https://lh3.googleusercontent.com/2HezxxNeLVARXxdeb4yJoY0jilzIT3CY0ynPbAw9s-7HKY5XlOFV1KIZ8feV1w7Vjau9EIu-haPM6TpiUqhiI2yVmWx3bGeLcFy121vhqPflzxfyL51csUrucI_QUDCNAUyK_b5e1A=w2400")');
                    $('#progressdah1').css('background-size', '20%');
                    $('#progressdah1').css('background-repeat', 'no-repeat');
                    $('#progressdah1').css('background-position', 'center');
                    $('#barteks1').css('color', 'transparent');
                }

            },

            (error) =>{
                alert("error: image not uploaded!");
            },

            ()=>{
                getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
                    postprofilepict(downloadURL);
                    console.log(downloadURL);
                });
            }    
            );
        });


        $("#upbtnzz").click(function() {
            var ImgToUploadz = filesz[0];

            var ImgNamez = nameboxx.value + extlabz.innerHTML;

            if(!ValidateName()){
                alert('name cannot contain "." , "#", "$", "[", "]"');
                return;
            }

            const metaDataz = {
                contentType: ImgToUploadz.type
            }

            const storagez = getStorage();

            const stroageRefz = sRef(storagez, "Images/"+ImgNamez);

            const UploadTaskz = uploadBytesResumable(stroageRefz, ImgToUploadz, metaDataz);

            UploadTaskz.on('state-changed', (snapshot)=>{

                var progessz = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
                var barteksz = document.querySelector('#barteks2');
                barteksz.innerHTML = "upload " + progessz + "%";
                $('#progressdah2').css('width', progessz+'%');
                $('#barparent2').css('margin-top', '-25px');
                $('#barparent2').show();

                if (barteksz.innerHTML == "upload 100%" ) {    
                    $('#progressdah2').css('background-image', 'url("https://lh3.googleusercontent.com/2HezxxNeLVARXxdeb4yJoY0jilzIT3CY0ynPbAw9s-7HKY5XlOFV1KIZ8feV1w7Vjau9EIu-haPM6TpiUqhiI2yVmWx3bGeLcFy121vhqPflzxfyL51csUrucI_QUDCNAUyK_b5e1A=w2400")');
                    $('#progressdah2').css('background-size', '20%');
                    $('#progressdah2').css('background-repeat', 'no-repeat');
                    $('#progressdah2').css('background-position', 'center');
                    $('#barteks2').css('color', 'transparent');
                }

            },

            (error) =>{
                alert("error: image not uploaded!");
            },

            ()=>{
                getDownloadURL(UploadTaskz.snapshot.ref).then((downloadURL) => {
                    postBGpict(downloadURL);
                    console.log(downloadURL);
                });
            }    
            );
        });

        $("#upbtnzzhighlightz").click(function() {
            $('#upbtnzzhighlightz').hide();
            var ImgToUploadzz = inputnyah.files[0];

            var ImgNamezz = nameboxxhighlightz.value;

            if(!ValidateName()){
                alert('name cannot contain "." , "#", "$", "[", "]"');
                return;
            }

            const metaDatazz = {
                contentType: ImgToUploadzz.type
            }

            const storagezz = getStorage();

            const stroageRefzz = sRef(storagezz, "Images/"+ImgNamezz);

            const UploadTaskzz = uploadBytesResumable(stroageRefzz, ImgToUploadzz, metaDatazz);

            UploadTaskzz.on('state-changed', (snapshot)=>{

                var progessz = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
                var barteksz = document.querySelector('#barteks3');
                barteksz.innerHTML = "upload " + progessz + "%";
                $('#progressdah3').css('width', progessz+'%');
                $('#barparent3').show();
                $('#barparent3').css('margin-top', '-55px');

                if (barteksz.innerHTML == "upload 100%" ) {    
                    $('#barteks3').text('upload complete');
                    $('#barteks3').css('background-image', 'url("https://lh3.googleusercontent.com/MJC7s8MVgApUijGmzR0vaxtHLYDpKKn8iyaNNQu5xYB3S_ZP6AUmcv7SJckybL0tQxTF0CgaNk05asIcqalPE_qE3LTSKb8FIZuY2UYUeP0flGVdbKH0JZxbcxCiOYpmR-ibYZkREw=w2400")');
                    $('#barteks3').css('background-size', '3%');
                    $('#barteks3').css('background-repeat', 'no-repeat');
                    $('#barteks3').css('background-position', '62% 43%');
                    $('#barteks3').css('width', '250px');
                    $('#barteks3').css('text-align', 'left');
                    $('#barteks3').css('padding-left', '94px');
                }

            },

            (error) =>{
                alert("error: image not uploaded!");
            },

            ()=>{
                getDownloadURL(UploadTaskzz.snapshot.ref).then((downloadURL) => {
                    posthighlight(downloadURL);
                    console.log(downloadURL);
                });
            }    
            );
        });

        $("#uploadfotodentist").click(function() {
            var ImgDentist = fotodentistzx.files[0];

            var databaseuname = ptsft;

            var nomordentist = document.getElementById('nomordentist').value;

            var NameDentist = databaseuname+nomordentist+"fotodentist"

            var ImgNameDentist = nameboxxdentist.value;

            if(!ValidateName()){
                alert('name cannot contain "." , "#", "$", "[", "]"');
                return;
            }

            const metaDatadentist = {
                contentType: ImgDentist.type
            }

            const storagezzx = getStorage();

            const stroageRefxx = sRef(storagezzx, "Images/"+ImgNameDentist);

            const UploadTaskxx = uploadBytesResumable(stroageRefxx, ImgDentist, metaDatadentist);

            UploadTaskxx.on('state-changed', (snapshot)=>{

             

            },

            (error) =>{
                alert("error: image not uploaded!");
            },

            ()=>{
                getDownloadURL(UploadTaskxx.snapshot.ref).then((downloadURL) => {
                    postDentistpict(downloadURL);
                    console.log(downloadURL);
                });
            }    
            );
        });

        $("#uploadfotoInputBG").click(function() {

            $(this).hide();

            $('#inputBG').hide();

            $('#loadingfotoInputBG').show();

            var ImgToUploadInputBG = fotoInputBGzx.files[0];

            var ImgNameInputBG = nameboxxInputBG.value;

            if(!ValidateName()){
                alert('name cannot contain "." , "#", "$", "[", "]"');
                return;
            }

            const metaDataInputBG = {
                contentType: ImgToUploadInputBG.type
            }

            const storageInputBG = getStorage();

            const stroageRefInputBG = sRef(storageInputBG, "Images/"+ImgNameInputBG);

            const UploadTaskInputBG = uploadBytesResumable(stroageRefInputBG, ImgToUploadInputBG, metaDataInputBG);

            UploadTaskInputBG.on('state-changed', (snapshot)=>{

                var progesszInputBG = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
                var bartekszInputBG = document.querySelector('#barteks4');
                bartekszInputBG.innerHTML = "upload " + progesszInputBG + "%";
                $('#progressdah4').css('width', progesszInputBG+'%');
                $('#barparent4').hide();

                if (bartekszInputBG.innerHTML == "upload 100%" ) {    
                    $('#postfotoInputBG').trigger('click');
                }

            },

            (error) =>{
                alert("error: image not uploaded!");
            },

            ()=>{
                getDownloadURL(UploadTaskInputBG.snapshot.ref).then((downloadURL) => {
                    postInputBG(downloadURL);
                    console.log(downloadURL);
                });
            }    
            );
        });

        $("#uploadfotoscaling").click(function() {
            var ImgToUploadscaling = fotoscalingzx.files[0];

            var ImgNamescaling = nameboxxscaling.value;

            if(!ValidateName()){
                alert('name cannot contain "." , "#", "$", "[", "]"');
                return;
            }

            const metaDatascaling = {
                contentType: ImgToUploadscaling.type
            }

            const storagescaling = getStorage();

            const stroageRefscaling = sRef(storagescaling, "Images/"+ImgNamescaling);

            const UploadTaskscaling = uploadBytesResumable(stroageRefscaling, ImgToUploadscaling, metaDatascaling);

            UploadTaskscaling.on('state-changed', (snapshot)=>{

                var progesszscaling = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
                var bartekszscaling = document.querySelector('#barteks4');
                var kirimform = document.querySelector('.kirimform');
                bartekszscaling.innerHTML = "upload " + progesszscaling + "%";
                $('#progressdah4').css('width', progesszscaling+'%');
                $('#barparent4').hide();

                if (bartekszscaling.innerHTML == "upload 100%" ) {    
                    $('#barteks4').text('upload complete');
                    $('#barteks4').css('background-image', 'url("https://lh3.googleusercontent.com/MJC7s8MVgApUijGmzR0vaxtHLYDpKKn8iyaNNQu5xYB3S_ZP6AUmcv7SJckybL0tQxTF0CgaNk05asIcqalPE_qE3LTSKb8FIZuY2UYUeP0flGVdbKH0JZxbcxCiOYpmR-ibYZkREw=w2400")');
                    $('#barteks4').css('background-size', '5%');
                    $('#barteks4').css('background-repeat', 'no-repeat');
                    $('#barteks4').css('background-position', '74% 50%');
                    $('#barteks4').css('width', '250px');
                    $('#barteks4').css('text-align', 'left');
                    $('#barteks4').css('padding-left', '64px');
                    $('.gambarsuksesform').text('sukses terkirim!');
                }

            },

            (error) =>{
                alert("error: image not uploaded!");
            },

            ()=>{
                getDownloadURL(UploadTaskscaling.snapshot.ref).then((downloadURL) => {
                    postscaling(downloadURL);
                    console.log(downloadURL);
                });
            }    
            );
        });

        $("#uploadfototambal").click(function() {
            var ImgToUploadtambal = fototambalzx.files[0];

            var ImgNametambal = nameboxxtambal.value;

            if(!ValidateName()){
                alert('name cannot contain "." , "#", "$", "[", "]"');
                return;
            }

            const metaDatatambal = {
                contentType: ImgToUploadtambal.type
            }

            const storagetambal = getStorage();

            const stroageReftambal = sRef(storagetambal, "Images/"+ImgNametambal);

            const UploadTasktambal = uploadBytesResumable(stroageReftambal, ImgToUploadtambal, metaDatatambal);

            UploadTasktambal.on('state-changed', (snapshot)=>{

                var progessztambal = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
                var barteksztambal = document.querySelector('#barteks4');
                var kirimform = document.querySelector('.kirimform');
                barteksztambal.innerHTML = "upload " + progessztambal + "%";
                $('#progressdah4').css('width', progessztambal+'%');
                $('#barparent4').hide();

                if (barteksztambal.innerHTML == "upload 100%" ) {    
                    $('#barteks4').text('upload complete');
                    $('#barteks4').css('background-image', 'url("https://lh3.googleusercontent.com/MJC7s8MVgApUijGmzR0vaxtHLYDpKKn8iyaNNQu5xYB3S_ZP6AUmcv7SJckybL0tQxTF0CgaNk05asIcqalPE_qE3LTSKb8FIZuY2UYUeP0flGVdbKH0JZxbcxCiOYpmR-ibYZkREw=w2400")');
                    $('#barteks4').css('background-size', '5%');
                    $('#barteks4').css('background-repeat', 'no-repeat');
                    $('#barteks4').css('background-position', '74% 50%');
                    $('#barteks4').css('width', '250px');
                    $('#barteks4').css('text-align', 'left');
                    $('#barteks4').css('padding-left', '64px');
                    $('.gambarsuksesform').text('sukses terkirim!');
                    
                }

            },

            (error) =>{
                alert("error: image not uploaded!");
            },

            ()=>{
                getDownloadURL(UploadTasktambal.snapshot.ref).then((downloadURL) => {
                    posttambal(downloadURL);
                    console.log(downloadURL);
                });
            }    
            );
        });

        $("#uploadfotobedah").click(function() {
            var ImgToUploadbedah = fotobedahzx.files[0];

            var ImgNamebedah = nameboxxbedah.value;

            if(!ValidateName()){
                alert('name cannot contain "." , "#", "$", "[", "]"');
                return;
            }

            const metaDatabedah = {
                contentType: ImgToUploadbedah.type
            }

            const storagebedah = getStorage();

            const stroageRefbedah = sRef(storagebedah, "Images/"+ImgNamebedah);

            const UploadTaskbedah = uploadBytesResumable(stroageRefbedah, ImgToUploadbedah, metaDatabedah);

            UploadTaskbedah.on('state-changed', (snapshot)=>{

                var progesszbedah = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
                var bartekszbedah = document.querySelector('#barteks4');
                var kirimform = document.querySelector('.kirimform');
                bartekszbedah.innerHTML = "upload " + progesszbedah + "%";
                $('#progressdah4').css('width', progesszbedah+'%');
                $('#barparent4').hide();

                if (bartekszbedah.innerHTML == "upload 100%" ) {    
                    $('#barteks4').text('upload complete');
                    $('#barteks4').css('background-image', 'url("https://lh3.googleusercontent.com/MJC7s8MVgApUijGmzR0vaxtHLYDpKKn8iyaNNQu5xYB3S_ZP6AUmcv7SJckybL0tQxTF0CgaNk05asIcqalPE_qE3LTSKb8FIZuY2UYUeP0flGVdbKH0JZxbcxCiOYpmR-ibYZkREw=w2400")');
                    $('#barteks4').css('background-size', '5%');
                    $('#barteks4').css('background-repeat', 'no-repeat');
                    $('#barteks4').css('background-position', '74% 50%');
                    $('#barteks4').css('width', '250px');
                    $('#barteks4').css('text-align', 'left');
                    $('#barteks4').css('padding-left', '64px');
                    $('.gambarsuksesform').text('sukses terkirim!');
                    
                }

            },

            (error) =>{
                alert("error: image not uploaded!");
            },

            ()=>{
                getDownloadURL(UploadTaskbedah.snapshot.ref).then((downloadURL) => {
                    postbedah(downloadURL);
                    console.log(downloadURL);
                });
            }    
            );
        });

        $("#uploadfotobehel").click(function() {
            var ImgToUploadbehel = fotobehelzx.files[0];

            var ImgNamebehel = nameboxxbehel.value;

            if(!ValidateName()){
                alert('name cannot contain "." , "#", "$", "[", "]"');
                return;
            }

            const metaDatabehel = {
                contentType: ImgToUploadbehel.type
            }

            const storagebehel = getStorage();

            const stroageRefbehel = sRef(storagebehel, "Images/"+ImgNamebehel);

            const UploadTaskbehel = uploadBytesResumable(stroageRefbehel, ImgToUploadbehel, metaDatabehel);

            UploadTaskbehel.on('state-changed', (snapshot)=>{

                var progesszbehel = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
                var bartekszbehel = document.querySelector('#barteks4');
                var kirimform = document.querySelector('.kirimform');
                bartekszbehel.innerHTML = "upload " + progesszbehel + "%";
                $('#progressdah4').css('width', progesszbehel+'%');
                $('#barparent4').hide();

                if (bartekszbehel.innerHTML == "upload 100%" ) {    
                    $('#barteks4').text('upload complete');
                    $('#barteks4').css('background-image', 'url("https://lh3.googleusercontent.com/MJC7s8MVgApUijGmzR0vaxtHLYDpKKn8iyaNNQu5xYB3S_ZP6AUmcv7SJckybL0tQxTF0CgaNk05asIcqalPE_qE3LTSKb8FIZuY2UYUeP0flGVdbKH0JZxbcxCiOYpmR-ibYZkREw=w2400")');
                    $('#barteks4').css('background-size', '5%');
                    $('#barteks4').css('background-repeat', 'no-repeat');
                    $('#barteks4').css('background-position', '74% 50%');
                    $('#barteks4').css('width', '250px');
                    $('#barteks4').css('text-align', 'left');
                    $('#barteks4').css('padding-left', '64px');
                    $('.gambarsuksesform').text('sukses terkirim!');
                    
                }

            },

            (error) =>{
                alert("error: image not uploaded!");
            },

            ()=>{
                getDownloadURL(UploadTaskbehel.snapshot.ref).then((downloadURL) => {
                    postbehel(downloadURL);
                    console.log(downloadURL);
                });
            }    
            );
        });

        $("#uploadfotogitur").click(function() {
            var ImgToUploadgitur = fotogiturzx.files[0];

            var ImgNamegitur = nameboxxgitur.value;

            if(!ValidateName()){
                alert('name cannot contain "." , "#", "$", "[", "]"');
                return;
            }

            const metaDatagitur = {
                contentType: ImgToUploadgitur.type
            }

            const storagegitur = getStorage();

            const stroageRefgitur = sRef(storagegitur, "Images/"+ImgNamegitur);

            const UploadTaskgitur = uploadBytesResumable(stroageRefgitur, ImgToUploadgitur, metaDatagitur);

            UploadTaskgitur.on('state-changed', (snapshot)=>{

                var progesszgitur = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
                var bartekszgitur = document.querySelector('#barteks4');
                var kirimform = document.querySelector('.kirimform');
                bartekszgitur.innerHTML = "upload " + progesszgitur + "%";
                $('#progressdah4').css('width', progesszgitur+'%');
                $('#barparent4').hide();

                if (bartekszgitur.innerHTML == "upload 100%" ) {    
                    $('#barteks4').text('upload complete');
                    $('#barteks4').css('background-image', 'url("https://lh3.googleusercontent.com/MJC7s8MVgApUijGmzR0vaxtHLYDpKKn8iyaNNQu5xYB3S_ZP6AUmcv7SJckybL0tQxTF0CgaNk05asIcqalPE_qE3LTSKb8FIZuY2UYUeP0flGVdbKH0JZxbcxCiOYpmR-ibYZkREw=w2400")');
                    $('#barteks4').css('background-size', '5%');
                    $('#barteks4').css('background-repeat', 'no-repeat');
                    $('#barteks4').css('background-position', '74% 50%');
                    $('#barteks4').css('width', '250px');
                    $('#barteks4').css('text-align', 'left');
                    $('#barteks4').css('padding-left', '64px');
                    $('.gambarsuksesform').text('sukses terkirim!');
                    
                }

            },

            (error) =>{
                alert("error: image not uploaded!");
            },

            ()=>{
                getDownloadURL(UploadTaskgitur.snapshot.ref).then((downloadURL) => {
                    postgitur(downloadURL);
                    console.log(downloadURL);
                });
            }    
            );
        });

        $("#uploadfotobleaching").click(function() {
            var ImgToUploadbleaching = fotobleachingzx.files[0];

            var ImgNamebleaching = nameboxxbleaching.value;

            if(!ValidateName()){
                alert('name cannot contain "." , "#", "$", "[", "]"');
                return;
            }

            const metaDatableaching = {
                contentType: ImgToUploadbleaching.type
            }

            const storagebleaching = getStorage();

            const stroageRefbleaching = sRef(storagebleaching, "Images/"+ImgNamebleaching);

            const UploadTaskbleaching = uploadBytesResumable(stroageRefbleaching, ImgToUploadbleaching, metaDatableaching);

            UploadTaskbleaching.on('state-changed', (snapshot)=>{

                var progesszbleaching = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
                var bartekszbleaching = document.querySelector('#barteks4');
                var kirimform = document.querySelector('.kirimform');
                bartekszbleaching.innerHTML = "upload " + progesszbleaching + "%";
                $('#progressdah4').css('width', progesszbleaching+'%');
                $('#barparent4').hide();

                if (bartekszbleaching.innerHTML == "upload 100%" ) {    
                    $('#barteks4').text('upload complete');
                    $('#barteks4').css('background-image', 'url("https://lh3.googleusercontent.com/MJC7s8MVgApUijGmzR0vaxtHLYDpKKn8iyaNNQu5xYB3S_ZP6AUmcv7SJckybL0tQxTF0CgaNk05asIcqalPE_qE3LTSKb8FIZuY2UYUeP0flGVdbKH0JZxbcxCiOYpmR-ibYZkREw=w2400")');
                    $('#barteks4').css('background-size', '5%');
                    $('#barteks4').css('background-repeat', 'no-repeat');
                    $('#barteks4').css('background-position', '74% 50%');
                    $('#barteks4').css('width', '250px');
                    $('#barteks4').css('text-align', 'left');
                    $('#barteks4').css('padding-left', '64px');
                    $('.gambarsuksesform').text('sukses terkirim!');
                    
                }

            },

            (error) =>{
                alert("error: image not uploaded!");
            },

            ()=>{
                getDownloadURL(UploadTaskbleaching.snapshot.ref).then((downloadURL) => {
                    postbleaching(downloadURL);
                    console.log(downloadURL);
                });
            }    
            );
        });

        $("#uploadfotoveneer").click(function() {
            var ImgToUploadveneer = fotoveneerzx.files[0];

            var ImgNameveneer = nameboxxveneer.value;

            if(!ValidateName()){
                alert('name cannot contain "." , "#", "$", "[", "]"');
                return;
            }

            const metaDataveneer = {
                contentType: ImgToUploadveneer.type
            }

            const storageveneer = getStorage();

            const stroageRefveneer = sRef(storageveneer, "Images/"+ImgNameveneer);

            const UploadTaskveneer = uploadBytesResumable(stroageRefveneer, ImgToUploadveneer, metaDataveneer);

            UploadTaskveneer.on('state-changed', (snapshot)=>{

                var progesszveneer = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
                var bartekszveneer = document.querySelector('#barteks4');
                var kirimform = document.querySelector('.kirimform');
                bartekszveneer.innerHTML = "upload " + progesszveneer + "%";
                $('#progressdah4').css('width', progesszveneer+'%');
                $('#barparent4').hide();

                if (bartekszveneer.innerHTML == "upload 100%" ) {    
                    $('#barteks4').text('upload complete');
                    $('#barteks4').css('background-image', 'url("https://lh3.googleusercontent.com/MJC7s8MVgApUijGmzR0vaxtHLYDpKKn8iyaNNQu5xYB3S_ZP6AUmcv7SJckybL0tQxTF0CgaNk05asIcqalPE_qE3LTSKb8FIZuY2UYUeP0flGVdbKH0JZxbcxCiOYpmR-ibYZkREw=w2400")');
                    $('#barteks4').css('background-size', '5%');
                    $('#barteks4').css('background-repeat', 'no-repeat');
                    $('#barteks4').css('background-position', '74% 50%');
                    $('#barteks4').css('width', '250px');
                    $('#barteks4').css('text-align', 'left');
                    $('#barteks4').css('padding-left', '64px');
                    $('.gambarsuksesform').text('sukses terkirim!');
                    
                }

            },

            (error) =>{
                alert("error: image not uploaded!");
            },

            ()=>{
                getDownloadURL(UploadTaskveneer.snapshot.ref).then((downloadURL) => {
                    postveneer(downloadURL);
                    console.log(downloadURL);
                });
            }    
            );
        });

        $("#uploadfotolainnya").click(function() {
            var ImgToUploadlainnya = fotolainnyazx.files[0];

            var ImgNamelainnya = nameboxxlainnya.value;

            if(!ValidateName()){
                alert('name cannot contain "." , "#", "$", "[", "]"');
                return;
            }

            const metaDatalainnya = {
                contentType: ImgToUploadlainnya.type
            }

            const storagelainnya = getStorage();

            const stroageReflainnya = sRef(storagelainnya, "Images/"+ImgNamelainnya);

            const UploadTasklainnya = uploadBytesResumable(stroageReflainnya, ImgToUploadlainnya, metaDatalainnya);

            UploadTasklainnya.on('state-changed', (snapshot)=>{

                var progesszlainnya = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
                var bartekszlainnya = document.querySelector('#barteks4');
                var kirimform = document.querySelector('.kirimform');
                bartekszlainnya.innerHTML = "upload " + progesszlainnya + "%";
                $('#progressdah4').css('width', progesszlainnya+'%');
                $('#barparent4').hide();

                if (bartekszlainnya.innerHTML == "upload 100%" ) {    
                    $('#barteks4').text('upload complete');
                    $('#barteks4').css('background-image', 'url("https://lh3.googleusercontent.com/MJC7s8MVgApUijGmzR0vaxtHLYDpKKn8iyaNNQu5xYB3S_ZP6AUmcv7SJckybL0tQxTF0CgaNk05asIcqalPE_qE3LTSKb8FIZuY2UYUeP0flGVdbKH0JZxbcxCiOYpmR-ibYZkREw=w2400")');
                    $('#barteks4').css('background-size', '5%');
                    $('#barteks4').css('background-repeat', 'no-repeat');
                    $('#barteks4').css('background-position', '74% 50%');
                    $('#barteks4').css('width', '250px');
                    $('#barteks4').css('text-align', 'left');
                    $('#barteks4').css('padding-left', '64px');
                    $('.gambarsuksesform').text('sukses terkirim!');
                    
                }

            },

            (error) =>{
                alert("error: image not uploaded!");
            },

            ()=>{
                getDownloadURL(UploadTasklainnya.snapshot.ref).then((downloadURL) => {
                    postlainnya(downloadURL);
                    console.log(downloadURL);
                });
            }    
            );
        });

        let duration = 1600,
            success = button => {
                //Success function
                $('.kirimform').hide();
                $('.kirimform').css('visibility','hidden');
                $('.kirimform').css('opacity','0');
                $('.suksesform').show();
                upbtnzzkeluhan();
                postreservasiwhatsapp();
            };

        document.querySelectorAll('.kirimform').forEach(button => {
            button.style.setProperty('--duration', duration + 'ms');
            ['mousedown', 'touchstart', 'keypress'].forEach(e => {
                button.addEventListener(e, ev => {
                    if(e != 'keypress' || (e == 'keypress' && ev.which == 32 && !button.classList.contains('process'))) {
                        button.classList.add('process');
                        button.timeout = setTimeout(success, duration, button);
                    }
                });
            });
            ['mouseup', 'mouseout', 'touchend', 'keyup'].forEach(e => {
                button.addEventListener(e, ev => {
                    if(e != 'keyup' || (e == 'keyup' && ev.which == 32)) {
                        button.classList.remove('process');
                        clearTimeout(button.timeout);
                    }
                }, false);
            });
        });

        function upbtnzzkeluhan() {
            var ImgToUploadKeluhan = jawabanfotonya.files[0];

            var ImgNameKeluhan = nameboxxkeluhan.value;

            if(!ValidateName()){
                alert('name cannot contain "." , "#", "$", "[", "]"');
                return;
            }

            const metaDataKeluhan = {
                contentType: ImgToUploadKeluhan.type
            }

            const storageKeluhan = getStorage();

            const stroageRefKeluhan = sRef(storageKeluhan, "Images/"+ImgNameKeluhan);

            const UploadTaskKeluhan = uploadBytesResumable(stroageRefKeluhan, ImgToUploadKeluhan, metaDataKeluhan);

            UploadTaskKeluhan.on('state-changed', (snapshot)=>{

                var progesszkeluhan = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
                var bartekszkeluhan = document.querySelector('#barteks4');
                var kirimform = document.querySelector('.kirimform');
                bartekszkeluhan.innerHTML = "upload " + progesszkeluhan + "%";
                $('#progressdah4').css('width', progesszkeluhan+'%');
                $('#barparent4').hide();

                if (bartekszkeluhan.innerHTML == "upload 100%" ) {    
                    $('#barteks4').text('upload complete');
                    $('#barteks4').css('background-image', 'url("https://lh3.googleusercontent.com/MJC7s8MVgApUijGmzR0vaxtHLYDpKKn8iyaNNQu5xYB3S_ZP6AUmcv7SJckybL0tQxTF0CgaNk05asIcqalPE_qE3LTSKb8FIZuY2UYUeP0flGVdbKH0JZxbcxCiOYpmR-ibYZkREw=w2400")');
                    $('#barteks4').css('background-size', '5%');
                    $('#barteks4').css('background-repeat', 'no-repeat');
                    $('#barteks4').css('background-position', '74% 50%');
                    $('#barteks4').css('width', '250px');
                    $('#barteks4').css('text-align', 'left');
                    $('#barteks4').css('padding-left', '64px');
                    $('.gambarsuksesform').text('sukses terkirim!');
                }

            },

            (error) =>{
                alert("error: image not uploaded!");
            },

            ()=>{
                getDownloadURL(UploadTaskKeluhan.snapshot.ref).then((downloadURL) => {
                    postreservasi(downloadURL);
                    console.log(downloadURL);
                });
            }    
            );
        };

    //-----------------------------------------------------------------------------------//

        function ValidateName(){
            var regex = /[\.#$\[\]]/
            return !(regex.test(namebox.value));
        }

    //-----------------------------------------------------------------------------------//

        function posthighlight(highlight) {

            var username = document.getElementById('ubahusername').value;
            var databasehighlight = ptsft + "/Highlight/";
            var databaseuname = ptsft;
            var name = nameboxxhighlightz.value;
            var a = document.getElementById('nomor').value;
            var b = "a";
            var nomorhlgt = document.getElementById('nomorhlgt').value;
            var c = 1;
            var lingkaranwarna = "linear-gradient(35deg, rgba(18, 0, 128, 1), rgba(3, 124, 213, 1), rgba(0, 231, 9, 1))";
            var outlinewarna = "2.5px solid rgba(216, 216, 216)";
            var borderwarna = "3px solid transparent";
            var none = "none";
            var unnone = "";
            var hastag = "#";
            var Highlight = "Highlight";

            const id = push(child(ref(database), databaseuname)).key;

            set(ref(database, databasehighlight+a+"Highlight"),{
                ImageName: name,
                nomorz: a,
                jumlahnomorz: a+b,
                ImgHighlight: highlight,
                nomorhlgt: nomorhlgt,
                jumlahnomorhlgt: Number(nomorhlgt) + Number(c),
                lingkaranwarna: lingkaranwarna,
                outlinewarna: outlinewarna,
                borderwarna: borderwarna,
                tmblunpin: none,
                tmblpin: unnone,
                idlivehapus: hastag+a+Highlight,
                idlivehapusz: a+Highlight
            });

            document.getElementById('nomorhlgt').value = Number(nomorhlgt) + Number(c);
            document.getElementById('nomor').value = a+b;

            $('#containerhighlightz').hide();
            $('#modalhighlight').hide();
            $('#barparent3').hide();
            $('#barteks3').text('');
            $('#barteks3').css('background-image', 'url("")');
            $('#barteks3').css('width', '');
            $('#barteks3').css('text-align', '');
            $('#barteks3').css('padding-left', '');

            setTimeout(function(){
                $('#kliklingkarana').trigger('click');
            }, 1500);

        };

        function postprofilepict(profilepict) {

            var username = document.getElementById('ubahusername').value;
            var databasefoto = ptsft + "/AccountPhoto/";
            var databaseuname = ptsft;
            var name = namebox.value;
            var ext = extlab.innerHTML;
            var v = document.getElementById('nomorfotoprofil').value;
            var w = 1;

            const id = push(child(ref(database), databaseuname)).key;

            set(ref(database, databasefoto+"Profile Photo"),{
                ImageName: name,
                ImageExt: ext,
                ImgUrl: profilepict,
                nomorfotoprofil: v,
                jumlahnomorfoto: Number(v) + Number(w)
            });

            document.getElementById('nomorfotoprofil').value = Number(v) + Number(w);

            liburfoto = window.setTimeout(slowAlertsfoto, 1000);
            timeLeftsfoto = 1;

        };

        function postBGpict(BGpict) {

            var username = document.getElementById('ubahusername').value;
            var databaseBGfoto = ptsft + "/ThemePhoto/";
            var databaseuname = ptsft;
            var namez = nameboxx.value;
            var extz = extlabz.innerHTML;
            var vv = document.getElementById('nomorfotoBG').value;
            var ww = 1;

            const id = push(child(ref(database), databaseuname)).key;

            set(ref(database, databaseBGfoto+"Theme Photo"),{
                ImageBGName: namez,
                ImageBGExt: extz,
                ImgBGUrl: BGpict,
                nomorfotoBG: vv,
                jumlahnomorBG: Number(vv) + Number(ww)
            });

            document.getElementById('nomorfotoBG').value = Number(vv) + Number(ww);

            liburBG = window.setTimeout(slowAlertsBG, 1000);
            timeLeftsBG = 1;

        };

        function postInputBG(InputBGpict) {

            var username = document.getElementById('ubahusername').value;
            var databaseBGTheme = ptsft + "/ThemeBackground/";
            var databaseuname = ptsft;
            var nameboxxInputBG = document.querySelector('#nameboxxInputBG').value;
            var nomorInputBG = document.getElementById('nomorInputBG').value;
            var ww = "a";

            const id = push(child(ref(database), databaseuname)).key;

            set(ref(database, databaseBGTheme+"ThemeBackgroundPicture"),{
                ImageInputBGName: nameboxxInputBG,
                ImgInputBGUrl: InputBGpict,
                nomorfotoInputBG: nomorInputBG,
                jumlahnomorBG: nomorInputBG+ww
            });

            document.getElementById('nomorInputBG').value = nomorInputBG+ww;

            $('#loadingfotoInputBG').hide();

        };

        function postDentistpict(Dentistpict) {

            var username = document.getElementById('ubahusername').value;
            var databaseMenuDentist = ptsft + "/Menu/dentist/";
            var databaseuname = ptsft;
            var namadentist = document.getElementById('namadentist').value;
            var name = nameboxxdentist.value;
            var penddentist = document.getElementById('penddentist').value;
            var praktekdentist = document.getElementById('praktekdentist').value;
            var a = document.getElementById('nomordentist').value;
            var b = "a";
            var DentistPhoto = "DentistPhoto";
            var hastagdentist = "#";
            var scrollke = "scrollke";

            const id = push(child(ref(database), databaseuname)).key;

            set(ref(database, databaseMenuDentist+a+"DentistPhoto"),{
                ImgBGUrl: Dentistpict,
                Imagedentist: name,
                nomordentist: a,
                jumlahnomordentist: a+b,
                namadentist: namadentist,
                pendidikan: penddentist,
                praktek: praktekdentist,
                dentisthapuss: a+DentistPhoto,
                dentisthapushastagg: hastagdentist+a+DentistPhoto,
                dentisthapussz: a+DentistPhoto+scrollke,
                dentisthapushastaggz: hastagdentist+a+DentistPhoto+scrollke
            });

            document.getElementById('nomordentist').value = a+b;

        };

        function postreservasiwhatsapp() {
            var usernametools = document.getElementById('usernametools').innerHTML;
            var walink = 'https://web.whatsapp.com/send',
                phone = document.getElementById("userwhatsapp").value,
                walink2 = 'Hi ' + usernametools + ', saya mau reservasi ';

            /* Smartphone Support */
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            var walink = 'whatsapp://send';
            }

            /* Call Input Form */
            var judulreservasi = $("#judulreservasi").val(),
                jawabannamapasien = $("#jawabannamapasien").val(),
                jawabanalamat = $("#jawabanalamat").val(),
                jawabanjeniskelaminz = $("#jawabanjeniskelaminz").val(),
                jawabantanggallahirz = $("#jawabantanggallahirz").val(),
                jawabanumur = $("#jawabanumur").val(),
                jawabankeluhan = $('#jawabankeluhan').val(),
                jawabanalergi = $('#jawabanalergi').val(),
                jawabanjadwal = $('#jawabanjadwal').val(),
                jawabanjamss = $('#jawabanjamss').val(),
                jawabanjamssdokter = $('#jawabanjamssdokter').val(),
                jawabanhp = $('#jawabanhp').val();

            /* Final Whatsapp URL */
            var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' + "-" + judulreservasi + "-" + '%0A%0A' +
                '*Nama Pasien* : ' + jawabannamapasien + '%0A' +
                '*Alamat* : ' + jawabanalamat + '%0A' +
                '*Jenis Kelamin* : ' + jawabanjeniskelaminz + '%0A' +
                '*Tanggal Lahir* : ' + jawabantanggallahirz + '%0A' +
                '*Umur* : ' + jawabanumur + '%0A' +
                '*Keluhan Pasien* : ' + jawabankeluhan + '%0A' +
                '*Riwayat Alergi* : ' + jawabanalergi + '%0A' +
                '*Tanggal Reservasi* : ' + jawabanjadwal + '%0A' +
                '*Waktu Reservasi* : ' + jawabanjamss + '%0A' +
                '*Dokter* : ' + jawabanjamssdokter + '%0A' +
                '*Nomor handphone/WA* : ' + jawabanhp + '%0A';

            /* Whatsapp Window Open */
            window.open(blanter_whatsapp,'_blank');
            $("#selesaibukti").attr("id", "selesaibuktiwhatsapp").on( "click", function() {
                $("#contentbukti").hide();
                $("#clipboardpin").show(setTimeout(function(){
                    $("#clipboardpin").hide();
                    $("#loadingselesai").show(setTimeout(function(){
                        $("#reloadpage").trigger('click');
                    }, 2000)); 
                }, 3000));  
            });
            $('.gambarsuksesform').text('berhasil tersematkan!');
            $('#clipboardpin').text('loading..');
            $('#clipboardpin').css('background-image', 'url("")');
            $('#clipboardpin').css('text-align', 'center');
            $('#clipboardpin').css('padding', '15px');
            $('#kodepinbukti').remove();
            $('#kalimatbukti').text('reservasi berhasil tersematkan ke-Whatsapp user, dikarenakan user memakai fitur whatsapp untuk reservasi, pertanyaan seputar status reservasi silahkan di-tanyakan langsung kepada user, terimakasih.');
            setTimeout(function(){
                $('#jawabannamapasien').val('');
                $('#jawabanalamat').val('');
                $('#jawabanjeniskelamin').val('');
                $('#jawabanjeniskelaminz').val('');
                $('#jawabantanggallahir').val('');
                $('#jawabantanggallahirz').val('');
                $('#jawabanjadwal').val('');
                $('#jawabanumur').val('');
                $('#jawabanumurangka').val('');
                $('#jawabanhp').val('');
                $('#jawabankeluhan').val('');
                $('#jawabanalergi').val('');
                $('#jawabanfotokeluhan').val('');
                $('#jawabanfotonya').val('');
                $('#wrapperkeluhan').hide();
                $('.jawabanjams').hide();
                $('.jawabanjamsdokter').hide();
                $('.yakinform').hide();
                $('.yakinform').css('visibility','hidden');
                $('.yakinform').css('opacity','0');
                $('.kirimform').hide();
                $('.kirimform').css('visibility','hidden');
                $('.kirimform').css('opacity','0');
                $('.suksesform').hide();
                $('#jawabanfotokeluhanz').text('tambah foto keluhan');
                $('.gambarsuksesform').text('tunggu sebentar...');
                $('.isiform').show();
                $("#acakkodepin").prop("disabled", false);
                $('#overlaybukti').show();
            }, 1500);  
        };

        function postreservasi(reservasis) {

            var username = document.getElementById('ubahusername').value;
            var databasereservasi = ptsft + "/Reservasi/";
            var databasenotif = ptsft + "/Notif/";
            var databaseuname = ptsft;
            var a = document.getElementById('nomorreservasiz').value;
            var b = "a";
            var nomorreservasi = document.getElementById('nomorreservasi').value;
            var c = 1;
            var d = 5;
            var notifikasi = "Notifikasi";
            var name = nameboxxkeluhan.value;
            var judulreservasi = document.getElementById('judulreservasi').value;
            var jawabannamapasien = document.getElementById('jawabannamapasien').value;
            var jawabanalamat = document.getElementById('jawabanalamat').value;
            var jawabanjeniskelamin = document.getElementById('jawabanjeniskelamin').value;
            var jawabantanggallahir = document.getElementById('jawabantanggallahir').value;
            var jawabanjadwal = document.getElementById('jawabanjadwal').value;
            var jawabanumur = document.getElementById('jawabanumur').value;
            var jawabanhp = document.getElementById('jawabanhp').value;
            var jawabankeluhan = document.getElementById('jawabankeluhan').value;
            var jawabanalergi = document.getElementById('jawabanalergi').value;
            var jawabanjam = document.getElementById('jawabanjamss').value;
            var jawabanjamdokter = document.getElementById('jawabanjamssdokter').value;
            var waktu = document.getElementById("waktu").value;
            var kodepin = document.getElementById("kodepin").value;
            var circlenotif = ""; 
            var charsNumber   = "0123456789";
            var charsLower    = "abcdefghijklmnopqrstuvwxyz";
            var charsUpper    = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
            var charsAll      = [charsNumber]; 
            var chars         = charsAll.join('');
            var stringLength  = 6;
            var randomString  = '';

            const id = push(child(ref(database), databaseuname)).key;

            push(ref(database, databasenotif+"/Push/"), {
                namapasienpushnotif: encryptNamaPasien()
            });

            set(ref(database, databasenotif+"/Anotif/"+a+notifikasi), {
                nomorreservasi: nomorreservasi,
                nomorreservasiz: a,
                jumlahnomorreservasi: Number(nomorreservasi) + Number(c),
                jumlahnomorzreservasi: a+b
            });

            set(ref(database, databasenotif+"CircleNotif"), {
                circlenotif: circlenotif
            });

            push(ref(database, databasereservasi+"/Health/"),{
                ImageKeluhan: name,
                ImgReservasi: reservasis,
                judulreservasi: judulreservasi,
                jawabannamapasien: encryptNamaPasien(),
                jawabanalamat: encryptAlamat(),
                jawabanjeniskelamin: encryptJenisKelamin(),
                jawabantanggallahir: encryptTanggalLahir(),
                jawabanjadwal: jawabanjadwal,
                jawabanumur: encryptUmur(),
                jawabanhp: encryptHp(),
                jawabankeluhan: encryptKeluhan(),
                jawabanalergi: encryptAlergi(),
                jawabanjam: jawabanjam,
                jawabanjamdokter: jawabanjamdokter,
                waktu: waktu,
                kodepin: encryptKodepin(),
                codedelete: encryptcodedelete(),
                nomorreservasi: nomorreservasi,
                nomorreservasiz: a
            });

            for (var i=0; i<stringLength; i++) {                               
                var randNum    = Math.floor(Math.random() * chars.length);     
                randomString  += chars.substring(randNum,randNum+1);           
            }

            document.getElementById('kodepin').size  = stringLength* 1.4;  
            document.getElementById('kodepin').value = "CDB"+randomString;

            document.getElementById('emptyiconkotakInfo').style.display = "none";

            setTimeout(function(){
                $('#jawabannamapasien').val('');
                $('#jawabanalamat').val('');
                $('#jawabanjeniskelamin').val('');
                $('#jawabanjeniskelaminz').val('');
                $('#jawabantanggallahir').val('');
                $('#jawabantanggallahirz').val('');
                $('#jawabanjadwal').val('');
                $('#jawabanumur').val('');
                $('#jawabanumurangka').val('');
                $('#jawabanhp').val('');
                $('#jawabankeluhan').val('');
                $('#jawabanalergi').val('');
                $('#jawabanfotokeluhan').val('');
                $('#jawabanfotonya').val('');
                $('#wrapperkeluhan').hide();
                $('.jawabanjams').hide();
                $('.jawabanjamsdokter').hide();
                $('.yakinform').hide();
                $('.yakinform').css('visibility','hidden');
                $('.yakinform').css('opacity','0');
                $('.kirimform').hide();
                $('.kirimform').css('visibility','hidden');
                $('.kirimform').css('opacity','0');
                $('.suksesform').hide();
                $('#jawabanfotokeluhanz').text('tambah foto keluhan');
                $('.gambarsuksesform').text('tunggu sebentar...');
                $('.isiform').show();
                $("#acakkodepin").prop("disabled", false);
                $('#overlaybukti').show();
            }, 1500);    
            
        };

    //----------------------------------------------------------encrypt---------------------------------------------------//

        function encryptNamaPasien(){
            var jawabannamapasien = document.getElementById('jawabannamapasien').value;
            var encryptedNamaPasien = CryptoJS.AES.encrypt(jawabannamapasien, encryptionKey);
            return encryptedNamaPasien.toString();
        }

        function encryptAlamat(){
            var jawabanalamat = document.getElementById('jawabanalamat').value;
            var encryptedAlamat = CryptoJS.AES.encrypt(jawabanalamat, encryptionKey);
            return encryptedAlamat.toString();
        }

        function encryptJenisKelamin(){
            var jawabanjeniskelamin = document.getElementById('jawabanjeniskelamin').value;
            var encryptedJenisKelamin = CryptoJS.AES.encrypt(jawabanjeniskelamin, encryptionKey);
            return encryptedJenisKelamin.toString();
        }

        function encryptTanggalLahir(){
            var jawabantanggallahir = document.getElementById('jawabantanggallahir').value;
            var encryptedTanggalLahir = CryptoJS.AES.encrypt(jawabantanggallahir, encryptionKey);
            return encryptedTanggalLahir.toString();
        }

        function encryptUmur(){
            var jawabanumur = document.getElementById('jawabanumur').value;
            var encryptedUmur = CryptoJS.AES.encrypt(jawabanumur, encryptionKey);
            return encryptedUmur.toString();
        }

        function encryptHp(){
            var jawabanhp = document.getElementById('jawabanhp').value;
            var encryptedHp = CryptoJS.AES.encrypt(jawabanhp, encryptionKey);
            return encryptedHp.toString();
        }

        function encryptKeluhan(){
            var jawabankeluhan = document.getElementById('jawabankeluhan').value;
            var encryptedKeluhan = CryptoJS.AES.encrypt(jawabankeluhan, encryptionKey);
            return encryptedKeluhan.toString();
        }

        function encryptAlergi(){
            var jawabanalergi = document.getElementById('jawabanalergi').value;
            var encryptedAlergi = CryptoJS.AES.encrypt(jawabanalergi, encryptionKey);
            return encryptedAlergi.toString();
        }

        function encryptKodepin(){
            var kodepin = document.getElementById("kodepin").value;
            var encryptedKodepin = CryptoJS.AES.encrypt(kodepin, encryptionKey);
            return encryptedKodepin.toString();
        }

        function encryptcodedelete(){
            var charsNumber   = "0123456789";
            var charsLower    = "abcdefghijklmnopqrstuvwxyz";
            var charsUpper    = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
            var charsAll      = [charsNumber];  
            var chars         = charsAll.join('');
            var stringLength  = 4;
            var randomString  = '';
            for (var i=0; i<stringLength; i++) {                               
                var randNum    = Math.floor(Math.random() * chars.length);     
                randomString  += chars.substring(randNum,randNum+1);           
            }
            var codedelete = stringLength* 1.4;
            var codedelete = randomString;
            var encryptcodedelete = CryptoJS.AES.encrypt(codedelete, encryptionKey);
            return encryptcodedelete.toString();
        }

    //----------------------------------------------------------encrypt---------------------------------------------------//

        function postscaling(scalings) {

            var username = document.getElementById('ubahusername').value;
            var databaseMenuscaling = ptsft + "/Menu/scaling/";
            var databaseuname = ptsft;
            var a = document.getElementById('nomorscaling').value;
            var b = "a";
            var name = nameboxxscaling.value;
            var namascaling = document.getElementById('namascaling').value;
            var pendscaling = document.getElementById('pendscaling').value;
            var showscaling = "";
            var hidescaling = "none";

            const id = push(child(ref(database), databaseuname)).key;

            set(ref(database, databaseMenuscaling+a+"Scaling"),{
                Imagescaling: name,
                nomorscalingz: a,
                jumlahnomorzscaling: a+b,
                Imgscaling: scalings,
                nomorscaling: nomorscaling,
                titltescaling: namascaling,
                contentscaling: pendscaling,
                showscaling: showscaling,
                hidescaling: hidescaling
            });

            document.getElementById('nomorscaling').value = a+b;      

        };

        function posttambal(tambals) {

            var username = document.getElementById('ubahusername').value;
            var databaseMenutambal = ptsft + "/Menu/tambal/";
            var databaseuname = ptsft;
            var a = document.getElementById('nomortambal').value;
            var b = "a";
            var name = nameboxxtambal.value;
            var namatambal = document.getElementById('namatambal').value;
            var pendtambal = document.getElementById('pendtambal').value;
            var showtambal = "";
            var hidetambal = "none";

            const id = push(child(ref(database), databaseuname)).key;

            set(ref(database, databaseMenutambal+a+"Tambal"),{
                Imagetambal: name,
                nomortambalz: a,
                jumlahnomorztambal: a+b,
                Imgtambal: tambals,
                nomortambal: nomortambal,
                titltetambal: namatambal,
                contenttambal: pendtambal,
                showtambal: showtambal,
                hidetambal: hidetambal
            });

            document.getElementById('nomortambal').value = a+b;      

        };

        function postbedah(bedahs) {

            var username = document.getElementById('ubahusername').value;
            var databaseMenubedah = ptsft + "/Menu/bedah/";
            var databaseuname = ptsft;
            var a = document.getElementById('nomorbedah').value;
            var b = "a";
            var name = nameboxxbedah.value;
            var namabedah = document.getElementById('namabedah').value;
            var pendbedah = document.getElementById('pendbedah').value;
            var showbedah = "";
            var hidebedah = "none";

            const id = push(child(ref(database), databaseuname)).key;

            set(ref(database, databaseMenubedah+a+"Bedah"),{
                Imagebedah: name,
                nomorbedahz: a,
                jumlahnomorzbedah: a+b,
                Imgbedah: bedahs,
                nomorbedah: nomorbedah,
                titltebedah: namabedah,
                contentbedah: pendbedah,
                showbedah: showbedah,
                hidebedah: hidebedah
            });

            document.getElementById('nomorbedah').value = a+b;      

        };

        function postbehel(behels) {

            var username = document.getElementById('ubahusername').value;
            var databaseMenubehel = ptsft + "/Menu/behel/";
            var databaseuname = ptsft;
            var a = document.getElementById('nomorbehel').value;
            var b = "a";
            var name = nameboxxbehel.value;
            var namabehel = document.getElementById('namabehel').value;
            var pendbehel = document.getElementById('pendbehel').value;
            var showbehel = "";
            var hidebehel = "none";

            const id = push(child(ref(database), databaseuname)).key;

            set(ref(database, databaseMenubehel+a+"Behel"),{
                Imagebehel: name,
                nomorbehelz: a,
                jumlahnomorzbehel: a+b,
                Imgbehel: behels,
                nomorbehel: nomorbehel,
                titltebehel: namabehel,
                contentbehel: pendbehel,
                showbehel: showbehel,
                hidebehel: hidebehel
            });

            document.getElementById('nomorbehel').value = a+b;      

        };

        function postgitur(giturs) {

            var username = document.getElementById('ubahusername').value;
            var databaseMenugitur = ptsft + "/Menu/gigitiruan/";
            var databaseuname = ptsft;
            var a = document.getElementById('nomorgitur').value;
            var b = "a";
            var name = nameboxxgitur.value;
            var namagitur = document.getElementById('namagitur').value;
            var pendgitur = document.getElementById('pendgitur').value;
            var showgitur = "";
            var hidegitur = "none";

            const id = push(child(ref(database), databaseuname)).key;

            set(ref(database, databaseMenugitur+a+"GigiTiruan"),{
                Imagegitur: name,
                nomorgiturz: a,
                jumlahnomorzgitur: a+b,
                Imggitur: giturs,
                nomorgitur: nomorgitur,
                titltegitur: namagitur,
                contentgitur: pendgitur,
                showgitur: showgitur,
                hidegitur: hidegitur
            });

            document.getElementById('nomorgitur').value = a+b;      

        };

        function postbleaching(bleachings) {

            var username = document.getElementById('ubahusername').value;
            var databaseMenubleaching = ptsft + "/Menu/bleaching/";
            var databaseuname = ptsft;
            var a = document.getElementById('nomorbleaching').value;
            var b = "a";
            var name = nameboxxbleaching.value;
            var namableaching = document.getElementById('namableaching').value;
            var pendbleaching = document.getElementById('pendbleaching').value;
            var showbleaching = "";
            var hidebleaching = "none";

            const id = push(child(ref(database), databaseuname)).key;

            set(ref(database, databaseMenubleaching+a+"Bleaching"),{
                Imagebleaching: name,
                nomorbleachingz: a,
                jumlahnomorzbleaching: a+b,
                Imgbleaching: bleachings,
                nomorbleaching: nomorbleaching,
                titltebleaching: namableaching,
                contentbleaching: pendbleaching,
                showbleaching: showbleaching,
                hidebleaching: hidebleaching
            });

            document.getElementById('nomorbleaching').value = a+b;      

        };

        function postveneer(veneers) {

            var username = document.getElementById('ubahusername').value;
            var databaseMenuveneer = ptsft + "/Menu/veneer/";
            var databaseuname = ptsft;
            var a = document.getElementById('nomorveneer').value;
            var b = "a";
            var name = nameboxxveneer.value;
            var namaveneer = document.getElementById('namaveneer').value;
            var pendveneer = document.getElementById('pendveneer').value;
            var showveneer = "";
            var hideveneer = "none";

            const id = push(child(ref(database), databaseuname)).key;

            set(ref(database, databaseMenuveneer+a+"Veneer"),{
                Imageveneer: name,
                nomorveneerz: a,
                jumlahnomorzveneer: a+b,
                Imgveneer: veneers,
                nomorveneer: nomorveneer,
                titlteveneer: namaveneer,
                contentveneer: pendveneer,
                showveneer: showveneer,
                hideveneer: hideveneer
            });

            document.getElementById('nomorveneer').value = a+b;      

        };

        function postlainnya(lainnyas) {

            var username = document.getElementById('ubahusername').value;
            var databaseMenulainnya = ptsft + "/Menu/lainnya/";
            var databaseuname = ptsft;
            var a = document.getElementById('nomorlainnya').value;
            var b = "a";
            var name = nameboxxlainnya.value;
            var namalainnya = document.getElementById('namalainnya').value;
            var pendlainnya = document.getElementById('pendlainnya').value;
            var showlainnya = "";
            var hidelainnya = "none";

            const id = push(child(ref(database), databaseuname)).key;

            set(ref(database, databaseMenulainnya+a+"Lainnya"),{
                Imagelainnya: name,
                nomorlainnyaz: a,
                jumlahnomorzlainnya: a+b,
                Imglainnya: lainnyas,
                nomorlainnya: nomorlainnya,
                titltelainnya: namalainnya,
                contentlainnya: pendlainnya,
                showlainnya: showlainnya,
                hidelainnya: hidelainnya
            });

            document.getElementById('nomorlainnya').value = a+b;      

        };

        function getUsername() {
            setTimeout(function(){
                    inputObserverz.disconnect();
                    databaseunamezProfile();
                    databasereservasiHealth();
                    databasereservasiDone();
                    $('#loadingselesailogin').remove();
                    $('#kotakbrand').append('<div id="brandotomatis" style="display:"></div>');
                    $('.groupkeseluruhan').show();
                    $("#saygreetinginput").hide();
                    $('.groupusername').addClass('animatedz').show();
                    $('.groupusername').css('visibility','visible');
                    $('.groupusername').css('opacity','1');
                    $('#ubahusername').css('visibility','visible');
                    $('#ubahusername').css('opacity','1');
                    $('#emLonLyIds').css('visibility','visible');
                    $('#emLonLyIds').css('opacity','1');
                    $('#ubahusername').css('color','black');
                    $('#emLonLyIds').css('color','black');
                    $('#useRonLyIds').css('color','black');
                    $('.layerprofil').css('visibility','visible');
                    $('.layerprofil').css('opacity','1');
                    $('.layerprofilfoto').css('visibility','visible');
                    $('.layerprofilfoto').css('opacity','1');
                    $('.layerBGfoto').css('visibility','visible');
                    $('.layerBGfoto').css('opacity','1');
                    $('.layertheme').css('visibility','visible');
                    $('.layertheme').css('opacity','1');
                    $('.layermedsos').css('visibility','visible');
                    $('.layermedsos').css('opacity','1');
                    $('.cancelmenuz').show();
                    $('.cancelmenuz').css('visibility','visible');
                    $('.cancelmenuz').css('opacity','1');
                    $('#titledit2').css('visibility','visible');
                    $('#titledit2').css('opacity','1');
                    $('#titledit3').css('visibility','visible');
                    $('#titledit3').css('opacity','1');
                    $('#titleditfoto').css('visibility','visible');
                    $('#titleditfoto').css('opacity','1');
                    $('#titleditBG').css('visibility','visible');
                    $('#titleditBG').css('opacity','1');
                    $('#overlay').hide();
                    $('#brandotomatis').hide();
                    $('#cekreservasi').hide();
                    $('#saygreetinginput').hide();
                    $('#brandz').show();
                    $('#menutools').show();
                    $('#menutools').css('visibility','visible');
                    $('#menutools').css('opacity','1');
                    $('#editthetools').hide();
                    $('#editthetoolsblack').show();
                    $('#healthtools').show();
                    $('#healthtoolsblack').hide();
                    $('#reservationstools').show();
                    $('#reservationstoolsblack').hide();
                    $('#orderreservasitools').show();
                    $('#orderreservasitoolsblack').hide();
                    $('#highlightz').show();
                    $('#highlightz').css('visibility','visible');
                    $('#highlightz').css('opacity','1');
                    $('.themehome').hide();
                    $('.cssUpdt').prop('disabled', false);
                    $('#selbtn').prop('disabled', false);
                    $('#selbtnzz').prop('disabled', false);
                    $('#inputnich').prop('disabled', false);
                    $('#resetlibur').prop('disabled', false);
                    $('#updatelibur').prop('disabled', false);
                    $('#tambahjadwal').prop('disabled', false);
                    var titlebuttondrg = document.querySelector(".titlebuttondrg").innerHTML; 
                    document.querySelector(".switchmetodessx").innerHTML = titlebuttondrg; 
                    document.querySelector("#dentistseting").innerHTML = titlebuttondrg; 
                    document.querySelector("#backsetingdentist").innerHTML = titlebuttondrg; 
                    var titlebuttonscaling = document.querySelector(".titlebuttonscaling").innerHTML; 
                    document.querySelector(".switchmetode2ssx").innerHTML = titlebuttonscaling; 
                    document.querySelector("#scalingseting").innerHTML = titlebuttonscaling; 
                    document.querySelector("#backsetingscaling").innerHTML = titlebuttonscaling; 
                    var titlebuttontambal = document.querySelector(".titlebuttontambal").innerHTML; 
                    document.querySelector(".switchmetode3ssx").innerHTML = titlebuttontambal; 
                    document.querySelector("#tambalseting").innerHTML = titlebuttontambal; 
                    document.querySelector("#backsetingtambal").innerHTML = titlebuttontambal; 
                    var titlebuttonbedah = document.querySelector(".titlebuttonbedah").innerHTML; 
                    document.querySelector(".switchmetode4ssx").innerHTML = titlebuttonbedah; 
                    document.querySelector("#bedahseting").innerHTML = titlebuttonbedah; 
                    document.querySelector("#backsetingbedah").innerHTML = titlebuttonbedah; 
                    var titlebuttonbehel = document.querySelector(".titlebuttonbehel").innerHTML; 
                    document.querySelector(".switchmetode5ssx").innerHTML = titlebuttonbehel; 
                    document.querySelector("#behelseting").innerHTML = titlebuttonbehel; 
                    document.querySelector("#backsetingbehel").innerHTML = titlebuttonbehel; 
                    var titlebuttongigitiruan = document.querySelector(".titlebuttongigitiruan").innerHTML; 
                    document.querySelector(".switchmetode6ssx").innerHTML = titlebuttongigitiruan; 
                    document.querySelector("#giturseting").innerHTML = titlebuttongigitiruan; 
                    document.querySelector("#backsetinggitur").innerHTML = titlebuttongigitiruan; 
                    var titlebuttonbleaching = document.querySelector(".titlebuttonbleaching").innerHTML; 
                    document.querySelector(".switchmetode7ssx").innerHTML = titlebuttonbleaching; 
                    document.querySelector("#bleachingseting").innerHTML = titlebuttonbleaching; 
                    document.querySelector("#backsetingbleaching").innerHTML = titlebuttonbleaching; 
                    var titlebuttonveneer = document.querySelector(".titlebuttonveneer").innerHTML; 
                    document.querySelector(".switchmetode8ssx").innerHTML = titlebuttonveneer; 
                    document.querySelector("#veneerseting").innerHTML = titlebuttonveneer; 
                    document.querySelector("#backsetingveneer").innerHTML = titlebuttonveneer; 
                    var titlebuttonlainnya = document.querySelector(".titlebuttonlainnya").innerHTML; 
                    document.querySelector(".switchmetode9ssx").innerHTML = titlebuttonlainnya; 
                    document.querySelector("#lainnyaseting").innerHTML = titlebuttonlainnya; 
                    document.querySelector("#backsetinglainnya").innerHTML = titlebuttonlainnya; 

                    $('#brandotomatis').dblclick(function(){
                        $('.groupkeseluruhan').show();
                        $("#saygreetinginput").hide();
                        $('.groupusername').addClass('animatedz').show();
                        $('.groupusername').css('visibility','visible');
                        $('.groupusername').css('opacity','1');
                        $('#ubahusername').css('visibility','visible');
                        $('#ubahusername').css('opacity','1');
                        $('#emLonLyIds').css('visibility','visible');
                        $('#emLonLyIds').css('opacity','1');
                        $('#ubahusername').css('color','black');
                        $('#emLonLyIds').css('color','black');
                        $('#useRonLyIds').css('color','black');
                        $('.layerprofil').css('visibility','visible');
                        $('.layerprofil').css('opacity','1');
                        $('.layerprofilfoto').css('visibility','visible');
                        $('.layerprofilfoto').css('opacity','1');
                        $('.layerBGfoto').css('visibility','visible');
                        $('.layerBGfoto').css('opacity','1');
                        $('.layertheme').css('visibility','visible');
                        $('.layertheme').css('opacity','1');
                        $('.layermedsos').css('visibility','visible');
                        $('.layermedsos').css('opacity','1');
                        $('.cancelmenuz').show();
                        $('.cancelmenuz').css('visibility','visible');
                        $('.cancelmenuz').css('opacity','1');
                        $('#titledit2').css('visibility','visible');
                        $('#titledit2').css('opacity','1');
                        $('#titledit3').css('visibility','visible');
                        $('#titledit3').css('opacity','1');
                        $('#titleditfoto').css('visibility','visible');
                        $('#titleditfoto').css('opacity','1');
                        $('#titleditBG').css('visibility','visible');
                        $('#titleditBG').css('opacity','1');
                        $('#overlay').hide();
                        $('#brandotomatis').hide();
                        $('#cekreservasi').hide();
                        $('#saygreetinginput').hide();
                        $('#brandz').show();
                        $('#menutools').show();
                        $('#menutools').css('visibility','visible');
                        $('#menutools').css('opacity','1');
                        $('#editthetools').hide();
                        $('#editthetoolsblack').show();
                        $('#healthtools').show();
                        $('#healthtoolsblack').hide();
                        $('#reservationstools').show();
                        $('#reservationstoolsblack').hide();
                        $('#orderreservasitools').show();
                        $('#orderreservasitoolsblack').hide();
                        $('#highlightz').show();
                        $('#highlightz').css('visibility','visible');
                        $('#highlightz').css('opacity','1');
                        $('.themehome').hide();
                        var titlebuttondrg = document.querySelector(".titlebuttondrg").innerHTML; 
                        document.querySelector(".switchmetodessx").innerHTML = titlebuttondrg; 
                        document.querySelector("#dentistseting").innerHTML = titlebuttondrg; 
                        document.querySelector("#backsetingdentist").innerHTML = titlebuttondrg; 
                        var titlebuttonscaling = document.querySelector(".titlebuttonscaling").innerHTML; 
                        document.querySelector(".switchmetode2ssx").innerHTML = titlebuttonscaling; 
                        document.querySelector("#scalingseting").innerHTML = titlebuttonscaling; 
                        document.querySelector("#backsetingscaling").innerHTML = titlebuttonscaling; 
                        var titlebuttontambal = document.querySelector(".titlebuttontambal").innerHTML; 
                        document.querySelector(".switchmetode3ssx").innerHTML = titlebuttontambal; 
                        document.querySelector("#tambalseting").innerHTML = titlebuttontambal; 
                        document.querySelector("#backsetingtambal").innerHTML = titlebuttontambal; 
                        var titlebuttonbedah = document.querySelector(".titlebuttonbedah").innerHTML; 
                        document.querySelector(".switchmetode4ssx").innerHTML = titlebuttonbedah; 
                        document.querySelector("#bedahseting").innerHTML = titlebuttonbedah; 
                        document.querySelector("#backsetingbedah").innerHTML = titlebuttonbedah; 
                        var titlebuttonbehel = document.querySelector(".titlebuttonbehel").innerHTML; 
                        document.querySelector(".switchmetode5ssx").innerHTML = titlebuttonbehel; 
                        document.querySelector("#behelseting").innerHTML = titlebuttonbehel; 
                        document.querySelector("#backsetingbehel").innerHTML = titlebuttonbehel; 
                        var titlebuttongigitiruan = document.querySelector(".titlebuttongigitiruan").innerHTML; 
                        document.querySelector(".switchmetode6ssx").innerHTML = titlebuttongigitiruan; 
                        document.querySelector("#giturseting").innerHTML = titlebuttongigitiruan; 
                        document.querySelector("#backsetinggitur").innerHTML = titlebuttongigitiruan; 
                        var titlebuttonbleaching = document.querySelector(".titlebuttonbleaching").innerHTML; 
                        document.querySelector(".switchmetode7ssx").innerHTML = titlebuttonbleaching; 
                        document.querySelector("#bleachingseting").innerHTML = titlebuttonbleaching; 
                        document.querySelector("#backsetingbleaching").innerHTML = titlebuttonbleaching; 
                        var titlebuttonveneer = document.querySelector(".titlebuttonveneer").innerHTML; 
                        document.querySelector(".switchmetode8ssx").innerHTML = titlebuttonveneer; 
                        document.querySelector("#veneerseting").innerHTML = titlebuttonveneer; 
                        document.querySelector("#backsetingveneer").innerHTML = titlebuttonveneer; 
                        var titlebuttonlainnya = document.querySelector(".titlebuttonlainnya").innerHTML; 
                        document.querySelector(".switchmetode9ssx").innerHTML = titlebuttonlainnya; 
                        document.querySelector("#lainnyaseting").innerHTML = titlebuttonlainnya; 
                        document.querySelector("#backsetinglainnya").innerHTML = titlebuttonlainnya; 
                    });            
            }, 1500);
        }

        $("#changePaszz").click(function() {
            $(this).hide();
            $('#useRonLyIds').show();
        });

        $("#useRonLyIds").on("change",function(){
            var useRonLyIds = $('#useRonLyIds').val();
            var emLonLyIds = $('#emLonLyIds').val();
            var ketemu = false;
            const databaseRef = ref(database, "'caredibledatabase");
            get(databaseRef).then((snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    var codeverifikasizz = childSnapshot.val().email;
                    var decryptedcodeverifikasizz = CryptoJS.AES.decrypt(codeverifikasizz, encryptionKey);
                    var caredibledatabaseData = decryptedcodeverifikasizz.toString(CryptoJS.enc.Utf8);
                            
                    var inputanpassword = childSnapshot.val().LgnExTrnL1;
                    var decryptedpassword = CryptoJS.AES.decrypt(inputanpassword, encryptionKey);
                    var jawabanpassword = decryptedpassword.toString(CryptoJS.enc.Utf8);
                            
                    if (emLonLyIds === caredibledatabaseData && useRonLyIds == jawabanpassword) {
                        ketemu = true;
                    }
                });
                if (ketemu) {
                    $('#useRonLyIds').css('border', '2px solid rgb(63, 157, 0)');
                    $('#useRonLyIds').css('background-color', 'rgb(63, 157, 0)');
                    $('#useRonLyIds').css('color', 'white');
                    $('#useRonLyIds').css('background-image', 'url("")');
                    $('#useRonLyIds').attr('type', 'text');
                    $('#useRonLyIds').attr('readonly', true);
                    $('#useRonLyIds').val('password benar! tunggu sebentar..');
                    setTimeout(function(){
                        $('#useRonLyIds').hide();
                        $('#useRonLyIds').val('ubahZzZpazzIdz');
                    }, 5000);
                        setTimeout(function(){
                            $('#pLazeLoCzpzzZ5as').append('<input type="text" class="usrpsplc" id="u53Rz0nLy1dzP4zzWrd" placeholder="masukkan password baru">');
                        }, 5500);
                } else {
                    $('#useRonLyIds').css('border-bottom', '2px solid rgb(217, 1, 1)'); 
                }
            });
        }).blur(function() {
            var useRonLyIds = document.getElementById('useRonLyIds').value;
            if (useRonLyIds == "") {
                $('#useRonLyIds').css('border-bottom', '1.5px solid rgba(232, 232, 232, 0.462)'); 
                $('#useRonLyIds').hide();
                $('#useRonLyIds').val('');
                $('#changePaszz').show();
            }   
        });

        $('#inputcekreservasi').on('input change', function() { 
            var databasereservasi = ptsft + "/Reservasi/";
            var dataDitemukanRsv = false;
            var cdbDtbsEmlRsv = databasereservasi+"/Health/";
            var dbRefRsv = ref(database, cdbDtbsEmlRsv);
            get(dbRefRsv).then((snapshot) => {
                if (snapshot.exists()) {
                    snapshot.forEach((childSnapshot) => {
                        var SgnuPemgmDecrypt = childSnapshot.val().kodepin;
                        var decryptedSgnuPemgm = CryptoJS.AES.decrypt(SgnuPemgmDecrypt, encryptionKey);
                        var jawabanSgnuPemgm = decryptedSgnuPemgm.toString(CryptoJS.enc.Utf8);
                        var inputcekreservasisszz = document.getElementById('inputcekreservasi').value;
                        if (inputcekreservasisszz == jawabanSgnuPemgm) {
                            dataDitemukanRsv = true;
                            var jawabannamapasien = document.getElementById('jawabannamapasien');
                            var jawabanalamat = document.getElementById('jawabanalamat');
                            var jawabanjeniskelamin = document.getElementById('jawabanjeniskelamin');
                            var jawabanjeniskelaminz = document.getElementById('jawabanjeniskelaminz');
                            var jawabantanggallahir = document.getElementById('jawabantanggallahir');
                            var jawabantanggallahirz = document.getElementById('jawabantanggallahirz');
                            var jawabanhp = document.getElementById('jawabanhp');
                            var kodepin = document.getElementById('kodepin');
                            var kodepinbukti = document.getElementById('kodepinbukti');
                            var judulbukti = document.getElementById('judulbukti');
                            var inputannamapasien = childSnapshot.val().jawabannamapasien;
                            var decryptednamapasien = CryptoJS.AES.decrypt(inputannamapasien, encryptionKey);
                            var inputanalamat = childSnapshot.val().jawabanalamat;
                            var decryptedalamat = CryptoJS.AES.decrypt(inputanalamat, encryptionKey);
                            var inputanjeniskelamin = childSnapshot.val().jawabanjeniskelamin;
                            var decryptedjeniskelamin = CryptoJS.AES.decrypt(inputanjeniskelamin, encryptionKey);
                            var inputantanggallahir = childSnapshot.val().jawabantanggallahir;
                            var decryptedtanggallahir = CryptoJS.AES.decrypt(inputantanggallahir, encryptionKey);
                            var inputanhp = childSnapshot.val().jawabanhp;
                            var decryptedhp = CryptoJS.AES.decrypt(inputanhp, encryptionKey);
                            var inputankeluhan = childSnapshot.val().jawabankeluhan;
                            var decryptedkeluhan = CryptoJS.AES.decrypt(inputankeluhan, encryptionKey);
                            var inputanalergi = childSnapshot.val().jawabanalergi;
                            var decryptedalergi = CryptoJS.AES.decrypt(inputanalergi, encryptionKey);
                            var inputankodepin = childSnapshot.val().kodepin;
                            var decryptedkodepin = CryptoJS.AES.decrypt(inputankodepin, encryptionKey);
                            jawabannamapasien.value = decryptednamapasien.toString(CryptoJS.enc.Utf8);
                            jawabanalamat.value = decryptedalamat.toString(CryptoJS.enc.Utf8);
                            jawabanjeniskelamin.value = decryptedjeniskelamin.toString(CryptoJS.enc.Utf8);
                            jawabanjeniskelaminz.value = decryptedjeniskelamin.toString(CryptoJS.enc.Utf8);
                            jawabantanggallahir.value = decryptedtanggallahir.toString(CryptoJS.enc.Utf8);
                            jawabantanggallahirz.value = decryptedtanggallahir.toString(CryptoJS.enc.Utf8);
                            jawabanhp.value = decryptedhp.toString(CryptoJS.enc.Utf8);
                            kodepin.value = decryptedkodepin.toString(CryptoJS.enc.Utf8);
                            kodepinbukti.value = decryptedkodepin.toString(CryptoJS.enc.Utf8);
                            judulbukti.innerHTML = "hai "+decryptednamapasien.toString(CryptoJS.enc.Utf8)+",";
                            return true;
                        }
                    });
                    if (dataDitemukanRsv) { 
                        $('#entercektidak').hide();
                        $('#entercekreservasi').show();
                        $("#jawabantanggallahirz").trigger('click');
                        $('#jawabanjeniskelaminz').trigger('click');
                        $('#jawabannamapasien').trigger('click');
                        $('#jawabanalamat').trigger('click');
                        $('#jawabanumur').trigger('click');
                        $('#jawabanumur').val('');
                        $('#jawabanumurangka').val('');
                        $('#jawabanhp').trigger('click');
                        $('#acakkodepin').prop("disabled", true);
                        $("#jawabannamapasien").attr('readonly', true);
                        $('#jawabannamapasien').css('background-image', 'url("https://lh3.googleusercontent.com/pw/AJFCJaVtCH8IZTWV67jmCGqpBl82qVg_9LbzGZFae2y8kEw1RuURkl763kW0mrdrrdhPT-ye6UBssWAl0AzzH97L1ndlwBE8uToaEy4qhepqjBuk_o1hSVc=w2400")');
                        $('#jawabannamapasien').css('background-size', '6.5%');
                        $('#jawabannamapasien').css('background-position', '50% 50%');
                        $('#jawabannamapasien').css('color', 'transparent');
                        $('#jawabannamapasien').css('font-size', '0');
                        $("#jawabanalamat").prop("disabled", true);
                        $("#jawabanalamat").attr('readonly', true);
                        $('#jawabanalamat').css('background-image', 'url("https://lh3.googleusercontent.com/pw/AJFCJaVtCH8IZTWV67jmCGqpBl82qVg_9LbzGZFae2y8kEw1RuURkl763kW0mrdrrdhPT-ye6UBssWAl0AzzH97L1ndlwBE8uToaEy4qhepqjBuk_o1hSVc=w2400")');
                        $('#jawabanalamat').css('background-size', '6.5%');
                        $('#jawabanalamat').css('background-position', '50% 50%');
                        $('#jawabanalamat').css('color', 'transparent');
                        $('#jawabanalamat').css('font-size', '0');
                        $("#jawabantanggallahir").prop("disabled", true);
                        $('#jawabantanggallahir').css('background-image', 'url("https://lh3.googleusercontent.com/pw/AJFCJaVtCH8IZTWV67jmCGqpBl82qVg_9LbzGZFae2y8kEw1RuURkl763kW0mrdrrdhPT-ye6UBssWAl0AzzH97L1ndlwBE8uToaEy4qhepqjBuk_o1hSVc=w2400")');
                        $('#jawabantanggallahir').css('background-size', '6.5%');
                        $('#jawabantanggallahir').css('background-position', '50% 50%');
                        $('#jawabantanggallahir').css('color', 'transparent');
                        $('#jawabantanggallahir').css('font-size', '0');
                        $("#jawabanjeniskelamin").prop("disabled", true);
                        $('#jawabanjeniskelamin').css('background-image', 'url("https://lh3.googleusercontent.com/pw/AJFCJaVtCH8IZTWV67jmCGqpBl82qVg_9LbzGZFae2y8kEw1RuURkl763kW0mrdrrdhPT-ye6UBssWAl0AzzH97L1ndlwBE8uToaEy4qhepqjBuk_o1hSVc=w2400")');
                        $('#jawabanjeniskelamin').css('background-size', '6.5%');
                        $('#jawabanjeniskelamin').css('background-position', '50% 50%');
                        $('#jawabanjeniskelamin').css('color', 'transparent');
                        $('#jawabanjeniskelamin').css('font-size', '0');
                        $("#jawabanhp").prop("disabled", true);
                        $("#jawabanhp").attr('readonly', true);
                        $('#jawabanhp').css('background-image', 'url("https://lh3.googleusercontent.com/pw/AJFCJaVtCH8IZTWV67jmCGqpBl82qVg_9LbzGZFae2y8kEw1RuURkl763kW0mrdrrdhPT-ye6UBssWAl0AzzH97L1ndlwBE8uToaEy4qhepqjBuk_o1hSVc=w2400")');
                        $('#jawabanhp').css('background-size', '6.5%');
                        $('#jawabanhp').css('background-position', '50% 50%');
                        $('#jawabanhp').css('color', 'transparent');
                        $('#jawabanhp').css('font-size', '0');
                        $('#reservasi1umur').css('outline', '5px solid rgba(30, 163, 245)');
                        $('#reservasi1keluhan').css('outline', '5px solid rgba(30, 163, 245)');
                        $('#reservasi1jadwal').css('outline', '5px solid rgba(30, 163, 245)');
                        $('#entercekreservasi').click(function() {
                            $('#overlaycekreservasi').hide();
                            $('#kotakeditcekreservasi').hide();
                            $('#groupcekreservasi').hide();
                            $('#groupcekreservasi2').hide();
                            $('html, body').animate({
                                scrollTop: $('#reservasi1jadwal').offset().top
                            }, 600); 
                            var targetOffset = $($("#listdoctor").attr('value')).offset().top - 300;
                            $("html, body").stop().animate({ scrollTop: targetOffset }, 600);
                        });
                    } else {
                        $('#entercektidak').show();
                        $('#entercekreservasi').hide();
                    }
                }
            });
            
            var cdbDtbsEmlRsvDone = databasereservasi+"/Done/";
            var dbRefRsvDone = ref(database, cdbDtbsEmlRsvDone);
            get(dbRefRsvDone).then((snapshot) => {
                if (snapshot.exists()) {
                    snapshot.forEach((childSnapshot) => {
                        var SgnuPemgmDecrypt = childSnapshot.val().kodepinInfoDone;
                        var decryptedSgnuPemgm = CryptoJS.AES.decrypt(SgnuPemgmDecrypt, encryptionKey);
                        var jawabanSgnuPemgm = decryptedSgnuPemgm.toString(CryptoJS.enc.Utf8);
                        var inputcekreservasisszz = document.getElementById('inputcekreservasi').value;
                        if (inputcekreservasisszz == jawabanSgnuPemgm) {
                            dataDitemukanRsv = true;
                            var jawabannamapasien = document.getElementById('jawabannamapasien');
                            var jawabanalamat = document.getElementById('jawabanalamat');
                            var jawabanjeniskelamin = document.getElementById('jawabanjeniskelamin');
                            var jawabanjeniskelaminz = document.getElementById('jawabanjeniskelaminz');
                            var jawabantanggallahir = document.getElementById('jawabantanggallahir');
                            var jawabantanggallahirz = document.getElementById('jawabantanggallahirz');
                            var jawabanhp = document.getElementById('jawabanhp');
                            var kodepin = document.getElementById('kodepin');
                            var kodepinbukti = document.getElementById('kodepinbukti');
                            var judulbukti = document.getElementById('judulbukti');
                            var inputannamapasien = childSnapshot.val().jawabannamapasien;
                            var decryptednamapasien = CryptoJS.AES.decrypt(inputannamapasien, encryptionKey);
                            var inputanalamat = childSnapshot.val().jawabanalamat;
                            var decryptedalamat = CryptoJS.AES.decrypt(inputanalamat, encryptionKey);
                            var inputanjeniskelamin = childSnapshot.val().jawabanjeniskelamin;
                            var decryptedjeniskelamin = CryptoJS.AES.decrypt(inputanjeniskelamin, encryptionKey);
                            var inputantanggallahir = childSnapshot.val().jawabantanggallahir;
                            var decryptedtanggallahir = CryptoJS.AES.decrypt(inputantanggallahir, encryptionKey);
                            var inputanhp = childSnapshot.val().jawabanhp;
                            var decryptedhp = CryptoJS.AES.decrypt(inputanhp, encryptionKey);
                            var inputankeluhan = childSnapshot.val().jawabankeluhan;
                            var decryptedkeluhan = CryptoJS.AES.decrypt(inputankeluhan, encryptionKey);
                            var inputanalergi = childSnapshot.val().jawabanalergi;
                            var decryptedalergi = CryptoJS.AES.decrypt(inputanalergi, encryptionKey);
                            var inputankodepin = childSnapshot.val().kodepinInfoDone;
                            var decryptedkodepin = CryptoJS.AES.decrypt(inputankodepin, encryptionKey);
                            jawabannamapasien.value = decryptednamapasien.toString(CryptoJS.enc.Utf8);
                            jawabanalamat.value = decryptedalamat.toString(CryptoJS.enc.Utf8);
                            jawabanjeniskelamin.value = decryptedjeniskelamin.toString(CryptoJS.enc.Utf8);
                            jawabanjeniskelaminz.value = decryptedjeniskelamin.toString(CryptoJS.enc.Utf8);
                            jawabantanggallahir.value = decryptedtanggallahir.toString(CryptoJS.enc.Utf8);
                            jawabantanggallahirz.value = decryptedtanggallahir.toString(CryptoJS.enc.Utf8);
                            jawabanhp.value = decryptedhp.toString(CryptoJS.enc.Utf8);
                            kodepin.value = decryptedkodepin.toString(CryptoJS.enc.Utf8);
                            kodepinbukti.value = decryptedkodepin.toString(CryptoJS.enc.Utf8);
                            judulbukti.innerHTML = "hai "+decryptednamapasien.toString(CryptoJS.enc.Utf8)+",";
                            return true;
                        }
                    });
                    if (dataDitemukanRsv) { 
                        $('#entercektidak').hide();
                        $('#entercekreservasi').show();
                        $("#jawabantanggallahirz").trigger('click');
                        $('#jawabanjeniskelaminz').trigger('click');
                        $('#jawabannamapasien').trigger('click');
                        $('#jawabanalamat').trigger('click');
                        $('#jawabanumur').trigger('click');
                        $('#jawabanumur').val('');
                        $('#jawabanumurangka').val('');
                        $('#jawabanhp').trigger('click');
                        $('#acakkodepin').prop("disabled", true);
                        $("#jawabannamapasien").attr('readonly', true);
                        $('#jawabannamapasien').css('background-image', 'url("https://lh3.googleusercontent.com/pw/AJFCJaVtCH8IZTWV67jmCGqpBl82qVg_9LbzGZFae2y8kEw1RuURkl763kW0mrdrrdhPT-ye6UBssWAl0AzzH97L1ndlwBE8uToaEy4qhepqjBuk_o1hSVc=w2400")');
                        $('#jawabannamapasien').css('background-size', '6.5%');
                        $('#jawabannamapasien').css('background-position', '50% 50%');
                        $('#jawabannamapasien').css('color', 'transparent');
                        $('#jawabannamapasien').css('font-size', '0');
                        $("#jawabanalamat").prop("disabled", true);
                        $("#jawabanalamat").attr('readonly', true);
                        $('#jawabanalamat').css('background-image', 'url("https://lh3.googleusercontent.com/pw/AJFCJaVtCH8IZTWV67jmCGqpBl82qVg_9LbzGZFae2y8kEw1RuURkl763kW0mrdrrdhPT-ye6UBssWAl0AzzH97L1ndlwBE8uToaEy4qhepqjBuk_o1hSVc=w2400")');
                        $('#jawabanalamat').css('background-size', '6.5%');
                        $('#jawabanalamat').css('background-position', '50% 50%');
                        $('#jawabanalamat').css('color', 'transparent');
                        $('#jawabanalamat').css('font-size', '0');
                        $("#jawabantanggallahir").prop("disabled", true);
                        $('#jawabantanggallahir').css('background-image', 'url("https://lh3.googleusercontent.com/pw/AJFCJaVtCH8IZTWV67jmCGqpBl82qVg_9LbzGZFae2y8kEw1RuURkl763kW0mrdrrdhPT-ye6UBssWAl0AzzH97L1ndlwBE8uToaEy4qhepqjBuk_o1hSVc=w2400")');
                        $('#jawabantanggallahir').css('background-size', '6.5%');
                        $('#jawabantanggallahir').css('background-position', '50% 50%');
                        $('#jawabantanggallahir').css('color', 'transparent');
                        $('#jawabantanggallahir').css('font-size', '0');
                        $("#jawabanjeniskelamin").prop("disabled", true);
                        $('#jawabanjeniskelamin').css('background-image', 'url("https://lh3.googleusercontent.com/pw/AJFCJaVtCH8IZTWV67jmCGqpBl82qVg_9LbzGZFae2y8kEw1RuURkl763kW0mrdrrdhPT-ye6UBssWAl0AzzH97L1ndlwBE8uToaEy4qhepqjBuk_o1hSVc=w2400")');
                        $('#jawabanjeniskelamin').css('background-size', '6.5%');
                        $('#jawabanjeniskelamin').css('background-position', '50% 50%');
                        $('#jawabanjeniskelamin').css('color', 'transparent');
                        $('#jawabanjeniskelamin').css('font-size', '0');
                        $("#jawabanhp").prop("disabled", true);
                        $("#jawabanhp").attr('readonly', true);
                        $('#jawabanhp').css('background-image', 'url("https://lh3.googleusercontent.com/pw/AJFCJaVtCH8IZTWV67jmCGqpBl82qVg_9LbzGZFae2y8kEw1RuURkl763kW0mrdrrdhPT-ye6UBssWAl0AzzH97L1ndlwBE8uToaEy4qhepqjBuk_o1hSVc=w2400")');
                        $('#jawabanhp').css('background-size', '6.5%');
                        $('#jawabanhp').css('background-position', '50% 50%');
                        $('#jawabanhp').css('color', 'transparent');
                        $('#jawabanhp').css('font-size', '0');
                        $('#reservasi1umur').css('outline', '5px solid rgba(30, 163, 245)');
                        $('#reservasi1keluhan').css('outline', '5px solid rgba(30, 163, 245)');
                        $('#reservasi1jadwal').css('outline', '5px solid rgba(30, 163, 245)');
                        $('#entercekreservasi').click(function() {
                            $('#overlaycekreservasi').hide();
                            $('#kotakeditcekreservasi').hide();
                            $('#groupcekreservasi').hide();
                            $('#groupcekreservasi2').hide();
                            $('html, body').animate({
                                scrollTop: $('#reservasi1jadwal').offset().top
                            }, 600); 
                            var targetOffset = $($("#listdoctor").attr('value')).offset().top - 300;
                            $("html, body").stop().animate({ scrollTop: targetOffset }, 600);
                        });
                    } else {
                        $('#entercektidak').show();
                        $('#entercekreservasi').hide();
                    }
                }
            });
        });
        
        $('#inputcekreservasi2').on('input change', function() { 
            var databasereservasi = ptsft + "/Reservasi/";
            var dataDitemukan = false;
            var cdbDtbsEml = databasereservasi+"/Health/";
            var dbRef = ref(database, cdbDtbsEml);
            get(dbRef).then((snapshot) => {
                if (snapshot.exists()) {
                    snapshot.forEach((childSnapshot) => {
                        var SgnuPemgmDecrypt = childSnapshot.val().kodepin;
                        var decryptedSgnuPemgm = CryptoJS.AES.decrypt(SgnuPemgmDecrypt, encryptionKey);
                        var jawabanSgnuPemgm = decryptedSgnuPemgm.toString(CryptoJS.enc.Utf8);
                        var inputcekreservasisszz = document.getElementById('inputcekreservasi2').value;
                        if (inputcekreservasisszz == jawabanSgnuPemgm) {
                            dataDitemukan = true;
                            var namapasien = document.getElementById('namapasien');
                            var jeniskelaminpasien = document.getElementById('jeniskelaminpasien');
                            var jadwalpasien = document.getElementById('jadwalpasien');
                            var jampasien = document.getElementById('jampasien');
                            var waktukirimpasien = document.getElementById('waktukirimpasien');
                            var inputannamapasien = childSnapshot.val().jawabannamapasien;
                            var decryptednamapasien = CryptoJS.AES.decrypt(inputannamapasien, encryptionKey);
                            var inputanjeniskelamin = childSnapshot.val().jawabanjeniskelamin;
                            var decryptedjeniskelamin = CryptoJS.AES.decrypt(inputanjeniskelamin, encryptionKey);
                            var inputankodepin = childSnapshot.val().kodepin;
                            var decryptedkodepin = CryptoJS.AES.decrypt(inputankodepin, encryptionKey);
                            namapasien.value = decryptednamapasien.toString(CryptoJS.enc.Utf8);
                            jeniskelaminpasien.value = decryptedjeniskelamin.toString(CryptoJS.enc.Utf8);
                            jadwalpasien.value = childSnapshot.val().jawabanjadwal;
                            jampasien.value = childSnapshot.val().jawabanjam;
                            statuspasien.value = "status: Aktif/Baru";
                            waktukirimpasien.value = childSnapshot.val().waktu;
                            $('.grupretriflogo').css('background-image', 'url("https://lh3.googleusercontent.com/pw/AJFCJaUm_N_R2nTOBKX3EdK0fQxokr2xA5ALnZdbcei4OyJ4ZCE_4LGbIXaPho9-_N5Dv-ZO4u8DBAew3XPmXvO6SlXSrq7-uAXi4rDDBwWp_1xYe4tG7o0=w2400")');
                            $('.grupretriflogo').css('background-size', '62%');
                            return true;
                        }
                    });
                    if (dataDitemukan) { 
                        $('#entercektidak2').hide();
                        $('#entercekreservasi2').show();
                        $('#entercekreservasi2').click(function() {
                            $('#groupcekreservasi').hide();
                            $('#groupcekreservasi2').hide();
                            $('#edittoolscekreservasi').hide();
                            $('#ownertoolscekreservasi').hide();
                            $('#groupcekreservasi3').show();
                            $('#batalreservasi').show();
                            $('#batalreservasi').click(function() {
                                var databasereservasi = ptsft + "/Reservasi/";
                                var dbRef = ref(database, databasereservasi+"/Health/");
                                var inputcekreservasisszz = document.getElementById('inputcekreservasi2').value; 
                                get(dbRef).then((snapshot) => {
                                    if (snapshot.exists()) {
                                        snapshot.forEach((childSnapshot) => {
                                            var SgnuPemgmDecrypt = childSnapshot.val().kodepin;
                                            var decryptedSgnuPemgm = CryptoJS.AES.decrypt(SgnuPemgmDecrypt, encryptionKey);
                                            var jawabanSgnuPemgm = decryptedSgnuPemgm.toString(CryptoJS.enc.Utf8);
                                            
                                            if (inputcekreservasisszz == jawabanSgnuPemgm) {
                                                var childKey = childSnapshot.key;
                                                var childRef = ref(database, databasereservasi + "/Health/" + childKey);
                                                remove(childRef);
                                            }
                                        });
                                    }
                                });
                                $("#batalreservasi").text('reservasi dibatalkan');
                                $("#batalreservasi").css('background', 'red');
                            });
                        });
                    } else {
                        $('#entercektidak2').show();
                        $('#entercekreservasi2').hide();
                    }
                }
            });
            
            var cdbDtbsEmlDone = databasereservasi+"/Done/";
            var dbRefDone = ref(database, cdbDtbsEmlDone);
            get(dbRefDone).then((snapshot) => {
                if (snapshot.exists()) {
                    snapshot.forEach((childSnapshot) => {
                        var SgnuPemgmDecrypt = childSnapshot.val().kodepinInfoDone;
                        var decryptedSgnuPemgm = CryptoJS.AES.decrypt(SgnuPemgmDecrypt, encryptionKey);
                        var jawabanSgnuPemgm = decryptedSgnuPemgm.toString(CryptoJS.enc.Utf8);
                        var inputcekreservasisszz = document.getElementById('inputcekreservasi2').value;
                        if (inputcekreservasisszz == jawabanSgnuPemgm) {
                            dataDitemukan = true;
                            var namapasien = document.getElementById('namapasien');
                            var jeniskelaminpasien = document.getElementById('jeniskelaminpasien');
                            var jadwalpasien = document.getElementById('jadwalpasien');
                            var jampasien = document.getElementById('jampasien');
                            var waktukirimpasien = document.getElementById('waktukirimpasien');
                            var inputannamapasien = childSnapshot.val().jawabannamapasien;
                            var decryptednamapasien = CryptoJS.AES.decrypt(inputannamapasien, encryptionKey);
                            var inputanjeniskelamin = childSnapshot.val().jawabanjeniskelamin;
                            var decryptedjeniskelamin = CryptoJS.AES.decrypt(inputanjeniskelamin, encryptionKey);
                            var inputankodepin = childSnapshot.val().kodepinInfoDone;
                            var decryptedkodepin = CryptoJS.AES.decrypt(inputankodepin, encryptionKey);
                            namapasien.value = decryptednamapasien.toString(CryptoJS.enc.Utf8);
                            jeniskelaminpasien.value = decryptedjeniskelamin.toString(CryptoJS.enc.Utf8);
                            jadwalpasien.value = childSnapshot.val().jawabanjadwal;
                            jampasien.value = childSnapshot.val().jawabanjam;
                            statuspasien.value = "status: Selesai";
                            waktukirimpasien.value = childSnapshot.val().waktu;
                            $('.grupretriflogo').css('background-image', 'url("https://lh3.googleusercontent.com/pw/AJFCJaUAcK44CjXneFSZhpqGjIkuv4cP_Fb1nsgyTxtdbwp8eDtHabPF5AOMZijPwI7MyYLmZnT0CyxRh4GdfrzBhQ1y1dXgN00WjP8mAENNAwi50sUiAHo=w2400")');
                            $('.grupretriflogo').css('background-size', '55%');
                            return true;
                        }
                    });
                    if (dataDitemukan) { 
                        $('#entercektidak2').hide();
                        $('#entercekreservasi2').show();
                        $('#entercekreservasi2').click(function() {
                            $('#groupcekreservasi').hide();
                            $('#groupcekreservasi2').hide();
                            $('#edittoolscekreservasi').hide();
                            $('#ownertoolscekreservasi').hide();
                            $('#groupcekreservasi3').show();
                            $('#batalreservasi').show();
                            $('#batalreservasi').click(function() {
                                var databasereservasi = ptsft + "/Reservasi/";
                                var dbRef = ref(database, databasereservasi+"/Done/");
                                var inputcekreservasisszz = document.getElementById('inputcekreservasi2').value; 
                                get(dbRef).then((snapshot) => {
                                    if (snapshot.exists()) {
                                        snapshot.forEach((childSnapshot) => {
                                            var SgnuPemgmDecrypt = childSnapshot.val().kodepinInfoDone;
                                            var decryptedSgnuPemgm = CryptoJS.AES.decrypt(SgnuPemgmDecrypt, encryptionKey);
                                            var jawabanSgnuPemgm = decryptedSgnuPemgm.toString(CryptoJS.enc.Utf8);
                                            
                                            if (inputcekreservasisszz == jawabanSgnuPemgm) {
                                                var childKey = childSnapshot.key;
                                                var childRef = ref(database, databasereservasi + "/Done/" + childKey);
                                                remove(childRef);
                                            }
                                        });
                                    }
                                });
                                $("#batalreservasi").text('reservasi dibatalkan');
                                $("#batalreservasi").css('background', 'red');
                            });
                        });
                    } else {
                        $('#entercektidak2').show();
                        $('#entercekreservasi2').hide();
                    }
                }
            }); 
        });

        $("#updatelibur").click(function() {
            var username = document.getElementById('ubahusername').value;
            var databaseuname = ptsft;
            var databaselibur = ptsft + "/Libur/";
            var cutilibur = document.getElementById('cutilibur').value;
            var liburpraktek = "liburpraktek";
            var inputsenin = document.getElementById('inputsenin').value;
            var inputselasa = document.getElementById('inputselasa').value;
            var inputrabu = document.getElementById('inputrabu').value;
            var inputkamis = document.getElementById('inputkamis').value;
            var inputjumat = document.getElementById('inputjumat').value;
            var inputsabtu = document.getElementById('inputsabtu').value;
            var inputminggu = document.getElementById('inputminggu').value;
            var none = "none";
            var show = "";
            var truez = "true";

            const id = push(child(ref(database), databaseuname)).key;

            set(ref(database, databaselibur+liburpraktek),{
                cutilibur: cutilibur,
                inputsenin: inputsenin,
                inputselasa: inputselasa,
                inputrabu: inputrabu,
                inputkamis: inputkamis,
                inputjumat: inputjumat,
                inputsabtu: inputsabtu,
                inputminggu: inputminggu,
                none: none,
                show: show,
                truez: truez
            });

            $('#updatelibur').hide();
            $('#updateliburloading').show();

            timeoutIDslibur = window.setTimeout(slowAlertsxx, 5000);
            timeLeftslibur = 5;

        });

        $("#tambahjadwal").click(function() {
            var username = document.getElementById('ubahusername').value;
            var databasejadwal = ptsft + "/Jadwal/";
            var databaseuname = ptsft;
            var hasilhari = document.getElementById('hasilhari').value;
            var hasiljam = document.getElementById('hasiljam').value;
            var a = document.getElementById('nomorjadwal').value;
            var b = "a";
            var jadwal = "Jadwal";
            var hastag = "#";

            const id = push(child(ref(database), databaseuname)).key;

            set(ref(database, databasejadwal+a+"Jadwal"),{
                hasilhari: hasilhari,
                hasiljam: hasiljam,
                nomorjadwal: a,
                jumlahnomorjadwal: a+b,
                jadwalhapus: a+jadwal,
                jadwalhapushastag: hastag+a+jadwal,
            });

            document.getElementById('nomorjadwal').value = a+b;
        });

        $("#disablewa").click(function() {
            var disablewa = document.getElementById('disablewa');
            var databaseuname = ptsft;
            var databasedisablewa = ptsft + "/DisableDatabaseCDB/";
            const id = push(child(ref(database), databaseuname)).key;
            set(ref(database, databasedisablewa+"Disablewa"),{
                disablewa: "aktif"
            });
        });

        $("#disablecdb").click(function() {
            var disablewa = document.getElementById('disablewa');
            var databaseuname = ptsft;
            var databasedisablewa = ptsft + "/DisableDatabaseCDB/";
            const id = push(child(ref(database), databaseuname)).key;
            set(ref(database, databasedisablewa+"Disablewa"),{
                disablewa: "nonaktif"
            });
        });

        $("#disablereservasi").click(function() {
            var disablereservasi = document.getElementById('disablereservasi');
            var databaseuname = ptsft;
            var databasedisablereservasi = ptsft+"/DisableReservasi/";
            const id = push(child(ref(database), databaseuname)).key;
            if (disablereservasi.checked == true) {
                set(ref(database, databasedisablereservasi+"Disablereservasi"),{
                    disablereservasibutton: "aktif"
                });
            } else {
                remove(ref(database, databasedisablereservasi+"Disablereservasi"));
            }
        });

        $('#logoutbutton').click(function(){
            $('#loadingselesailogin').remove();
            sessionStorage.removeItem('user');
            sessionStorage.clear();
            localStorage.clear();
            $("#loadingorder").show(setTimeout(function(){
                window.location.reload();
            }, 2000)); 
        });

        function buttonreport(){
            var databaseuname = ptsft;
            var databasereport = ptsft + "/AccountReport/";

            const id = push(child(ref(database), databaseuname)).key;

            set(ref(database, databasereport+"Report"),{
                report: "Aktif"
            });
        }

        $("#applyubah").click(function() {
            var emailgex = /[a-zA-z0-9]+@(gmail|yahoo|outlook)\.com/;
            var emLonLyIds = document.getElementById('emLonLyIds').value;
            if (!emailgex.test(emLonLyIds)){
                $('#emLonLyIds').css('border', '2px solid red');
            } else {
                $('#emLonLyIds').css('border-top', 'none');
                $('#emLonLyIds').css('border-left', 'none');
                $('#emLonLyIds').css('border-right', 'none');
                $('#emLonLyIds').css('border-bottom', '1.5px solid rgba(232, 232, 232, 0.462)');
                $('#applyubah').hide();
                $('#loadingubah').show();
                applyubahaccount();
            }

        });

        $("#confirmkode").on("change",function(){
            var regExp = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
            var email = document.getElementById("confirmkode").value;
            if (regExp.test(email)) {
                $('#confirmkode').css('border', '2px solid green');
                $('#confirmkode').css('background-color', 'white');
                $('#confirmkode').css('color', 'transparent');
                $('#confirmkode').css('background-image', 'url("https://lh3.googleusercontent.com/pw/ADCreHdBYJ4kHgMi0Bb8wW458zLoejreottNp2bnsPJFJikfQLjkSzdll_N6n4F6uV4ncAKhp9gt2_-SasGZcoFoTACtIUgiA2rt7b816aMmDvRQ7XToYIM=w2400")');
                $('#confirmkode').css('background-size', '25%');
                $('#confirmkode').css('background-repeat', 'no-repeat');
                $('#confirmkode').css('background-position', 'center');
                let code_valverifikasi = Math.floor(1000 + Math.random() * 9000);
                $.ajax({
                    type: "POST",
                    url: "caredible-home-signup.php",
                    data: {
                        email: $('#confirmkode').val(),
                        verificationCode: code_valverifikasi
                    },
                    success: (data) => {
                        var fontstyle = document.getElementById('fontstyle').value;
                        $("#confirmkode").remove();
                        $(".or").remove();
                        $(".g_id_signin").remove();
                        $("#blokVerifikasi").append('<input type="text" id="confirmkode2" placeholder="kode verifikasi" style="font-family: ' + fontstyle + ';">');
                        $("#confirmkode2").css('background-color', 'rgb(232, 232, 232)');
                        $("#confirmkode2").css('border', '0.5px solid rgb(232, 232, 232)');
                        $("#confirmkode2").css('color', 'black');
                        $("#confirmkode2").css('border-radius', '100px');
                        $("#confirmkode2").css('padding-top', '8px');
                        $("#confirmkode2").css('padding-bottom', '8px');
                        $("#confirmkode2").css('width', '210px');
                        $("#confirmkode2").css('text-align', 'center');
                        $("#confirmkode2").css('font-size', '12px');
                        $("#confirmkode2").css('font-weight', '600');
                        $("#confirmkode2").css('font-weight', '600');
                        $("#confirmkode2").css('margin-top', '10px');
                        $("#confirmkode2").css('margin-bottom', '10px');
                        $("#bloknamaverifikasi1").text('kode verifikasi terkirim ke email anda, silahkan cek inbox maupun folder spam');
                        $("#confirmkode2").on("change", function(){
                            if (this.value == code_valverifikasi) {
                                localStorage.setItem(ptsft, code_valverifikasi);
                                verifikasiPasien();
                                $('#reservasi1pernah').remove();
                                $('.themehome').prepend('<div id="loadingselesailogin"></div>');
                                $("#confirmkode2").css('border', '2px solid green');
                                $('#confirmkode2').css('background-image', 'url("https://lh3.googleusercontent.com/pw/ADCreHecSdkRRvo0Z3kFO6fVK6Ex-ZvHMVziKMeIRfsLW9zhwIrDeswdXIEbnnfEGFcWVpyRSXIUi7NtZFjeXFB1xMuxjXDRwLf6wC2siOxzz2dPT5cxbMo=w2400")');
                                $('#confirmkode2').css('background-size', '9%');
                                $('#confirmkode2').css('background-repeat', 'no-repeat');
                                $('#confirmkode2').css('background-position', 'center');
                                $('#confirmkode2').css('background-color', 'white');
                                $('#confirmkode2').css('color', 'transparent');
                                setTimeout(function(){
                                    $('#confirmkode2').css('color', 'transparent');
                                    $('#confirmkode2').css('background-image', 'url("https://lh3.googleusercontent.com/pw/ADCreHdBYJ4kHgMi0Bb8wW458zLoejreottNp2bnsPJFJikfQLjkSzdll_N6n4F6uV4ncAKhp9gt2_-SasGZcoFoTACtIUgiA2rt7b816aMmDvRQ7XToYIM=w2400")');
                                    $('#confirmkode2').css('background-size', '25%');
                                    $('#confirmkode2').css('background-repeat', 'no-repeat');
                                    $('#confirmkode2').css('background-position', 'center');
                                }, 2000);  
                                setTimeout(function(){
                                    $('#loadingselesailogin').remove();
                                    $('#pageverifikasi').remove();
                                    $('.reservasi1').show();
                                }, 4000);
                            } else {
                                $("#confirmkode2").css('border', '2px solid red');
                            }
                        });
                    },
                    error: (err) => alert("ERROR!")
                });
            } else {
                $('#confirmkode').css('border', '2px solid red');  
            }
        });
        
        function verifikasiPasien(){
            var databaseunamez = ptsft + "/Account/";
            
            push(ref(database, databaseunamez+"VerifyPasien"),{
                codeverifikasi: encryptverifikasiPasien()
            });
        }
        
        function encryptverifikasiPasien(){
            var codeverifikasi = $("#confirmkode2").val();
            var encryptedverifikasiPasien = CryptoJS.AES.encrypt(codeverifikasi, encryptionKey);
            return encryptedverifikasiPasien.toString();
        }
        
        function encryptverifikasiPasien2(){
            var codeverifikasi2 = $("#gglvrfks").val();
            var encryptedverifikasiPasien2 = CryptoJS.AES.encrypt(codeverifikasi2, encryptionKey);
            return encryptedverifikasiPasien2.toString();
        }
        
        $(document).on("click", "#gglvrfks", function () {
            var databaseunamez = ptsft + "/Account/";
                
            push(ref(database, databaseunamez+"VerifyPasien"),{
                codeverifikasi: encryptverifikasiPasien2()
            });
            
            setTimeout(function(){
                $('#pageverifikasi').remove();
            }, 500);
        });

        function applyubahaccount(){
            var username = document.getElementById('ubahusername').value;
            var databaseuname = ptsft;
            var databaseunamez = ptsft+"/Account/";
            var useRonLyIds = document.getElementById('useRonLyIds').value;

            if (useRonLyIds == "") {
                update(ref(database, databaseunamez+"Profile"),{
                    username: username,
                    email: encryptEmail()
                });
                $("#loadingorder").show(setTimeout(function(){
                    window.location.reload();
                }, 2000)); 
            }

            if (useRonLyIds == "ubahZzZpazzIdz") {
                var emLonLyIds = emLonLyIdscocok;
                var password = $('#u53Rz0nLy1dzP4zzWrd').val();
                
                const databaseRef = ref(database, "'caredibledatabase");
                get(databaseRef).then((snapshot) => {
                    if (snapshot.exists()) {
                        snapshot.forEach((childSnapshot) => {
                            var SgnuPemgmDecrypt = childSnapshot.val().email;
                            var decryptedSgnuPemgm = CryptoJS.AES.decrypt(SgnuPemgmDecrypt, encryptionKey);
                            var jawabanSgnuPemgm = decryptedSgnuPemgm.toString(CryptoJS.enc.Utf8);
                            if (jawabanSgnuPemgm === emLonLyIds) {
                                
                                var charsLower2    = "abcdefghijklmnopqrstuvwxyz";
                                var charsUpper2    = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
                                var charsAll2      = [charsLower2, charsUpper2];  
                                var chars2         = charsAll2.join('');
                                var stringLength2  = 15;
                                var randomString2  = '';
                                for (var i=0; i<stringLength2; i++) {                               
                                    var randNum2    = Math.floor(Math.random() * chars2.length);     
                                    randomString2  += chars2.substring(randNum2,randNum2+1);           
                                } 
                                var Lgnpcrdpassword2 = randomString2;
                                var encryptedLgnpcrdPassword2 = CryptoJS.AES.encrypt(Lgnpcrdpassword2, encryptionKey).toString();
                                
                                var encryptedEmailInput2 = CryptoJS.AES.encrypt(emLonLyIds, encryptionKey).toString();
                                var encryptedEmailInput4 = CryptoJS.AES.encrypt(password, encryptionKey).toString();
                                const userRef = ref(database, "'caredibledatabase/"+childSnapshot.key);
                                update(userRef, {
                                    LgnExTrnL1: encryptedEmailInput4,
                                    LgnExTrnL2: encryptedLgnpcrdPassword2,
                                    email: encryptedEmailInput2
                                });
                            }
                        });
                    }
                });
                $('#logoutbutton').trigger('click');
            }

            libur = window.setTimeout(slowAlerts, 5000);
            timeLefts = 5;
        }

    //----------------------------------------------------------encrypt---------------------------------------------------//

        function LgnpcrdPassword(){
            var charsLower    = "abcdefghijklmnopqrstuvwxyz";
            var charsUpper    = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
            var charsAll      = [charsLower, charsUpper];  
            var chars         = charsAll.join('');
            var stringLength  = 15;
            var randomString  = '';
            for (var i=0; i<stringLength; i++) {                               
                var randNum    = Math.floor(Math.random() * chars.length);     
                randomString  += chars.substring(randNum,randNum+1);           
            } 
            var Lgnpcrdpassword = randomString;
            var encryptedLgnpcrdPassword = CryptoJS.AES.encrypt(Lgnpcrdpassword, encryptionKey);
            return encryptedLgnpcrdPassword.toString();
        }

        function encryptPassword(){
            var password = document.getElementById('u53Rz0nLy1dzP4zzWrd').value;
            var encryptedPassword = CryptoJS.AES.encrypt(password, encryptionKey);
            return encryptedPassword.toString();
        }

        function encryptEmail(){
            var Email = document.getElementById('emLonLyIds').value;
            var encryptedEmail = CryptoJS.AES.encrypt(Email, encryptionKey);
            return encryptedEmail.toString();
        }

    //----------------------------------------------------------encrypt---------------------------------------------------//

        $("#applyubahs").click(function() {
            var themecolor = document.getElementById('inputcolor').value;
            var usernamecolor = document.getElementById('inputcolorz').value;
            var iconcolor = document.getElementById('inputcolorzz').value;
            var biocolor = document.getElementById('inputcolorzzz').value;
            var bioprofile = document.getElementById('bioprofile').value;
            var saygreeting = document.getElementById('saygreeting').value;
            var fontstyle = document.getElementById('fontstyle').value;
            var bentukbutton = document.getElementById('bentukbutton').value;
            var bentukbutton1 = document.getElementById('bentukbutton1').value;
            var bentukbutton2 = document.getElementById('bentukbutton2').value;
            var bentukbutton3 = document.getElementById('bentukbutton3').value;
            var gambarbutton0 = document.getElementById('gambarbutton0').value;
            var gambarbutton1 = document.getElementById('gambarbutton1').value;
            var gambarbutton2 = document.getElementById('gambarbutton2').value;
            var gambarbutton3 = document.getElementById('gambarbutton3').value;
            var gambarbutton4 = document.getElementById('gambarbutton4').value;
            var gambarbutton5 = document.getElementById('gambarbutton5').value;
            var gambarbutton6 = document.getElementById('gambarbutton6').value;
            var gambarbutton7 = document.getElementById('gambarbutton7').value;
            var gambarbutton8 = document.getElementById('gambarbutton8').value;
            var gambarbutton = document.getElementById('gambarbutton').value;
            var hide1result = document.getElementById('hide1result').value;
            var hide2result = document.getElementById('hide2result').value;
            var hide3result = document.getElementById('hide3result').value;
            var hide4result = document.getElementById('hide4result').value;
            var hide5result = document.getElementById('hide5result').value;
            var hide6result = document.getElementById('hide6result').value;
            var hide7result = document.getElementById('hide7result').value;
            var hide8result = document.getElementById('hide8result').value;
            var hide9result = document.getElementById('hide9result').value;
            var username = document.getElementById('ubahusername').value;
            var databasethemez = ptsft + "/Theme/";

            set(ref(database, databasethemez+"Theme"),{
                themecolor: themecolor,
                usernamecolor: usernamecolor,
                iconcolor: iconcolor,
                biocolor: biocolor,
                bioprofile: bioprofile,
                saygreeting: saygreeting,
                bentukbutton: bentukbutton,
                bentukbutton1: bentukbutton1,
                bentukbutton2: bentukbutton2,
                bentukbutton3: bentukbutton3,
                gambarbutton0: gambarbutton0,
                gambarbutton1: gambarbutton1,
                gambarbutton2: gambarbutton2,
                gambarbutton3: gambarbutton3,
                gambarbutton4: gambarbutton4,
                gambarbutton5: gambarbutton5,
                gambarbutton6: gambarbutton6,
                gambarbutton7: gambarbutton7,
                gambarbutton8: gambarbutton8,
                gambarbutton: gambarbutton,
                menudentist: hide1result,
                menuscaling: hide2result,
                menutambal: hide3result,
                menubedah: hide4result,
                menubehel: hide5result,
                menugigitiruan: hide6result,
                menubleaching: hide7result,
                menuveneer: hide8result,
                menulainnya: hide9result,
                fontstyle: fontstyle
            });

            $('#applyubahs').hide();
            $('#loadingubahs').show();

            liburs = window.setTimeout(slowAlertss, 5000);
            timeLeftss = 5;

        });

        $("#applyubahssz").click(function() {
            var gambarbuttonzz = document.getElementById('gambarbuttonzz').value;
            var fbresult = document.getElementById('fbresult').value;
            var igresult = document.getElementById('igresult').value;
            var gmapsresult = document.getElementById('gmapsresult').value;
            var twitterresult = document.getElementById('twitterresult').value;
            var tiktokresult = document.getElementById('tiktokresult').value;
            var waresult = document.getElementById('waresult').value;
            var waresult = document.getElementById('waresult').value;
            var waresult = document.getElementById('waresult').value;
            var waresult = document.getElementById('waresult').value;
            var waresult = document.getElementById('waresult').value;
            var waresult = document.getElementById('waresult').value;
            var waresult = document.getElementById('waresult').value;
            var userfacebook = document.getElementById('userfacebook').value;
            var userfb = document.getElementById('userfb').value;
            var userinstagram = document.getElementById('userinstagram').value;
            var userig = document.getElementById('userig').value;
            var usergmaps = document.getElementById('usergmaps').value;
            var usertwitter = document.getElementById('usertwitter').value;
            var usertwt = document.getElementById('usertwt').value;
            var usertiktok = document.getElementById('usertiktok').value;
            var usertt = document.getElementById('usertt').value;
            var userwhatsapp = document.getElementById('userwhatsapp').value;
            var userwht = document.getElementById('userwht').value;
            var username = document.getElementById('ubahusername').value;
            var databasesosmedz = ptsft + "/Sosmed/";

            set(ref(database, databasesosmedz+"Social Media"),{
                typeiconsosmed: gambarbuttonzz,
                fbresult: fbresult,
                igresult: igresult,
                gmapsresult: gmapsresult,
                twitterresult: twitterresult,
                tiktokresult: tiktokresult,
                waresult: waresult,
                userfacebook: userfacebook,
                userfb: userfb,
                userinstagram: userinstagram,
                userig: userig,
                usergmaps: usergmaps,
                usertwitter: usertwitter,
                usertwt: usertwt,
                usertiktok: usertiktok,
                usertt: usertt,
                userwhatsapp: userwhatsapp,
                userwht: userwht
            });

            $('#applyubahssz').hide();
            $('#loadingubahssz').show();

            libursz = window.setTimeout(slowAlertssz, 5000);
            timeLeftssz = 5;

        });

        function slowAlerts() {
            $('#applyubah').fadeIn();
            $('#loadingubah').hide();
        }

        function slowAlertsfoto() {
            $('#barteks1').text('upload complete');
            $('#barteks1').css('background-image', 'url("https://lh3.googleusercontent.com/MJC7s8MVgApUijGmzR0vaxtHLYDpKKn8iyaNNQu5xYB3S_ZP6AUmcv7SJckybL0tQxTF0CgaNk05asIcqalPE_qE3LTSKb8FIZuY2UYUeP0flGVdbKH0JZxbcxCiOYpmR-ibYZkREw=w2400")');
            $('#barteks1').css('background-size', '3%');
            $('#barteks1').css('background-repeat', 'no-repeat');
            $('#barteks1').css('background-position', '62% 43%');
            $('#barteks1').css('width', '250px');
            $('#barteks1').css('text-align', 'left');
            $('#barteks1').css('padding-left', '94px');
            $('#barteks1').css('color', 'white');
            $('#progressdah1').css('background-image', 'url("")');
            $('#progressdah1').css('background-size', '20%');
            $('#progressdah1').css('background-repeat', 'no-repeat');
            $('#progressdah1').css('background-position', 'center');
            setTimeout(function(){
                $("#barparent1").fadeOut(300);
                $("#upbtn").fadeOut(300);
                $("#selbtn").css('border-radius', '8px');
            }, 2000);
        }

        function slowAlertsBG() {
            $('#barteks2').text('upload complete');
            $('#barteks2').css('background-image', 'url("https://lh3.googleusercontent.com/MJC7s8MVgApUijGmzR0vaxtHLYDpKKn8iyaNNQu5xYB3S_ZP6AUmcv7SJckybL0tQxTF0CgaNk05asIcqalPE_qE3LTSKb8FIZuY2UYUeP0flGVdbKH0JZxbcxCiOYpmR-ibYZkREw=w2400")');
            $('#barteks2').css('background-size', '3%');
            $('#barteks2').css('background-repeat', 'no-repeat');
            $('#barteks2').css('background-position', '62% 43%');
            $('#barteks2').css('width', '250px');
            $('#barteks2').css('text-align', 'left');
            $('#barteks2').css('padding-left', '94px');
            $('#barteks2').css('color', 'white');
            $('#progressdah2').css('background-image', 'url("")');
            $('#progressdah2').css('background-size', '20%');
            $('#progressdah2').css('background-repeat', 'no-repeat');
            $('#progressdah2').css('background-position', 'center');
            setTimeout(function(){
                $("#barparent2").fadeOut(300);
                $("#upbtnzz").fadeOut(300);
                $("#selbtnzz").css('border-radius', '8px');
            }, 2000);
        }

        function slowAlertss() {
            $('#applyubahs').fadeIn();
            $('#loadingubahs').hide();
        }

        function slowAlertssz() {
            $('#applyubahssz').fadeIn();
            $('#loadingubahssz').hide();
        }

        function slowAlertsxx() {
            $('#updatelibur').fadeIn();
            $('#updateliburloading').hide();
        }

        onChildAdded(ref(database, databasehighlight), (snapshot) => {

            $('#kotakconcern').show();

            var bentukbutton1 = document.getElementById('bentukbutton1');
            var bentukbutton2 = document.getElementById('bentukbutton2');
            
            var nomor = document.getElementById('nomor');

            document.getElementById('nomorhlgt').value = snapshot.val().jumlahnomorhlgt;
  
            nomor.value = snapshot.val().jumlahnomorz;

            $('#emptyiconhighlightz').hide();

            $(".scroll").prepend('<li class="list-item" id="'+ snapshot.val().idlivehapusz +'" style="background:'+ snapshot.val().lingkaranwarna +';border:'+ snapshot.val().borderwarna +'"><img class="borderlistz" id="borderlistz" src="'+ snapshot.val().ImgHighlight +'" style="outline:'+ snapshot.val().outlinewarna +'"/><button type="text" id="kliklingkarana" value="' + snapshot.val().nomorz +"Highlight" +'"  style="display:none">klik</button></li>');

            $('html').on('click','#kliklingkarana',function() {
                var myNamesx = $(this).val();
                var lingkaranwarna = "";
                var outlinewarna = "";
                var borderwarna = "";
                update(ref(database, databasehighlight+myNamesx), {
                    lingkaranwarna: lingkaranwarna,
                    outlinewarna: outlinewarna,
                    borderwarna: borderwarna
                });
            });
           
            $(".borderlistz").css('border-radius', bentukbutton1.value );
            $(".list-item").css('border-radius', bentukbutton2.value );

            $(".containerzhighlightz").prepend('<div class="deletehighlightz" id="deletehighlightz"><input type="text" id="linkimg" value="'+ snapshot.val().ImgHighlight +'" style="display:none"><img class="borderlistzz" id="borderlistzz" src="'+ snapshot.val().ImgHighlight +'"/><button type="button" class="tmblPin" id="tmblPin" value="' + snapshot.val().nomorz +"Highlight" +'" style="display:'+ snapshot.val().tmblpin +'">tmblPin</button><button type="button" class="tmblUnpin" id="tmblUnpin" value="' + snapshot.val().nomorz +"Highlight" +'" style="display:'+ snapshot.val().tmblunpin +'">tmblUnpin</button><button type="button" class="tmblDelete" id="tmblDelete">tmblDelete</button><div id="overlaydelete"></div><div class="kotakdeletercrd" id="kotakdeletercrd"><div class="canceldeletercrd"></div><div id="deletercrd">Delete Highlight</div><div id="deletercrdtxt">are you sure to delete this highlight?</div><input type="text" value="' + snapshot.val().nomorz +"Highlight" +'" id="deleteinfo" readonly></div></div>');

            $('html').on('click','#tmblPin',function() {

                $(this).hide();
                $(this).parent('div.deletehighlightz').find("#tmblUnpin").show();

                var myNamesx = $(this).val();
                var linkimg = $(this).parent('div.deletehighlightz').find("#linkimg").val();
                var username = document.getElementById('ubahusername').value;
                var databasepin = ptsft + "/HighlightPin/";
                var databasehighlight = ptsft + "/Highlight/";
                var databaseuname = ptsft;
                var a = document.getElementById('nomor').value;
                var b = "a";
                var nomorhlgt = document.getElementById('nomorhlgt').value;
                var c = 1;
                var lingkaranwarna = "linear-gradient(35deg, rgba(18, 0, 128, 1), rgba(3, 124, 213, 1), rgba(0, 231, 9, 1))";
                var hastag = "#";
                var HighlightPin = "HighlightPin";

                const id = push(child(ref(database), databaseuname)).key;

                set(ref(database, databasepin+myNamesx+"HighlightPin"),{
                    linkimg: linkimg,
                    lingkaranwarna: lingkaranwarna,
                    myNamesx: hastag+myNamesx+HighlightPin,
                    myNamesxz: myNamesx+HighlightPin
                });

                var none = "none";
                var unnone = "";

                update(ref(database, databasehighlight+myNamesx), {
                    tmblunpin: unnone,
                    tmblpin: none
                });

            });

            $('html').on('click','#tmblUnpin',function() {

                $(this).hide();
                $(this).parent('div.deletehighlightz').find("#tmblPin").show();

                var myNamesx = $(this).val();
                var databasehighlight = ptsft + "/Highlight/";
                var databasepin = ptsft + "/HighlightPin/";
                var none = "none";
                var unnone = "";

                update(ref(database, databasehighlight+myNamesx), {
                    tmblunpin: none,
                    tmblpin: unnone
                });

                remove(ref(database, databasepin+myNamesx+"HighlightPin"));

            });

            $('html').on('click','#tmblDelete',function() {
              $(this).parent('div.deletehighlightz').find("#kotakdeletercrd").fadeIn(300);
              $(this).parent('div.deletehighlightz').find("#overlaydelete").show();
            });

            $('html').on('click','.canceldeletercrd',function() {
              $(this).parent('div.kotakdeletercrd').hide();
              $(this).parent('div.kotakdeletercrd').parent('div.deletehighlightz').find("#overlaydelete").hide();
            });

            $('html').on('click','#deleteinfo',function() {  
              $(this).parent('div.kotakdeletercrd').parent('div.deletehighlightz').fadeOut(300);
              var databasepin = ptsft + "/HighlightPin/";
              var databasehighlight = ptsft + "/Highlight/";
              var myNamez = $(this).val();
              remove(ref(database, databasehighlight+myNamez));
              remove(ref(database, databasepin+myNamez+"HighlightPin"));
            });

        });

        onChildRemoved(ref(database, databasehighlight), (snapshot) => {

            $(snapshot.val().idlivehapus).remove();

        });

        onChildAdded(ref(database, databasepin), (snapshot) => {

            var bentukbutton1 = document.getElementById('bentukbutton1');
            var bentukbutton2 = document.getElementById('bentukbutton2');

            $(".scrollpin").prepend('<li id="'+ snapshot.val().myNamesxz +'" class="list-itempin" style="background:'+ snapshot.val().lingkaranwarna +'; animation: elastic-spin 6s infinite ease;"><img class="borderlistzpin" id="borderlistzpin" src="'+ snapshot.val().linkimg +'"/><input type="text" id="hapuspin" style="display:none"></li>');
            
            $('.scrollpin').show();

            $(".borderlistzpin").css('border-radius', bentukbutton1.value );
            $(".list-itempin").css('border-radius', bentukbutton2.value );
  
        });

        onChildRemoved(ref(database, databasepin), (snapshot) => {

            $(snapshot.val().myNamesx).remove();

        });

        onChildAdded(ref(database, databaseMenuDentist), (snapshot) => {

            $('#kotakdrgjadwal').show();
            $('#silahkan').css('height', '80px');

            document.getElementById('nomordentist').value = snapshot.val().jumlahnomordentist;

            $(".scrolldrg").append('<li id="'+ snapshot.val().dentisthapuss +'"  class="list-itemdrg" value="'+ snapshot.val().dentisthapushastaggz +'" ><div class="ktkdrg"><div class="gmbrdrg"></div><div>'+ snapshot.val().namadentist +'</div></div></li>');

            $("#editdentist").append('<div id="maindentist" class="maindentist" ><div id="list-itemdentistedit" class="list-itemdentistedit"><div class="ktkdentistedit"><div class="gmbrdentistedit"></div><input type="text" value="'+ snapshot.val().namadentist +'" class="denttzedit" readonly></div></div><button value="' + snapshot.val().nomordentist +"DentistPhoto" +'" id="hapusdentist">hapus</button></div>');

            $('#applyDentists').show();
            $('.loadingDentist').hide();

            $("#pagedentist").append('<div id="'+ snapshot.val().dentisthapussz +'" class="blokdentist"><div class="titledentist" id="titledentist">'+ snapshot.val().namadentist +'</div><div class="blokimagedentist" style="background-image:url('+ snapshot.val().ImgBGUrl +');"></div><div class="flexdentist"></div><div class="flexpend"><div class="flexlogopend">flex</div><textarea class="bloknamadentist ifmore" id="pendidikandesk" readonly>'+ snapshot.val().pendidikan +'</textarea></div><div class="flexpraktek"><div class="flexlogopraktek">flex</div><textarea class="bloknamadentist" readonly>'+ snapshot.val().praktek +'</textarea></div></div>');

            $('#pagedentist').each(function(){
                $(this).find('.titledentist').each(function(i) {
                    i++;
                    $('#titlebuttoninfodrg').text(i+' info');
                });
            });

            $('.ifmore').show(function() {
                var pendidikandesk = $(this).text();
                if(pendidikandesk.length > 26) {
                    $(this).css('margin-bottom', '7px');
                }
            });

            $(".overlayjamdokter").append('<button class="jawabanjamdokter" value="'+ snapshot.val().namadentist +'">'+ snapshot.val().namadentist +'</button>');  

            $('html').on('click','.jawabanjamdokter',function() {
                var jawabanjamdokter = $(this).val();
                $('.jawabanjamsdokter').text(jawabanjamdokter);
                $('#jawabanjamssdokter').trigger('click');
                $('#jawabanjamssdokter').val(jawabanjamdokter);
                $('.overlayjamdokter').hide();
            });

            var inputcolorzz = document.getElementById('inputcolorzz');

            $(".titledentist").css('background-color', inputcolorzz.value );

            $('html').on('click', '.list-itemdrg' ,function() {  
                $("#tabel1z").hide();
                $(".cancelmenuss").show();
                $(".kotakcancel").hide();
                $(".reservasi").hide();
                $(".setelahmenu").hide();
                $("#pagescaling").hide();
                $("#pagetambal").hide();
                $("#pagebedah").hide();
                $("#pagebehel").hide();
                $("#pagegitur").hide();
                $("#pagebleaching").hide();
                $("#pageveneer").hide();
                $("#pagelainnya").hide();
                $("#pagereservasi").hide();
                $("#pagereservasi").hide();
                $(".tambahanreservasi").hide();
                $("#canceldentist").show();
                $(".judulmenu").addClass('animatedzz').show();
                $("#pagedentist").addClass('animatedzz').show();
                $("html, body").animate({ scrollTop: $($(this).attr('value')).offset().top-300 }, 600);
                var z = document.querySelector(".titlebuttondrg").innerHTML; 
                document.querySelector(".cancelmenuss").innerHTML = z; 
                bloknamadentist();
                function bloknamadentist(){
                    var text = $('.bloknamadentist');

                    text.each(function(){
                        $(this).attr('rows',1);
                        resize($(this));
                    });

                    text.on('click', function(){
                        resize($(this));
                    });
                    
                    function resize ($text) {
                        $text.css('height', 'auto');
                        $text.css('height', $text[0].scrollHeight+'px');
                    }
                }

                var targetOffset = $($("#listdoctor").attr('value')).offset().top - 300;

                $("html, body").stop().animate({ scrollTop: targetOffset }, 600);

            });

            $('html').on('click','#hapusdentist',function() {  
              $(this).parent('div.maindentist').fadeOut(300);
              var databaseMenuDentist = ptsft + "/Menu/dentist/";
              var myNamez = $(this).val();
              remove(ref(database, databaseMenuDentist+myNamez));
            });

            $(".list-itemdrg").css('border-radius', bentukbutton3.value );

            bloknamadentist();
            function bloknamadentist(){
                var text = $('.bloknamadentist');

                text.each(function(){
                    $(this).attr('rows',1);
                    resize($(this));
                });

                text.on('click', function(){
                    resize($(this));
                });
                
                function resize ($text) {
                    $text.css('height', 'auto');
                    $text.css('height', $text[0].scrollHeight+'px');
                }
            }
  
        });

        onChildRemoved(ref(database, databaseMenuDentist), (snapshot) => {

            $(snapshot.val().dentisthapushastagg).remove();
            $(snapshot.val().dentisthapushastaggz).remove();

        });

        onChildAdded(ref(database, databasejadwal), (snapshot) => {

            var nomorjadwal = document.getElementById('nomorjadwal');
  
            nomorjadwal.value = snapshot.val().jumlahnomorjadwal ;

            document.querySelector('.editjadwal').style.display = "block";

            $(".scrolljadwal").append('<li id="'+ snapshot.val().jadwalhapus +'" class="list-itemjadwal"><div class="ktkjadwal"><div class="gmbrjadwal"></div><div class="hariz">'+ snapshot.val().hasilhari +'</div><div class="jamz">'+ snapshot.val().hasiljam +'</div></div></li>');

            $(".editjadwal").append('<div id="mainjadwal" class="mainjadwal" ><div id="list-itemjadwaledit" class="list-itemjadwaledit"><div class="ktkjadwaledit"><div class="gmbrjadwaledit"></div><div class="harizedit" id="harizedit">'+ snapshot.val().hasilhari +'</div><div class="jamzedit">'+ snapshot.val().hasiljam +'</div></div></div><button value="' + snapshot.val().nomorjadwal +"Jadwal" +'" id="hapusjadwal">hapus</button></div>');

            $('html').on('click','#hapusjadwal',function() {  
              $(this).parent('div.mainjadwal').fadeOut(300);
              var databasejadwal = ptsft + "/Jadwal/";
              var myNamez = $(this).val();
              remove(ref(database, databasejadwal+myNamez));
            });

            $(".list-itemjadwal").css('border-radius', bentukbutton3.value );

            var hasilharinich = document.getElementById('hasilharinich');
  
            hasilharinich.value = snapshot.val().hasilhari ;

            if (hasilharinich.value == "senin" ) {

                var senin = "Senin "
                 
                $("#time-seninz").append('<button class="jawabanjam" id="jawabanjamsenin" value="'+ senin + snapshot.val().hasiljam + '">'+ senin + snapshot.val().hasiljam + '</button>');  

            }

            if (hasilharinich.value == "selasa" ) {

                var selasa = "Selasa "
                 
                $("#time-selasaz").append('<button class="jawabanjam" id="jawabanjamselasa" value="'+ selasa + snapshot.val().hasiljam + '">'+ selasa + snapshot.val().hasiljam + '</button>');  

            }

            if (hasilharinich.value == "rabu" ) {

                var rabu = "Rabu "
                 
                $("#time-rabuz").append('<button class="jawabanjam" id="jawabanjamrabu" value="'+ rabu + snapshot.val().hasiljam + '">'+ rabu + snapshot.val().hasiljam + '</button>');  

            }

            if (hasilharinich.value == "kamis" ) {

                var kamis = "Kamis "
                 
                $("#time-kamisz").append('<button class="jawabanjam" id="jawabanjamkamis" value="'+ kamis + snapshot.val().hasiljam + '">'+ kamis + snapshot.val().hasiljam + '</button>');  

            }

            if (hasilharinich.value == "jumat" ) {

                var jumat = "Jumat "
                 
                $("#time-jumatz").append('<button class="jawabanjam" id="jawabanjamjumat" value="'+ jumat + snapshot.val().hasiljam + '">'+ jumat + snapshot.val().hasiljam + '</button>');  

            }

            if (hasilharinich.value == "sabtu" ) {

                var sabtu = "Sabtu "
                 
                $("#time-sabtuz").append('<button class="jawabanjam" id="jawabanjamsabtu" value="'+ sabtu + snapshot.val().hasiljam + '">'+ sabtu + snapshot.val().hasiljam + '</button>');  

            }

            if (hasilharinich.value == "minggu" ) {

                var minggu = "Minggu "
                 
                $("#time-mingguz").append('<button class="jawabanjam" id="jawabanjamminggu" value="'+ minggu + snapshot.val().hasiljam + '">'+ minggu + snapshot.val().hasiljam + '</button>');  

            }

            $('html').on('click','#jawabanjamsenin',function() {
                var jawabanjams = $(this).val();
                document.getElementById('jawabanjamss').value = jawabanjams;
                $('.jawabanjams').text(jawabanjams);
                $('.overlayjam').hide();
                $('#jawabanjamss').trigger('click');
            });

            $('html').on('click','#jawabanjamselasa',function() {
                var jawabanjams = $(this).val();
                document.getElementById('jawabanjamss').value = jawabanjams;
                $('.jawabanjams').text(jawabanjams);
                $('.overlayjam').hide();
                $('#jawabanjamss').trigger('click');
            });
  
            $('html').on('click','#jawabanjamrabu',function() {
                var jawabanjams = $(this).val();
                document.getElementById('jawabanjamss').value = jawabanjams;
                $('.jawabanjams').text(jawabanjams);
                $('.overlayjam').hide();
                $('#jawabanjamss').trigger('click');
            });
  
            $('html').on('click','#jawabanjamkamis',function() {
                var jawabanjams = $(this).val();
                document.getElementById('jawabanjamss').value = jawabanjams;
                $('.jawabanjams').text(jawabanjams);
                $('.overlayjam').hide();
                $('#jawabanjamss').trigger('click');
            });

            $('html').on('click','#jawabanjamjumat',function() {
                var jawabanjams = $(this).val();
                document.getElementById('jawabanjamss').value = jawabanjams;
                $('.jawabanjams').text(jawabanjams);
                $('.overlayjam').hide();
                $('#jawabanjamss').trigger('click');
            });
  
            $('html').on('click','#jawabanjamsabtu',function() {
                var jawabanjams = $(this).val();
                document.getElementById('jawabanjamss').value = jawabanjams;
                $('.jawabanjams').text(jawabanjams);
                $('.overlayjam').hide();
                $('#jawabanjamss').trigger('click');
            });
  
            $('html').on('click','#jawabanjamminggu',function() {
                var jawabanjams = $(this).val();
                document.getElementById('jawabanjamss').value = jawabanjams;
                $('.jawabanjams').text(jawabanjams);
                $('.overlayjam').hide();
                $('#jawabanjamss').trigger('click');
            });
  
        });

        onChildRemoved(ref(database, databasejadwal), (snapshot) => {

            $(snapshot.val().jadwalhapushastag).remove();

        });

        onChildAdded(ref(database, databaselibur), (snapshot) => {

            document.getElementById('updatelibur').style.display = snapshot.val().none;
            document.getElementById('resetlibur').style.display = snapshot.val().show;
            var truez = snapshot.val().truez;
            $("#checkboxsenin").prop("disabled", truez);
            $("#checkboxselasa").prop("disabled", truez);
            $("#checkboxrabu").prop("disabled", truez);
            $("#checkboxkamis").prop("disabled", truez);
            $("#checkboxjumat").prop("disabled", truez);
            $("#checkboxsabtu").prop("disabled", truez);
            $("#checkboxminggu").prop("disabled", truez);

            document.getElementById('cutilibur').value = snapshot.val().cutilibur;
            document.getElementById('inputsenin').value = snapshot.val().inputsenin;
            document.getElementById('inputselasa').value = snapshot.val().inputselasa;
            document.getElementById('inputrabu').value = snapshot.val().inputrabu;
            document.getElementById('inputkamis').value = snapshot.val().inputkamis;
            document.getElementById('inputjumat').value = snapshot.val().inputjumat;
            document.getElementById('inputsabtu').value = snapshot.val().inputsabtu;
            document.getElementById('inputminggu').value = snapshot.val().inputminggu;

            var cutilibur = snapshot.val().cutilibur;

            var nowTemp = new Date();

            var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

            var checkin = $('#jawabanjadwal').datepicker({

                format: "dd M yyyy",

                daysOfWeekDisabled: cutilibur,

                beforeShowDay: function(date) {
                    return date.valueOf() >= now.valueOf();
                },

                autoclose: false

            }).on( "change", function() {
                $('#reservasi1jadwal').css('outline', 'none');
                var date = $(this).datepicker('getDate');
                    var day = date.getDay();
                    $('.jawabanjams').prop('selectedIndex',0);

                    if (day === 1) {

                        $("#time-senin").show();
                        $("#time-senindokter").show();
                        $("#time-selasa").hide();
                        $("#time-selasadokter").hide();
                        $("#time-rabu").hide();
                        $("#time-rabudokter").hide();
                        $("#time-kamis").hide();
                        $("#time-kamisdokter").hide();
                        $("#time-jumat").hide();
                        $("#time-jumatdokter").hide();
                        $("#time-sabtu").hide();
                        $("#time-sabtudokter").hide();
                        $("#time-minggu").hide();
                        $("#time-minggudokter").hide();
                        $('.jawabanjams').text('pilih waktu reservasi');

                    };
            
                    if (day === 2) {

                        $("#time-senin").hide();
                        $("#time-senindokter").hide();
                        $("#time-selasa").show();
                        $("#time-selasadokter").show();
                        $("#time-rabu").hide();
                        $("#time-rabudokter").hide();
                        $("#time-kamis").hide();
                        $("#time-kamisdokter").hide();
                        $("#time-jumat").hide();
                        $("#time-jumatdokter").hide();
                        $("#time-sabtu").hide();
                        $("#time-sabtudokter").hide();
                        $("#time-minggu").hide();
                        $("#time-minggudokter").hide();
                        $('.jawabanjams').text('pilih waktu reservasi');

                    };

                    if (day === 3) {

                        $("#time-senin").hide();
                        $("#time-senindokter").hide();
                        $("#time-selasa").hide();
                        $("#time-selasadokter").hide();
                        $("#time-rabu").show();
                        $("#time-rabudokter").show();
                        $("#time-kamis").hide();
                        $("#time-kamisdokter").hide();
                        $("#time-jumat").hide();
                        $("#time-jumatdokter").hide();
                        $("#time-sabtu").hide();
                        $("#time-sabtudokter").hide();
                        $("#time-minggu").hide();
                        $("#time-minggudokter").hide();
                        $('.jawabanjams').text('pilih waktu reservasi');

                    };

                    if (day === 4) {

                        $("#time-senin").hide();
                        $("#time-senindokter").hide();
                        $("#time-selasa").hide();
                        $("#time-selasadokter").hide();
                        $("#time-rabu").hide();
                        $("#time-rabudokter").hide();
                        $("#time-kamis").show();
                        $("#time-kamisdokter").show();
                        $("#time-jumat").hide();
                        $("#time-jumatdokter").hide();
                        $("#time-sabtu").hide();
                        $("#time-sabtudokter").hide();
                        $("#time-minggu").hide();
                        $("#time-minggudokter").hide();
                        $('.jawabanjams').text('pilih waktu reservasi');

                    };
                
                    if (day === 5) {

                        $("#time-senin").hide();
                        $("#time-senindokter").hide();
                        $("#time-selasa").hide();
                        $("#time-selasadokter").hide();
                        $("#time-rabu").hide();
                        $("#time-rabudokter").hide();
                        $("#time-kamis").hide();
                        $("#time-kamisdokter").hide();
                        $("#time-jumat").show();
                        $("#time-jumatdokter").show();
                        $("#time-sabtu").hide();
                        $("#time-sabtudokter").hide();
                        $("#time-minggu").hide();
                        $("#time-minggudokter").hide();
                        $('.jawabanjams').text('pilih waktu reservasi');

                    };

                    if (day === 6) {

                        $("#time-senin").hide();
                        $("#time-senindokter").hide();
                        $("#time-selasa").hide();
                        $("#time-selasadokter").hide();
                        $("#time-rabu").hide();
                        $("#time-rabudokter").hide();
                        $("#time-kamis").hide();
                        $("#time-kamisdokter").hide();
                        $("#time-jumat").hide();
                        $("#time-jumatdokter").hide();
                        $("#time-sabtu").show();
                        $("#time-sabtudokter").show();
                        $("#time-minggu").hide();
                        $("#time-minggudokter").hide();
                        $('.jawabanjams').text('pilih waktu reservasi');

                    };

                    if (day === 0) {

                        $("#time-senin").hide();
                        $("#time-senindokter").hide();
                        $("#time-selasa").hide();
                        $("#time-selasadokter").hide();
                        $("#time-rabu").hide();
                        $("#time-rabudokter").hide();
                        $("#time-kamis").hide();
                        $("#time-kamisdokter").hide();
                        $("#time-jumat").hide();
                        $("#time-jumatdokter").hide();
                        $("#time-sabtu").hide();
                        $("#time-sabtudokter").hide();
                        $("#time-minggu").show();
                        $("#time-minggudokter").show();
                        $('.jawabanjams').text('pilih waktu reservasi');

                    };
            });

            if (inputsenin.value == "libur" ) {
                
                document.getElementById('checkboxsenin').checked = true ;
                $("#checkboxsenin").prop("disabled", true);

            }

            if (inputselasa.value == "libur" ) {
                
                document.getElementById('checkboxselasa').checked = true ;
                $("#checkboxselasa").prop("disabled", true);

            }

            if (inputrabu.value == "libur" ) {
                
                document.getElementById('checkboxrabu').checked = true ;
                $("#checkboxrabu").prop("disabled", true);

            }

            if (inputkamis.value == "libur" ) {
                
                document.getElementById('checkboxkamis').checked = true ;
                $("#checkboxkamis").prop("disabled", true);

            }

            if (inputjumat.value == "libur" ) {
                
                document.getElementById('checkboxjumat').checked = true ;
                $("#checkboxjumat").prop("disabled", true);

            }

            if (inputsabtu.value == "libur" ) {
                
                document.getElementById('checkboxsabtu').checked = true ;
                $("#checkboxsabtu").prop("disabled", true);

            }

            if (inputminggu.value == "libur" ) {
                
                document.getElementById('checkboxminggu').checked = true ;
                $("#checkboxminggu").prop("disabled", true);

            }

            $('html').on('click','#resetlibur',function() {
                var username = document.getElementById('ubahusername').value;
                var databaseuname = ptsft;
                var databaselibur = ptsft + "/Libur/";
                var cutilibur = "";
                var liburpraktek = "liburpraktek";
                var inputsenin = "";
                var inputselasa = "";
                var inputrabu = "";
                var inputkamis = "";
                var inputjumat = "";
                var inputsabtu = "";
                var inputminggu = "";
                var none = "";
                var show = "none";
                var truez = "";

                update(ref(database, databaselibur+liburpraktek), {
                    cutilibur: cutilibur,
                    inputsenin: inputsenin,
                    inputselasa: inputselasa,
                    inputrabu: inputrabu,
                    inputkamis: inputkamis,
                    inputjumat: inputjumat,
                    inputsabtu: inputsabtu,
                    inputminggu: inputminggu,
                    none: none,
                    show: show,
                    truez: truez
                });

                $('#updatelibur').show();
                $('#resetlibur').hide();
                
            });

        });

        $("#disablepush").click(function() {
            var disablepush = document.getElementById('disablepush');
            var databasenotif = ptsft + "/Notif/";
            if (disablepush.checked == true) {
                set(ref(database, databasenotif+"DisablePush"), {
                    DisablePush: "aktif"
                });
            } else {
                remove(ref(database, databasenotif+"DisablePush"));
            }
        });

        var keepLoggedIncDbgst100395zz;
        
        onChildAdded(ref(database, databasenotif+"/Push/"), (snapshot) => {
            var inputannamapasienzz = snapshot.val().namapasienpushnotif;
            var decryptednamapasienzz = CryptoJS.AES.decrypt(inputannamapasienzz, encryptionKey);
            var disablepush = document.getElementById('disablepush');
            
            function pushnotification() {
                var namapasienzz = decryptednamapasienzz.toString(CryptoJS.enc.Utf8);
            
                if ('serviceWorker' in navigator) {
                    navigator.serviceWorker.ready.then((registration) => {
                        registration.showNotification('Reservasi Baru!', {
                            body: namapasienzz + ', baru saja mengirimkan reservasi',
                            icon: 'https://lh3.googleusercontent.com/pw/ADCreHeMyQNLrlCLBwq2ZjmyQWPN3PcPRTs2BYwAd95bSNoA8XKeTH1UXhthvd1rwsBnkoGLnMyehKpe0SjFku3EEhERwA-mvAXJKpnulZVq3UdG_KDawYI=w2400',
                            badge: 'https://lh3.googleusercontent.com/pw/ADCreHf-YBEYd1qUrmGBkV5inxbzXHiCaFLT1YQ_0ssGTMpJkFsYGeUyZ_iyoCc-C1C7_qc01lNFM8m0MekdSj3cEp8Iywi5C2W7Nk_1y79VLu6MI6mBhgk=s41-p-k',
                            data: {
                                url: 'https://caredible.net/'+ptsft
                            }
                        });
                    });
                }
            }
            
            if (keepLoggedIncDbgst100395zz == "yes" & disablepush.checked == false) {
                pushnotification();
            }
        
            $('#orderreservasitools').click(function(){
                var databasenotif = ptsft + "/Notif/";
                remove(ref(database, databasenotif+"/Push/"));
            });
        });
        
        onChildAdded(ref(database, databasenotif+"DisablePush"), (snapshot) => {

            document.getElementById('disablepush').checked = true;
  
        });

        onChildAdded(ref(database, databasenotif+"/Anotif/"), (snapshot) => {

            $('#circlenotif').show();

            document.getElementById('nomorreservasi').value = snapshot.val().jumlahnomorreservasi;
            document.getElementById('nomorreservasiz').value = snapshot.val().jumlahnomorzreservasi
  
        });  

        onChildAdded(ref(database, databasenotif), (snapshot) => {

            document.getElementById('circlenotif').style.display = snapshot.val().circlenotif;

            $("#orderreservasitools").click(function() {
                var databasenotif = ptsft + "/Notif/";
                update(ref(database, databasenotif+"CircleNotif"), {
                    circlenotif: "none"
                });
            });

            var emptyiconkotakInfo = document.getElementById('emptyiconkotakInfo');
            var emptyiconkotakInfoDone = document.getElementById('emptyiconkotakInfoDone');

            $("#hapusnotif").click(function() {
                if (emptyiconkotakInfo.style.display == "block" & emptyiconkotakInfoDone.style.display == "block") {
                    var databasenotif = ptsft + "/Notif/";
                    remove(ref(database, databasenotif));
                } 
            }); 
  
        });  

        onChildAdded(ref(database, databasereservasi+"/Health/"), (snapshot) => {
            var inputankodepin = snapshot.val().kodepin;
            var decryptedkodepin = CryptoJS.AES.decrypt(inputankodepin, encryptionKey);
        });

        function databasereservasiHealth() {
            onChildAdded(ref(database, databasereservasi+"/Health/"), (snapshot) => {

                var inputannamapasien = snapshot.val().jawabannamapasien;
                var decryptednamapasien = CryptoJS.AES.decrypt(inputannamapasien, encryptionKey);
                var inputanalamat = snapshot.val().jawabanalamat;
                var decryptedalamat = CryptoJS.AES.decrypt(inputanalamat, encryptionKey);
                var inputanjeniskelamin = snapshot.val().jawabanjeniskelamin;
                var decryptedjeniskelamin = CryptoJS.AES.decrypt(inputanjeniskelamin, encryptionKey);
                var inputantanggallahir = snapshot.val().jawabantanggallahir;
                var decryptedtanggallahir = CryptoJS.AES.decrypt(inputantanggallahir, encryptionKey);
                var inputanumur = snapshot.val().jawabanumur;
                var decryptedumur = CryptoJS.AES.decrypt(inputanumur, encryptionKey);
                var inputanhp = snapshot.val().jawabanhp;
                var decryptedhp = CryptoJS.AES.decrypt(inputanhp, encryptionKey);
                var inputankeluhan = snapshot.val().jawabankeluhan;
                var inputanalergi = snapshot.val().jawabanalergi;
                var decryptedkeluhan = CryptoJS.AES.decrypt(inputankeluhan, encryptionKey);
                var decryptedalergi = CryptoJS.AES.decrypt(inputanalergi, encryptionKey);
                var inputankodepin = snapshot.val().kodepin;
                var decryptedkodepin = CryptoJS.AES.decrypt(inputankodepin, encryptionKey);
                var inputancodedelete = snapshot.val().codedelete;
                var decryptedcodedelete = CryptoJS.AES.decrypt(inputancodedelete, encryptionKey);

                document.getElementById('emptyiconkotakInfo').style.display = "none";

                var kotakInfo = document.querySelector('#kotakInfo');

                        function ctnInfo () {
                            var ctnInfo = document.createElement("div");
                            ctnInfo.className = 'ctnInfo';
                            ctnInfo.id = snapshot.val().nomorreservasi+'ctnInfo'+"New";
                            return ctnInfo;
                        }

                    kotakInfo.prepend(ctnInfo());

                var ctnInfo = document.querySelector('.ctnInfo');

                        function infoNew () {
                            var infoNew = document.createElement("div");
                            infoNew.id = 'infoNew';
                            infoNew.innerText = 'New';
                            return infoNew;
                        }

                    ctnInfo.prepend(infoNew());

                        function judulreservasi () {
                            var judulreservasi = document.createElement("input");
                            judulreservasi.type = "text";
                            judulreservasi.className = 'judulreservasi';
                            judulreservasi.id = 'judulreservasi';
                            judulreservasi.value = snapshot.val().judulreservasi;
                            judulreservasi.style.display = "none";
                            return judulreservasi;
                        }

                    ctnInfo.append(judulreservasi());

                        function isilahjudul () {
                            var isilahjudul = document.createElement("div");
                            isilahjudul.className = 'isilahjudul';
                            isilahjudul.id = 'isilahjudul';
                            isilahjudul.innerText = snapshot.val().judulreservasi;
                            return isilahjudul;
                        }

                    ctnInfo.append(isilahjudul());

                        function ktkisilahjawabannamapasien () {
                            var ktkisilahjawabannamapasien = document.createElement("div");
                            ktkisilahjawabannamapasien.className = 'ktkisilah';
                            ktkisilahjawabannamapasien.id = 'ktkisilahjawabannamapasien';
                            return ktkisilahjawabannamapasien;
                        }

                    ctnInfo.append(ktkisilahjawabannamapasien());

                var ktkisilahjawabannamapasien = document.querySelector('#ktkisilahjawabannamapasien');

                        function gmbrisilahjawabannamapasien () {
                            var gmbrisilahjawabannamapasien = document.createElement("div");
                            gmbrisilahjawabannamapasien.className = 'gmbrisilah';
                            gmbrisilahjawabannamapasien.id = 'gmbrisilahjawabannamapasien';
                            gmbrisilahjawabannamapasien.innerText = 'flex';
                            return gmbrisilahjawabannamapasien;
                        }

                    ktkisilahjawabannamapasien.append(gmbrisilahjawabannamapasien());

                        function isilahjawabannamapasien () {
                            var isilahjawabannamapasien = document.createElement("textarea");
                            isilahjawabannamapasien.className = 'isilah';
                            isilahjawabannamapasien.id = 'isilahjawabannamapasien';
                            isilahjawabannamapasien.value = decryptednamapasien.toString(CryptoJS.enc.Utf8);
                            isilahjawabannamapasien.readOnly = true;
                            if(isilahjawabannamapasien.value.length > 29) {
                                isilahjawabannamapasien.style.marginBottom = '20px';
                            } 
                            return isilahjawabannamapasien;
                        }

                    ktkisilahjawabannamapasien.append(isilahjawabannamapasien());

                        function inputdonenamapasien () {
                            var inputdonenamapasien = document.createElement("input");
                            inputdonenamapasien.type = "text";
                            inputdonenamapasien.id = 'inputdonenamapasien';
                            inputdonenamapasien.value = snapshot.val().jawabannamapasien;
                            inputdonenamapasien.style.display = "none";
                            return inputdonenamapasien;
                        }

                    ktkisilahjawabannamapasien.append(inputdonenamapasien());

                    function ktkisilahjawabanalamat () {
                            var ktkisilahjawabanalamat = document.createElement("div");
                            ktkisilahjawabanalamat.className = 'ktkisilah';
                            ktkisilahjawabanalamat.id = 'ktkisilahjawabanalamat';
                            return ktkisilahjawabanalamat;
                        }

                    ctnInfo.append(ktkisilahjawabanalamat());

                var ktkisilahjawabanalamat = document.querySelector('#ktkisilahjawabanalamat');

                        function gmbrisilahjawabanalamat () {
                            var gmbrisilahjawabanalamat = document.createElement("div");
                            gmbrisilahjawabanalamat.className = 'gmbrisilah';
                            gmbrisilahjawabanalamat.id = 'gmbrisilahjawabanalamat';
                            gmbrisilahjawabanalamat.innerText = 'flex';
                            return gmbrisilahjawabanalamat;
                        }

                    ktkisilahjawabanalamat.append(gmbrisilahjawabanalamat());

                        function isilahjawabanalamat () {
                            var isilahjawabanalamat = document.createElement("textarea");
                            isilahjawabanalamat.className = 'isilah';
                            isilahjawabanalamat.id = 'isilahjawabanalamat';
                            isilahjawabanalamat.value = decryptedalamat.toString(CryptoJS.enc.Utf8);
                            isilahjawabanalamat.readOnly = true;
                            if(isilahjawabanalamat.value.length > 29) {
                                isilahjawabanalamat.style.marginBottom = '20px';
                            } 
                            return isilahjawabanalamat;
                        }

                    ktkisilahjawabanalamat.append(isilahjawabanalamat());

                        function inputdonealamat () {
                            var inputdonealamat = document.createElement("input");
                            inputdonealamat.type = "text";
                            inputdonealamat.id = 'inputdonealamat';
                            inputdonealamat.value = snapshot.val().jawabanalamat;
                            inputdonealamat.style.display = "none";
                            return inputdonealamat;
                        }

                    ktkisilahjawabanalamat.append(inputdonealamat());

                    function ktkisilahjawabantanggallahir () {
                            var ktkisilahjawabantanggallahir = document.createElement("div");
                            ktkisilahjawabantanggallahir.className = 'ktkisilah';
                            ktkisilahjawabantanggallahir.id = 'ktkisilahjawabantanggallahir';
                            return ktkisilahjawabantanggallahir;
                        }

                    ctnInfo.append(ktkisilahjawabantanggallahir());

                var ktkisilahjawabantanggallahir = document.querySelector('#ktkisilahjawabantanggallahir');

                        function gmbrisilahjawabantanggallahir () {
                            var gmbrisilahjawabantanggallahir = document.createElement("div");
                            gmbrisilahjawabantanggallahir.className = 'gmbrisilah';
                            gmbrisilahjawabantanggallahir.id = 'gmbrisilahjawabantanggallahir';
                            gmbrisilahjawabantanggallahir.innerText = 'flex';
                            return gmbrisilahjawabantanggallahir;
                        }

                    ktkisilahjawabantanggallahir.append(gmbrisilahjawabantanggallahir());

                        function isilahjawabantanggallahir () {
                            var isilahjawabantanggallahir = document.createElement("textarea");
                            isilahjawabantanggallahir.className = 'isilah';
                            isilahjawabantanggallahir.id = 'isilahjawabantanggallahir';
                            isilahjawabantanggallahir.value = decryptedtanggallahir.toString(CryptoJS.enc.Utf8);
                            isilahjawabantanggallahir.readOnly = true;
                            return isilahjawabantanggallahir;
                        }

                    ktkisilahjawabantanggallahir.append(isilahjawabantanggallahir());

                        function inputdonetanggallahir () {
                            var inputdonetanggallahir = document.createElement("input");
                            inputdonetanggallahir.type = "text";
                            inputdonetanggallahir.id = 'inputdonetanggallahir';
                            inputdonetanggallahir.value = snapshot.val().jawabantanggallahir;
                            inputdonetanggallahir.style.display = "none";
                            return inputdonetanggallahir;
                        }

                    ktkisilahjawabantanggallahir.append(inputdonetanggallahir());

                        function ktkisilahjawabanjeniskelamin () {
                            var ktkisilahjawabanjeniskelamin = document.createElement("div");
                            ktkisilahjawabanjeniskelamin.className = 'ktkisilah';
                            ktkisilahjawabanjeniskelamin.id = 'ktkisilahjawabanjeniskelamin';
                            return ktkisilahjawabanjeniskelamin;
                        }

                    ctnInfo.append(ktkisilahjawabanjeniskelamin());

                var ktkisilahjawabanjeniskelamin = document.querySelector('#ktkisilahjawabanjeniskelamin');

                        function gmbrisilahjawabanjeniskelamin () {
                            var gmbrisilahjawabanjeniskelamin = document.createElement("div");
                            gmbrisilahjawabanjeniskelamin.className = 'gmbrisilah';
                            gmbrisilahjawabanjeniskelamin.id = 'gmbrisilahjawabanjeniskelamin';
                            gmbrisilahjawabanjeniskelamin.innerText = 'flex';
                            return gmbrisilahjawabanjeniskelamin;
                        }

                    ktkisilahjawabanjeniskelamin.append(gmbrisilahjawabanjeniskelamin());

                        function isilahjawabanjeniskelamin () {
                            var isilahjawabanjeniskelamin = document.createElement("textarea");
                            isilahjawabanjeniskelamin.className = 'isilah';
                            isilahjawabanjeniskelamin.id = 'isilahjawabanjeniskelamin';
                            isilahjawabanjeniskelamin.value = decryptedjeniskelamin.toString(CryptoJS.enc.Utf8);
                            isilahjawabanjeniskelamin.readOnly = true;
                            return isilahjawabanjeniskelamin;
                        }

                    ktkisilahjawabanjeniskelamin.append(isilahjawabanjeniskelamin());

                        function inputdonejeniskelamin () {
                            var inputdonejeniskelamin = document.createElement("input");
                            inputdonejeniskelamin.type = "text";
                            inputdonejeniskelamin.id = 'inputdonejeniskelamin';
                            inputdonejeniskelamin.value = snapshot.val().jawabanjeniskelamin;
                            inputdonejeniskelamin.style.display = "none";
                            return inputdonejeniskelamin;
                        }

                    ktkisilahjawabanjeniskelamin.append(inputdonejeniskelamin());

                    function ktkisilahjawabanumur () {
                            var ktkisilahjawabanumur = document.createElement("div");
                            ktkisilahjawabanumur.className = 'ktkisilah';
                            ktkisilahjawabanumur.id = 'ktkisilahjawabanumur';
                            return ktkisilahjawabanumur;
                        }

                    ctnInfo.append(ktkisilahjawabanumur());

                var ktkisilahjawabanumur = document.querySelector('#ktkisilahjawabanumur');

                        function gmbrisilahjawabanumur () {
                            var gmbrisilahjawabanumur = document.createElement("div");
                            gmbrisilahjawabanumur.className = 'gmbrisilah';
                            gmbrisilahjawabanumur.id = 'gmbrisilahjawabanumur';
                            gmbrisilahjawabanumur.innerText = 'flex';
                            return gmbrisilahjawabanumur;
                        }

                    ktkisilahjawabanumur.append(gmbrisilahjawabanumur());

                        function isilahjawabanumur () {
                            var isilahjawabanumur = document.createElement("textarea");
                            isilahjawabanumur.className = 'isilah';
                            isilahjawabanumur.id = 'isilahjawabanumur';
                            isilahjawabanumur.value = decryptedumur.toString(CryptoJS.enc.Utf8);
                            isilahjawabanumur.readOnly = true;
                            return isilahjawabanumur;
                        }

                    ktkisilahjawabanumur.append(isilahjawabanumur());

                        function isilahjawabanumurz () {
                            var isilahjawabanumurz = document.createElement("textarea");
                            isilahjawabanumurz.id = 'isilahjawabanumurz';
                            isilahjawabanumurz.value = decryptedumur.toString(CryptoJS.enc.Utf8);
                            isilahjawabanumurz.style.display = "none";
                            isilahjawabanumurz.readOnly = true;
                            return isilahjawabanumurz;
                        }

                    ktkisilahjawabanumur.append(isilahjawabanumurz());

                        function inputdoneumur () {
                            var inputdoneumur = document.createElement("input");
                            inputdoneumur.type = "text";
                            inputdoneumur.id = 'inputdoneumur';
                            inputdoneumur.value = snapshot.val().jawabanumur;
                            inputdoneumur.style.display = "none";
                            return inputdoneumur;
                        }

                    ktkisilahjawabanumur.append(inputdoneumur());

                    function ktkisilahjawabankeluhan () {
                            var ktkisilahjawabankeluhan = document.createElement("div");
                            ktkisilahjawabankeluhan.className = 'ktkisilah';
                            ktkisilahjawabankeluhan.id = 'ktkisilahjawabankeluhan';
                            return ktkisilahjawabankeluhan;
                        }

                    ctnInfo.append(ktkisilahjawabankeluhan());

                var ktkisilahjawabankeluhan = document.querySelector('#ktkisilahjawabankeluhan');

                        function gmbrisilahjawabankeluhan () {
                            var gmbrisilahjawabankeluhan = document.createElement("div");
                            gmbrisilahjawabankeluhan.className = 'gmbrisilah';
                            gmbrisilahjawabankeluhan.id = 'gmbrisilahjawabankeluhan';
                            gmbrisilahjawabankeluhan.innerText = 'flex';
                            return gmbrisilahjawabankeluhan;
                        }

                    ktkisilahjawabankeluhan.append(gmbrisilahjawabankeluhan());

                        function isilahjawabankeluhan () {
                            var isilahjawabankeluhan = document.createElement("textarea");
                            isilahjawabankeluhan.className = 'isilah';
                            isilahjawabankeluhan.id = 'isilahjawabankeluhan';
                            isilahjawabankeluhan.value = decryptedkeluhan.toString(CryptoJS.enc.Utf8);
                            isilahjawabankeluhan.readOnly = true;
                            if(isilahjawabankeluhan.value.length > 29) {
                                isilahjawabankeluhan.style.marginBottom = '20px';
                            } 
                            return isilahjawabankeluhan;
                        }

                    ktkisilahjawabankeluhan.append(isilahjawabankeluhan());

                        function inputdonekeluhan () {
                            var inputdonekeluhan = document.createElement("input");
                            inputdonekeluhan.type = "text";
                            inputdonekeluhan.id = 'inputdonekeluhan';
                            inputdonekeluhan.value = snapshot.val().jawabankeluhan;
                            inputdonekeluhan.style.display = "none";
                            return inputdonekeluhan;
                        }

                    ktkisilahjawabankeluhan.append(inputdonekeluhan());

                    function ktkisilahjawabanalergi () {
                            var ktkisilahjawabanalergi = document.createElement("div");
                            ktkisilahjawabanalergi.className = 'ktkisilah';
                            ktkisilahjawabanalergi.id = 'ktkisilahjawabanalergi';
                            return ktkisilahjawabanalergi;
                        }

                    ctnInfo.append(ktkisilahjawabanalergi());

                var ktkisilahjawabanalergi = document.querySelector('#ktkisilahjawabanalergi');

                        function gmbrisilahjawabanalergi () {
                            var gmbrisilahjawabanalergi = document.createElement("div");
                            gmbrisilahjawabanalergi.className = 'gmbrisilah';
                            gmbrisilahjawabanalergi.id = 'gmbrisilahjawabanalergi';
                            gmbrisilahjawabanalergi.innerText = 'flex';
                            return gmbrisilahjawabanalergi;
                        }

                    ktkisilahjawabanalergi.append(gmbrisilahjawabanalergi());

                        function isilahjawabanalergi () {
                            var isilahjawabanalergi = document.createElement("textarea");
                            isilahjawabanalergi.className = 'isilah';
                            isilahjawabanalergi.id = 'isilahjawabanalergi';
                            isilahjawabanalergi.value = decryptedalergi.toString(CryptoJS.enc.Utf8);
                            isilahjawabanalergi.readOnly = true;
                            if(isilahjawabanalergi.value.length > 29) {
                                isilahjawabanalergi.style.marginBottom = '20px';
                            } 
                            return isilahjawabanalergi;
                        }

                    ktkisilahjawabanalergi.append(isilahjawabanalergi());

                        function inputdonealergi () {
                            var inputdonealergi = document.createElement("input");
                            inputdonealergi.type = "text";
                            inputdonealergi.id = 'inputdonealergi';
                            inputdonealergi.value = snapshot.val().jawabanalergi;
                            inputdonealergi.style.display = "none";
                            return inputdonealergi;
                        }

                    ktkisilahjawabanalergi.append(inputdonealergi());

                    function ktkisilahjawabanjadwal () {
                            var ktkisilahjawabanjadwal = document.createElement("div");
                            ktkisilahjawabanjadwal.className = 'ktkisilah';
                            ktkisilahjawabanjadwal.id = 'ktkisilahjawabanjadwal';
                            return ktkisilahjawabanjadwal;
                        }

                    ctnInfo.append(ktkisilahjawabanjadwal());

                var ktkisilahjawabanjadwal = document.querySelector('#ktkisilahjawabanjadwal');

                        function gmbrisilahjawabanjadwal () {
                            var gmbrisilahjawabanjadwal = document.createElement("div");
                            gmbrisilahjawabanjadwal.className = 'gmbrisilah';
                            gmbrisilahjawabanjadwal.id = 'gmbrisilahjawabanjadwal';
                            gmbrisilahjawabanjadwal.innerText = 'flex';
                            return gmbrisilahjawabanjadwal;
                        }

                    ktkisilahjawabanjadwal.append(gmbrisilahjawabanjadwal());

                        function isilahjawabanjadwal () {
                            var isilahjawabanjadwal = document.createElement("textarea");
                            isilahjawabanjadwal.className = 'isilah';
                            isilahjawabanjadwal.id = 'isilahjawabanjadwal';
                            isilahjawabanjadwal.value = snapshot.val().jawabanjadwal;
                            isilahjawabanjadwal.readOnly = true;
                            return isilahjawabanjadwal;
                        }

                    ktkisilahjawabanjadwal.append(isilahjawabanjadwal());

                    function ktkisilahjawabanjam () {
                            var ktkisilahjawabanjam = document.createElement("div");
                            ktkisilahjawabanjam.className = 'ktkisilah';
                            ktkisilahjawabanjam.id = 'ktkisilahjawabanjam';
                            return ktkisilahjawabanjam;
                        }

                    ctnInfo.append(ktkisilahjawabanjam());

                var ktkisilahjawabanjam = document.querySelector('#ktkisilahjawabanjam');

                        function gmbrisilahjawabanjam () {
                            var gmbrisilahjawabanjam = document.createElement("div");
                            gmbrisilahjawabanjam.className = 'gmbrisilah';
                            gmbrisilahjawabanjam.id = 'gmbrisilahjawabanjam';
                            gmbrisilahjawabanjam.innerText = 'flex';
                            return gmbrisilahjawabanjam;
                        }

                    ktkisilahjawabanjam.append(gmbrisilahjawabanjam());

                        function isilahjawabanjam () {
                            var isilahjawabanjam = document.createElement("textarea");
                            isilahjawabanjam.className = 'isilah';
                            isilahjawabanjam.id = 'isilahjawabanjam';
                            isilahjawabanjam.value = snapshot.val().jawabanjam;
                            isilahjawabanjam.readOnly = true;
                            return isilahjawabanjam;
                        }

                    ktkisilahjawabanjam.append(isilahjawabanjam());

                        function ktkisilahjawabanjamdokter () {
                            var ktkisilahjawabanjamdokter = document.createElement("div");
                            ktkisilahjawabanjamdokter.className = 'ktkisilah';
                            ktkisilahjawabanjamdokter.id = 'ktkisilahjawabanjamdokter';
                            return ktkisilahjawabanjamdokter;
                        }

                    ctnInfo.append(ktkisilahjawabanjamdokter());

                var ktkisilahjawabanjamdokter = document.querySelector('#ktkisilahjawabanjamdokter');

                        function gmbrisilahjawabanjamdokter () {
                            var gmbrisilahjawabanjamdokter = document.createElement("div");
                            gmbrisilahjawabanjamdokter.className = 'gmbrisilah';
                            gmbrisilahjawabanjamdokter.id = 'gmbrisilahjawabanjamdokter';
                            gmbrisilahjawabanjamdokter.innerText = 'flex';
                            return gmbrisilahjawabanjamdokter;
                        }

                    ktkisilahjawabanjamdokter.append(gmbrisilahjawabanjamdokter());

                        function isilahjawabanjamdokter () {
                            var isilahjawabanjamdokter = document.createElement("textarea");
                            isilahjawabanjamdokter.className = 'isilah';
                            isilahjawabanjamdokter.id = 'isilahjawabanjamdokter';
                            isilahjawabanjamdokter.value = snapshot.val().jawabanjamdokter;
                            isilahjawabanjamdokter.readOnly = true;
                            if(isilahjawabanjamdokter.value.length > 29) {
                                isilahjawabanjamdokter.style.marginBottom = '20px';
                            } 
                            return isilahjawabanjamdokter;
                        }

                    ktkisilahjawabanjamdokter.append(isilahjawabanjamdokter());

                        function ktkisilahjawabanhp () {
                            var ktkisilahjawabanhp = document.createElement("div");
                            ktkisilahjawabanhp.className = 'ktkisilah';
                            ktkisilahjawabanhp.id = 'ktkisilahjawabanhp';
                            return ktkisilahjawabanhp;
                        }

                    ctnInfo.append(ktkisilahjawabanhp());

                var ktkisilahjawabanhp = document.querySelector('#ktkisilahjawabanhp');

                        function gmbrisilahjawabanhp () {
                            var gmbrisilahjawabanhp = document.createElement("div");
                            gmbrisilahjawabanhp.className = 'gmbrisilah';
                            gmbrisilahjawabanhp.id = 'gmbrisilahjawabanhp';
                            gmbrisilahjawabanhp.innerText = 'flex';
                            return gmbrisilahjawabanhp;
                        }

                    ktkisilahjawabanhp.append(gmbrisilahjawabanhp());

                        function isilahjawabanhp () {
                            var isilahjawabanhp = document.createElement("textarea");
                            isilahjawabanhp.className = 'isilah';
                            isilahjawabanhp.id = 'isilahjawabanhp';
                            isilahjawabanhp.value = decryptedhp.toString(CryptoJS.enc.Utf8);
                            isilahjawabanhp.readOnly = true;
                            return isilahjawabanhp;
                        }

                    ktkisilahjawabanhp.append(isilahjawabanhp());

                        function inputdonehp () {
                            var inputdonehp = document.createElement("input");
                            inputdonehp.type = "text";
                            inputdonehp.id = 'inputdonehp';
                            inputdonehp.value = snapshot.val().jawabanhp;
                            inputdonehp.style.display = "none";
                            return inputdonehp;
                        }

                    ktkisilahjawabanhp.append(inputdonehp());

                        function ktkhubungi () {
                            var ktkhubungi = document.createElement("div");
                            ktkhubungi.className = 'ktkisilah';
                            ktkhubungi.id = 'ktkhubungi';
                            ktkhubungi.style.marginBottom = "20px";
                            ktkhubungi.style.paddingLeft = "7px";
                            return ktkhubungi;
                        }

                    ctnInfo.append(ktkhubungi());

                var ktkhubungi = document.querySelector('#ktkhubungi');

                        function buttonhubungi () {
                            var buttonhubungi = document.createElement("a");
                            buttonhubungi.target = "_blank";
                            buttonhubungi.id = 'buttonhubungi';
                            buttonhubungi.href = "https://wa.me/"+decryptedhp.toString(CryptoJS.enc.Utf8);
                            buttonhubungi.style.borderRadius = "100px";
                            buttonhubungi.style.color = "white";
                            buttonhubungi.style.paddingLeft = "20px";
                            buttonhubungi.style.paddingRight = "20px";
                            buttonhubungi.style.paddingTop = "6px";
                            buttonhubungi.style.paddingBottom = "6px";
                            buttonhubungi.style.textAlign= "center";
                            buttonhubungi.style.fontSize = "11px";
                            buttonhubungi.style.fontWeight = "600";
                            buttonhubungi.style.height = "auto";
                            buttonhubungi.style.width = "auto";
                            buttonhubungi.style.fontFamily = "Poppins";
                            buttonhubungi.style.cursor = "pointer";
                            buttonhubungi.style.backgroundColor = "#2AB318";
                            buttonhubungi.style.textDecoration = "none";
                            buttonhubungi.innerText = "hubungi whatsapp";
                            return buttonhubungi;
                        }

                    ktkhubungi.append(buttonhubungi());        

                        function isilahImgReservasi () {
                            var isilahImgReservasi = document.createElement("input");
                            isilahImgReservasi.type = 'text';
                            isilahImgReservasi.id = 'isilahImgReservasi';
                            isilahImgReservasi.value = snapshot.val().ImgReservasi;
                            isilahImgReservasi.style.display = 'none';
                            isilahImgReservasi.readOnly = true;
                            return isilahImgReservasi;
                        }

                    ctnInfo.append(isilahImgReservasi());

                        function isilahName () {
                            var isilahName = document.createElement("input");
                            isilahName.type = 'text';
                            isilahName.id = 'isilahName';
                            isilahName.value = snapshot.val().ImageKeluhan;
                            isilahName.style.display = 'none';
                            isilahName.readOnly = true;
                            return isilahName;
                        }

                    ctnInfo.append(isilahName());

                        function ktkimgRcd () {
                            var ktkimgRcd = document.createElement("div");
                            ktkimgRcd.id = 'ktkimgRcd';
                            ktkimgRcd.className = 'ktkimgRcd';
                            return ktkimgRcd;
                        }

                    ctnInfo.append(ktkimgRcd());
                
                var ktkimgRcd = document.querySelector('#ktkimgRcd');

                        function imgRcd () {
                            var imgRcd = document.createElement("img");
                            imgRcd.id = 'imgRcd';
                            imgRcd.className = 'imgRcdclass';
                            imgRcd.src = snapshot.val().ImgReservasi;
                            return imgRcd;
                        }

                    ktkimgRcd.append(imgRcd());

                        function isilahWaktu () {
                            var isilahWaktu = document.createElement("input");
                            isilahWaktu.type = 'text';
                            isilahWaktu.id = 'isilahWaktu';
                            isilahWaktu.value = snapshot.val().waktu;
                            isilahWaktu.style.display = 'none';
                            isilahWaktu.readOnly = true;
                            return isilahWaktu;
                        }

                    ctnInfo.append(isilahWaktu());

                        function wkt () {
                            var wkt = document.createElement("div");
                            wkt.id = 'wkt';
                            wkt.className = 'wkt';
                            wkt.innerText = snapshot.val().waktu;
                            return wkt;
                        }

                    ctnInfo.append(wkt());

                        function pinreservasi () {
                            var pinreservasi = document.createElement("input");
                            pinreservasi.type = 'text';
                            pinreservasi.id = 'pinreservasi';
                            pinreservasi.className = 'pinreservasi';
                            pinreservasi.value = decryptedkodepin.toString(CryptoJS.enc.Utf8);
                            pinreservasi.readOnly = true;
                            return pinreservasi;
                        }

                    ctnInfo.append(pinreservasi());

                        function tmblDeletes () {
                            var tmblDeletes = document.createElement("input");
                            tmblDeletes.type = 'text';
                            tmblDeletes.id = 'tmblDeletes';
                            tmblDeletes.className = 'tmblDeletes';
                            tmblDeletes.value = snapshot.val().nomorreservasiz+decryptedkodepin.toString(CryptoJS.enc.Utf8);
                            tmblDeletes.innerText = 'tmblDeletes';
                            tmblDeletes.readOnly = true;
                            return tmblDeletes;
                        }

                    ctnInfo.append(tmblDeletes());

                        function overlayreservasiss () {
                            var overlayreservasiss = document.createElement("div");
                            overlayreservasiss.id = 'overlayreservasiss';
                            return overlayreservasiss;
                        }

                    ctnInfo.append(overlayreservasiss());

                        function kotakdeletereservasi () {
                            var kotakdeletereservasi = document.createElement("div");
                            kotakdeletereservasi.id = 'kotakdeletereservasi';
                            kotakdeletereservasi.className = 'kotakdeletereservasi';
                            return kotakdeletereservasi;
                        }

                    ctnInfo.append(kotakdeletereservasi());

                var kotakdeletereservasi = document.querySelector('#kotakdeletereservasi');  
                
                        function canceldeletereservasi () {
                            var canceldeletereservasi = document.createElement("div");
                            canceldeletereservasi.id = 'canceldeletereservasi';
                            canceldeletereservasi.className = 'canceldeletereservasi';
                            return canceldeletereservasi;
                        }

                    kotakdeletereservasi.append(canceldeletereservasi());

                        function deletereservasi () {
                            var deletereservasi = document.createElement("div");
                            deletereservasi.id = 'deletereservasi';
                            deletereservasi.className = 'deletereservasi';
                            deletereservasi.innerText = 'Delete Record';
                            return deletereservasi;
                        }

                    kotakdeletereservasi.append(deletereservasi());

                        function deletereservasitxt () {
                            var deletereservasitxt = document.createElement("div");
                            deletereservasitxt.id = 'deletereservasitxt';
                            deletereservasitxt.className = 'deletereservasitxt';
                            deletereservasitxt.innerText = 'are you sure to delete this record?';
                            return deletereservasitxt;
                        }

                    kotakdeletereservasi.append(deletereservasitxt());

                    function deleteinforeservasi () {
                        var deleteinforeservasi = document.createElement("input");
                        deleteinforeservasi.type = 'text';
                        deleteinforeservasi.id = 'deleteinforeservasi';
                        deleteinforeservasi.className = 'deleteinforeservasi';
                        deleteinforeservasi.value = decryptedcodedelete.toString(CryptoJS.enc.Utf8);
                        deleteinforeservasi.readOnly = true;
                        return deleteinforeservasi;
                    }

                kotakdeletereservasi.append(deleteinforeservasi());

                    function inputSelesai () {
                        var inputSelesai = document.createElement("input");
                        inputSelesai.type = 'text';
                        inputSelesai.id = 'selesaiz';
                        inputSelesai.className = 'inputSelesai';
                        inputSelesai.value = decryptedcodedelete.toString(CryptoJS.enc.Utf8);
                        inputSelesai.innerText = 'done';
                        inputSelesai.readOnly = true;
                        return inputSelesai;
                    }

                    ctnInfo.append(inputSelesai());

                        function ctNnomorreservasi () {
                            var ctNnomorreservasi = document.createElement("input");
                            ctNnomorreservasi.type = 'text';
                            ctNnomorreservasi.id = 'ctNnomorreservasi';
                            ctNnomorreservasi.value = snapshot.val().nomorreservasi;
                            ctNnomorreservasi.style.display = 'none';
                            ctNnomorreservasi.readOnly = true;
                            return ctNnomorreservasi;
                        }

                    ctnInfo.append(ctNnomorreservasi());

                        function kodepinInfo () {
                            var kodepinInfo = document.createElement("input");
                            kodepinInfo.type = 'text';
                            kodepinInfo.id = 'kodepinInfo';
                            kodepinInfo.value = decryptedkodepin.toString(CryptoJS.enc.Utf8);
                            kodepinInfo.style.display = 'none';
                            kodepinInfo.readOnly = true;
                            return kodepinInfo;
                        }

                    ctnInfo.append(kodepinInfo());

                        function inputdonekodepin () {
                            var inputdonekodepin = document.createElement("input");
                            inputdonekodepin.type = "text";
                            inputdonekodepin.id = 'inputdonekodepin';
                            inputdonekodepin.value = snapshot.val().kodepin;
                            inputdonekodepin.style.display = "none";
                            return inputdonekodepin;
                        }

                    ctnInfo.append(inputdonekodepin());

                        function inputcodedeletedone () {
                            var inputcodedeletedone = document.createElement("input");
                            inputcodedeletedone.type = "text";
                            inputcodedeletedone.id = 'inputcodedeletedone';
                            inputcodedeletedone.value = snapshot.val().codedelete;
                            inputcodedeletedone.style.display = "none";
                            return inputcodedeletedone;
                        }

                    ctnInfo.append(inputcodedeletedone());

                $('html').on('click','.inputSelesai',function() {
                
                    var myNamesx = $(this).val();
                    var done = "dones";
                    var name = $(this).parent('div.ctnInfo').find("#isilahName").val();
                    var username = document.getElementById('ubahusername').value;
                    var databasereservasi = ptsft + "/Reservasi/";
                    var databaseuname = ptsft;
                    var judulreservasi = $(this).parent('div.ctnInfo').find("#judulreservasi").val();
                    var jawabannamapasien = $(this).parent('div.ctnInfo').find("#inputdonenamapasien").val();
                    var jawabanalamat = $(this).parent('div.ctnInfo').find("#inputdonealamat").val();
                    var jawabanjeniskelamin = $(this).parent('div.ctnInfo').find("#inputdonejeniskelamin").val();
                    var jawabantanggallahir = $(this).parent('div.ctnInfo').find("#inputdonetanggallahir").val();
                    var jawabanjadwal = $(this).parent('div.ctnInfo').find("#isilahjawabanjadwal").val();
                    var jawabanumur = $(this).parent('div.ctnInfo').find("#inputdoneumur").val();
                    var jawabanhp = $(this).parent('div.ctnInfo').find("#inputdonehp").val();
                    var jawabankeluhan = $(this).parent('div.ctnInfo').find("#inputdonekeluhan").val();
                    var jawabanalergi = $(this).parent('div.ctnInfo').find("#inputdonealergi").val();
                    var jawabanjam = $(this).parent('div.ctnInfo').find("#isilahjawabanjam").val();
                    var jawabanjamdokter = $(this).parent('div.ctnInfo').find("#isilahjawabanjamdokter").val();
                    var waktu = $(this).parent('div.ctnInfo').find("#isilahWaktu").val();
                    var ImgReservasiDone = $(this).parent('div.ctnInfo').find("#isilahImgReservasi").val();
                    var nomorreservasi = $(this).parent('div.ctnInfo').find("#ctNnomorreservasi").val();
                    var kodepinInfo = $(this).parent('div.ctnInfo').find("#inputdonekodepin").val();
                    var inputcodedeletedone = $(this).parent('div.ctnInfo').find("#inputcodedeletedone").val();
                    
                    var isClicked = $(this).data('clicked');
                    if (!isClicked) {
                        push(ref(database, databasereservasi + "/Done/"), {
                            resultdone: done,
                            ImageKeluhanDone: name,
                            ImgReservasiDone: ImgReservasiDone,
                            nomorreservasiDone: nomorreservasi,
                            judulreservasi: judulreservasi,
                            jawabannamapasien: jawabannamapasien,
                            jawabanalamat: jawabanalamat,
                            jawabanjeniskelamin: jawabanjeniskelamin,
                            jawabantanggallahir: jawabantanggallahir,
                            jawabanjadwal: jawabanjadwal,
                            jawabanumur: jawabanumur,
                            jawabanhp: jawabanhp,
                            jawabankeluhan: jawabankeluhan,
                            jawabanalergi: jawabanalergi,
                            jawabanjam: jawabanjam,
                            jawabanjamdokter: jawabanjamdokter,
                            waktu: waktu,
                            kodepinInfoDone: kodepinInfo,
                            inputcodedeletedone: inputcodedeletedone
                        });
                        $(this).data('clicked', true);
                    }
                    
                    var databasereservasi = ptsft + "/Reservasi/";
                    var dbRef = ref(database, databasereservasi + "/Health/");
                    var inputcekreservasisszz = $(this).val(); 
                    get(dbRef).then((snapshot) => {
                        if (snapshot.exists()) {
                            snapshot.forEach((childSnapshot) => {
                                var SgnuPemgmDecrypt = childSnapshot.val().codedelete;
                                var decryptedSgnuPemgm = CryptoJS.AES.decrypt(SgnuPemgmDecrypt, encryptionKey);
                                var jawabanSgnuPemgm = decryptedSgnuPemgm.toString(CryptoJS.enc.Utf8);
                                            
                                if (inputcekreservasisszz == jawabanSgnuPemgm) {
                                    var childKey = childSnapshot.key;
                                    var childRef = ref(database, databasereservasi+"/Health/"+childKey);
                                    remove(childRef);
                                }
                            });
                        }
                    });

                    $(this).parent('div.ctnInfo').fadeOut(300);

                    if($('#kotakInfo').children(':visible').length == 0) {
                        document.getElementById('emptyiconkotakInfo').style.display = "block";
                    } 

                });

                $('html').on('click','#tmblDeletes',function() {
                    $(this).parent('div.ctnInfo').find("#kotakdeletereservasi").fadeIn(300);
                    $(this).parent('div.ctnInfo').find("#overlayreservasiss").show();
                });
    
                $('html').on('click','.canceldeletereservasi',function() {
                    $(this).parent('div.kotakdeletereservasi').hide();
                    $(this).parent('div.kotakdeletereservasi').parent('div.ctnInfo').find("#overlayreservasiss").hide();
                });
        
                $('html').on('click','#overlayreservasiss',function() {
                    $(this).parent('div.ctnInfo').find("#kotakdeletereservasi").hide();
                    $(this).parent('div.ctnInfo').find("#overlayreservasiss").hide();
                });
        
                $('html').on('click','#deleteinforeservasi',function() { 
                    $(this).parent('div.kotakdeletereservasi').parent('div.ctnInfo').fadeOut(300); 
                    var databasereservasi = ptsft + "/Reservasi/";
                    var dbRef = ref(database, databasereservasi + "/Health/");
                    var inputcekreservasisszz = $(this).val(); 
                    get(dbRef).then((snapshot) => {
                        if (snapshot.exists()) {
                            snapshot.forEach((childSnapshot) => {
                                var SgnuPemgmDecrypt = childSnapshot.val().codedelete;
                                var decryptedSgnuPemgm = CryptoJS.AES.decrypt(SgnuPemgmDecrypt, encryptionKey);
                                var jawabanSgnuPemgm = decryptedSgnuPemgm.toString(CryptoJS.enc.Utf8);
                                            
                                if (inputcekreservasisszz == jawabanSgnuPemgm) {
                                    var childKey = childSnapshot.key;
                                    var childRef = ref(database, databasereservasi+"/Health/"+childKey);
                                    remove(childRef);
                                }
                            });
                        }
                    });
                    if($('#kotakInfo').children(':visible').length == 0) {
                        document.getElementById('emptyiconkotakInfo').style.display = "block";
                        $('#hapusnotif').trigger('click');
                    } 
                });

                isilah();
                function isilah(){
                    var text = $('.isilah');

                    text.each(function(){
                        $(this).attr('rows',1);
                        resize($(this));
                    });

                    text.on('click', function(){
                        resize($(this));
                    });
                    
                    function resize ($text) {
                        $text.css('height', 'auto');
                        $text.css('height', $text[0].scrollHeight+'px');
                    }
                }

            });

            onChildRemoved(ref(database, databasereservasi+"/Health/"), (snapshot) => {

                var hapusreserv = "#"+snapshot.val().nomorreservasi+'ctnInfo'+"New";

                $(hapusreserv).remove();

                if($('#kotakInfo').children(':visible').length == 0) {
                    document.getElementById('emptyiconkotakInfo').style.display = "block";
                    $('#hapusnotif').trigger('click');
                } 

            });
        }

        onChildAdded(ref(database, databasereservasi+"/Done/"), (snapshot) => {
            var inputankodepindone = snapshot.val().kodepinInfoDone;
            var decryptedkodepindone = CryptoJS.AES.decrypt(inputankodepindone, encryptionKey);
        });

        function databasereservasiDone() {
            onChildAdded(ref(database, databasereservasi+"/Done/"), (snapshot) => {

                var inputannamapasiendone = snapshot.val().jawabannamapasien;
                var decryptednamapasiendone = CryptoJS.AES.decrypt(inputannamapasiendone, encryptionKey);
                var inputanalamatdone = snapshot.val().jawabanalamat;
                var decryptedalamatdone = CryptoJS.AES.decrypt(inputanalamatdone, encryptionKey);
                var inputanjeniskelamindone = snapshot.val().jawabanjeniskelamin;
                var decryptedjeniskelamindone = CryptoJS.AES.decrypt(inputanjeniskelamindone, encryptionKey);
                var inputantanggallahirdone = snapshot.val().jawabantanggallahir;
                var decryptedtanggallahirdone = CryptoJS.AES.decrypt(inputantanggallahirdone, encryptionKey);
                var inputanumurdone = snapshot.val().jawabanumur;
                var decryptedumurdone = CryptoJS.AES.decrypt(inputanumurdone, encryptionKey);
                var inputanhpdone = snapshot.val().jawabanhp;
                var decryptedhpdone = CryptoJS.AES.decrypt(inputanhpdone, encryptionKey);
                var inputankeluhandone = snapshot.val().jawabankeluhan;
                var decryptedkeluhandone = CryptoJS.AES.decrypt(inputankeluhandone, encryptionKey);
                var inputanalergidone = snapshot.val().jawabanalergi;
                var decryptedalergidone = CryptoJS.AES.decrypt(inputanalergidone, encryptionKey);
                var inputankodepindone = snapshot.val().kodepinInfoDone;
                var decryptedkodepindone = CryptoJS.AES.decrypt(inputankodepindone, encryptionKey);
                var inputcodedeletedone = snapshot.val().inputcodedeletedone;
                var decryptedcodedeletedone = CryptoJS.AES.decrypt(inputcodedeletedone, encryptionKey);

                document.getElementById('emptyiconkotakInfoDone').style.display = "none";

                var kotakInfoDone = document.querySelector('#kotakInfoDone');

                        function ctnInfoDone () {
                            var ctnInfoDone = document.createElement("div");
                            ctnInfoDone.className = 'ctnInfoDone';
                            ctnInfoDone.id = snapshot.val().nomorreservasiDone+'ctnInfo'+'Done';
                            return ctnInfoDone;
                        }

                    kotakInfoDone.prepend(ctnInfoDone());

                var ctnInfoDone = document.querySelector('.ctnInfoDone');

                        function infoNewDone () {
                            var infoNewDone = document.createElement("div");
                            infoNewDone.id = 'infoNewDone';
                            infoNewDone.className = 'infoNew';
                            infoNewDone.innerText = 'Done';
                            return infoNewDone;
                        }

                    ctnInfoDone.prepend(infoNewDone());

                        function judulreservasiDone () {
                            var judulreservasiDone = document.createElement("input");
                            judulreservasiDone.type = "text";
                            judulreservasiDone.className = 'judulreservasiDone';
                            judulreservasiDone.id = 'judulreservasiDone';
                            judulreservasiDone.value = snapshot.val().judulreservasi;
                            judulreservasiDone.style.display = "none";
                            return judulreservasiDone;
                        }

                    ctnInfoDone.append(judulreservasiDone());

                        function isilahjudulDone () {
                            var isilahjudulDone = document.createElement("div");
                            isilahjudulDone.className = 'isilahjudulDone';
                            isilahjudulDone.id = 'isilahjudulDone';
                            isilahjudulDone.innerText = snapshot.val().judulreservasi;
                            isilahjudulDone.style.color = "white";
                            return isilahjudulDone;
                        }

                    ctnInfoDone.append(isilahjudulDone());

                        function ktkisilahjawabannamapasienDone () {
                            var ktkisilahjawabannamapasienDone = document.createElement("div");
                            ktkisilahjawabannamapasienDone.className = 'ktkisilah';
                            ktkisilahjawabannamapasienDone.id = 'ktkisilahjawabannamapasienDone';
                            return ktkisilahjawabannamapasienDone;
                        }

                    ctnInfoDone.append(ktkisilahjawabannamapasienDone());

                var ktkisilahjawabannamapasienDone = document.querySelector('#ktkisilahjawabannamapasienDone');

                        function gmbrisilahjawabannamapasiendone () {
                            var gmbrisilahjawabannamapasiendone = document.createElement("div");
                            gmbrisilahjawabannamapasiendone.className = 'gmbrisilah';
                            gmbrisilahjawabannamapasiendone.id = 'gmbrisilahjawabannamapasiendone';
                            gmbrisilahjawabannamapasiendone.innerText = 'flex';
                            return gmbrisilahjawabannamapasiendone;
                        }

                    ktkisilahjawabannamapasienDone.append(gmbrisilahjawabannamapasiendone());

                        function isilahjawabannamapasienDone () {
                            var isilahjawabannamapasienDone = document.createElement("textarea");
                            isilahjawabannamapasienDone.className = 'isilahDone';
                            isilahjawabannamapasienDone.id = 'isilahjawabannamapasienDone';
                            isilahjawabannamapasienDone.value = decryptednamapasiendone.toString(CryptoJS.enc.Utf8);
                            isilahjawabannamapasienDone.readOnly = true;
                            if(isilahjawabannamapasienDone.value.length > 29) {
                                isilahjawabannamapasienDone.style.marginBottom = '20px';
                            } 
                            return isilahjawabannamapasienDone;
                        }

                    ktkisilahjawabannamapasienDone.append(isilahjawabannamapasienDone());

                    function ktkisilahjawabanalamatDone () {
                            var ktkisilahjawabanalamatDone = document.createElement("div");
                            ktkisilahjawabanalamatDone.className = 'ktkisilah';
                            ktkisilahjawabanalamatDone.id = 'ktkisilahjawabanalamatDone';
                            return ktkisilahjawabanalamatDone;
                        }

                    ctnInfoDone.append(ktkisilahjawabanalamatDone());

                var ktkisilahjawabanalamatDone = document.querySelector('#ktkisilahjawabanalamatDone');

                        function gmbrisilahjawabanalamatdone () {
                            var gmbrisilahjawabanalamatdone = document.createElement("div");
                            gmbrisilahjawabanalamatdone.className = 'gmbrisilah';
                            gmbrisilahjawabanalamatdone.id = 'gmbrisilahjawabanalamatdone';
                            gmbrisilahjawabanalamatdone.innerText = 'flex';
                            return gmbrisilahjawabanalamatdone;
                        }

                    ktkisilahjawabanalamatDone.append(gmbrisilahjawabanalamatdone());

                        function isilahjawabanalamatDone () {
                            var isilahjawabanalamatDone = document.createElement("textarea");
                            isilahjawabanalamatDone.className = 'isilahDone';
                            isilahjawabanalamatDone.id = 'isilahjawabanalamatDone';
                            isilahjawabanalamatDone.value = decryptedalamatdone.toString(CryptoJS.enc.Utf8);
                            isilahjawabanalamatDone.readOnly = true;
                            if(isilahjawabanalamatDone.value.length > 29) {
                                isilahjawabanalamatDone.style.marginBottom = '20px';
                            } 
                            return isilahjawabanalamatDone;
                        }

                    ktkisilahjawabanalamatDone.append(isilahjawabanalamatDone());

                    function ktkisilahjawabantanggallahirDone () {
                            var ktkisilahjawabantanggallahirDone = document.createElement("div");
                            ktkisilahjawabantanggallahirDone.className = 'ktkisilah';
                            ktkisilahjawabantanggallahirDone.id = 'ktkisilahjawabantanggallahirDone';
                            return ktkisilahjawabantanggallahirDone;
                        }

                    ctnInfoDone.append(ktkisilahjawabantanggallahirDone());

                var ktkisilahjawabantanggallahirDone = document.querySelector('#ktkisilahjawabantanggallahirDone');

                        function gmbrisilahjawabantanggallahirdone () {
                            var gmbrisilahjawabantanggallahirdone = document.createElement("div");
                            gmbrisilahjawabantanggallahirdone.className = 'gmbrisilah';
                            gmbrisilahjawabantanggallahirdone.id = 'gmbrisilahjawabantanggallahirdone';
                            gmbrisilahjawabantanggallahirdone.innerText = 'flex';
                            return gmbrisilahjawabantanggallahirdone;
                        }

                    ktkisilahjawabantanggallahirDone.append(gmbrisilahjawabantanggallahirdone());

                        function isilahjawabantanggallahirDone () {
                            var isilahjawabantanggallahirDone = document.createElement("textarea");
                            isilahjawabantanggallahirDone.className = 'isilahDone';
                            isilahjawabantanggallahirDone.id = 'isilahjawabantanggallahirDone';
                            isilahjawabantanggallahirDone.value = decryptedtanggallahirdone.toString(CryptoJS.enc.Utf8);
                            isilahjawabantanggallahirDone.readOnly = true;
                            return isilahjawabantanggallahirDone;
                        }

                    ktkisilahjawabantanggallahirDone.append(isilahjawabantanggallahirDone());

                        function ktkisilahjawabanjeniskelaminDone () {
                            var ktkisilahjawabanjeniskelaminDone = document.createElement("div");
                            ktkisilahjawabanjeniskelaminDone.className = 'ktkisilah';
                            ktkisilahjawabanjeniskelaminDone.id = 'ktkisilahjawabanjeniskelaminDone';
                            return ktkisilahjawabanjeniskelaminDone;
                        }

                    ctnInfoDone.append(ktkisilahjawabanjeniskelaminDone());

                var ktkisilahjawabanjeniskelaminDone = document.querySelector('#ktkisilahjawabanjeniskelaminDone');

                        function gmbrisilahjawabanjeniskelamindone () {
                            var gmbrisilahjawabanjeniskelamindone = document.createElement("div");
                            gmbrisilahjawabanjeniskelamindone.className = 'gmbrisilah';
                            gmbrisilahjawabanjeniskelamindone.id = 'gmbrisilahjawabanjeniskelamindone';
                            gmbrisilahjawabanjeniskelamindone.innerText = 'flex';
                            return gmbrisilahjawabanjeniskelamindone;
                        }

                    ktkisilahjawabanjeniskelaminDone.append(gmbrisilahjawabanjeniskelamindone());

                        function isilahjawabanjeniskelaminDone () {
                            var isilahjawabanjeniskelaminDone = document.createElement("textarea");
                            isilahjawabanjeniskelaminDone.className = 'isilahDone';
                            isilahjawabanjeniskelaminDone.id = 'isilahjawabanjeniskelaminDone';
                            isilahjawabanjeniskelaminDone.value = decryptedjeniskelamindone.toString(CryptoJS.enc.Utf8);
                            isilahjawabanjeniskelaminDone.readOnly = true;
                            return isilahjawabanjeniskelaminDone;
                        }

                    ktkisilahjawabanjeniskelaminDone.append(isilahjawabanjeniskelaminDone());

                    function ktkisilahjawabanumurDone () {
                            var ktkisilahjawabanumurDone = document.createElement("div");
                            ktkisilahjawabanumurDone.className = 'ktkisilah';
                            ktkisilahjawabanumurDone.id = 'ktkisilahjawabanumurDone';
                            return ktkisilahjawabanumurDone;
                        }

                    ctnInfoDone.append(ktkisilahjawabanumurDone());

                var ktkisilahjawabanumurDone = document.querySelector('#ktkisilahjawabanumurDone');

                        function gmbrisilahjawabanumurdone () {
                            var gmbrisilahjawabanumurdone = document.createElement("div");
                            gmbrisilahjawabanumurdone.className = 'gmbrisilah';
                            gmbrisilahjawabanumurdone.id = 'gmbrisilahjawabanumurdone';
                            gmbrisilahjawabanumurdone.innerText = 'flex';
                            return gmbrisilahjawabanumurdone;
                        }

                    ktkisilahjawabanumurDone.append(gmbrisilahjawabanumurdone());

                        function isilahjawabanumurDone () {
                            var isilahjawabanumurDone = document.createElement("textarea");
                            isilahjawabanumurDone.className = 'isilahDone';
                            isilahjawabanumurDone.id = 'isilahjawabanumurDone';
                            isilahjawabanumurDone.value = decryptedumurdone.toString(CryptoJS.enc.Utf8);
                            isilahjawabanumurDone.readOnly = true;
                            return isilahjawabanumurDone;
                        }

                    ktkisilahjawabanumurDone.append(isilahjawabanumurDone());

                        function isilahjawabanumurzDone () {
                            var isilahjawabanumurzDone = document.createElement("textarea");
                            isilahjawabanumurzDone.id = 'isilahjawabanumurzDone';
                            isilahjawabanumurzDone.value = decryptedumurdone.toString(CryptoJS.enc.Utf8);
                            isilahjawabanumurzDone.style.display = "none";
                            isilahjawabanumurzDone.readOnly = true;
                            return isilahjawabanumurzDone;
                        }

                    ktkisilahjawabanumurDone.append(isilahjawabanumurzDone());

                    function ktkisilahjawabankeluhanDone () {
                            var ktkisilahjawabankeluhanDone = document.createElement("div");
                            ktkisilahjawabankeluhanDone.className = 'ktkisilah';
                            ktkisilahjawabankeluhanDone.id = 'ktkisilahjawabankeluhanDone';
                            return ktkisilahjawabankeluhanDone;
                        }

                    ctnInfoDone.append(ktkisilahjawabankeluhanDone());

                var ktkisilahjawabankeluhanDone = document.querySelector('#ktkisilahjawabankeluhanDone');

                        function gmbrisilahjawabankeluhandoneDone () {
                            var gmbrisilahjawabankeluhandone = document.createElement("div");
                            gmbrisilahjawabankeluhandone.className = 'gmbrisilah';
                            gmbrisilahjawabankeluhandone.id = 'gmbrisilahjawabankeluhandone';
                            gmbrisilahjawabankeluhandone.innerText = 'flex';
                            return gmbrisilahjawabankeluhandone;
                        }

                    ktkisilahjawabankeluhanDone.append(gmbrisilahjawabankeluhandoneDone());

                        function isilahjawabankeluhanDone () {
                            var isilahjawabankeluhanDone = document.createElement("textarea");
                            isilahjawabankeluhanDone.className = 'isilahDone';
                            isilahjawabankeluhanDone.id = 'isilahjawabankeluhanDone';
                            isilahjawabankeluhanDone.value = decryptedkeluhandone.toString(CryptoJS.enc.Utf8)
                            isilahjawabankeluhanDone.readOnly = true;
                            if(isilahjawabankeluhanDone.value.length > 29) {
                                isilahjawabankeluhanDone.style.marginBottom = '20px';
                            } 
                            return isilahjawabankeluhanDone;
                        }

                    ktkisilahjawabankeluhanDone.append(isilahjawabankeluhanDone());

                    function ktkisilahjawabanalergiDone () {
                            var ktkisilahjawabanalergiDone = document.createElement("div");
                            ktkisilahjawabanalergiDone.className = 'ktkisilah';
                            ktkisilahjawabanalergiDone.id = 'ktkisilahjawabanalergiDone';
                            return ktkisilahjawabanalergiDone;
                        }

                    ctnInfoDone.append(ktkisilahjawabanalergiDone());

                var ktkisilahjawabanalergiDone = document.querySelector('#ktkisilahjawabanalergiDone');

                        function gmbrisilahjawabanalergidoneDone () {
                            var gmbrisilahjawabanalergidone = document.createElement("div");
                            gmbrisilahjawabanalergidone.className = 'gmbrisilah';
                            gmbrisilahjawabanalergidone.id = 'gmbrisilahjawabanalergidone';
                            gmbrisilahjawabanalergidone.innerText = 'flex';
                            return gmbrisilahjawabanalergidone;
                        }

                    ktkisilahjawabanalergiDone.append(gmbrisilahjawabanalergidoneDone());

                        function isilahjawabanalergiDone () {
                            var isilahjawabanalergiDone = document.createElement("textarea");
                            isilahjawabanalergiDone.className = 'isilahDone';
                            isilahjawabanalergiDone.id = 'isilahjawabanalergiDone';
                            isilahjawabanalergiDone.value = decryptedalergidone.toString(CryptoJS.enc.Utf8)
                            isilahjawabanalergiDone.readOnly = true;
                            if(isilahjawabanalergiDone.value.length > 29) {
                                isilahjawabanalergiDone.style.marginBottom = '20px';
                            } 
                            return isilahjawabanalergiDone;
                        }

                    ktkisilahjawabanalergiDone.append(isilahjawabanalergiDone());

                    function ktkisilahjawabanjadwalDone () {
                            var ktkisilahjawabanjadwalDone = document.createElement("div");
                            ktkisilahjawabanjadwalDone.className = 'ktkisilah';
                            ktkisilahjawabanjadwalDone.id = 'ktkisilahjawabanjadwalDone';
                            return ktkisilahjawabanjadwalDone;
                        }

                    ctnInfoDone.append(ktkisilahjawabanjadwalDone());

                var ktkisilahjawabanjadwalDone = document.querySelector('#ktkisilahjawabanjadwalDone');

                        function gmbrisilahjawabanjadwaldone () {
                            var gmbrisilahjawabanjadwaldone = document.createElement("div");
                            gmbrisilahjawabanjadwaldone.className = 'gmbrisilah';
                            gmbrisilahjawabanjadwaldone.id = 'gmbrisilahjawabanjadwaldone';
                            gmbrisilahjawabanjadwaldone.innerText = 'flex';
                            return gmbrisilahjawabanjadwaldone;
                        }

                    ktkisilahjawabanjadwalDone.append(gmbrisilahjawabanjadwaldone());

                        function isilahjawabanjadwalDone () {
                            var isilahjawabanjadwalDone = document.createElement("textarea");
                            isilahjawabanjadwalDone.className = 'isilahDone';
                            isilahjawabanjadwalDone.id = 'isilahjawabanjadwalDone';
                            isilahjawabanjadwalDone.value = snapshot.val().jawabanjadwal;
                            isilahjawabanjadwalDone.readOnly = true;
                            return isilahjawabanjadwalDone;
                        }

                    ktkisilahjawabanjadwalDone.append(isilahjawabanjadwalDone());

                    function ktkisilahjawabanjamDone () {
                            var ktkisilahjawabanjamDone = document.createElement("div");
                            ktkisilahjawabanjamDone.className = 'ktkisilah';
                            ktkisilahjawabanjamDone.id = 'ktkisilahjawabanjamDone';
                            return ktkisilahjawabanjamDone;
                        }

                    ctnInfoDone.append(ktkisilahjawabanjamDone());

                var ktkisilahjawabanjamDone = document.querySelector('#ktkisilahjawabanjamDone');

                        function gmbrisilahjawabanjamdone () {
                            var gmbrisilahjawabanjamdone = document.createElement("div");
                            gmbrisilahjawabanjamdone.className = 'gmbrisilah';
                            gmbrisilahjawabanjamdone.id = 'gmbrisilahjawabanjamdone';
                            gmbrisilahjawabanjamdone.innerText = 'flex';
                            return gmbrisilahjawabanjamdone;
                        }

                    ktkisilahjawabanjamDone.append(gmbrisilahjawabanjamdone());

                        function isilahjawabanjamDone () {
                            var isilahjawabanjamDone = document.createElement("textarea");
                            isilahjawabanjamDone.className = 'isilahDone';
                            isilahjawabanjamDone.id = 'isilahjawabanjamDone';
                            isilahjawabanjamDone.value = snapshot.val().jawabanjam;
                            isilahjawabanjamDone.readOnly = true;
                            return isilahjawabanjamDone;
                        }

                    ktkisilahjawabanjamDone.append(isilahjawabanjamDone());

                        function ktkisilahjawabanjamdokterdone () {
                            var ktkisilahjawabanjamdokterdone = document.createElement("div");
                            ktkisilahjawabanjamdokterdone.className = 'ktkisilah';
                            ktkisilahjawabanjamdokterdone.id = 'ktkisilahjawabanjamdokterdone';
                            return ktkisilahjawabanjamdokterdone;
                        }

                    ctnInfoDone.append(ktkisilahjawabanjamdokterdone());

                var ktkisilahjawabanjamdokterdone = document.querySelector('#ktkisilahjawabanjamdokterdone');

                        function gmbrisilahjawabanjamdokterdone () {
                            var gmbrisilahjawabanjamdokterdone = document.createElement("div");
                            gmbrisilahjawabanjamdokterdone.className = 'gmbrisilah';
                            gmbrisilahjawabanjamdokterdone.id = 'gmbrisilahjawabanjamdokterdone';
                            gmbrisilahjawabanjamdokterdone.innerText = 'flex';
                            return gmbrisilahjawabanjamdokterdone;
                        }

                    ktkisilahjawabanjamdokterdone.append(gmbrisilahjawabanjamdokterdone());

                        function isilahjawabanjamdokterdone () {
                            var isilahjawabanjamdokterdone = document.createElement("textarea");
                            isilahjawabanjamdokterdone.className = 'isilahDone';
                            isilahjawabanjamdokterdone.id = 'isilahjawabanjamdokterdone';
                            isilahjawabanjamdokterdone.style.color = 'white';
                            isilahjawabanjamdokterdone.value = snapshot.val().jawabanjamdokter;
                            isilahjawabanjamdokterdone.readOnly = true;
                            if(isilahjawabanjamdokterdone.value.length > 29) {
                                isilahjawabanjamdokterdone.style.marginBottom = '20px';
                            } 
                            return isilahjawabanjamdokterdone;
                        }

                    ktkisilahjawabanjamdokterdone.append(isilahjawabanjamdokterdone());

                        function ktkisilahjawabanhpDone () {
                            var ktkisilahjawabanhpDone = document.createElement("div");
                            ktkisilahjawabanhpDone.className = 'ktkisilah';
                            ktkisilahjawabanhpDone.id = 'ktkisilahjawabanhpDone';
                            return ktkisilahjawabanhpDone;
                        }

                    ctnInfoDone.append(ktkisilahjawabanhpDone());

                var ktkisilahjawabanhpDone = document.querySelector('#ktkisilahjawabanhpDone');

                        function gmbrisilahjawabanhpdone () {
                            var gmbrisilahjawabanhpdone = document.createElement("div");
                            gmbrisilahjawabanhpdone.className = 'gmbrisilah';
                            gmbrisilahjawabanhpdone.id = 'gmbrisilahjawabanhpdone';
                            gmbrisilahjawabanhpdone.innerText = 'flex';
                            return gmbrisilahjawabanhpdone;
                        }

                    ktkisilahjawabanhpDone.append(gmbrisilahjawabanhpdone());

                        function isilahjawabanhpDone () {
                            var isilahjawabanhpDone = document.createElement("textarea");
                            isilahjawabanhpDone.className = 'isilahDone';
                            isilahjawabanhpDone.id = 'isilahjawabanhpDone';
                            isilahjawabanhpDone.value = decryptedhpdone.toString(CryptoJS.enc.Utf8);
                            isilahjawabanhpDone.readOnly = true;
                            return isilahjawabanhpDone;
                        }

                    ktkisilahjawabanhpDone.append(isilahjawabanhpDone());

                        function ktkhubungiDone () {
                            var ktkhubungiDone = document.createElement("div");
                            ktkhubungiDone.className = 'ktkhubungiDone';
                            ktkhubungiDone.id = 'ktkhubungiDone';
                            ktkhubungiDone.style.marginBottom = "20px";
                            ktkhubungiDone.style.paddingLeft = "7px";
                            ktkhubungiDone.style.display = "flex";
                            ktkhubungiDone.style.marginLeft = "15px";
                            ktkhubungiDone.style.marginTop = "-5px";
                            return ktkhubungiDone;
                        }

                    ctnInfoDone.append(ktkhubungiDone());

                var ktkhubungiDone = document.querySelector('#ktkhubungiDone');

                        function buttonhubungiDone () {
                            var buttonhubungiDone = document.createElement("a");
                            buttonhubungiDone.target = "_blank";
                            buttonhubungiDone.id = 'buttonhubungiDone';
                            buttonhubungiDone.href = "https://wa.me/"+decryptedhpdone.toString(CryptoJS.enc.Utf8);
                            buttonhubungiDone.style.borderRadius = "100px";
                            buttonhubungiDone.style.color = "white";
                            buttonhubungiDone.style.paddingLeft = "20px";
                            buttonhubungiDone.style.paddingRight = "20px";
                            buttonhubungiDone.style.paddingTop = "6px";
                            buttonhubungiDone.style.paddingBottom = "6px";
                            buttonhubungiDone.style.textAlign= "center";
                            buttonhubungiDone.style.fontSize = "11px";
                            buttonhubungiDone.style.fontWeight = "600";
                            buttonhubungiDone.style.height = "auto";
                            buttonhubungiDone.style.width = "auto";
                            buttonhubungiDone.style.fontFamily = "Poppins";
                            buttonhubungiDone.style.cursor = "pointer";
                            buttonhubungiDone.style.backgroundColor = "#2AB318";
                            buttonhubungiDone.style.textDecoration = "none";
                            buttonhubungiDone.innerText = "hubungi whatsapp";
                            return buttonhubungiDone;
                        }

                    ktkhubungiDone.append(buttonhubungiDone());   

                        function isilahImgReservasidone () {
                            var isilahImgReservasidone = document.createElement("input");
                            isilahImgReservasidone.type = 'text';
                            isilahImgReservasidone.id = 'isilahImgReservasidone';
                            isilahImgReservasidone.value = snapshot.val().ImgReservasiDone;
                            isilahImgReservasidone.style.display = 'none';
                            isilahImgReservasidone.readOnly = true;
                            return isilahImgReservasidone;
                        }

                    ctnInfoDone.append(isilahImgReservasidone());

                        function isilahNameDone () {
                            var isilahNameDone = document.createElement("input");
                            isilahNameDone.type = 'text';
                            isilahNameDone.id = 'isilahNameDone';
                            isilahNameDone.value = snapshot.val().ImageKeluhan;
                            isilahNameDone.style.display = 'none';
                            isilahNameDone.readOnly = true;
                            return isilahNameDone;
                        }

                    ctnInfoDone.append(isilahNameDone());

                        function ktkimgRcdDone () {
                            var ktkimgRcdDone = document.createElement("div");
                            ktkimgRcdDone.id = 'ktkimgRcdDone';
                            ktkimgRcdDone.className = 'ktkimgRcdDone';
                            return ktkimgRcdDone;
                        }

                    ctnInfoDone.append(ktkimgRcdDone());
                
                var ktkimgRcdDone = document.querySelector('#ktkimgRcdDone');

                        function imgRcdDone () {
                            var imgRcdDone = document.createElement("img");
                            imgRcdDone.id = 'imgRcdDone';
                            imgRcdDone.className = 'imgRcdclassDone';
                            imgRcdDone.src = snapshot.val().ImgReservasiDone;
                            return imgRcdDone;
                        }

                    ktkimgRcdDone.append(imgRcdDone());

                        function isilahWaktuDone () {
                            var isilahWaktuDone = document.createElement("input");
                            isilahWaktuDone.type = 'text';
                            isilahWaktuDone.id = 'isilahWaktuDone';
                            isilahWaktuDone.value = snapshot.val().waktu;
                            isilahWaktuDone.style.display = 'none';
                            isilahWaktuDone.readOnly = true;
                            return isilahWaktuDone;
                        }

                    ctnInfoDone.append(isilahWaktuDone());

                        function wktDone () {
                            var wktDone = document.createElement("div");
                            wktDone.id = 'wktDone';
                            wktDone.className = 'wktDone';
                            wktDone.innerText = snapshot.val().waktu;
                            return wktDone;
                        }

                    ctnInfoDone.append(wktDone());

                        function pinreservasiDone () {
                            var pinreservasiDone = document.createElement("input");
                            pinreservasiDone.type = 'text';
                            pinreservasiDone.id = 'pinreservasiDone';
                            pinreservasiDone.className = 'pinreservasiDone';
                            pinreservasiDone.value = decryptedkodepindone.toString(CryptoJS.enc.Utf8);
                            pinreservasiDone.readOnly = true;
                            return pinreservasiDone;
                        }

                    ctnInfoDone.append(pinreservasiDone());

                        function tmblDeletesDone () {
                            var tmblDeletesDone = document.createElement("input");
                            tmblDeletesDone.type = 'text';
                            tmblDeletesDone.id = 'tmblDeletesDone';
                            tmblDeletesDone.className = 'tmblDeletesDone';
                            tmblDeletesDone.value = snapshot.val().nomorreservasiz;
                            tmblDeletesDone.innerText = 'tmblDeletesDone';
                            tmblDeletesDone.readOnly = true;
                            return tmblDeletesDone;
                        }

                    ctnInfoDone.append(tmblDeletesDone());

                        function overlayreservasissDone () {
                            var overlayreservasissDone = document.createElement("div");
                            overlayreservasissDone.id = 'overlayreservasissDone';
                            return overlayreservasissDone;
                        }

                    ctnInfoDone.append(overlayreservasissDone());

                        function kotakdeletereservasiDone () {
                            var kotakdeletereservasiDone = document.createElement("div");
                            kotakdeletereservasiDone.id = 'kotakdeletereservasiDone';
                            kotakdeletereservasiDone.className = 'kotakdeletereservasiDone';
                            return kotakdeletereservasiDone;
                        }

                    ctnInfoDone.append(kotakdeletereservasiDone());

                var kotakdeletereservasiDone = document.querySelector('#kotakdeletereservasiDone');  
                
                        function canceldeletereservasiDone () {
                            var canceldeletereservasiDone = document.createElement("div");
                            canceldeletereservasiDone.id = 'canceldeletereservasiDone';
                            canceldeletereservasiDone.className = 'canceldeletereservasiDone';
                            return canceldeletereservasiDone;
                        }

                    kotakdeletereservasiDone.append(canceldeletereservasiDone());

                        function deletereservasiDone () {
                            var deletereservasiDone = document.createElement("div");
                            deletereservasiDone.id = 'deletereservasiDone';
                            deletereservasiDone.className = 'deletereservasiDone';
                            deletereservasiDone.innerText = 'Delete Record';
                            return deletereservasiDone;
                        }

                    kotakdeletereservasiDone.append(deletereservasiDone());

                        function deletereservasitxtDone () {
                            var deletereservasitxtDone = document.createElement("div");
                            deletereservasitxtDone.id = 'deletereservasitxtDone';
                            deletereservasitxtDone.className = 'deletereservasitxtDone';
                            deletereservasitxtDone.innerText = 'are you sure to delete this record?';
                            return deletereservasitxtDone;
                        }

                    kotakdeletereservasiDone.append(deletereservasitxtDone());

                        function deleteinforeservasiDone () {
                            var deleteinforeservasiDone = document.createElement("input");
                            deleteinforeservasiDone.type = 'text';
                            deleteinforeservasiDone.id = 'deleteinforeservasiDone';
                            deleteinforeservasiDone.className = 'deleteinforeservasiDone';
                            deleteinforeservasiDone.value = decryptedcodedeletedone.toString(CryptoJS.enc.Utf8);
                            deleteinforeservasiDone.readOnly = true;
                            return deleteinforeservasiDone;
                        }

                    kotakdeletereservasiDone.append(deleteinforeservasiDone());

                        function ctNnomorreservasiDone () {
                            var ctNnomorreservasiDone = document.createElement("input");
                            ctNnomorreservasiDone.type = 'text';
                            ctNnomorreservasiDone.id = 'ctNnomorreservasiDone';
                            ctNnomorreservasiDone.value = snapshot.val().nomorreservasiDone;
                            ctNnomorreservasiDone.style.display = 'none';
                            ctNnomorreservasiDone.readOnly = true;
                            return ctNnomorreservasiDone;
                        }

                    ctnInfoDone.append(ctNnomorreservasiDone());

                        function kodepinInfoDone () {
                            var kodepinInfoDone = document.createElement("input");
                            kodepinInfoDone.type = 'text';
                            kodepinInfoDone.id = 'kodepinInfoDone';
                            kodepinInfoDone.value = decryptedkodepindone.toString(CryptoJS.enc.Utf8);
                            kodepinInfoDone.style.display = 'none';
                            kodepinInfoDone.readOnly = true;
                            return kodepinInfoDone;
                        }

                    ctnInfoDone.append(kodepinInfoDone());   

                $('html').on('click','#tmblDeletesDone',function() {
                    $(this).parent('div.ctnInfoDone').find("#kotakdeletereservasiDone").fadeIn(300);
                    $(this).parent('div.ctnInfoDone').find("#overlayreservasissDone").show();
                });
    
                $('html').on('click','.canceldeletereservasiDone',function() {
                    $(this).parent('div.kotakdeletereservasiDone').hide();
                    $(this).parent('div.kotakdeletereservasiDone').parent('div.ctnInfoDone').find("#overlayreservasissDone").hide();
                });
        
                $('html').on('click','#overlayreservasissDone',function() {
                    $(this).parent('div.ctnInfoDone').find("#kotakdeletereservasiDone").hide();
                    $(this).parent('div.ctnInfoDone').find("#overlayreservasissDone").hide();
                });
        
                $('html').on('click','#deleteinforeservasiDone',function() { 
                    $(this).parent('div.kotakdeletereservasiDone').parent('div.ctnInfoDone').fadeOut(300); 
                    var databasereservasi = ptsft + "/Reservasi/";
                    var dbRef = ref(database, databasereservasi + "/Done/");
                    var inputcekreservasisszz = $(this).val(); 
                    get(dbRef).then((snapshot) => {
                        if (snapshot.exists()) {
                            snapshot.forEach((childSnapshot) => {
                                var SgnuPemgmDecrypt = childSnapshot.val().inputcodedeletedone;
                                var decryptedSgnuPemgm = CryptoJS.AES.decrypt(SgnuPemgmDecrypt, encryptionKey);
                                var jawabanSgnuPemgm = decryptedSgnuPemgm.toString(CryptoJS.enc.Utf8);
                                            
                                if (inputcekreservasisszz == jawabanSgnuPemgm) {
                                    var childKey = childSnapshot.key;
                                    var childRef = ref(database, databasereservasi+"/Done/"+childKey);
                                    remove(childRef);
                                }
                            });
                        }
                    });
                    if($('#kotakInfoDone').children(':visible').length == 0) {
                        document.getElementById('emptyiconkotakInfoDone').style.display = "block";
                        $('#hapusnotif').trigger('click');
                    }
                });

                    isilahDone();
                    function isilahDone(){
                        var textDone = $('.isilahDone');

                        textDone.each(function(){
                            $(this).attr('rows',1);
                            resize($(this));
                        });

                        textDone.on('click', function(){
                            resize($(this));
                        });
                        
                        function resize ($textDone) {
                            $textDone.css('height', 'auto');
                            $textDone.css('height', $textDone[0].scrollHeight+'px');
                        }
                    };

            });

            onChildRemoved(ref(database, databasereservasi+"/Done/"), (snapshot) => {

                var hapusreservdone = "#"+snapshot.val().nomorreservasiDone+'ctnInfo'+'Done';

                $(hapusreservdone).remove();

                if($('#kotakInfoDone').children(':visible').length == 0) {
                    document.getElementById('emptyiconkotakInfoDone').style.display = "block";
                    $('#hapusnotif').trigger('click');
                }

            });
        }

        onChildAdded(ref(database, databaseMenuscaling), (snapshot) => {

            document.getElementById('nomorscaling').value = snapshot.val().jumlahnomorzscaling;

            $("#editscaling").append('<div class="mainscaling" id="mainscaling" ><div id="list-itemscaling" class="list-itemMenu"><div class="ktkMenu"><div class="gmbrMenu" style="background-image:url('+ snapshot.val().Imgscaling +')"></div><input type="text" value="'+ snapshot.val().titltescaling +'" class="titlesMenu" readonly></div></div><button value="' + snapshot.val().nomorscalingz +"Scaling" +'" class="hideMenuz" id="hidescaling" style="display:'+ snapshot.val().showscaling +'">show</button><button value="' + snapshot.val().nomorscalingz +"Scaling" +'" class="showMenuz" id="showscaling" style="display:'+ snapshot.val().hidescaling +'">show</button><button value="' + snapshot.val().nomorscalingz +"Scaling" +'" class="hapusMenu" id="hapusscaling">hapus</button></div>');

            $('#applyscalings').show();
            $('#loadingscalings').hide();

            $("#pagescaling").append('<div id="' + snapshot.val().nomorscalingz +"Scaling" +'" class="blokdentist" style="display:'+ snapshot.val().showscaling +'"><div class="infos" id="infos"><h1 class="titleinfos" id="titleinfo1">'+ snapshot.val().titltescaling +'</h1></div><div class="blokimageMenu" style="background-image:url('+ snapshot.val().Imgscaling +');"></div><div class="flexMenu"></div><div class="flexpend"><textarea class="bloknamaMenu ifmorescaling" id="bloknamascaling" readonly>'+ snapshot.val().contentscaling +'</textarea></div><button class="readmore" id="readmorescaling" style="display:none;">read more</button></div>');

            $('#pagescaling').each(function(){
                $(this).find('.titleinfos').each(function(i) {
                    i++;
                    $('#titlebuttoninfoscaling').text(i+' info');
                });
            });

            $('.ifmorescaling').show(function() {
                var bloknamaMenuscaling = $(this).text();
                if(bloknamaMenuscaling.length > 80) {
                    $(this).parent('div.flexpend').parent('div.blokdentist').find('#readmorescaling').show();
                }
            });

            $('html').on('click','#readmorescaling',function() { 
                this.innerText = "read less";
                this.id = "readlessscaling";
                var textscaling = $(this).parent('div.blokdentist').find('#bloknamascaling'); 
                textscaling.each(function(){
                    $(this).attr('rows',1);
                    resizescaling($(this));
                });
                textscaling.on('click', function(){
                    resizescaling($(this));
                });                   
                function resizescaling ($textscaling) {
                    $textscaling.css('height', 'auto');
                    $textscaling.css('height', $textscaling[0].scrollHeight+'px');
                }     
            });

            $('html').on('click','#readlessscaling',function() { 
                this.innerText = "read more";
                this.id = "readmorescaling";     
                var textbackscaling = $(this).parent('div.blokdentist').find('#bloknamascaling'); 
                textbackscaling.each(function(){
                    $(this).attr('rows',0);
                    resizebackscaling($(this));
                });
                textbackscaling.on('click', function(){
                    resizebackscaling($(this));
                });                   
                function resizebackscaling ($textbackscaling) {
                    $textbackscaling.css('height', 'auto');
                }  
            });

            $('html').on('click','#hidescaling',function() {  
                $(this).hide();
                $(this).parent('div.mainscaling').find("#showscaling").show();
                var myNamesx = $(this).val();
                var myNamesxx = "#"+$(this).val();
                $(myNamesxx).hide()
                var showscaling = "none";
                var hidescaling = "";
                update(ref(database, databaseMenuscaling+myNamesx), {
                    showscaling: showscaling,
                    hidescaling: hidescaling
                });
            });

            $('html').on('click','#showscaling',function() {  
                $(this).hide();
                $(this).parent('div.mainscaling').find("#hidescaling").show();
                var myNamesx = $(this).val();
                var myNamesxx = "#"+$(this).val();
                $(myNamesxx).show()
                var showscaling = "";
                var hidescaling = "none";
                update(ref(database, databaseMenuscaling+myNamesx), {
                    showscaling: showscaling,
                    hidescaling: hidescaling
                });
            });

            var inputcolorzz = document.getElementById('inputcolorzz');

            $(".infos").css('background-color', inputcolorzz.value );

            $('html').on('click','#hapusscaling',function() {  
              $(this).parent('div.mainscaling').fadeOut(300);
              var databaseMenuscaling = ptsft + "/Menu/scaling/";
              var myNamez = $(this).val();
              remove(ref(database, databaseMenuscaling+myNamez));
            });

        });

        onChildAdded(ref(database, databaseMenutambal), (snapshot) => {

            document.getElementById('nomortambal').value = snapshot.val().jumlahnomorztambal;

            $("#edittambal").append('<div class="maintambal" id="maintambal" ><div id="list-itemtambal" class="list-itemMenu"><div class="ktkMenu"><div class="gmbrMenu" style="background-image:url('+ snapshot.val().Imgtambal +')"></div><input type="text" value="'+ snapshot.val().titltetambal +'" class="titlesMenu" readonly></div></div><button value="' + snapshot.val().nomortambalz +"Tambal" +'" class="hideMenuz" id="hidetambal" style="display:'+ snapshot.val().showtambal +'">show</button><button value="' + snapshot.val().nomortambalz +"Tambal" +'" class="showMenuz" id="showtambal" style="display:'+ snapshot.val().hidetambal +'">show</button><button value="' + snapshot.val().nomortambalz +"Tambal" +'" class="hapusMenu" id="hapustambal">hapus</button></div>');

            $('#applytambals').show();
            $('#loadingtambals').hide();

            $("#pagetambal").append('<div id="' + snapshot.val().nomortambalz +"Tambal" +'" class="blokdentist" style="display:'+ snapshot.val().showtambal +'"><div class="infos" id="infos"><h1 class="titleinfos" id="titleinfo1">'+ snapshot.val().titltetambal +'</h1></div><div class="blokimageMenu" style="background-image:url('+ snapshot.val().Imgtambal +');"></div><div class="flexMenu"></div><div class="flexpend"><textarea class="bloknamaMenu ifmoretambal" id="bloknamatambal" readonly>'+ snapshot.val().contenttambal +'</textarea></div><button class="readmore" id="readmoretambal" style="display:none;">read more</button></div>');

            $('#pagetambal').each(function(){
                $(this).find('.titleinfos').each(function(i) {
                    i++;
                    $('#titlebuttoninfotambal').text(i+' info');
                });
            });

            $('.ifmoretambal').show(function() {
                var bloknamaMenutambal = $(this).text();
                if(bloknamaMenutambal.length > 80) {
                    $(this).parent('div.flexpend').parent('div.blokdentist').find('#readmoretambal').show();
                }
            });

            $('html').on('click','#readmoretambal',function() { 
                this.innerText = "read less";
                this.id = "readlesstambal";
                var texttambal = $(this).parent('div.blokdentist').find('#bloknamatambal'); 
                texttambal.each(function(){
                    $(this).attr('rows',1);
                    resizetambal($(this));
                });
                texttambal.on('click', function(){
                    resizetambal($(this));
                });                   
                function resizetambal ($texttambal) {
                    $texttambal.css('height', 'auto');
                    $texttambal.css('height', $texttambal[0].scrollHeight+'px');
                }     
            });

            $('html').on('click','#readlesstambal',function() { 
                this.innerText = "read more";
                this.id = "readmoretambal";     
                var textbacktambal = $(this).parent('div.blokdentist').find('#bloknamatambal'); 
                textbacktambal.each(function(){
                    $(this).attr('rows',0);
                    resizebacktambal($(this));
                });
                textbacktambal.on('click', function(){
                    resizebacktambal($(this));
                });                   
                function resizebacktambal ($textbacktambal) {
                    $textbacktambal.css('height', 'auto');
                }  
            });

            $('html').on('click','#hidetambal',function() {  
                $(this).hide();
                $(this).parent('div.maintambal').find("#showtambal").show();
                var myNamesx = $(this).val();
                var myNamesxx = "#"+$(this).val();
                $(myNamesxx).hide()
                var showtambal = "none";
                var hidetambal = "";
                update(ref(database, databaseMenutambal+myNamesx), {
                    showtambal: showtambal,
                    hidetambal: hidetambal
                });
            });

            $('html').on('click','#showtambal',function() {  
                $(this).hide();
                $(this).parent('div.maintambal').find("#hidetambal").show();
                var myNamesx = $(this).val();
                var myNamesxx = "#"+$(this).val();
                $(myNamesxx).show()
                var showtambal = "";
                var hidetambal = "none";
                update(ref(database, databaseMenutambal+myNamesx), {
                    showtambal: showtambal,
                    hidetambal: hidetambal
                });
            });

            var inputcolorzz = document.getElementById('inputcolorzz');

            $(".infos").css('background-color', inputcolorzz.value );

            $('html').on('click','#hapustambal',function() {  
              $(this).parent('div.maintambal').fadeOut(300);
              var databaseMenutambal = ptsft + "/Menu/tambal/";
              var myNamez = $(this).val();
              remove(ref(database, databaseMenutambal+myNamez));
            });

        });

        onChildAdded(ref(database, databaseMenubedah), (snapshot) => {

            document.getElementById('nomorbedah').value = snapshot.val().jumlahnomorzbedah;

           $("#editbedah").append('<div class="mainbedah" id="mainbedah" ><div id="list-itembedah" class="list-itemMenu"><div class="ktkMenu"><div class="gmbrMenu" style="background-image:url('+ snapshot.val().Imgbedah +')"></div><input type="text" value="'+ snapshot.val().titltebedah +'" class="titlesMenu" readonly></div></div><button value="' + snapshot.val().nomorbedahz +"Bedah" +'" class="hideMenuz" id="hidebedah" style="display:'+ snapshot.val().showbedah +'">show</button><button value="' + snapshot.val().nomorbedahz +"Bedah" +'" class="showMenuz" id="showbedah" style="display:'+ snapshot.val().hidebedah +'">show</button><button value="' + snapshot.val().nomorbedahz +"Bedah" +'" class="hapusMenu" id="hapusbedah">hapus</button></div>');

           $('#applybedahs').show();
           $('#loadingbedahs').hide();

            $("#pagebedah").append('<div id="' + snapshot.val().nomorbedahz +"Bedah" +'" class="blokdentist" style="display:'+ snapshot.val().showbedah +'"><div class="infos" id="infos"><h1 class="titleinfos" id="titleinfo1">'+ snapshot.val().titltebedah +'</h1></div><div class="blokimageMenu" style="background-image:url('+ snapshot.val().Imgbedah +');"></div><div class="flexMenu"></div><div class="flexpend"><textarea class="bloknamaMenu ifmorebedah" id="bloknamabedah" readonly>'+ snapshot.val().contentbedah +'</textarea></div><button class="readmore" id="readmorebedah" style="display:none;">read more</button></div>');

            $('#pagebedah').each(function(){
                $(this).find('.titleinfos').each(function(i) {
                    i++;
                    $('#titlebuttoninfobedah').text(i+' info');
                });
            });

            $('.ifmorebedah').show(function() {
                var bloknamaMenubedah = $(this).text();
                if(bloknamaMenubedah.length > 80) {
                    $(this).parent('div.flexpend').parent('div.blokdentist').find('#readmorebedah').show();
                }
            });

            $('html').on('click','#readmorebedah',function() { 
                this.innerText = "read less";
                this.id = "readlessbedah";
                var textbedah = $(this).parent('div.blokdentist').find('#bloknamabedah'); 
                textbedah.each(function(){
                    $(this).attr('rows',1);
                    resizebedah($(this));
                });
                textbedah.on('click', function(){
                    resizebedah($(this));
                });                   
                function resizebedah ($textbedah) {
                    $textbedah.css('height', 'auto');
                    $textbedah.css('height', $textbedah[0].scrollHeight+'px');
                }     
            });

            $('html').on('click','#readlessbedah',function() { 
                this.innerText = "read more";
                this.id = "readmorebedah";     
                var textbackbedah = $(this).parent('div.blokdentist').find('#bloknamabedah'); 
                textbackbedah.each(function(){
                    $(this).attr('rows',0);
                    resizebackbedah($(this));
                });
                textbackbedah.on('click', function(){
                    resizebackbedah($(this));
                });                   
                function resizebackbedah ($textbackbedah) {
                    $textbackbedah.css('height', 'auto');
                }  
            });

            $('html').on('click','#hidebedah',function() {  
                $(this).hide();
                $(this).parent('div.mainbedah').find("#showbedah").show();
                var myNamesx = $(this).val();
                var myNamesxx = "#"+$(this).val();
                $(myNamesxx).hide()
                var showbedah = "none";
                var hidebedah = "";
                update(ref(database, databaseMenubedah+myNamesx), {
                    showbedah: showbedah,
                    hidebedah: hidebedah
                });
            });

            $('html').on('click','#showbedah',function() {  
                $(this).hide();
                $(this).parent('div.mainbedah').find("#hidebedah").show();
                var myNamesx = $(this).val();
                var myNamesxx = "#"+$(this).val();
                $(myNamesxx).show()
                var showbedah = "";
                var hidebedah = "none";
                update(ref(database, databaseMenubedah+myNamesx), {
                    showbedah: showbedah,
                    hidebedah: hidebedah
                });
            });

            var inputcolorzz = document.getElementById('inputcolorzz');

            $(".infos").css('background-color', inputcolorzz.value );

            $('html').on('click','#hapusbedah',function() {  
              $(this).parent('div.mainbedah').fadeOut(300);
              var databaseMenubedah = ptsft + "/Menu/bedah/";
              var myNamez = $(this).val();
              remove(ref(database, databaseMenubedah+myNamez));
            });

        });

        onChildAdded(ref(database, databaseMenubehel), (snapshot) => {

            document.getElementById('nomorbehel').value = snapshot.val().jumlahnomorzbehel;

            $("#editbehel").append('<div class="mainbehel" id="mainbehel" ><div id="list-itembehel" class="list-itemMenu"><div class="ktkMenu"><div class="gmbrMenu" style="background-image:url('+ snapshot.val().Imgbehel +')"></div><input type="text" value="'+ snapshot.val().titltebehel +'" class="titlesMenu" readonly></div></div><button value="' + snapshot.val().nomorbehelz +"Behel" +'" class="hideMenuz" id="hidebehel" style="display:'+ snapshot.val().showbehel +'">show</button><button value="' + snapshot.val().nomorbehelz +"Behel" +'" class="showMenuz" id="showbehel" style="display:'+ snapshot.val().hidebehel +'">show</button><button value="' + snapshot.val().nomorbehelz +"Behel" +'" class="hapusMenu" id="hapusbehel">hapus</button></div>');

            $('#applybehels').show();
            $('#loadingbehels').hide();

            $("#pagebehel").append('<div id="' + snapshot.val().nomorbehelz +"Behel" +'" class="blokdentist" style="display:'+ snapshot.val().showbehel +'"><div class="infos" id="infos"><h1 class="titleinfos" id="titleinfo1">'+ snapshot.val().titltebehel +'</h1></div><div class="blokimageMenu" style="background-image:url('+ snapshot.val().Imgbehel +');"></div><div class="flexMenu"></div><div class="flexpend"><textarea class="bloknamaMenu ifmorebehel" id="bloknamabehel" readonly>'+ snapshot.val().contentbehel +'</textarea></div><button class="readmore" id="readmorebehel" style="display:none;">read more</button></div>');

            $('#pagebehel').each(function(){
                $(this).find('.titleinfos').each(function(i) {
                    i++;
                    $('#titlebuttoninfobehel').text(i+' info');
                });
            });

            $('.ifmorebehel').show(function() {
                var bloknamaMenubehel = $(this).text();
                if(bloknamaMenubehel.length > 80) {
                    $(this).parent('div.flexpend').parent('div.blokdentist').find('#readmorebehel').show();
                }
            });

            $('html').on('click','#readmorebehel',function() { 
                this.innerText = "read less";
                this.id = "readlessbehel";
                var textbehel = $(this).parent('div.blokdentist').find('#bloknamabehel'); 
                textbehel.each(function(){
                    $(this).attr('rows',1);
                    resizebehel($(this));
                });
                textbehel.on('click', function(){
                    resizebehel($(this));
                });                   
                function resizebehel ($textbehel) {
                    $textbehel.css('height', 'auto');
                    $textbehel.css('height', $textbehel[0].scrollHeight+'px');
                }     
            });

            $('html').on('click','#readlessbehel',function() { 
                this.innerText = "read more";
                this.id = "readmorebehel";     
                var textbackbehel = $(this).parent('div.blokdentist').find('#bloknamabehel'); 
                textbackbehel.each(function(){
                    $(this).attr('rows',0);
                    resizebackbehel($(this));
                });
                textbackbehel.on('click', function(){
                    resizebackbehel($(this));
                });                   
                function resizebackbehel ($textbackbehel) {
                    $textbackbehel.css('height', 'auto');
                }  
            });

            $('html').on('click','#hidebehel',function() {  
                $(this).hide();
                $(this).parent('div.mainbehel').find("#showbehel").show();
                var myNamesx = $(this).val();
                var myNamesxx = "#"+$(this).val();
                $(myNamesxx).hide()
                var showbehel = "none";
                var hidebehel = "";
                update(ref(database, databaseMenubehel+myNamesx), {
                    showbehel: showbehel,
                    hidebehel: hidebehel
                });
            });

            $('html').on('click','#showbehel',function() {  
                $(this).hide();
                $(this).parent('div.mainbehel').find("#hidebehel").show();
                var myNamesx = $(this).val();
                var myNamesxx = "#"+$(this).val();
                $(myNamesxx).show()
                var showbehel = "";
                var hidebehel = "none";
                update(ref(database, databaseMenubehel+myNamesx), {
                    showbehel: showbehel,
                    hidebehel: hidebehel
                });
            });

            var inputcolorzz = document.getElementById('inputcolorzz');

            $(".infos").css('background-color', inputcolorzz.value );

            $('html').on('click','#hapusbehel',function() {  
              $(this).parent('div.mainbehel').fadeOut(300);
              var databaseMenubehel = ptsft + "/Menu/behel/";
              var myNamez = $(this).val();
              remove(ref(database, databaseMenubehel+myNamez));
            });

        });

        onChildAdded(ref(database, databaseMenugitur), (snapshot) => {

            document.getElementById('nomorgitur').value = snapshot.val().jumlahnomorzgitur;

            $("#editgitur").append('<div class="maingitur" id="maingitur" ><div id="list-itemgitur" class="list-itemMenu"><div class="ktkMenu"><div class="gmbrMenu" style="background-image:url('+ snapshot.val().Imggitur +')"></div><input type="text" value="'+ snapshot.val().titltegitur +'" class="titlesMenu" readonly></div></div><button value="' + snapshot.val().nomorgiturz +"GigiTiruan" +'" class="hideMenuz" id="hidegitur" style="display:'+ snapshot.val().showgitur +'">show</button><button value="' + snapshot.val().nomorgiturz +"GigiTiruan" +'" class="showMenuz" id="showgitur" style="display:'+ snapshot.val().hidegitur +'">show</button><button value="' + snapshot.val().nomorgiturz +"GigiTiruan" +'" class="hapusMenu" id="hapusgitur">hapus</button></div>');

            $('#applygiturs').show();
            $('#loadinggiturs').hide();

            $("#pagegitur").append('<div id="' + snapshot.val().nomorgiturz +"GigiTiruan" +'" class="blokdentist" style="display:'+ snapshot.val().showgitur +'"><div class="infos" id="infos"><h1 class="titleinfos" id="titleinfo1">'+ snapshot.val().titltegitur +'</h1></div><div class="blokimageMenu" style="background-image:url('+ snapshot.val().Imggitur +');"></div><div class="flexMenu"></div><div class="flexpend"><textarea class="bloknamaMenu ifmoregitur" id="bloknamagitur" readonly>'+ snapshot.val().contentgitur +'</textarea></div><button class="readmore" id="readmoregitur" style="display:none;">read more</button></div>');

            $('#pagegitur').each(function(){
                $(this).find('.titleinfos').each(function(i) {
                    i++;
                    $('#titlebuttoninfogigitiruan').text(i+' info');
                });
            });

            $('.ifmoregitur').show(function() {
                var bloknamaMenugitur = $(this).text();
                if(bloknamaMenugitur.length > 80) {
                    $(this).parent('div.flexpend').parent('div.blokdentist').find('#readmoregitur').show();
                }
            });

            $('html').on('click','#readmoregitur',function() { 
                this.innerText = "read less";
                this.id = "readlessgitur";
                var textgitur = $(this).parent('div.blokdentist').find('#bloknamagitur'); 
                textgitur.each(function(){
                    $(this).attr('rows',1);
                    resizegitur($(this));
                });
                textgitur.on('click', function(){
                    resizegitur($(this));
                });                   
                function resizegitur ($textgitur) {
                    $textgitur.css('height', 'auto');
                    $textgitur.css('height', $textgitur[0].scrollHeight+'px');
                }     
            });

            $('html').on('click','#readlessgitur',function() { 
                this.innerText = "read more";
                this.id = "readmoregitur";     
                var textbackgitur = $(this).parent('div.blokdentist').find('#bloknamagitur'); 
                textbackgitur.each(function(){
                    $(this).attr('rows',0);
                    resizebackgitur($(this));
                });
                textbackgitur.on('click', function(){
                    resizebackgitur($(this));
                });                   
                function resizebackgitur ($textbackgitur) {
                    $textbackgitur.css('height', 'auto');
                }  
            });

            $('html').on('click','#hidegitur',function() {  
                $(this).hide();
                $(this).parent('div.maingitur').find("#showgitur").show();
                var myNamesx = $(this).val();
                var myNamesxx = "#"+$(this).val();
                $(myNamesxx).hide()
                var showgitur = "none";
                var hidegitur = "";
                update(ref(database, databaseMenugitur+myNamesx), {
                    showgitur: showgitur,
                    hidegitur: hidegitur
                });
            });

            $('html').on('click','#showgitur',function() {  
                $(this).hide();
                $(this).parent('div.maingitur').find("#hidegitur").show();
                var myNamesx = $(this).val();
                var myNamesxx = "#"+$(this).val();
                $(myNamesxx).show()
                var showgitur = "";
                var hidegitur = "none";
                update(ref(database, databaseMenugitur+myNamesx), {
                    showgitur: showgitur,
                    hidegitur: hidegitur
                });
            });

            var inputcolorzz = document.getElementById('inputcolorzz');

            $(".infos").css('background-color', inputcolorzz.value );

            $('html').on('click','#hapusgitur',function() {  
              $(this).parent('div.maingitur').fadeOut(300);
              var databaseMenugitur = ptsft + "/Menu/gigitiruan/";
              var myNamez = $(this).val();
              remove(ref(database, databaseMenugitur+myNamez));
            });

        });

        onChildAdded(ref(database, databaseMenubleaching), (snapshot) => {

            document.getElementById('nomorbleaching').value = snapshot.val().jumlahnomorzbleaching;

            $("#editbleaching").append('<div class="mainbleaching" id="mainbleaching" ><div id="list-itembleaching" class="list-itemMenu"><div class="ktkMenu"><div class="gmbrMenu" style="background-image:url('+ snapshot.val().Imgbleaching +')"></div><input type="text" value="'+ snapshot.val().titltebleaching +'" class="titlesMenu" readonly></div></div><button value="' + snapshot.val().nomorbleachingz +"Bleaching" +'" class="hideMenuz" id="hidebleaching" style="display:'+ snapshot.val().showbleaching +'">show</button><button value="' + snapshot.val().nomorbleachingz +"Bleaching" +'" class="showMenuz" id="showbleaching" style="display:'+ snapshot.val().hidebleaching +'">show</button><button value="' + snapshot.val().nomorbleachingz +"Bleaching" +'" class="hapusMenu" id="hapusbleaching">hapus</button></div>');

            $('#applybleachings').show();
            $('#loadingbleachings').hide();

            $("#pagebleaching").append('<div id="' + snapshot.val().nomorbleachingz +"Bleaching" +'" class="blokdentist" style="display:'+ snapshot.val().showbleaching +'"><div class="infos" id="infos"><h1 class="titleinfos" id="titleinfo1">'+ snapshot.val().titltebleaching +'</h1></div><div class="blokimageMenu" style="background-image:url('+ snapshot.val().Imgbleaching +');"></div><div class="flexMenu"></div><div class="flexpend"><textarea class="bloknamaMenu ifmorebleaching" id="bloknamableaching" readonly>'+ snapshot.val().contentbleaching +'</textarea></div><button class="readmore" id="readmorebleaching" style="display:none;">read more</button></div>');

            $('#pagebleaching').each(function(){
                $(this).find('.titleinfos').each(function(i) {
                    i++;
                    $('#titlebuttoninfobleach').text(i+' info');
                });
            });

            $('.ifmorebleaching').show(function() {
                var bloknamaMenubleaching = $(this).text();
                if(bloknamaMenubleaching.length > 80) {
                    $(this).parent('div.flexpend').parent('div.blokdentist').find('#readmorebleaching').show();
                }
            });

            $('html').on('click','#readmorebleaching',function() { 
                this.innerText = "read less";
                this.id = "readlessbleaching";
                var textbleaching = $(this).parent('div.blokdentist').find('#bloknamableaching'); 
                textbleaching.each(function(){
                    $(this).attr('rows',1);
                    resizebleaching($(this));
                });
                textbleaching.on('click', function(){
                    resizebleaching($(this));
                });                   
                function resizebleaching ($textbleaching) {
                    $textbleaching.css('height', 'auto');
                    $textbleaching.css('height', $textbleaching[0].scrollHeight+'px');
                }     
            });

            $('html').on('click','#readlessbleaching',function() { 
                this.innerText = "read more";
                this.id = "readmorebleaching";     
                var textbackbleaching = $(this).parent('div.blokdentist').find('#bloknamableaching'); 
                textbackbleaching.each(function(){
                    $(this).attr('rows',0);
                    resizebackbleaching($(this));
                });
                textbackbleaching.on('click', function(){
                    resizebackbleaching($(this));
                });                   
                function resizebackbleaching ($textbackbleaching) {
                    $textbackbleaching.css('height', 'auto');
                }  
            });

            $('html').on('click','#hidebleaching',function() {  
                $(this).hide();
                $(this).parent('div.mainbleaching').find("#showbleaching").show();
                var myNamesx = $(this).val();
                var myNamesxx = "#"+$(this).val();
                $(myNamesxx).hide()
                var showbleaching = "none";
                var hidebleaching = "";
                update(ref(database, databaseMenubleaching+myNamesx), {
                    showbleaching: showbleaching,
                    hidebleaching: hidebleaching
                });
            });

            $('html').on('click','#showbleaching',function() {  
                $(this).hide();
                $(this).parent('div.mainbleaching').find("#hidebleaching").show();
                var myNamesx = $(this).val();
                var myNamesxx = "#"+$(this).val();
                $(myNamesxx).show()
                var showbleaching = "";
                var hidebleaching = "none";
                update(ref(database, databaseMenubleaching+myNamesx), {
                    showbleaching: showbleaching,
                    hidebleaching: hidebleaching
                });
            });

            var inputcolorzz = document.getElementById('inputcolorzz');

            $(".infos").css('background-color', inputcolorzz.value );

            $('html').on('click','#hapusbleaching',function() {  
              $(this).parent('div.mainbleaching').fadeOut(300);
              var databaseMenubleaching = ptsft + "/Menu/bleaching/";
              var myNamez = $(this).val();
              remove(ref(database, databaseMenubleaching+myNamez));
            });

        });

        onChildAdded(ref(database, databaseMenuveneer), (snapshot) => {

            document.getElementById('nomorveneer').value = snapshot.val().jumlahnomorzveneer;

            $("#editveneer").append('<div class="mainveneer" id="mainveneer" ><div id="list-itemveneer" class="list-itemMenu"><div class="ktkMenu"><div class="gmbrMenu" style="background-image:url('+ snapshot.val().Imgveneer +')"></div><input type="text" value="'+ snapshot.val().titlteveneer +'" class="titlesMenu" readonly></div></div><button value="' + snapshot.val().nomorveneerz +"Veneer" +'" class="hideMenuz" id="hideveneer" style="display:'+ snapshot.val().showveneer +'">show</button><button value="' + snapshot.val().nomorveneerz +"Veneer" +'" class="showMenuz" id="showveneer" style="display:'+ snapshot.val().hideveneer +'">show</button><button value="' + snapshot.val().nomorveneerz +"Veneer" +'" class="hapusMenu" id="hapusveneer">hapus</button></div>');

            $('#applyveneers').show();
            $('#loadingveneers').hide();

            $("#pageveneer").append('<div id="' + snapshot.val().nomorveneerz +"Veneer" +'" class="blokdentist" style="display:'+ snapshot.val().showveneer +'"><div class="infos" id="infos"><h1 class="titleinfos" id="titleinfo1">'+ snapshot.val().titlteveneer +'</h1></div><div class="blokimageMenu" style="background-image:url('+ snapshot.val().Imgveneer +');"></div><div class="flexMenu"></div><div class="flexpend"><textarea class="bloknamaMenu ifmoreveneer" id="bloknamaveneer" readonly>'+ snapshot.val().contentveneer +'</textarea></div><button class="readmore" id="readmoreveneer" style="display:none;">read more</button></div>');

            $('#pageveneer').each(function(){
                $(this).find('.titleinfos').each(function(i) {
                    i++;
                    $('#titlebuttoninfoveneer').text(i+' info');
                });
            });

            $('.ifmoreveneer').show(function() {
                var bloknamaMenuveneer = $(this).text();
                if(bloknamaMenuveneer.length > 80) {
                    $(this).parent('div.flexpend').parent('div.blokdentist').find('#readmoreveneer').show();
                }
            });

            $('html').on('click','#readmoreveneer',function() { 
                this.innerText = "read less";
                this.id = "readlessveneer";
                var textveneer = $(this).parent('div.blokdentist').find('#bloknamaveneer'); 
                textveneer.each(function(){
                    $(this).attr('rows',1);
                    resizeveneer($(this));
                });
                textveneer.on('click', function(){
                    resizeveneer($(this));
                });                   
                function resizeveneer ($textveneer) {
                    $textveneer.css('height', 'auto');
                    $textveneer.css('height', $textveneer[0].scrollHeight+'px');
                }     
            });

            $('html').on('click','#readlessveneer',function() { 
                this.innerText = "read more";
                this.id = "readmoreveneer";     
                var textbackveneer = $(this).parent('div.blokdentist').find('#bloknamaveneer'); 
                textbackveneer.each(function(){
                    $(this).attr('rows',0);
                    resizebackveneer($(this));
                });
                textbackveneer.on('click', function(){
                    resizebackveneer($(this));
                });                   
                function resizebackveneer ($textbackveneer) {
                    $textbackveneer.css('height', 'auto');
                }  
            });

            $('html').on('click','#hideveneer',function() {  
                $(this).hide();
                $(this).parent('div.mainveneer').find("#showveneer").show();
                var myNamesx = $(this).val();
                var myNamesxx = "#"+$(this).val();
                $(myNamesxx).hide()
                var showveneer = "none";
                var hideveneer = "";
                update(ref(database, databaseMenuveneer+myNamesx), {
                    showveneer: showveneer,
                    hideveneer: hideveneer
                });
            });

            $('html').on('click','#showveneer',function() {  
                $(this).hide();
                $(this).parent('div.mainveneer').find("#hideveneer").show();
                var myNamesx = $(this).val();
                var myNamesxx = "#"+$(this).val();
                $(myNamesxx).show()
                var showveneer = "";
                var hideveneer = "none";
                update(ref(database, databaseMenuveneer+myNamesx), {
                    showveneer: showveneer,
                    hideveneer: hideveneer
                });
            });

            var inputcolorzz = document.getElementById('inputcolorzz');

            $(".infos").css('background-color', inputcolorzz.value );

            $('html').on('click','#hapusveneer',function() {  
              $(this).parent('div.mainveneer').fadeOut(300);
              var databaseMenuveneer = ptsft + "/Menu/veneer/";
              var myNamez = $(this).val();
              remove(ref(database, databaseMenuveneer+myNamez));
            });

        });

        onChildAdded(ref(database, databaseMenulainnya), (snapshot) => {

            document.getElementById('nomorlainnya').value = snapshot.val().jumlahnomorzlainnya;

            $("#editlainnya").append('<div class="mainlainnya" id="mainlainnya" ><div id="list-itemlainnya" class="list-itemMenu"><div class="ktkMenu"><div class="gmbrMenu" style="background-image:url('+ snapshot.val().Imglainnya +')"></div><input type="text" value="'+ snapshot.val().titltelainnya +'" class="titlesMenu" readonly></div></div><button value="' + snapshot.val().nomorlainnyaz +"Lainnya" +'" class="hideMenuz" id="hidelainnya" style="display:'+ snapshot.val().showlainnya +'">show</button><button value="' + snapshot.val().nomorlainnyaz +"Lainnya" +'" class="showMenuz" id="showlainnya" style="display:'+ snapshot.val().hidelainnya +'">show</button><button value="' + snapshot.val().nomorlainnyaz +"Lainnya" +'" class="hapusMenu" id="hapuslainnya">hapus</button></div>');

            $('#applylainnyas').show();
            $('#loadinglainnyas').hide();

            $("#pagelainnya").append('<div id="' + snapshot.val().nomorlainnyaz +"Lainnya" +'" class="blokdentist" style="display:'+ snapshot.val().showlainnya +'"><div class="infos" id="infos"><h1 class="titleinfos" id="titleinfo1">'+ snapshot.val().titltelainnya +'</h1></div><div class="blokimageMenu" style="background-image:url('+ snapshot.val().Imglainnya +');"></div><div class="flexMenu"></div><div class="flexpend"><textarea class="bloknamaMenu ifmorelainnya" id="bloknamalainnya" readonly>'+ snapshot.val().contentlainnya +'</textarea></div><button class="readmore" id="readmorelainnya" style="display:none;">read more</button></div>');

            $('#pagelainnya').each(function(){
                $(this).find('.titleinfos').each(function(i) {
                    i++;
                    $('#titlebuttoninfolainnya').text(i+' info');
                });
            });

            $('.ifmorelainnya').show(function() {
                var bloknamaMenulainnya = $(this).text();
                if(bloknamaMenulainnya.length > 80) {
                    $(this).parent('div.flexpend').parent('div.blokdentist').find('#readmorelainnya').show();
                }
            });

            $('html').on('click','#readmorelainnya',function() { 
                this.innerText = "read less";
                this.id = "readlesslainnya";
                var textlainnya = $(this).parent('div.blokdentist').find('#bloknamalainnya'); 
                textlainnya.each(function(){
                    $(this).attr('rows',1);
                    resizelainnya($(this));
                });
                textlainnya.on('click', function(){
                    resizelainnya($(this));
                });                   
                function resizelainnya ($textlainnya) {
                    $textlainnya.css('height', 'auto');
                    $textlainnya.css('height', $textlainnya[0].scrollHeight+'px');
                }     
            });

            $('html').on('click','#readlesslainnya',function() { 
                this.innerText = "read more";
                this.id = "readmorelainnya";     
                var textbacklainnya = $(this).parent('div.blokdentist').find('#bloknamalainnya'); 
                textbacklainnya.each(function(){
                    $(this).attr('rows',0);
                    resizebacklainnya($(this));
                });
                textbacklainnya.on('click', function(){
                    resizebacklainnya($(this));
                });                   
                function resizebacklainnya ($textbacklainnya) {
                    $textbacklainnya.css('height', 'auto');
                }  
            });

            $('html').on('click','#hidelainnya',function() {  
                $(this).hide();
                $(this).parent('div.mainlainnya').find("#showlainnya").show();
                var myNamesx = $(this).val();
                var myNamesxx = "#"+$(this).val();
                $(myNamesxx).hide()
                var showlainnya = "none";
                var hidelainnya = "";
                update(ref(database, databaseMenulainnya+myNamesx), {
                    showlainnya: showlainnya,
                    hidelainnya: hidelainnya
                });
            });

            $('html').on('click','#showlainnya',function() {  
                $(this).hide();
                $(this).parent('div.mainlainnya').find("#hidelainnya").show();
                var myNamesx = $(this).val();
                var myNamesxx = "#"+$(this).val();
                $(myNamesxx).show()
                var showlainnya = "";
                var hidelainnya = "none";
                update(ref(database, databaseMenulainnya+myNamesx), {
                    showlainnya: showlainnya,
                    hidelainnya: hidelainnya
                });
            });

            var inputcolorzz = document.getElementById('inputcolorzz');

            $(".infos").css('background-color', inputcolorzz.value );

            $('html').on('click','#hapuslainnya',function() {  
              $(this).parent('div.mainlainnya').fadeOut(300);
              var databaseMenulainnya = ptsft + "/Menu/lainnya/";
              var myNamez = $(this).val();
              remove(ref(database, databaseMenulainnya+myNamez));
            });

        });

        onChildAdded(ref(database, databasefoto), (snapshot) => {

            var nomorfoto = document.getElementById('nomorfotoprofil');
  
            nomorfoto.value = snapshot.val().jumlahnomorfoto ;
            
            namebox.value = snapshot.val().ImageName;
            extlab.innerHTML = snapshot.val().ImageExt;
            $('#logoprofile').css('background-image', 'url('+snapshot.val().ImgUrl +')');
            $('#kotakpreview').css('background-image', 'url('+snapshot.val().ImgUrl +')');
            $('#gambareditthetools1').css('background-image', 'url('+snapshot.val().ImgUrl +')');
            $('#gambareditthetools2').css('background-image', 'url('+snapshot.val().ImgUrl +')');
  
        });

        onChildAdded(ref(database, databaseBGfoto), (snapshot) => {

            var nomorBG = document.getElementById('nomorfotoBG');
  
            nomorBG.value = snapshot.val().jumlahnomorBG ;
            
            nameboxx.value = snapshot.val().ImageBGName;
            extlabz.innerHTML = snapshot.val().ImageBGExt;
            $('#kotakpreviewz').css('background-image', 'url('+snapshot.val().ImgBGUrl +')');
            $('.ktksilahkan').css('background-image', 'url('+snapshot.val().ImgBGUrl +')');
  
        });

        onChildAdded(ref(database, databaseBGTheme), (snapshot) => {

            var highimgInputBG = document.querySelector('.highimgInputBG');
            highimgInputBG.src = snapshot.val().ImgInputBGUrl;

            $("#ktkInputBG").css('display', "");
            $("#hapusfotoInputBG").css('display', "");
            $("#inputBG").css('display', "none");
            $("body").css('background-image', 'url('+ snapshot.val().ImgInputBGUrl +')');
            $("body").css('background-size', 'cover');
            $("body").css('background-repeat', 'no-repeat');
            $("body").css('background-attachment', 'fixed');

            $("#hapusfotoInputBG").on('click', function() {  
                $(this).css('display', "none");
                $("#ktkInputBG").css('display', "none");
                $("#inputBG").css('display', "");
                var databaseBGTheme = ptsft + "/ThemeBackground/";
                remove(ref(database, databaseBGTheme));
            });
  
        });

        onChildAdded(ref(database, databasedisablewa), (snapshot) => {

            var disablewa = snapshot.val().disablewa;
            var disablewabutton = document.getElementById('disablewa');
            var disablecdbbutton = document.getElementById('disablecdb');
            if(disablewa == 'aktif') {
                disablewabutton.checked = true ;
                upbtnzzkeluhan = function(){};
                $("#jawabanfotokeluhanz").remove();
                $("#jawabanfotokeluhan").remove();
                $("#jawabanalergi").css('border-bottom-left-radius', '12px');
                $("#jawabanalergi").css('border-bottom-right-radius', '12px');
                $("#jawabanalergi").css('border', 'none');
            }
            if(disablewa == 'nonaktif') {
                disablecdbbutton.checked = true ;
                postreservasiwhatsapp = function(){};
            }
  
        });

        onChildAdded(ref(database, databasedisablereservasi), (snapshot) => {

            var disablereservasi = document.getElementById('disablereservasi');
            disablereservasi.checked = true ;
            $(".reservasi").remove();
            $(".isiform").remove();
            $(".yakinform").remove();
            $(".kirimform").remove();
            $(".suksesform").remove();
            $(".setelahmenu").remove();
            $("#pagereservasi").remove();
            $("#tambahanreservasi").remove();
  
        });

        onChildAdded(ref(database, databasereport), (snapshot) => {

            $(".groupusername").prepend('<div id="cssLayerReport" class="cssLayerReport"><button type="button" id="closereport"></button><div id="isireport">ada yang mencoba masuk ke akun anda, kami sarankan perkuat password anda dengan kombinasi angka, huruf besar, huruf kecil dan juga ganti password anda secara berkala.</div></div>'); 

            $("#closereport").on('click', function() {  
                $("#cssLayerReport").hide();
                var databasereport = ptsft + "/AccountReport/";
                remove(ref(database, databasereport));
            }); 
  
        });

        $(document).ready(function(){
            setTimeout(function(){
                $('.loadingawal').remove();
                $('.ktkldng').remove();
                $('.themehome').show();
                $('.appearhome').addClass('animatedzx').show();
            }, 100);
        });

        var emLonLyIdscocok;
        var keepLoggedIncDbgst100395cocok;
        
        onChildAdded(ref(database, databaseunamez), (snapshot) => {

            var inputanEmailz = snapshot.val().email;
            var decryptedEmailz = CryptoJS.AES.decrypt(inputanEmailz, encryptionKey);

            emLonLyIdscocok = decryptedEmailz.toString(CryptoJS.enc.Utf8);
        
            const databaseRef = ref(database, "'caredibledatabase");
            get(databaseRef).then((snapshot) => {
                if (snapshot.exists()) {
                    snapshot.forEach((childSnapshot) => {
                        var SgnuPemgmDecrypt = childSnapshot.val().email;
                        var decryptedSgnuPemgm = CryptoJS.AES.decrypt(SgnuPemgmDecrypt, encryptionKey);
                        var jawabanSgnuPemgm = decryptedSgnuPemgm.toString(CryptoJS.enc.Utf8);
                            
                        var inputanLgnpcrdpassword = childSnapshot.val().LgnExTrnL2;
                        var decryptedLgnpcrdPassword = CryptoJS.AES.decrypt(inputanLgnpcrdpassword, encryptionKey);
                        var ubahusernamekeep = decryptedLgnpcrdPassword.toString(CryptoJS.enc.Utf8);
                            
                        if (emLonLyIdscocok == jawabanSgnuPemgm) {
                            keepLoggedIncDbgst100395cocok = localStorage.getItem(ubahusernamekeep); 
                        }
                    });
                    if (keepLoggedIncDbgst100395cocok == "yes") {
                        $('.themehome').prepend('<div id="loadingselesailogin"></div>').each(function(){
                            getUsername();
                        });
                    } 
                }
            });
            
            var docreadyaccount = snapshot.val().username;
                if (docreadyaccount) {
                    $('#cekreservasi').show(function(){
                        teswindow();
                    });
                    $('.appearhome').addClass('animatedzx').show();
            }

            var dataDitemukanVerify = "false";
            var cdbDtbsEmlVerifikasi = databaseunamez+"VerifyPasien";
            var dbRefVerifikasi = ref(database, cdbDtbsEmlVerifikasi);
            get(dbRefVerifikasi).then((snapshot) => {
                if (snapshot.exists()) {
                    snapshot.forEach((childSnapshot) => {
                        var codeverifikasizz = childSnapshot.val().codeverifikasi;
                        var decryptedcodeverifikasi = CryptoJS.AES.decrypt(codeverifikasizz, encryptionKey);
                        var jawabanSgnuPemgmzz = decryptedcodeverifikasi.toString(CryptoJS.enc.Utf8);
                        var ubahusernamekeep = ptsft;
                        var keepLoggedIncDbgst100395 = localStorage.getItem(ubahusernamekeep);   
                        if (keepLoggedIncDbgst100395 == jawabanSgnuPemgmzz) {
                            dataDitemukanVerify = "true";
                            $("#pageverifikasi").remove();
                        }
                    });
                    if (dataDitemukanVerify == "true") {
                        $(".reservasi1").show();
                    }
                    if (dataDitemukanVerify == "false") {
                        $(".reservasi1").hide();
                    }
                } else {
                    $(".reservasi1").hide();
                }
            });
            
            usernametools.innerHTML = "@" + snapshot.val().username;
            ubahusername.value = snapshot.val().username;
            hiusername.value = "@"+snapshot.val().username;
  
            var AccountPlan = snapshot.val().AccountPlan;
            if(AccountPlan == "premium"){
                $('.kotakiklan').remove();
            } 
            if(AccountPlan == "free"){
                $('.kotakiklan').remove();
                $('#cekreservasi').css('cursor', 'none');
                $('#overlaycekreservasi').remove();
                $('#kotakeditcekreservasi').remove();
                $('#groupcekreservasi2').remove();
                $('#groupcekreservasi').remove();
                $('#reservasi').remove();
                $('#tambahanreservasi').remove();
                $('#setelahmenu').remove();
                $('#overlaybukti').remove();
                $('#pagereservasi').remove();
                $('.kotakcancel').remove();
                $('.tmblPin').remove();
                $('.tmblUnpin').remove();
                $('.tmblDelete').css('width', '200px');
                $('.tmblDelete').css('background-size', '30%');
                $('.tmblDelete').css('background-position', '85% 50%');
                $('.titlesetingreservasi').text('Schedule Settings');
                $('#layerdisablereservasi').remove();
                $('#layerdisablecdb').remove();
                $('#kotakbioreservasi').remove();
                $('#htmlpdf').remove();
                $('#settingz').remove();
                $('#highlightz').remove();
                $('#grouphighlightz').remove();
                $('.scroll').remove();
                $('.scrollpin').remove();
                $('#kotakconcern').remove();
                $('#showall').css('background-image', 'none');
                $('#showall2').css('background-image', 'none');
            } 
            
        });

        function databaseunamezProfile() {
            onChildAdded(ref(database, databaseunamez), (snapshot) => {
    
                var inputanEmail = snapshot.val().email;
                var decryptedEmail = CryptoJS.AES.decrypt(inputanEmail, encryptionKey);
                var aktifSampai = document.getElementById('aktifSampai');

                emLonLyIds.value = decryptedEmail.toString(CryptoJS.enc.Utf8);
                aktifSampai.innerHTML = "aktif sampai : "+databasexpired;
  
            });
        }

        onChildAdded(ref(database, databasethemez), (snapshot) => {

            var nomortheme = document.getElementById('nomortheme');
            var saygreetinginput = document.getElementById('saygreetinginput');
  
            nomortheme.value = snapshot.val().jumlahnomortheme ;

            inputcolor.value = snapshot.val().themecolor;
            inputcolorz.value = snapshot.val().usernamecolor;
            inputcolorzz.value = snapshot.val().iconcolor;
            inputcolorzzz.value = snapshot.val().biocolor;
            bioprofile.value = snapshot.val().bioprofile;
            saygreeting.value = snapshot.val().saygreeting;
            fontstyle.value = snapshot.val().fontstyle;
            bentukbutton.value = snapshot.val().bentukbutton;
            bentukbutton1.value = snapshot.val().bentukbutton1;
            bentukbutton2.value = snapshot.val().bentukbutton2;
            bentukbutton3.value = snapshot.val().bentukbutton3;
            gambarbutton0.value = snapshot.val().gambarbutton0;
            gambarbutton1.value = snapshot.val().gambarbutton1;
            gambarbutton2.value = snapshot.val().gambarbutton2;
            gambarbutton3.value = snapshot.val().gambarbutton3;
            gambarbutton4.value = snapshot.val().gambarbutton4;
            gambarbutton5.value = snapshot.val().gambarbutton5;
            gambarbutton6.value = snapshot.val().gambarbutton6;
            gambarbutton7.value = snapshot.val().gambarbutton7;
            gambarbutton8.value = snapshot.val().gambarbutton8;
            gambarbutton.value = snapshot.val().gambarbutton;
            hide1result.value = snapshot.val().menudentist;
            hide2result.value = snapshot.val().menuscaling;
            hide3result.value = snapshot.val().menutambal;
            hide4result.value = snapshot.val().menubedah;
            hide5result.value = snapshot.val().menubehel;
            hide6result.value = snapshot.val().menugigitiruan;
            hide7result.value = snapshot.val().menubleaching;
            hide8result.value = snapshot.val().menuveneer;
            hide9result.value = snapshot.val().menulainnya;
            kalimatsilahkan.innerHTML = snapshot.val().bioprofile;
            saygreetinginput.value = snapshot.val().saygreeting;

            $("body").css('background-color', inputcolor.value);
            $("#inputcolor").css('background-color', inputcolor.value );
            $("#inputcolorz").css('background-color', inputcolorz.value );
            $("#inputcolorzz").css('background-color', inputcolorzz.value );
            $("#inputcolorzzz").css('background-color', inputcolorzzz.value );
            $("#usernametools").css('color', inputcolorz.value );
            $(".kalimatsilahkan").css('color', inputcolorzzz.value );
            $(".drgbg").css('background-color', inputcolorzz.value );
            $(".scalingbg").css('background-color', inputcolorzz.value );
            $(".tambalbg").css('background-color', inputcolorzz.value );
            $(".bedahbg").css('background-color', inputcolorzz.value );
            $(".behelbg").css('background-color', inputcolorzz.value );
            $(".gigitiruanbg").css('background-color', inputcolorzz.value );
            $(".bleachingbg").css('background-color', inputcolorzz.value );
            $(".veneerbg").css('background-color', inputcolorzz.value );
            $(".lainnyabg").css('background-color', inputcolorzz.value );
            $(".infos").css('background-color', inputcolorzz.value );
            $(".reservasi").css('background-color', inputcolorzz.value );
            $(".isiform").css('background-color', inputcolorzz.value );
            $(".reservasis").css('background-color', inputcolorzz.value );
            $(".titledentist").css('background-color', inputcolorzz.value );
            $("#cekreservasi").css('background-color', inputcolorzz.value );
            $("#saygreetinginput").css('background-color', inputcolorzz.value );
            $("#googlemaps").css('background-color', inputcolorzz.value );
            $("#activity").css('background-color', inputcolorzz.value );

            $("#googlemaps").css('font-family', fontstyle.value );
            $("#activity").css('font-family', fontstyle.value );
            $("#saygreetinginput").css('font-family', fontstyle.value );
            $("#usernametools").css('font-family', fontstyle.value );
            $(".kalimatsilahkan").css('font-family', fontstyle.value );
            $(".list-itemdrg").css('font-family', fontstyle.value );
            $(".list-itemjadwal").css('font-family', fontstyle.value );
            $(".titlebuttondrg").css('font-family', fontstyle.value );
            $(".titlebuttonscaling").css('font-family', fontstyle.value );
            $(".titlebuttontambal").css('font-family', fontstyle.value );
            $(".titlebuttonbedah").css('font-family', fontstyle.value );
            $(".titlebuttonbehel").css('font-family', fontstyle.value );
            $(".titlebuttongigitiruan").css('font-family', fontstyle.value );
            $(".titlebuttonbleaching").css('font-family', fontstyle.value );
            $(".titlebuttonveneer").css('font-family', fontstyle.value );
            $(".titlebuttonlainnya").css('font-family', fontstyle.value );
            $(".titleinfos").css('font-family', fontstyle.value );
            $("#bloknamaverifikasi1").css('font-family', fontstyle.value );
            $("#bloknamaverifikasi2").css('font-family', fontstyle.value );
            $("#confirmkode").css('font-family', fontstyle.value );
            $(".g_id_signin").css('font-family', fontstyle.value );
            $(".readmore").css('font-family', fontstyle.value );
            $("#jawabannamapasien").css('font-family',fontstyle.value);
            $("#jawabanalamat").css('font-family',fontstyle.value);
            $("#jawabanjeniskelamin").css('font-family',fontstyle.value);
            $("#jawabantanggallahir").css('font-family',fontstyle.value);
            $("#jawabanumurangka").css('font-family',fontstyle.value);
            $("#jawabanumurtahunbulan").css('font-family',fontstyle.value);
            $("#jawabankeluhan").css('font-family',fontstyle.value);
            $("#jawabanalergi").css('font-family',fontstyle.value);
            $("#jawabanfotokeluhanz").css('font-family',fontstyle.value);
            $("#jawabanjadwal").css('font-family',fontstyle.value);
            $(".jawabanjams").css('font-family',fontstyle.value);
            $(".jawabanjamsdokter").css('font-family',fontstyle.value);
            $("#jawabanhp").css('font-family',fontstyle.value);
            $(".cancelmenuss").css('font-family', fontstyle.value );
            $("#cancelreservasi").css('font-family', fontstyle.value );
            $("#canceljudul").css('font-family', fontstyle.value );
            $(".bloknamadentist").css('font-family', fontstyle.value );
            $(".bloknamaMenu").css('font-family', fontstyle.value );
            $(".titledentist").css('font-family', fontstyle.value );
            $(".reservasi").css('font-family', fontstyle.value );
            $(".isiform").css('font-family', fontstyle.value );
            $(".yakinform").css('font-family', fontstyle.value );
            $(".kirimform").css('font-family', fontstyle.value );
            $(".suksesform").css('font-family', fontstyle.value );
            $(".gambarsuksesform").css('font-family', fontstyle.value );
            $(".gambarkiriminfo").css('font-family', fontstyle.value );
            $(".tulisankiriminfo").css('font-family', fontstyle.value );

            $(".titlebuttoninfo").css('font-family', fontstyle.value );
            $(".titlebuttoninfo").css('color', 'rgb(175, 175, 175)' );
            $(".titlebuttoninfo").css('font-size', '10px' );
            $(".titlebuttoninfo").css('font-weight', '600' );  
            $(".titlebuttondrg").css('color', 'black' );
            $(".titlebuttonscaling").css('color', 'black' );
            $(".titlebuttontambal").css('color', 'black' );
            $(".titlebuttonbedah").css('color', 'black' );
            $(".titlebuttonbehel").css('color', 'black' );
            $(".titlebuttongigitiruan").css('color', 'black' );
            $(".titlebuttonbleaching").css('color', 'black' );
            $(".titlebuttonveneer").css('color', 'black' );
            $(".titlebuttonlainnya").css('color', 'black' );
            $("#drgbutton").prop('disabled', false );
            $("#healthbutton").prop('disabled', false );
            $("#groombutton").prop('disabled', false );
            $("#hotelbutton").prop('disabled', false );
            $("#pacakbutton").prop('disabled', false );
            $("#adoptionbutton").prop('disabled', false );
            $("#bleachbutton").prop('disabled', false );
            $("#veneerbutton").prop('disabled', false );
            $("#lainnyabutton").prop('disabled', false );

            $("#drgbutton").css('border-radius', bentukbutton.value );
            $("#healthbutton").css('border-radius', bentukbutton.value );
            $("#groombutton").css('border-radius', bentukbutton.value );
            $("#hotelbutton").css('border-radius', bentukbutton.value );
            $("#pacakbutton").css('border-radius', bentukbutton.value );
            $("#adoptionbutton").css('border-radius', bentukbutton.value );
            $("#bleachbutton").css('border-radius', bentukbutton.value );
            $("#veneerbutton").css('border-radius', bentukbutton.value );
            $("#lainnyabutton").css('border-radius', bentukbutton.value );
            $(".blokimagedentist").css('border-radius', bentukbutton1.value );
            $(".blokimageMenu").css('border-radius', bentukbutton1.value );
            $("#logoprofile").css('border-radius', bentukbutton.value );
            $("#cekreservasi").css('border-radius', bentukbutton.value );
            $("#saygreetinginput").css('border-radius', bentukbutton3.value );
            $(".borderlistz").css('border-radius', bentukbutton1.value );
            $(".borderlistzpin").css('border-radius', bentukbutton1.value );
            $(".list-item").css('border-radius', bentukbutton2.value );
            $(".list-itempin").css('border-radius', bentukbutton2.value );
            $(".list-itemdrg").css('border-radius', bentukbutton3.value );
            $(".list-itemjadwal").css('border-radius', bentukbutton3.value );
            $(".reservasi").css('border-radius', bentukbutton3.value );
            $(".isiform").css('border-radius', bentukbutton3.value );
            $(".yakinform").css('border-radius', bentukbutton3.value );
            $(".kirimform").css('border-radius', bentukbutton3.value );
            $(".suksesform").css('border-radius', bentukbutton3.value );
            $("#googlemaps").css('border-radius', bentukbutton3.value );

            document.getElementById('drgbutton').className = gambarbutton0.value;
            document.getElementById('healthbutton').className = gambarbutton1.value;
            document.getElementById('groombutton').className = gambarbutton2.value;
            document.getElementById('hotelbutton').className = gambarbutton3.value;
            document.getElementById('pacakbutton').className = gambarbutton4.value;
            document.getElementById('adoptionbutton').className = gambarbutton5.value;
            document.getElementById('bleachbutton').className = gambarbutton6.value;
            document.getElementById('veneerbutton').className = gambarbutton7.value;
            document.getElementById('lainnyabutton').className = gambarbutton8.value;

            var saygreetingz = document.getElementById('saygreeting').value;
            if(saygreetingz.length > 1) {
                $("#saygreetinginput").show();
            }
            if(saygreetingz.length < 1) {
                $("#saygreetinginput").remove();
            }
            setTimeout(function(){
                var saygreetinginput = document.querySelector("#saygreetinginput");
                $(saygreetinginput).css('width', (saygreetinginput.scrollWidth + 1) + 'px');
            }, 1500);
            setTimeout(function(){
                $("#saygreetinginput").css('width', '110px');
            }, 5000);

            if (inputcolorzz.value == "#ffffff" ) {  
                $("#saygreetinginput").css('color', "black" );              
                $(".titledentist").css('color', "black" );
                $(".titledentist").css('border-bottom', "0.7px solid rgb(210, 210, 210)" );
                $(".reservasi").css('color', "black" );
                $(".reservasi").css('background-image', 'url("https://lh3.googleusercontent.com/7C3-7z6G-w0ZhES7wa1c-I6nvBYDEqSlDflkBAcZ303beyC_nYqJY_8Iw5N44Q_jQXqONX4VNEiCETy9RDc2zMXXqS81Wg0EpkJISqoogbFl0fzcEksEcjpKl47_Ht4NO2h-LARrrQ=w2400")');
                $(".isiform").css('color', "black" );
                $(".isiform").css('background-image', 'url("https://lh3.googleusercontent.com/XPqvsn707ahBeCmfMWUPEW84DAXIdA8YFpNllV0MhnrVFNkpDFS3BFs4RmNZqevhBpsrdReqI7NaUDUDl9f-7nRf_BEdnfvpmuGxh5E-lwsyOoy_IRwgDzDixfgQELOKVceHKtlcCQ=w2400")');
                $(".titleinfos").css('color', "black" );
                $(".infos").css('color', "black" );
                $(".infos").css('border-bottom', "0.7px solid rgb(210, 210, 210)" );
                $(".infos").css('background-image', 'url("https://lh3.googleusercontent.com/XvNz1jMbYM5LXFdI6TqTWqkWtgDJTfcjgXsyJrmztYSi2_fQ1voITN0Hzrd68covVyJCM1B5sU0m1ITUlHDQhMIkC481jcwyZAibB6yzFQiv02PNu09zo-TnZ1oaWuTBdjxYyHAGxw=w2400")');
                $(".reservasis").css('color', "black" );
                $(".reservasis").css('border-bottom', "0.7px solid rgb(210, 210, 210)" );
                $("#reservasipernah").css('background-image', 'url("https://lh3.googleusercontent.com/pw/AJFCJaVUVhbCuOEkNor4BN71-4Q73KHnjzWoUNCm94UPsF2KOf2Ojd8ys6-a0la_toB3G0Y07HG9ycPxH8hzseWtu6BFTdBaESLkb0odJNrLdKAf0Gc3gcE=w2400")');
                $("#reservasisnama").css('background-image', 'url("https://lh3.googleusercontent.com/oSzZo0EKW4HA6d6Tc92V8QKMz_enUcS3yBUc0i129xid_bFvSGgzZ-KshjCKlkVoubvwigRkBlgNOvIAeIxAOsW1MHojbfLK2Lf3QzjwhZ0rtljkpVwDn6ejPzq_darcPAiolZCBjg=w2400")');
                $("#reservasialamat").css('background-image', 'url("https://lh3.googleusercontent.com/4YpFTQUYtbXI0b6L-PImsAYkbYkRbD3wl928AvqDWeHLmFENlSOhhdvDanp259JAKh9krJ6q2LtSUT3DfoBFip3wSGypWfDdKj0nlu-Vubo_ZKASq2CMyH0aojs-5NlzND6gZHxCkg=w2400")');
                $("#reservasialamat").css('background-size', '7%');
                $("#reservasisjenis").css('background-image', 'url("https://lh3.googleusercontent.com/HMx5-hhJLd5wBxXhMHQXOXtqbCMNH9Fly1a25AgYXH5KQ-_5Ud84yMjIPkjBrDQq8lj2Lh8Pmzc6GjK_TrlY83i3qujtD53bHMnYoFdHFpP75HeRrXy63cp61smf3tfCem5yrWpYdQ=w2400")');
                $("#reservasistanggal").css('background-image', 'url("https://lh3.googleusercontent.com/aodJFFWwAbANUQNga6KCeXwKrJJTxDejZ7H9OMrBg1nCbFZtUNJsdLezNEb6ynYPoCKMod9k8mmd-r27sHsGpV3ksDnlGz-92F41iUOY-mTiPHI44OCfAtPpEAYBlX4Pn0PA3kJsDg=w2400")');
                $("#reservasisumur").css('background-image', 'url("https://lh3.googleusercontent.com/UHmT6CNCsIf6LEz6HqlDMRHaKxWITXnKFVUg4MUKP1KhumLxWIm5bOh2LS09r8o2KCWLsOc8wtwZul6dKv7gtVEOFfTiZV28sEK2w4DFCUv8r9yYClrRYBPA7tAWUkGium_4A6elTg=w2400")');
                $("#reservasikeluhan").css('background-image', 'url("https://lh3.googleusercontent.com/m9QAKErDCVadK-veO3nNoY8AnO-dSApPpYg6VPYyAH6H1-xPT9PWUA2RPqkjK8mlxKvMTwKLRjMPksyhsF7xzgzrr4SQS5uKwxF7J7K5rmJcpsG7PXvNO2D7Gq56EzDk0gtljqHRJA=w2400")');
                $("#reservasisjadwal").css('background-image', 'url("https://lh3.googleusercontent.com/X7oXpj28aeZ4SIVaEo8MFiPJoyfS_1NycisxBqp8_SaW_Uy9QpmrV30utoA_9cl0zl9Yr7UipCSRlPhgkT5Htptes_F4oQzJmqUVHlw1Z6KR1KOApkoQlQTcx6G4Zwb1MuPGtrRuOA=w2400")');
                $("#reservasiswa").css('background-image', 'url("https://lh3.googleusercontent.com/zsh_G9iIjWa07o3_OvxP_nzQOpr0GeCNmG_9RlSgsqZBJM9qgeCltgWRQaz0eVDqvKmpR8RPwRh6TvDDMlULIhmWKhubT8dqmUpDddI_A9vxBcS_fWQVvEYPKhW-_FaUAnKRwm8jQQ=w2400")');
                $("#reservasiswa").css('background-size', '7%');
                $("#cekreservasi").css('background-image', 'url("https://lh3.googleusercontent.com/pw/AJFCJaVLBWEgZfzAB0IlYMS8om60mtzNyT6qJJbQVxDT_ZHTFZ1-GL4SZVKxjrqfAPZppNHDHqdT8bU6xZh3dHqFoGUbwRmMVHz_560rgFETSrv6iDXt0c8=w2400")');
                $(".drgbg").css('background-color', "black" );
                $(".scalingbg").css('background-color', "black" );
                $(".tambalbg").css('background-color', "black" );
                $(".bedahbg").css('background-color', "black" );
                $(".behelbg").css('background-color', "black" );
                $(".gigitiruanbg").css('background-color', "black" );
                $(".bleachingbg").css('background-color', "black" );
                $(".veneerbg").css('background-color', "black" );
                $(".lainnyabg").css('background-color', "black" );
                $("#googlemaps").css('color', "black" ); 
                $("#activity").css('color', "black" ); 
                document.getElementById('googlemaps').className = "gmapsdark";
            } else {
                document.getElementById('googlemaps').className = "gmapslight";
            }

            if (fontstyle.value == "Poppins" ) {
                
                checkboxfont1.checked = true ;

            }

            if (fontstyle.value == "Noto Sans" ) {
                
                checkboxfont2.checked = true ;
                $('.gambaryakininfo').css('margin-left', '87px');

            }

            if (fontstyle.value == "Open Sans" ) {
                
                checkboxfont3.checked = true ;
                $('.gambaryakininfo').css('margin-left', '87px');

            }

            if (fontstyle.value == "Source Serif Pro" ) {
                
                checkboxfont4.checked = true ;
                $('.gambaryakininfo').css('margin-left', '95px');
                $('.gambarkiriminfo').css('margin-top', '3px');

            }
            
            if (bentukbutton.value == "10px" ) {
                jepitz.checked = false ; 
                jepit.checked = true ;
            }

            if (bentukbutton.value == "100px" ) {
                jepitz.checked = true ; 
                jepit.checked = false ;
            }

            if (hide1result.value == "hide" ) {
                checkboxmetode1ssx.checked = true ; 
                buttonz1.style.display = "none" ;
            }
  
            if (hide2result.value == "hide" ) {                
                checkboxmetode2ssx.checked = true ; 
                buttonz2.style.display = "none" ;
            }
  
            if (hide3result.value == "hide" ) {
                checkboxmetode3ssx.checked = true ; 
                buttonz3.style.display = "none" ;
            }
  
            if (hide4result.value == "hide" ) {
                checkboxmetode4ssx.checked = true ; 
                buttonz4.style.display = "none" ;
            }

            if (hide5result.value == "hide" ) {
                checkboxmetode5ssx.checked = true ; 
                buttonz5.style.display = "none" ;
            }

            if (hide6result.value == "hide" ) {
                checkboxmetode6ssx.checked = true ; 
                buttonz6.style.display = "none" ;
            }

            if (hide7result.value == "hide" ) {
                checkboxmetode7ssx.checked = true ; 
                buttonz7.style.display = "none" ;
            }

            if (hide8result.value == "hide" ) {
                checkboxmetode8ssx.checked = true ; 
                buttonz8.style.display = "none" ;
            }

            if (hide9result.value == "hide" ) {
                checkboxmetode9ssx.checked = true ; 
                buttonz9.style.display = "none" ;
            }

            if (gambarbutton.value == "type 1" ) {

                $('.klmpbutton').css('display', '');
                $('.drgbg').css('width', '61px');
                $('.drgbg').css('height', '61px');
                $('.drgbg').css('max-height', '61px');
                $('.drgbg').css('max-width', '61px');

                $('.scalingbg').css('width', 'auto');
                $('.scalingbg').css('height', '61px');
                $('.scalingbg').css('max-height', '61px');
                $('.scalingbg').css('max-width', '101px');
                $('.scalingbg').css('margin-left', '12px');

                $('.tambalbg').css('width', '61px');
                $('.tambalbg').css('height', '61px');
                $('.tambalbg').css('max-height', '61px');
                $('.tambalbg').css('max-width', '61px');

                $('.bedahbg').css('width', 'auto');
                $('.bedahbg').css('height', '61px');
                $('.bedahbg').css('max-height', '61px');
                $('.bedahbg').css('max-width', '101px');
                $('.bedahbg').css('margin-left', '12px');

                $('.behelbg').css('width', '61px');
                $('.behelbg').css('height', '61px');
                $('.behelbg').css('max-height', '61px');
                $('.behelbg').css('max-width', '61px');

                $('.gigitiruanbg').css('width', '61px');
                $('.gigitiruanbg').css('height', '61px');
                $('.gigitiruanbg').css('max-height', '61px');
                $('.gigitiruanbg').css('max-width', '61px');

                $('.bleachingbg').css('width', '61px');
                $('.bleachingbg').css('height', '61px');
                $('.bleachingbg').css('max-height', '61px');
                $('.bleachingbg').css('max-width', '61px');

                $('.veneerbg').css('width', '61px');
                $('.veneerbg').css('height', '61px');
                $('.veneerbg').css('max-height', '61px');
                $('.veneerbg').css('max-width', '61px');

                $('.lainnyabg').css('width', '61px');
                $('.lainnyabg').css('height', '61px');
                $('.lainnyabg').css('max-height', '61px');
                $('.lainnyabg').css('max-width', '61px');

                $('.titlebuttoninfo').css('margin-top', "0px");
                $('.titlebuttondrg').css('margin-left', '0px');
                $('.titlebuttondrg').css('margin-right', '0px');
                $('.titlebuttondrg').css('margin-top', '0px');
                $('.titlebuttondrg').css('margin-bottom', '0px');
                $('.titlebuttonscaling').css('margin-left', '0px');
                $('.titlebuttonscaling').css('margin-right', '0px');
                $('.titlebuttonscaling').css('margin-top', '0px');
                $('.titlebuttonscaling').css('margin-bottom', '0px');
                $('.titlebuttontambal').css('margin-left', '0px');
                $('.titlebuttontambal').css('margin-right', '0px');
                $('.titlebuttontambal').css('margin-top', '0px');
                $('.titlebuttontambal').css('margin-bottom', '0px');
                $('.titlebuttonbedah').css('margin-left', '0px');
                $('.titlebuttonbedah').css('margin-right', '0px');
                $('.titlebuttonbedah').css('margin-top', '0px');
                $('.titlebuttonbedah').css('margin-bottom', '0px');
                $('.titlebuttonbehel').css('margin-left', '0px');
                $('.titlebuttonbehel').css('margin-right', '0px');
                $('.titlebuttonbehel').css('margin-top', '0px');
                $('.titlebuttonbehel').css('margin-bottom', '0px');
                $('.titlebuttongigitiruan').css('margin-left', '0px');
                $('.titlebuttongigitiruan').css('margin-right', '0px');
                $('.titlebuttongigitiruan').css('margin-top', '0px');
                $('.titlebuttongigitiruan').css('margin-bottom', '0px');
                $('.titlebuttonbleaching').css('margin-left', '0px');
                $('.titlebuttonbleaching').css('margin-right', '0px');
                $('.titlebuttonbleaching').css('margin-top', '0px');
                $('.titlebuttonbleaching').css('margin-bottom', '0px');
                $('.titlebuttonveneer').css('margin-left', '0px');
                $('.titlebuttonveneer').css('margin-right', '0px');
                $('.titlebuttonveneer').css('margin-top', '0px');
                $('.titlebuttonveneer').css('margin-bottom', '0px');
                $('.titlebuttonlainnya').css('margin-left', '0px');
                $('.titlebuttonlainnya').css('margin-right', '0px');
                $('.titlebuttonlainnya').css('margin-top', '0px');
                $('.titlebuttonlainnya').css('margin-bottom', '0px');

                gmbrbtn1.checked = true ; 
                gmbrbtn1list.checked = false ; 
                gmbrbtn2.checked = false ;
                gmbrbtn2list.checked = false ;
                gmbrbtn3.checked = false ;
                gmbrbtn3list.checked = false ;
            }

            if (gambarbutton.value == "type 1 list" ) {

                $('.klmpbutton').css('display', 'flex');
                $('.drgbg').css('width', '40px');
                $('.drgbg').css('height', '40px');
                $('.drgbg').css('max-height', '40px');
                $('.drgbg').css('max-width', '40px');

                $('.scalingbg').css('width', 'auto');
                $('.scalingbg').css('height', '40px');
                $('.scalingbg').css('max-height', '40px');
                $('.scalingbg').css('max-width', '60px');
                $('.scalingbg').css('margin-left', '0px');

                $('.tambalbg').css('width', '40px');
                $('.tambalbg').css('height', '40px');
                $('.tambalbg').css('max-height', '40px');
                $('.tambalbg').css('max-width', '40px');

                $('.bedahbg').css('width', 'auto');
                $('.bedahbg').css('height', '40px');
                $('.bedahbg').css('max-height', '40px');
                $('.bedahbg').css('max-width', '60px');
                $('.bedahbg').css('margin-left', '0px');

                $('.behelbg').css('width', '40px');
                $('.behelbg').css('height', '40px');
                $('.behelbg').css('max-height', '40px');
                $('.behelbg').css('max-width', '40px');

                $('.gigitiruanbg').css('width', '40px');
                $('.gigitiruanbg').css('height', '40px');
                $('.gigitiruanbg').css('max-height', '40px');
                $('.gigitiruanbg').css('max-width', '40px');

                $('.bleachingbg').css('width', '40px');
                $('.bleachingbg').css('height', '40px');
                $('.bleachingbg').css('max-height', '40px');
                $('.bleachingbg').css('max-width', '40px');

                $('.veneerbg').css('width', '40px');
                $('.veneerbg').css('height', '40px');
                $('.veneerbg').css('max-height', '40px');
                $('.veneerbg').css('max-width', '40px');

                $('.lainnyabg').css('width', '40px');
                $('.lainnyabg').css('height', '40px');
                $('.lainnyabg').css('max-height', '40px');
                $('.lainnyabg').css('max-width', '40px');

                $('.healthbutton1list').css('padding-left', '13px');
                $('.hotelbutton1list').css('padding-left', '13px');

                $('.titlebuttoninfo').css('margin-top', "14px");
                $('.titlebuttondrg').css('margin-left', "auto");
                $('.titlebuttondrg').css('margin-right', "13px");
                $('.titlebuttondrg').css('margin-top', "13px");
                $('.titlebuttondrg').css('margin-bottom', "auto");
                $('.titlebuttonscaling').css('margin-left', "auto");
                $('.titlebuttonscaling').css('margin-right', "13px");
                $('.titlebuttonscaling').css('margin-top', "13px");
                $('.titlebuttonscaling').css('margin-bottom', "auto");
                $('.titlebuttontambal').css('margin-left', "auto");
                $('.titlebuttontambal').css('margin-right', "13px");
                $('.titlebuttontambal').css('margin-top', "13px");
                $('.titlebuttontambal').css('margin-bottom', "auto");
                $('.titlebuttonbedah').css('margin-left', "auto");
                $('.titlebuttonbedah').css('margin-right', "13px");
                $('.titlebuttonbedah').css('margin-top', "13px");
                $('.titlebuttonbedah').css('margin-bottom', "auto");
                $('.titlebuttonbehel').css('margin-left', "auto");
                $('.titlebuttonbehel').css('margin-right', "13px");
                $('.titlebuttonbehel').css('margin-top', "13px");
                $('.titlebuttonbehel').css('margin-bottom', "auto");
                $('.titlebuttongigitiruan').css('margin-left', "auto");
                $('.titlebuttongigitiruan').css('margin-right', "13px");
                $('.titlebuttongigitiruan').css('margin-top', "13px");
                $('.titlebuttongigitiruan').css('margin-bottom', "auto");
                $('.titlebuttonbleaching').css('margin-left', "auto");
                $('.titlebuttonbleaching').css('margin-right', "13px");
                $('.titlebuttonbleaching').css('margin-top', "13px");
                $('.titlebuttonbleaching').css('margin-bottom', "auto");
                $('.titlebuttonveneer').css('margin-left', "auto");
                $('.titlebuttonveneer').css('margin-right', "13px");
                $('.titlebuttonveneer').css('margin-top', "13px");
                $('.titlebuttonveneer').css('margin-bottom', "auto");
                $('.titlebuttonlainnya').css('margin-left', "auto");
                $('.titlebuttonlainnya').css('margin-right', "13px");
                $('.titlebuttonlainnya').css('margin-top', "13px");
                $('.titlebuttonlainnya').css('margin-bottom', "auto");

                gmbrbtn1.checked = false ; 
                gmbrbtn1list.checked = true ; 
                gmbrbtn2.checked = false ;
                gmbrbtn2list.checked = false ;
                gmbrbtn3.checked = false ;
                gmbrbtn3list.checked = false ;
            }
  
            if (gambarbutton.value == "type 2" ) {
                gmbrbtn1.checked = false ; 
                gmbrbtn1list.checked = false ; 
                gmbrbtn2.checked = true ;
                gmbrbtn2list.checked = false ;
                gmbrbtn3.checked = false ;
                gmbrbtn3list.checked = false ;
            }

            if (gambarbutton.value == "type 2 list" ) {
                gmbrbtn1.checked = false ; 
                gmbrbtn1list.checked = false ; 
                gmbrbtn2.checked = false ;
                gmbrbtn2list.checked = true ;
                gmbrbtn3.checked = false ;
                gmbrbtn3list.checked = false ;
            }
  
            if (gambarbutton.value == "type 3" ) {        
                gmbrbtn1.checked = false ; 
                gmbrbtn1list.checked = false ; 
                gmbrbtn2.checked = false ;
                gmbrbtn2list.checked = false ;
                gmbrbtn3.checked = true ;
                gmbrbtn3list.checked = false ;
            }

            if (gambarbutton.value == "type 3 list" ) {        
                gmbrbtn1.checked = false ; 
                gmbrbtn1list.checked = false ; 
                gmbrbtn2.checked = false ;
                gmbrbtn2list.checked = false ;
                gmbrbtn3.checked = false ;
                gmbrbtn3list.checked = true ;
            }
  
        });

        onChildAdded(ref(database, databasesosmedz), (snapshot) => {

            var nomorsosmed = document.getElementById('nomorsosmed');
  
            nomorsosmed.value = snapshot.val().jumlahnomorsosmed ;

            gambarbuttonzz.value = snapshot.val().typeiconsosmed;
            fbresult.value = snapshot.val().fbresult;
            igresult.value = snapshot.val().igresult;
            gmapsresult.value = snapshot.val().gmapsresult;
            twitterresult.value = snapshot.val().twitterresult;
            tiktokresult.value = snapshot.val().tiktokresult;
            waresult.value = snapshot.val().waresult;
            userfacebook.value = snapshot.val().userfacebook;
            userfb.value = snapshot.val().userfb;
            buttonzfb.href = snapshot.val().userfb;
            userinstagram.value = snapshot.val().userinstagram;
            userig.value = snapshot.val().userig;
            buttonzig.href = snapshot.val().userig;
            usergmaps.value = snapshot.val().usergmaps;
            buttonzgmaps.href = snapshot.val().usergmaps;
            usertwitter.value = snapshot.val().usertwitter;
            usertwt.value = snapshot.val().usertwt;
            buttonztwitter.href = snapshot.val().usertwt;
            usertiktok.value = snapshot.val().usertiktok;
            usertt.value = snapshot.val().usertt;
            buttonztiktok.href = snapshot.val().usertt;
            userwhatsapp.value = snapshot.val().userwhatsapp;
            userwht.value = snapshot.val().userwht;
            buttonzwa.href = snapshot.val().userwht;

            if (gambarbuttonzz.value == "dark" ) {
                
                checkboxmetode1sz.checked = true ; 
                checkboxmetode2sz.checked = false ;

                FB.className = "fbdark" ; 
                IG.className = "igdark" ; 
                twitter.className = "twitterdark" ; 
                tiktok.className = "tiktokdark" ; 
                WA.className = "wadark" ; 

            }

            if (gambarbuttonzz.value == "light" ) {
                
                checkboxmetode1sz.checked = false ; 
                checkboxmetode2sz.checked = true ;

                FB.className = "fblight" ; 
                IG.className = "iglight" ; 
                twitter.className = "twitterlight" ; 
                tiktok.className = "tiktoklight" ; 
                WA.className = "walight" ; 

            }

            if (fbresult.value == "true" ) {
           
                checkboxmetode1ss.checked = true ;
                var userfacebookz = document.getElementById('userfacebookz');
                userfacebookz.style.display= ""; 
                switchmetodess.style.borderBottomLeftRadius = '0px';
                switchmetodess.style.borderBottomRightRadius = '0px';
                FB.style.display= ""; 
                
            }

            if (igresult.value == "true" ) {
             
                checkboxmetode2ss.checked = true ;
                var userinstagramz = document.getElementById('userinstagramz');
                userinstagramz.style.display = ""; 
                switchmetode2ss.style.borderBottomLeftRadius = '0px';
                switchmetode2ss.style.borderBottomRightRadius = '0px';
                IG.style.display = ""; 

            }

            if (gmapsresult.value == "true" ) {
                
                checkboxmetode3ss.checked = true ;
                googlemaps.style.display = ""; 
                $('#containernamelokasi').css('padding-top', '0px');

            }

            if (twitterresult.value == "true" ) {
     
                checkboxmetode4ss.checked = true ;
                var usertwitterz = document.getElementById('usertwitterz');
                usertwitterz.style.display = ""; 
                switchmetode4ss.style.borderBottomLeftRadius = '0px';
                switchmetode4ss.style.borderBottomRightRadius = '0px';
                twitter.style.display = ""; 

            }

            if (tiktokresult.value == "true" ) {
                
                checkboxmetode5ss.checked = true ;
                var usertiktokz = document.getElementById('usertiktokz');
                usertiktokz.style.display = ""; 
                switchmetode5ss.style.borderBottomLeftRadius = '0px';
                switchmetode5ss.style.borderBottomRightRadius = '0px';
                tiktok.style.display = ""; 

            }

            if (waresult.value == "true" ) {
                
                checkboxmetode6ss.checked = true ;
                var userwhatsappz = document.getElementById('userwhatsappz');
                userwhatsappz.style.display = ""; 
                switchmetode6ss.style.borderBottomLeftRadius = '0px';
                switchmetode6ss.style.borderBottomRightRadius = '0px';
                WA.style.display = ""; 

            }
  
        });

    // ------------------------------------------------------------------------batas fetch firebaseconfig dari server PHP------------------------------------------------------------------------------------//
        
})
.catch(error => {
    console.error('Gagal mengambil konfigurasi Firebase:', error);
});