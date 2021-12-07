import { notification } from "antd";

export const notificationMessage = (
  type = "info",
  message = "message",
  description = "description"
) => {
  notification[type]({
    message,
    description,
  });
};
