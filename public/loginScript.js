
function resultAction(ok) {
    if (ok) {


        if (history.pushState) {
            var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname 
            + '?username='+ document.getElementById('username').value;
            window.history.pushState({path:newurl},'',newurl);
        }
        
        $('#myModal').modal("hide");
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        
        
        //I have to add username to query strubg and set the new menu
        getMenu('test');//I have to build function jthat return username from query string instead test
        getGridFlowers();
    }
    else {
        alert('Wrong Username or Password');
    };
}

function getMenu(username){
    fetch('/getMenu?username='+username)
    .then(Response => Response.text())
    .then(menu => renderMenu(menu))

}

function renderMenu(element){
    $('#menu').html(element);
}