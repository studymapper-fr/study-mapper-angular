import { Injectable } from "@angular/core";
import { Notyf } from "notyf";

const options = {
  duration: 2000,
  ripple: true,
  dismissible: true,
  className: "custom-notification",
  position: {
    x: "right",
    y: "top",
  },
};

const RESPONSE_TYPES = {
  success: "Success!",
};

@Injectable()
export class NotificationService {
  public notyf: any;

  constructor() {
    this.notyf = new Notyf();
  }

  showSuccess(successObject: any) {
    const { status, message } = successObject;
    const formattedText = `<b>${RESPONSE_TYPES["success"]}</b> <br/> ${message}`;
    this.notyf.success({
      message: formattedText,
      ...options,
      background:
        "#2cb270" /* color shade `beanstalk`, refer to theming/theme.scss */,
    });
  }

  showError(errorObject: any) {
    const { status, statusText, error } = errorObject;
    const formattedText = `<b>Status </b> - ${status} <br/> ${error.message}`;
    this.notyf.error({
      message: formattedText,
      ...options,
      background:
        "#e65c65" /* color shade `mandy`, refer to theming/theme.scss */,
    });
  }
}
