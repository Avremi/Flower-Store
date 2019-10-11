function getGridFlowers() {
    fetch('/gridFlowers')
        .then(response => response.text())
        .then(element => $('#body').html(element))
        .then(concatePage('flowers'))
        .then(getFlowers());

    return false;
}


function getUserGrid() {
    fetch('/userGrid')
        .then(response => response.text())
        .then(userGrid => $('#body').html(userGrid))
        .then(concatePage('users'))
        .then(getUsers());
    return false;
}

function getBranchGrid() {
    fetch('/branchGrid')
        .then(response => response.text())
        .then(branchGrid => $('#body').html(branchGrid))
        .then(concatePage('branches'))
        .then(getBranches());
    return false;
}

function getFlowers() {
    console.log("trial f 1");
    fetch('/flowers')
        .then(response => response.json())
        .then(flowers => renderFlowers(flowers))
        .catch(alert("Access is not possible!!"));
}

function getUsers() {
    console.log("trial u 1");
    fetch('/users')
        .then(response => response.json())
        .then(users => renderUsers(users))
        .catch(alert("Access is not possible!!"));
}

function getBranches() {
    console.log("trial b 1");
    fetch('/branches')
        .then(response => response.json())
        .then(branches => renderBranches(branches))
        .catch(alert("Access is not possible!!"));
}




function renderFlowers(flowers) {
    console.log("trial f 2");
    flowers.forEach(element => {
        $('#gridFlower').append(`
        <div class="card">
                <!-- Card image -->
        <img class="card-img-top" src=`+ element.image + ` alt="Card image cap">
              <!-- Card content -->
        <div class="card-body">
            <!-- Title -->
            <h3 class="card-title"><a>`+ element.name + `</a></h3>
            <h4 class="card-sub-title"><a>`+ element.price + `</a></h4>
            <!-- Button -->
            <a href="#" class="btn btn-primary">by now</a>
        </div>
    </div>
        `);
    });
}



function renderUsers(users) {
    console.log("trial u 2");
    users.forEach(user => {
        $('#userGrid').append(`
        <div class="card" style="width:400px">
      <div class="card-body">
        <h4 class="card-title">`+ user.firstName + " " + user.lastName + `</h4>
        <p class="card-text">Some example text some example text. Jane Doe is an architect and engineer</p>
        <a href="#" class="btn btn-primary">See Profile</a>
      </div>
      <img class="card-img-bottom" src="images/person/person.jpg" alt="Card image" style="width:100%">
    </div>
        `);
    });
}


function renderBranches(branches) {
    console.log("trial b 2");
    branches.forEach(branch => {
        $('#branchGrid').append(`
        <div class="card" style="width:400px">
      <div class="card-body">
        <h4 class="card-title">`+ "Location: " + branch.location + `</h4>
        <p class="card-text">Some example text some example text. Jane Doe is an architect and engineer</p>
        <a href="#" class="btn btn-primary">See Profile</a>
      </div>
      <!-- <img class="card-img-bottom" src="person.jpg" alt="Card image" style="width:100%"> -->
    </div>
        `);
    });
}


function concatePage(currentPage){
    location='#'+currentPage;
}