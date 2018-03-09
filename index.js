export class SlackIntegration {
  constructor() {
    this._url = "";
  }
  set url(url) { // @arg WebHookURL
    this._url = url;
  }
  get url() { // @ret URLString
    return this._url;
  }
  async post(json) { // @arg JSONObject - { text: message }
    const url = this._url;
    const method = "POST";
    const header = {
      "Accept": "application/json",
      "Content-Type": "application/json",
    };
    const body = JSON.stringify(json);
    const resp = await fetch(url, { method, header, body });
    if (resp.ok) {
      return 200;
    }
    return resp.status;
  }
}
