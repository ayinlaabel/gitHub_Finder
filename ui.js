class UI {
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" class="btn btn-primary btn-block mb-4" target="_blank">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary"> Public Repos : ${user.public_repos}</span>
                        <span class="badge badge-secondary"> Public Gists : ${user.public_gists}</span>
                        <span class="badge badge-success"> Followers : ${user.followers}</span>
                        <span class="badge badge-info"> Following : ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company : ${user.company}</li>
                            <li class="list-group-item">Website/Blog : ${user.blog} </li>
                            <li class="list-group-item">Location : ${user.location} </li>
                            <li class="list-group-item">Member Since : ${user.created_at} </li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-header mb-4">Lastest Repos</h3>
            <div id="repos"></div>
        
        `;

    }

    showAlert(message, className) {
        //Clear Alert
        this.clearAlert();
        ////Creat Div
        const div = document.createElement('div');
        //Add ClassName
        div.className = className;
        //Add Text
        div.appendChild(document.createTextNode(message));

        //Get Parent
        const container = document.querySelector('.searchContainer');

        //Get Search Boox
        const search = document.querySelector('.search');

        //Insert Alert
        container.insertBefore(div, search);

        //SetTime Out
        setTimeout(() => {
            this.clearAlert();
        }, 2000)
    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert')

        if(currentAlert){
            currentAlert.remove();
        }
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }
}