function Controller(service, view) {
  this.service = service;
  this.view = view;

  // console.log( service, view , view instanceof Service);

  this.service.bindShowUpdateSuccess(
    this.view.displayStatus.bind(this.view, 1)
  );
  this.service.bindRefreshMealUI(this.view.updateHTML.bind(this.view));
  this.service.bindShowUpdateFail(this.view.displayStatus.bind(this.view, 0));

  this.view.bindUpdateSchedule(this.service.updateMeal.bind(this.service));

  this.view.updateHTML(this.service.getData());
}
