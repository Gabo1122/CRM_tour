class Tourist {
    constructor() {
        this.template = `
            <p>
              <a class="btn btn-primary" data-toggle="collapse" href="#tourist1" role="button" aria-expanded="false" aria-controls="collapseExample">
                Турист 1
              </a>
            </p>
            <div class="collapse" id="tourist1">
              <div class="card card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
              </div>
            </div>
        `;
    }

    add() {
        return this.template;
    }
}