import { ShiftService } from "./services/shift.service";
import { PersonnelService } from "./services/personnel.service";
import { OperationStationService } from "./services/operation-station.service";
import { OperationStationFormComponent } from "./components/operation-station-form/operation-station-form.component";
import { ProductLineService } from "./services/product-line.service";
import { ProductLineFormComponent } from "./components/product-line-form/product-line-form.component";
import { MachineService } from "./services/machine.service";
import { MachineFormComponent } from "./components/machine-form/machine-form.component";
import { FactoryService } from "./services/factory.service";
import { FormMode } from "./../../shared/ax-form/models/form-mode.model";
import { FactoryFormComponent } from "./components/factory-form/factory-form.component";
import { PersonnelListComponent } from "./components/personnel-list/personnel-list.component";
import { ShiftListComponent } from "./components/shift-list/shift-list.component";
import { OperationStationListComponent } from "./components/operation-station-list/operation-station-list.component";
import { MachineListComponent } from "./components/machine-list/machine-list.component";
import { ProductLineListComponent } from "./components/product-line-list/product-line-list.component";
import { FactoryListComponent } from "./components/factory-list/factory-list.component";
import { Routes } from "@angular/router";
import { PersonnelFormComponent } from "./components/personnel-form/personnel-form.component";
import { ShiftFormComponent } from "./components/shift-form/shift-form.component";
import { ProductInstanceListComponent } from "./components/product-instance-list/product-instance-list.component";
import { ProductHistoryListComponent } from "./components/product-history-list/product-history-list.component";
import { DamagedListComponent } from "./components/damaged-list/damaged-list.component";
import { StopListComponent } from "./components/stop-list/stop-list.component";

export const TrackingSystemRoutes: Routes = [
  {
    path: "factories",
    data: {
      breadcrumb: "?????????????? ????",
    },
    children: [
      {
        path: "",
        component: FactoryListComponent,
        data: {
          breadcrumb: null,
        },
      },
      {
        path: "new",
        component: FactoryFormComponent,
        data: {
          breadcrumb: "?????????????? ????????",
          formMode: FormMode.New,
        },
      },
      {
        path: "edit/:factoryId",
        component: FactoryFormComponent,
        data: {
          breadcrumb: "???????????? ?????????????? ??????????????",
          formMode: FormMode.Edit,
        },
        resolve: {
          factoryDetail: FactoryService,
        },
      },
    ],
  },
  {
    path: "productLines",
    data: {
      breadcrumb: "???? ?????? ??????????",
    },
    children: [
      {
        path: "",
        component: ProductLineListComponent,
        data: {
          breadcrumb: null,
        },
      },
      {
        path: "new",
        component: ProductLineFormComponent,
        data: {
          breadcrumb: "?????????????? ???????? ????????",
          formMode: FormMode.New,
        },
      },
      {
        path: "edit/:productLineId",
        component: ProductLineFormComponent,
        data: {
          breadcrumb: "???????????? ?????????????? ????????",
          formMode: FormMode.Edit,
        },
        resolve: {
          productLineDetail: ProductLineService,
        },
      },
    ],
  },
  {
    path: "machines",
    data: {
      breadcrumb: "?????????? ????",
    },
    children: [
      {
        path: "",
        component: MachineListComponent,
        data: {
          breadcrumb: null,
        },
      },
      {
        path: "new",
        component: MachineFormComponent,
        data: {
          breadcrumb: "?????????? ????????",
          formMode: FormMode.New,
        },
      },
      {
        path: "edit/:machineId",
        component: MachineFormComponent,
        data: {
          breadcrumb: "???????????? ?????????????? ??????????",
          formMode: FormMode.Edit,
        },
        resolve: {
          machineDetail: MachineService,
        },
      },
    ],
  },
  {
    path: "operationStations",
    data: {
      breadcrumb: "?????????????? ?????? ????????",
    },
    children: [
      {
        path: "",
        component: OperationStationListComponent,
        data: {
          breadcrumb: null,
        },
      },
      {
        path: "new",
        component: OperationStationFormComponent,
        data: {
          breadcrumb: "?????????????? ???????? ????????",
          formMode: FormMode.New,
        },
      },
      {
        path: "edit/:operationStationId",
        component: OperationStationFormComponent,
        data: {
          breadcrumb: "???????????? ?????????????? ????????",
          formMode: FormMode.Edit,
        },
        resolve: {
          operationStationDetail: OperationStationService,
        },
      },
    ],
  },
  {
    path: "shifts",
    data: {
      breadcrumb: "???????? ????",
    },
    children: [
      {
        path: "",
        component: ShiftListComponent,
        data: {
          breadcrumb: null,
        },
      },
      {
        path: "new",
        component: ShiftFormComponent,
        data: {
          breadcrumb: "???????? ????????",
          formMode: FormMode.New,
        },
      },
      {
        path: "edit/:shiftId",
        component: ShiftFormComponent,
        data: {
          breadcrumb: "???????????? ????????",
          formMode: FormMode.Edit,
        },
        resolve: {
          shiftDetail: ShiftService,
        },
      },
    ],
  },
  {
    path: "personnels",
    data: {
      breadcrumb: "??????????",
    },
    children: [
      {
        path: "",
        component: PersonnelListComponent,
        data: {
          breadcrumb: null,
        },
      },
      {
        path: "new",
        component: PersonnelFormComponent,
        data: {
          breadcrumb: "?????????? ????????",
          formMode: FormMode.New,
        },
      },
      {
        path: "edit/:personnelId",
        component: PersonnelFormComponent,
        data: {
          breadcrumb: "???????????? ??????????",
          formMode: FormMode.Edit,
        },
        resolve: {
          personnelDetail: PersonnelService,
        },
      },
    ],
  },
  {
    path: "productInstances",
    data: {
      breadcrumb: "?????????????? ???????????? ??????????",
    },
    children: [
      {
        path: "",
        component: ProductInstanceListComponent,
        data: {
          breadcrumb: null,
        },
      },
    ],
  },
  {
    path: "productInstanceHistories",
    data: {
      breadcrumb: "?????????????? ??????????",
    },
    children: [
      {
        path: "",
        component: ProductHistoryListComponent,
        data: {
          breadcrumb: null,
        },
      },
    ],
  },
  {
    path: "damageds",
    data: {
      breadcrumb: "????????????",
    },
    children: [
      {
        path: "",
        component: DamagedListComponent,
        data: {
          breadcrumb: null,
        },
      },
    ],
  },
  {
    path: "stops",
    data: {
      breadcrumb: "????????????",
    },
    children: [
      {
        path: "",
        component: StopListComponent,
        data: {
          breadcrumb: null,
        },
      },
    ],
  },
];
