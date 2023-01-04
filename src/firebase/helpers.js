import { getDoc } from "firebase/firestore";

export const getDataByRef = (ref) =>
  getDoc(ref)
    .then((data) => {
      if (data.exists()) {
        console.log("Document data helper:", data.data());
        return data.data();
      } else {
        throw "No such document!";
      }
    })
    .catch((e) => {
      console.error(e);
    });
