export default class Repos {
    constructor(id, name, html_url, description, language) {
        if (!id || !name || !html_url) {
            throw new Error("Invalid repository data");
        }
        this.id = id;
        this.name = name;
        this.html_url = html_url;
        this.description = description;
        this.language = language;
    }

    /**
     * 
     * @param {Repos Object} other_repos 
     * @returns {boolean}
     */
    equals(other_repos) {
        return this.id === other_repos.id && this.name === other_repos.name && this.html_url === other_repos.html_url;
    }
}
