//Init GitHub
const github = new GitHub; 

//Init UI
const ui = new UI;

//Search Here
const searchUser = document.getElementById('searchUser');

//Search Input EventListener
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if (userText != '') {
        // console.log(userText);

        github.getUser(userText).then(
            data => {
                if (data.profile.message === 'Not Found') {
                    //Show Alert
                    ui.showAlert('User not Found on GitHub', 'alert alert-danger text-center')
                }else{
                    //Show Profile
                    ui.showProfile(data.profile)
                }
            }
        )
    }else{
        //Clear Profile
        ui.clearProfile();
    }
})