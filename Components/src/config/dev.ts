import { getExploreName } from "../utils/platform";

export const devConfig = {
  apiKey: "",
  apiSecret: "",
  meetingNumber: "",
  name: `${getExploreName()}-${Math.floor(Math.random() * 1000)}`,
  passcode: "zoom",
  email: `${getExploreName()}-${Math.floor(Math.random() * 1000)}@zoom.us`,
  role: 0,
  signature: "",
  customerKey: "",
  webEndpoint: "zoom.us"
};
