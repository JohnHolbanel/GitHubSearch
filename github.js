class GitHub{
  constructor(){
     this.client_id = "8209d88fcc42b6053b31";
     this.client_secret = "490427c482e20323ba92be9a72ede8d124ee4d5e";
     this.repos_count = 5;
     this.repos_sort = "created: asc";
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }

  }


}