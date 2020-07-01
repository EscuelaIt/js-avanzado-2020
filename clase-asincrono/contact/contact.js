import { html, render } from "lit-html";

export class Contact {
  constructor(user) {
    this.name = user.name.first;
    this.telephone = user.phone;
    this.avatarImage = user.picture.thumbnail;
    this.shake = false;
    this.render();
  }
  
  render() {
    let newUser = document.createElement('div');
    render(this.template, newUser);
    document.body.append(newUser);
  }

  get template() {
    return html`
      <article
        class="contact-container"
        @click="${this.doShake}"
      >
        <div class="contact-avatar">
          <img src="${this.avatarImage}" />
        </div>
        <div class="contact-content">
          <span class="contact-name">${this.name}</span>
          <span class="contact-telephone">${this.telephone}</span>
        </div>
      </article>
    `;
  }

  doShake() {
    this.classList.add("shakerclass");
    if(! this.shake) {
      setTimeout(() => this.classList.remove("shakerclass"), 500);
    }
  }
}
