class Controller {
  constructor(service, view) {
    this.service = service;
    this.view = view;

    // console.log( view , service );

    this.service.bindShowUpdateSuccess(
      this.view.displaySuccess.bind(this.view)
    );
    this.service.bindRefreshMealUI(this.view.updateHTML.bind(this.view));

    this.view.bindUpdateSchedule(this.service.updateMeal.bind(this.service));

    this.view.updateHTML(this.service.getData());
  }
}
