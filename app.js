//Init Github
const github = new GitHub;

//Init UI
const ui = new UI;
//Search input
const searchUser = document.getElementById('search-user');

//Searcg input event listener
searchUser.addEventListener('keyup', (e) => {
    //Get input text
    const userText = e.target.value;
    
    if(userText !== ''){
        //console.log(userText);
        //Make HTTP call
        github.getUser(userText)
            .then(data => {
                //console.log(data);
                if(data.profile.message === 'Not Found'){
                    // Show alert
                    ui.showAlert('User not found', 'alert alert-danger');
                }else{
                    //Show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    }else{
        // Clear proile
        ui.clearProfile();
    }
});