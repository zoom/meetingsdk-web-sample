import hmacSHA256 from "crypto-js/hmac-sha256";
import encBase64 from "crypto-js/enc-base64";
import { Base64 } from "js-base64";

interface generateSignatureProps {
  apiKey: string,
  apiSecret: string,
  meetingNumber: string,
  role: string | number,
  success?: Function,
  error?: Function,
}

export function generateSignature(props: generateSignatureProps
) {
  let signature = "";
  const { apiKey,
    apiSecret,
    meetingNumber,
    role } = props;
  try {
    const timestamp = new Date().getTime() - 30000;
    const msg = Base64.encode(apiKey + meetingNumber + timestamp + role);
    const hash = hmacSHA256(msg, apiSecret);
    signature = Base64.encodeURI(
      `${apiKey}.${meetingNumber}.${timestamp}.${role}.${encBase64.stringify(
        hash
      )}`
    );
    if (props?.success) {
      props.success(signature);
    }
  } catch (e) {
    console.error(e);
  }
  return signature;
}

export function isShallowEqual(objA: any, objB: any) {
  if (objA === objB) {
    return true;
  }

  if (!objA || !objB) {
    return false;
  }

  const aKeys = Object.keys(objA);
  const bKeys = Object.keys(objB);
  const len = aKeys.length;

  if (bKeys.length !== len) {
    return false;
  }

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < len; i++) {
    const key = aKeys[i];

    if (
      objA[key] !== objB[key] ||
      !Object.prototype.hasOwnProperty.call(objB, key)
    ) {
      return false;
    }
  }

  return true;
}
