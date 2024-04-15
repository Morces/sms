import CryptoJS from "crypto-js";

const KEY = "38627766-0439-46a8-9d22-fc144e7c7b83";

// Encryption function
const encryptData = (data, key) => {
  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    key
  ).toString();

  return encryptedData;
};

// Decryption function
const decryptData = (encryptedData, key) => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, key);

  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  return decryptedData;
};

// Store encrypted data in sessionStorage

const storeEncryptedData = (keyName, data) => {
  const encryptionKey = KEY;

  const encryptedData = encryptData(data, encryptionKey);

  sessionStorage.setItem("sms" + keyName, encryptedData);
};

// Retrieve and decrypt data from sessionStorage

const getDecryptedData = (keyName) => {
  const encryptionKey = KEY;

  const encryptedData = sessionStorage.getItem("sms" + keyName);

  if (encryptedData) {
    const decryptedData = decryptData(encryptedData, encryptionKey);

    return decryptedData;
  }
  return null;
};

const clearEncryptedData = (keyName) => {
  if (keyName === "*") sessionStorage.clear();
  else sessionStorage.removeItem("sms" + keyName);
};

export { storeEncryptedData, getDecryptedData, clearEncryptedData };
