var s1 = document.querySelector('#s1');
        var s2 = document.querySelector('#s2');
        var s3 = document.querySelector('#s3');
        var s4 = document.querySelector('#s4');
        var s5 = document.querySelector('#s5');

        var profileupdate = document.createElement("button");
        profileupdate.id = 'applyubah';
        profileupdate.className = 'cssUpdt';
        profileupdate.innerText = 'update';
        profileupdate.disabled = true;

        var profileloading = document.createElement("button");
        profileloading.id = 'loadingubah';
        profileloading.className = 'cssLdng';
        profileloading.style.display = 'none';
        profileloading.innerHTML = 'loading';

        var profilefotoupdate = document.createElement("button");
        profilefotoupdate.id = 'applyfoto';
        profilefotoupdate.className = 'cssUpdt';
        profilefotoupdate.innerText = 'update';
        profilefotoupdate.style.display = 'none';
        profilefotoupdate.disabled = true;

        var profilefotoloading = document.createElement("button");
        profilefotoloading.id = 'loadingfoto';
        profilefotoloading.className = 'cssLdng';
        profilefotoloading.style.display = 'none';
        profilefotoloading.innerHTML = 'loading';
        
        var themefotoupdate = document.createElement("button");
        themefotoupdate.id = 'applyBG';
        themefotoupdate.className = 'cssUpdt';
        themefotoupdate.innerText = 'update';
        themefotoupdate.style.display = 'none';
        themefotoupdate.disabled = true;

        var themefotoloading = document.createElement("button");
        themefotoloading.id = 'loadingBG';
        themefotoloading.className = 'cssLdng';
        themefotoloading.style.display = 'none';
        themefotoloading.innerHTML = 'loading';

        var themeupdate = document.createElement("button");
        themeupdate.id = 'applyubahs';
        themeupdate.className = 'cssUpdt';
        themeupdate.innerText = 'update';
        themeupdate.disabled = true;

        var themeloading = document.createElement("button");
        themeloading.id = 'loadingubahs';
        themeloading.className = 'cssLdng';
        themeloading.style.display = 'none';
        themeloading.innerHTML = 'loading';

        var sosmedupdate = document.createElement("button");
        sosmedupdate.id = 'applyubahssz';
        sosmedupdate.className = 'cssUpdt';
        sosmedupdate.innerText = 'update';
        sosmedupdate.disabled = true;

        var sosmedloading = document.createElement("button");
        sosmedloading.id = 'loadingubahssz';
        sosmedloading.className = 'cssLdng';
        sosmedloading.style.display = 'none';
        sosmedloading.innerHTML = 'loading';

        s1.append(profileupdate, profileloading);
        s2.append(profilefotoupdate, profilefotoloading);
        s3.append(themefotoupdate, themefotoloading);
        s4.append(themeupdate, themeloading);
        s5.append(sosmedupdate, sosmedloading);

        $('.settingprofilebutton').click(function(){
            if (this.value == 'hide') {
                this.value = "show";
                $(this).css('background-image', 'url("https://lh3.googleusercontent.com/s5gVSqIiT9dK6iJzHN_z7JNBNHdXvaTozCSBODlrw9IQYhefLwabkihI2VW5aEP3Fd1KTMHngZzrgZA2NztTR3GyV7blt6Mzgf2HnLGZ2ovvnFt8hN4RYrrOcaQIfgob9HCZgK9sqQ=w2400")');
                $('#kotakeditprofile').slideDown(200);  
            } else {
                this.value = "hide";
                $(this).css('background-image', 'url("https://lh3.googleusercontent.com/8wxcyLjwjkqm4mAsVrv2bHPAzxP8fwOhNx-oK4l3QSpes5CyiNapYEcv8Eci_jwdrqZIUUlIo48KYXyHz_Q_I15zeC9uV2lsi-_-ShIrmAh6WfrfS6TEt9vpdK7iXB11MdymUQuXZg=w2400")'); 
                $('#kotakeditprofile').slideUp(150);            
            }
        });

        $('#enkripsicsstextbutton').click(function(){
            if (this.value == 'hide') {
                this.value = "show";
                $(this).css('background-image', 'url("https://lh3.googleusercontent.com/VRKaiRNbD6Xs8TPs5n9H7xFjWRp35dmvy-XxT6eZyVHI---gSl3wz0rUc3ie0C_kkfg6hEAOHKu1gUQYh651ACQSvHS6tUNHDcImgmMq2n6M76nTtJxj2i6WIBl3dCoHiwRdDXiv9Q=w2400")');
                $('#keteranganenkripsi').slideDown(200);    
            } else {
                this.value = "hide";
                $(this).css('background-image', 'url("https://lh3.googleusercontent.com/pw/AJFCJaUyfzoxukSkZtUUN5gGmeEIBgKwl60_8tllLr9CnYqHPutOfW2NNksRCBlw8nip2rDpylWTxCLNj051zG5o7cg1Stamg0XgHKjHCZN2x9BVK2EI3Kk=w2400")');
                $('#keteranganenkripsi').slideUp(150);   
                  
            }
        });

        $('.enkripsicsstextbuttonnewdone').click(function(){
            if (this.value == 'hide') {
                this.value = "show";
                $(this).css('background-image', 'url("https://lh3.googleusercontent.com/VRKaiRNbD6Xs8TPs5n9H7xFjWRp35dmvy-XxT6eZyVHI---gSl3wz0rUc3ie0C_kkfg6hEAOHKu1gUQYh651ACQSvHS6tUNHDcImgmMq2n6M76nTtJxj2i6WIBl3dCoHiwRdDXiv9Q=w2400")');
                $('.keteranganenkripsinewdone').slideDown(200);    
            } else {
                this.value = "hide";
                $(this).css('background-image', 'url("https://lh3.googleusercontent.com/pw/AJFCJaUyfzoxukSkZtUUN5gGmeEIBgKwl60_8tllLr9CnYqHPutOfW2NNksRCBlw8nip2rDpylWTxCLNj051zG5o7cg1Stamg0XgHKjHCZN2x9BVK2EI3Kk=w2400")');
                $('.keteranganenkripsinewdone').slideUp(150);   
                  
            }
        });

        function countdownzenter() {
            timeoutID = window.setTimeout(slowAlertz, 25000);
            timehilang = window.setTimeout(countdownz, 1000);                 
            timeLeft = 25;
        }

        function countdownz() {       
            timeLeft--;
            document.getElementById("seconds").innerHTML = timeLeft;
            if (timeLeft > 0) {
                setTimeout(countdownz, 1000);
            }
        }

        function slowAlertz() {
            $('#clock').hide();
            $('#seconds').remove();
            $('#enteredit').fadeIn();
        }