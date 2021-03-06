import { AuthService } from "./../../../auth/services/auth.service";
import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { ApiError } from "shared/models";
import { SnackBarService } from "../snack-bar.service";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root",
})
export class ApiErrorHandlerService {
  private showToast(error: Error): void {}
  private navigateToErrorPage(error: Error): void {}

  constructor(
    private snackBarService: SnackBarService,
    private router: Router
  ) {}

  handleError(error: any, options: any) {
    if (error instanceof ApiError) {
      this.snackBarService.showWarringMessage(error.message);
    }
    if (error instanceof HttpErrorResponse) {
      switch (error.error.StatusCode) {
        case 400:
        case 8: {
          localStorage.removeItem("access_token");
          localStorage.removeItem("exp");
          this.router.navigate(["/auth"]);
        }
        case 7: {
          this.snackBarService.showWarringMessage(error.error.Message);
        }
        case 404: {
        }
        default:
          throw new Error("خطا در برقراری ارتباط با سرور");
      }
    }
    throw new Error(error);
  }
}
