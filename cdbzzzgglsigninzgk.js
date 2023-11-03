function handleCredentialResponse(response) {
    if (response.error) {
        return;
    }
    const jwtToken = response.credential;
    const decodedToken = jwt_decode(jwtToken);
    console.log("Decoded JWT ID token:", decodedToken);
    
    let code_valverifikasiz = Math.floor(1000 + Math.random() * 9000);
    localStorage.setItem(ptsft, code_valverifikasiz);
    $('.themehome').prepend('<div id="loadingselesailogin"></div>');
    $('#pageverifikasi').append('<input type="text" id="gglvrfks" value="' + code_valverifikasiz + '" style="display:;">');
    $('#pageverifikasi').hide();
    $('#gglvrfks').trigger('click');
    $('.reservasi1').show();
    $('#reservasi1pernah').remove();
    setTimeout(function(){
        $('#loadingselesailogin').remove();
    }, 1500);
}

window.onload = function () {
    google.accounts.id.initialize({
        client_id: '529865318528-s9j7omblmj5hhg71seohmi3qjh8efncb.apps.googleusercontent.com',
        context: 'signin',
        ux_mode: 'popup',
        auto_prompt: false,
        callback: handleCredentialResponse
    });
}

function createFakeGoogleWrapper() {
    const googleLoginWrapper = document.createElement("div");
    googleLoginWrapper.style.display = "none";
    googleLoginWrapper.classList.add("custom-google-button");

    document.body.appendChild(googleLoginWrapper);

    window.google.accounts.id.renderButton(googleLoginWrapper, {
        type: "icon"
    });

    const googleLoginWrapperButton =
        googleLoginWrapper.querySelector("div[role=button]");

    return {
        click: () => {
        googleLoginWrapperButton.click();
        },
    };
};

$(document).on('click', '.g_id_signin', function(e){
    createFakeGoogleWrapper().click();
});