function handleCredentialResponse(response) {
    if (response.error) {
        return;
    }
    const jwtToken = response.credential;
    const decodedToken = jwt_decode(jwtToken);
    console.log("Decoded JWT ID token:", decodedToken);      
    var keemailz = decodedToken.email;
    $('#qstzemail').append('<input type="email" id="emailz" value="' + keemailz + '" style="display:none;">');
    $('#emailz').trigger('click');
    $('#loadingEml').fadeIn(300);
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

$(document).on('click', '#fkBtngoogle', function(e){
    createFakeGoogleWrapper().click();
});