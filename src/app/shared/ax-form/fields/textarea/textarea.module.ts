import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormlyModule } from "@ngx-formly/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormlyNzFormFieldModule } from "../../field-wrappers/form-field/form-field.module";
import { NzInputModule } from "ng-zorro-antd/input";

import { FormlyFieldTextArea } from "./textarea.type";

@NgModule({
  declarations: [FormlyFieldTextArea],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,

    FormlyNzFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: "textarea",
          component: FormlyFieldTextArea,
          wrappers: ["form-field"],
        },
      ],
    }),
  ],
})
export class FormlyNzTextAreaModule {}
