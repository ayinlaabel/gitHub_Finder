class GitHub {

    constructor(){
        this.client_id = '8edfd02c6aa5e27111da';
        this.client_secret = '33ab0c91aa1ebfd8aa6b05318238c980b1e6b548';
    }

    async getUser(user){

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return{
            profile
        }
    }
}